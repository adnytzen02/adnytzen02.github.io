// 預算匯率：匯率、預算進度、各店退稅、單筆試算盤、免稅新制說明
import { store } from '../store.js';
import { quickCalc, TAX_FREE_MIN, REFUND_SYSTEM_START } from '../calc.js';
import { refreshRate, setManualRate } from '../rate.js';
import { $, esc, icon, yen, twd, num, fmtTime, toast, progress } from '../ui.js';
import { pageHead } from './components.js';

// 試算盤狀態保留在模組內
const calc = { price: 10000, includesTax: true, taxRate: 10, discountPct: 0, feePct: null };
let converterYen = 10000;

function rateCard({ state }) {
  const s = state.settings;
  const src = s.rateSource === 'manual' ? '手動輸入' : s.rateSource === 'api' ? (s.rateProvider || '公開匯率 API') : '預設值（尚未連線更新）';
  return `
  <section class="card rate-card" aria-labelledby="rate-title">
    <div class="rate-glow" aria-hidden="true"></div>
    <p class="eyebrow eyebrow-light">${icon('currency_exchange', 'sm')}AETHER CURRENCY</p>
    <h2 id="rate-title" class="sr-only">匯率</h2>
    <p class="rate-big"><span>1 JPY =</span> <strong>${num(s.rate, 4)}</strong> <span>TWD</span></p>
    <p class="rate-src">${esc(src)}${s.rateUpdatedAt ? ` · ${fmtTime(s.rateUpdatedAt)}` : ''}</p>
    <p class="rate-note">市場參考匯率，實際換匯或刷卡金額會因銀行匯差、手續費而不同。</p>
    <div class="rate-actions">
      <button type="button" class="btn btn-gold btn-sm" data-sync>${icon('sync', 'sm')}抓最新匯率</button>
      <form class="rate-manual" data-manual>
        <label for="rate-input" class="sr-only">手動輸入匯率</label>
        <input id="rate-input" type="number" inputmode="decimal" step="0.0001" min="0.01" max="5" placeholder="${num(s.rate, 4)}">
        <button type="submit" class="btn btn-ghost-light btn-sm">${icon('tune', 'sm')}套用</button>
      </form>
    </div>
    <div class="converter">
      <label for="conv-yen">換算</label>
      <div class="input-affix input-dark"><span aria-hidden="true">¥</span><input id="conv-yen" type="number" inputmode="numeric" min="0" value="${converterYen}"></div>
      <span class="conv-eq" aria-hidden="true">${icon('sync_alt')}</span>
      <output for="conv-yen" class="conv-out" data-conv>${twd(converterYen, s.rate)}</output>
    </div>
  </section>`;
}

function budgetCard({ state, sum, rate }) {
  const s = state.settings;
  const paidPct = s.budget ? (sum.paid / s.budget) * 100 : 0;
  const pendPct = s.budget ? (sum.pending / s.budget) * 100 : 0;
  const over = sum.remaining < 0;
  return `
  <section class="card budget-card" aria-labelledby="budget-title">
    <div class="card-head">
      <h2 id="budget-title" class="section-title">${icon('account_balance_wallet', 'sm')}預算總覽</h2>
      <span class="badge ${over ? 'badge-danger' : 'badge-cyan'}">${icon(over ? 'warning' : 'shield', 'sm')}${over ? (sum.paid > s.budget ? '已超出預算' : '買完會超支') : '預算安全'}</span>
    </div>
    <p class="muted">預算 ${yen(s.budget)}（≈ ${twd(s.budget, rate)}）</p>
    <div class="dual-stat">
      <div class="is-now"><span class="k">目前已支付</span><span class="v">${yen(sum.paid)}</span>
        <span class="s">≈ ${twd(sum.paid, rate)} · 預算的 ${Math.round(sum.budgetUsedPct * 100)}%</span></div>
      <div><span class="k">全部買完預估</span><span class="v">${yen(sum.pay)}</span>
        <span class="s">≈ ${twd(sum.pay, rate)} · 預算的 ${Math.round(sum.budgetPlannedPct * 100)}%</span></div>
    </div>
    <div class="stack-bar" role="img" aria-label="已支付 ${yen(sum.paid)}，待購 ${yen(sum.pending)}，預算 ${yen(s.budget)}">
      <span class="seg-paid" style="--w:${Math.min(100, paidPct)}%"></span>
      <span class="seg-later" style="--w:${Math.max(0, Math.min(100 - Math.min(100, paidPct), pendPct))}%"></span>
    </div>
    <dl class="legend-grid">
      <div><dt><i class="dot dot-gold"></i>已支付（${sum.purchasedCount} 件）</dt><dd>${yen(sum.paid)}</dd></div>
      <div><dt><i class="dot dot-later"></i>待購（${sum.pendingCount} 件）</dt><dd>${yen(sum.pending)}</dd></div>
      <div class="${over ? 'text-danger' : ''}"><dt><i class="dot dot-slate"></i>${over ? '買完超支' : '買完剩餘'}</dt><dd>${yen(Math.abs(sum.remaining))} <small>(${twd(Math.abs(sum.remaining), rate)})</small></dd></div>
    </dl>
    <form class="inline-form" data-budget>
      <label for="budget-input">修改預算</label>
      <div class="input-affix"><span aria-hidden="true">¥</span><input id="budget-input" type="number" inputmode="numeric" min="0" step="1000" value="${s.budget}"></div>
      <button type="submit" class="btn btn-slate btn-sm">儲存</button>
    </form>
  </section>`;
}

