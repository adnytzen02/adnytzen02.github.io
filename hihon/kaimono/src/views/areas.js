// 購買地區：依地區 → 店家分組，顯示免稅門檻進度
import { store } from '../store.js';
import { TAX_FREE_MIN } from '../calc.js';
import { similarStorePairs, pairKey } from '../storeMatch.js';
import { esc, icon, yen, twd, fmtDate, progress, toast } from '../ui.js';
import { kpi, pageHead, emptyState } from './components.js';
import { bindItemActions } from './item-actions.js';

let areaFilter = 'all';

const mapUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

function buildAreas(groups) {
  const areas = new Map();
  for (const g of groups.values()) {
    const name = g.area || '未指定地區';
    if (!areas.has(name)) areas.set(name, { name, groups: [], pay: 0, pending: 0, count: 0 });
    const a = areas.get(name);
    a.groups.push(g);
    a.pay += g.totalPay;
    a.count += g.items.length;
    a.pending += g.items.filter((i) => !i.purchased).length;
  }
  for (const a of areas.values()) {
    a.groups.sort((x, y) => (x.store ? 0 : 1) - (y.store ? 0 : 1) || y.totalPay - x.totalPay);
  }
  return [...areas.values()].sort((x, y) => (x.name === '未指定地區') - (y.name === '未指定地區') || y.pay - x.pay);
}

function storeCard(g, byItem, rate) {
  const solo = !g.store;
  const title = solo ? '未填店家' : g.store;
  let status = '';
  if (!solo && g.hasTaxFreeItems) {
    status = g.eligible
      ? `<span class="badge badge-cyan">${icon('verified', 'sm')}已達免稅門檻</span>`
      : `<span class="badge badge-warn">差 ${yen(g.shortfall)} 達標</span>`;
  } else if (!solo) {
    status = '<span class="badge badge-muted">不辦免稅</span>';
  }
  const refund = g.items.reduce((s, i) => s + byItem.get(i.id).refund, 0);
  const tip = !solo && g.hasTaxFreeItems && !g.eligible && g.shortfall <= 2000
    ? `<p class="tip">${icon('lightbulb', 'sm')}再買未稅 ${yen(g.shortfall)} 的商品，這家店就能退稅。</p>` : '';

  return `
  <article class="card store-card ${g.eligible ? 'is-ok' : ''}">
    <header class="store-head">
      <span class="store-icon">${icon(solo ? 'help' : 'storefront')}</span>
      <div class="store-title">
        <h3>${esc(title)}</h3>
        <p>${g.date ? `${icon('event', 'sm')}${fmtDate(g.date)} · ` : ''}${g.items.length} 件 · 合計 ${yen(g.totalPay)}</p>
      </div>
      ${status}
    </header>
    ${!solo && g.hasTaxFreeItems ? `
      <div class="store-progress">
        <div class="row-between"><span>免稅未稅合計</span><span><strong>${yen(g.eligibleExcl)}</strong> / ${yen(TAX_FREE_MIN)}</span></div>
        ${progress(g.progress, { label: `${title} 免稅門檻進度`, tone: g.eligible ? 'cyan' : 'gold' })}
        ${refund ? `<p class="row-between muted"><span>預估退稅</span><span>${yen(refund)}（≈ ${twd(refund, rate)}）</span></p>` : ''}
      </div>` : ''}
    ${tip}
    ${g.undatedMerge ? `<p class="tip tip-info">${icon('event', 'sm')}<span>同店商品分不同天買時，請填預計日期。目前 ${g.items.filter((i) => i.taxFree).length} 件視為同一天合併計算${g.mergeNeeded ? '，<strong>分開買可能就不到免稅門檻</strong>' : ''}。</span></p>` : ''}
    <ul class="mini-list">
      ${g.items.map((i) => {
        const a = byItem.get(i.id);
        return `<li class="mini-item ${i.purchased ? 'is-done' : ''}" data-id="${i.id}">
          <button type="button" class="check ${i.purchased ? 'on' : ''}" data-act="toggle" role="checkbox" aria-checked="${i.purchased}" aria-label="已入手：${esc(i.name)}">${icon('check')}</button>
          <button type="button" class="mini-name" data-act="open">${esc(i.name)}${i.qty > 1 ? ` <small>× ${i.qty}</small>` : ''}</button>
          <span class="mini-price">${yen(a.pay)}</span>
        </li>`;
      }).join('')}
    </ul>
    ${!solo ? `<a class="link-btn" href="${mapUrl(`${g.store} ${g.area || ''}`.trim())}" target="_blank" rel="noopener">${icon('map', 'sm')}在 Google 地圖開啟<span class="sr-only">（${esc(title)}，另開新視窗）</span></a>` : ''}
  </article>`;
}

// 相似店名：可能是同一家，讓使用者決定要不要合併
function mergeNotices(state) {
  const pairs = similarStorePairs(state.items.map((i) => i.store), state.settings.ignoredStorePairs);
  if (!pairs.length) return '';
  return `<div class="merge-list" role="region" aria-label="可能是同一家店">${pairs.map(([a, b]) => `
    <div class="notice notice-warn merge-notice" data-a="${esc(a)}" data-b="${esc(b)}">
      ${icon('storefront')}
      <p><strong>「${esc(a)}」和「${esc(b)}」是同一家店嗎？</strong><br>
      店名不同會分開計算免稅門檻。若是同一家，合併後才會正確加總。</p>
      <div class="btn-row merge-actions">
        <button type="button" class="btn btn-sm btn-ghost" data-merge="a">合併為「${esc(a)}」</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="b">合併為「${esc(b)}」</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="no">不是同一家</button>
      </div>
    </div>`).join('')}</div>`;
}

