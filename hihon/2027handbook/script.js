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
    navigator.serviceWorker.register('sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        if (!w) return;
        w.addEventListener('statechange', () => {
          // 已有舊版在控制頁面時，代表這是「更新」而非首次安裝
          if (w.state === 'activated' && navigator.serviceWorker.controller) {
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
  const mq = window.matchMedia('(max-width: 960px)');
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
