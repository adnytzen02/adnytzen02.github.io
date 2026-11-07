// 代購分帳：自動抓主清單裡標了「@朋友」的商品，依人加總；可直接編輯、勾選、臨時加購
import { store } from '../store.js';
import { $, esc, icon, yen, twd, num, toast, snapshotNumbers, countUp } from '../ui.js';
import { kpi, pageHead, emptyState } from './components.js';
import { bindItemActions } from './item-actions.js';
import { openForm } from './item-form.js';

// 已收款金額：新版記錄金額；舊版只記 true（視為收齊當時的總額）
function paidAmount(state, f) {
  const v = state.settings.paidFriends[f.name];
  if (typeof v === 'number') return v;
  return v ? f.total : 0;
}

// 臨時加購：開新增表單，預設幫這位朋友買、已經買到
export function addExtra(friend = '') {
  openForm(null, { buyFor: friend, purchased: true, mode: 'extra' });
}

// 依朋友整理：已買（要收錢）與待買（還沒買到）
function byFriend(state, sum) {
  const map = new Map();
  for (const item of state.items) {
    if (!item.buyFor) continue;
    if (!map.has(item.buyFor)) map.set(item.buyFor, { name: item.buyFor, bought: [], pending: [], total: 0, refund: 0, pendingEst: 0 });
    const f = map.get(item.buyFor);
    const a = sum.byItem.get(item.id);
    if (item.purchased) {
      // 金額＝退稅後的實際成本（不能退稅的就是店頭支付金額）
      f.bought.push({ item, amount: a.net, refund: a.refund, pay: a.pay });
      f.total += a.net;
      f.refund += a.refund;
    } else {
      f.pending.push({ item, amount: a.net });
      f.pendingEst += a.net;
    }
  }
  return [...map.values()].sort((a, b) => b.total - a.total || a.name.localeCompare(b.name, 'zh-Hant'));
}

// 給朋友的文字明細
function message(f, rate) {
  const lines = [`【代購明細】${f.name}`];
  f.bought.forEach(({ item, amount }, i) => {
    lines.push(`${i + 1}. ${item.name}${item.qty > 1 ? ` ×${item.qty}` : ''}　${yen(amount)}`);
  });
  lines.push(`合計 ${yen(f.total)}（約 NT$ ${num(f.total * rate)}，匯率 1 JPY = ${num(rate, 4)} TWD）`);
  if (f.refund) lines.push(`＊金額為扣除退稅後的實際成本（已扣退稅 ${yen(f.refund)}）`);
  if (f.paid > 0 && f.paid < f.total) lines.push(`已收 ${yen(f.paid)}，尚差 ${yen(f.total - f.paid)}`);
  if (f.pending.length) lines.push(`尚未買到：${f.pending.map(({ item }) => item.name).join('、')}`);
  return lines.join('\n');
}

// 一列商品：勾選框可改回待買／標記買到，另有編輯與刪除
function lineRow({ item, amount, refund, pay }, bought) {
  return `
  <li class="split-row ${bought ? '' : 'is-pending'}" data-id="${item.id}">
    <button type="button" class="check ${bought ? 'on' : ''}" data-act="toggle" role="checkbox" aria-checked="${bought}"
      aria-label="${bought ? '已買到' : '標記買到'}：${esc(item.name)}">${icon('check')}</button>
    <div class="split-main">
      <button type="button" class="split-name" data-act="open">${esc(item.name)}${item.qty > 1 ? ` <small>× ${item.qty}</small>` : ''}</button>
      <span class="split-at">${bought
        ? `${item.purchasedStore ? esc(item.purchasedStore) : '未記錄店家'}${refund ? ` · 付 ${yen(pay)}，扣退稅 ${yen(refund)}` : ''}`
        : `待買 · ${item.anyStore ? '不限店鋪' : item.stores.length ? esc(item.stores.join('、')) : '未選店鋪'}`}</span>
    </div>
    <span class="split-amt ${bought ? '' : 'muted'}">${bought ? '' : '約 '}${yen(amount)}</span>
    <div class="split-tools">
      <button type="button" class="icon-btn icon-btn-sm" data-act="edit" aria-label="編輯 ${esc(item.name)}" title="編輯">${icon('edit', 'sm')}</button>
      <button type="button" class="icon-btn icon-btn-sm icon-btn-danger" data-act="delete" aria-label="刪除 ${esc(item.name)}" title="刪除">${icon('delete', 'sm')}</button>
    </div>
  </li>`;
}

