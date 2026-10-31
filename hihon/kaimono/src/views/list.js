// 購物聖庫：清單總覽、篩選、搜尋
import { store } from '../store.js';
import { CATEGORIES, categoryOf } from '../data.js';
import { $, $$, esc, icon, yen, twd, kg, num, progress, stackBar, download, toast } from '../ui.js';
import { itemCard, kpi, pageHead, emptyState } from './components.js';
import { bindItemActions } from './item-actions.js';
import { openForm } from './item-form.js';

// 篩選狀態保留在模組內，切頁回來仍記得
const filter = { cat: 'all', status: 'all', area: 'all', q: '', sort: 'new', layout: 'grid' };
try { filter.layout = localStorage.getItem('shopping-relics:layout') || 'grid'; } catch { /* 無痕模式 */ }

function applyFilter(items, byItem) {
  const q = filter.q.trim().toLowerCase();
  let list = items.filter((i) =>
    (filter.cat === 'all' || i.category === filter.cat)
    && (filter.status === 'all' || (filter.status === 'done' ? i.purchased : !i.purchased))
    && (filter.area === 'all' || (i.area || '未指定') === filter.area)
    && (!q || [i.name, i.nameJa, i.brand, i.store, i.area, i.note, i.jan].join(' ').toLowerCase().includes(q)));
  const sorters = {
    new: (a, b) => b.createdAt - a.createdAt,
    priority: (a, b) => b.priority - a.priority || b.createdAt - a.createdAt,
    price: (a, b) => byItem.get(b.id).pay - byItem.get(a.id).pay,
    area: (a, b) => (a.area || '~').localeCompare(b.area || '~', 'zh-Hant') || a.store.localeCompare(b.store, 'zh-Hant'),
  };
  list = [...list].sort(sorters[filter.sort]);
  // 已入手的排到後面
  return list.sort((a, b) => Number(a.purchased) - Number(b.purchased));
}

function kpis({ state, sum, rate }) {
  const { settings } = state;
  const done = sum.count ? sum.purchasedCount / sum.count : 0;
  return `
    ${kpi({
      label: '採購完成進度', icon: 'verified', value: sum.purchasedCount, unit: ` / ${sum.count} 件`,
      bar: progress(done, { label: '採購完成進度' }),
      foot: `<span>${sum.purchasedCount} 件已入手</span><span>${sum.pendingCount} 件待購</span>`,
    })}
    ${kpi({
      // 已花（實際）與全部買完（預估）分開顯示
      label: '已花費', icon: 'account_balance_wallet', value: yen(sum.paid), unit: ` / ${yen(settings.budget)}`,
      bar: stackBar([{ value: sum.paid, tone: 'paid' }, { value: sum.pending, tone: 'later' }], settings.budget,
        `預算 ${yen(settings.budget)}：已花 ${yen(sum.paid)}，待買 ${yen(sum.pending)}`),
      foot: `<span>全部買完 ${yen(sum.pay)}</span><span class="${sum.remaining < 0 ? 'text-danger' : ''}">${sum.remaining < 0 ? '將超支' : '買完剩'} ${yen(Math.abs(sum.remaining))}</span>`,
    })}
    ${kpi({
      label: '預估免稅退稅', icon: 'price_check', value: yen(sum.refund),
      foot: `<span>${sum.eligibleStores} / ${sum.taxFreeStores} 家店達門檻</span><span>≈ ${twd(sum.refund, rate)}</span>`,
      tone: 'kpi-cyan',
    })}
    ${kpi({
      label: '託運行李（目前）', icon: 'luggage', value: num(sum.totalCheckedNow, 1), unit: ` / ${settings.checkedLimit} kg`,
      bar: stackBar([{ value: settings.checkedBase, tone: 'base' }, { value: sum.weightCheckedNow, tone: 'paid' }, { value: sum.weightChecked - sum.weightCheckedNow, tone: 'later' }],
        settings.checkedLimit, `託運限重 ${settings.checkedLimit} 公斤：目前 ${num(sum.totalCheckedNow, 1)}，全部買完 ${num(sum.totalChecked, 1)}`),
      foot: `<span>全部買完 ${kg(sum.totalChecked)}</span><span>${sum.totalChecked > settings.checkedLimit ? '<b class="text-danger">買完會超重</b>' : `買完剩 ${kg(settings.checkedLimit - sum.totalChecked)}`}</span>`,
    })}`;
}

