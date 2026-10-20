// 一般 defer 腳本（原為 type="module"），直接打開本機檔案時也能執行
(() => {
'use strict';
// 神社參拜頁：「二拜二拍手一拜」節奏練習——依序點亮每個動作，並用文字提示目前該做什麼
const wrap = document.querySelector('[data-beat]');
const btn = document.querySelector('[data-beat-play]');
const now = document.querySelector('[data-beat-now]');

if (wrap && btn && now) {
  const beads = [...wrap.querySelectorAll('[data-beat-i]')];
  // 每個動作的提示文字與停留時間（毫秒）：鞠躬放慢、拍手短促、祈願留久一點
  const plan = [
    ['第 1 拜：深鞠躬約 90 度，慢慢起身', 1800],
    ['第 2 拜：再深鞠躬一次', 1800],
    ['拍手：雙手在胸前拍響', 800],
    ['拍手：再拍一次', 800],
    ['合掌祈願：先感謝，報上姓名住所，再說願望', 3600],
    ['最後一拜：深鞠躬一次', 1800],
  ];
  let timer = null;

  const clear = () => beads.forEach(b => b.classList.remove('is-on'));
  const stop = (msg = '') => {
    clearTimeout(timer); timer = null; clear();
    btn.textContent = '跟著節奏練習一次';
    now.textContent = msg;
  };
  const run = i => {
    if (i >= plan.length) { stop('完成！離開前可以再輕輕鞠躬一次。'); return; }
    clear(); beads[i].classList.add('is-on');
    now.textContent = `${i + 1} / ${plan.length}　${plan[i][0]}`;
    timer = setTimeout(() => run(i + 1), plan[i][1]);
  };

  btn.addEventListener('click', () => {
    if (timer) { stop('已停止。'); return; }
    btn.textContent = '停止練習';
    run(0);
  });
  // 切到其他分頁時停止，避免背景計時
  document.addEventListener('visibilitychange', () => { if (document.hidden && timer) stop(); });
}
})();
