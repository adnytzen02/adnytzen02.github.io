// 鐵道搭乘指南：分頁切換、行李尺寸檢測器、上車前檢查清單
(() => {
  // ===== Tabs（支援方向鍵、Home/End，以及 #錨點 直接開啟對應分頁）=====
  const root = document.querySelector('[data-tabs]');
  if (root) {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
    const select = (i, focus) => {
      tabs.forEach((t, j) => {
        const on = i === j;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        panels[j].hidden = !on;
      });
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', e => {
        const n = tabs.length;
        const k = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: n - 1 }[e.key];
        if (k === undefined) return;
        e.preventDefault(); select((k + n) % n, true);
      });
    });
    const fromHash = () => {
      const i = panels.findIndex(p => '#' + p.id === location.hash);
      if (i < 0) return;
      select(i);
      requestAnimationFrame(() => root.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    };
    window.addEventListener('hashchange', fromHash);
    fromHash();
  }

  // ===== 新幹線行李尺寸快速檢測器 =====
  const ids = ['lug-l', 'lug-w', 'lug-h'].map(id => document.getElementById(id));
  if (ids.every(Boolean)) {
    const box = document.getElementById('lug-result');
    const sumEl = document.getElementById('lug-sum');
    const title = document.getElementById('lug-title');
    const desc = document.getElementById('lug-desc');
    const bar = document.getElementById('lug-bar');
    const RESULT = {
      idle: ['請輸入長、寬、高', '三個欄位都填好就會顯示判定結果。'],
      ok:   ['✅ 免預約', '三邊總和 160cm 以下，可放行李架或腳邊。'],
      warn: ['⚠️ 需預約特大行李席', '160–250cm：請訂「特大荷物スペースつき座席」；未預約上車將收 1,000 円手續費。'],
      no:   ['🚫 無法攜帶上車', '超過 250cm：請改用宅配（宅急便）寄送行李。']
    };
    const update = () => {
      const v = ids.map(i => parseFloat(i.value));
      const filled = v.every(n => Number.isFinite(n) && n > 0);
      const sum = filled ? Math.round(v.reduce((a, b) => a + b, 0) * 10) / 10 : 0;
      const state = !filled ? 'idle' : sum <= 160 ? 'ok' : sum <= 250 ? 'warn' : 'no';
      box.dataset.state = state;
      sumEl.textContent = sum.toLocaleString('zh-TW');
      [title.textContent, desc.textContent] = RESULT[state];
      bar.style.width = Math.min(sum / 250 * 100, 100) + '%';
    };
    ids.forEach(i => i.addEventListener('input', update));
    document.querySelectorAll('[data-lug]').forEach(b => b.addEventListener('click', () => {
      b.dataset.lug.split(',').forEach((n, k) => { ids[k].value = n; });
      update();
    }));
    update();
  }

  // ===== 上車前 30 秒檢查清單（獨立的 localStorage key，不影響出發前清單）=====
  const KEY = 'jp-handbook-train-checklist';
  const boxes = [...document.querySelectorAll('#train-checklist-box input[data-tkey]')];
  if (boxes.length) {
    let state = {};
    try { state = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (_) {}
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) {} };
    const count = document.getElementById('train-check-count');
    const render = () => {
      boxes.forEach(b => { b.checked = !!state[b.dataset.tkey]; });
      const done = boxes.filter(b => b.checked).length;
      count.textContent = `${done} / ${boxes.length}`;
      if (done === boxes.length && window.toast) window.toast('🚄 全部確認完成，祝旅途順利！');
    };
    boxes.forEach(b => b.addEventListener('change', () => { state[b.dataset.tkey] = b.checked; save(); render(); }));
    document.getElementById('train-check-reset')?.addEventListener('click', () => {
      if (confirm('確定要取消所有勾選嗎？')) { state = {}; save(); render(); }
    });
    render();
  }
})();
