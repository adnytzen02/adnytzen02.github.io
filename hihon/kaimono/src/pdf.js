// 匯出購物清單 PDF（不用任何套件）
// 做法：用 canvas 依 A4 尺寸逐頁畫出清單 → 每頁轉成 JPEG → 自己組成 PDF 檔。
// 這樣不必把好幾 MB 的中日文字型嵌進 PDF，檔案小、手機也跑得動；
// 代價是 PDF 裡的字是圖片，不能選取或搜尋文字。
import { summarize } from './calc.js';
import { normStore } from './storeMatch.js';
import { ANY_STORE } from './storeCatalog.js';

const PT_W = 595.28; // A4 寬（pt）
const PT_H = 841.89; // A4 高（pt）
const SCALE = 2.4;   // 每 pt 幾個像素：約 173 dpi，印出來字也清楚
const M = 40;        // 頁邊距（pt）
const FOOT = 28;     // 頁尾高度
const FONT = "'Noto Sans TC', 'Noto Sans CJK TC', 'PingFang TC', 'Microsoft JhengHei', 'Hiragino Sans', system-ui, sans-serif";
const C = {
  ink: '#1d1b2e', dim: '#5d5a6e', faint: '#8a8798', line: '#dcd6c8', gold: '#9a7417', band: '#f6f1e4', done: '#2f7a4f',
};

const yen = (n) => `¥${Math.round(n || 0).toLocaleString('ja-JP')}`;
const twd = (n, rate) => `NT$ ${Math.round((n || 0) * rate).toLocaleString('zh-TW')}`;
const today = () => {
  const d = new Date();
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
};

// 依「主要店家」分組：未買的放在第一家候選店，已買的放在實際購買的店；備選店寫在品項下方
function groupByStore(items) {
  const map = new Map();
  for (const item of items) {
    let name;
    if (item.purchased) name = item.purchasedStore || '已買（未記錄店家）';
    else if (item.anyStore) name = ANY_STORE;
    else name = item.stores[0] || '未指定店鋪';
    const key = item.purchased || item.anyStore || item.stores[0] ? normStore(name) || name : '__none__';
    if (!map.has(key)) map.set(key, { name, items: [] });
    map.get(key).items.push(item);
  }
  const special = (g) => (g.name === ANY_STORE || g.name === '未指定店鋪' || g.name === '已買（未記錄店家）' ? 1 : 0);
  const pending = (g) => g.items.filter((i) => !i.purchased).length;
  return [...map.values()].sort((a, b) => special(a) - special(b) || (pending(b) > 0) - (pending(a) > 0)
    || pending(b) - pending(a) || a.name.localeCompare(b.name, 'zh-Hant'));
}

