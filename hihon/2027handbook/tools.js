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

/* ================= 訂房確認信：填資料 → 中文／英文／日文 ================= */
// 「📌 訂房資訊」由表單帶入；其餘為固定文字（中文為使用者提供的原文，英日文為事先翻譯）
// 資料只在記憶體中，不寫入 localStorage
(() => {
  const form = document.getElementById('hm-form');
  if (!form) return;
  const $ = id => document.getElementById(id);
  const v = id => $(id).value.trim();
  const status = $('hm-status'), agesBox = $('hm-ages'), agesList = agesBox.querySelector('.hm-ages__list');
  form.hidden = false; $('hm-actions').hidden = false; $('hm-tabs').hidden = false;

  const ROOM = {
    single: ['單人房', 'Single room', 'シングルルーム'],
    double: ['雙人房（一張大床）', 'Double room (one double bed)', 'ダブルルーム'],
    twin: ['雙床房', 'Twin room (two single beds)', 'ツインルーム'],
    triple: ['三人房', 'Triple room', 'トリプルルーム'],
    family: ['家庭房', 'Family room', 'ファミリールーム'],
    washitsu: ['和室', 'Japanese-style room (washitsu)', '和室']
  };
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dZh = s => { if (!s) return 'XXXX年XX月XX日'; const [y, m, d] = s.split('-'); return `${y}年${m}月${d}日`; };
  const dEn = s => { if (!s) return 'XXXX-XX-XX'; const [y, m, d] = s.split('-'); return `${MONTHS[+m - 1]} ${+d}, ${y}`; };
  const andList = a => a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];

  // 兒童人數 → 年齡欄
  const syncAges = () => {
    const n = Math.max(0, Math.min(6, parseInt(v('hm-child'), 10) || 0));
    const old = [...agesList.querySelectorAll('input')].map(i => i.value);
    agesList.innerHTML = '';
    for (let i = 0; i < n; i++) {
      const w = document.createElement('label'); w.className = 'hm-age';
      w.innerHTML = `<span class="sr-only">第 ${i + 1} 位兒童年齡</span><input type="number" min="0" max="17" inputmode="numeric" placeholder="X" value="${old[i] || ''}"><span aria-hidden="true">歲</span>`;
      agesList.appendChild(w);
    }
    agesBox.hidden = n === 0;
  };

  const data = () => {
    const adult = v('hm-adult'), childRaw = v('hm-child');
    const ages = [...agesList.querySelectorAll('input')].map(i => i.value.trim() || 'X');
    const r = $('hm-room').value, other = v('hm-room-other');
    const room = r === 'other' ? [other || 'XXX', other || 'XXX', other || 'XXX'] : (ROOM[r] || ['XXX', 'XXX', 'XXX']);
    return { name: v('hm-name') || 'XXX', no: v('hm-no') || 'XXXXXXXX', cin: v('hm-in'), cout: v('hm-out'), adult, childRaw, ages, room };
  };

  const zh = d => {
    const kids = d.childRaw === '' ? '、X位兒童（年齡：X歲、X歲）' : +d.childRaw === 0 ? '' : `、${d.childRaw}位兒童（年齡：${d.ages.map(a => a + '歲').join('、')}）`;
    return ['主旨：訂房確認', '', '您好：', '我有透過訂房網站預訂貴飯店的住宿，想確認訂單是否成立，以及相關入住資訊是否正確。', '',
      '📌 訂房資訊', `* 訂房姓名：${d.name}`, `* 訂房編號：${d.no}`, `* 入住日期：${dZh(d.cin)}`, `* 退房日期：${dZh(d.cout)}`,
      `* 入住人數：${d.adult || 'X'}位大人${kids}`, `* 預訂房型：${d.room[0]}`, '',
      '想麻煩您協助確認以下事項：', '1. 訂房是否成功，訂單資料是否正確。', '2. 預訂的房型及床型是否無誤。',
      '3. 兒童是否可以與大人同床入住？', '   同床入住的年齡限制及相關費用為何？', '4. 其他特殊需求是否有備註（如有）。', '',
      '再麻煩您協助確認，謝謝！', '期待入住貴飯店，謝謝您的協助。'].join('\n');
  };
  const en = d => {
    const a = d.adult || 'X', adults = `${a} adult${a === '1' ? '' : 's'}`;
    const n = d.childRaw;
    const kids = n === '' ? ', X children (ages: X and X)' : +n === 0 ? '' : +n === 1 ? `, 1 child (age: ${d.ages[0]})` : `, ${n} children (ages: ${andList(d.ages)})`;
    return ['Subject: Reservation Confirmation', '', 'Dear Sir or Madam,',
      'I have made a reservation at your hotel through a booking website. I would like to confirm that the reservation has been completed and that the details below are correct.', '',
      '📌 Reservation Details', `* Guest name: ${d.name}`, `* Reservation number: ${d.no}`, `* Check-in date: ${dEn(d.cin)}`, `* Check-out date: ${dEn(d.cout)}`,
      `* Number of guests: ${adults}${kids}`, `* Room type: ${d.room[1]}`, '',
      'Could you kindly confirm the following?', '1. Whether the reservation has been completed and all details are correct.', '2. Whether the room type and bed type are correct.',
      '3. Can children share a bed with adults?', '   If so, what are the age limit and any additional charges?', '4. Whether any special requests have been noted (if any).', '',
      'Thank you very much for checking.', 'I look forward to staying at your hotel. Thank you for your assistance.'].join('\n');
  };
  const ja = d => {
    const n = d.childRaw;
    const kids = n === '' ? '、子ども X名（年齢：X歳、X歳）' : +n === 0 ? '' : `、子ども${n}名（年齢：${d.ages.map(a => a + '歳').join('、')}）`;
    return ['件名：予約確認のお願い', '', 'ご担当者様', '予約サイトを通じて貴ホテルに宿泊の予約をいたしました。予約が成立しているか、また宿泊内容に誤りがないかを確認させていただきたく、ご連絡いたしました。', '',
      '📌 予約内容', `* 予約者名：${d.name}`, `* 予約番号：${d.no}`, `* チェックイン日：${dZh(d.cin)}`, `* チェックアウト日：${dZh(d.cout)}`,
      `* 宿泊人数：大人${d.adult || 'X'}名${kids}`, `* 部屋タイプ：${d.room[2]}`, '',
      'お手数ですが、以下の点についてご確認をお願いいたします。', '1. 予約が成立しているか、予約内容に誤りがないか。', '2. 予約した部屋タイプおよびベッドタイプに誤りがないか。',
      '3. 子どもは大人と同じベッドで添い寝できますか。', '   添い寝の年齢制限および追加料金はありますか。', '4. その他の特別なリクエストが備考に記載されているか（ある場合）。', '',
      'ご確認のほど、よろしくお願いいたします。', '貴ホテルでの滞在を楽しみにしております。ご協力ありがとうございます。'].join('\n');
  };

  const out = { zh: $('hm-letter-zh'), en: $('hm-letter-en'), ja: $('hm-letter-ja') };
  const build = () => {
    $('hm-room-other-f').hidden = $('hm-room').value !== 'other';
    const d = data();
    out.zh.textContent = zh(d); out.en.textContent = en(d); out.ja.textContent = ja(d);
    const a = v('hm-in'), b = v('hm-out');
    if (a && b) { const nights = Math.round((new Date(b) - new Date(a)) / 864e5); status.textContent = nights > 0 ? `共 ${nights} 晚。` : '⚠️ 退房日期要晚於入住日期，請再檢查一次。'; }
    else status.textContent = '';
  };
  form.addEventListener('input', e => { if (e.target.id === 'hm-child') syncAges(); build(); });
  form.addEventListener('change', build);

  // 語言分頁（方向鍵切換）
  const tabs = [...document.querySelectorAll('#hm-tabs [role="tab"]')];
  const show = (i, focus) => {
    tabs.forEach((t, j) => { const on = i === j; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; $(t.getAttribute('aria-controls')).hidden = !on; });
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(i));
    t.addEventListener('keydown', e => {
      const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (k) { e.preventDefault(); show((i + k + tabs.length) % tabs.length, true); }
    });
  });

  // 複製：單一語言或中文＋外文
  const SEP = '\n\n――――――――――\n\n';
  const LABEL = { zh: '中文', en: '英文', ja: '日文', 'zh+en': '中文＋英文', 'zh+ja': '中文＋日文' };
  const text = k => k.split('+').map(x => out[x].textContent).join(SEP);
  document.querySelectorAll('[data-hm-copy]').forEach(b => b.addEventListener('click', async () => {
    const k = b.dataset.hmCopy, msg = `已複製${LABEL[k]}版本。`;
    try { await navigator.clipboard.writeText(text(k)); window.toast ? window.toast(msg) : (status.textContent = msg); }
    catch (_) {
      const lang = k.split('+').pop(); show(['zh', 'en', 'ja'].indexOf(lang));
      const r = document.createRange(); r.selectNodeContents(out[lang]); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
      status.textContent = '無法自動複製，已幫你選取信件文字，請按「複製」。';
    }
  }));
  $('hm-reset').addEventListener('click', () => { form.reset(); syncAges(); build(); status.textContent = '已清空。'; });
  syncAges(); build();
})();
