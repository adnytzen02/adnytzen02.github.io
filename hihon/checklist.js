// 出發前檢查清單（工具頁）：勾選狀態存 localStorage；每個階段全部完成時在那一頁「蓋章」並記下完成日期
(() => {
  const KEY = 'jp-handbook-checklist-v2';
  const OLD = 'jp-rules-2026-checklist';   // 最早版本（只有新制頁的 7 項）
  const root = document.querySelector('[data-checklist]') || document;
  const boxes = [...root.querySelectorAll('input[data-key]')];
  if (!boxes.length) return;
  const load = k => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (_) { return null; } };
  const save = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (_) {} };

  let state = load(KEY);
  if (!state) {   // 從舊版遷移，不讓使用者已勾的項目消失
    const old = load(OLD) || {};
    const map = { 'chk-1': ['passport'], 'chk-2': ['powerbank'], 'chk-3': ['lodging-tax'], 'chk-4': ['tax-budget'],
                  'chk-5': ['taxfree-sealed', 'early'], 'chk-6': ['attractions'], 'chk-7': ['jesta'] };
    state = {};
    Object.entries(map).forEach(([o, keys]) => { if (old[o]) keys.forEach(k => (state[k] = true)); });
    if (Object.keys(state).length) save(state);
  }

  const stages = [...root.querySelectorAll('.checklist-stage')];
  const total = document.getElementById('check-count');
  const bar = root.querySelector('[data-check-progress]');
  const today = () => { const d = new Date(); return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`; };

  // animate：只有使用者剛勾完的那一頁才播放蓋章動畫，重新整理頁面時直接顯示
  const render = (animate) => {
    boxes.forEach(b => { b.checked = !!state[b.dataset.key]; });
    const done = boxes.filter(b => b.checked).length;
    if (total) total.textContent = `${done} / ${boxes.length}`;
    if (bar) bar.style.width = (done / boxes.length * 100) + '%';
    stages.forEach((fs, i) => {
      const bs = [...fs.querySelectorAll('input[data-key]')];
      const n = bs.filter(b => b.checked).length;
      const complete = n === bs.length;
      const dateKey = '_stamp' + (fs.dataset.stage || i + 1);   // 蓋章日期存在同一筆紀錄裡
      if (complete && !state[dateKey]) { state[dateKey] = today(); save(state); }
      if (!complete && state[dateKey]) { delete state[dateKey]; save(state); }
      const el = fs.querySelector('[data-stage-count]');
      if (el) el.textContent = complete ? '已完成' : `${n} / ${bs.length}`;
      const date = fs.querySelector('[data-stamp-date]');
      if (date) date.textContent = state[dateKey] || '';
      const was = fs.classList.contains('is-done');
      fs.classList.toggle('is-done', complete);
      if (complete && !was && animate === fs) {
        fs.classList.remove('just-done'); void fs.offsetWidth; fs.classList.add('just-done');
      }
      const node = root.querySelector(`[data-stage-node="${fs.dataset.stage || i + 1}"]`);
      if (node) node.classList.toggle('is-done', complete);
    });
  };

  boxes.forEach(b => b.addEventListener('change', () => {
    state[b.dataset.key] = b.checked; save(state); render(b.closest('.checklist-stage'));
  }));
  root.querySelector('[data-checklist-reset]')?.addEventListener('click', () => {
    if (confirm('確定要取消所有勾選嗎？')) { state = {}; save(state); render(); }
  });
  // 其他分頁修改時同步
  window.addEventListener('storage', e => { if (e.key === KEY) { state = load(KEY) || {}; render(); } });
  render();
})();