function content(ctx) {
  const { state, sum, rate } = ctx;
  if (!state.items.length) {
    return emptyState({
      title: '還沒有任何地區',
      text: '新增商品時填寫地區與店家，這裡就會自動整理出逛街路線與各店免稅進度。',
      actions: `<a class="btn btn-gold" href="#/list">${icon('temple_buddhist')}前往清單</a>`,
    });
  }
  const areas = buildAreas(sum.groups);
  if (areaFilter !== 'all' && !areas.some((a) => a.name === areaFilter)) areaFilter = 'all';
  const shown = areas.filter((a) => areaFilter === 'all' || a.name === areaFilter);
  const storeCount = [...sum.groups.values()].filter((g) => g.store).length;

  return `
  <div class="kpi-grid">
    ${kpi({ label: '巡禮地區', icon: 'travel_explore', value: areas.filter((a) => a.name !== '未指定地區').length, unit: ' 區', foot: `<span>${areas.map((a) => esc(a.name)).slice(0, 4).join(' / ')}${areas.length > 4 ? '…' : ''}</span>` })}
    ${kpi({ label: '店家', icon: 'storefront', value: storeCount, unit: ' 家', foot: `<span>${sum.pendingCount} 件待購</span><span>${sum.purchasedCount} 件已入手</span>` })}
    ${kpi({ label: '免稅達標', icon: 'price_check', value: sum.eligibleStores, unit: ` / ${sum.taxFreeStores} 家`, bar: progress(sum.taxFreeStores ? sum.eligibleStores / sum.taxFreeStores : 0, { label: '免稅達標店家比例', tone: 'cyan' }), tone: 'kpi-cyan' })}
    ${kpi({ label: '預估退稅', icon: 'savings', value: yen(sum.refund), foot: `<span>≈ ${twd(sum.refund, rate)}</span>` })}
  </div>

  <div class="card toolbar">
    <div class="chips" role="group" aria-label="依地區篩選">
      <button type="button" class="chip ${areaFilter === 'all' ? 'on' : ''}" data-area="all" aria-pressed="${areaFilter === 'all'}">${icon('public', 'sm')}全部</button>
      ${areas.map((a) => `<button type="button" class="chip ${areaFilter === a.name ? 'on' : ''}" data-area="${esc(a.name)}" aria-pressed="${areaFilter === a.name}">${esc(a.name)} (${a.count})</button>`).join('')}
    </div>
  </div>

  ${mergeNotices(state)}
  <div class="notice" role="note">${icon('info')}<p>免稅門檻以<strong>同一天、同一店家</strong>的未稅合計判斷。同店商品若填了不同的預計日期，會分開計算。</p></div>

  ${shown.map((a, idx) => `
    <section class="area-section" aria-labelledby="area-h-${idx}">
      <header class="area-head">
        <h2 id="area-h-${idx}" class="area-title">${icon('location_on')}${esc(a.name)}</h2>
        <p class="area-meta">${a.groups.filter((g) => g.store).length} 家店 · ${a.count} 件 · ${yen(a.pay)}</p>
      </header>
      <div class="store-grid">${a.groups.map((g) => storeCard(g, sum.byItem, rate)).join('')}</div>
    </section>`).join('')}`;
}

export function mount(root, c) {
  let ctx = c;
  root.innerHTML = `
    ${pageHead({
      eyebrow: 'SACRED REALMS · 商圈與店家',
      title: '日本巡禮購物地圖',
      sub: '依地區與店家自動整理待購清單，看清每家店離免稅門檻還差多少。',
    })}
    <div data-region="content">${content(ctx)}</div>`;
  const region = root.querySelector('[data-region="content"]');
  bindItemActions(root);

  root.addEventListener('click', (e) => {
    const mergeBtn = e.target.closest('[data-merge]');
    if (mergeBtn) {
      const box = mergeBtn.closest('.merge-notice');
      const { a, b } = box.dataset;
      const choice = mergeBtn.dataset.merge;
      if (choice === 'no') {
        store.updateSettings({ ignoredStorePairs: [...store.state.settings.ignoredStorePairs, pairKey(a, b)] });
        toast({ title: '已記住：兩家是不同的店', tone: 'muted', duration: 2500 });
      } else {
        const keep = choice === 'a' ? a : b;
        const drop = choice === 'a' ? b : a;
        const before = store.state.items.map((i) => ({ id: i.id, store: i.store }));
        store.renameStore(drop, keep);
        toast({
          title: `已合併為「${keep}」`, message: '免稅門檻已重新計算。', actionText: '復原', tone: 'muted',
          onAction: () => before.forEach((x) => { if (store.getItem(x.id)?.store !== x.store) store.updateItem(x.id, { store: x.store }); }),
        });
      }
      return;
    }
    const chip = e.target.closest('[data-area]');
    if (!chip) return;
    areaFilter = chip.dataset.area;
    region.innerHTML = content(ctx);
    region.querySelector(`[data-area="${CSS.escape(areaFilter)}"]`)?.focus();
  });

  return {
    update(next) {
      ctx = next;
      const active = document.activeElement;
      const li = active?.closest?.('[data-id]');
      const sel = li ? `[data-id="${li.dataset.id}"] [data-act="${active.dataset.act}"]` : null;
      region.innerHTML = content(ctx);
      if (sel) region.querySelector(sel)?.focus({ preventScroll: true });
    },
  };
}