function toolbar(items) {
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, 0]));
  items.forEach((i) => { counts[i.category] = (counts[i.category] ?? 0) + 1; });
  const areas = [...new Set(items.map((i) => i.area || '未指定'))].sort((a, b) => a.localeCompare(b, 'zh-Hant'));
  if (filter.area !== 'all' && !areas.includes(filter.area)) filter.area = 'all';
  const cats = CATEGORIES.filter((c) => counts[c.id] > 0);
  if (filter.cat !== 'all' && !counts[filter.cat]) filter.cat = 'all';
  return `
  <div class="card toolbar">
    <div class="chips" role="group" aria-label="依分類篩選">
      <button type="button" class="chip ${filter.cat === 'all' ? 'on' : ''}" data-cat="all" aria-pressed="${filter.cat === 'all'}">${icon('diamond', 'sm')}全部 (${items.length})</button>
      ${cats.map((c) => `<button type="button" class="chip ${filter.cat === c.id ? 'on' : ''}" data-cat="${c.id}" aria-pressed="${filter.cat === c.id}">${icon(c.icon, 'sm')}${c.label} (${counts[c.id]})</button>`).join('')}
    </div>
    <div class="filters">
      <div class="search">
        <label for="f-q" class="sr-only">搜尋商品</label>
        ${icon('search')}
        <input id="f-q" type="search" placeholder="搜尋品名、品牌、店家…" value="${esc(filter.q)}" autocomplete="off">
      </div>
      <div class="select-wrap">
        <label for="f-status" class="sr-only">狀態</label>
        <select id="f-status">
          <option value="all">全部狀態</option>
          <option value="todo" ${filter.status === 'todo' ? 'selected' : ''}>待購買</option>
          <option value="done" ${filter.status === 'done' ? 'selected' : ''}>已入手</option>
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-area" class="sr-only">地區</label>
        <select id="f-area">
          <option value="all">全部地區</option>
          ${areas.map((a) => `<option ${filter.area === a ? 'selected' : ''}>${esc(a)}</option>`).join('')}
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-sort" class="sr-only">排序</label>
        <select id="f-sort">
          <option value="new">最新加入</option>
          <option value="priority" ${filter.sort === 'priority' ? 'selected' : ''}>渴望等級</option>
          <option value="price" ${filter.sort === 'price' ? 'selected' : ''}>價格高到低</option>
          <option value="area" ${filter.sort === 'area' ? 'selected' : ''}>地區與店家</option>
        </select>
      </div>
      <div class="seg" role="group" aria-label="顯示方式">
        <button type="button" class="icon-btn ${filter.layout === 'grid' ? 'on' : ''}" data-layout="grid" aria-pressed="${filter.layout === 'grid'}" aria-label="卡片顯示" title="卡片顯示">${icon('grid_view')}</button>
        <button type="button" class="icon-btn ${filter.layout === 'list' ? 'on' : ''}" data-layout="list" aria-pressed="${filter.layout === 'list'}" aria-label="列表顯示" title="列表顯示">${icon('view_list')}</button>
      </div>
    </div>
  </div>`;
}

function grid({ state, sum, rate }) {
  const list = applyFilter(state.items, sum.byItem);
  const status = `<p class="result-count" role="status">顯示 ${list.length} / ${state.items.length} 件</p>`;
  if (!list.length) {
    return `${status}<div class="card empty empty-sm"><p class="empty-text">沒有符合條件的商品。</p>
      <button type="button" class="btn btn-ghost" data-reset-filter>${icon('filter_alt_off')}清除篩選</button></div>`;
  }
  return `${status}<div class="item-grid layout-${filter.layout}">${list.map((i) => itemCard(i, sum.byItem.get(i.id), rate, filter.layout)).join('')}</div>`;
}

