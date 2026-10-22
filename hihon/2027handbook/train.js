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

  // ===== 上車前 30 秒檢查清單：三站車票，每站勾完蓋剪票章（獨立的 localStorage key，不影響出發前清單）=====
  const KEY = 'jp-handbook-train-checklist';
  const box = document.querySelector('[data-train-checklist]');
  const boxes = box ? [...box.querySelectorAll('input[data-tkey]')] : [];
  if (boxes.length) {
    let state = {};
    try { state = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (_) {}
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) {} };
    const count = document.getElementById('train-check-count');
    const bar = box.querySelector('[data-tcheck-progress]');
    const stages = [...box.querySelectorAll('[data-tstage]')];
    const today = () => { const d = new Date(); return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`; };
    // animate：只有剛勾完的那一站播放剪票動畫，重新整理時直接顯示
    const render = (animate) => {
      boxes.forEach(b => { b.checked = !!state[b.dataset.tkey]; });
      const done = boxes.filter(b => b.checked).length;
      count.textContent = `${done} / ${boxes.length}`;
      if (bar) bar.style.width = (done / boxes.length * 100) + '%';
      stages.forEach(fs => {
        const bs = [...fs.querySelectorAll('input[data-tkey]')], n = bs.filter(b => b.checked).length, complete = n === bs.length;
        const dk = '_stamp' + fs.dataset.tstage;
        if (complete && !state[dk]) { state[dk] = today(); save(); }
        if (!complete && state[dk]) { delete state[dk]; save(); }
        fs.querySelector('[data-stage-count]').textContent = complete ? '已剪票' : `${n} / ${bs.length}`;
        fs.querySelector('[data-stamp-date]').textContent = state[dk] || '';
        const was = fs.classList.contains('is-done');
        fs.classList.toggle('is-done', complete);
        if (complete && !was && animate === fs) { fs.classList.remove('just-done'); void fs.offsetWidth; fs.classList.add('just-done'); }
        const node = box.querySelector(`[data-tstage-node="${fs.dataset.tstage}"]`); if (node) node.classList.toggle('is-done', complete);
      });
      box.classList.toggle('is-all-done', done === boxes.length);
      return done;
    };
    boxes.forEach(b => b.addEventListener('change', () => {
      state[b.dataset.tkey] = b.checked; save();
      if (render(b.closest('[data-tstage]')) === boxes.length && b.checked && window.toast) window.toast('🚄 全部確認完成，祝旅途順利！');
    }));
    document.getElementById('train-check-reset')?.addEventListener('click', () => {
      if (confirm('確定要取消所有勾選嗎？')) { state = {}; save(); render(); }
    });
    window.addEventListener('storage', e => { if (e.key === KEY) { try { state = JSON.parse(e.newValue || '{}') || {}; } catch (_) { state = {}; } render(); } });
    render();
  }
})();

// ---------- 新幹線路線立體地圖（桌機限定） ----------
// 條件：寬度 ≥ 1024px、有滑鼠、未開「減少動態」與省流量、支援 WebGL；不符合時只顯示車站時間清單
// 用一般 <script> 依序載入 three.js 精簡版與地圖程式，直接點開 HTML（file://）也能執行
(() => {
  const host = document.querySelector('[data-tm3d]');
  if (!host) return;
  const ok = (() => {
    if (!matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)').matches) return false;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    if (navigator.connection && navigator.connection.saveData) return false;
    try { const c = document.createElement('canvas'), g = c.getContext('webgl2') || c.getContext('webgl'); g?.getExtension('WEBGL_lose_context')?.loseContext(); return !!g; } catch (_) { return false; }
  })();
  if (!ok || !('IntersectionObserver' in window)) return;
  host.hidden = false; host.classList.add('is-loading');        // 先保留版位，避免畫面跳動
  const load = src => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('無法載入 ' + src)); document.head.appendChild(s); });
  const fail = err => { host.classList.remove('is-loading'); host.classList.add('is-failed'); console.warn('立體地圖未載入：', err); };
  const io = new IntersectionObserver(es => {
    if (!es[0].isIntersecting) return;
    io.disconnect();
    (window.THREE ? Promise.resolve() : load(host.dataset.three))
      .then(() => load(host.dataset.src))
      .then(() => { try { window.TrainMap3D.mount(host); } catch (err) { fail(err); } })
      .catch(fail);
  }, { rootMargin: '400px 0px' });
  io.observe(host);
})();
