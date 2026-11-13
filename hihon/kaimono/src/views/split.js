// 代購分帳：自動抓主清單裡標了「@朋友」的商品，依人加總；可直接編輯、勾選、臨時加購
import { store } from '../store.js';
import { $, esc, icon, yen, twd, num, fmtTime, toast, snapshotNumbers, countUp } from '../ui.js';
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
  // 代購費與鎖定匯率：應收＝商品金額＋代購費；台幣用鎖定的匯率（沒鎖就用目前匯率）
  const meta = state.settings.friendMeta || {};
  for (const f of map.values()) {
    const m = meta[f.name] || {};
    f.goods = f.total;
    f.feePct = Number(m.feePct) || 0;
    f.feeFixed = Number(m.feeFixed) || 0;
    f.fee = f.bought.length ? Math.round(f.goods * f.feePct / 100) + f.feeFixed : 0;
    f.total = f.goods + f.fee;
    f.rateLocked = Number(m.rate) > 0;
    f.rate = f.rateLocked ? Number(m.rate) : state.settings.rate;
    f.rateAt = m.rateAt || null;
  }
  return [...map.values()].sort((a, b) => b.total - a.total || a.name.localeCompare(b.name, 'zh-Hant'));
}

// 給朋友的文字明細
const feeDesc = (f) => [f.feePct ? `${num(f.feePct, f.feePct % 1 ? 1 : 0)}%` : '', f.feeFixed ? yen(f.feeFixed) : ''].filter(Boolean).join(' + ');

