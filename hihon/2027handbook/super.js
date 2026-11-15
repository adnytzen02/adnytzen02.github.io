// 超市採買頁：封面店名膠帶、用途篩選、用途卡跳轉、地圖店名跳到介紹卡時閃一下
(() => {
  // 封面的店名膠帶：不自動播放，只跟著捲動往左走（使用者設定減少動態時不動）
  const tape = document.querySelector('.sm-tape__run');
  if (tape && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const half = () => tape.scrollWidth / 2;            // 內容重複兩次，走完一半就接回開頭
    let tick = false;
    const move = () => { tick = false; const h = half(); if (h) tape.style.setProperty('--shift', ((scrollY * .6) % h).toFixed(1)); };
    addEventListener('scroll', () => { if (!tick && scrollY < innerHeight * 2) { tick = true; requestAnimationFrame(move); } }, { passive: true });
    move();
  }
})();

(() => {
  const btns = [...document.querySelectorAll('[data-sm-use]')];
  const areaBtns = [...document.querySelectorAll('[data-sm-area]')];
  const cards = [...document.querySelectorAll('.sm-card')];
  const status = document.getElementById('sm-status');
  if (!btns.length || !cards.length) return;
  const labelOf = k => btns.find(b => b.dataset.smUse === k)?.textContent || '';
  const areaOf = k => areaBtns.find(b => b.dataset.smArea === k)?.textContent || '';
  let use = 'all', area = 'all';

  // 依「地區 × 用途」顯示卡片（兩組條件同時成立才顯示）
  const apply = (u = use, a = area) => {
    use = u; area = a;
    let n = 0;
    cards.forEach(c => {
      const okUse = use === 'all' || c.dataset.use.split(' ').includes(use);
      const okArea = area === 'all' || (c.dataset.area || '').split(' ').includes(area);
      const show = okUse && okArea;
      c.hidden = !show; if (show) n++;
    });
    btns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.smUse === use)));
    areaBtns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.smArea === area)));
    if (!status) return;
    const parts = [area !== 'all' && areaOf(area), use !== 'all' && `「${labelOf(use)}」`].filter(Boolean);
    status.textContent = parts.length ? `${parts.join('・')}：${n} 家` : `顯示全部 ${n} 家`;
  };
  btns.forEach(b => b.addEventListener('click', () => apply(b.dataset.smUse, area)));
  areaBtns.forEach(b => b.addEventListener('click', () => apply(use, b.dataset.smArea)));

  // 「看適合的超市」：套用用途篩選（地區維持目前的選擇）後捲到篩選列
  document.querySelectorAll('[data-sm-jump]').forEach(b => b.addEventListener('click', () => {
    apply(b.dataset.smJump, area);
    const bar = document.querySelector('.sm-filter');
    bar.scrollIntoView({ block: 'start' });
    btns.find(x => x.dataset.smUse === b.dataset.smJump)?.focus({ preventScroll: true });
  }));

  // 地圖店名 → 介紹卡：若卡片被篩掉先恢復全部，再閃爍提示
  document.querySelectorAll('.sm-chip--link').forEach(a => a.addEventListener('click', () => {
    const card = document.querySelector(a.getAttribute('href'));
    if (!card) return;
    if (card.hidden) apply('all', 'all');
    card.classList.remove('is-flash'); void card.offsetWidth; card.classList.add('is-flash');
  }));
})();