// 把一段文字依寬度斷行（中日文逐字斷，英數盡量整個字一起換行）
function wrap(ctx, text, width, maxLines = 99) {
  const tokens = String(text).match(/[A-Za-z0-9.,'’\-+/%&]+\s*|\s+|./gu) || [];
  const lines = [];
  let cur = '';
  for (const t of tokens) {
    if (ctx.measureText(cur + t).width <= width || !cur) { cur += t; continue; }
    lines.push(cur.trimEnd());
    cur = t.trimStart();
    if (lines.length === maxLines) break;
  }
  if (lines.length < maxLines && cur) lines.push(cur.trimEnd());
  // 超出行數：最後一行補上刪節號
  if (lines.length === maxLines && tokens.join('').length > lines.join('').length + 1) {
    let last = lines[maxLines - 1];
    while (last && ctx.measureText(`${last}…`).width > width) last = last.slice(0, -1);
    lines[maxLines - 1] = `${last}…`;
  }
  return lines;
}

function loadImage(src) {
  return new Promise((resolve) => {
    if (!src) { resolve(null); return; }
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

/* ---------- 逐頁畫出清單 ---------- */
// options.scope：'all' 全部商品｜'pending' 只列待買
export async function renderPages(state, { scope = 'all' } = {}) {
  try { await Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1500))]); } catch { /* 字型沒載完就用系統字型 */ }
  const { settings } = state;
  const sum = summarize(state);
  const items = scope === 'pending' ? state.items.filter((i) => !i.purchased) : state.items;
  const groups = groupByStore(items);
  const images = new Map(await Promise.all(items.filter((i) => i.image).map(async (i) => [i.id, await loadImage(i.image)])));

  const pages = [];
  let ctx;
  let y = 0;
  const bottom = PT_H - M - FOOT;
  const newPage = () => {
    const cv = document.createElement('canvas');
    cv.width = Math.round(PT_W * SCALE);
    cv.height = Math.round(PT_H * SCALE);
    ctx = cv.getContext('2d');
    ctx.scale(SCALE, SCALE);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, PT_W, PT_H);
    ctx.textBaseline = 'alphabetic';
    pages.push(cv);
    y = M;
  };
  const font = (size, weight = 400) => { ctx.font = `${weight} ${size}px ${FONT}`; };
  const text = (s, x, yy, { size = 10, weight = 400, color = C.ink, align = 'left' } = {}) => {
    font(size, weight); ctx.fillStyle = color; ctx.textAlign = align; ctx.fillText(s, x, yy);
  };
  const rule = (yy, color = C.line, w = 0.6) => {
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(M, yy); ctx.lineTo(PT_W - M, yy); ctx.stroke();
  };

  newPage();
  // 標題區
  text('SHOPPING RELICS · 購物清單', M, y + 9, { size: 8.5, weight: 700, color: C.gold });
  font(20, 700);
  const titleLines = wrap(ctx, settings.tripName || '我的購物清單', PT_W - M * 2, 2);
  titleLines.forEach((l, i) => text(l, M, y + 34 + i * 26, { size: 20, weight: 700 }));
  y += 34 + (titleLines.length - 1) * 26 + 18;
  const rateNote = `匯率 1 JPY = ${Number(settings.rate).toFixed(4)} TWD`;
  text(`匯出日期 ${today()}　·　${rateNote}　·　${scope === 'pending' ? '只列待買商品' : '全部商品'}`, M, y, { size: 9, color: C.dim });
  y += 14;

  // 總覽方塊
  const boxH = 50;
  ctx.fillStyle = C.band;
  ctx.fillRect(M, y, PT_W - M * 2, boxH);
  const cells = [
    ['商品', `${sum.count} 件`, `待買 ${sum.pendingCount}・已買 ${sum.purchasedCount}`],
    ['預估花費（含稅）', yen(sum.pay), twd(sum.pay, settings.rate)],
    ['預估退稅', yen(sum.refund), '達免稅門檻的店家才計入'],
    ['購物預算', yen(settings.budget), sum.remaining >= 0 ? `剩 ${yen(sum.remaining)}` : `超出 ${yen(-sum.remaining)}`],
  ];
  const cw = (PT_W - M * 2) / cells.length;
  cells.forEach(([k, v, s], i) => {
    const x = M + 12 + cw * i;
    text(k, x, y + 14, { size: 8, color: C.dim });
    text(v, x, y + 30, { size: 13, weight: 700 });
    text(s, x, y + 43, { size: 7.5, color: C.faint });
  });
  y += boxH + 22;

  if (!items.length) {
    text(scope === 'pending' ? '沒有待買的商品。' : '清單是空的。', M, y, { size: 11, color: C.dim });
  }

  // 欄位位置
  const X_BOX = M + 2;
  const X_IMG = M + 20;
  const IMG = 34;
  const X_PRICE = PT_W - M;
  const X_QTY = X_PRICE - 92;

  // 算出一列的斷行與高度（先量好，才能判斷要不要換頁）
  const layoutRow = (item) => {
    const img = images.get(item.id);
    const xText = img ? X_IMG + IMG + 8 : X_IMG;
    // 文字欄要讓出右邊的「× 數量」（約 30pt）與已買標籤（再約 30pt）
    const wText = X_QTY - (item.purchased ? 70 : 40) - xText;
    // 第二行：日文名、品牌；第三行：備選店、代購對象、備註
    font(10.5, 500);
    const nameLines = wrap(ctx, item.name || '（未命名）', wText, 2);
    font(8.5);
    const sub = [item.nameJa, item.brand].filter(Boolean).join('　');
    const subLines = sub ? wrap(ctx, sub, wText, 1) : [];
    const extra = [
      !item.purchased && item.stores.length > 1 ? `備選：${item.stores.slice(1).join('、')}` : '',
      item.buyFor ? `代購：${item.buyFor}` : '',
      item.note ? `備註：${item.note.replace(/\s+/g, ' ')}` : '',
    ].filter(Boolean).join('　');
    const extraLines = extra ? wrap(ctx, extra, wText, 2) : [];
    const h = Math.max(img ? IMG + 6 : 0, nameLines.length * 14 + subLines.length * 12 + extraLines.length * 12 + 6);
    return { img, xText, nameLines, subLines, extraLines, h };
  };

  for (const g of groups) {
    const gPay = g.items.reduce((s, i) => s + (sum.byItem.get(i.id)?.pay || 0), 0);
    const left = g.items.filter((i) => !i.purchased).length;
    // 店名列至少要和第一個品項放在同一頁
    if (y + 26 + layoutRow(g.items[0]).h + 6 > bottom) newPage();
    rule(y - 2, C.gold, 1);
    font(12, 700);
    const head = wrap(ctx, g.name, PT_W - M * 2 - 150, 1)[0];
    text(head, M, y + 14, { size: 12, weight: 700 });
    text(`${g.items.length} 件${left && left !== g.items.length ? `（待買 ${left}）` : ''} · ${yen(gPay)}`, PT_W - M, y + 14, { size: 9, color: C.dim, align: 'right' });
    y += 26;

    for (const item of g.items) {
      const a = sum.byItem.get(item.id);
      const { img, xText, nameLines, subLines, extraLines, h } = layoutRow(item);
      if (y + h > bottom) newPage();

      // 勾選框（已買打勾）
      ctx.strokeStyle = item.purchased ? C.done : C.dim;
      ctx.lineWidth = 0.9;
      ctx.strokeRect(X_BOX, y + 2, 10, 10);
      if (item.purchased) {
        ctx.beginPath(); ctx.moveTo(X_BOX + 2, y + 7); ctx.lineTo(X_BOX + 4.4, y + 9.6); ctx.lineTo(X_BOX + 8.4, y + 4); ctx.stroke();
      }
      if (img) {
        // 照片置中裁成正方形
        const s = Math.min(img.naturalWidth, img.naturalHeight);
        ctx.save();
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(X_IMG, y, IMG, IMG, 4); else ctx.rect(X_IMG, y, IMG, IMG);
        ctx.clip();
        ctx.drawImage(img, (img.naturalWidth - s) / 2, (img.naturalHeight - s) / 2, s, s, X_IMG, y, IMG, IMG);
        ctx.restore();
      }
      let ty = y + 11;
      const nameColor = item.purchased ? C.faint : C.ink;
      nameLines.forEach((l) => { text(l, xText, ty, { size: 10.5, weight: 500, color: nameColor }); ty += 14; });
      subLines.forEach((l) => { text(l, xText, ty - 1, { size: 8.5, color: C.dim }); ty += 12; });
      extraLines.forEach((l) => { text(l, xText, ty - 1, { size: 8.5, color: C.dim }); ty += 12; });
      if (item.purchased) text('已買', X_QTY - 34, y + 11, { size: 8, weight: 700, color: C.done, align: 'right' });

      text(`× ${item.qty}`, X_QTY, y + 11, { size: 10, color: C.dim, align: 'right' });
      text(yen(a?.pay), X_PRICE, y + 11, { size: 10.5, weight: 700, align: 'right' });
      if (a?.refund) text(`退稅 ${yen(a.refund)}`, X_PRICE, y + 24, { size: 8, color: C.done, align: 'right' });
      y += h;
      rule(y);
      y += 6;
    }
    y += 12;
  }

  // 頁尾：頁碼與說明
  pages.forEach((cv, i) => {
    ctx = cv.getContext('2d');
    text('金額為含稅預估，實際以店家結帳為準；退稅依各店是否達免稅門檻估算。', M, PT_H - M + 8, { size: 7.5, color: C.faint });
    text(`${i + 1} / ${pages.length}`, PT_W - M, PT_H - M + 8, { size: 8, color: C.faint, align: 'right' });
  });
  return pages;
}