function refundCard({ state, sum, rate }) {
  const s = state.settings;
  const groups = [...sum.groups.values()].filter((g) => g.store && g.hasTaxFreeItems)
    .sort((a, b) => Number(b.eligible) - Number(a.eligible) || b.eligibleExcl - a.eligibleExcl);
  const refundOf = (g) => g.items.reduce((t, i) => t + sum.byItem.get(i.id).refund, 0);
  return `
  <section class="card refund-card" aria-labelledby="refund-title">
    <div class="refund-hero">
      <div>
        <p class="eyebrow eyebrow-light">${icon('savings', 'sm')}SACRED TAX RELIEF</p>
        <h2 id="refund-title" class="refund-big">預估退稅 ${yen(sum.refund)}</h2>
      </div>
      <p class="refund-twd">≈ ${twd(sum.refund, rate)}</p>
    </div>
    ${groups.length ? `<ul class="refund-list">
      ${groups.map((g) => `
        <li>
          <div class="row-between"><strong>${esc(g.store)}${g.date ? ` <small>${g.date.slice(5).replace('-', '/')}</small>` : ''}</strong>
            ${g.eligible ? `<span class="badge badge-cyan">退 ${yen(refundOf(g))}</span>` : `<span class="badge badge-warn">差 ${yen(g.shortfall)}</span>`}</div>
          ${progress(g.progress, { label: `${g.store} 免稅門檻`, tone: g.eligible ? 'cyan' : 'gold' })}
          <p class="muted small">未稅合計 ${yen(g.eligibleExcl)} / ${yen(TAX_FREE_MIN)}</p>
        </li>`).join('')}
    </ul>` : '<p class="muted pad">還沒有勾選「辦理免稅」且填了店家的商品。</p>'}
    <form class="inline-form" data-rebate>
      <label for="rebate-input">刷卡淨回饋 %</label>
      <input id="rebate-input" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="${s.cardRebatePct}">
      <button type="submit" class="btn btn-slate btn-sm">儲存</button>
      ${s.cardRebatePct ? `<p class="muted small grow">全部刷卡約可回饋 ${twd(sum.rebate, rate)}</p>` : ''}
    </form>
  </section>`;
}

function calcResult(rate) {
  const feePct = calc.feePct ?? store.state.settings.refundFeePct;
  const r = quickCalc({ ...calc, feePct });
  return `
    <dl class="ledger-rows">
      <div><dt>未稅金額（折扣後）</dt><dd>${yen(r.excl)}</dd></div>
      <div><dt>消費稅 ${calc.taxRate}%</dt><dd>${yen(r.tax)}</dd></div>
      <div class="strong"><dt>店頭支付（含稅）</dt><dd>${yen(r.pay)}</dd></div>
      <div class="minus"><dt>離境退稅${feePct ? `（扣手續費 ${feePct}%）` : ''}</dt><dd>${r.eligible ? `− ${yen(r.refund)}` : '未達門檻'}</dd></div>
    </dl>
    <div class="ledger-total">
      <div><span class="ledger-k">實際成本</span><span class="ledger-v">${yen(r.net)}</span></div>
      <div class="ledger-twd"><span class="ledger-k">約合台幣</span><span class="ledger-v">${twd(r.net, rate)}</span></div>
    </div>
    <p class="calc-status ${r.eligible ? 'ok' : 'warn'}">${icon(r.eligible ? 'celebration' : 'info', 'sm')}${r.eligible
      ? `比原價省下 ${yen(r.saved)}（≈ ${twd(r.saved, rate)}）`
      : `單筆未稅未滿 ${yen(TAX_FREE_MIN)}，需與同店同日其他商品合併計算`}</p>`;
}

