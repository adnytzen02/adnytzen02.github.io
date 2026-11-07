// 採買清單「店鋪」視角：每家店一張卡片（顯示湊單進度），點開以彈窗顯示該店的採買清單
import { store } from '../store.js';
import { itemMoney, dayKey, TAX_FREE_MIN } from '../calc.js';
import { normStore, similarStorePairs, pairKey } from '../storeMatch.js';
import { storeInfo, ANY_STORE } from '../storeCatalog.js';
import { createDialog, openDialog, closeDialog, esc, icon, yen, twd, toast } from '../ui.js';
import { storeNotes } from './store-picker.js';
import { bindItemActions } from './item-actions.js';

const NONE = '__none__';
const ANY = '__any__';
const UNKNOWN = '__unknown__';

// 把商品分到各店：未買的出現在每一家候選店；已買的只出現在實際購買的那家
export function buildStoreGroups(items) {
  const groups = new Map();
  const add = (key, name, item, role) => {
    if (!groups.has(key)) groups.set(key, { key, name, rows: [] });
    groups.get(key).rows.push({ item, role });
  };
  for (const item of items) {
    if (item.purchased) {
      const s = item.purchasedStore;
      add(s ? normStore(s) : UNKNOWN, s || '已買（未記錄店家）', item, 'bought');
    } else if (item.anyStore) add(ANY, ANY_STORE, item, 'any');
    else if (!item.stores.length) add(NONE, '未指定店鋪', item, 'none');
    else item.stores.forEach((s, i) => add(normStore(s), s, item, i === 0 ? 'main' : 'backup'));
  }
  return [...groups.values()];
}

// 某家店今天已買的未稅金額（勾選前後比較，判斷是不是剛好跨過免稅門檻）
export function storeTodayExcl(items, settings, storeName) {
  const g = buildStoreGroups(items).find((x) => x.key === normStore(storeName));
  return g ? groupStats(g, settings).todayExcl : 0;
}

// 一家店的湊單數字：今天在這家已買（未稅）、清單待買（未稅）
function groupStats(g, settings) {
  const today = dayKey(Date.now());
  let todayExcl = 0; let otherDaysExcl = 0; let pendingExcl = 0; let pendingCount = 0; let boughtCount = 0;
  for (const { item } of g.rows) {
    const excl = itemMoney(item, settings).lineExcl;
    if (item.purchased) {
      boughtCount += 1;
      if (!item.taxFree) continue;
      if (item.purchasedAt && dayKey(item.purchasedAt) === today) todayExcl += excl;
      else otherDaysExcl += excl;
    } else {
      pendingCount += 1;
      if (item.taxFree) pendingExcl += excl;
    }
  }
  return { todayExcl, otherDaysExcl, pendingExcl, pendingCount, boughtCount };
}

