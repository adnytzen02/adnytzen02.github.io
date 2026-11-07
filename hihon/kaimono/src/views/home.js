// 首頁：光的序章（一個畫面、與視窗同寬同高）。整段畫在一張 canvas 上，依時間自動播放：
//   0～1.9 秒：金色流星螺旋落向畫面下方的水面
//   約 2.0～3.4 秒：濺起金色水冠與漣漪
//   約 3.5～4.4 秒：水花停止後，光芒（十字星芒）從落點升起、逐漸增強
//   約 4.4～5.9 秒：爆出強光，圓形視窗帶著彩虹光環撐滿全螢幕 → 金色的海（弧形地平線、光柱、地平線上的光點）
//   約 6.1～6.8 秒：浮出標題，導覽列從下方滑出
// 播完後畫面持續流動；點水面會泛起漣漪、點天空會灑出金粉
// 每次打開網站都會播；同一次瀏覽中回到首頁直接顯示最後畫面（可按「重播片頭」）；減少動態時只畫一張靜態畫面
import { icon, yen } from '../ui.js';
import { groupModel } from './store-groups.js';

// 這次瀏覽是否已看過片頭：每次打開網站都會播；同一次瀏覽中從其他頁回首頁才直接顯示最後畫面
const SEEN_KEY = 'shopping-relics:intro-seen-session';
try { localStorage.removeItem('shopping-relics:intro-seen'); } catch { /* 舊版存在 localStorage 的紀錄，清掉 */ }
const TL = { comet: 1.9, start: 1.95, span: 5.2 }; // 時間軸（秒）：光流落下多久、之後的演出從何時開始、長度
const DONE_AT = 0.94; // 進度到這裡標題已完整浮出，導覽列滑出
const LAND_Y = 0.75; // 開場光流落下的位置（畫面高度的比例）：落在畫面下方、地平線之下的海面上
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const seen = () => { try { return sessionStorage.getItem(SEEN_KEY) === '1'; } catch { return false; } };
const markSeen = () => { try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* 無法記錄：每次都播 */ } };
const addLabel = (state) => (state.items.length ? '再添一個心願' : '寫下第一個心願');

// 標題下方的清單概況
function statsLine({ state, sum }) {
  if (!state.items.length) return ['<li>清單還是空的，從第一個心願開始</li>'];
  const stores = groupModel(state, () => true).filter((g) => !g.special).length;
  return [
    `<li>待買 <b>${sum.pendingCount}</b> 件</li>`,
    `<li><b>${stores}</b> 家店</li>`,
    `<li>預估退稅 <b>${yen(sum.refund)}</b></li>`,
  ];
}

/* ---------- 繪圖工具 ---------- */
const WHITE = '255,247,226';
const GOLD = '255,208,100';
const AMBER = '255,166,58';
const PALE = '255,232,160';
const clamp = (v) => Math.min(1, Math.max(0, v));
const easeOut = (x) => 1 - (1 - x) ** 3;
const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2);
const offscreen = (w, h) => { const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; };
// 由數字算出 0～1 的偽亂數（同樣的輸入永遠得到同樣的結果，不必保存狀態）
const hash = (a, b, c) => { const x = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453; return x - Math.floor(x); };
const PILLARS = 9; // 輪替的光柱數量（同時大約亮 4～6 根）

// 每種光預先畫成小貼圖，之後每格只貼圖
const SPRITES = {};
function sprite(rgb, kind) {
  const key = rgb + kind;
  if (SPRITES[key]) return SPRITES[key];
  const s = 128; const r = s / 2;
  const c = offscreen(s, s);
  const g = c.getContext('2d'); const gr = g.createRadialGradient(r, r, 0, r, r, r);
  if (kind === 'glow') {
    gr.addColorStop(0, `rgba(${rgb},1)`); gr.addColorStop(0.12, `rgba(${rgb},.85)`);
    gr.addColorStop(0.35, `rgba(${rgb},.25)`); gr.addColorStop(1, `rgba(${rgb},0)`);
  } else { // 散景：平整的圓盤，邊緣略亮
    gr.addColorStop(0, `rgba(${rgb},.42)`); gr.addColorStop(0.72, `rgba(${rgb},.5)`);
    gr.addColorStop(0.88, `rgba(${rgb},.62)`); gr.addColorStop(0.96, `rgba(${rgb},.2)`); gr.addColorStop(1, `rgba(${rgb},0)`);
  }
  g.fillStyle = gr; g.fillRect(0, 0, s, s);
  SPRITES[key] = c;
  return c;
}
// 光束：中間亮、兩端淡出的橫條（十字星芒用）
function beamSprite(rgb) {
  const key = `beam${rgb}`;
  if (SPRITES[key]) return SPRITES[key];
  const c = offscreen(512, 32); const g = c.getContext('2d');
  const h = g.createLinearGradient(0, 0, 512, 0);
  h.addColorStop(0, `rgba(${rgb},0)`); h.addColorStop(0.5, `rgba(${rgb},1)`); h.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = h; g.fillRect(0, 0, 512, 32);
  g.globalCompositeOperation = 'destination-in'; // 上下也淡出，形成柔邊
  const v = g.createLinearGradient(0, 0, 0, 32);
  v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(0.5, 'rgba(0,0,0,1)'); v.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = v; g.fillRect(0, 0, 512, 32);
  SPRITES[key] = c;
  return c;
}
// 光柱：底部亮、往上淡出的直條
function pillarSprite(rgb, a) {
  const key = `pillar${rgb}${a}`;
  if (SPRITES[key]) return SPRITES[key];
  const c = offscreen(16, 256); const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 256, 0, 0);
  gr.addColorStop(0, `rgba(${rgb},${a})`); gr.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = gr; g.fillRect(0, 0, 16, 256);
  SPRITES[key] = c;
  return c;
}

