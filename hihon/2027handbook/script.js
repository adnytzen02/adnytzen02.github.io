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

  // 目錄：依目前閱讀位置標示 aria-current
  const links = [...document.querySelectorAll('.toc a[href^="#"]')];
  if (links.length && 'IntersectionObserver' in window) {
    const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const targets = [...document.querySelectorAll('article > section[id], article h2[id], article h3[id]')]
      .filter(el => byId.has(el.id));
    const spy = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => { a.removeAttribute('aria-current'); a.classList.remove('active'); });
      const a = byId.get(e.target.id);
      a.setAttribute('aria-current', 'true'); a.classList.add('active');
    }), { rootMargin: '-25% 0px -65% 0px' });
    targets.forEach(t => spy.observe(t));
  }

  // 手機版：目錄預設收合
  const details = document.querySelector('.toc__details');
  if (details && window.matchMedia('(max-width: 960px)').matches) details.open = false;
})();