// 店鋪卡片上的湊單狀態與進度條
function statusHtml(st, info, special) {
  if (special) return { status: '', bar: '' };
  if (info.noTaxFree) return { status: `<span class="sg-plan">${icon('block', 'sm')}此店不辦免稅</span>`, bar: '' };
  if (info.dutyFree) return { status: `<span class="sg-plan">${icon('flight_takeoff', 'sm')}出境區免稅店，售價已不含稅</span>`, bar: '' };
  const reached = st.todayExcl >= TAX_FREE_MIN;
  const withPending = st.todayExcl + st.pendingExcl;
  // 清單裡這家店的商品都不辦免稅（例如已標「不辦免稅」），也還沒買：不顯示門檻
  if (!st.todayExcl && !st.pendingExcl) {
    return { status: st.pendingCount ? `<span class="sg-plan">${icon('info', 'sm')}清單裡沒有要辦免稅的商品</span>` : '', bar: '' };
  }
  // 行前規劃（今天在這家還沒買）：重點是「清單合計」與「全買能不能免稅」，不顯示一排 ¥0
  if (!st.todayExcl && st.pendingExcl) {
    const ok = st.pendingExcl >= TAX_FREE_MIN;
    const plan = `<span class="sg-now">清單合計 <strong>${yen(st.pendingExcl)}</strong><small>（未稅）</small></span>${ok
      ? `<span class="sg-plan ok">${icon('verified', 'sm')}全買可免稅</span>`
      : `<span class="sg-plan">還差 ${yen(TAX_FREE_MIN - st.pendingExcl)} 才能免稅</span>`}`;
    const planBar = `<div class="sg-bar is-plan" role="img" aria-label="清單待買未稅 ${yen(st.pendingExcl)}，免稅門檻 ${yen(TAX_FREE_MIN)}${ok ? '，全買可達標' : ''}">
      <span class="seg-later" style="--w:${Math.min(100, (st.pendingExcl / TAX_FREE_MIN) * 100)}%"></span>
    </div>`;
    return { status: plan, bar: planBar };
  }
  let status = reached
    ? `<span class="sg-ok">${icon('verified', 'sm')}今天已達免稅（未稅 ${yen(st.todayExcl)}）</span>`
    : `<span class="sg-now">今天已買 <strong>${yen(st.todayExcl)}</strong>（差 <strong>${yen(TAX_FREE_MIN - st.todayExcl)}</strong> 免稅）</span>`;
  if (st.pendingExcl && !reached) {
    status += withPending >= TAX_FREE_MIN
      ? '<span class="sg-plan ok">清單全買可達標</span>'
      : `<span class="sg-plan">清單全買仍差 ${yen(TAX_FREE_MIN - withPending)}</span>`;
  }
  const bar = `<div class="sg-bar" role="img" aria-label="今天未稅 ${yen(st.todayExcl)}，清單待買 ${yen(st.pendingExcl)}，免稅門檻 ${yen(TAX_FREE_MIN)}">
    <span class="seg-paid" style="--w:${Math.min(100, (st.todayExcl / TAX_FREE_MIN) * 100)}%"></span>
    <span class="seg-later" style="--w:${Math.max(0, Math.min(100 - (st.todayExcl / TAX_FREE_MIN) * 100, (st.pendingExcl / TAX_FREE_MIN) * 100))}%"></span>
  </div>`;
  return { status, bar };
}

const groupIcon = (special) => icon(special === ANY ? 'compare_arrows' : special ? 'help' : 'storefront');
const countText = (st) => [st.pendingCount ? `待買 ${st.pendingCount}` : '', st.boughtCount ? `已買 ${st.boughtCount}` : ''].filter(Boolean).join(' · ');

// 店鋪卡片：整張可點，開啟該店的採買清單彈窗
function storeCard(g) {
  const { st, info, special } = g;
  const { status, bar } = statusHtml(st, info, special);
  const preview = g.rows.filter((r) => !r.item.purchased).slice(0, 3).map((r) => esc(r.item.name));
  const more = st.pendingCount - preview.length;
  return `
  <article class="card sg ${st.pendingCount ? '' : 'is-clear'}" data-group="${esc(g.key)}">
    <div class="sg-head">
      <h3 class="sg-heading">
        <button type="button" class="sg-toggle card-link-sg" data-sg-open aria-haspopup="dialog">
          <span class="sg-icon">${groupIcon(special)}</span>
          <span class="sg-title">
            <span class="sg-name">${esc(g.name)}</span>
            <span class="sg-count">${countText(st)}</span>
          </span>
          <span class="sg-chevron" aria-hidden="true">${icon('chevron_right')}</span>
        </button>
      </h3>
      ${status ? `<div class="sg-status">${status}</div>` : ''}
      ${bar}
      ${preview.length ? `<p class="sg-preview">${icon('shopping_bag', 'sm')}<span>${preview.join('、')}${more > 0 ? ` 等 ${st.pendingCount} 件` : ''}</span></p>` : `<p class="sg-preview muted">${icon('check_circle', 'sm')}<span>這家店的清單已買齊</span></p>`}
      ${special || !info.couponUrl ? '' : `<div class="sg-actions">
        <a class="btn btn-xs btn-gold" href="${esc(info.couponUrl)}" target="_blank" rel="noopener">${icon('local_offer', 'sm')}開啟優惠券<span class="sr-only">（${esc(g.name)}，另開新視窗）</span></a>
      </div>`}
    </div>
  </article>`;
}