// 固定種子的亂數：同一個尺寸每次畫出來都一樣
function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

// 畫質等級：手機跑不動時自動往下降（解析度、粒子數量）
const LEVELS = [{ dpr: 1.5, q: 1 }, { dpr: 1, q: 0.6 }, { dpr: 0.75, q: 0.38 }];

function scene(canvas, onFrame) {
  const ctx = canvas.getContext('2d');
  const hasConic = typeof ctx.createConicGradient === 'function';
  let W = 0; let H = 0; let D = 0;
  let P = {}; // 預先產生的粒子
  let rays = null; let seaBg = null; // 預先畫好的放射線；天空與海面底圖
  let running = false; let onScreen = false; let t0 = performance.now();
  let started = false; let pausedAt = 0; // 片頭時間只在畫面真的看得到時才前進（背景分頁打開時不會偷偷播完）
  let px = 0; let py = 0; let tx = 0; let ty = 0;
  const taps = []; // 使用者點出來的漣漪、金粉
  // 硬體較弱的裝置從中間等級開始
  let level = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || (navigator.deviceMemory && navigator.deviceMemory <= 4) ? 1 : 0;
  let Q = LEVELS[level].q;
  let lastT = 0; let ema = 16.7; let frames = 0;
  let lastP = -1;

  const n = (arr) => Math.ceil(arr.length * Q); // 依畫質只畫前面一部分粒子
  const horizon = () => ({ cx: W / 2, hy: H * 0.62, RB: Math.max(W, H) * 1.7 });
  const arcAt = (x) => { const { cx, hy, RB } = horizon(); return hy + RB - Math.sqrt(Math.max(0, RB * RB - (x - cx) ** 2)); };

  const build = () => {
    const R = rng(20261105);
    const A = W * H; const u = Math.min(W, H) / 800;
    P = {
      u,
      stars: Array.from({ length: Math.round(A / 2600) }, () => ({ x: R() * W, y: R() * H, s: 0.5 + R() * 1.2, a: 0.2 + R() * 0.6, f: 0.5 + R() * 2, ph: R() * 6.3 })),
      trail: Array.from({ length: 90 }, () => ({ at: R(), dx: (R() - 0.5) * 40 * u, dy: (R() - 0.3) * 30 * u, s: 3 + R() * 9, f: 1 + R() * 3, ph: R() * 6.3 })),
      crown: Array.from({ length: 150 }, () => ({ ang: R() * Math.PI * 2, v: (0.18 + R() * 0.3) * H, out: (0.02 + R() * 0.12) * W, s: 6 + R() * 16, streak: R() < 0.45 })),
      rise: Array.from({ length: 50 }, () => ({ x: (R() - 0.5) * 0.16 * W, v: 0.15 + R() * 0.5, s: 3 + R() * 7 })),
      burst: Array.from({ length: 70 }, () => ({ ang: R() * Math.PI * 2, d: 0.15 + R() * 1.1, s: (18 + R() * 80) * Math.max(0.7, u), c: R() < 0.2 ? WHITE : R() < 0.6 ? GOLD : AMBER })),
      ripples: Array.from({ length: 190 }, () => ({ x: R() * W, y: R(), w: 8 + R() * 34, ph: R() * 6.3, f: 0.6 + R() * 1.4, a: 0.14 + R() * 0.42 })),
      motes: Array.from({ length: Math.round(60 + A / 16000) }, () => ({ x: R() * W, v: 8 + R() * 30, off: R(), s: 2 + R() * 14 * Math.max(0.7, u), sw: 6 + R() * 18, ph: R() * 6.3, c: R() < 0.25 ? WHITE : R() < 0.7 ? GOLD : AMBER })),
      // 地平線上的光潮：一大片貼著弧線漂動的金色光點（參考圖 6、7），少部分落在水面上
      tide: Array.from({ length: 90 }, () => {
        const onWater = R() < 0.3;
        return { x: R() * W, dy: R() ** 1.6 * 0.17 * H, onWater, vx: (R() - 0.5) * 14, s: (3 + R() ** 2 * 26) * Math.max(0.7, u), f: 0.6 + R() * 1.8, ph: R() * 6.3, c: R() < 0.3 ? WHITE : R() < 0.75 ? GOLD : AMBER };
      }),
      fore: Array.from({ length: 9 }, (_, i) => ({ x: (i % 2 ? 0.82 + R() * 0.2 : -0.04 + R() * 0.2) * W, y: R() * H, s: (90 + R() * 150) * Math.max(0.6, u), a: 0.1 + R() * 0.16, ph: R() * 6.3 })),
    };
    rays = null; seaBg = null; // 用到時才畫（減少開頁時的工作量）
  };

  // 放射細線：畫成一張圖，之後每格只旋轉貼上
  function buildRays() {
    const R = rng(7);
    const m = Math.min(W, H) * 0.55 * 2.2;
    const s = Math.min(640, Math.round(m * 2));
    const c = offscreen(s, s); const g = c.getContext('2d'); const r = s / 2;
    g.lineCap = 'round';
    for (let i = 0; i < 46; i++) {
      const ang = R() * Math.PI * 2; const L = (0.25 + R() * 0.75) * r;
      const gr = g.createLinearGradient(r, r, r + Math.cos(ang) * L, r + Math.sin(ang) * L);
      gr.addColorStop(0, `rgba(${PALE},${0.35 + R() * 0.4})`); gr.addColorStop(1, `rgba(${PALE},0)`);
      g.strokeStyle = gr; g.lineWidth = 1.4 + R() * 1.8; // 貼上時會縮小，所以這裡畫粗一點
      g.beginPath(); g.moveTo(r, r); g.lineTo(r + Math.cos(ang) * L, r + Math.sin(ang) * L); g.stroke();
    }
    rays = { c, size: m * 2 };
  }

  // 天空與海面：不會動，先畫好
  function buildSea() {
    const dpr = LEVELS[level].dpr;
    const { cx, hy, RB } = horizon();
    const c = offscreen(W * dpr, H * dpr); const g = c.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0);
    // 夜空：深藍→紫→地平線的琥珀色（參考圖 3～7 的色調）
    const sky = g.createLinearGradient(0, 0, 0, hy);
    sky.addColorStop(0, '#05071c'); sky.addColorStop(0.5, '#15164a'); sky.addColorStop(0.82, '#43306f'); sky.addColorStop(1, '#b8703a');
    g.fillStyle = sky; g.fillRect(0, 0, W, H);
    g.globalCompositeOperation = 'lighter';
    // 右側一抹青綠色（參考圖 7 右邊）
    const teal = g.createRadialGradient(W * 0.98, hy * 0.82, 0, W * 0.98, hy * 0.82, Math.max(W, H) * 0.42);
    teal.addColorStop(0, 'rgba(62,200,210,.28)'); teal.addColorStop(1, 'rgba(62,200,210,0)');
    g.fillStyle = teal; g.fillRect(0, 0, W, H);
    g.globalAlpha = 0.55;
    g.drawImage(sprite(AMBER, 'glow'), cx - W * 0.6, hy - W * 0.6, W * 1.2, W * 1.2);
    g.globalAlpha = 1; g.globalCompositeOperation = 'source-over';
    // 星球表面（金色的海）
    g.save(); g.beginPath(); g.arc(cx, hy + RB, RB, 0, Math.PI * 2); g.clip();
    const sea = g.createLinearGradient(0, hy, 0, H);
    sea.addColorStop(0, '#8a5c34'); sea.addColorStop(0.2, '#4a2f3a'); sea.addColorStop(1, '#130c1c');
    g.fillStyle = sea; g.fillRect(0, hy - 40, W, H);
    g.globalCompositeOperation = 'lighter';
    g.save(); g.translate(cx, hy); g.scale(1, 0.55);
    g.globalAlpha = 0.6; g.drawImage(sprite(GOLD, 'glow'), -W * 0.5, 60 - W * 0.5, W, W);
    g.restore();
    g.globalAlpha = 0.4; g.drawImage(sprite(AMBER, 'glow'), cx - W * 0.6, hy - W * 0.6, W * 1.2, W * 1.2);
    g.restore();
    // 發光的弧形地平線
    g.globalCompositeOperation = 'lighter'; g.globalAlpha = 1;
    for (const [lw, rgb, a] of [[44, AMBER, 0.12], [14, GOLD, 0.38], [3.2, WHITE, 0.95]]) {
      g.strokeStyle = `rgba(${rgb},${a})`; g.lineWidth = lw;
      g.beginPath(); g.arc(cx, hy + RB, RB, Math.PI * 1.25, Math.PI * 1.75); g.stroke();
    }
    seaBg = c;
  }

  const stamp = (img, x, y, s, a) => { if (a <= 0.003) return; ctx.globalAlpha = Math.min(1, a); ctx.drawImage(img, x - s / 2, y - s / 2, s, s); };
  const beam = (cx, cy, len, w, a, vertical, rgb) => {
    if (a <= 0.003) return;
    ctx.save(); ctx.translate(cx, cy); if (vertical) ctx.rotate(Math.PI / 2);
    ctx.globalAlpha = Math.min(1, a); ctx.drawImage(beamSprite(rgb), -len / 2, -w / 2, len, w);
    ctx.restore();
  };

  // 十字星芒：核心光、長短兩道光束、放射細線
  function flare(cx, cy, s, a, t) {
    if (a <= 0) return;
    stamp(sprite(AMBER, 'glow'), cx, cy, 420 * s * P.u, 0.35 * a);
    stamp(sprite(GOLD, 'glow'), cx, cy, 170 * s * P.u, 0.85 * a);
    stamp(sprite(WHITE, 'glow'), cx, cy, 70 * s * P.u, a);
    if (!rays) buildRays();
    const rs = rays.size * (s / 2.2);
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * 0.025);
    ctx.globalAlpha = a * (0.8 + 0.2 * Math.sin(t * 1.3));
    ctx.drawImage(rays.c, -rs / 2, -rs / 2, rs, rs);
    ctx.restore();
    const hx = W * 0.72 * s; const vy = H * 0.52 * s;
    beam(cx, cy, hx, 34 * s, 0.5 * a, false, GOLD);
    beam(cx, cy, hx, 5, 0.95 * a, false, WHITE);
    beam(cx, cy, vy, 26 * s, 0.45 * a, true, GOLD);
    beam(cx, cy, vy, 4.4, 0.9 * a, true, WHITE);
  }

  // 開場的螺旋光流路徑（u：0 在畫面上方，1 落到中央）
  const path = (u, cx, cy) => {
    const e = easeInOut(u);
    return [cx + Math.sin(u * Math.PI * 5) * W * 0.035 * (1 - e), -H * 0.08 + (cy + H * 0.08) * e];
  };

  // 使用者點擊：水面泛起漣漪與小水花，天空灑出金粉
  function drawTaps(t) {
    for (let i = taps.length - 1; i >= 0; i--) {
      const tp = taps[i]; const age = t - tp.t;
      if (age > 2.2 || age < 0) { taps.splice(i, 1); continue; }
      if (tp.water) {
        const k = clamp((tp.y - H * 0.62) / (H * 0.38)); const sc = 0.5 + k * 1.2;
        ctx.lineWidth = 1.6; ctx.globalAlpha = 1;
        for (let r = 0; r < 3; r++) {
          const rr = clamp(age / 1.7 - r * 0.15); if (rr <= 0) continue;
          ctx.strokeStyle = `rgba(${PALE},${(0.65 * (1 - rr)).toFixed(3)})`;
          const rx = (10 + rr * W * 0.13) * sc;
          ctx.beginPath(); ctx.ellipse(tp.x, tp.y, rx, rx * 0.2 * (0.6 + k), 0, 0, Math.PI * 2); ctx.stroke();
        }
        stamp(sprite(WHITE, 'glow'), tp.x, tp.y, 70 * sc, clamp(1 - age / 0.6));
        const sp = clamp(age / 0.9);
        if (sp < 1) {
          for (let j = 0; j < 16; j++) {
            const ang = hash(j, tp.id, 1) * Math.PI * 2; const v = (0.04 + hash(tp.id, j, 2) * 0.07) * H * sc;
            const x = tp.x + Math.cos(ang) * (8 + 26 * sp) * sc;
            const y = tp.y + Math.sin(ang) * 4 * sc - v * 4 * sp * (1 - sp);
            stamp(sprite(j % 3 ? GOLD : WHITE, 'glow'), x, y, (6 + (j % 3) * 3) * sc, (1 - sp) ** 0.7);
          }
        }
      } else {
        const e = easeOut(clamp(age / 1.3)); const a = 1 - clamp(age / 1.3);
        stamp(sprite(GOLD, 'glow'), tp.x, tp.y, 90 * P.u + 30, a * 0.6);
        for (let j = 0; j < 18; j++) {
          const ang = hash(j, tp.id, 3) * Math.PI * 2; const d = (30 + hash(tp.id, j, 4) * 70) * P.u * e;
          stamp(sprite(j % 4 ? PALE : WHITE, 'glow'), tp.x + Math.cos(ang) * d, tp.y + Math.sin(ang) * d + age * 14, 7 + (j % 3) * 3, a * (0.5 + 0.5 * Math.sin(t * 9 + j)));
        }
      }
    }
  }

  // 金色的海（圓形視窗裡、以及撐滿後的整個畫面）
  function sea(t, q3) {
    const { cx, hy } = horizon();
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    if (!seaBg) buildSea();
    ctx.drawImage(seaBg, 0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    // 波光：越靠近畫面下方越寬（透視）。依亮度與粗細分組，一組只描一次線
    ctx.lineCap = 'round';
    const groups = new Map();
    const lim = n(P.ripples);
    for (let i = 0; i < lim; i++) {
      const r = P.ripples[i];
      const y = hy + 6 + r.y * r.y * (H - hy);
      if (y < arcAt(r.x) + 3) continue;
      const k = (y - hy) / (H - hy);
      const x = r.x + Math.sin(t * 0.3 + r.ph) * 12;
      const near = 1 - Math.min(1, Math.abs(x - cx) / (W * 0.6));
      const al = r.a * (0.45 + 0.55 * Math.sin(t * r.f + r.ph) ** 2) * (0.5 + near);
      const key = `${Math.min(5, Math.round(al * 6))}|${Math.round(k * 3)}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push([x, y, r.w * (0.4 + k * 2.2), (2 + k * 5) * Math.sin(t * r.f + r.ph)]);
    }
    ctx.globalAlpha = 1;
    for (const [key, list] of groups) {
      const [a, k] = key.split('|').map(Number);
      if (!a) continue;
      ctx.strokeStyle = `rgba(${PALE},${(a / 6).toFixed(3)})`;
      ctx.lineWidth = 0.8 + (k / 3) * 2.4;
      ctx.beginPath();
      for (const [x, y, w, amp] of list) { ctx.moveTo(x - w, y); ctx.quadraticCurveTo(x, y - amp, x + w, y); }
      ctx.stroke();
    }
    // 光柱：在地平線上隨機位置升起、一閃一閃，過一會兒淡出，再從別的地方冒出來
    const e3 = easeOut(q3);
    const lp = Math.ceil(PILLARS * Q);
    for (let i = 0; i < lp; i++) {
      const period = 2.6 + ((i * 1.37) % 1.9);
      const cyc = (t + i * 0.61 * period) / period;
      const c = Math.floor(cyc); const u = cyc - c;
      if (u > 0.72) continue;
      const grow = easeOut(clamp(u / 0.12));
      const life = clamp(u / 0.05) * clamp((0.72 - u) / 0.16);
      let flick = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(t * (11 + i * 1.7))) * (0.6 + 0.4 * Math.sin(t * (3.3 + i * 0.9) + c));
      if (hash(i, Math.floor(t * 12), c) < 0.12) flick *= 0.35;
      const a = life * flick * e3;
      if (a < 0.02) continue;
      const x = cx + (hash(i, c, 1) - 0.5) * 0.84 * W;
      const h = (0.35 + hash(i, c, 2) * 0.65) * grow * e3;
      const thick = 0.6 + hash(i, c, 3) * 0.8;
      const top = hy - (hy - H * 0.02) * h;
      if (top >= hy - 2) continue;
      for (const [w, rgb, al] of [[(26 * P.u + 10) * thick, GOLD, 0.16], [3.2 * thick, WHITE, 0.9]]) {
        const img = pillarSprite(rgb, al);
        ctx.globalAlpha = a;
        ctx.drawImage(img, x - w / 2, top, w, hy - top);
        ctx.save(); ctx.translate(0, hy); ctx.scale(1, -1); ctx.globalAlpha = 0.6 * a;
        ctx.drawImage(img, x - w / 2, -(hy - top) * 0.45, w, (hy - top) * 0.45);
        ctx.restore();
      }
      stamp(sprite(WHITE, 'glow'), x, arcAt(x), (60 * P.u + 20) * thick, 0.9 * a);
    }
    // 地平線上的光潮
    const lt = n(P.tide);
    for (let i = 0; i < lt; i++) {
      const d = P.tide[i];
      const x = ((d.x + d.vx * t + px * 30 * (d.s / 20)) % W + W) % W;
      const base = arcAt(x);
      const tw = 0.5 + 0.5 * Math.sin(t * d.f + d.ph);
      const y = d.onWater ? base + 6 + d.dy * 0.7 : base - 3 - d.dy + Math.sin(t * 0.6 + d.ph) * 4;
      const fall = d.onWater ? 0.55 : 1 - d.dy / (0.2 * H);
      stamp(sprite(d.c, d.s > 10 ? 'bokeh' : 'glow'), x, y, d.s * (d.s > 10 ? 1.4 : 2), (0.25 + 0.6 * tw) * fall * e3);
    }
    drawTaps(t);
    // 從海面往上飄的光點
    const lm = n(P.motes);
    for (let i = 0; i < lm; i++) {
      const m = P.motes[i];
      const range = hy * 0.95;
      const y = hy + 20 - ((t * m.v + m.off * range) % range);
      const fade = clamp((hy - y) / 40) * clamp(y / (H * 0.25));
      const x = m.x + Math.sin(t * 0.5 + m.ph) * m.sw + px * m.s * 0.6;
      stamp(sprite(m.c, m.s > 9 ? 'bokeh' : 'glow'), x, y, m.s * (m.s > 9 ? 1.6 : 2.2), (0.3 + 0.45 * q3) * fade);
    }
    // 近景的大顆散景
    const lf = n(P.fore);
    for (let i = 0; i < lf; i++) {
      const f = P.fore[i];
      stamp(sprite(GOLD, 'bokeh'), f.x + Math.sin(t * 0.2 + f.ph) * 20 + px * 40, f.y + Math.cos(t * 0.15 + f.ph) * 16 + py * 30, f.s, f.a);
    }
  }

  function draw(t) {
    const still = reduceMotion();
    const e = (performance.now() - t0) / 1000;
    const intro = still ? 1 : clamp(e / TL.comet); // 開場光流
    const p = still ? 1 : clamp((e - TL.start) / TL.span); // 之後的演出進度
    if (Math.abs(p - lastP) > 0.001 || (p === 1 && lastP !== 1)) { lastP = p; onFrame(p); }
    const cx = W / 2; const cy = H * LAND_Y;
    // 演出順序：落水濺起水花（0～.28）→ 水花停止後光芒升起（.3～.48）→ 爆光、圓形視窗撐開（.47～.75）→ 金色的海（.62～.88）
    const splash = clamp(p / 0.28);
    const glow = clamp((p - 0.3) / 0.18); // 光芒（十字星芒）由弱到強
    const q2 = clamp((p - 0.47) / 0.28);
    const q3 = clamp((p - 0.62) / 0.26);
    // 圓形視窗從落點撐開：最大半徑要超過落點到最遠角落（上方兩角）的距離，撐滿時四角不留黑邊
    const r = easeInOut(q2) * Math.hypot(W / 2, Math.max(cy, H - cy)) * 1.06;
    px += (tx - px) * 0.05; py += (ty - py) * 0.05;

    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    if (q2 < 1) {
      // 夜空（星星依亮度分 4 組，一組只換一次顏色）
      ctx.fillStyle = '#05060f'; ctx.fillRect(0, 0, W, H);
      const ls = n(P.stars);
      for (let b = 0; b < 4; b++) {
        ctx.fillStyle = `rgba(255,236,190,${(0.15 + b * 0.2).toFixed(2)})`;
        for (let i = 0; i < ls; i++) {
          const s = P.stars[i];
          if (Math.min(3, Math.floor(s.a * (0.5 + 0.5 * Math.sin(t * s.f + s.ph)) * 5)) !== b) continue;
          ctx.fillRect(s.x + px * 4, s.y + py * 3, s.s, s.s);
        }
      }
      ctx.globalCompositeOperation = 'lighter';

      // 開場的螺旋光流與殘留的金粉
      const trailA = (1 - clamp(p / 0.1));
      if (trailA > 0) {
        const lt = n(P.trail);
        for (let i = 0; i < lt; i++) {
          const g = P.trail[i];
          if (g.at > intro) continue;
          const [x, y] = path(g.at, cx, cy);
          const age = intro - g.at;
          const tw = 0.5 + 0.5 * Math.sin(t * g.f + g.ph);
          stamp(sprite(PALE, 'glow'), x + g.dx * age * 3, y + g.dy * age * 2, g.s * P.u * 1.4, (0.25 + 0.6 * tw) * trailA * (1 - age * 0.5));
        }
        if (intro < 1) {
          for (let k = 0; k < 22; k++) {
            const u = intro - k * 0.012; if (u < 0) break;
            const [x, y] = path(u, cx, cy);
            stamp(sprite(k ? GOLD : WHITE, 'glow'), x, y, (k ? 26 - k : 40) * P.u, (1 - k / 22) * 0.9);
          }
        }
      }

      // 星芒：落下後出現，之後逐漸增強
      // 落水瞬間只有一團柔光（不出現星芒）
      const land = clamp((intro - 0.92) / 0.08) * (1 - clamp(p / 0.12));
      if (land > 0.01) {
        stamp(sprite(GOLD, 'glow'), cx, cy, 160 * P.u, 0.8 * land);
        stamp(sprite(WHITE, 'glow'), cx, cy, 50 * P.u, land);
      }
      // 水花停止到光芒升起之間：落點留著一團微微發亮的餘光（不會整個畫面暗掉），光芒從這裡長出來
      const ember = clamp(p / 0.06) * (1 - glow) * (0.75 + 0.25 * Math.sin(t * 5));
      if (ember > 0.01) {
        ctx.save(); ctx.translate(cx, cy); ctx.scale(1, 0.35);
        stamp(sprite(AMBER, 'glow'), 0, 0, 260 * P.u, 0.55 * ember);
        ctx.restore();
        stamp(sprite(GOLD, 'glow'), cx, cy, 70 * P.u, 0.7 * ember);
        stamp(sprite(WHITE, 'glow'), cx, cy, 22 * P.u, 0.8 * ember);
      }
      // 水花停止後，光芒才從落點升起、逐漸增強
      const flash = Math.exp(-(((p - 0.48) / 0.05) ** 2));
      flare(cx, cy, 0.5 + easeOut(glow) * 1.0 + flash * 0.8, easeOut(glow) * (1 - clamp((q2 - 0.15) / 0.2)), t);

      // 水冠與漣漪
      if (splash > 0 && splash < 1) {
        const fade = 1 - splash;
        ctx.save(); ctx.translate(cx, cy); ctx.scale(1, 0.18);
        stamp(sprite(GOLD, 'glow'), 0, 0, (120 + splash * W * 0.5) * P.u + 80, 0.9 * fade);
        ctx.restore();
        ctx.lineWidth = 2; ctx.globalAlpha = 1;
        for (let k = 0; k < 4; k++) {
          const rr = clamp(splash * 1.3 - k * 0.14); if (rr <= 0) continue;
          ctx.strokeStyle = `rgba(${PALE},${(0.55 * (1 - rr)).toFixed(3)})`;
          ctx.beginPath(); ctx.ellipse(cx, cy, 20 + rr * W * 0.42, (20 + rr * W * 0.42) * 0.16, 0, 0, Math.PI * 2); ctx.stroke();
        }
        const R0 = 26 * P.u + 10;
        const spread = 1 + splash * 2.4;
        const lc = n(P.crown);
        const pts = [];
        ctx.strokeStyle = `rgba(${GOLD},${(0.32 * fade).toFixed(3)})`; ctx.lineWidth = 3 * P.u + 1; ctx.globalAlpha = 1;
        ctx.beginPath();
        for (let i = 0; i < lc; i++) {
          const d = P.crown[i];
          const bx = cx + Math.cos(d.ang) * R0 * spread;
          const by = cy + Math.sin(d.ang) * R0 * spread * 0.18;
          const x = bx + Math.cos(d.ang) * d.out * splash;
          const y = by - d.v * 4 * splash * (1 - splash) * (0.6 + 0.4 * Math.abs(Math.cos(d.ang)));
          if (d.streak) { ctx.moveTo(bx, by); ctx.lineTo(x, y); }
          pts.push([d, x, y]);
        }
        ctx.stroke();
        for (const [d, x, y] of pts) stamp(sprite(d.streak ? WHITE : GOLD, 'glow'), x, y, d.s * P.u * (1 - splash * 0.4), fade ** 0.7);
        const lr = n(P.rise);
        for (let i = 0; i < lr; i++) {
          const s = P.rise[i];
          stamp(sprite(PALE, 'glow'), cx + s.x * (1 + splash), cy - splash * H * 0.55 * s.v, s.s * P.u * 2, 0.8 * fade);
        }
      }
    }

    // 圓形視窗：裡面是金色的海
    if (q2 > 0) {
      ctx.save();
      if (q2 < 1) { ctx.beginPath(); ctx.arc(cx, cy, Math.max(1, r), 0, Math.PI * 2); ctx.clip(); }
      sea(t, q3);
      ctx.restore();
      ctx.globalCompositeOperation = 'lighter';
      // 邊緣的彩虹光環
      const ra = 1 - q2 ** 2;
      if (ra > 0 && r > 2) {
        ctx.globalAlpha = 1;
        ctx.strokeStyle = `rgba(${GOLD},${0.2 * ra})`; ctx.lineWidth = 34;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
        if (hasConic) {
          const cg = ctx.createConicGradient(t * 0.4, cx, cy);
          ['#ff8a8a', '#ffd36b', '#8dffb0', '#7fe7f0', '#a99bff', '#ff8adf', '#ff8a8a'].forEach((c, i, a) => cg.addColorStop(i / (a.length - 1), c));
          ctx.strokeStyle = cg; ctx.globalAlpha = 0.6 * ra;
        } else { ctx.strokeStyle = `rgba(${WHITE},${0.6 * ra})`; }
        ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(cx, cy, r + 4, 0, Math.PI * 2); ctx.stroke();
        ctx.globalAlpha = 1; ctx.strokeStyle = `rgba(${WHITE},${0.85 * ra})`; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      }
      // 爆開的散景
      const ba = Math.sin(Math.PI * Math.min(1, q2 * 1.15)) * 0.6;
      if (ba > 0.01) {
        const e2 = easeOut(q2);
        const lb = n(P.burst);
        for (let i = 0; i < lb; i++) {
          const b = P.burst[i];
          stamp(sprite(b.c, 'bokeh'), cx + Math.cos(b.ang) * b.d * D * 0.5 * e2, cy + Math.sin(b.ang) * b.d * D * 0.4 * e2, b.s * (0.6 + e2 * 0.6), ba);
        }
      }
    }

    // 爆光的一瞬間
    const flash = Math.exp(-(((p - 0.48) / 0.045) ** 2));
    if (flash > 0.01) {
      ctx.globalCompositeOperation = 'lighter';
      stamp(sprite(WHITE, 'glow'), cx, cy, D * 1.1 * flash, flash * 0.9);
      ctx.globalAlpha = 1; ctx.fillStyle = `rgba(255,236,190,${(flash * 0.3).toFixed(3)})`; ctx.fillRect(0, 0, W, H);
    }
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  }

  // 套用畫質等級（解析度）
  const applyLevel = () => {
    const dpr = Math.min(devicePixelRatio || 1, LEVELS[level].dpr);
    Q = LEVELS[level].q;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seaBg = null; // 下次用到時依新解析度重畫
  };
  // 監看每格耗時：持續低於約 40 fps 就降一級（只降不升，避免畫質跳來跳去）
  const watch = (now) => {
    if (lastT) {
      const dt = now - lastT;
      if (dt < 250) { ema = ema * 0.9 + dt * 0.1; frames += 1; } // 切回分頁等長間隔不算
    }
    lastT = now;
    if (frames > 40 && ema > 25 && level < LEVELS.length - 1) {
      level += 1; applyLevel(); frames = 0; ema = 16.7;
    }
  };

  const loop = (now) => {
    if (!running) return;
    watch(now);
    draw(now / 1000);
    requestAnimationFrame(loop);
  };
  const size = () => {
    const w = canvas.offsetWidth; const h = canvas.offsetHeight; if (!w || !h) return;
    if (Math.abs(w - W) < 2 && Math.abs(h - H) < 2 && P.stars) return;
    const rebuild = !P.stars || Math.abs(w - W) >= 2 || Math.abs(h - H) > 140; // 手機網址列收合時不重建粒子
    W = w; H = h; D = Math.hypot(W, H);
    if (rebuild) build();
    applyLevel();
    if (!running) draw(performance.now() / 1000);
  };
  const toggle = () => {
    const want = !reduceMotion() && onScreen && !document.hidden;
    if (want && !running) {
      const now = performance.now();
      if (!started) { t0 = now; started = true; } else if (pausedAt) t0 += now - pausedAt; // 暫停的時間不算
      pausedAt = 0;
      running = true; lastT = 0; requestAnimationFrame(loop);
    } else if (!want && running) { running = false; pausedAt = performance.now(); if (W) draw(pausedAt / 1000); }
    else if (!want && W) draw(performance.now() / 1000);
  };
  const onMove = (e) => { tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5; };

  const ro = new ResizeObserver(size); ro.observe(canvas);
  const io = new IntersectionObserver((es) => { onScreen = es[0].isIntersecting; toggle(); }); io.observe(canvas);
  document.addEventListener('visibilitychange', toggle);
  addEventListener('pointermove', onMove, { passive: true });
  size();

  let tapId = 0;
  return {
    toggle,
    // 直接跳到最後畫面
    finish() { started = true; pausedAt = 0; t0 = performance.now() - (TL.start + TL.span + 1) * 1000; if (!running && W) draw(performance.now() / 1000); },
    restart() { started = true; pausedAt = 0; t0 = performance.now(); lastP = -1; },
    // 點擊位置（相對畫布）：地平線以下算水面
    tap(x, y) {
      tapId += 1;
      taps.push({ x, y, t: performance.now() / 1000, id: tapId, water: y > arcAt(x) + 4 });
      if (taps.length > 8) taps.shift();
    },
    destroy() {
      running = false; ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', toggle);
      removeEventListener('pointermove', onMove);
    },
  };
}

export function mount(root, ctx) {
  root.classList.add('view-home');
  const live = !reduceMotion();
  root.innerHTML = `
  <section class="aw${live ? ' is-live' : ''}" aria-labelledby="aw-title">
    <canvas class="aw-canvas" aria-hidden="true"></canvas>
    <div class="aw-cap">
      <p class="aw-kicker">SHOPPING RELICS</p>
      <h1 class="aw-title" id="aw-title" lang="ja"><span class="nw">旅立ちの前に、</span><span class="nw">光は満ちる。</span></h1>
      <p class="aw-sub" lang="ja"><span class="nw">ほしいものは、ここに記して。</span><span class="nw">時間はすべて、旅のために。</span></p>
      <p class="aw-zh" lang="zh-TW"><span class="nw">出發之前，光已滿溢。</span><span class="nw">想要的都寫在這裡，時間全留給旅程。</span></p>
      <ul class="aw-stats" aria-label="清單概況" data-stats>${statsLine(ctx).join('')}</ul>
      <div class="aw-cta" data-cta>
        <a class="btn btn-gold" href="#/list">${icon('auto_awesome')}開啟清單</a>
        <button type="button" class="btn btn-ghost-light" data-add>${icon('add_circle')}<span data-add-label>${addLabel(ctx.state)}</span></button>
      </div>
      <button type="button" class="aw-replay" data-replay>${icon('movie', 'sm')}重播片頭</button>
    </div>
    <button type="button" class="aw-skip" data-skipintro hidden>跳過片頭${icon('fast_forward', 'sm')}</button>
  </section>`;

  const sec = root.querySelector('.aw');
  const cap = root.querySelector('.aw-cap');
  const skipBtn = root.querySelector('[data-skipintro]');

  let done = null;
  let lastC = -1;
  // 每格收到演出進度：標題浮出、導覽列滑出、「跳過片頭」按鈕的顯示
  const onFrame = (p) => {
    const c = clamp((p - 0.8) / 0.14);
    if (Math.abs(c - lastC) > 0.004 || (c === 1 && lastC !== 1)) {
      lastC = c;
      sec.style.setProperty('--c', c.toFixed(3));
      cap.querySelectorAll('[data-cta], [data-replay]').forEach((el) => { el.inert = c < 0.6; }); // 標題還沒浮出時按鈕不能被 Tab 到
    }
    const nowDone = p >= DONE_AT;
    if (nowDone !== done) {
      done = nowDone;
      const playing = sec.classList.contains('is-live') && !done;
      document.body.classList.toggle('home-intro', playing);
      skipBtn.hidden = !playing;
      if (done) markSeen();
    }
  };
  // 看過片頭：直接停在最後畫面，用淡入代替整段演出（在第一格畫出來之前就決定好）
  const quick = live && seen();
  document.body.classList.toggle('home-intro', live && !quick);
  if (quick) sec.classList.add('is-quick');
  const field = scene(root.querySelector('.aw-canvas'), onFrame);
  if (quick) field.finish();

  // 系統的「減少動態」設定改變時同步
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  const onMotion = () => {
    sec.classList.toggle('is-live', !reduceMotion());
    if (reduceMotion()) field.finish();
    field.toggle();
  };
  mq.addEventListener?.('change', onMotion);

  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-add]')) document.dispatchEvent(new CustomEvent('app:add'));
    if (e.target.closest('[data-skipintro]')) {
      field.finish();
      // 用鍵盤按的（e.detail 為 0）才把焦點移到第一顆按鈕
      if (e.detail === 0) requestAnimationFrame(() => cap.querySelector('[data-cta] a')?.focus());
    }
    if (e.target.closest('[data-replay]')) {
      sec.classList.remove('is-quick');
      field.restart();
      if (e.detail === 0) requestAnimationFrame(() => skipBtn.focus());
      else document.activeElement?.blur();
    }
  });
  // 點畫面（不是按鈕或文字）：水面泛起漣漪、天空灑出金粉
  sec.addEventListener('pointerdown', (e) => {
    if (!done || reduceMotion() || e.button > 0) return;
    if (e.target.closest('a, button, .aw-title, .aw-sub, .aw-zh, .aw-stats, .aw-kicker')) return;
    const r = sec.getBoundingClientRect();
    field.tap(e.clientX - r.left, e.clientY - r.top);
  });

  return {
    update(next) {
      root.querySelector('[data-stats]').innerHTML = statsLine(next).join('');
      root.querySelector('[data-add-label]').textContent = addLabel(next.state);
    },
    destroy() {
      mq.removeEventListener?.('change', onMotion);
      field.destroy();
      document.body.classList.remove('home-intro');
    },
  };
}
