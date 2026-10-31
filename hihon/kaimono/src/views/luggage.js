// 行程行李：託運／隨身重量、入箱進度、提醒、打包清單
import { store } from '../store.js';
import { categoryOf } from '../data.js';
import { $, esc, icon, kg, num, progress, stackBar, toast } from '../ui.js';
import { kpi, pageHead, emptyState } from './components.js';
import { openDetail } from './item-detail.js';

const BAGS = {
  checked: { title: '託運行李箱', icon: 'luggage', limitKey: 'checkedLimit', baseKey: 'checkedBase' },
  carry: { title: '隨身登機行李', icon: 'backpack', limitKey: 'carryLimit', baseKey: 'carryBase' },
};

// 依商品屬性產生提醒
function warnings(items, sum, settings) {
  const w = [];
  const carryLiquidAll = items.filter((i) => i.luggage === 'carry' && i.liquid);
  const checkedBattery = items.filter((i) => i.luggage === 'checked' && i.battery);
  const fragileChecked = items.filter((i) => i.luggage === 'checked' && i.fragile);
  // 超重提醒分「目前已超重」與「全部買完才會超重」
  const overMsg = (label, now, all, limit) => {
    if (now > limit) w.push({ tone: 'danger', icon: 'error', title: `${label}目前已超重`, text: `已入手的商品加上基本重量為 ${kg(now)}，超過限重 ${kg(now - limit)}。可改放隨身、加購行李額度或寄送。` });
    else if (all > limit) w.push({ tone: 'warn', icon: 'warning', title: `${label}全部買完會超重`, text: `目前 ${kg(now)}，清單全部買完預估 ${kg(all)}，會超過限重 ${kg(all - limit)}。` });
  };
  overMsg('託運行李', sum.totalCheckedNow, sum.totalChecked, settings.checkedLimit);
  overMsg('隨身行李', sum.totalCarryNow, sum.totalCarry, settings.carryLimit);
  if (checkedBattery.length) w.push({ tone: 'danger', icon: 'battery_alert', title: '含鋰電池的商品放在託運', text: `${checkedBattery.map((i) => `「${esc(i.name)}」`).join('、')}：行動電源與備用鋰電池必須隨身攜帶；內建電池的電器請依航空公司規定。` });
  if (carryLiquidAll.length) w.push({ tone: 'warn', icon: 'water_drop', title: '隨身行李有液體', text: `${carryLiquidAll.map((i) => `「${esc(i.name)}」`).join('、')}：安檢前購買的液體，單瓶通常需在 100ml 以下；出境管制區內購買的另依規定封裝。` });
  if (fragileChecked.length) w.push({ tone: 'info', icon: 'wine_bar', title: '託運箱有易碎品', text: `${fragileChecked.length} 件易碎品，建議用氣泡袋包好，放在行李箱中央、四周用衣物填滿。` });
  return w;
}

