// 打包與海關（分頁）：回程整理行李時，把已買商品依「必須託運／必須手提／一般」分組打勾確認
import { store } from '../store.js';
import { summarize, effLuggage, customsEstimate, CUSTOMS_VERIFIED } from '../calc.js';
import { categoryOf } from '../data.js';
import { esc, icon, kg, num, yen, stackBar, progress, toast } from '../ui.js';
import { pageHead, jumpNav, bindJumpNav } from './components.js';
import { openDetail } from './item-detail.js';

// 出境與入境提醒：標題一眼看懂重點，細節條列、預設收合
const RULES = [
  { id: 'taxfree', tone: 'danger', icon: 'priority_high', title: '免稅商品先查驗、再託運', points: [
    '2026/11/1 起的退稅新制，要在<strong>購買後 90 天內、託運行李之前</strong>持護照到機台辦理。',
    '海關以<strong>收據為單位</strong>查驗，同一張收據的商品要全部放在好拿出來的位置。',
    '少一件，整張收據都不能退。',
  ] },
  { id: 'battery', tone: 'danger', icon: 'battery_alert', title: '行動電源：每人最多 2 顆，機上禁用', points: [
    '日本出發航班自 2026/4/24 起、台灣民航局自 2026/4/8 起適用。',
    '每人最多帶 2 顆（160Wh 以下，超過 100Wh 需航空公司同意）。',
    '<strong>機上不能使用、也不能充電</strong>，不可託運。',
    '請放在身邊，不要放進上方置物櫃。',
  ] },
  { id: 'liquid', tone: 'warn', icon: 'water_drop', title: '液體、刀剪', points: [
    '手提液體單瓶通常限 100ml。',
    '刀剪只能託運。',
    '實際限制以航空公司與機場公告為準。',
  ] },
  { id: 'customs', tone: 'warn', icon: 'shield', title: '回台灣入境：免稅額與禁帶品', points: [
    '行李免稅額 <strong>NT$35,000</strong>；酒類 <strong>1.5 公升</strong>（年滿 18 歲）。',
    '<strong>肉製品一律不能帶</strong>，包括肉乾、肉鬆、香腸、含肉塊或肉包的泡麵（例如一風堂、AFURI 柚子拉麵），違者罰 NT$1 萬～100 萬。',
    '新鮮水果也不能帶。',
    '帶到了請在入境前丟進檢疫箱。',
    '不確定的話到動植物檢疫櫃台主動申報，不合格只要銷毀就不會受罰。',
  ] },
  { id: 'pack', tone: 'ok', icon: 'check', title: '重物放底層、易碎放中央', points: [
    '酒類、瓶裝保養品包好，放靠近輪子的底部。',
    '易碎品放中央，四周用衣物緩衝。',
  ] },
];
const openRules = new Set(); // 記住哪幾則是展開的，重繪後維持原狀

function row(i, movable) {
  const lug = effLuggage(i);
  return `
  <li class="pack-item ${i.packed ? 'is-packed' : ''}" data-id="${i.id}">
    <button type="button" class="check ${i.packed ? 'on' : ''}" data-k="pack" role="checkbox" aria-checked="${i.packed}" aria-label="已裝箱：${esc(i.name)}">${icon('check')}</button>
    <div class="pack-main">
      <button type="button" class="pack-name" data-k="open">${esc(i.name)}${i.qty > 1 ? ` <small>× ${i.qty}</small>` : ''}</button>
      <p class="pack-meta">
        <span>${icon(categoryOf(i.category).icon, 'sm')}${i.weightKg ? kg(i.weightKg * i.qty) : '<span class="text-warn">未填重量</span>'}</span>
        ${i.buyFor ? `<span class="who-tag">@${esc(i.buyFor)}</span>` : ''}
        ${i.liquid ? `<span class="badge badge-cyan">${icon('water_drop', 'sm')}液體</span>` : ''}
        ${i.blade ? `<span class="badge badge-warn">${icon('content_cut', 'sm')}刀剪</span>` : ''}
        ${i.battery ? `<span class="badge badge-danger">${icon('battery_alert', 'sm')}鋰電池</span>` : ''}
        ${i.fragile ? `<span class="badge badge-warn">${icon('wine_bar', 'sm')}易碎</span>` : ''}
        ${i.taxFree && i.purchasedStore ? `<span class="badge badge-gold">${icon('receipt_long', 'sm')}免稅品</span>` : ''}
      </p>
    </div>
    ${movable ? `<button type="button" class="btn btn-ghost btn-xs" data-k="move" aria-label="把 ${esc(i.name)} 改放${lug === 'checked' ? '手提' : '託運'}">${icon('swap_horiz', 'sm')}${lug === 'checked' ? '託運' : '手提'}</button>` : ''}
  </li>`;
}