function message(f) {
  const rate = f.rate;
  const lines = [`【代購明細】${f.name}`];
  f.bought.forEach(({ item, amount }, i) => {
    lines.push(`${i + 1}. ${item.name}${item.qty > 1 ? ` ×${item.qty}` : ''}　${yen(amount)}`);
  });
  if (f.fee) lines.push(`代購費（${feeDesc(f)}）　${yen(f.fee)}`);
  lines.push(`合計 ${yen(f.total)}（約 NT$ ${num(f.total * rate)}，匯率 1 JPY = ${num(rate, 4)} TWD${f.rateLocked ? '，已鎖定' : ''}）`);
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
      aria-label="${bought ? '已買' : '標記已買'}：${esc(item.name)}">${icon('check')}</button>
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

// 這位朋友的收款記錄；舊資料只有總額、沒有逐筆記錄時，視為一筆沒有日期的收款
function payLogOf(state, f) {
  const log = state.settings.payLog?.[f.name];
  if (Array.isArray(log) && log.length) return log;
  const paid = paidAmount(state, f);
  return paid > 0 ? [{ amount: paid, at: null }] : [];
}

// 分次收款：已收的每一筆，加上「記錄收款」的輸入欄
function payBlock(f, state, idx, full) {
  if (!f.total && !f.paid) return '';
  const log = payLogOf(state, f);
  const left = Math.max(0, f.total - f.paid);
  return `
  <div class="pay-block">
    ${log.length ? `<p class="split-sub">${icon('payments', 'sm')}收款記錄</p>
    <ul class="pay-log">
      ${log.map((p, i) => `<li><span class="muted small">${p.at ? fmtTime(p.at) : '先前記錄'}</span><strong>${yen(p.amount)}</strong>
        <button type="button" class="icon-btn icon-btn-sm" data-pay-del="${i}" aria-label="刪除這筆收款 ${yen(p.amount)}" title="刪除這筆">${icon('close', 'sm')}</button></li>`).join('')}
    </ul>` : ''}
    ${full ? '' : `<form class="inline-form pay-form" data-pay-add novalidate>
      <label for="pay-${idx}">記錄收款</label>
      <div class="input-affix"><span aria-hidden="true">¥</span><input id="pay-${idx}" name="amount" type="number" inputmode="numeric" min="1" step="1" placeholder="尚差 ${num(left)}" autocomplete="off"></div>
      <button type="submit" class="btn btn-slate btn-sm">記錄</button>
    </form>`}
  </div>`;
}

const openMore = new Set(); // 記住哪幾位的「代購費與匯率」是展開的

// 代購費（百分比＋固定金額）與匯率鎖定
function moreBlock(f, state, idx) {
  if (!f.bought.length && !f.pending.length) return '';
  const cur = state.settings.rate;
  return `
  <details class="friend-more" data-more ${openMore.has(f.name) ? 'open' : ''}>
    <summary>${icon('tune', 'sm')}代購費與匯率<span class="muted small">${[f.fee ? `代購費 ${feeDesc(f)}` : '', f.rateLocked ? `匯率鎖定 ${num(f.rate, 4)}` : ''].filter(Boolean).join(' · ') || '未設定'}</span></summary>
    <form class="fee-form" data-fee novalidate>
      <div class="field"><label for="fee-pct-${idx}">代購費 %</label>
        <input id="fee-pct-${idx}" name="feePct" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="${f.feePct || ''}" placeholder="0"></div>
      <div class="field"><label for="fee-fixed-${idx}">固定金額（日圓）</label>
        <input id="fee-fixed-${idx}" name="feeFixed" type="number" inputmode="numeric" min="0" step="100" value="${f.feeFixed || ''}" placeholder="0"></div>
      <button type="submit" class="btn btn-slate btn-sm">${icon('save', 'sm')}儲存代購費</button>
    </form>
    <p class="hint">代購費＝已買商品金額 × 百分比＋固定金額，會加進應收金額與明細。</p>
    <div class="rate-lock">
      <p>${f.rateLocked
        ? `換算匯率已鎖定：<strong>1 JPY = ${num(f.rate, 4)} TWD</strong>${f.rateAt ? `<span class="muted small">（${fmtTime(f.rateAt)} 鎖定）</span>` : ''}`
        : `換算匯率跟隨目前匯率：<strong>1 JPY = ${num(cur, 4)} TWD</strong>`}</p>
      ${f.rateLocked
        ? `<button type="button" class="btn btn-ghost btn-sm" data-rate-unlock>${icon('undo', 'sm')}解除鎖定</button>`
        : `<button type="button" class="btn btn-ghost btn-sm" data-rate-lock>${icon('verified', 'sm')}鎖定目前匯率</button>`}
    </div>
    <p class="hint">鎖定後，這位朋友的台幣金額不會再隨匯率更新而變動。</p>
  </details>`;
}

// 唯讀分享連結：把這位朋友的明細編進網址（#/share/…），對方打開就能看，不需要後端
function shareLink(f, tripName) {
  const payload = {
    v: 1, n: f.name, t: tripName, r: f.rate, l: f.rateLocked ? 1 : 0, at: Date.now(),
    i: f.bought.map(({ item, amount }) => [item.name, item.qty, Math.round(amount)]),
    p: f.pending.map(({ item }) => item.name),
    g: Math.round(f.goods), f: f.fee, fd: f.fee ? feeDesc(f) : '', rf: Math.round(f.refund), pd: Math.round(f.paid),
  };
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let bin = '';
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  const code = btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return `${location.href.split('#')[0]}#/share/${code}`;
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
        <span class="s">≈ ${twd(f.total, f.rate)}${f.rateLocked ? ' · 匯率已鎖定' : ''}</span>
        ${payState ? `<span class="pay-state">${payState}</span>` : ''}
      </div>
    </header>
    ${f.bought.length ? `<ul class="split-list">${f.bought.map((x) => lineRow(x, true)).join('')}</ul>` : '<p class="muted pad">還沒有已買的商品。</p>'}
    ${f.pending.length ? `<p class="split-sub">${icon('pending', 'sm')}待買</p><ul class="split-list">${f.pending.map((x) => lineRow(x, false)).join('')}</ul>` : ''}
    ${f.fee ? `<p class="fee-row"><span>${icon('percent', 'sm')}代購費（${feeDesc(f)}）</span><strong>${yen(f.fee)}</strong></p>` : ''}
    ${payBlock(f, state, idx, full)}
    ${moreBlock(f, state, idx)}
    <button type="button" class="btn btn-ghost btn-sm split-extra" data-extra>${icon('add_circle', 'sm')}幫 @${esc(f.name)} 加購</button>
    ${f.bought.length || f.total ? `<div class="friend-actions">
      ${f.bought.length ? `<button type="button" class="btn ${full ? 'btn-ghost' : 'btn-gold'}" data-copy>${icon('content_copy')}複製明細</button>` : ''}
      ${f.total ? (full
        ? `<button type="button" class="btn btn-ghost" data-unpaid>${icon('undo')}取消已收款</button>`
        : `<button type="button" class="btn btn-outline" data-paid>${icon('check_circle')}${partial ? `收齊差額 ${yen(f.total - paid)}` : `標記已收 ${yen(f.total)}`}</button>`) : ''}
      ${f.bought.length ? `<button type="button" class="btn btn-ghost" data-link>${icon('share')}複製分享連結</button>` : ''}
      ${navigator.share && f.bought.length ? `<button type="button" class="btn btn-ghost" data-share>${icon('share')}分享文字</button>` : ''}
    </div>` : ''}
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
  // 台幣合計：每位朋友用自己的匯率（可能已鎖定）
  const nt = (pick) => `NT$ ${num(friends.reduce((s, f) => s + pick(f) * f.rate, 0))}`;
  const pendingItems = friends.reduce((s, f) => s + f.pending.length, 0);
  return `
  <div class="kpi-grid" role="group" aria-label="代購統計">
    ${kpi({ label: '代購總額（已買）', icon: 'payments', value: yen(total), foot: `<span>≈ ${nt((f) => f.total)}</span>` })}
    ${kpi({ label: '已收款', icon: 'check_circle', value: yen(received), foot: `<span>≈ ${nt((f) => Math.min(f.paid, f.total))}</span>`, tone: 'kpi-cyan' })}
    ${kpi({ label: '待收款', icon: 'pending', value: yen(total - received), foot: `<span>≈ ${nt((f) => f.total - Math.min(f.paid, f.total))}</span>` })}
    ${kpi({ label: '委託的朋友', icon: 'group', value: friends.length, unit: ' 位', foot: `<span>${pendingItems ? `還有 ${pendingItems} 件待買` : '全部買齊'}</span>` })}
  </div>
  <div class="notice" role="note">${icon('info')}<p>金額依<strong>退稅後的實際成本</strong>計算，以目前匯率換算台幣（已鎖定匯率的朋友除外）。</p>
    <details class="notice-more"><summary>了解計算方式</summary><p>退稅為預估值，實際以出境查驗後的退款為準。收款後又加買，會自動顯示「尚差」金額。</p></details></div>
  <div class="friend-grid">${friends.map((f, i) => friendCard(f, state, i)).join('')}</div>`;
}

// 還有款項沒收齊的朋友人數（導覽列的待辦數字用）
export function unpaidFriendCount(state, sum) {
  return byFriend(state, sum).filter((f) => f.total > 0 && paidAmount(state, f) < f.total).length;
}

export function mount(root, c) {
  let ctx = c;
  root.innerHTML = `
    ${pageHead({
      eyebrow: `PROXY LEDGER · ${esc(store.state.settings.tripName)}`,
      title: '代購分帳',
      sub: '主清單標了 @朋友 的商品會自動整理在這裡；可直接勾選、編輯，或臨時加購，回飯店或回國後一鍵複製明細傳給朋友。',
      subShort: '標了 @朋友 的商品會整理在這裡，買完一鍵複製明細傳給朋友。',
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

  // 收款以逐筆記錄為準，總額（paidFriends）跟著加總，舊功能與備份檔都相容
  const saveLog = (name, log) => store.updateSettings({
    payLog: { ...ctx.state.settings.payLog, [name]: log },
    paidFriends: { ...ctx.state.settings.paidFriends, [name]: log.reduce((t, p) => t + p.amount, 0) },
  });
  const addPayment = (f, amount) => saveLog(f.name, [...payLogOf(ctx.state, f), { amount, at: Date.now() }]);
  const saveMeta = (name, patch) => store.updateSettings({
    friendMeta: { ...ctx.state.settings.friendMeta, [name]: { ...ctx.state.settings.friendMeta?.[name], ...patch } },
  });

  root.addEventListener('click', async (e) => {
    const t = e.target.closest('button');
    if (!t || t.closest('[data-id]')) return;
    if (t.matches('[data-extra-new]')) { addExtra(); return; }
    const f = friendOf(t);
    if (!f) return;
    if (t.matches('[data-extra]')) { addExtra(f.name); return; }
    if (t.matches('[data-paid]')) {
      addPayment(f, Math.max(0, f.total - f.paid)); // 補上差額
      toast({ title: `@${f.name} 已收齊`, message: `共 ${yen(f.total)}`, tone: 'muted', duration: 2500 });
      return;
    }
    if (t.matches('[data-unpaid]')) { saveLog(f.name, []); return; }
    if (t.matches('[data-rate-lock]')) {
      saveMeta(f.name, { rate: ctx.state.settings.rate, rateAt: Date.now() });
      toast({ title: `已鎖定 @${f.name} 的匯率`, message: `1 JPY = ${num(ctx.state.settings.rate, 4)} TWD`, tone: 'muted', duration: 3000 });
      return;
    }
    if (t.matches('[data-rate-unlock]')) {
      saveMeta(f.name, { rate: 0, rateAt: null });
      toast({ title: `@${f.name} 改回跟隨目前匯率`, tone: 'muted', duration: 3000 });
      return;
    }
    if (t.matches('[data-link]')) {
      const url = shareLink(f, ctx.state.settings.tripName);
      try {
        await navigator.clipboard.writeText(url);
        toast({ title: `已複製 @${f.name} 的分享連結`, message: '對方打開連結就能看到這份明細（唯讀，內容是現在這一刻的快照）。', tone: 'muted', duration: 4000 });
      } catch {
        if (navigator.share) { try { await navigator.share({ title: `代購明細：${f.name}`, url }); } catch { /* 使用者取消 */ } }
        else toast({ title: '無法複製連結', message: '瀏覽器不允許存取剪貼簿。', tone: 'error' });
      }
      return;
    }
    if (t.dataset.payDel !== undefined) {
      const log = payLogOf(ctx.state, f).filter((_, i) => i !== Number(t.dataset.payDel));
      saveLog(f.name, log);
      toast({ title: '已刪除一筆收款', tone: 'muted', duration: 2500 });
      return;
    }
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

  // details 的 toggle 不會冒泡，用捕獲階段記住展開狀態
  root.addEventListener('toggle', (e) => {
    if (!e.target.matches?.('[data-more]')) return;
    const name = e.target.closest('[data-friend]')?.dataset.friend;
    if (e.target.open) openMore.add(name); else openMore.delete(name);
  }, true);

  root.addEventListener('submit', (e) => {
    const feeForm = e.target.closest('[data-fee]');
    if (feeForm) {
      e.preventDefault();
      const f = friendOf(feeForm);
      if (!f) return;
      const pct = Math.min(100, Math.max(0, Number(feeForm.elements.feePct.value) || 0));
      const fixed = Math.max(0, Math.round(Number(feeForm.elements.feeFixed.value) || 0));
      const name = f.name;
      saveMeta(name, { feePct: pct, feeFixed: fixed });
      toast({ title: `@${name} 的代購費已更新`, message: pct || fixed ? [pct ? `${pct}%` : '', fixed ? yen(fixed) : ''].filter(Boolean).join(' + ') : '不收代購費', tone: 'muted', duration: 3000 });
      region.querySelector(`[data-friend="${CSS.escape(name)}"] [data-fee] button`)?.focus({ preventScroll: true });
      return;
    }
    const form = e.target.closest('[data-pay-add]');
    if (!form) return;
    e.preventDefault();
    const f = friendOf(form);
    const amount = Math.round(Number(form.elements.amount.value));
    if (!f) return;
    if (!(amount > 0)) {
      toast({ title: '請輸入收款金額', message: '輸入這次收到的日圓金額，例如 10000。', tone: 'error' });
      form.elements.amount.focus();
      return;
    }
    const name = f.name;
    const left = f.total - f.paid - amount;
    addPayment(f, amount);
    toast({ title: `已記錄 @${name} 付 ${yen(amount)}`, message: left > 0 ? `尚差 ${yen(left)}` : left < 0 ? `多收 ${yen(-left)}` : '已收齊', tone: 'muted', duration: 3000 });
    region.querySelector(`[data-friend="${CSS.escape(name)}"] :is([name="amount"], [data-unpaid])`)?.focus({ preventScroll: true });
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
        const key = ['data-paid', 'data-unpaid', 'data-copy', 'data-share', 'data-link', 'data-extra', 'data-rate-lock', 'data-rate-unlock'].find((k) => a.hasAttribute(k));
        // 收款按鈕切換後，焦點落在對應的另一顆按鈕
        const alt = { 'data-paid': '[data-unpaid], [data-paid]', 'data-unpaid': '[data-paid], [data-unpaid]', 'data-rate-lock': '[data-rate-unlock]', 'data-rate-unlock': '[data-rate-lock]' }[key];
        sel = `[data-friend="${CSS.escape(fr)}"] :is(${alt ?? `[${key}]`})`;
      }
      const before = snapshotNumbers(region, '.kpi-value');
      region.innerHTML = main(ctx);
      countUp(region, '.kpi-value', before);
      if (sel) $(sel, region)?.focus({ preventScroll: true });
    },
  };
}