function bagCard(type, items, sum, settings) {
  const bag = BAGS[type];
  const list = items.filter((i) => i.luggage === type);
  const goods = list.reduce((s, i) => s + i.weightKg * i.qty, 0);
  const goodsNow = list.filter((i) => i.purchased).reduce((s, i) => s + i.weightKg * i.qty, 0);
  const base = settings[bag.baseKey];
  const limit = settings[bag.limitKey];
  const total = base + goods; // 全部買完
  const now = base + goodsNow; // 目前實際
  const over = total > limit;
  const overNow = now > limit;
  return `
  <section class="card bag-card ${over ? 'is-over' : ''}" aria-labelledby="bag-${type}">
    <header class="card-head">
      <div class="bag-title">
        <span class="kpi-icon">${icon(bag.icon)}</span>
        <div><h2 id="bag-${type}" class="section-title-lg">${bag.title}</h2>
        <p class="muted small">限重 ${kg(limit)} · 基本重量 ${kg(base)}</p></div>
      </div>
      <p class="bag-left ${overNow ? 'text-danger' : ''}"><small>${overNow ? '目前超重' : '目前剩餘'}</small><strong>${overNow ? '+' : ''}${num(Math.abs(limit - now), 2)} kg</strong></p>
    </header>
    <div class="weight-bar">
      <div class="dual-stat">
        <div class="is-now"><span class="k">目前實際（已入手）</span><span class="v">${kg(now)}</span><span class="s">戰利品 ${kg(goodsNow)}</span></div>
        <div><span class="k">全部買完預估</span><span class="v ${over ? 'text-danger' : ''}">${kg(total)}</span><span class="s">${over ? `超重 ${kg(total - limit)}` : `剩 ${kg(limit - total)}`}</span></div>
      </div>
      ${stackBar([{ value: base, tone: 'base' }, { value: goodsNow, tone: 'paid' }, { value: goods - goodsNow, tone: 'later' }], limit,
        `${bag.title}限重 ${num(limit, 1)} 公斤：基本 ${num(base, 1)}、已入手 ${num(goodsNow, 2)}、待買 ${num(goods - goodsNow, 2)}`)}
      <p class="legend-inline small"><span><i class="dot dot-slate"></i>基本重量</span><span><i class="dot dot-gold"></i>已入手</span><span><i class="dot dot-later"></i>待買</span></p>
    </div>
    ${list.length ? `<ul class="pack-list">
      ${list.map((i) => `
        <li class="pack-item ${i.packed ? 'is-packed' : ''}" data-id="${i.id}">
          <button type="button" class="check ${i.packed ? 'on' : ''}" data-l="pack" role="checkbox" aria-checked="${i.packed}" aria-label="已裝箱：${esc(i.name)}">${icon('check')}</button>
          <div class="pack-main">
            <button type="button" class="pack-name" data-l="open">${esc(i.name)}${i.qty > 1 ? ` <small>× ${i.qty}</small>` : ''}</button>
            <p class="pack-meta">
              <span>${icon(categoryOf(i.category).icon, 'sm')}${i.weightKg ? kg(i.weightKg * i.qty) : '<span class="text-warn">未填重量</span>'}</span>
              ${i.purchased ? '' : '<span class="badge badge-muted">待購</span>'}
              ${i.fragile ? `<span class="badge badge-warn">${icon('wine_bar', 'sm')}易碎</span>` : ''}
              ${i.liquid ? `<span class="badge badge-cyan">${icon('water_drop', 'sm')}液體</span>` : ''}
              ${i.battery ? `<span class="badge badge-danger">${icon('battery_alert', 'sm')}鋰電池</span>` : ''}
            </p>
          </div>
          <button type="button" class="btn btn-ghost btn-xs" data-l="move" aria-label="把 ${esc(i.name)} 改放${type === 'checked' ? '隨身' : '託運'}">${icon('swap_horiz', 'sm')}改放${type === 'checked' ? '隨身' : '託運'}</button>
        </li>`).join('')}
    </ul>` : `<p class="muted pad">還沒有指派到${bag.title}的商品。</p>`}
  </section>`;
}

function packingCard(packing) {
  const done = packing.filter((p) => p.done).length;
  return `
  <section class="card packing-card" aria-labelledby="packing-title">
    <header class="card-head">
      <h2 id="packing-title" class="section-title">${icon('checklist', 'sm')}打包裝備清單</h2>
      <span class="badge badge-muted">${done} / ${packing.length} 備妥</span>
    </header>
    <ul class="todo-list">
      ${packing.map((p, idx) => `
        <li class="todo ${p.done ? 'is-done' : ''}">
          <label><input type="checkbox" data-p="toggle" data-idx="${idx}" ${p.done ? 'checked' : ''}><span>${esc(p.text)}</span></label>
          <button type="button" class="icon-btn icon-btn-sm" data-p="remove" data-idx="${idx}" aria-label="移除「${esc(p.text)}」">${icon('close', 'sm')}</button>
        </li>`).join('')}
    </ul>
    <form class="todo-add" data-p-add>
      <label for="todo-input" class="sr-only">新增打包項目</label>
      <input id="todo-input" placeholder="新增項目，例如：轉接頭" maxlength="40" autocomplete="off">
      <button type="submit" class="btn btn-slate btn-sm">${icon('add', 'sm')}新增</button>
    </form>
  </section>`;
}