function exportCSV({ state, sum }) {
  const head = ['狀態', '品名', '日文名稱', '品牌', '分類', '數量', '地區', '店家', '預計日期', '店頭支付(JPY)', '預估退稅(JPY)', '實際成本(JPY)', '台幣(約)', '重量(kg)', '行李', 'JAN', '備註'];
  const lug = { checked: '託運', carry: '隨身', none: '不放行李' };
  const rows = state.items.map((i) => {
    const a = sum.byItem.get(i.id);
    return [i.purchased ? '已入手' : '待購', i.name, i.nameJa, i.brand, categoryOf(i.category).label, i.qty, i.area, i.store, i.planDate,
      a.pay, a.refund, a.net, Math.round(a.pay * state.settings.rate), a.weight, lug[i.luggage], i.jan, i.note];
  });
  const csv = [head, ...rows].map((r) => r.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
  // 加 BOM，Excel 開啟中文才不會亂碼
  download(`shopping-list-${new Date().toISOString().slice(0, 10)}.csv`, `﻿${csv}`, 'text/csv');
}

export function mount(root, c) {
  let ctx = c;
  const render = () => {
    const { state } = ctx;
    const hasItems = state.items.length > 0;
    const hasDemo = state.items.some((i) => i.demo);
    root.innerHTML = `
      ${pageHead({
        eyebrow: `AETHER WISHLIST · ${esc(state.settings.tripName)}`,
        title: '旅日必買願望清單',
        sub: '記下想買的寶物，即時換算台幣、試算免稅退稅，逛街時一眼看清還差什麼。',
        actions: hasItems ? `
          <button type="button" class="btn btn-ghost" data-export>${icon('download')}匯出 CSV</button>
          <button type="button" class="btn btn-gold" data-add>${icon('add_circle')}新增採購項目</button>` : '',
      })}
      ${hasDemo ? `<div class="notice notice-demo" role="note">${icon('info')}<p>目前清單含<strong>示範資料</strong>，價格為示意數字，不代表實際售價。</p>
        <button type="button" class="btn btn-sm btn-ghost" data-clear-demo>清除示範資料</button></div>` : ''}
      <div class="kpi-grid" data-region="kpi">${kpis(ctx)}</div>
      ${hasItems ? `<div data-region="toolbar">${toolbar(state.items)}</div><div data-region="grid">${grid(ctx)}</div>`
        : emptyState({
          title: '清單還是空的',
          text: '先把想買的第一件寶物記下來吧。也可以載入示範資料，看看整個流程怎麼運作。',
          actions: `<button type="button" class="btn btn-gold" data-add>${icon('add_circle')}新增第一件</button>
                    <button type="button" class="btn btn-ghost" data-demo>${icon('auto_awesome')}載入示範資料</button>`,
        })}`;
  };

  const refreshGrid = () => {
    const g = $('[data-region="grid"]', root);
    if (g) g.innerHTML = grid(ctx);
  };

  render();
  bindItemActions(root);

  root.addEventListener('click', (e) => {
    const t = e.target.closest('button');
    if (!t) return;
    if (t.matches('[data-add]')) openForm();
    else if (t.matches('[data-demo]')) { store.loadDemo(); toast({ title: '已載入示範資料', message: '價格為示意數字，可隨時清除。' }); }
    else if (t.matches('[data-clear-demo]')) { store.clearDemo(); toast({ title: '已清除示範資料', tone: 'muted', duration: 3000 }); }
    else if (t.matches('[data-export]')) exportCSV(ctx);
    else if (t.matches('[data-cat]')) {
      filter.cat = t.dataset.cat;
      $$('[data-cat]', root).forEach((b) => { b.classList.toggle('on', b === t); b.setAttribute('aria-pressed', b === t); });
      refreshGrid();
    } else if (t.matches('[data-layout]')) {
      filter.layout = t.dataset.layout;
      try { localStorage.setItem('shopping-relics:layout', filter.layout); } catch { /* 忽略 */ }
      $$('[data-layout]', root).forEach((b) => { b.classList.toggle('on', b === t); b.setAttribute('aria-pressed', b === t); });
      refreshGrid();
    } else if (t.matches('[data-reset-filter]')) {
      Object.assign(filter, { cat: 'all', status: 'all', area: 'all', q: '' });
      render();
    }
  });

  root.addEventListener('input', (e) => {
    if (e.target.id === 'f-q') { filter.q = e.target.value; refreshGrid(); }
  });
  root.addEventListener('change', (e) => {
    const map = { 'f-status': 'status', 'f-area': 'area', 'f-sort': 'sort' };
    if (map[e.target.id]) { filter[map[e.target.id]] = e.target.value; refreshGrid(); }
  });

  return {
    update(next) {
      ctx = next;
      const hadToolbar = Boolean($('[data-region="toolbar"]', root));
      const hasDemoBanner = Boolean($('.notice-demo', root));
      const needsFull = hadToolbar !== next.state.items.length > 0
        || hasDemoBanner !== next.state.items.some((i) => i.demo);
      if (needsFull) { render(); return; }
      // 只更新數字與卡片，避免搜尋框失去焦點
      $('[data-region="kpi"]', root).innerHTML = kpis(ctx);
      const tb = $('[data-region="toolbar"]', root);
      if (tb && !tb.contains(document.activeElement)) tb.innerHTML = toolbar(ctx.state.items);
      // 保留觸發按鈕的焦點（例如勾選已入手）
      const active = document.activeElement;
      const card = active?.closest?.('[data-id]');
      const sel = card ? `[data-id="${card.dataset.id}"] [data-act="${active.dataset.act}"]` : null;
      refreshGrid();
      if (sel) $(sel, root)?.focus({ preventScroll: true });
    },
  };
}