// 下一個優惠券門檻提示（例：唐吉訶德未稅滿 ¥10,000 再折 5%）
function couponTip(info, st) {
  const tiers = (info.coupons ?? []).filter((c) => !c.categories).sort((a, b) => a.min - b.min);
  if (!tiers.length) return '';
  const next = tiers.find((c) => st.todayExcl < c.min);
  const got = [...tiers].reverse().find((c) => st.todayExcl >= c.min);
  if (!next) return `<p class="tip tip-info">${icon('local_offer', 'sm')}<span>今天已達最高優惠門檻，結帳前出示優惠券可再折 ${got.pct}%。</span></p>`;
  return `<p class="tip">${icon('local_offer', 'sm')}<span>${got ? `已可用 ${got.pct}% 券；` : ''}今天再買未稅 ${yen(next.min - st.todayExcl)}，可用 ${next.pct}% 優惠券${st.todayExcl + st.pendingExcl >= next.min ? '（清單全買就達到）' : ''}。</span></p>`;
}

function row({ item, role }, g, settings, rate) {
  const m = itemMoney(item, settings);
  const others = item.stores.filter((s) => normStore(s) !== g.key);
  const meta = [];
  if (item.qty > 1) meta.push(`× ${item.qty}`);
  if (item.buyFor) meta.push(`<span class="who-tag">@${esc(item.buyFor)}</span>`);
  if (role === 'backup') meta.push('<span class="role-tag">備選</span>');
  if (!item.purchased && others.length) meta.push(`<span class="alt-stores">也可在：${others.map(esc).join('、')}</span>`);
  if (!item.taxFree) meta.push('<span class="muted">不辦免稅</span>');
  // 已買的商品取消勾選不需指定店家；未買的在這家勾選就記錄為這家買到
  const at = item.purchased || g.key === ANY || g.key === NONE || g.key === UNKNOWN ? '' : ` data-at="${esc(g.name)}"`;
  return `
  <li class="sg-row ${item.purchased ? 'is-done' : ''}" data-id="${item.id}">
    <button type="button" class="check ${item.purchased ? 'on' : ''}" data-act="toggle"${at}
      role="checkbox" aria-checked="${item.purchased}" aria-label="${item.purchased ? '已入手' : `在${esc(g.name)}買到`}：${esc(item.name)}">${icon('check')}</button>
    <div class="sg-main">
      <button type="button" class="sg-name-btn" data-act="open">${esc(item.name)}</button>
      ${meta.length ? `<p class="sg-meta">${meta.join('<span aria-hidden="true">·</span>')}</p>` : ''}
    </div>
    <p class="sg-price"><span>${yen(m.pay)}</span><small>≈ ${twd(m.pay, rate)}</small></p>
  </li>`;
}

// 依目前的篩選整理出各店資料（卡片與彈窗共用）
export function groupModel(state, filterFn) {
  const { settings } = state;
  const items = state.items.filter(filterFn);
  const groups = buildStoreGroups(items).map((g) => {
    const special = [ANY, NONE, UNKNOWN].includes(g.key) ? g.key : null;
    return { ...g, special, st: groupStats(g, settings), info: special ? {} : storeInfo(g.name, settings.storeMeta) };
  });
  // 有待買的店排前面（待買多的優先）；全部買完的店與特殊群組排後面
  return groups.sort((a, b) => (a.special ? 1 : 0) - (b.special ? 1 : 0)
    || (b.st.pendingCount > 0) - (a.st.pendingCount > 0)
    || b.st.pendingCount - a.st.pendingCount
    || a.name.localeCompare(b.name, 'zh-Hant'));
}

