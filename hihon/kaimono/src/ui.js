// 共用 UI 工具：格式化、圖示、對話框、通知、條碼、圖片壓縮

const escMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => escMap[c]);

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const nfJ = new Intl.NumberFormat('ja-JP');
const nfT = new Intl.NumberFormat('zh-TW', { maximumFractionDigits: 0 });
export const yen = (n) => `¥${nfJ.format(Math.round(n || 0))}`;
export const twd = (n, rate) => `NT$ ${nfT.format(Math.round((n || 0) * rate))}`;
export const num = (n, d = 0) => new Intl.NumberFormat('zh-TW', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n || 0);
export const kg = (n) => `${num(n, n >= 10 ? 1 : 2)} kg`;
export const pct = (r) => `${Math.round((r || 0) * 100)}%`;

// Material Symbols 圖示（裝飾用，對螢幕閱讀器隱藏）
// 數字滾動：重繪前先記下舊數字，重繪後從舊值滾到新值（0.4 秒）。只改文字，不影響版面
const firstNumber = (s) => {
  const m = String(s).match(/-?\d[\d,]*(\.\d+)?/);
  return m ? { str: m[0], val: parseFloat(m[0].replace(/,/g, '')) } : null;
};
export function snapshotNumbers(root, sel) {
  const map = new Map();
  root?.querySelectorAll(sel).forEach((el, i) => map.set(el.dataset.countKey ?? i, el.textContent));
  return map;
}
export function countUp(root, sel, before) {
  if (!root || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.querySelectorAll(sel).forEach((el, i) => {
    const old = before.get(el.dataset.countKey ?? i);
    if (old == null) return;
    const a = firstNumber(old); const b = firstNumber(el.textContent);
    if (!a || !b || a.val === b.val) return;
    // 找到含新數字的那段文字
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node && !node.nodeValue.includes(b.str)) node = walker.nextNode();
    if (!node) return;
    const dec = (b.str.split('.')[1] || '').length;
    const fmt = (v) => v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    const tpl = node.nodeValue; const start = performance.now();
    const step = (now) => {
      const k = Math.min(1, (now - start) / 400); const e = 1 - (1 - k) ** 3;
      node.nodeValue = k < 1 ? tpl.replace(b.str, fmt(a.val + (b.val - a.val) * e)) : tpl;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

export const icon = (name, cls = '') => `<span class="ms ${cls}" aria-hidden="true">${name}</span>`;

export function fmtDate(d) {
  if (!d) return '';
  const date = typeof d === 'number' ? new Date(d) : new Date(`${d}T00:00:00`);
  return new Intl.DateTimeFormat('zh-TW', { month: 'numeric', day: 'numeric', weekday: 'short' }).format(date);
}

export function fmtTime(ts) {
  if (!ts) return '';
  return new Intl.DateTimeFormat('zh-TW', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(ts));
}

/* ---------- 對話框 ---------- */
// 使用原生 <dialog>：內建焦點鎖定與 Esc 關閉；關閉後把焦點還給觸發元素
const dialogStack = [];

export function openDialog(dialog, { onClose, backdropClose = true } = {}) {
  const opener = document.activeElement;
  dialog.addEventListener('close', function handler() {
    dialog.removeEventListener('close', handler);
    const idx = dialogStack.indexOf(dialog);
    if (idx > -1) dialogStack.splice(idx, 1);
    onClose?.();
    if (opener && document.contains(opener)) opener.focus({ preventScroll: true });
  });
  // 點擊背景（dialog 本身）關閉
  if (backdropClose) dialog.addEventListener('click', (e) => { if (e.target === dialog) closeDialog(dialog); });
  dialogStack.push(dialog);
  dialog.showModal();
  const autofocus = dialog.querySelector('[autofocus]') ?? dialog.querySelector('.dlg-close');
  autofocus?.focus();
}

// 關閉前把通知區移回下一層對話框或 body，避免跟著被刪掉
function rescueToastRegion(dialog) {
  const region = document.getElementById('toast-region');
  if (!region || !dialog.contains(region)) return;
  const below = [...document.querySelectorAll('dialog[open]:not(.closing)')].filter((d) => d !== dialog).at(-1);
  (below ?? document.body).append(region);
}

export function closeDialog(dialog) {
  if (!dialog?.open) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finish = () => { rescueToastRegion(dialog); dialog.close(); dialog.remove(); };
  if (reduce) { finish(); return; }
  dialog.classList.add('closing');
  setTimeout(finish, 180);
}

// 建立 dialog 元素並掛到 body
export function createDialog(className, html, label) {
  const dlg = document.createElement('dialog');
  dlg.className = `dlg ${className}`;
  if (label) dlg.setAttribute('aria-labelledby', label);
  dlg.innerHTML = html;
  document.body.append(dlg);
  // Esc：先跑關閉動畫
  dlg.addEventListener('cancel', (e) => { e.preventDefault(); closeDialog(dlg); });
  return dlg;
}

// 確認對話框（刪除等不可復原動作，要寫明對象）
export function confirmDialog({ title, body, confirmText, danger = false }) {
  return new Promise((resolve) => {
    let result = false;
    const dlg = createDialog('dlg-confirm', `
      <form method="dialog" class="confirm-body">
        <h2 id="confirm-title" class="confirm-title">${esc(title)}</h2>
        <p class="confirm-text">${body}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-ghost" data-act="cancel" autofocus>取消</button>
          <button type="button" class="btn ${danger ? 'btn-danger' : 'btn-gold'}" data-act="ok">${esc(confirmText)}</button>
        </div>
      </form>`, 'confirm-title');
    dlg.addEventListener('click', (e) => {
      const act = e.target.closest('[data-act]')?.dataset.act;
      if (!act) return;
      result = act === 'ok';
      closeDialog(dlg);
    });
    openDialog(dlg, { onClose: () => resolve(result) });
  });
}

// 多選一對話框：回傳選到的 value，按取消或 Esc 回傳 null
export function choiceDialog({ title, body, choices }) {
  return new Promise((resolve) => {
    let result = null;
    const dlg = createDialog('dlg-confirm', `
      <form method="dialog" class="confirm-body">
        <h2 id="choice-title" class="confirm-title">${esc(title)}</h2>
        <div class="confirm-text">${body}</div>
        <div class="confirm-actions confirm-actions-stack">
          ${choices.map((c) => `<button type="button" class="btn ${c.tone === 'danger' ? 'btn-danger' : c.tone === 'gold' ? 'btn-gold' : 'btn-ghost'}" data-choice="${esc(c.value)}">${c.icon ? icon(c.icon) : ''}${esc(c.text)}</button>`).join('')}
          <button type="button" class="btn btn-ghost" data-choice="" autofocus>取消</button>
        </div>
      </form>`, 'choice-title');
    dlg.addEventListener('click', (e) => {
      const b = e.target.closest('[data-choice]');
      if (!b) return;
      result = b.dataset.choice || null;
      closeDialog(dlg);
    });
    openDialog(dlg, { onClose: () => resolve(result) });
  });
}

/* ---------- Toast 通知 ---------- */
let toastTimer;
export function toast({ title, message = '', actionText, onAction, tone = 'gold', duration = 5000 }) {
  const region = $('#toast-region');
  clearTimeout(toastTimer);
  region.innerHTML = `
    <div class="toast toast-${tone}" role="status">
      <span class="toast-icon">${icon(tone === 'error' ? 'error' : 'stars')}</span>
      <div class="toast-text">
        <strong>${esc(title)}</strong>
        ${message ? `<span>${message}</span>` : ''}
      </div>
      ${actionText ? `<button type="button" class="toast-action">${esc(actionText)}</button>` : ''}
      <button type="button" class="toast-close" aria-label="關閉通知">${icon('close')}</button>
    </div>`;
  const el = region.firstElementChild;
  // 有對話框開著時，把通知區移進最上層的對話框，才不會被遮住或變成無法操作
  const top = [...document.querySelectorAll('dialog[open]:not(.closing)')].at(-1);
  if (top && region.parentElement !== top) top.append(region);
  else if (!top && region.parentElement !== document.body) document.body.append(region);
  const dismiss = () => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 200);
  };
  el.querySelector('.toast-close').addEventListener('click', dismiss);
  el.querySelector('.toast-action')?.addEventListener('click', () => { onAction?.(); dismiss(); });
  toastTimer = setTimeout(dismiss, duration);
}

/* ---------- EAN-13 / JAN 條碼 SVG ---------- */
const L = ['0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'];
const G = L.map((c) => [...c].map((b) => (b === '0' ? '1' : '0')).reverse().join(''));
const R = L.map((c) => [...c].map((b) => (b === '0' ? '1' : '0')).join(''));
const PARITY = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

export function validJan(code) {
  if (!/^\d{13}$/.test(code) && !/^\d{8}$/.test(code)) return false;
  const digits = [...code].map(Number);
  const check = digits.pop();
  const sum = digits.reverse().reduce((acc, d, i) => acc + d * (i % 2 === 0 ? 3 : 1), 0);
  return (10 - (sum % 10)) % 10 === check;
}

export function barcodeSVG(code) {
  if (!validJan(code)) return '';
  const d = [...code].map(Number);
  let bits = '101';
  if (d.length === 13) {
    const parity = PARITY[d[0]];
    for (let i = 1; i <= 6; i++) bits += (parity[i - 1] === 'L' ? L : G)[d[i]];
    bits += '01010';
    for (let i = 7; i <= 12; i++) bits += R[d[i]];
  } else {
    // JAN-8（EAN-8）：左右各 4 碼
    for (let i = 0; i < 4; i++) bits += L[d[i]];
    bits += '01010';
    for (let i = 4; i < 8; i++) bits += R[d[i]];
  }
  bits += '101';
  const quiet = 9;
  const w = bits.length + quiet * 2;
  let rects = '';
  [...bits].forEach((b, i) => { if (b === '1') rects += `<rect x="${i + quiet}" y="0" width="1" height="50"/>`; });
  return `<svg class="barcode" viewBox="0 0 ${w} 50" preserveAspectRatio="none" role="img" aria-label="JAN 條碼 ${code}"><rect width="${w}" height="50" fill="#fff"/><g fill="#000">${rects}</g></svg>`;
}

/* ---------- 圖片壓縮：縮到最長邊 480px 的 JPEG，以免塞爆 localStorage ---------- */
export function compressImage(file, max = 480, quality = 0.78) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('讀取圖片失敗'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('無法解析這張圖片'));
      img.onload = () => {
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ---------- 檔案下載 ---------- */
export function download(filename, text, type = 'text/plain') {
  const blob = new Blob([text], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), { href: url, download: filename });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// 「正在同步」浮層：不是對話框（不搶焦點、不用按），同步完顯示結果後自動消失
// show() 顯示；done({ title, sub }) 切成完成狀態、停留一下再淡出（回傳 Promise）；
// fail({ title, sub }) 切成失敗狀態、停留較久（點一下可提早關閉）；close() 直接淡出
// 用 popover 放進瀏覽器的最上層，設定視窗（<dialog>）開著時也蓋得過去
export function syncOverlay() {
  let el = null;
  let shownAt = 0;
  let closing = null;
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const close = () => {
    if (!el) return Promise.resolve();
    if (closing) return closing;
    const node = el;
    node.classList.remove('is-in');
    closing = wait(reduce() ? 0 : 320).then(() => {
      try { node.hidePopover?.(); } catch { /* 已經關閉 */ }
      node.remove(); el = null; closing = null;
    });
    return closing;
  };
  return {
    show() {
      if (el) return;
      el = document.createElement('div');
      el.className = 'sync-ov';
      el.innerHTML = `<div class="sync-ov-card" role="status" aria-live="polite">
        <div class="sync-ov-anim" aria-hidden="true">
          <svg viewBox="0 0 100 100"><defs><linearGradient id="sync-ov-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3c4"/><stop offset=".5" stop-color="#e8c25a"/><stop offset="1" stop-color="#b8892a"/></linearGradient></defs>
            <circle class="sync-ov-track" cx="50" cy="50" r="42"/><circle class="sync-ov-arc" cx="50" cy="50" r="42" pathLength="100"/></svg>
          <span class="sync-ov-dot"></span><span class="sync-ov-dot"></span><span class="sync-ov-dot"></span>
          <span class="ms sync-ov-icon">sync</span>
        </div>
        <p class="sync-ov-title">正在同步 Google Drive…</p>
        <p class="sync-ov-sub">比對這台和雲端的清單，請稍候</p>
      </div>`;
      // 支援 popover 的瀏覽器放進最上層；不支援的話放進目前開著的對話框裡，才不會被擋住
      const host = el.showPopover ? document.body : ([...document.querySelectorAll('dialog[open]')].at(-1) ?? document.body);
      if (el.showPopover) el.setAttribute('popover', 'manual');
      host.append(el);
      try { el.showPopover?.(); } catch { /* 不支援時照一般元素顯示 */ }
      el.addEventListener('click', () => { if (el?.classList.contains('is-fail')) close(); });
      shownAt = performance.now();
      requestAnimationFrame(() => requestAnimationFrame(() => el?.classList.add('is-in')));
    },
    async done({ title, sub = '' }) {
      if (!el) return;
      // 同步太快時至少讓「同步中」停留一下，畫面才不會一閃而過
      await wait(Math.max(0, 900 - (performance.now() - shownAt)));
      if (!el) return;
      el.classList.add('is-done');
      el.querySelector('.sync-ov-icon').textContent = 'check';
      el.querySelector('.sync-ov-title').textContent = title;
      el.querySelector('.sync-ov-sub').textContent = sub;
      await wait(1500);
      await close();
    },
    async fail({ title, sub = '' }) {
      this.show();
      await wait(Math.max(0, 500 - (performance.now() - shownAt)));
      if (!el) return;
      el.classList.add('is-fail');
      el.querySelector('.sync-ov-icon').textContent = 'error';
      el.querySelector('.sync-ov-title').textContent = title;
      el.querySelector('.sync-ov-sub').textContent = sub;
      await wait(4000); // 錯誤訊息要讀，停久一點
      await close();
    },
    close,
  };
}

// 下載 Blob（例如 PDF）
export function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), { href: url, download: filename });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000); // 手機開啟較慢，多留一點時間
}

// 進度條（role=progressbar）
export function progress(value, { label, tone = 'gold', max = 1 } = {}) {
  const v = Math.max(0, Math.min(max, value));
  const over = value > max;
  return `<div class="bar bar-${over ? 'danger' : tone}" role="progressbar" aria-label="${esc(label)}"
      aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round((value / max) * 100)}">
      <span style="--w:${(v / max) * 100}%"></span></div>`;
}

// 分段進度條：例如「已買／待買」或「基本重量／已買／待買」，超過上限的部分不畫
export function stackBar(parts, max, label) {
  let used = 0;
  const spans = parts.map((p) => {
    const w = max > 0 ? Math.max(0, Math.min(100 - used, (p.value / max) * 100)) : 0;
    used += w;
    return `<span class="seg-${p.tone}" style="--w:${w}%"></span>`;
  }).join('');
  return `<div class="stack-bar stack-sm" role="img" aria-label="${esc(label)}">${spans}</div>`;
}