/* ---------- 組成 PDF 檔 ---------- */
const enc = new TextEncoder();

// PDF 文件資訊的中文字串要用 UTF-16BE 十六進位表示
function pdfText(s) {
  let hex = 'FEFF';
  for (const ch of String(s)) {
    const cp = ch.codePointAt(0);
    const units = cp > 0xffff ? [0xd800 + ((cp - 0x10000) >> 10), 0xdc00 + ((cp - 0x10000) & 0x3ff)] : [cp];
    units.forEach((u) => { hex += u.toString(16).padStart(4, '0').toUpperCase(); });
  }
  return `<${hex}>`;
}

const toJpeg = (cv) => new Promise((resolve, reject) => {
  cv.toBlob((b) => (b ? b.arrayBuffer().then((buf) => resolve(new Uint8Array(buf)), reject) : reject(new Error('無法產生頁面圖片'))), 'image/jpeg', 0.86);
});

export async function pagesToPdf(pages, title) {
  const parts = [];
  const offsets = [];
  let len = 0;
  const put = (x) => { const b = typeof x === 'string' ? enc.encode(x) : x; parts.push(b); len += b.length; };
  const obj = (n, body) => { offsets[n] = len; put(`${n} 0 obj\n`); body(); put('\nendobj\n'); };

  put('%PDF-1.4\n');
  put(new Uint8Array([0x25, 0xe2, 0xe3, 0xcf, 0xd3, 0x0a])); // 二進位檔標記
  // 物件編號：1 Catalog、2 Pages、3 Info，之後每頁 3 個（Page、內容、圖片）
  const n = pages.length;
  const pageNo = (i) => 4 + i * 3;
  obj(1, () => put('<< /Type /Catalog /Pages 2 0 R >>'));
  obj(2, () => put(`<< /Type /Pages /Count ${n} /Kids [${pages.map((_, i) => `${pageNo(i)} 0 R`).join(' ')}] >>`));
  obj(3, () => put(`<< /Title ${pdfText(title)} /Producer (Shopping Relics) /Creator (Shopping Relics) >>`));
  for (let i = 0; i < n; i++) {
    const cv = pages[i];
    // 逐頁轉檔，轉完就釋放畫布，避免手機記憶體不足
    // eslint-disable-next-line no-await-in-loop
    const jpg = await toJpeg(cv);
    const p = pageNo(i);
    const content = `q ${PT_W} 0 0 ${PT_H} 0 0 cm /Im0 Do Q`;
    obj(p, () => put(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PT_W} ${PT_H}] /Resources << /XObject << /Im0 ${p + 2} 0 R >> >> /Contents ${p + 1} 0 R >>`));
    obj(p + 1, () => put(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`));
    obj(p + 2, () => {
      put(`<< /Type /XObject /Subtype /Image /Width ${cv.width} /Height ${cv.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`);
      put(jpg);
      put('\nendstream');
    });
    cv.width = 0; cv.height = 0;
  }
  const xref = len;
  const total = 4 + n * 3;
  put(`xref\n0 ${total}\n0000000000 65535 f \n`);
  for (let i = 1; i < total; i++) put(`${String(offsets[i]).padStart(10, '0')} 00000 n \n`);
  put(`trailer\n<< /Size ${total} /Root 1 0 R /Info 3 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  return new Blob(parts, { type: 'application/pdf' });
}

// 檔名：旅程名稱＋日期（去掉檔名不能用的字元）
export function pdfFileName(state) {
  const name = (state.settings.tripName || '購物清單').replace(/[\\/:*?"<>|]/g, '').trim().slice(0, 40) || '購物清單';
  return `${name}-購物清單-${today().replace(/\//g, '')}.pdf`;
}

export async function buildListPdf(state, options) {
  const pages = await renderPages(state, options);
  return pagesToPdf(pages, `${state.settings.tripName || '購物清單'}・購物清單`);
}
