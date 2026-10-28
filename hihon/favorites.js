// 收藏景點：存在 localStorage；資訊卡加 ☆ 按鈕；「我的行程」頁渲染清單
(() => {
  const KEY = 'jp-handbook-favs-v1';
  const page = location.pathname.split('/').pop() || 'index.html';
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (_) { return []; } };
  const write = list => { try { localStorage.setItem(KEY, JSON.stringify(list)); return true; } catch (_) { return false; } };
  const mapUrl = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  const keyOf = (p, id) => p + '#' + id;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // 導覽列的收藏數量
  const updateCount = () => {
    const n = read().length;
    document.querySelectorAll('[data-fav-count]').forEach(el => { el.textContent = n; el.hidden = n === 0; });
  };

  // ---- 資訊卡 / 表格列：加入 ☆ 按鈕 ----
  const buttons = [];
  const refreshButtons = () => {
    const keys = new Set(read().map(f => f.key));
    buttons.forEach(({ btn, key }) => {
      const on = keys.has(key);
      btn.setAttribute('aria-pressed', on);
      btn.querySelector('.fav-btn__icon').textContent = on ? '★' : '☆';
      btn.querySelector('.fav-btn__text').textContent = on ? '已收藏' : '收藏';
    });
  };
  const toggle = (el, key) => {
    const list = read(); const i = list.findIndex(f => f.key === key);
    if (i >= 0) { list.splice(i, 1); window.toast && window.toast('已從「我的行程」移除。'); }
    else {
      list.push({ key, page, fid: el.dataset.favId, title: el.dataset.title, jp: el.dataset.jp || '',
                  kind: el.dataset.kind || '', area: el.dataset.area || '', q: el.dataset.q || el.dataset.title });
      window.toast && window.toast('已加入「我的行程」。', { action: '查看', onAction: () => { location.href = 'trip.html'; } });
    }
    if (!write(list)) window.toast && window.toast('無法儲存（瀏覽器可能封鎖了儲存空間）。');
    updateCount(); refreshButtons();
  };
  document.querySelectorAll('[data-fav-id]').forEach(el => {
    const key = keyOf(page, el.dataset.favId);
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'fav-btn';
    btn.setAttribute('aria-label', `收藏「${el.dataset.title}」`);
    btn.innerHTML = '<span class="fav-btn__icon" aria-hidden="true">☆</span><span class="fav-btn__text">收藏</span>';
    btn.addEventListener('click', () => toggle(el, key));
    const host = el.tagName === 'TR' ? el.querySelector('td') : el.querySelector('header');
    if (!host) return;
    if (el.tagName === 'TR') host.appendChild(btn); else host.insertBefore(btn, host.querySelector('.map-link'));
    buttons.push({ btn, key });
  });

  // ---- 我的行程頁 ----
  const root = document.getElementById('trip-root');
  const actions = document.getElementById('trip-actions');
  const GROUPS = [['神社寺廟', ['神社', '寺廟']], ['水族館', ['水族館']], ['動物園', ['動物園']], ['動漫店', ['動漫店']]];
  const grouped = list => GROUPS.map(([label, kinds]) => [label, list.filter(f => kinds.includes(f.kind))])
    .concat([['其他', list.filter(f => !GROUPS.some(g => g[1].includes(f.kind)))]]).filter(g => g[1].length);

  const renderTrip = () => {
    if (!root) return;
    const list = read();
    if (actions) actions.hidden = !list.length;
    if (!list.length) {
      root.innerHTML = '<div class="trip__empty"><p>還沒有收藏任何景點。</p><p>到章節裡的資訊卡點「☆ 收藏」，就會出現在這裡。</p>' +
        '<p><a class="btn" href="shrine.html">逛神社寺廟</a> <a class="btn btn--ghost" href="zoo.html">看水族館動物園</a> <a class="btn btn--ghost" href="anime.html">看動漫街</a></p></div>';
      return;
    }
    root.innerHTML = grouped(list).map(([label, items]) =>
      `<section class="trip__group"><h2>${esc(label)}<span class="trip__n">${items.length}</span></h2><ul>` +
      items.map(f => `<li><div class="trip__main"><a class="trip__title" href="${esc(f.page)}#${esc(f.fid)}">${esc(f.title)}</a>` +
        (f.jp ? `<span class="trip__jp" lang="ja">${esc(f.jp)}</span>` : '') +
        (f.area ? `<span class="trip__area">${esc(f.area)}</span>` : '') + '</div>' +
        `<div class="trip__btns"><a class="map-link" target="_blank" rel="noopener noreferrer" href="${mapUrl(f.q)}" aria-label="在 Google 地圖開啟「${esc(f.title)}」（新分頁）"><span aria-hidden="true">📍</span> 地圖</a>` +
        `<button type="button" class="fav-remove" data-key="${esc(f.key)}" aria-label="移除「${esc(f.title)}」">移除</button></div></li>`).join('') +
      '</ul></section>').join('');
  };
  if (root) {
    root.addEventListener('click', e => {
      const b = e.target.closest('.fav-remove'); if (!b) return;
      write(read().filter(f => f.key !== b.dataset.key)); updateCount(); renderTrip();
      window.toast && window.toast('已移除。');
    });
    document.getElementById('trip-print')?.addEventListener('click', () => window.print());
    document.getElementById('trip-clear')?.addEventListener('click', () => {
      if (confirm('確定要清空所有收藏嗎？此動作無法復原。')) { write([]); updateCount(); renderTrip(); }
    });
    document.getElementById('trip-copy')?.addEventListener('click', async () => {
      const text = grouped(read()).map(([label, items]) => `【${label}】\n` + items.map(f =>
        `・${f.title}${f.jp ? '（' + f.jp + '）' : ''}${f.area ? ' — ' + f.area : ''}\n  ${mapUrl(f.q)}`).join('\n')).join('\n\n');
      try { await navigator.clipboard.writeText(text); window.toast('已複製，可以貼到通訊軟體分享。'); }
      catch (_) {
        const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); window.toast('已複製。'); } catch (__) { window.toast('複製失敗，請手動選取文字。'); }
        ta.remove();
      }
    });
  }

  // 其他分頁修改收藏時同步
  window.addEventListener('storage', e => { if (e.key === KEY) { updateCount(); refreshButtons(); renderTrip(); } });
  updateCount(); refreshButtons(); renderTrip();
})();