function section(id, title, ic, tone, desc, list, movable = false) {
  if (!list.length) return '';
  const done = list.filter((i) => i.packed).length;
  return `
  <section class="pack-sec pack-${tone}" aria-labelledby="pk-${id}">
    <header class="pack-sec-head">
      <h2 id="pk-${id}" class="section-title">${icon(ic, 'sm')}${title}</h2>
      <span class="badge ${done === list.length ? 'badge-cyan' : 'badge-muted'}">${done} / ${list.length} 已裝箱</span>
    </header>
    <p class="hint">${desc}</p>
    <ul class="pack-list">${list.map((i) => row(i, movable)).join('')}</ul>
  </section>`;
}

const LUG_LABEL = { checked: '託運', carry: '手提', none: '不放行李' };

// 免稅品查驗清單：已買、且該店當天達到免稅門檻的商品，依收據（同店同日）分組
function inspectCard(state, sum) {
  const done = state.settings.inspectedGroups || {};
  const groups = [...sum.groups.values()]
    .map((g) => ({ g, items: g.items.filter((i) => i.purchased && i.taxFree) }))
    .filter((x) => x.g.eligible && x.g.store && x.items.length);
  if (!groups.length) return '';
  const left = groups.filter((x) => !done[x.g.key]).length;
  return `
  <section class="card inspect-card" aria-labelledby="pk-inspect">
    <header class="card-head">
      <h2 id="pk-inspect" class="section-title">${icon('receipt_long', 'sm')}免稅品查驗清單</h2>
      <span class="badge ${left ? 'badge-warn' : 'badge-cyan'}">${left ? `${left} 張收據待查驗` : '全部查驗完成'}</span>
    </header>
    <p class="muted small">依收據（同一家店、同一天）分組。到機場先辦查驗、再託運；同一組的商品要全部拿得出來。</p>
    <ul class="inspect-list">
      ${groups.map(({ g, items }) => {
        const refund = items.reduce((t, i) => t + sum.byItem.get(i.id).refund, 0);
        const inChecked = items.some((i) => effLuggage(i) === 'checked');
        return `
        <li class="inspect-group ${done[g.key] ? 'is-done' : ''}">
          <div class="inspect-head">
            <p class="inspect-title"><strong>${esc(g.store)}</strong>${g.date ? ` <small>${g.date.slice(5).replace('-', '/')}</small>` : ''}
              <span class="badge badge-gold">退 ${yen(refund)}</span></p>
            <label class="inspect-check"><input type="checkbox" data-insp="${esc(g.key)}" ${done[g.key] ? 'checked' : ''}><span>已查驗</span></label>
          </div>
          <ul class="inspect-items">
            ${items.map((i) => `<li><span>${esc(i.name)}${i.qty > 1 ? ` × ${i.qty}` : ''}</span><span class="badge badge-muted">${LUG_LABEL[effLuggage(i)]}</span></li>`).join('')}
          </ul>
          ${inChecked && !done[g.key] ? `<p class="hint text-warn">${icon('priority_high', 'sm')}這組有要託運的商品，請先查驗再交行李。</p>` : ''}
        </li>`;
      }).join('')}
    </ul>
  </section>`;
}

