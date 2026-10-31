// 商品詳情抽屜：完整金額拆解、免稅門檻、操作按鈕
import { store } from '../store.js';
import { analyze, TAX_FREE_MIN } from '../calc.js';
import { categoryOf, priorityOf } from '../data.js';
import { createDialog, openDialog, closeDialog, esc, icon, yen, twd, kg, fmtDate, fmtTime, progress, validJan } from '../ui.js';
import { thumb } from './components.js';
import { togglePurchased, deleteItem } from './item-actions.js';
import { openForm } from './item-form.js';
import { openCounter } from './counter-card.js';

const LUGGAGE = { checked: '託運行李', carry: '隨身行李', none: '不放行李（寄送／現場使用）' };

function body(item) {
  const { settings } = store.state;
  const rate = settings.rate;
  const { byItem } = analyze(store.state.items, settings);
  const a = byItem.get(item.id);
  const g = a.group;
  const cat = categoryOf(item.category);
  const pr = priorityOf(item.priority);

  let thresholdText;
  if (!item.taxFree) thresholdText = '這件商品設定為不辦免稅。';
  else if (!item.store) thresholdText = '填寫店家後，才能和同店商品合併計算免稅門檻。';
  else if (g.eligible) thresholdText = `${esc(g.store)}${g.date ? `（${fmtDate(g.date)}）` : ''} 免稅商品未稅合計 ${yen(g.eligibleExcl)}，已達 ${yen(TAX_FREE_MIN)} 門檻。`;
  else thresholdText = `${esc(g.store)} 目前未稅合計 ${yen(g.eligibleExcl)}，再 <strong>${yen(g.shortfall)}</strong>（未稅）即可退稅。`;

  return `
  <div class="dlg-shell drawer-shell">
    <header class="dlg-head">
      <p class="eyebrow">${icon(cat.icon, 'sm')}${esc(cat.label)}${item.store ? ` · ${esc(item.store)}` : ''}</p>
      <h2 id="detail-title" class="dlg-title">${esc(item.name)}</h2>
      ${item.nameJa ? `<p class="dlg-ja" lang="ja">${esc(item.nameJa)}</p>` : ''}
      <div class="tag-row">
        <span class="badge ${item.purchased ? 'badge-gold' : 'badge-muted'}">${icon(item.purchased ? 'verified' : 'pending', 'sm')}${item.purchased ? `已入手${item.purchasedAt ? ` · ${fmtTime(item.purchasedAt)}` : ''}` : '待購買'}</span>
        <span class="badge badge-prio">${pr.stars} ${pr.label}</span>
        ${item.demo ? '<span class="badge badge-muted">示範資料</span>' : ''}
      </div>
      <button type="button" class="icon-btn dlg-close" aria-label="關閉詳情">${icon('close')}</button>
    </header>

    <div class="dlg-scroll">
      <div class="detail-hero">
        ${thumb(item, 'thumb-lg')}
        <dl class="info-grid">
          ${item.brand ? `<div><dt>品牌</dt><dd>${esc(item.brand)}</dd></div>` : ''}
          <div><dt>數量</dt><dd>${item.qty}</dd></div>
          <div><dt>地區</dt><dd>${esc(item.area || '未指定')}</dd></div>
          <div><dt>預計日期</dt><dd>${item.planDate ? fmtDate(item.planDate) : '未定'}</dd></div>
          <div><dt>重量</dt><dd>${item.weightKg ? kg(a.weight) : '未填'}</dd></div>
          <div><dt>行李</dt><dd>${LUGGAGE[item.luggage]}</dd></div>
          ${item.jan ? `<div class="span2"><dt>JAN 條碼</dt><dd class="mono">${esc(item.jan)}${validJan(item.jan) ? '' : ' <small class="text-warn">（檢查碼不符）</small>'}</dd></div>` : ''}
        </dl>
      </div>

      ${item.fragile || item.liquid || item.battery ? `<div class="tag-row">
        ${item.fragile ? `<span class="badge badge-warn">${icon('wine_bar', 'sm')}易碎</span>` : ''}
        ${item.liquid ? `<span class="badge badge-cyan">${icon('water_drop', 'sm')}液體</span>` : ''}
        ${item.battery ? `<span class="badge badge-danger">${icon('battery_alert', 'sm')}含鋰電池</span>` : ''}
      </div>` : ''}

      <section class="ledger" aria-labelledby="ledger-title">
        <h3 id="ledger-title" class="section-title">${icon('account_balance_wallet', 'sm')}金額與免稅試算</h3>
        <dl class="ledger-rows">
          <div><dt>定價（含稅 ${item.taxRate}%）× ${item.qty}</dt><dd>${yen(a.listIncl)}</dd></div>
          ${a.discount ? `<div class="minus"><dt>折扣 ${item.discountPct}%</dt><dd>− ${yen(a.discount)}</dd></div>` : ''}
          <div class="strong"><dt>店頭支付（含稅）</dt><dd>${yen(a.pay)}</dd></div>
          ${a.refundable ? `
            <div class="minus"><dt>離境退稅（消費稅 ${item.taxRate}%）</dt><dd>− ${yen(a.tax)}</dd></div>
            ${a.fee ? `<div class="plus"><dt>退稅手續費 ${a.feePct}%</dt><dd>+ ${yen(a.fee)}</dd></div>` : ''}` : ''}
        </dl>
        <div class="ledger-total">
          <div><span class="ledger-k">實際成本</span><span class="ledger-v">${yen(a.net)}</span></div>
          <div class="ledger-twd"><span class="ledger-k">約合台幣</span><span class="ledger-v">${twd(a.net, rate)}</span></div>
        </div>
        ${settings.cardRebatePct ? `<p class="hint">${icon('credit_card', 'sm')}刷卡淨回饋 ${settings.cardRebatePct}%，約再省 ${twd(a.pay * settings.cardRebatePct / 100, rate)}</p>` : ''}
      </section>

      <section class="threshold ${g.eligible && item.taxFree ? 'ok' : ''}" aria-labelledby="th-title">
        <h3 id="th-title" class="section-title">${icon('percent', 'sm')}免稅門檻（同店同日未稅 ${yen(TAX_FREE_MIN)}）</h3>
        ${item.taxFree && item.store ? progress(g.progress, { label: '免稅門檻進度', tone: g.eligible ? 'cyan' : 'gold' }) : ''}
        <p>${thresholdText}</p>
        ${g.undatedMerge && item.taxFree ? `<p class="small">${icon('event', 'sm')} 同店商品分不同天買時，請填預計日期（目前視為同一天合併計算${g.mergeNeeded ? '，分開買可能就不到門檻' : ''}）。</p>` : ''}
      </section>

      ${item.note ? `<section><h3 class="section-title">${icon('edit_note', 'sm')}備註</h3><p class="note-box">${esc(item.note)}</p></section>` : ''}
    </div>

    <footer class="dlg-foot">
      <button type="button" class="icon-btn icon-btn-lg" data-d="delete" aria-label="刪除 ${esc(item.name)}" title="刪除">${icon('delete')}</button>
      <button type="button" class="btn btn-ghost" data-d="edit">${icon('edit')}編輯</button>
      <button type="button" class="btn btn-slate" data-d="counter">${icon('translate')}出示給店員</button>
      <button type="button" class="btn ${item.purchased ? 'btn-ghost' : 'btn-gold'} grow" data-d="toggle">
        ${icon(item.purchased ? 'undo' : 'check_circle')}${item.purchased ? '改回待購買' : '標記已入手'}
      </button>
    </footer>
  </div>`;
}

