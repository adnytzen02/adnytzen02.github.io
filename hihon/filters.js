// 列表篩選：依資訊卡的 data-kind / data-region 篩選（使用原生 radio，鍵盤與讀屏友善）
(() => {
  const bar = document.querySelector('.filterbar');
  if (!bar) return;
  const cards = [...document.querySelectorAll('.spot-card[data-kind]')];
  const specs = bar.dataset.filters.split(',').map(s => s.split(':'));   // [[key, label], ...]
  const state = {};
  const uniq = key => [...new Set(cards.map(c => c.dataset[key]).filter(Boolean))];

  // 建立介面
  bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', '篩選景點');
  bar.innerHTML = specs.map(([key, label]) => {
    state[key] = '';
    const opts = [['', '全部'], ...uniq(key).map(v => [v, v])];
    return `<fieldset class="filterbar__set"><legend>${label}</legend>` + opts.map(([v, t], i) =>
      `<label class="pill"><input type="radio" name="f-${key}" value="${v}"${i === 0 ? ' checked' : ''}><span>${t}</span></label>`).join('') + '</fieldset>';
  }).join('') +
    '<p class="filterbar__status" role="status" aria-live="polite"></p><button type="button" class="filterbar__reset" hidden>清除篩選</button>';
  const status = bar.querySelector('.filterbar__status');
  const reset = bar.querySelector('.filterbar__reset');

  const apply = () => {
    let shown = 0;
    cards.forEach(c => {
      const ok = specs.every(([k]) => !state[k] || c.dataset[k] === state[k]);
      c.hidden = !ok; if (ok) shown++;
    });
    // 沒有可見資訊卡的分組標題 / 地區區塊一併隱藏
    document.querySelectorAll('[data-group]').forEach(h => {
      let n = h.nextElementSibling, any = false;
      while (n && !/^H[234]$/.test(n.tagName)) { if (n.matches('.spot-card') && !n.hidden) any = true; n = n.nextElementSibling; }
      h.hidden = !any;
    });
    document.querySelectorAll('.zoo-region').forEach(r => {
      const total = r.querySelectorAll('.spot-card').length;
      r.hidden = total > 0 && !r.querySelector('.spot-card:not([hidden])');
    });
    // 速覽表依「類型」欄過濾
    document.querySelectorAll('.table-wrap table').forEach(t => {
      const heads = [...t.querySelectorAll('thead th')].map(th => th.textContent.trim());
      const idx = heads.indexOf('類型');
      if (idx < 0 || !state.kind) { t.querySelectorAll('tbody tr').forEach(tr => (tr.hidden = false)); return; }
      t.querySelectorAll('tbody tr').forEach(tr => { tr.hidden = (tr.children[idx]?.textContent.trim() !== state.kind); });
    });
    const active = specs.some(([k]) => state[k]);
    reset.hidden = !active;
    status.textContent = active ? `顯示 ${shown} / ${cards.length} 處` : `共 ${cards.length} 處`;
  };

  bar.addEventListener('change', e => {
    const m = e.target.name && e.target.name.match(/^f-(.+)$/);
    if (m) { state[m[1]] = e.target.value; apply(); }
  });
  reset.addEventListener('click', () => {
    specs.forEach(([k]) => { state[k] = ''; bar.querySelector(`input[name="f-${k}"][value=""]`).checked = true; });
    apply();
  });

  // 從搜尋 / 目錄 / 連結跳到被篩掉的項目時，自動清除篩選
  const reveal = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const el = id && document.getElementById(id);
    if (el && el.closest('[hidden]')) { reset.click(); el.scrollIntoView(); }
  };
  window.addEventListener('hashchange', reveal);
  apply(); reveal();
})();
