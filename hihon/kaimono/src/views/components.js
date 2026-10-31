// 可重用的畫面片段
import { categoryOf, priorityOf } from '../data.js';
import { esc, icon, yen, twd, kg, fmtDate } from '../ui.js';

// 商品縮圖：有照片用照片（左上角加分類小圖示），沒有就用分類大圖示；分類名稱以 title 與螢幕閱讀器文字提供
export function thumb(item, size = '') {
  const cat = categoryOf(item.category);
  const extras = `<span class="sr-only">分類：${esc(cat.label)}</span>${item.demo ? '<span class="thumb-demo">示範</span>' : ''}<span class="thumb-qty">× ${item.qty}</span>`;
  if (item.image) {
    return `<div class="thumb ${size}" title="${esc(cat.label)}"><img src="${esc(item.image)}" alt="" loading="lazy" decoding="async"><span class="thumb-cat" aria-hidden="true">${icon(cat.icon, 'sm')}</span>${extras}</div>`;
  }
  return `<div class="thumb thumb-icon ${size} cat-${cat.id}" title="${esc(cat.label)}">${icon(cat.icon)}${extras}</div>`;
}

// 免稅狀態標籤
export function taxBadge(item, a) {
  if (!item.taxFree) return `<span class="badge badge-muted">不辦免稅</span>`;
  if (a.refundable) return `<span class="badge badge-cyan">${icon('verified', 'sm')}可退稅 ${yen(a.refund)}</span>`;
  if (!item.store) return `<span class="badge badge-muted">未填店家</span>`;
  return `<span class="badge badge-warn">差 ${yen(a.group.shortfall)} 達標</span>`;
}

export function itemCard(item, a, rate, layout = 'grid') {
  const pr = priorityOf(item.priority);
  const title = item.brand ? `${item.brand}｜${item.name}` : item.name;
  return `
  <article class="card item-card ${item.purchased ? 'is-done' : ''} layout-${layout}" data-id="${item.id}">
    <div class="item-top">
      ${item.store ? `<span class="tag tag-store" title="${esc(item.store)}">${icon('storefront', 'sm')}<span class="tag-text">${esc(item.store)}</span></span>` : '<span class="tag tag-store tag-empty">未填店家</span>'}
      <span class="tag tag-prio p${pr.value}" title="${pr.label}"><span aria-hidden="true">${pr.stars}</span><span>${pr.label}</span></span>
      <button type="button" class="check ${item.purchased ? 'on' : ''}" data-act="toggle"
        role="checkbox" aria-checked="${item.purchased}" aria-label="已入手：${esc(item.name)}">${icon('check')}</button>
    </div>
    <div class="item-body">
      ${thumb(item)}
      <div class="item-main">
        ${item.brand ? `<p class="item-brand">${esc(item.brand)}</p>` : ''}
        <h3 class="item-name"><button type="button" class="card-link" data-act="open" aria-label="查看詳情：${esc(title)}">${esc(item.name)}</button></h3>
        ${item.nameJa ? `<p class="item-ja" lang="ja">${esc(item.nameJa)}</p>` : ''}
        ${item.note ? `<p class="item-note">${icon('edit_note', 'sm')}${esc(item.note)}</p>` : ''}
      </div>
    </div>
    <div class="item-meta">
      ${taxBadge(item, a)}
      ${item.weightKg ? `<span class="meta-text">${icon('luggage', 'sm')}${kg(a.weight)}</span>` : ''}
      ${item.planDate ? `<span class="meta-text">${icon('event', 'sm')}${fmtDate(item.planDate)}</span>` : ''}
    </div>
    <div class="item-foot">
      <p class="price">
        <span class="price-yen">${yen(a.pay)}</span>
        <span class="price-twd">≈ ${twd(a.pay, rate)}</span>
      </p>
      <div class="item-actions">
        <button type="button" class="icon-btn" data-act="edit" aria-label="編輯 ${esc(item.name)}" title="編輯">${icon('edit')}</button>
        <button type="button" class="icon-btn" data-act="delete" aria-label="刪除 ${esc(item.name)}" title="刪除">${icon('delete')}</button>
      </div>
    </div>
  </article>`;
}

export function kpi({ label, icon: ic, value, unit = '', foot = '', bar = '', tone = '' }) {
  return `
  <section class="card kpi ${tone}">
    <div class="kpi-head"><h2 class="kpi-label">${label}</h2><span class="kpi-icon">${icon(ic)}</span></div>
    <p class="kpi-value">${value}${unit ? `<small>${unit}</small>` : ''}</p>
    ${bar}
    ${foot ? `<div class="kpi-foot">${foot}</div>` : ''}
  </section>`;
}

export function pageHead({ eyebrow, title, sub, actions = '' }) {
  return `
  <header class="page-head">
    <div>
      <p class="eyebrow">${icon('diamond', 'sm')}${eyebrow}</p>
      <h1 class="page-title">${title}</h1>
      ${sub ? `<p class="page-sub">${sub}</p>` : ''}
    </div>
    ${actions ? `<div class="page-actions">${actions}</div>` : ''}
  </header>`;
}

export function emptyState({ title, text, actions }) {
  return `
  <div class="card empty">
    <div class="empty-orb" aria-hidden="true">${icon('auto_awesome')}</div>
    <h2 class="empty-title">${title}</h2>
    <p class="empty-text">${text}</p>
    <div class="empty-actions">${actions}</div>
  </div>`;
}
