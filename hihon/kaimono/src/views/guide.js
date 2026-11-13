// 退稅指南（獨立頁面 #/guide）：從預算匯率頁拆出來，導覽列仍標示在「預算匯率」
import { store } from '../store.js';
import { esc, icon } from '../ui.js';
import { pageHead } from './components.js';
import { guideCard, bindGuide } from './refund-guide.js';

export function mount(root) {
  root.innerHTML = `
    ${pageHead({
      eyebrow: `TAX REFUND GUIDE · ${esc(store.state.settings.tripName)}`,
      title: '退稅指南',
      sub: '2026/11 新制怎麼退：流程、退稅公司、機場現金、信用卡與手續費。',
      actions: `<a class="btn btn-ghost" href="#/budget">${icon('undo')}回預算匯率</a>`,
    })}
    ${guideCard({ heading: false })}`;
  bindGuide(root);
  return {};
}
