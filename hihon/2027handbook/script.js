// 共用腳本：閱讀進度、捲動顯示、目錄高亮、回到頂端
(() => {
  const doc = document.documentElement;
  const bar = document.getElementById('progress');
  const toTop = document.querySelector('.to-top');

  // 閱讀進度條 + 回到頂端按鈕（以 requestAnimationFrame 節流）
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = doc.scrollHeight - doc.clientHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`;
      if (toTop) toTop.hidden = doc.scrollTop < 600;
      ticking = false;
    });
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 捲動顯示（沒有 IntersectionObserver 時直接顯示）
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.05 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  // 目錄：依目前閱讀位置標示 aria-current（以捲動位置計算，直接跳到頁面中段也正確）
  const links = [...document.querySelectorAll('.toc a[href^="#"]')];
  if (links.length) {
    const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const targets = [...document.querySelectorAll('article > section[id], article h2[id], article h3[id]')]
      .filter(el => byId.has(el.id));
    let current = null, spyTick = false;
    const spy = () => {
      spyTick = false;
      let hit = null;
      for (const t of targets) { if (t.getBoundingClientRect().top <= window.innerHeight * 0.3) hit = t; else break; }
      if (!hit || hit.id === current) return;
      current = hit.id;
      links.forEach(a => { a.removeAttribute('aria-current'); a.classList.remove('active'); });
      const a = byId.get(hit.id);
      a.setAttribute('aria-current', 'true'); a.classList.add('active');
      document.dispatchEvent(new CustomEvent('toc:current', { detail: { id: hit.id, text: a.textContent.trim() } }));
      // 只展開目前閱讀的群組，並讓高亮項目留在目錄可視範圍內
      document.querySelectorAll('.toc__group.is-open').forEach(g => g.classList.remove('is-open'));
      const grp = a.closest('.toc__group'); if (grp) grp.classList.add('is-open');
      const toc = a.closest('.toc');
      if (toc && toc.scrollHeight > toc.clientHeight) {
        const r = a.getBoundingClientRect(), t = toc.getBoundingClientRect();
        if (r.top < t.top + 40 || r.bottom > t.bottom - 40) toc.scrollTop += r.top - t.top - t.height / 3;
      }
    };
    document.addEventListener('scroll', () => { if (!spyTick) { spyTick = true; requestAnimationFrame(spy); } }, { passive: true });
    spy();
  }

  // 手機版：目錄預設收合
  const details = document.querySelector('.toc__details');
  if (details && window.matchMedia('(max-width: 960px)').matches) details.open = false;

  // 手機版：捲過頁首目錄後，畫面上方出現「目錄列」，點開從底部滑出完整目錄，不必再滑回頂端
  const toc = document.querySelector('.toc');
  if (toc && links.length) {
    const bar = document.createElement('div');
    bar.className = 'tocbar'; bar.hidden = true;
    bar.innerHTML = '<button type="button" class="tocbar__btn" aria-haspopup="dialog"><span class="tocbar__icon" aria-hidden="true">☰</span><span class="tocbar__label">目錄</span><span class="tocbar__now"></span><span class="tocbar__open" aria-hidden="true">展開</span></button>';
    const sheet = document.createElement('dialog');
    sheet.className = 'tocsheet'; sheet.setAttribute('aria-labelledby', 'tocsheet-h');
    sheet.innerHTML = '<div class="tocsheet__head"><h2 id="tocsheet-h">本頁目錄</h2><button type="button" class="tocsheet__close" aria-label="關閉目錄">✕</button></div><nav class="tocsheet__nav" aria-label="本頁目錄（彈出）"></nav>';
    const list = toc.querySelector('ol').cloneNode(true);
    list.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
    list.querySelectorAll('.toc__group').forEach(g => g.classList.add('is-open'));   // 彈出目錄全部展開
    sheet.querySelector('nav').append(list);
    const art = toc.parentElement.querySelector('article');
    (art || toc.parentElement).prepend(bar); document.body.append(sheet);   // 放進文章內，黏貼範圍才會涵蓋整篇
    const btn = bar.querySelector('button'), now = bar.querySelector('.tocbar__now');
    const mq = window.matchMedia('(max-width: 960px)');
    let pastToc = false;
    const sync = () => { bar.hidden = !(mq.matches && pastToc); };
    new IntersectionObserver(es => { const e = es[0]; pastToc = !e.isIntersecting && e.boundingClientRect.top < 0; sync(); }).observe(toc);
    mq.addEventListener ? mq.addEventListener('change', sync) : mq.addListener(sync);
    // 頁首高度 → 目錄列黏貼位置
    const header = document.querySelector('.site-header');
    const setTop = () => document.documentElement.style.setProperty('--hdr-h', (header ? header.offsetHeight : 0) + 'px');
    setTop(); if (header && 'ResizeObserver' in window) new ResizeObserver(setTop).observe(header);
    const mark = id => sheet.querySelectorAll('a').forEach(x => {
      const on = x.getAttribute('href') === '#' + id;
      x.classList.toggle('active', on); on ? x.setAttribute('aria-current', 'true') : x.removeAttribute('aria-current');
    });
    let curId = '';
    document.addEventListener('toc:current', e => { curId = e.detail.id; now.textContent = e.detail.text; mark(curId); });
    const cur = toc.querySelector('a.active'); if (cur) { curId = cur.getAttribute('href').slice(1); now.textContent = cur.textContent.trim(); mark(curId); }
    let viaLink = false;
    if (typeof sheet.showModal === 'function') {
      btn.addEventListener('click', () => {
        sheet.showModal();
        const a = sheet.querySelector('a.active') || sheet.querySelector('a');
        if (a) { a.scrollIntoView({ block: 'center' }); a.focus({ preventScroll: true }); }
      });
      sheet.querySelector('.tocsheet__close').addEventListener('click', () => sheet.close());
      sheet.addEventListener('click', e => {
        if (e.target === sheet) return sheet.close();                 // 點背景關閉
        if (e.target.closest('a')) { viaLink = true; sheet.close(); }  // 點目錄項目：關閉並照常跳轉
      });
      // 用關閉鈕、Esc 或點背景關閉時，焦點回到目錄列；點項目跳轉時不搶焦點
      sheet.addEventListener('close', () => { if (!viaLink) btn.focus({ preventScroll: true }); viaLink = false; });
    } else {
      btn.addEventListener('click', () => toc.scrollIntoView());      // 舊瀏覽器：回到頁首目錄
    }
  }
})();

// ===== 提示訊息（toast）：供其他腳本使用 window.toast(訊息, {action, onAction}) =====
(() => {
  let box, timer;
  window.toast = (msg, opt = {}) => {
    if (!box) {
      box = document.createElement('div');
      box.className = 'toast'; box.setAttribute('role', 'status'); box.setAttribute('aria-live', 'polite');
      document.body.appendChild(box);
    }
    box.textContent = msg;
    if (opt.action) {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = opt.action;
      b.addEventListener('click', () => { opt.onAction && opt.onAction(); box.classList.remove('show'); });
      box.appendChild(b);
    }
    box.classList.add('show');
    clearTimeout(timer);
    if (!opt.sticky) timer = setTimeout(() => box.classList.remove('show'), opt.ms || 3200);
  };
})();

// ===== PWA：註冊 Service Worker、離線提示、安裝按鈕 =====
(() => {
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    // 註冊「之前」先記下是否已有舊版在控制頁面：首次安裝時新版會立即接管（clients.claim），
    // 若等到 activated 才檢查 controller，會把首次造訪誤判成「更新」
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register('sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        if (!w) return;
        w.addEventListener('statechange', () => {
          // 原本就有舊版在控制頁面，才代表這是「更新」
          if (w.state === 'activated' && hadController) {
            window.toast('已更新到最新內容。', { action: '重新整理', onAction: () => location.reload(), sticky: true });
          }
        });
      });
    }).catch(() => {});
  }
  window.addEventListener('offline', () => window.toast('目前離線，仍可閱讀已載入過的頁面。', { ms: 4500 }));
  window.addEventListener('online', () => window.toast('已重新連線。'));

  // 安裝到主畫面（Chrome／Edge／Android）；iOS 顯示手動步驟
  const box = document.getElementById('install');
  if (!box) return;
  const btn = document.getElementById('install-btn');
  const ios = document.getElementById('install-ios');
  const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (standalone) return;
  let deferred = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferred = e; box.hidden = false; btn.hidden = false;
  });
  btn.addEventListener('click', async () => {
    if (!deferred) return;
    deferred.prompt(); await deferred.userChoice; deferred = null; box.hidden = true;
  });
  if (/iphone|ipad|ipod/i.test(navigator.userAgent)) { box.hidden = false; ios.hidden = false; }
  window.addEventListener('appinstalled', () => { box.hidden = true; });
})();

// ===== 手機版漢堡選單：開關、Esc 關閉並還焦點、點選單外或連結後關閉 =====
(() => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  const mq = window.matchMedia('(max-width: 1199px)');
  const set = open => {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  document.addEventListener('click', e => {
    if (!nav.classList.contains('is-open')) return;
    if (!e.target.closest('.site-header')) set(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { set(false); btn.focus(); }
  });
  // 開啟搜尋或放大到桌機寬度時一併收起
  document.querySelectorAll('[data-search-open]').forEach(b => b.addEventListener('click', () => set(false)));
  (mq.addEventListener ? mq.addEventListener('change', () => set(false)) : mq.addListener(() => set(false)));
})();