function friendCard(f, state, idx) {
  const { rate } = state.settings;
  const paid = f.paid;
  const full = f.total > 0 && paid >= f.total;
  const partial = paid > 0 && paid < f.total;
  let payState;
  if (full) payState = `<span class="badge badge-cyan">${icon('check_circle', 'sm')}已收齊 ${yen(paid)}</span>`;
  else if (partial) payState = `<span class="badge badge-warn">已收 ${yen(paid)}，尚差 ${yen(f.total - paid)}</span>`;
  else payState = f.total ? `<span class="badge badge-muted">尚未收款</span>` : '';
  return `
  <section class="card friend-card ${full ? 'is-paid' : ''}" data-friend="${esc(f.name)}" aria-labelledby="fr-${idx}">
    <header class="card-head">
      <div class="friend-title">
        <span class="friend-avatar" aria-hidden="true">${esc(f.name.slice(0, 1))}</span>
        <div>
          <h2 id="fr-${idx}" class="section-title-lg">@${esc(f.name)}</h2>
          <p class="muted small">已買 ${f.bought.length} 件${f.pending.length ? ` · 待買 ${f.pending.length} 件（約 ${yen(f.pendingEst)}）` : ''}</p>
        </div>
      </div>
      <div class="friend-total">
        <span class="k">應收</span>
        <strong>${yen(f.total)}</strong>
        <span class="s">≈ ${twd(f.total, rate)}</span>
      </div>
    </header>
    ${payState ? `<div class="pay-state">${payState}</div>` : ''}
    ${f.bought.length ? `<ul class="split-list">${f.bought.map((x) => lineRow(x, true)).join('')}</ul>` : '<p class="muted pad">還沒有買到的商品。</p>'}
    ${f.pending.length ? `<p class="split-sub">${icon('pending', 'sm')}還沒買到</p><ul class="split-list">${f.pending.map((x) => lineRow(x, false)).join('')}</ul>` : ''}
    <button type="button" class="btn btn-ghost btn-sm split-extra" data-extra>${icon('add_circle', 'sm')}臨時加購（幫 @${esc(f.name)} 加買）</button>
    <div class="friend-actions">
      <button type="button" class="btn ${full ? 'btn-ghost' : 'btn-gold'}" data-copy ${f.bought.length ? '' : 'disabled'}>${icon('content_copy')}複製明細</button>
      ${f.total ? (full
        ? `<button type="button" class="btn btn-ghost" data-unpaid>${icon('undo')}取消已收款</button>`
        : `<button type="button" class="btn btn-outline" data-paid>${icon('check_circle')}${partial ? `收齊差額 ${yen(f.total - paid)}` : `標記已收 ${yen(f.total)}`}</button>`) : ''}
      ${navigator.share ? `<button type="button" class="btn btn-ghost" data-share ${f.bought.length ? '' : 'disabled'}>${icon('share')}分享</button>` : ''}
    </div>
  </section>`;
}

function main({ state, sum }) {
  const friends = byFriend(state, sum);
  friends.forEach((f) => { f.paid = paidAmount(state, f); });
  const { rate } = state.settings;
  if (!friends.length) {
    return emptyState({
      title: '還沒有代購商品',
      text: '新增商品時在「幫誰買」填上朋友名字，或直接按「臨時加購」記下剛幫朋友買的東西，這裡就會自動依人加總、換算台幣。',
      actions: `<button type="button" class="btn btn-gold" data-extra-new>${icon('add_circle')}臨時加購</button>
                <a class="btn btn-ghost" href="#/list">${icon('shopping_bag')}回採買清單</a>`,
    });
  }
  const total = friends.reduce((s, f) => s + f.total, 0);
  const received = friends.reduce((s, f) => s + Math.min(f.paid, f.total), 0);
  const pendingItems = friends.reduce((s, f) => s + f.pending.length, 0);
  return `
  <div class="kpi-grid">
    ${kpi({ label: '代購總額（已買）', icon: 'payments', value: yen(total), foot: `<span>≈ ${twd(total, rate)}</span>` })}
    ${kpi({ label: '已收款', icon: 'check_circle', value: yen(received), foot: `<span>≈ ${twd(received, rate)}</span>`, tone: 'kpi-cyan' })}
    ${kpi({ label: '待收款', icon: 'pending', value: yen(total - received), foot: `<span>≈ ${twd(total - received, rate)}</span>` })}
    ${kpi({ label: '託買朋友', icon: 'group', value: friends.length, unit: ' 位', foot: `<span>${pendingItems ? `還有 ${pendingItems} 件待買` : '全部買齊'}</span>` })}
  </div>
  <div class="notice" role="note">${icon('info')}<p>金額依<strong>退稅後的實際成本</strong>計算，以目前匯率換算台幣。退稅為預估值，實際以出境查驗後的退款為準。收款後又加買，會自動顯示「尚差」金額。</p></div>
  <div class="friend-grid">${friends.map((f, i) => friendCard(f, state, i)).join('')}</div>`;
}

