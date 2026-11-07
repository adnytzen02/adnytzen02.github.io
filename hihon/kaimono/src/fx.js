// 小動畫：勾選買到時蓋上「済」印章；某家店剛好跨過免稅門檻時，進度條閃過金光並跳出「免稅達成」
// 畫面會在資料變動後重繪，所以等下一格再找新的元素加效果。減少動態時只短暫顯示、不做動畫（由 CSS 處理）
import { icon } from './ui.js';

const later = (fn) => requestAnimationFrame(() => requestAnimationFrame(fn));

export function stampChecked(id) {
  later(() => {
    document.querySelectorAll(`[data-id="${CSS.escape(id)}"] .check.on`).forEach((chk) => {
      chk.classList.add('just-checked');
      const mark = document.createElement('span');
      mark.className = 'hanko';
      mark.setAttribute('aria-hidden', 'true');
      mark.textContent = '済';
      chk.append(mark);
      setTimeout(() => { mark.remove(); chk.classList.remove('just-checked'); }, 1600);
    });
  });
}

export function celebrateTaxFree(key) {
  later(() => {
    document.querySelectorAll(`[data-group="${CSS.escape(key)}"]`).forEach((box) => {
      box.classList.add('just-reached');
      const badge = document.createElement('span');
      badge.className = 'taxfree-pop';
      badge.setAttribute('aria-hidden', 'true'); // 提示訊息已經會念出「已達免稅門檻」
      badge.innerHTML = `${icon('verified', 'sm')}免稅達成`;
      (box.querySelector('.sg-head, .dlg-head') ?? box).append(badge);
      setTimeout(() => { badge.remove(); box.classList.remove('just-reached'); }, 2600);
    });
  });
}