function calculator({ rate }) {
  const coupons = [0, 5, 7, 10];
  return `
  <section class="card calc-card" aria-labelledby="calc-title">
    <div class="card-head">
      <h2 id="calc-title" class="section-title">${icon('calculate', 'sm')}單筆退稅試算盤</h2>
      <span class="badge badge-muted">即時計算</span>
    </div>
    <div class="calc-layout">
      <form class="calc-form" data-calc-form>
        <div class="field">
          <label for="qc-price">標價（日圓）</label>
          <div class="input-affix"><span aria-hidden="true">¥</span><input id="qc-price" name="price" type="number" inputmode="numeric" min="0" value="${calc.price}"></div>
        </div>
        <div class="grid-2 tight">
          <div class="field"><span class="label" id="qc-l1">標價</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l1">
              <label class="pill"><input type="radio" name="includesTax" value="true" ${calc.includesTax ? 'checked' : ''}><span>含稅</span></label>
              <label class="pill"><input type="radio" name="includesTax" value="false" ${!calc.includesTax ? 'checked' : ''}><span>未稅</span></label>
            </div></div>
          <div class="field"><span class="label" id="qc-l2">稅率</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l2">
              <label class="pill"><input type="radio" name="taxRate" value="10" ${calc.taxRate === 10 ? 'checked' : ''}><span>10%</span></label>
              <label class="pill"><input type="radio" name="taxRate" value="8" ${calc.taxRate === 8 ? 'checked' : ''}><span>8% 食品</span></label>
            </div></div>
        </div>
        <div class="field"><span class="label" id="qc-l3">折扣／優惠券</span>
          <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l3">
            ${coupons.map((c) => `<label class="pill"><input type="radio" name="discountPct" value="${c}" ${calc.discountPct === c ? 'checked' : ''}><span>${c ? `${c}%` : '無'}</span></label>`).join('')}
          </div>
        </div>
        <div class="field">
          <label for="qc-fee">退稅手續費 %</label>
          <input id="qc-fee" name="feePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${calc.feePct ?? ''}" placeholder="預設 ${store.state.settings.refundFeePct}">
        </div>
      </form>
      <div class="calc-out" aria-live="polite" data-calc-out>${calcResult(rate)}</div>
    </div>
  </section>`;
}

function rulesCard() {
  const after = new Date() >= new Date(`${REFUND_SYSTEM_START}T00:00:00+09:00`);
  return `
  <section class="card rules-card" aria-labelledby="rules-title">
    <p class="eyebrow">${icon('gavel', 'sm')}CUSTOMS COMPLIANCE</p>
    <h2 id="rules-title" class="section-title-lg">日本免稅新制：2026/11/1 起改為「出境後退稅」</h2>
    <p class="muted">${after ? '新制已上路。' : '新制即將上路。'}本頁的計算方式依新制設計：店頭先付含稅金額，出境查驗後再退回消費稅。</p>
    <ol class="rules-list">
      <li><strong>店頭先付含稅價</strong>：在免稅店購物時照常付含稅金額，並保留收據與相關資料。</li>
      <li><strong>門檻</strong>：同一天、同一家店，未稅合計 ${yen(TAX_FREE_MIN)} 以上。一般品與消耗品不再分開計算。</li>
      <li><strong>購買後 90 天內出境查驗</strong>：在機場<strong>託運行李之前</strong>，持護照與商品到免稅手續機台辦理，必要時由海關檢查實品。</li>
      <li><strong>在日本用掉就不能退</strong>：消耗品的特殊密封包裝規定取消，但若在日本境內使用或食用，該筆就不能退稅。</li>
      <li><strong>退款方式與手續費</strong>：由免稅店或其委託的退稅業者退款，方式與手續費依各店規定。</li>
    </ol>
    <p class="source">資料來源：<a href="https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html" target="_blank" rel="noopener">日本觀光廳〈What is the Refund Method?〉<span class="sr-only">（另開新視窗）</span></a></p>
  </section>`;
}

