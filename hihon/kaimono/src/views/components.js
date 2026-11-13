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
  if (!item.store) return `<span class="badge badge-muted">未選店鋪</span>`;
  return `<span class="badge badge-warn">差 ${yen(a.group.shortfall)} 達標</span>`;
}

// 卡片上的店鋪標籤：已買顯示購買店家；未買顯示主選店＋備選數
function storeTag(item) {
  if (item.purchased && item.purchasedStore) {
    return `<span class="tag tag-store" title="在 ${esc(item.purchasedStore)} 買到">${icon('storefront', 'sm')}<span class="tag-text">${esc(item.purchasedStore)}</span></span>`;
  }
  if (item.anyStore) return `<span class="tag tag-store">${icon('compare_arrows', 'sm')}<span class="tag-text">不限店鋪</span></span>`;
  if (!item.stores.length) return '<span class="tag tag-store tag-empty">未選店鋪</span>';
  const more = item.stores.length - 1;
  return `<span class="tag tag-store" title="${esc(item.stores.join('、'))}">${icon('storefront', 'sm')}<span class="tag-text">${esc(item.stores[0])}</span>${more ? `<span class="tag-more">+${more}</span>` : ''}</span>`;
}

export function itemCard(item, a, rate, layout = 'grid') {
  const pr = priorityOf(item.priority);
  const title = item.brand ? `${item.brand}｜${item.name}` : item.name;
  return `
  <article class="card item-card ${item.purchased ? 'is-done' : ''} layout-${layout}" data-id="${item.id}">
    <div class="item-top">
      ${storeTag(item)}
      <span class="tag tag-prio p${pr.value}" title="${pr.label}"><span aria-hidden="true">${pr.stars}</span><span>${pr.label}</span></span>
      <button type="button" class="check ${item.purchased ? 'on' : ''}" data-act="toggle"
        role="checkbox" aria-checked="${item.purchased}" aria-label="已買：${esc(item.name)}">${icon('check')}</button>
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
      ${item.buyFor ? `<span class="who-tag">@${esc(item.buyFor)}</span>` : ''}
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
    <p class="kpi-value" data-count-key="${label}">${value}${unit ? `<small>${unit}</small>` : ''}</p>
    ${bar}
    ${foot ? `<div class="kpi-foot">${foot}</div>` : ''}
  </section>`;
}

// subShort（選填）：手機寬度改顯示的短版說明，桌機仍顯示完整的 sub
export function pageHead({ eyebrow, title, sub, subShort = '', actions = '' }) {
  return `
  <header class="page-head">
    <div>
      <p class="eyebrow">${icon('auto_awesome', 'sm')}${eyebrow}</p>
      <h1 class="page-title">${title}</h1>
      ${sub ? `<p class="page-sub">${subShort ? `<span class="sub-full">${sub}</span><span class="sub-short">${subShort}</span>` : sub}</p>` : ''}
    </div>
    ${actions ? `<div class="page-actions">${actions}</div>` : ''}
  </header>`;
}

// 長頁面的快速跳轉列（手機上黏在頁首下方）。items：[{ id: 區塊標題的 id, label }]
// 這個網站用 # 做換頁，所以不用 <a href="#...">（會被當成換頁），改用按鈕捲動
export function jumpNav(items) {
  return `
  <nav class="jump-nav" aria-label="本頁區塊" data-jump-nav>
    <div class="jump-track">
      ${items.map((it) => `<button type="button" class="jump-chip" data-jump="${it.id}">${it.label}</button>`).join('')}
    </div>
  </nav>`;
}

// 綁定跳轉列：點了捲到該區塊並把焦點移到標題；捲動時標示目前所在的區塊。回傳 refresh（區塊重繪後呼叫）與 destroy
export function bindJumpNav(root) {
  const nav = root.querySelector('[data-jump-nav]');
  if (!nav) return { refresh() {}, destroy() {} };
  const chips = [...nav.querySelectorAll('[data-jump]')];
  const target = (id) => root.querySelector(`#${CSS.escape(id)}`);
  const sectionOf = (h) => h?.closest('section, .pack-weights, .card') ?? h;
  const offset = () => (document.querySelector('.topbar')?.offsetHeight ?? 0) + nav.offsetHeight + 12;
  let current = '';
  const setCurrent = (id) => {
    if (id === current) return;
    current = id;
    chips.forEach((c) => {
      const on = c.dataset.jump === id;
      if (on) c.setAttribute('aria-current', 'true'); else c.removeAttribute('aria-current');
      // 只橫向捲動跳轉列本身，讓目前的標籤露出來（用 scrollIntoView 會打斷整頁正在進行的捲動）
      if (on) { const track = c.parentElement; track.scrollLeft = c.offsetLeft - (track.clientWidth - c.offsetWidth) / 2; }
    });
  };
  // 隱藏目前不存在的區塊（例如打包頁還沒有需要手提的商品）
  const refresh = () => chips.forEach((c) => { c.hidden = !target(c.dataset.jump); });
  // 目前所在區塊：最後一個頂端已經捲過跳轉列的區塊
  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const line = offset() + 4;
      let id = '';
      for (const c of chips) {
        if (c.hidden) continue;
        const el = sectionOf(target(c.dataset.jump));
        if (el && el.getBoundingClientRect().top <= line) id = c.dataset.jump;
      }
      setCurrent(id || chips.find((c) => !c.hidden)?.dataset.jump || '');
    });
  };
  nav.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-jump]');
    if (!chip) return;
    const h = target(chip.dataset.jump);
    if (!h) return;
    const el = sectionOf(h);
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollTo({ top: el.getBoundingClientRect().top + scrollY - offset(), behavior: reduce ? 'auto' : 'smooth' });
    if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1');
    h.focus({ preventScroll: true }); // 讓鍵盤、螢幕閱讀器使用者也跟著到該區塊
    setCurrent(chip.dataset.jump);
  });
  addEventListener('scroll', onScroll, { passive: true });
  refresh(); onScroll();
  return { refresh() { refresh(); onScroll(); }, destroy() { removeEventListener('scroll', onScroll); } };
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