// 入境免稅額試算：已買商品換算台幣後，對照每人的行李免稅額
function allowanceCard(state, sum) {
  const c = customsEstimate(state, sum);
  if (!c.count && !c.planned) return '';
  const nt = (n) => `NT$ ${num(n)}`;
  return `
  <section class="card allow-card" aria-labelledby="pk-allow">
    <header class="card-head">
      <h2 id="pk-allow" class="section-title">${icon('shield', 'sm')}入境免稅額試算</h2>
      <span class="badge ${c.over ? 'badge-danger' : c.plannedOver ? 'badge-warn' : 'badge-cyan'}">${c.over ? '已超過免稅額' : c.plannedOver ? '全部買完會超過' : '在免稅額內'}</span>
    </header>
    <p class="allow-now"><strong>約 ${nt(c.now)}</strong> / ${nt(c.limit)}</p>
    ${progress(Math.min(1, c.now / c.limit), { label: `已買商品約 ${nt(c.now)}，免稅額 ${nt(c.limit)}`, tone: c.over ? 'gold' : 'cyan' })}
    <dl class="allow-dl">
      <div><dt>已買（${c.count} 件）</dt><dd>${c.over ? `<span class="text-danger">超過約 ${nt(c.over)}</span>` : `還有約 ${nt(c.limit - c.now)}`}</dd></div>
      <div><dt>全部買完預估</dt><dd class="${c.plannedOver ? 'text-danger' : ''}">約 ${nt(c.planned)}${c.plannedOver ? `（超過約 ${nt(c.plannedOver)}）` : ''}</dd></div>
    </dl>
    ${c.over ? `<p class="notice">${icon('info')}超過免稅額時，入境請走紅線檯向海關申報。</p>` : ''}
    <p class="muted small">以退稅後的實際成本、目前匯率估算；海關是以完稅價格認定，結果可能不同。額度以每人計算。${c.liquorCount ? `酒類 ${c.liquorCount} 件不計入（另有 1.5 公升的免稅量）。` : '酒類不計入（另有 1.5 公升的免稅量）。'}設定為「不放行李」的商品也不計入。</p>
    <p class="muted small">規定查證日 ${CUSTOMS_VERIFIED}（財政部關務署）。</p>
  </section>`;
}

