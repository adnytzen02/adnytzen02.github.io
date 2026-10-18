// 全站搜尋：開啟對話框時才載入索引（search-index.js），以子字串比對，支援多關鍵字（AND）
(() => {
  const dlg = document.getElementById('search-dialog');
  if (!dlg || typeof dlg.showModal !== 'function') {
    // 不支援 <dialog> 的舊瀏覽器：隱藏搜尋按鈕
    document.querySelectorAll('[data-search-open]').forEach(b => (b.hidden = true));
    return;
  }
  const input = dlg.querySelector('#search-input');
  const list = dlg.querySelector('#search-results');
  const status = dlg.querySelector('#search-status');
  const HINT = '輸入關鍵字開始搜尋。可用空白分隔多個詞，快速鍵：/';
  let loading = null;

  // 正規化：全形轉半形、轉小寫（NFKC）
  const norm = s => s.normalize('NFKC').toLowerCase();
  const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // 延遲載入索引
  const load = () => loading || (loading = new Promise((res, rej) => {
    if (window.SEARCH_INDEX) return res(window.SEARCH_INDEX);
    const s = document.createElement('script');
    s.src = 'search-index.js';
    s.onload = () => {
      window.SEARCH_INDEX.forEach(e => { e._h = norm(e.h + ' ' + e.c); e._t = norm(e.t); });
      res(window.SEARCH_INDEX);
    };
    s.onerror = () => { loading = null; rej(new Error('載入失敗')); };
    document.head.appendChild(s);
  }));

  const count = (hay, term) => { let n = 0, i = -1; while ((i = hay.indexOf(term, i + 1)) !== -1 && n < 5) n++; return n; };

  // 以標籤對照原文位置產生摘要（NFKC 可能改變長度，因此在原文上以正規化後的字串近似定位）
  const snippet = (text, terms) => {
    const n = norm(text);
    let pos = -1;
    for (const t of terms) { const p = n.indexOf(t); if (p !== -1 && (pos === -1 || p < pos)) pos = p; }
    const start = Math.max(0, (pos < 0 ? 0 : pos) - 24);
    let part = text.slice(start, start + 90);
    let out = esc(part);
    terms.forEach(t => {
      const re = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      out = out.replace(re, m => `<mark>${m}</mark>`);
    });
    return (start > 0 ? '…' : '') + out + (start + 90 < text.length ? '…' : '');
  };

  const render = (q, data) => {
    const terms = norm(q).split(/\s+/).filter(Boolean);
    list.innerHTML = '';
    if (!terms.length) { status.textContent = HINT; return; }
    const hits = [];
    for (const e of data) {
      if (!terms.every(t => e._h.includes(t) || e._t.includes(t))) continue;
      const score = terms.reduce((s, t) => s + (e._h.includes(t) ? 10 : 0) + count(e._t, t), 0);
      hits.push([score, e]);
    }
    hits.sort((a, b) => b[0] - a[0]);
    const shown = hits.slice(0, 30);
    status.textContent = hits.length ? `找到 ${hits.length} 筆結果${hits.length > 30 ? '（顯示前 30 筆）' : ''}。` : `找不到「${q}」。試試較短的關鍵字，或檢查有無錯字。`;
    list.innerHTML = shown.map(([, e]) => {
      const href = e.p + (e.i ? '#' + e.i : '');
      const trail = [e.n, e.c && e.c !== e.h ? e.c : ''].filter(Boolean).map(esc).join(' › ');
      const body = e.t ? `<span class="search__snip">${snippet(e.t, terms)}</span>` : '';
      return `<li><a href="${href}"><span class="search__trail">${trail}</span><strong>${esc(e.h)}</strong>${body}</a></li>`;
    }).join('');
  };

  let timer;
  const run = () => load().then(d => render(input.value.trim(), d))
    .catch(() => { status.textContent = '搜尋索引載入失敗，請重新整理頁面後再試。'; });

  const open = () => {
    if (!dlg.open) dlg.showModal();
    input.focus(); input.select();
    run();
  };
  const close = () => dlg.open && dlg.close();

  document.querySelectorAll('[data-search-open]').forEach(b => b.addEventListener('click', open));
  dlg.querySelector('[data-search-close]').addEventListener('click', close);
  // 點擊遮罩關閉
  dlg.addEventListener('click', e => { if (e.target === dlg) close(); });
  // 點選結果後關閉（同頁錨點不會重新載入）
  list.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(run, 120); });
  // 快速鍵：「/」或 Ctrl/⌘ + K
  document.addEventListener('keydown', e => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if ((e.key === '/' && !typing && !dlg.open) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault(); open();
    }
  });
})();
