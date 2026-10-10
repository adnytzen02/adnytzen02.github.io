// 出發前檢查清單：勾選狀態存在 localStorage（私密瀏覽模式可能無法存取，故用 try/catch）
(() => {
  const boxes = [...document.querySelectorAll('#checklist-items input')];
  const count = document.getElementById('check-count');
  const KEY = 'jp-rules-2026-checklist';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) {}
  const update = () => {
    count.textContent = `${boxes.filter(b => b.checked).length} / ${boxes.length}`;
    try { localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(boxes.map(b => [b.id, b.checked])))); } catch (_) {}
  };
  boxes.forEach(b => { b.checked = !!saved[b.id]; b.addEventListener('change', update); });
  update();
})();
