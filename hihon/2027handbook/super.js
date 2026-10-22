// 超市採買頁：用途篩選、用途卡跳轉、地圖店名跳到介紹卡時閃一下
(() => {
  const btns = [...document.querySelectorAll('[data-sm-use]')];
  const cards = [...document.querySelectorAll('.sm-card')];
  const status = document.getElementById('sm-status');
  if (!btns.length || !cards.length) return;
  const labelOf = k => btns.find(b => b.dataset.smUse === k)?.textContent || '';

  // 依用途顯示卡片
  const apply = use => {
    let n = 0;
    cards.forEach(c => {
      const show = use === 'all' || c.dataset.use.split(' ').includes(use);
      c.hidden = !show; if (show) n++;
    });
    btns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.smUse === use)));
    if (status) status.textContent = use === 'all' ? `顯示全部 ${n} 家` : `「${labelOf(use)}」：${n} 家`;
  };
  btns.forEach(b => b.addEventListener('click', () => apply(b.dataset.smUse)));

  // 「看適合的超市」：套用篩選後捲到篩選列
  document.querySelectorAll('[data-sm-jump]').forEach(b => b.addEventListener('click', () => {
    apply(b.dataset.smJump);
    const bar = document.querySelector('.sm-filter');
    bar.scrollIntoView({ block: 'start' });
    btns.find(x => x.dataset.smUse === b.dataset.smJump)?.focus({ preventScroll: true });
  }));

  // 地圖店名 → 介紹卡：若卡片被篩掉先恢復全部，再閃爍提示
  document.querySelectorAll('.sm-chip--link').forEach(a => a.addEventListener('click', () => {
    const card = document.querySelector(a.getAttribute('href'));
    if (!card) return;
    if (card.hidden) apply('all');
    card.classList.remove('is-flash'); void card.offsetWidth; card.classList.add('is-flash');
  }));
})();