export function storeView({ state }, filterFn) {
  const { settings } = state;
  const groups = groupModel(state, filterFn);

  const pairs = similarStorePairs(state.items.flatMap((i) => [...i.stores, i.purchasedStore]), settings.ignoredStorePairs);
  const merge = pairs.length ? `<div class="merge-list" role="region" aria-label="可能是同一家店">${pairs.map(([a, b]) => `
    <div class="notice notice-warn merge-notice" data-a="${esc(a)}" data-b="${esc(b)}">
      ${icon('storefront')}
      <p><strong>「${esc(a)}」和「${esc(b)}」是同一家店嗎？</strong><br>店名不同會分開計算免稅門檻，合併後才會正確加總。</p>
      <div class="btn-row merge-actions">
        <button type="button" class="btn btn-sm btn-ghost" data-merge="a">合併為「${esc(a)}」</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="b">合併為「${esc(b)}」</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="no">不是同一家</button>
      </div>
    </div>`).join('')}</div>` : '';

  if (!groups.length) {
    return `${merge}<div class="card empty empty-sm"><p class="empty-text">沒有符合條件的商品。</p>
      <button type="button" class="btn btn-ghost" data-reset-filter>${icon('filter_alt_off')}清除篩選</button></div>`;
  }

  return `${merge}
  <p class="result-count" role="status">${groups.filter((g) => !g.special).length} 家店 · 點店鋪卡片打開該店的採買清單，邊拿邊勾選</p>
  <div class="item-grid sg-grid">${groups.map(storeCard).join('')}</div>`;
}

// 彈窗內容：一家店的採買清單
function sheetBody(g, settings, rate) {
  if (!g) {
    return `<div class="dlg-shell sheet-shell">
      <header class="dlg-head"><h2 id="sheet-title" class="dlg-title">這家店沒有商品了</h2>
      <button type="button" class="icon-btn dlg-close" aria-label="關閉">${icon('close')}</button></header>
      <div class="dlg-scroll"><p class="muted">商品可能已被刪除、改到其他店，或不符合目前的篩選條件。</p></div></div>`;
  }
  const { st, info, special } = g;
  const { status, bar } = statusHtml(st, info, special);
  const undated = !special && g.rows.filter((r) => !r.item.purchased && r.item.taxFree && !r.item.planDate).length >= 2;
  const rows = [...g.rows].sort((a, b) => Number(a.item.purchased) - Number(b.item.purchased));
  return `
  <div class="dlg-shell sheet-shell" data-group="${esc(g.key)}">
    <header class="dlg-head">
      <p class="eyebrow">${groupIcon(special)}${special ? '採買清單' : 'STORE LIST · 店鋪採買清單'}</p>
      <h2 id="sheet-title" class="dlg-title">${esc(g.name)}</h2>
      <p class="sg-count">${countText(st)}</p>
      ${status ? `<div class="sg-status">${status}</div>` : ''}
      ${bar}
      <button type="button" class="icon-btn dlg-close" aria-label="關閉 ${esc(g.name)} 採買清單">${icon('close')}</button>
    </header>
    <div class="dlg-scroll" tabindex="0" role="region" aria-label="${esc(g.name)} 的商品">
      ${special ? '' : storeNotes(info)}
      ${special ? '' : couponTip(info, st)}
      ${st.otherDaysExcl ? `<p class="tip tip-info">${icon('event', 'sm')}<span>其他天在這家買的 ${yen(st.otherDaysExcl)}（未稅）另外計算，不併入今天的門檻。</span></p>` : ''}
      ${undated ? `<p class="tip tip-info">${icon('event', 'sm')}<span>同店商品分不同天買時，請在商品的「更多設定」填預計日期，退稅才不會高估。</span></p>` : ''}
      ${g.key === ANY ? `<p class="tip tip-info">${icon('compare_arrows', 'sm')}<span>勾選時會詢問在哪家買到，以便累計該店的免稅門檻。</span></p>` : ''}
      <ul class="sg-rows">${rows.map((r) => row(r, g, settings, rate)).join('')}</ul>
      ${special ? '' : `<a class="link-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(g.name)}" target="_blank" rel="noopener">${icon('map', 'sm')}在 Google 地圖找附近分店<span class="sr-only">（另開新視窗）</span></a>`}
    </div>
    ${special ? '' : `<footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-sg-meta="${esc(g.name)}">${icon('tune', 'sm')}${info.couponUrl ? '優惠券設定' : '加入優惠券連結'}</button>
      ${info.couponUrl ? `<a class="btn btn-gold grow" href="${esc(info.couponUrl)}" target="_blank" rel="noopener">${icon('local_offer', 'sm')}開啟優惠券<span class="sr-only">（另開新視窗）</span></a>` : ''}
    </footer>`}
  </div>`;
}