export function openDetail(id) {
  const item = store.getItem(id);
  if (!item) return;
  const dlg = createDialog('dlg-drawer', body(item), 'detail-title');

  // 資料變動時重繪內容；商品被刪就關閉
  const unsub = store.subscribe(() => {
    const fresh = store.getItem(id);
    if (!fresh) { closeDialog(dlg); return; }
    const scroll = dlg.querySelector('.dlg-scroll')?.scrollTop ?? 0;
    const focusKey = document.activeElement?.dataset?.d;
    dlg.querySelector('.dlg-shell').outerHTML = body(fresh); // 只換內容殼，保留通知區
    dlg.querySelector('.dlg-scroll').scrollTop = scroll;
    if (focusKey) dlg.querySelector(`[data-d="${focusKey}"]`)?.focus();
  });

  dlg.addEventListener('click', async (e) => {
    if (e.target.closest('.dlg-close')) { closeDialog(dlg); return; }
    const act = e.target.closest('[data-d]')?.dataset.d;
    if (act === 'toggle') togglePurchased(id);
    else if (act === 'edit') openForm(id);
    else if (act === 'counter') openCounter(id);
    else if (act === 'delete') { if (await deleteItem(id)) closeDialog(dlg); }
  });

  openDialog(dlg, { onClose: unsub });
}