function main() {
  const state = store.state;
  const { settings, packing } = state;
  const sum = summarize(state);
  const bought = state.items.filter((i) => i.purchased && effLuggage(i) !== 'none');
  const mustChecked = bought.filter((i) => !i.battery && effLuggage(i) === 'checked' && (i.liquid || i.blade));
  const mustCarry = bought.filter((i) => i.battery);
  const general = bought.filter((i) => !mustChecked.includes(i) && !mustCarry.includes(i));
  const pending = state.items.filter((i) => !i.purchased).length;
  const doneTodo = packing.filter((p) => p.done).length;
  const bar = (label, now, base, goods, limit) => `
    <div class="pack-weight ${now > limit ? 'is-over' : ''}">
      <p class="row-between"><span class="k">${label}</span><span><strong>${num(now, 1)}</strong> / ${limit} kg</span></p>
      ${stackBar([{ value: base, tone: 'base' }, { value: goods, tone: 'paid' }], limit, `${label} ${num(now, 1)} 公斤，限重 ${limit}`)}
      <p class="small ${now > limit ? 'text-danger' : 'muted'}">${now > limit ? `超重 ${kg(now - limit)}` : `還可裝 ${kg(limit - now)}`}</p>
    </div>`;

  return `
  <div class="packing-layout">
    <div class="col">
      <div class="pack-weights" role="group" aria-labelledby="pk-weights">
        <h2 id="pk-weights" class="sr-only">行李重量</h2>
        ${bar('託運行李', sum.totalCheckedNow, settings.checkedBase, sum.weightCheckedNow, settings.checkedLimit)}
        ${bar('手提行李', sum.totalCarryNow, settings.carryBase, sum.weightCarryNow, settings.carryLimit)}
        <button type="button" class="link-btn pack-limits-link" data-edit-limits>${icon('tune', 'sm')}修改限重與行李箱重量</button>
      </div>
      ${!bought.length ? `<p class="notice">${icon('info')}還沒有已買的商品。在採買清單勾選「已買」後，商品會出現在這裡。</p>` : ''}
      ${section('checked', '必須託運（液體／刀剪）', 'luggage', 'checked', '液體超過 100ml、刀剪類不能帶上飛機客艙。（在出境管制區免稅店買的液體不在此限，會列在一般商品）', mustChecked)}
      ${section('carry', '必須手提（鋰電池）', 'backpack', 'carry', '行動電源與備用鋰電池不能託運，每人最多 2 顆，機上不能使用或充電；內建電池的電器依航空公司規定。', mustCarry)}
      ${section('general', '一般商品', 'inventory_2', 'general', '託運或手提都可以，按右側按鈕切換放哪裡。', general, true)}
      ${pending ? `<p class="hint">${icon('pending', 'sm')}還有 ${pending} 件待買，買到後會出現在這裡。</p>` : ''}
      ${inspectCard(state, sum)}
      ${allowanceCard(state, sum)}
    </div>
    <div class="col">
      <section class="card dark-card" aria-labelledby="pk-rules">
        <p class="eyebrow eyebrow-light">${icon('gavel', 'sm')}DEPARTURE CHECKLIST</p>
        <h2 id="pk-rules" class="section-title-lg">出境與入境提醒</h2>
        <p class="rule-hint">點標題展開細節。</p>
        <ul class="rule-cards">
          ${RULES.map((r) => `
          <li class="rule ${r.tone}"><details data-rule="${r.id}" ${openRules.has(r.id) ? 'open' : ''}>
            <summary><span class="rule-icon">${icon(r.icon)}</span><strong>${r.title}</strong><span class="rule-chevron" aria-hidden="true">${icon('add', 'sm')}</span></summary>
            <ul class="rule-points">${r.points.map((p) => `<li>${p}</li>`).join('')}</ul>
          </details></li>`).join('')}
        </ul>
      </section>

      <section class="card packing-card" aria-labelledby="pk-todo">
        <header class="card-head">
          <h2 id="pk-todo" class="section-title">${icon('checklist', 'sm')}隨身裝備清單</h2>
          <span class="badge badge-muted">${doneTodo} / ${packing.length} 備妥</span>
        </header>
        <ul class="todo-list">
          ${packing.map((p, idx) => `
            <li class="todo ${p.done ? 'is-done' : ''}">
              <label><input type="checkbox" data-p="toggle" data-idx="${idx}" ${p.done ? 'checked' : ''}><span>${esc(p.text)}</span></label>
              <button type="button" class="icon-btn icon-btn-sm" data-p="remove" data-idx="${idx}" aria-label="移除「${esc(p.text)}」">${icon('close', 'sm')}</button>
            </li>`).join('')}
        </ul>
        <form class="todo-add" data-p-add>
          <label for="todo-input" class="sr-only">新增裝備項目</label>
          <input id="todo-input" placeholder="新增項目，例如：轉接頭" maxlength="40" autocomplete="off">
          <button type="submit" class="btn btn-slate btn-sm">${icon('add', 'sm')}新增</button>
        </form>
      </section>

      <details class="more card-more">
        <summary class="more-summary">
          <span class="more-title">${icon('flight_takeoff', 'sm')}航班與行李額度</span>
          <span class="more-desc">${settings.flightNote ? esc(settings.flightNote) : '限重、行李箱本身重量'}</span>
          <span class="more-chevron" aria-hidden="true">${icon('add')}</span>
        </summary>
        <form class="flight-form more-body" data-flight>
          <div class="field span2"><label for="fl-note">航班備註</label>
            <input id="fl-note" name="flightNote" value="${esc(settings.flightNote)}" placeholder="例如：BR197 成田 → 桃園 11/20 14:30" maxlength="60"></div>
          <div class="field"><label for="fl-cl">託運限重 kg</label><input id="fl-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${settings.checkedLimit}"></div>
          <div class="field"><label for="fl-cb">託運基本重量 kg</label><input id="fl-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${settings.checkedBase}"></div>
          <div class="field"><label for="fl-pl">手提限重 kg</label><input id="fl-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${settings.carryLimit}"></div>
          <div class="field"><label for="fl-pb">手提基本重量 kg</label><input id="fl-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${settings.carryBase}"></div>
          <button type="submit" class="btn btn-slate span2">${icon('save', 'sm')}儲存行李設定</button>
        </form>
      </details>
    </div>
  </div>`;
}