export function mount(root, c) {
  let ctx = c;
  root.innerHTML = `
    ${pageHead({
      eyebrow: 'PROXY LEDGER · 代購分帳',
      title: '代購分帳',
      sub: '主清單標了 @朋友 的商品會自動整理在這裡；可直接勾選、編輯，或臨時加購，回飯店或回國後一鍵複製明細傳給朋友。',
      actions: `<button type="button" class="btn btn-gold" data-extra-new>${icon('add_circle')}臨時加購</button>`,
    })}
    <div data-region="main">${main(ctx)}</div>`;
  const region = $('[data-region="main"]', root);

  const friendOf = (el) => {
    const f = byFriend(ctx.state, ctx.sum).find((x) => x.name === el.closest('[data-friend]')?.dataset.friend);
    if (f) f.paid = paidAmount(ctx.state, f);
    return f;
  };
  // 商品列的勾選、編輯、刪除、查看詳情沿用清單的共用操作
  bindItemActions(root);

  const setPaid = (name, amount) => store.updateSettings({ paidFriends: { ...ctx.state.settings.paidFriends, [name]: amount } });

  root.addEventListener('click', async (e) => {
    const t = e.target.closest('button');
    if (!t || t.closest('[data-id]')) return;
    if (t.matches('[data-extra-new]')) { addExtra(); return; }
    const f = friendOf(t);
    if (!f) return;
    if (t.matches('[data-extra]')) { addExtra(f.name); return; }
    if (t.matches('[data-paid]')) {
      setPaid(f.name, f.total);
      toast({ title: `@${f.name} 已收款`, message: `共 ${yen(f.total)}`, tone: 'muted', duration: 2500 });
      return;
    }
    if (t.matches('[data-unpaid]')) { setPaid(f.name, 0); return; }
    const text = message(f, ctx.state.settings.rate);
    if (t.matches('[data-copy]')) {
      try {
        await navigator.clipboard.writeText(text);
        toast({ title: `已複製 @${f.name} 的明細`, message: '貼到 LINE 或訊息傳給朋友即可。', tone: 'muted', duration: 3000 });
      } catch {
        toast({ title: '無法複製', message: '瀏覽器不允許存取剪貼簿。', tone: 'error' });
      }
    } else if (t.matches('[data-share]')) {
      try { await navigator.share({ title: `代購明細：${f.name}`, text }); } catch { /* 使用者取消 */ }
    }
  });

  return {
    update(next) {
      ctx = next;
      const a = document.activeElement;
      const fr = a?.closest?.('[data-friend]')?.dataset.friend;
      const row = a?.closest?.('[data-id]');
      let sel = null;
      if (fr && row) sel = `[data-id="${row.dataset.id}"] [data-act="${a.dataset.act}"]`;
      else if (fr) {
        const key = ['data-paid', 'data-unpaid', 'data-copy', 'data-share', 'data-extra'].find((k) => a.hasAttribute(k));
        // 收款按鈕切換後，焦點落在對應的另一顆按鈕
        const alt = { 'data-paid': '[data-unpaid], [data-paid]', 'data-unpaid': '[data-paid], [data-unpaid]' }[key];
        sel = `[data-friend="${CSS.escape(fr)}"] :is(${alt ?? `[${key}]`})`;
      }
      const before = snapshotNumbers(region, '.kpi-value');
      region.innerHTML = main(ctx);
      countUp(region, '.kpi-value', before);
      if (sel) $(sel, region)?.focus({ preventScroll: true });
    },
  };
}
