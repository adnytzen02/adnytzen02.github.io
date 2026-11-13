// 唯讀的代購明細（#/share/<編碼後的資料>）：資料全部在網址裡，不讀也不寫這台裝置的清單
import { esc, icon, yen, num, fmtTime } from '../ui.js';
import { pageHead, emptyState } from './components.js';

// 解開網址裡的資料並檢查格式；任何一步不對就回傳 null
function decode() {
  try {
    const code = location.hash.replace(/^#\/?share\/?/, '').split(/[/?]/)[0];
    if (!code) return null;
    const bin = atob(code.replace(/-/g, '+').replace(/_/g, '/'));
    const d = JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0))));
    if (d?.v !== 1 || typeof d.n !== 'string' || !Array.isArray(d.i)) return null;
    const n = (v) => (Number.isFinite(Number(v)) ? Number(v) : 0);
    return {
      name: d.n.slice(0, 40), trip: String(d.t ?? '').slice(0, 60), rate: n(d.r), locked: Boolean(d.l), at: n(d.at),
      items: d.i.filter(Array.isArray).slice(0, 200).map(([name, qty, amount]) => ({ name: String(name ?? '').slice(0, 120), qty: n(qty) || 1, amount: n(amount) })),
      pending: (Array.isArray(d.p) ? d.p : []).slice(0, 200).map((x) => String(x).slice(0, 120)),
      goods: n(d.g), fee: n(d.f), feeDesc: String(d.fd ?? '').slice(0, 40), refund: n(d.rf), paid: n(d.pd),
    };
  } catch { return null; }
}

export function mount(root) {
  const d = decode();
  if (!d) {
    root.innerHTML = `
      ${pageHead({ eyebrow: 'SHARED · 代購明細', title: '代購明細' })}
      ${emptyState({
        title: '這個連結讀不到明細',
        text: '連結可能不完整（複製時被截斷），請對方重新複製一次分享連結。',
        actions: `<a class="btn btn-ghost" href="#/home">${icon('auto_awesome')}看看這個網站</a>`,
      })}`;
    return {};
  }
  const total = d.goods + d.fee;
  const left = total - d.paid;
  const nt = (v) => `NT$ ${num(v * d.rate)}`;
  root.innerHTML = `
    ${pageHead({
      eyebrow: `SHARED · ${esc(d.trip || '代購明細')}`,
      title: `@${esc(d.name)} 的代購明細`,
      sub: `這是${d.at ? ` ${fmtTime(d.at)} ` : ''}產生的唯讀明細，不會隨之後的修改更新。`,
    })}
    <section class="card share-card" aria-labelledby="share-title">
      <header class="card-head">
        <h2 id="share-title" class="section-title">${icon('receipt_long', 'sm')}已買到的商品</h2>
        <span class="badge ${left <= 0 && total ? 'badge-cyan' : d.paid ? 'badge-warn' : 'badge-muted'}">${left <= 0 && total ? '已付清' : d.paid ? `已付 ${yen(d.paid)}` : '尚未付款'}</span>
      </header>
      ${d.items.length ? `<ol class="share-list">
        ${d.items.map((i) => `<li><span>${esc(i.name)}${i.qty > 1 ? ` × ${i.qty}` : ''}</span><strong>${yen(i.amount)}</strong></li>`).join('')}
      </ol>` : '<p class="muted pad">還沒有買到的商品。</p>'}
      <dl class="share-sum">
        ${d.fee ? `<div><dt>商品小計</dt><dd>${yen(d.goods)}</dd></div>
        <div><dt>代購費${d.feeDesc ? `（${esc(d.feeDesc)}）` : ''}</dt><dd>${yen(d.fee)}</dd></div>` : ''}
        <div class="strong"><dt>合計</dt><dd>${yen(total)}<small>約 ${nt(total)}</small></dd></div>
        ${d.paid ? `<div><dt>已付</dt><dd>${yen(d.paid)}</dd></div>
        <div class="strong"><dt>${left > 0 ? '尚差' : left < 0 ? '多付' : '餘額'}</dt><dd>${yen(Math.abs(left))}<small>約 ${nt(Math.abs(left))}</small></dd></div>` : ''}
      </dl>
      <p class="muted small">匯率 1 JPY = ${num(d.rate, 4)} TWD${d.locked ? '（已鎖定）' : ''}。${d.refund ? `金額為扣除退稅後的實際成本（已扣退稅 ${yen(d.refund)}）。` : ''}</p>
      ${d.pending.length ? `<p class="share-pending">${icon('pending', 'sm')}還沒買到：${d.pending.map(esc).join('、')}</p>` : ''}
    </section>`;
  return {};
}