// 開啟店鋪採買清單彈窗；資料變動時即時重繪
export function openStoreSheet(key, filterFn, { onMeta }) {
  const find = () => groupModel(store.state, filterFn).find((g) => g.key === key);
  const render = () => sheetBody(find(), store.state.settings, store.state.settings.rate);
  const dlg = createDialog('dlg-drawer dlg-sheet', render(), 'sheet-title');

  const rerender = () => {
    const scroll = dlg.querySelector('.dlg-scroll')?.scrollTop ?? 0;
    const a = document.activeElement;
    const id = a?.closest?.('[data-id]')?.dataset.id;
    const act = a?.dataset?.act;
    dlg.querySelector('.dlg-shell').outerHTML = render();
    dlg.querySelector('.dlg-scroll').scrollTop = scroll;
    if (id && act) dlg.querySelector(`[data-id="${id}"] [data-act="${act}"]`)?.focus({ preventScroll: true });
  };
  const unsub = store.subscribe(rerender);

  dlg.addEventListener('click', (e) => {
    if (e.target.closest('.dlg-close')) { closeDialog(dlg); return; }
    const meta = e.target.closest('[data-sg-meta]');
    if (meta) onMeta(meta.dataset.sgMeta);
  });
  bindItemActions(dlg);
  openDialog(dlg, {
    onClose: () => {
      unsub();
      // 清單在彈窗開著時可能已重繪，焦點改回同一家店的新卡片
      requestAnimationFrame(() => document.querySelector(`#view [data-group="${CSS.escape(key)}"] [data-sg-open]`)?.focus({ preventScroll: true }));
    },
  });
}

// 店鋪區塊的互動：開啟店鋪清單、合併相似店名、店鋪設定
export function bindStoreView(root, { onMeta, filterFn }) {
  root.addEventListener('click', (e) => {
    const t = e.target.closest('[data-sg-open], [data-merge], [data-sg-meta]');
    if (!t) return;
    if (t.matches('[data-sg-open]')) {
      openStoreSheet(t.closest('[data-group]').dataset.group, filterFn, { onMeta });
    } else if (t.matches('[data-sg-meta]')) {
      onMeta(t.dataset.sgMeta);
    } else if (t.matches('[data-merge]')) {
      const box = t.closest('.merge-notice');
      const { a, b } = box.dataset;
      if (t.dataset.merge === 'no') {
        store.updateSettings({ ignoredStorePairs: [...store.state.settings.ignoredStorePairs, pairKey(a, b)] });
        toast({ title: '已記住：兩家是不同的店', tone: 'muted', duration: 2500 });
      } else {
        const keep = t.dataset.merge === 'a' ? a : b;
        const drop = keep === a ? b : a;
        const snapshot = store.state.items.map((i) => ({ id: i.id, stores: i.stores, purchasedStore: i.purchasedStore }));
        store.renameStore(drop, keep);
        toast({
          title: `已合併為「${keep}」`, message: '免稅門檻已重新計算。', actionText: '復原', tone: 'muted',
          onAction: () => snapshot.forEach((x) => store.updateItem(x.id, { stores: x.stores, purchasedStore: x.purchasedStore })),
        });
      }
    }
  });
}