function rulesCard() {
  return `
  <section class="card dark-card" aria-labelledby="lug-rules">
    <p class="eyebrow eyebrow-light">${icon('gavel', 'sm')}DEPARTURE CHECKLIST</p>
    <h2 id="lug-rules" class="section-title-lg">出境前的行李提醒</h2>
    <ul class="rule-cards">
      <li class="rule danger"><span class="rule-icon">${icon('priority_high')}</span>
        <div><strong>免稅商品先查驗、再託運</strong><p>2026/11/1 起的退稅新制，需在<strong>託運行李之前</strong>持護照與免稅商品到機台辦理查驗。打包時把免稅商品放在好拿出的位置。</p></div></li>
      <li class="rule warn"><span class="rule-icon">${icon('water_drop')}</span>
        <div><strong>液體與鋰電池</strong><p>隨身液體單瓶通常限 100ml 以下；行動電源與備用鋰電池只能隨身。實際限制以航空公司與機場公告為準。</p></div></li>
      <li class="rule ok"><span class="rule-icon">${icon('check')}</span>
        <div><strong>重物放底層、易碎放中央</strong><p>酒類、瓶裝保養品包好放靠近輪子的底部；易碎品放中央，四周用衣物緩衝。</p></div></li>
    </ul>
  </section>`;
}

function flightCard(settings) {
  return `
  <section class="card flight-card" aria-labelledby="flight-title">
    <h2 id="flight-title" class="section-title">${icon('flight_takeoff', 'sm')}航班與行李額度</h2>
    <form class="flight-form" data-flight>
      <div class="field span2">
        <label for="fl-note">航班備註</label>
        <input id="fl-note" name="flightNote" value="${esc(settings.flightNote)}" placeholder="例如：BR197 成田 → 桃園 11/20 14:30" maxlength="60">
      </div>
      <div class="field"><label for="fl-cl">託運限重 kg</label><input id="fl-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${settings.checkedLimit}"></div>
      <div class="field"><label for="fl-cb">託運基本重量 kg</label><input id="fl-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${settings.checkedBase}"></div>
      <div class="field"><label for="fl-pl">隨身限重 kg</label><input id="fl-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${settings.carryLimit}"></div>
      <div class="field"><label for="fl-pb">隨身基本重量 kg</label><input id="fl-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${settings.carryBase}"></div>
      <button type="submit" class="btn btn-slate span2">${icon('save', 'sm')}儲存行李設定</button>
    </form>
    <p class="hint">限重依你的航空公司與艙等填寫；基本重量是行李箱本身加衣物等。</p>
  </section>`;
}

// 重量指標：大字為目前實際，下方註明全部買完預估
function weightKpi(label, ic, now, all, base, goodsNow, goodsAll, limit, tone = '') {
  return kpi({
    label, icon: ic, value: num(now, 2), unit: ` / ${limit} kg`, tone,
    bar: stackBar([{ value: base, tone: 'base' }, { value: goodsNow, tone: 'paid' }, { value: goodsAll - goodsNow, tone: 'later' }], limit,
      `${label}：目前 ${num(now, 1)} 公斤，全部買完 ${num(all, 1)} 公斤，限重 ${limit}`),
    foot: `<span>全部買完 ${kg(all)}</span><span>${now > limit ? '<b class="text-danger">目前超重</b>' : all > limit ? '<b class="text-warn">買完會超重</b>' : `買完剩 ${kg(limit - all)}`}</span>`,
  });
}

function main(ctx) {
  const { state, sum } = ctx;
  const { settings, items } = state;
  const ws = warnings(items, sum, settings);
  const packRatio = sum.packableCount ? sum.packedCount / sum.packableCount : 0;
  return `
  <div class="kpi-grid">
    ${weightKpi('託運（目前）', 'luggage', sum.totalCheckedNow, sum.totalChecked, settings.checkedBase, sum.weightCheckedNow, sum.weightChecked, settings.checkedLimit)}
    ${weightKpi('隨身（目前）', 'backpack', sum.totalCarryNow, sum.totalCarry, settings.carryBase, sum.weightCarryNow, sum.weightCarry, settings.carryLimit, 'kpi-cyan')}
    ${kpi({ label: '戰利品入箱', icon: 'inventory_2', value: sum.packedCount, unit: ` / ${sum.packableCount} 件`,
      bar: progress(packRatio, { label: '入箱進度', tone: 'slate' }),
      foot: `<span>${sum.packableCount - sum.packedCount} 件待裝箱</span>` })}
    ${kpi({ label: '航班', icon: 'flight', value: settings.flightNote ? `<span class="kpi-text">${esc(settings.flightNote)}</span>` : '<span class="kpi-text muted">尚未填寫</span>',
      foot: '<span>可在右側「航班與行李額度」修改</span>' })}
  </div>
  ${ws.length ? `<div class="warn-list" role="region" aria-label="行李提醒">${ws.map((w) => `
    <div class="notice notice-${w.tone}">${icon(w.icon)}<p><strong>${w.title}</strong>　${w.text}</p></div>`).join('')}</div>` : ''}
  ${!items.length ? emptyState({
    title: '行李箱還是空的',
    text: '新增商品時填寫重量與「放在哪裡」，這裡就會幫你算總重量與打包進度。',
    actions: `<a class="btn btn-gold" href="#/list">${icon('temple_buddhist')}前往清單</a>`,
  }) : ''}
  <div class="luggage-layout">
    <div class="col">
      ${items.length ? bagCard('checked', items, sum, settings) + bagCard('carry', items, sum, settings) : ''}
      ${packingCard(state.packing)}
    </div>
    <div class="col">
      ${flightCard(settings)}
      ${rulesCard()}
    </div>
  </div>`;
}