export function mount(root) {
  root.innerHTML = `
    ${pageHead({
      eyebrow: `PACKING & CUSTOMS · ${esc(store.state.settings.tripName)}`,
      title: '打包與海關',
      sub: '回程整理行李時看這頁：已買的商品依「必須託運／必須手提／一般」分組，逐一裝箱打勾。',
      subShort: '回程裝箱用：已買的商品依託運、手提分組，裝好就打勾。',
    })}
    ${jumpNav([
      { id: 'pk-weights', label: '重量' }, { id: 'pk-checked', label: '託運' }, { id: 'pk-carry', label: '手提' },
      { id: 'pk-general', label: '一般' }, { id: 'pk-inspect', label: '查驗' }, { id: 'pk-allow', label: '入境試算' },
      { id: 'pk-rules', label: '海關提醒' }, { id: 'pk-todo', label: '隨身裝備' },
    ])}
    <div data-region="main">${main()}</div>`;
  const region = root.querySelector('[data-region="main"]');

  const rerender = () => {
    const a = document.activeElement;
    const flightOpen = region.querySelector('details.card-more')?.open;
    let sel = null;
    if (a?.dataset?.k) sel = `[data-id="${a.closest('[data-id]')?.dataset.id}"] [data-k="${a.dataset.k}"]`;
    else if (a?.dataset?.p === 'toggle') sel = `[data-p="toggle"][data-idx="${a.dataset.idx}"]`;
    else if (a?.dataset?.insp) sel = `[data-insp="${CSS.escape(a.dataset.insp)}"]`;
    else if (a?.id === 'todo-input') sel = '#todo-input';
    else if (a?.closest?.('[data-flight]')) sel = '[data-flight] button[type="submit"]';
    region.innerHTML = main();
    if (flightOpen) region.querySelector('details.card-more').open = true;
    if (sel) region.querySelector(sel)?.focus({ preventScroll: true });
    jump?.refresh(); // 區塊可能出現或消失（例如第一件需要手提的商品）
  };
  let jump = null;

  root.addEventListener('click', (e) => {
    const t = e.target.closest('button');
    if (!t) return;
    if ('editLimits' in t.dataset) { // 打開頁面下方的「航班與行李額度」並把焦點帶過去
      const d = region.querySelector('details.card-more');
      d.open = true;
      d.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      d.querySelector('#fl-cl')?.focus({ preventScroll: true });
      return;
    }
    if (t.dataset.p === 'remove') {
      const packing = [...store.state.packing];
      packing.splice(Number(t.dataset.idx), 1);
      store.setPacking(packing);
      root.querySelector('#todo-input')?.focus();
      return;
    }
    const id = t.closest('[data-id]')?.dataset.id;
    const item = id && store.getItem(id);
    if (!item) return;
    if (t.dataset.k === 'pack') store.updateItem(id, { packed: !item.packed });
    if (t.dataset.k === 'open') openDetail(id);
    if (t.dataset.k === 'move') store.updateItem(id, { luggage: effLuggage(item) === 'checked' ? 'carry' : 'checked' });
  });
  root.addEventListener('change', (e) => {
    if (e.target.dataset.insp) { // 免稅收據：已查驗
      const map = { ...store.state.settings.inspectedGroups };
      if (e.target.checked) map[e.target.dataset.insp] = true; else delete map[e.target.dataset.insp];
      store.updateSettings({ inspectedGroups: map });
      return;
    }
    if (e.target.dataset.p !== 'toggle') return;
    const idx = Number(e.target.dataset.idx);
    store.setPacking(store.state.packing.map((p, i) => (i === idx ? { ...p, done: e.target.checked } : p)));
  });
  root.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    if (f.matches('[data-p-add]')) {
      const text = f.querySelector('input').value.trim();
      if (text) store.setPacking([...store.state.packing, { text, done: false }]);
      root.querySelector('#todo-input')?.focus();
    } else if (f.matches('[data-flight]')) {
      const el = f.elements;
      const s = store.state.settings;
      const n = (x, fb) => (x.value === '' || Number.isNaN(Number(x.value)) ? fb : Math.max(0, Number(x.value)));
      store.updateSettings({
        flightNote: el.flightNote.value.trim(),
        checkedLimit: n(el.checkedLimit, s.checkedLimit), checkedBase: n(el.checkedBase, s.checkedBase),
        carryLimit: n(el.carryLimit, s.carryLimit), carryBase: n(el.carryBase, s.carryBase),
      });
      toast({ title: '行李設定已儲存', tone: 'muted', duration: 2500 });
    }
  });

  // details 的 toggle 不會冒泡，用捕獲階段記住每則提醒的展開狀態
  root.addEventListener('toggle', (e) => {
    const id = e.target.dataset?.rule;
    if (!id) return;
    if (e.target.open) openRules.add(id); else openRules.delete(id);
  }, true);

  jump = bindJumpNav(root);
  return {
    destroy() { jump.destroy(); },
    update() {
      // 正在填航班表單時不重繪，避免打斷輸入
      const a = document.activeElement;
      if (region.querySelector('[data-flight]')?.contains(a) && a.tagName !== 'BUTTON') return;
      rerender();
    },
  };
}
