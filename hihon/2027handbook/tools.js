// 工具頁：日幣換算 + 退稅試算（資料存在 localStorage）
(() => {
  const $ = id => document.getElementById(id);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 });
  const twd = new Intl.NumberFormat('zh-TW', { maximumFractionDigits: 2 });
  const num = v => { const n = parseFloat(String(v).replace(/[,，\s]/g, '')); return Number.isFinite(n) ? n : NaN; };
  const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (_) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} };

  /* ================= 日幣換算 ================= */
  const RATE_KEY = 'jp-handbook-rate-v1';
  const saved = load(RATE_KEY, { rate: 0.21, updated: null, manual: true });
  let rate = saved.rate;
  const jpy = $('jpy'), tw = $('twd'), rateInput = $('rate'), result = $('currency-result'), rateStatus = $('rate-status');

  const showRateStatus = () => {
    rateStatus.textContent = saved.updated
      ? `匯率更新時間：${saved.updated}${saved.manual ? '（手動輸入）' : '（取自公開匯率服務，僅供參考）'}。`
      : '目前使用預設示意匯率 0.21，請按「更新匯率」或手動輸入實際匯率。';
  };
  const fromJpy = () => {
    const n = num(jpy.value);
    if (Number.isNaN(n)) { tw.value = ''; result.textContent = '輸入任一欄位即可換算。'; return; }
    const t = n * rate; tw.value = String(Math.round(t * 100) / 100);
    result.textContent = `¥${yen.format(n)} ≈ NT$${twd.format(t)}`;
  };
  const fromTwd = () => {
    const n = num(tw.value);
    if (Number.isNaN(n)) { jpy.value = ''; result.textContent = '輸入任一欄位即可換算。'; return; }
    const j = n / rate; jpy.value = String(Math.round(j));
    result.textContent = `NT$${twd.format(n)} ≈ ¥${yen.format(j)}`;
  };
  rateInput.value = rate;
  jpy.addEventListener('input', fromJpy);
  tw.addEventListener('input', fromTwd);
  rateInput.addEventListener('input', () => {
    const r = num(rateInput.value);
    if (r > 0) {
      rate = r; saved.rate = r; saved.manual = true; saved.updated = new Date().toLocaleString('zh-TW'); save(RATE_KEY, saved);
      showRateStatus(); fromJpy(); renderTax();
    }
  });
  document.querySelectorAll('[data-jpy]').forEach(b => b.addEventListener('click', () => { jpy.value = b.dataset.jpy; fromJpy(); jpy.focus(); }));
  $('rate-refresh').addEventListener('click', async () => {
    rateStatus.textContent = '更新中…';
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/JPY', { cache: 'no-store' });
      const data = await res.json();
      const r = data && data.rates && data.rates.TWD;
      if (!(r > 0)) throw new Error('no rate');
      rate = r; saved.rate = r; saved.manual = false; saved.updated = new Date().toLocaleString('zh-TW'); save(RATE_KEY, saved);
      rateInput.value = Math.round(r * 10000) / 10000; showRateStatus(); fromJpy(); renderTax();
    } catch (_) {
      rateStatus.textContent = '無法取得即時匯率（可能離線或服務暫時無法使用），請手動輸入匯率。';
    }
  });
  showRateStatus();

  /* ================= 退稅試算 ================= */
  const TAX_KEY = 'jp-handbook-tax-v1';
  const THRESHOLD = 5000;        // 同店同日、未稅合計門檻（円）
  let rows = load(TAX_KEY, null) || [{ store: '', date: '', amount: '', type: 'incl', rate: '10' }];
  const wrap = $('tax-rows'), out = $('tax-result'), feeInput = $('tax-fee');

  const rowHtml = (r, i) => `
    <fieldset class="tax-row" data-i="${i}"><legend class="sr-only">第 ${i + 1} 筆購物</legend>
      <div class="field"><label for="s${i}">店家</label><input id="s${i}" data-k="store" value="${(r.store || '').replace(/"/g, '&quot;')}" placeholder="例如 Don Quijote 澀谷" autocomplete="off"></div>
      <div class="field"><label for="d${i}">日期</label><input id="d${i}" data-k="date" type="date" value="${r.date || ''}"></div>
      <div class="field"><label for="a${i}">金額（円）</label><input id="a${i}" data-k="amount" inputmode="decimal" value="${r.amount || ''}" placeholder="例如 6600" autocomplete="off"></div>
      <div class="field"><label for="t${i}">金額類型</label><select id="t${i}" data-k="type"><option value="incl"${r.type === 'incl' ? ' selected' : ''}>含稅價</option><option value="excl"${r.type === 'excl' ? ' selected' : ''}>未稅價</option></select></div>
      <div class="field"><label for="r${i}">稅率</label><select id="r${i}" data-k="rate"><option value="10"${r.rate === '10' ? ' selected' : ''}>10%（一般）</option><option value="8"${r.rate === '8' ? ' selected' : ''}>8%（食品）</option></select></div>
      <button type="button" class="tax-row__del" data-del="${i}" aria-label="刪除第 ${i + 1} 筆">刪除</button>
    </fieldset>`;
  const renderRows = () => { wrap.innerHTML = rows.map(rowHtml).join(''); };

  function renderTax() {
    const fee = Math.min(100, Math.max(0, num(feeInput.value) || 0));
    const groups = new Map();
    rows.forEach(r => {
      const amt = num(r.amount); if (!(amt > 0)) return;
      const rt = parseFloat(r.rate) / 100;
      const net = r.type === 'incl' ? amt / (1 + rt) : amt;
      const gross = r.type === 'incl' ? amt : amt * (1 + rt);
      const name = (r.store || '').trim() || '（未填店家）';
      const key = name.toLowerCase() + '|' + (r.date || '');
      const g = groups.get(key) || { name, date: r.date, net: 0, gross: 0, tax: 0 };
      g.net += net; g.gross += gross; g.tax += gross - net; groups.set(key, g);
    });
    if (!groups.size) { out.innerHTML = '<p class="tool__note">填入購物金額後，這裡會顯示預估退稅。</p>'; return; }
    let paid = 0, eligibleBase = 0, refund = 0;
    const cards = [...groups.values()].map(g => {
      const net = Math.floor(g.net + 1e-9), ok = net >= THRESHOLD;
      const r = ok ? Math.floor(g.tax + 1e-9) : 0;
      paid += g.gross; if (ok) { eligibleBase += g.gross; refund += r; }
      const label = g.name + (g.date ? `（${g.date}）` : '');
      return `<li class="tax-group ${ok ? 'is-ok' : 'is-no'}"><strong>${label.replace(/</g, '&lt;')}</strong>
        <span>未稅合計 ¥${yen.format(net)}，含稅 ¥${yen.format(Math.round(g.gross))}</span>
        <span class="tax-group__state">${ok ? `✔ 符合退稅，預估退 ¥${yen.format(r)}` : `✖ 未達 ¥${yen.format(THRESHOLD)}，再買約 ¥${yen.format(THRESHOLD - net)}（未稅）即可退稅`}</span></li>`;
    }).join('');
    const afterFee = Math.floor(refund * (1 - fee / 100));
    out.innerHTML = `<ul class="tax-groups">${cards}</ul>
      <dl class="tax-sum">
        <div><dt>購物總額（含稅）</dt><dd>¥${yen.format(Math.round(paid))}</dd></div>
        <div><dt>符合退稅的金額（含稅）</dt><dd>¥${yen.format(Math.round(eligibleBase))}</dd></div>
        <div><dt>預估退稅</dt><dd>¥${yen.format(refund)}</dd></div>
        <div class="tax-sum__main"><dt>扣手續費後實拿${fee ? `（${fee}%）` : ''}</dt><dd>¥${yen.format(afterFee)} <small>≈ NT$${twd.format(afterFee * rate)}</small></dd></div>
      </dl>`;
  }

  wrap.addEventListener('input', e => {
    const k = e.target.dataset.k; if (!k) return;
    rows[+e.target.closest('.tax-row').dataset.i][k] = e.target.value; save(TAX_KEY, rows); renderTax();
  });
  wrap.addEventListener('click', e => {
    const d = e.target.closest('[data-del]'); if (!d) return;
    rows.splice(+d.dataset.del, 1); if (!rows.length) rows.push({ store: '', date: '', amount: '', type: 'incl', rate: '10' });
    save(TAX_KEY, rows); renderRows(); renderTax();
  });
  $('tax-add').addEventListener('click', () => {
    const last = rows[rows.length - 1] || {};
    rows.push({ store: last.store || '', date: last.date || '', amount: '', type: 'incl', rate: '10' });
    save(TAX_KEY, rows); renderRows(); renderTax(); wrap.querySelector('.tax-row:last-child input')?.focus();
  });
  $('tax-clear').addEventListener('click', () => {
    rows = [{ store: '', date: '', amount: '', type: 'incl', rate: '10' }]; save(TAX_KEY, rows); renderRows(); renderTax();
  });
  feeInput.addEventListener('input', renderTax);
  renderRows(); renderTax();
})();