export function mount(root, c) {
  let ctx = c;
  root.innerHTML = `
    ${pageHead({
      eyebrow: 'SACRED LOGISTICS · 行李與打包',
      title: '行李打包與託運配額',
      sub: '看清每個行李箱裝了多少戰利品、還剩多少額度，出發前不再手忙腳亂。',
    })}
    <div data-region="main">${main(ctx)}</div>`;
  const region = $('[data-region="main"]', root);

  const rerender = (focusSel) => {
    const scrollY = window.scrollY;
    region.innerHTML = main(ctx);
    window.scrollTo({ top: scrollY });
    if (focusSel) $(focusSel, region)?.focus({ preventScroll: true });
  };

  root.addEventListener('click', (e) => {
    const t = e.target.closest('[data-l], [data-p="remove"]');
    if (!t) return;
    if (t.dataset.p === 'remove') {
      const packing = [...store.state.packing];
      const [removed] = packing.splice(Number(t.dataset.idx), 1);
      store.setPacking(packing);
      $('#todo-input', root)?.focus();
      toast({ title: '已移除', message: esc(removed.text), tone: 'muted', duration: 2500 });
      return;
    }
    const id = t.closest('[data-id]')?.dataset.id;
    const item = store.getItem(id);
    if (!item) return;
    if (t.dataset.l === 'pack') store.updateItem(id, { packed: !item.packed });
    if (t.dataset.l === 'open') openDetail(id);
    if (t.dataset.l === 'move') {
      const to = item.luggage === 'checked' ? 'carry' : 'checked';
      store.updateItem(id, { luggage: to });
      toast({ title: `已改放${to === 'carry' ? '隨身' : '託運'}`, message: esc(item.name), tone: 'muted', duration: 2500 });
    }
  });

  root.addEventListener('change', (e) => {
    if (e.target.dataset.p === 'toggle') {
      const idx = Number(e.target.dataset.idx);
      store.setPacking(store.state.packing.map((p, i) => (i === idx ? { ...p, done: e.target.checked } : p)));
    }
  });

  root.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    if (f.matches('[data-p-add]')) {
      const input = f.querySelector('input');
      const text = input.value.trim();
      if (!text) return;
      store.setPacking([...store.state.packing, { text, done: false }]);
      $('#todo-input', root)?.focus();
    }
    if (f.matches('[data-flight]')) {
      const el = f.elements;
      const n = (x, fb) => (x.value === '' || Number.isNaN(Number(x.value)) ? fb : Math.max(0, Number(x.value)));
      const s = store.state.settings;
      store.updateSettings({
        flightNote: el.flightNote.value.trim(),
        checkedLimit: n(el.checkedLimit, s.checkedLimit),
        checkedBase: n(el.checkedBase, s.checkedBase),
        carryLimit: n(el.carryLimit, s.carryLimit),
        carryBase: n(el.carryBase, s.carryBase),
      });
      toast({ title: '行李設定已儲存', tone: 'muted', duration: 2500 });
    }
  });

  return {
    update(next) {
      ctx = next;
      const a = document.activeElement;
      // 正在編輯航班表單時不重繪
      if (a?.closest?.('[data-flight]') && a.tagName !== 'BUTTON') return;
      let sel = null;
      if (a?.dataset?.l) sel = `[data-id="${a.closest('[data-id]')?.dataset.id}"] [data-l="${a.dataset.l}"]`;
      else if (a?.dataset?.p === 'toggle') sel = `[data-p="toggle"][data-idx="${a.dataset.idx}"]`;
      else if (a?.id === 'todo-input') sel = '#todo-input';
      else if (a?.closest?.('[data-flight]')) sel = '[data-flight] button[type="submit"]';
      rerender(sel);
    },
  };
}