export function mount(root, c) {
  let ctx = c;
  root.innerHTML = `
    ${pageHead({
      eyebrow: 'AETHER CURRENCY VAULT · 預算・匯率・免稅',
      title: '預算・匯率・免稅計算中心',
      sub: '即時換算台幣、掌握預算餘額，並預估每家店能退多少消費稅。',
    })}
    <div class="budget-layout">
      <div class="col">
        <div data-region="rate">${rateCard(ctx)}</div>
        <div data-region="budget">${budgetCard(ctx)}</div>
        ${calculator(ctx)}
      </div>
      <div class="col">
        <div data-region="refund">${refundCard(ctx)}</div>
        ${rulesCard()}
      </div>
    </div>`;

  const updateCalc = () => { $('[data-calc-out]', root).innerHTML = calcResult(ctx.rate); };

  root.addEventListener('click', async (e) => {
    const sync = e.target.closest('[data-sync]');
    if (!sync) return;
    sync.disabled = true;
    sync.setAttribute('aria-busy', 'true');
    const r = await refreshRate({ force: true });
    if (r.ok) toast({ title: '匯率已更新', message: `1 JPY = ${num(r.rate, 4)} TWD（${esc(r.provider)}）`, tone: 'muted', duration: 3000 });
    else toast({ title: '暫時抓不到匯率', message: '網路或匯率服務無回應，可以手動輸入匯率。', tone: 'error' });
    const btn = $('[data-sync]', root);
    if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); btn.focus(); }
  });

  root.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    if (f.matches('[data-manual]')) {
      const v = Number(f.querySelector('input').value);
      if (!(v > 0 && v < 5)) { toast({ title: '匯率格式不對', message: '請輸入 0 到 5 之間的數字，例如 0.2150。', tone: 'error' }); return; }
      setManualRate(v);
      toast({ title: '已改用手動匯率', message: `1 JPY = ${num(v, 4)} TWD`, tone: 'muted', duration: 3000 });
    } else if (f.matches('[data-budget]')) {
      const v = Number(f.querySelector('input').value);
      if (v >= 0) { store.updateSettings({ budget: v }); toast({ title: '預算已更新', message: yen(v), tone: 'muted', duration: 2500 }); }
    } else if (f.matches('[data-rebate]')) {
      const v = Number(f.querySelector('input').value);
      if (v >= 0) { store.updateSettings({ cardRebatePct: v }); toast({ title: '回饋率已更新', message: `${v}%`, tone: 'muted', duration: 2500 }); }
    }
  });

  root.addEventListener('input', (e) => {
    const t = e.target;
    if (t.id === 'conv-yen') {
      converterYen = Number(t.value) || 0;
      $('[data-conv]', root).textContent = twd(converterYen, ctx.rate);
    }
    if (t.closest('[data-calc-form]')) {
      const fd = new FormData(t.form);
      calc.price = Number(fd.get('price')) || 0;
      calc.includesTax = fd.get('includesTax') === 'true';
      calc.taxRate = Number(fd.get('taxRate'));
      calc.discountPct = Number(fd.get('discountPct'));
      calc.feePct = fd.get('feePct') === '' ? null : Number(fd.get('feePct'));
      updateCalc();
    }
  });
  // radio 在部分瀏覽器只觸發 change
  root.addEventListener('change', (e) => {
    if (e.target.closest('[data-calc-form]')) e.target.dispatchEvent(new Event('input', { bubbles: true }));
  });

  return {
    update(next) {
      ctx = next;
      // 正在輸入的區塊不重繪，避免打斷
      for (const [name, fn] of [['rate', rateCard], ['budget', budgetCard], ['refund', refundCard]]) {
        const el = $(`[data-region="${name}"]`, root);
        if (!el.contains(document.activeElement) || document.activeElement.tagName === 'BUTTON') {
          const focusSel = document.activeElement?.matches?.('[data-sync]') && el.contains(document.activeElement) ? '[data-sync]' : null;
          el.innerHTML = fn(ctx);
          if (focusSel) $(focusSel, el)?.focus();
        }
      }
      updateCalc();
    },
  };
}
