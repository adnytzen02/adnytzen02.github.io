// 出發前檢查清單（機場章節與新制總整理共用）：勾選狀態存 localStorage，兩頁同步
(() => {
  const KEY = 'jp-handbook-checklist-v2';
  const OLD = 'jp-rules-2026-checklist';   // 舊版（只有新制頁的 7 項）
  const boxes = [...document.querySelectorAll('.checklist input[data-key]')];
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

  const total = document.getElementById('check-count');
  const render = () => {
    boxes.forEach(b => { b.checked = !!state[b.dataset.key]; });
    if (total) total.textContent = `${boxes.filter(b => b.checked).length} / ${boxes.length}`;
    document.querySelectorAll('.checklist-stage').forEach(fs => {
      const bs = [...fs.querySelectorAll('input[data-key]')];
      const el = fs.querySelector('[data-stage-count]');
      if (el) el.textContent = `${bs.filter(b => b.checked).length} / ${bs.length}`;
    });
  };
  boxes.forEach(b => b.addEventListener('change', () => { state[b.dataset.key] = b.checked; save(state); render(); }));
  document.querySelector('[data-checklist-reset]')?.addEventListener('click', () => {
    if (confirm('確定要取消所有勾選嗎？')) { state = {}; save(state); render(); }
  });
  window.addEventListener('storage', e => { if (e.key === KEY) { state = load(KEY) || {}; render(); } });
  render();
})();
