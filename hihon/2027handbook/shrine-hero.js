// 神社頁頁首：櫻花隧道（three.js 寫實 3D 版）
// 構圖：參道筆直延伸到遠方，左右兩排櫻花樹往中間拱起，形成一條花的隧道；兩側朱紅欄杆、石柱與燈籠柱
// 動畫：白天櫻花 → 一陣風捲起花吹雪遮住畫面 → 夜晚（深藍星空＋星雲、深紅櫻花、燈籠點亮）→ 再吹回白天，循環
// 白天色調參考粉白柔光的櫻花與玻璃風鈴；夜晚色調參考深藍星空與深紅櫻花
// 頁首撐滿視窗（扣除網站標頭）；canvas 固定絕對定位且限制像素量，避免「canvas 撐大頁首 → 再放大 canvas」的記憶體暴增迴圈
// 一般 <script>（defer）載入，three.js 以動態 import 從 CDN 取得；載入失敗或不支援 WebGL 時保留漸層底圖
// 「減少動態效果」時只畫一張白天靜止畫面；動畫可用右下角按鈕暫停
// 進站時只顯示滿版的靜態文字畫面（寫在 shrine.html，樣式在 shrine-hero.css；轉場時以櫻花液體填充圖示顯示載入進度；網站導覽列到 PART 1 才出現）（文字定格晃動；轉場完成前鎖住頁面捲動）（不載入 three.js、不建立 WebGL）；轉動滾輪／按鍵／輕滑／點按鈕後，
// 文字化作花瓣隱約散開，同時在背後載入動畫，兩者都完成後才淡出進站畫面、露出動畫頁首（頁面不會被捲動）
(() => {
'use strict';
const hero = document.querySelector('[data-sakura-hero]');
const box = hero && hero.querySelector('.scene-fx');
if (!box) return;
const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- 頁首專用樣式：底圖（載入前／失敗時）、文字區遮罩、暫停按鈕 ----
// 樣式在 shrine-hero.css（靜態檔，一打開頁面就生效，不必等這支程式）

// 頁首高度＝視窗高度扣掉網站標頭（標頭若是 fixed 疊在上面就不扣）
// 重要：不用 vh。放在「依內容自動長高」的預覽框裡時，vh 會跟著頁面一起變高，形成無限長高 → 記憶體爆掉。
// 改用 JS 算出像素值，並以螢幕可用高度與 1400px 為上限，保證一定收斂。
const headerEl = document.querySelector('.site-header');
const MAX_HERO_H = Math.min((screen && screen.availHeight) || 1000, 1400);
let heroTarget = 0;
const setHeroHeight = () => {
  const st = headerEl ? getComputedStyle(headerEl).position : 'static';
  const top = headerEl && st !== 'fixed' && st !== 'absolute' ? Math.min(Math.round(headerEl.getBoundingClientRect().height), 200) : 0;
  const h = Math.max(480, Math.min(innerHeight, MAX_HERO_H) - top);
  if (Math.abs(h - heroTarget) < 2) return;
  heroTarget = h; hero.style.setProperty('--sakura-h', h + 'px');
};
setHeroHeight(); addEventListener('resize', setHeroHeight, { passive: true });
hero.dataset.scene = 'day';

// ======== 進站畫面：先只顯示靜態文字；一定要轉動滾輪進入動畫頁首後，才能往下看到內容 ========
// 把文字拆成一個字一個 span，套上定格晃動；每個字隨機挑一組姿勢、隨機錯開起點
const sm = (text, amp, accent = '') => [...text].map((ch, i) => {
  const set = ['smA', 'smB', 'smC'][Math.floor(Math.random() * 3)], delay = -(Math.random() * .9).toFixed(3);
  const cls = accent && accent.includes(ch) ? ' is-accent' : '';
  return `<span class="sm${cls}" style="--a:${(amp * (.75 + Math.random() * .5)).toFixed(2)};--sm:${set};--sd:${delay}s">${ch === ' ' ? ' ' : ch}</span>`;
}).join('');
// 進站畫面已直接寫在 shrine.html（一打開就看得到）；找不到時才由這裡產生
let intro = hero.querySelector('.scene-intro');
if (!intro) {
intro = document.createElement('div');
intro.className = 'scene-intro';
intro.innerHTML = `<div class="scene-intro__body">
  <span class="eyebrow" aria-hidden="true">${sm('SHRINES & TEMPLES', .7).replace('&', '&amp;')}</span>
  <span class="scene-intro__title" aria-hidden="true">${sm('神社參拜', 1.6, '參拜')}</span>
  <span class="scene-intro__lead" aria-hidden="true">${sm('先學會參拜禮儀，再挑想去的神社與寺廟。', .8)}</span>
</div>
`;
hero.append(intro);
}

// ---- 捲動鎖：進入動畫頁首之前不能往下捲（重新整理時也一律回到頂端）----
const root = document.documentElement, savedHash = location.hash;
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
root.classList.add('sakura-lock');
const toTop = () => { if (scrollX || scrollY) scrollTo({ top: 0, left: 0, behavior: 'instant' }); };
toTop(); addEventListener('load', toTop, { once: true });                      // 瀏覽器載入完才跳到 #錨點時，再拉回頂端
let locked = true, begun = false;
const inDialog = t => t && t.closest && t.closest('dialog,[role="dialog"],input,textarea,select,[contenteditable="true"]');
const onWheel = e => {
  if (!locked || inDialog(e.target)) return;
  e.preventDefault();                                                           // 不捲動頁面
  if (e.deltaY > 0) begin();                                                    // 往下轉滾輪＝揭開動畫
};
const SCROLL_KEYS = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Spacebar'];
const onKey = e => {
  if (!locked || inDialog(e.target) || !SCROLL_KEYS.includes(e.key)) return;
  if ((e.key === ' ' || e.key === 'Spacebar') && e.target.closest('button,a,summary')) return;   // 空白鍵按按鈕照常運作
  e.preventDefault();
  if (['ArrowDown', 'PageDown', 'End', ' ', 'Spacebar'].includes(e.key)) begin();
};
let touchY = null;
const onTouchStart = e => { touchY = e.touches[0].clientY; };
const onTouchMove = e => {
  if (!locked || inDialog(e.target)) return;
  e.preventDefault();
  if (touchY !== null && touchY - e.touches[0].clientY > 24) { touchY = null; begin(); }
};
const onScroll = () => { if (locked) toTop(); };
// 鍵盤使用者 Tab 到下方內容（或按「跳到主要內容」）：視為要進入，開始轉場，不讓人卡在進站畫面
const onFocus = e => { if (locked && !hero.contains(e.target) && !(headerEl && headerEl.contains(e.target)) && !inDialog(e.target)) begin(); };
const onHash = () => { if (locked) { toTop(); begin(); } };
addEventListener('wheel', onWheel, { passive: false });
addEventListener('keydown', onKey);
addEventListener('touchstart', onTouchStart, { passive: true });
addEventListener('touchmove', onTouchMove, { passive: false });
addEventListener('scroll', onScroll, { passive: true });
addEventListener('hashchange', onHash);
document.addEventListener('focusin', onFocus);
function unlock() {
  if (!locked) return; locked = false;
  root.classList.remove('sakura-lock');
  removeEventListener('wheel', onWheel); removeEventListener('keydown', onKey); removeEventListener('touchstart', onTouchStart);
  removeEventListener('touchmove', onTouchMove); removeEventListener('scroll', onScroll); removeEventListener('hashchange', onHash);
  document.removeEventListener('focusin', onFocus);
  if ('scrollRestoration' in history) history.scrollRestoration = 'auto';
  navUpdate();
  const h = location.hash || savedHash;                                         // 網址帶 #錨點：進入後再捲過去
  const el = h && document.getElementById(decodeURIComponent(h.slice(1)));
  if (el) requestAnimationFrame(() => { el.scrollIntoView(); navUpdate(); });
}

// ---- 載入動畫：櫻花液體填充圖示 ----
// 動畫在背景載入時，液面用 GSAP 慢慢升到 90%（數字同步）；載入完成再補滿到 100%，才進入頁首
// 沒有 GSAP（離線或載入失敗）時改用 requestAnimationFrame 做同樣的補間
const loader = (() => {
  const el = intro.querySelector('.lf');
  if (!el) return { start() {}, complete(cb) { cb(); } };
  const levels = el.querySelectorAll('.lf__level'), nums = el.querySelectorAll('.lf__num');
  const st = { p: 0 }, Y0 = 182, Y1 = 18;                      // 液面 y：205＝空、-14＝滿（含波浪高度）
  const render = () => {
    const y = Y0 + (Y1 - Y0) * st.p, pct = Math.round(st.p * 100) + '%';
    if (window.gsap) gsap.set(levels, { y }); else levels.forEach(g => g.setAttribute('transform', `translate(0 ${y})`));
    nums.forEach(n => { n.textContent = pct; });
    el.setAttribute('aria-valuenow', Math.round(st.p * 100));
  };
  let tw = null;
  const tween = (to, dur, ease, done) => {
    if (tw) tw.kill();
    if (window.gsap) { tw = gsap.to(st, { p: to, duration: dur, ease, onUpdate: render, onComplete: done }); return; }
    const from = st.p, t0 = performance.now(); let alive = true;   // 備用補間（ease-out）
    tw = { kill() { alive = false; } };
    const step = now => { if (!alive) return; const k = Math.max(0, Math.min(1, (now - t0) / (dur * 1000))); st.p = from + (to - from) * (1 - (1 - k) ** 2); render(); if (k < 1) requestAnimationFrame(step); else if (done) done(); };
    requestAnimationFrame(step);
  };
  if (window.gsap) gsap.set(levels, { y: Y0 });
  return {
    start() { tween(.9, reduce ? .8 : 3.2, 'power1.out'); },
    complete(cb) { tween(1, reduce ? .2 : .7, 'power2.inOut', () => setTimeout(cb, reduce ? 0 : 280)); },
  };
})();

// ---- 網站導覽列：進站畫面與 3D 頁首時藏起來，捲到 PART 1 才出現 ----
const part1 = document.getElementById('chapter-start') || document.querySelector('article h2');
const navUpdate = () => {
  const navOpen = document.querySelector('#site-nav.is-open');
  const show = !locked && (navOpen || (part1 ? part1.getBoundingClientRect().top < innerHeight * .6 : scrollY > hero.offsetHeight * .6));
  root.classList.toggle('sh-nav-hidden', !show);
};
addEventListener('scroll', navUpdate, { passive: true });
addEventListener('resize', navUpdate, { passive: true });

function begin() {
  if (begun) return; begun = true;
  const hadFocus = intro.contains(document.activeElement);
  hero.classList.add('intro-leaving');
  // 花瓣散完、動畫也準備好了，才淡出進站畫面（避免先露出空白底圖）
  let scattered = false, ready = false, filled = false, finished = false;
  loader.start();
  const finish = () => {
    if (finished || !scattered || !filled) return; finished = true;
    hero.classList.add('intro-done');
    unlock();                                                                   // 進入動畫頁首後才能往下捲
    if (hadFocus) { const h1 = document.getElementById('page-title'); if (h1) { h1.tabIndex = -1; h1.focus({ preventScroll: true }); } }
    setTimeout(() => intro.remove(), 1000);
  };
  scatter(() => { scattered = true; scatterDone(); finish(); });
  const markReady = () => { if (ready) return; ready = true; loader.complete(() => { filled = true; finish(); }); };
  if (hero.classList.contains('is-ready')) markReady();
  else {
    const mo = new MutationObserver(() => { if (hero.classList.contains('is-ready')) { mo.disconnect(); markReady(); } });
    mo.observe(hero, { attributes: true, attributeFilter: ['class'] });
    setTimeout(() => { mo.disconnect(); markReady(); }, 9000);                     // 載入失敗或太慢：最多等 9 秒就改顯示底圖
  }
  if (!loadScene(scatterGate)) markReady();
}
let scatterDone = () => {};
const scatterGate = new Promise(res => { scatterDone = res; });

// 文字化作花瓣散開：輕量 2D canvas，約 1.8 秒，播完即移除（不使用 canvas filter）
function scatter(done) {
  if (reduce) { setTimeout(done, 450); return; }
  const r = intro.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 1.5);
  const c = document.createElement('canvas'); c.className = 'scene-intro__petals'; c.setAttribute('aria-hidden', 'true');
  c.width = Math.max(1, Math.round(r.width * dpr)); c.height = Math.max(1, Math.round(r.height * dpr));
  intro.append(c);
  const g = c.getContext('2d'); g.scale(dpr, dpr);
  const cs = getComputedStyle(hero), v = (n, f) => cs.getPropertyValue(n).trim() || f;   // 花瓣顏色取自神社頁的配色（朱、松葉、金）
  const cols = [v('--sh-shu', '#c4531f'), v('--sh-matsu', '#2d6a5a'), v('--sh-gold', '#d9a43a'), v('--sh-shu-ink', '#a8401a'), v('--sh-matsu-ink', '#25594b'), v('--sh-shu', '#c4531f')];
  const src = [...intro.querySelectorAll('.scene-intro__title,.scene-intro__lead,.scene-intro .eyebrow')].map(el => el.getBoundingClientRect());
  const cx = r.width / 2, cy = r.height * .45, P = [];
  const n = r.width < 640 ? 70 : 130;
  for (let i = 0; i < n; i++) {
    const b = src[i % 3 === 0 ? 0 : Math.random() < .7 ? 0 : (Math.random() < .5 ? 1 : 2)] || src[0];
    const x = b.left - r.left + Math.random() * b.width, y = b.top - r.top + Math.random() * b.height;
    const a = Math.atan2(y - cy, x - cx) + (Math.random() - .5) * .9, sp = 60 + Math.random() * 260;
    P.push({ x, y, vx: Math.cos(a) * sp + 40, vy: Math.sin(a) * sp * .7 - 30, s: 4 + Math.random() * 7, rot: Math.random() * 6.28, vr: (Math.random() - .5) * 6,
             f: Math.random() * 6.28, vf: 4 + Math.random() * 6, col: cols[i % cols.length], delay: Math.random() * .45, life: 1.1 + Math.random() * .7 });
  }
  const petal = s => { g.beginPath(); g.moveTo(0, s); g.bezierCurveTo(-s, s * .4, -s * .9, -s * .7, -s * .18, -s); g.lineTo(0, -s * .78); g.lineTo(s * .18, -s); g.bezierCurveTo(s * .9, -s * .7, s, s * .4, 0, s); g.fill(); };
  let t0 = 0, last = 0;
  const step = now => {
    if (!t0) t0 = last = now;
    const t = (now - t0) / 1000, dt = Math.min(.05, (now - last) / 1000); last = now;
    g.clearRect(0, 0, r.width, r.height);
    let alive = 0;
    for (const p of P) {
      const k = (t - p.delay) / p.life; if (k < 0) { alive++; continue; } if (k >= 1) continue; alive++;
      p.vx += 70 * dt; p.vy += 26 * dt; p.vx *= .985; p.vy *= .985;                 // 微風往右、緩緩下沉
      p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt; p.f += p.vf * dt;
      g.save(); g.translate(p.x, p.y); g.rotate(p.rot); g.scale(Math.abs(Math.cos(p.f)) * .8 + .2, 1);
      g.globalAlpha = Math.sin(Math.min(1, k * 4) * Math.PI / 2) * (1 - k * k) * .85;   // 淡入後慢慢消散：「隱約」的感覺
      g.fillStyle = p.col; petal(p.s); g.restore();
    }
    if (alive && t < 2.6) requestAnimationFrame(step); else { c.remove(); done(); }
  };
  requestAnimationFrame(step);
}

function loadScene(gate = Promise.resolve()) {
  // 確認瀏覽器支援 WebGL（檢查完立刻釋放這個測試用 context），再下載 three.js
  const probe = document.createElement('canvas');
  const gl = probe.getContext('webgl2') || probe.getContext('webgl');
  if (!gl) return false;
  const lose = gl.getExtension('WEBGL_lose_context'); if (lose) lose.loseContext();
  // three.js 先在背景下載；花瓣散完才建立場景（建立場景很吃主執行緒，同時進行會讓花瓣卡頓）
  Promise.all([import(THREE_URL), gate]).then(([T]) => init(T)).catch(err => { console.warn('[shrine-hero] three.js 載入失敗，改用靜態底圖', err); hero.classList.add('is-ready'); });
  return true;
}

function init(T) {
const { Vector3, Color } = T;
let renderer;
try { renderer = new T.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' }); } catch (e) { return; }
renderer.toneMapping = T.NeutralToneMapping;
const cv = renderer.domElement; cv.className = 'scene-cv'; cv.setAttribute('aria-hidden', 'true');
box.append(cv);

const lowEnd = (navigator.hardwareConcurrency || 4) <= 4 || matchMedia('(max-width:639px)').matches;
const Q = lowEnd ? .6 : 1;                                     // 粒子與花朵數量的倍率
let seed = 20261028;
const R = () => (seed = (seed * 16807) % 2147483647) / 2147483647; // 場景幾何用固定亂數
const rnd = (a, b) => a + R() * (b - a);
const mr = (a, b) => a + Math.random() * (b - a);              // 動畫用
const pick = a => a[Math.floor(Math.random() * a.length)];
// 貼圖用的 canvas：willReadFrequently 讓 Chrome 改用 CPU 繪製，避免 GPU 加速畫布在初始化時配置大量顯示記憶體
const mk = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; c.getContext('2d', { willReadFrequently: true }); return c; };
// 顏色變暗（取代 canvas filter；GPU 加速畫布上的 filter 每筆繪圖都會配置整張畫布大小的暫存圖層，是記憶體爆掉的元兇）
const shadeCol = (c, k) => {
  if (k === 1) return c;
  let r, g, b, a = 1, m;
  if (c[0] === '#') { r = parseInt(c.slice(1, 3), 16); g = parseInt(c.slice(3, 5), 16); b = parseInt(c.slice(5, 7), 16); }
  else if ((m = c.match(/rgba?\(([^)]+)\)/))) { [r, g, b, a = 1] = m[1].split(',').map(Number); }
  else return c;
  const f = v => Math.max(0, Math.min(255, Math.round(v * k)));
  return `rgba(${f(r)},${f(g)},${f(b)},${a})`;
};
const tex = (c, repeat) => {
  const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = T.RepeatWrapping; }
  return t;
};

// ======== 配色 ========
const PAL = {
  day: {   // 參考：粉白柔光、淡粉花瓣、金黃花蕊
    edge: '#fff7fa', mid: '#fcc9d8', base: '#f4a2bb', center: '#ee86a4', stamen: '#f7b2c6', anther: '#f1b64e', twig: '#6a4650', longStamen: false,
    petals: ['#ffeef3', '#fcd6e1', '#f8c2d2', '#ffffff', '#f6b3c7'],
    ground: { base: '#efc3d0', petals: ['#fde7ee', '#f8cdd9', '#f3b5c7', '#fff6f8', '#efa9be'], shade: 'rgba(170,90,115,.18)' },
  },
  night: { // 參考：深藍星空、深紅與桃紅花朵、長花蕊
    edge: '#ff9cbc', mid: '#ff4a83', base: '#cf1352', center: '#8a0c3c', stamen: '#ff6f9c', anther: '#ffd27a', twig: '#2a0c1a', longStamen: true,
    petals: ['#ff4d84', '#e8336b', '#ff7aa2', '#c2185b', '#ff2e6e'],
    ground: { base: '#3a1022', petals: ['#ff5c8a', '#e0306a', '#ff8fb1', '#b8174f', '#ff3d78'], shade: 'rgba(10,0,8,.3)' },
  },
};

// ======== 貼圖（全部用 canvas 即時繪製，不需額外圖片） ========
function petalPath(g, L) {                                       // 櫻花花瓣：尖端有一個小缺口
  g.beginPath(); g.moveTo(0, 0);
  g.bezierCurveTo(-L * .58, -L * .22, -L * .62, -L * .88, -L * .14, -L);
  g.lineTo(0, -L * .86); g.lineTo(L * .14, -L);
  g.bezierCurveTo(L * .62, -L * .88, L * .58, -L * .22, 0, 0); g.closePath();
}
function drawFlower(g, x, y, L, rot, tilt, shade, p) {
  g.save(); g.translate(x, y); g.rotate(rot); g.scale(1, tilt);
  p = shade === 1 ? p : Object.fromEntries(Object.entries(p).map(([key, v]) => [key, typeof v === 'string' ? shadeCol(v, shade) : v]));
  for (let k = 0; k < 5; k++) {
    g.save(); g.rotate(k * Math.PI * 2 / 5 + Math.sin(k * 3 + rot) * .08);
    const gr = g.createRadialGradient(0, 0, 0, 0, -L * .3, L * 1.05);
    gr.addColorStop(0, p.base); gr.addColorStop(.42, p.mid); gr.addColorStop(1, p.edge);
    petalPath(g, L); g.fillStyle = gr; g.fill();
    g.strokeStyle = 'rgba(255,255,255,.22)'; g.lineWidth = L * .02;
    for (const a of [-.25, 0, .25]) { g.beginPath(); g.moveTo(0, -L * .12); g.quadraticCurveTo(a * L * .3, -L * .5, a * L * .5, -L * .85); g.stroke(); }
    g.restore();
  }
  const cg = g.createRadialGradient(0, 0, 0, 0, 0, L * .3); cg.addColorStop(0, p.center); cg.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = cg; g.beginPath(); g.arc(0, 0, L * .3, 0, 6.29); g.fill();
  const n = p.longStamen ? 9 : 16;
  for (let k = 0; k < n; k++) {
    const a = k / n * 6.28 + rot, r = L * (p.longStamen ? rnd(.75, 1.15) : rnd(.32, .48));
    const ex = Math.cos(a) * r, ey = Math.sin(a) * r;
    g.strokeStyle = p.stamen; g.lineWidth = L * .025; g.beginPath(); g.moveTo(0, 0);
    if (p.longStamen) g.quadraticCurveTo(Math.cos(a + .5) * r * .6, Math.sin(a + .5) * r * .6, ex, ey); else g.lineTo(ex, ey);
    g.stroke(); g.fillStyle = p.anther; g.beginPath(); g.arc(ex, ey, L * .045, 0, 6.29); g.fill();
  }
  g.restore();
}
function blossomAtlas(p) {                                       // 2×2 張「一簇櫻花」貼圖
  const S = 1024, c = mk(S, S), g = c.getContext('2d');
  for (let t = 0; t < 4; t++) {
    g.save(); g.translate((t % 2) * 512 + 256, Math.floor(t / 2) * 512 + 256);
    g.strokeStyle = p.twig; g.lineCap = 'round';
    for (let k = 0; k < 2; k++) { const a = rnd(0, 6.28); g.lineWidth = rnd(5, 9); g.beginPath(); g.moveTo(Math.cos(a) * 250, Math.sin(a) * 250); g.quadraticCurveTo(rnd(-60, 60), rnd(-60, 60), Math.cos(a + 2.6) * 60, Math.sin(a + 2.6) * 60); g.stroke(); }
    const fl = [];
    for (let i = 0; i < 12; i++) { const a = rnd(0, 6.28), r = Math.sqrt(R()) * 165; fl.push({ x: Math.cos(a) * r, y: Math.sin(a) * r, L: rnd(42, 70), z: R() }); }
    fl.sort((a, b) => a.z - b.z).forEach(f => drawFlower(g, f.x, f.y, f.L, rnd(0, 6.28), rnd(.62, 1), .68 + f.z * .36, p));
    for (let i = 0; i < 4; i++) {                                // 花苞
      const a = rnd(0, 6.28), r = rnd(150, 200), x = Math.cos(a) * r, y = Math.sin(a) * r;
      g.fillStyle = p.base; g.beginPath(); g.ellipse(x, y, 11, 17, a + 1.57, 0, 6.29); g.fill();
      g.fillStyle = p.mid; g.beginPath(); g.ellipse(x - 3, y - 3, 6, 10, a + 1.57, 0, 6.29); g.fill();
    }
    g.restore();
  }
  return tex(c);
}
function petalTexture() {                                        // 單片花瓣（白色，由個別顏色上色）
  const c = mk(128, 128), g = c.getContext('2d');
  g.translate(64, 116);
  const gr = g.createLinearGradient(0, 0, 0, -110); gr.addColorStop(0, '#d9d9d9'); gr.addColorStop(.5, '#f6f6f6'); gr.addColorStop(1, '#ffffff');
  petalPath(g, 110); g.fillStyle = gr; g.fill();
  g.strokeStyle = 'rgba(200,200,200,.6)'; g.lineWidth = 2; g.beginPath(); g.moveTo(0, -6); g.lineTo(0, -80); g.stroke();
  return tex(c);
}
function radialTexture(stops, S = 128) {
  const c = mk(S, S), g = c.getContext('2d'), gr = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  stops.forEach(([o, col]) => gr.addColorStop(o, col)); g.fillStyle = gr; g.fillRect(0, 0, S, S);
  return tex(c);
}
function paperTexture() {                                        // 燈籠紙窗：米色和紙＋櫻花剪影＋朱紅格框
  const c = mk(256, 320), g = c.getContext('2d');
  let gr = g.createRadialGradient(128, 160, 10, 128, 160, 200); gr.addColorStop(0, '#fffaf0'); gr.addColorStop(1, '#f3d9c4');
  g.fillStyle = gr; g.fillRect(0, 0, 256, 320);
  for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(200,160,130,${rnd(.03, .08)})`; g.fillRect(rnd(0, 256), rnd(0, 320), rnd(1, 3), rnd(4, 14)); }
  g.strokeStyle = 'rgba(120,40,40,.55)'; g.lineWidth = 4; g.lineCap = 'round';
  g.beginPath(); g.moveTo(10, 300); g.bezierCurveTo(80, 230, 120, 200, 240, 60); g.moveTo(120, 200); g.quadraticCurveTo(70, 150, 40, 70); g.stroke();
  const p = { base: 'rgba(214,70,100,.75)', mid: 'rgba(236,120,150,.7)', edge: 'rgba(250,180,200,.65)', center: '#a02040', stamen: '#c04060', anther: '#d8a040', longStamen: false };
  [[60, 90, 22], [150, 140, 26], [200, 80, 18], [90, 230, 24], [190, 240, 20], [40, 170, 16], [130, 50, 15]].forEach(([x, y, L]) => drawFlower(g, x, y, L, rnd(0, 6), 1, 1, p));
  g.strokeStyle = '#8e1d18'; g.lineWidth = 14; g.strokeRect(7, 7, 242, 306);
  g.lineWidth = 5; g.beginPath(); g.moveTo(128, 10); g.lineTo(128, 310); g.moveTo(10, 110); g.lineTo(246, 110); g.moveTo(10, 215); g.lineTo(246, 215); g.stroke();
  return tex(c);
}
function groundTexture(gp) {                                     // 地面：鋪滿落花
  const S = 1024, c = mk(S, S), g = c.getContext('2d');
  g.fillStyle = gp.base; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 1400; i++) { g.fillStyle = gp.shade; g.beginPath(); g.arc(rnd(0, S), rnd(0, S), rnd(4, 18), 0, 6.29); g.fill(); }
  for (let i = 0; i < 16000; i++) {
    const x = rnd(0, S), y = rnd(0, S), r = rnd(3, 7);
    for (const [dx, dy] of [[0, 0], [S, 0], [-S, 0], [0, S], [0, -S]]) {   // 四邊無縫
      if (x + dx < -10 || x + dx > S + 10 || y + dy < -10 || y + dy > S + 10) continue;
      g.fillStyle = gp.petals[i % gp.petals.length]; g.globalAlpha = rnd(.7, 1);
      g.beginPath(); g.ellipse(x + dx, y + dy, r, r * rnd(.5, .75), rnd(0, 3.14), 0, 6.29); g.fill();
    }
  }
  g.globalAlpha = 1;
  return tex(c, true);
}
function stoneTexture() {
  const c = mk(256, 256), g = c.getContext('2d');
  g.fillStyle = '#d4d0ce'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 3000; i++) { const v = rnd(150, 255) | 0; g.fillStyle = `rgba(${v},${v - 6},${v - 8},.25)`; g.fillRect(rnd(0, 256), rnd(0, 256), rnd(1, 4), rnd(1, 4)); }
  for (let i = 0; i < 6; i++) { g.strokeStyle = 'rgba(90,80,80,.15)'; g.lineWidth = 1; g.beginPath(); g.moveTo(rnd(0, 256), rnd(0, 256)); g.lineTo(rnd(0, 256), rnd(0, 256)); g.stroke(); }
  return tex(c, true);
}
function barkTexture() {                                         // 櫻花樹皮：深色＋橫向皮目
  const c = mk(256, 256), g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#3b2a2e'); gr.addColorStop(.5, '#5b4448'); gr.addColorStop(1, '#3b2a2e');
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${R() < .5 ? '20,10,12' : '140,115,115'},${rnd(.1, .3)})`; g.fillRect(rnd(0, 256), rnd(0, 256), rnd(1, 3), rnd(2, 10)); }
  for (let i = 0; i < 70; i++) { g.fillStyle = `rgba(185,160,155,${rnd(.25, .5)})`; g.fillRect(rnd(0, 256), rnd(0, 256), rnd(2, 4), rnd(14, 40)); }
  return tex(c, true);
}

const TX = {
  blossom: { day: blossomAtlas(PAL.day), night: null },
  ground: { day: groundTexture(PAL.day.ground), night: null },
  petal: petalTexture(), paper: paperTexture(), stone: stoneTexture(), bark: barkTexture(),
  glow: radialTexture([[0, 'rgba(255,255,255,1)'], [.18, 'rgba(255,255,255,.55)'], [.5, 'rgba(255,255,255,.12)'], [1, 'rgba(255,255,255,0)']]),
  soft: radialTexture([[0, 'rgba(255,255,255,1)'], [.55, 'rgba(255,255,255,.55)'], [1, 'rgba(255,255,255,0)']]),
};
// 夜晚貼圖等第一個畫面出來後再畫（避免首次載入卡住）
const ensureNight = () => { if (!TX.blossom.night) { TX.blossom.night = blossomAtlas(PAL.night); TX.ground.night = groundTexture(PAL.night.ground); } };

// ======== 場景與相機 ========
const scene = new T.Scene();
const fog = new T.FogExp2(new Color('#f7d4df'), .03); scene.fog = fog;
const camera = new T.PerspectiveCamera(50, 2, .1, 420); scene.add(camera);
const camBase = new Vector3(0, 1.55, 3.4), camLook = new Vector3(-1.5, 2.2, -20);

// 參道中心線：幾乎筆直，遠處微微往右
const BEND = .0012;
const cxz = z => z < 0 ? BEND * z * z : 0;
const slope = z => z < 0 ? 2 * BEND * z : 0;
const side = (z, off, y = 0) => { const ry = Math.atan(-slope(z)); return new Vector3(cxz(z) + off * Math.cos(ry), y, z + off * Math.sin(ry)); };
const yaw = z => Math.atan(slope(z));                          // 物件的 z 軸對齊參道切線

const dummy = new T.Object3D();
function instanced(geo, mat, list) {
  const m = new T.InstancedMesh(geo, mat, list.length);
  list.forEach((b, i) => {
    dummy.position.copy(b.p); dummy.rotation.set(b.rx || 0, b.ry || 0, b.rz || 0); dummy.scale.set(b.sx || 1, b.sy || 1, b.sz || 1);
    dummy.updateMatrix(); m.setMatrixAt(i, dummy.matrix); if (b.c) m.setColorAt(i, b.c);
  });
  scene.add(m); return m;
}

// ---- 材質 ----
const M = {
  red: new T.MeshStandardMaterial({ color: '#c42a1f', roughness: .42, metalness: .05 }),
  redDark: new T.MeshStandardMaterial({ color: '#7d1a14', roughness: .5 }),
  stone: new T.MeshStandardMaterial({ color: '#bdb5b0', map: TX.stone, roughness: .85 }),
  bronze: new T.MeshStandardMaterial({ color: '#3a2b22', roughness: .4, metalness: .7 }),
  roof: new T.MeshStandardMaterial({ color: '#2a2024', roughness: .7 }),
  tile: new T.MeshStandardMaterial({ map: TX.stone, roughness: .3, metalness: .05 }),
  ground: new T.MeshStandardMaterial({ map: TX.ground.day, roughness: .95 }),
  bark: new T.MeshStandardMaterial({ color: '#8a7276', map: TX.bark, roughness: .9 }),
  paper: new T.MeshStandardMaterial({ map: TX.paper, emissiveMap: TX.paper, emissive: new Color('#ffd9a6'), emissiveIntensity: .2, roughness: .8 }),
};

// ---- 地面（鋪滿落花）----
{
  const pos = [], uv = [], idx = [];
  let i = 0;
  for (let z = 7; z >= -76; z -= 1, i++) {
    const a = side(z, -36), b = side(z, 36);
    pos.push(a.x, 0, a.z, b.x, 0, b.z); uv.push(a.x / 3.2, a.z / 3.2, b.x / 3.2, b.z / 3.2);
    if (i) { const k = i * 2; idx.push(k - 2, k - 1, k, k - 1, k + 1, k); }   // 逆時針＝法線朝上
  }
  const g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  scene.add(new T.Mesh(g, M.ground));
}

// ---- 參道石板（交錯鋪設、每塊顏色略有差異）----
{
  const list = [], hw = 1.25; let row = 0;
  for (let z = 6.5; z > -66; z -= .62, row++) {
    const n = row % 2 ? 2 : 3, ry = yaw(z);
    for (let k = 0; k < n; k++) {
      const u = -hw + (2 * hw / n) * (k + .5);
      const p = side(z, u, .03);
      const v = rnd(.62, .86);
      list.push({ p, ry, sx: 2 * hw / n - .035, sy: .06, sz: .6, c: new Color(v * 1.04, v * .95, v * .95) });
    }
  }
  instanced(new T.BoxGeometry(1, 1, 1), M.tile, list);
  const curb = [];                                              // 參道兩側緣石
  for (let z = 6.5; z > -66; z -= .9) for (const s of [-1, 1]) curb.push({ p: side(z, s * (hw + .1), .04), ry: yaw(z), sx: .16, sy: .08, sz: .9, c: new Color(.55, .5, .5) });
  instanced(new T.BoxGeometry(1, 1, 1), M.stone, curb);
}

// ---- 朱紅欄杆（左右兩側，石柱＋擬寶珠＋上中下橫木＋短柱）----
const RAIL = 2.05;
{
  const posts = [], bars = [], studs = [], pillars = [], caps = [];
  for (const s of [-1, 1]) {
    let prev = null, i = 0;
    for (let z = 5; z > -60; z -= 1.5, i++) {
      const p = side(z, s * RAIL), ry = yaw(z);
      if (i % 3 === 0) {
        pillars.push({ p: p.clone().setY(.48), ry, sx: .2, sy: .96, sz: .2 });
        if (z < -1) caps.push({ p: p.clone().setY(1.02), sx: .085, sy: .12, sz: .085 });   // 鏡頭前的柱頭省略，避免前景出現大黑球
      } else posts.push({ p: p.clone().setY(.47), ry, sx: .09, sy: .94, sz: .09 });
      if (prev) {
        const mid = p.clone().add(prev).multiplyScalar(.5), len = p.distanceTo(prev), ryb = Math.atan2(p.x - prev.x, p.z - prev.z);
        for (const [y, h] of [[.9, .07], [.55, .05], [.16, .05]]) bars.push({ p: mid.clone().setY(y), ry: ryb, sx: .07, sy: h, sz: len });
        for (const u of [.33, .66]) { const q = prev.clone().lerp(p, u); studs.push({ p: q.setY(.36), ry: ryb, sx: .045, sy: .4, sz: .045 }); }
      }
      prev = p;
    }
  }
  const box = new T.BoxGeometry(1, 1, 1);
  instanced(box, M.red, posts); instanced(box, M.red, bars); instanced(box, M.redDark, studs); instanced(box, M.stone, pillars);
  instanced(new T.SphereGeometry(1, 12, 10), M.bronze, caps);
}

// ---- 燈籠柱 ----
const lanterns = [];
{
  const geo = {
    base: new T.BoxGeometry(.36, .26, .36), pole: new T.CylinderGeometry(.055, .065, 2.2, 10), plate: new T.BoxGeometry(.52, .05, .52),
    body: new T.BoxGeometry(.4, .48, .4), post: new T.BoxGeometry(.04, .52, .04), eave: new T.BoxGeometry(.66, .045, .66),
    roof: new T.ConeGeometry(.46, .26, 4, 1), knob: new T.SphereGeometry(.055, 10, 8),
  };
  const tmpl = new T.Group();
  const add = (g, m, x, y, z, ry = 0) => { const o = new T.Mesh(g, m); o.position.set(x, y, z); o.rotation.y = ry; tmpl.add(o); return o; };
  add(geo.base, M.stone, 0, .13, 0); add(geo.pole, M.red, 0, 1.36, 0); add(geo.plate, M.roof, 0, 2.46, 0);
  add(geo.body, M.paper, 0, 2.72, 0);
  for (const [x, z] of [[-.2, -.2], [.2, -.2], [-.2, .2], [.2, .2]]) add(geo.post, M.red, x, 2.72, z);
  add(geo.eave, M.roof, 0, 2.98, 0); add(geo.roof, M.roof, 0, 3.13, 0, Math.PI / 4); add(geo.knob, M.bronze, 0, 3.3, 0);
  const L = [[-1, [-.6, -9.5, -18.5, -27.5, -36.5, -45.5, -55]], [1, [-5, -14, -23, -32, -41, -50, -59]]];
  L.forEach(([s, zs]) => zs.forEach(z => {
    const p = side(z, s * (RAIL + .02)), g = tmpl.clone(); g.position.copy(p); g.rotation.y = yaw(z); g.scale.setScalar(1.15); scene.add(g);
    lanterns.push({ p, c: p.clone().setY(2.72 * 1.15), z, s });
  }));
}
// 夜間燈光：近處燈籠用真正的點光源，其餘只用光暈
const lights = lanterns.filter(l => l.z > -26).map(l => {
  const pl = new T.PointLight('#ff9550', 0, 11, 1.4); pl.position.copy(l.c).add(new Vector3(-l.s * .3, -.1, 0)); scene.add(pl); return pl;
});
const glowMat = new T.SpriteMaterial({ map: TX.glow, color: '#ffc27e', blending: T.AdditiveBlending, depthWrite: false, transparent: true, fog: false, opacity: 0 });
const haloMat = glowMat.clone(); haloMat.color = new Color('#ff6a40'); haloMat.depthTest = false;   // 大範圍柔光不被枝葉切斷
const glows = [];
lanterns.forEach(l => {
  const a = new T.Sprite(glowMat); a.position.copy(l.c); a.scale.setScalar(2.6); a.renderOrder = 6; scene.add(a);
  const b = new T.Sprite(haloMat); b.position.copy(l.c); b.scale.setScalar(6.5); b.renderOrder = 6; scene.add(b);
  glows.push(a, b);
});
// 地面光池（夜間）
const poolMat = new T.MeshBasicMaterial({ map: TX.soft, color: '#ff5e3a', blending: T.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0, fog: false });
lanterns.forEach(l => {
  const m = new T.Mesh(new T.PlaneGeometry(3.6, 3.6), poolMat); m.rotation.x = -Math.PI / 2; m.position.copy(l.p).add(new Vector3(-l.s * .8, .075, 0)); m.renderOrder = 6; scene.add(m);
});
// ======== 櫻花樹（樹幹＋分枝的錐形管）========
function taperTube(curve, r0, r1, seg = 14, rad = 8) {
  const g = new T.TubeGeometry(curve, seg, 1, rad, false), p = g.attributes.position, uv = g.attributes.uv;
  const c = new Vector3(), v = new Vector3(), len = curve.getLength();
  for (let i = 0; i <= seg; i++) {
    const tt = i / seg; curve.getPointAt(tt, c);
    const r = (r0 + (r1 - r0) * tt) * (1 + .1 * Math.sin(tt * 19 + r0 * 40));
    for (let j = 0; j <= rad; j++) { const k = i * (rad + 1) + j; v.fromBufferAttribute(p, k).sub(c).multiplyScalar(r).add(c); p.setXYZ(k, v.x, v.y, v.z); uv.setX(k, uv.getX(k) * len * .7); }
  }
  g.computeVertexNormals(); return g;
}
function merge(geos) {
  let nv = 0, ni = 0; geos.forEach(g => { nv += g.attributes.position.count; ni += g.index.count; });
  const pos = new Float32Array(nv * 3), nor = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), idx = new Uint32Array(ni);
  let vo = 0, io = 0;
  geos.forEach(g => {
    pos.set(g.attributes.position.array, vo * 3); nor.set(g.attributes.normal.array, vo * 3); uv.set(g.attributes.uv.array, vo * 2);
    const gi = g.index.array; for (let k = 0; k < gi.length; k++) idx[io + k] = gi[k] + vo;
    vo += g.attributes.position.count; io += gi.length; g.dispose();
  });
  const out = new T.BufferGeometry();
  out.setAttribute('position', new T.BufferAttribute(pos, 3)); out.setAttribute('normal', new T.BufferAttribute(nor, 3)); out.setAttribute('uv', new T.BufferAttribute(uv, 2));
  out.setIndex(new T.BufferAttribute(idx, 1)); return out;
}
const tubes = [], anchors = [];
const rv = () => new Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1));
function grow(p, dir, len, rad, depth, bias) {
  const droop = new Vector3(0, -len * .06 * (4 - depth), 0), bend = rv().multiplyScalar(len * .16);
  const end = p.clone().addScaledVector(dir, len).add(droop);
  const curve = new T.CatmullRomCurve3([p, p.clone().addScaledVector(dir, len * .35).add(bend), p.clone().addScaledVector(dir, len * .7).add(bend.multiplyScalar(-.6)).addScaledVector(droop, .5), end]);
  tubes.push(taperTube(curve, rad, rad * .66, depth > 2 ? 12 : 6, depth > 2 ? 9 : 5));
  if (depth <= 1) anchors.push({ p: curve.getPointAt(.55), r: rnd(.55, .85), tree: true });
  if (depth === 0) { anchors.push({ p: end, r: rnd(.75, 1.15), tree: true }); return; }
  const kids = depth >= 3 ? 2 : (R() < .55 ? 2 : 3);
  for (let k = 0; k < kids; k++) {
    const nd = dir.clone().add(rv().multiplyScalar(.85)).addScaledVector(bias, .45).normalize();
    grow(end, nd, len * rnd(.62, .8), rad * .62, depth - 1, bias);
  }
}
{
  // 兩側各一排櫻花樹（欄杆外），樹幹略往外、主枝往參道上方拱起
  for (const sd of [-1, 1]) {
    for (let z = sd < 0 ? -2.6 : -4.4, k = 0; z > -62; z -= rnd(4, 5.2), k++) {
      const off = sd * rnd(3.4, 4.3), root = side(z, off), inward = new Vector3(-sd, 0, 0);
      const dir = new Vector3(0, 1, 0).addScaledVector(inward, rnd(.25, .45)).add(new Vector3(0, 0, rnd(-.15, .15))).normalize();
      grow(root, dir, rnd(2.4, 3), rnd(.24, .32), 4, inward.clone().multiplyScalar(.55).add(new Vector3(0, .75, 0)));
      // 越過參道的長枝（讓兩側樹冠在中間交會）
      if (k % 2 === 0) grow(side(z, off * .95, rnd(3, 3.6)), new Vector3(-sd, rnd(.55, .75), rnd(-.1, .1)).normalize(), rnd(2.4, 3), .14, 2, new Vector3(-sd * .6, .6, 0));
    }
  }
  // 外側第二排樹（只做樹幹與主枝，讓兩側看起來是整片櫻花林）
  for (const sd of [-1, 1]) for (let z = -6; z > -58; z -= rnd(5, 7)) {
    const off = sd * rnd(6.5, 8.5), root = side(z, off);
    grow(root, new Vector3(-sd * .2, 1, rnd(-.1, .1)).normalize(), rnd(2.4, 3), rnd(.22, .3), 3, new Vector3(-sd * .3, .7, 0));
  }
  scene.add(new T.Mesh(merge(tubes), M.bark));
}
// 兩側外圍的花牆
for (let z = -3; z > -64; z -= 1.4) for (const sd of [-1, 1]) {
  anchors.push({ p: side(z + rnd(-.6, .6), sd * rnd(5.2, 7.5), rnd(2, 4.6)), r: rnd(1.1, 1.6), outer: true });
  if (R() < .6) anchors.push({ p: side(z + rnd(-.6, .6), sd * rnd(7.5, 10), rnd(1.4, 4.2)), r: rnd(1.3, 1.9), outer: true });
}
// 隧道的花：頂部拱頂（剖面為拋物線）＋兩側往下垂的花牆；遠處由霧氣收尾
for (let z = .5; z > -60; z -= 1.15) {
  for (let x = -4.6; x <= 4.6; x += 1.45) {
    if (R() < .14) continue;
    const xx = x + rnd(-.5, .5), y = 5.2 - .07 * xx * xx + rnd(-.4, .4);
    anchors.push({ p: side(z + rnd(-.45, .45), xx, y), r: rnd(.85, 1.25) });
  }
  for (const sd of [-1, 1]) {
    anchors.push({ p: side(z + rnd(-.5, .5), sd * rnd(3.3, 4.6), rnd(3.1, 4.2)), r: rnd(.8, 1.15) });
    if (R() < .55) anchors.push({ p: side(z + rnd(-.5, .5), sd * rnd(3.8, 5.2), rnd(2.2, 3)), r: rnd(.6, .9) });   // 垂到較低的花枝
  }
}
for (let z = -60; z > -76; z -= 2) for (let x = -5; x <= 5; x += 2.5) anchors.push({ p: side(z, x, rnd(1.6, 5.5)), r: rnd(1.4, 2) });

const STATS = {};
// ======== 櫻花（每片是一簇花的 billboard，GPU 端面向鏡頭並隨風擺動）========
const FOG_GLSL = `float f = 1. - exp(-uDensity * uDensity * vDepth * vDepth); col = mix(col, uFog, f);`;
const blossomU = {
  uTex: { value: TX.blossom.day }, uMode: { value: 0 }, uTime: { value: 0 }, uWind: { value: 0 },
  uTint: { value: new Color('#b9a8ff') }, uWarm: { value: new Color('#ffb08a') }, uFog: { value: fog.color }, uDensity: { value: fog.density },
};
const VS_BILL = `
  attribute vec3 iPos; attribute vec4 iData; attribute vec3 iLight;
  uniform float uTime, uWind;
  varying vec2 vUv; varying vec3 vL; varying float vDepth; varying float vVar;
  void main(){
    vec3 p = iPos;
    float sw = sin(uTime * 1.1 + p.x * .7 + p.z * .5);
    p.x += (sw * .035 + uWind * (.22 + .12 * sin(uTime * 7. + p.z))) * clamp(p.y * .25, .2, 1.6);
    p.y += cos(uTime * .9 + p.z) * .015;
    vec4 mv = modelViewMatrix * vec4(p, 1.);
    float r = iData.y + sw * .05 + uWind * .25 * sin(uTime * 5. + p.x);
    mv.xy += mat2(cos(r), sin(r), -sin(r), cos(r)) * position.xy * iData.x;
    gl_Position = projectionMatrix * mv;
    vUv = (uv + vec2(mod(iData.z, 2.), floor(iData.z / 2.))) * .5;
    vL = iLight; vDepth = -mv.z; vVar = iData.w;
  }`;
const blossomMat = new T.ShaderMaterial({
  uniforms: blossomU, vertexShader: VS_BILL,
  fragmentShader: `
    uniform sampler2D uTex; uniform float uMode, uDensity; uniform vec3 uTint, uWarm, uFog;
    varying vec2 vUv; varying vec3 vL; varying float vDepth; varying float vVar;
    void main(){
      vec4 t = texture2D(uTex, vUv);
      if (t.a < .5) discard;
      vec3 c = t.rgb * vVar;
      vec3 col = mix(c * vL.x, c * uTint * vL.y + c * uWarm * vL.z, uMode);
      ${FOG_GLSL}
      gl_FragColor = vec4(col, 1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
});
// 花團的柔光體積（填滿花朵間的縫隙，讓花冠看起來蓬鬆）
const volU = { uTex: { value: TX.soft }, uMode: { value: 0 }, uTime: blossomU.uTime, uWind: blossomU.uWind, uDay: { value: new Color('#f6bccd') }, uNight: { value: new Color('#b0124c') }, uWarm: blossomU.uWarm, uFog: { value: fog.color }, uDensity: blossomU.uDensity, uTint: blossomU.uTint };
const volMat = new T.ShaderMaterial({
  uniforms: volU, vertexShader: VS_BILL, transparent: true, depthWrite: false,
  fragmentShader: `
    uniform sampler2D uTex; uniform float uMode, uDensity; uniform vec3 uDay, uNight, uWarm, uFog, uTint;
    varying vec2 vUv; varying vec3 vL; varying float vDepth; varying float vVar;
    void main(){
      float a = texture2D(uTex, vUv * 2. - floor(vUv * 2.)).a;
      vec3 col = mix(uDay * vL.x, uNight * uTint * vL.y + uNight * uWarm * vL.z * 1.4, uMode) * vVar;
      ${FOG_GLSL}
      gl_FragColor = vec4(col, a * mix(.5, .32, uMode));
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
});
function billboardMesh(items, mat) {
  const plane = new T.PlaneGeometry(1, 1), g = new T.InstancedBufferGeometry();
  g.index = plane.index; g.setAttribute('position', plane.attributes.position); g.setAttribute('uv', plane.attributes.uv);
  const n = items.length, P = new Float32Array(n * 3), D = new Float32Array(n * 4), Lt = new Float32Array(n * 3);
  items.forEach((it, i) => { P.set([it.p.x, it.p.y, it.p.z], i * 3); D.set(it.d, i * 4); Lt.set(it.l, i * 3); });
  g.setAttribute('iPos', new T.InstancedBufferAttribute(P, 3)); g.setAttribute('iData', new T.InstancedBufferAttribute(D, 4)); g.setAttribute('iLight', new T.InstancedBufferAttribute(Lt, 3));
  g.instanceCount = n;
  const m = new T.Mesh(g, mat); m.frustumCulled = false; scene.add(m); return m;
}
// 預先計算每朵花的光照：白天由上往下漸暗；夜晚依與燈籠的距離被照亮
const lightAt = (p, center, r) => {
  const up = (p.y - center.y) / r;
  const day = Math.min(1.15, Math.max(.62, .86 + up * .12 + (p.y - 4) * .03 + rnd(-.08, .08)));
  let lan = 0; lanterns.forEach(l => { lan += 1.5 / (1 + l.c.distanceToSquared(p) * .32); });
  return [day, .3 + up * .05 + rnd(-.05, .05), Math.min(1.8, lan)];
};
{
  const bl = [], vol = [], eye = new Vector3(0, 1.55, 3.4);
  // 太靠近鏡頭的花簇會變成滿版的大花，略過
  anchors.forEach(a => {                                         // 參道正上方保留淨空，讓視線看得到隧道盡頭
    const dx = Math.abs(a.p.x - cxz(a.p.z));
    if (dx < 2.8) a.p.y = Math.max(a.p.y, (a.tree ? 3.3 : 4.1) + a.r * .6 - dx * .3);
  });
  anchors.filter(a => a.p.distanceTo(eye) > 4.6 + a.r).forEach(a => {
    const n = Math.round(a.r * a.r * (a.outer ? 6 : 14) * Q) + 3;   // 外圍花牆用較少、較大的花簇
    for (let i = 0; i < n; i++) {
      const p = a.p.clone().add(rv().normalize().multiplyScalar(Math.cbrt(R()) * a.r).multiply(new Vector3(1.15, .8, 1.15)));
      bl.push({ p, d: [rnd(.48, .74) * (a.outer ? 1.9 : a.r > 1.3 ? 1.5 : 1), rnd(0, 6.28), Math.floor(R() * 4), rnd(.85, 1.08)], l: lightAt(p, a.p, a.r) });
    }
    vol.push({ p: a.p.clone().add(new Vector3(0, -.1, 0)), d: [a.r * 2.6, 0, 0, 1], l: lightAt(a.p, a.p, a.r) });
  });
  billboardMesh(vol, volMat);
  billboardMesh(bl, blossomMat);
  STATS.blossoms = bl.length; STATS.clusters = vol.length;
}

// ======== 天空（白天柔光／夜晚星空與星雲）========
const skyU = { uMode: { value: 0 }, uTime: { value: 0 } };
const sky = new T.Mesh(new T.SphereGeometry(320, 48, 24), new T.ShaderMaterial({
  uniforms: skyU, side: T.BackSide, depthWrite: false, fog: false,
  vertexShader: `varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  fragmentShader: `
    uniform float uMode, uTime; varying vec3 vDir;
    float hash(vec3 p){ p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
    float noise(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
      return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                 mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z); }
    float fbm(vec3 p){ float a = .5, s = 0.; for (int i = 0; i < 5; i++){ s += a * noise(p); p *= 2.03; a *= .5; } return s; }
    void main(){
      vec3 d = normalize(vDir); float h = d.y;
      vec3 sunDir = normalize(vec3(.04, .1, -1.)); float sd = max(dot(d, sunDir), 0.);
      vec3 day = mix(vec3(.97, .8, .86), vec3(.99, .9, .93), smoothstep(-.05, .5, h));
      day += vec3(1., .95, .96) * pow(sd, 14.) * .45 + vec3(1.) * pow(sd, 90.) * .6;
      vec3 night = mix(vec3(.09, .1, .27), vec3(.012, .022, .075), smoothstep(-.05, .6, h));
      vec3 nc = normalize(vec3(.12, .32, -1.)); float nd = dot(d, nc), band = smoothstep(.15, 1., nd);
      float n1 = fbm(d * 3. + vec3(0., 0., uTime * .004)), n2 = fbm(d * 7. + 3.);
      float neb = band * smoothstep(.35, .85, n1 * .8 + n2 * .4);
      night += vec3(.9, .22, .55) * neb * 1.1 + vec3(.32, .25, .95) * smoothstep(.3, .9, n2) * band * .55;
      night += vec3(1., .72, .86) * pow(max(nd, 0.), 14.) * .55;
      night *= 1. - .45 * smoothstep(.55, .75, fbm(d * 5. + 7.)) * band;
      night += vec3(.15, .2, .55) * smoothstep(.45, .9, fbm(d * 2.2 + 11.)) * (1. - band) * .35;
      vec3 col = pow(mix(day, night, uMode), vec3(2.2));
      gl_FragColor = vec4(col, 1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
}));
sky.renderOrder = -10; scene.add(sky);
// 星星（夜晚）
const starU = { uOpacity: { value: 0 }, uTime: skyU.uTime, uPx: { value: 1 } };
{
  const n = 2600, P = new Float32Array(n * 3), S = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    const y = Math.pow(R(), .7) * .95 + .02, a = R() * 6.28, r = Math.sqrt(1 - y * y);
    P.set([Math.cos(a) * r * 260, y * 260, Math.sin(a) * r * 260], i * 3); S.set([R() < .05 ? rnd(2.2, 3.4) : rnd(.8, 1.8), rnd(0, 6.28)], i * 2);
  }
  const g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(P, 3)); g.setAttribute('aS', new T.BufferAttribute(S, 2));
  const pts = new T.Points(g, new T.ShaderMaterial({
    uniforms: starU, transparent: true, depthWrite: false, blending: T.AdditiveBlending,
    vertexShader: `attribute vec2 aS; uniform float uTime, uPx; varying float vA;
      void main(){ vA = .55 + .45 * sin(uTime * (1.2 + aS.y) + aS.y * 9.); gl_PointSize = aS.x * uPx; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
    fragmentShader: `uniform float uOpacity; varying float vA;
      void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, 0., d); gl_FragColor = vec4(vec3(.85, .9, 1.) * a * vA * uOpacity, 1.); }`,
  }));
  pts.frustumCulled = false; scene.add(pts);
}

// ======== 玻璃風鈴（從右上角前景花枝垂下）========
const chimes = [];
{
  const twig = new T.CatmullRomCurve3([new Vector3(3.9, 4.3, -1.2), new Vector3(3, 3.95, -1), new Vector3(2.1, 3.75, -1.1), new Vector3(1.3, 3.65, -.9)]);
  scene.add(new T.Mesh(taperTube(twig, .06, .025, 16, 6), M.bark));
  const glass = new T.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTint: { value: new Color('#ffc4d6') } },
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uTint; varying vec3 vN; varying vec3 vV;
      void main(){ float f = pow(1. - abs(dot(vN, vV)), 2.2); float spec = pow(max(dot(reflect(-normalize(vec3(-.4,.6,.7)), vN), vV), 0.), 40.);
        vec3 col = mix(uTint * .6, vec3(1.), f) + spec * 1.6; gl_FragColor = vec4(col, .1 + f * .7 + spec);
        #include <colorspace_fragment>
      }`,
  });
  const strip = new T.MeshStandardMaterial({ color: '#fbe6ee', roughness: .7, side: T.DoubleSide, emissive: '#ffd6e2', emissiveIntensity: .1 });
  const bead = new T.MeshStandardMaterial({ color: '#d0234f', roughness: .3 });
  [[.35, .8, .75], [.6, 1.15, .62], [.85, .7, .55]].forEach(([u, len, k], i) => {
    const top = twig.getPointAt(u), pivot = new T.Group(); pivot.position.copy(top); scene.add(pivot);
    const line = new T.Mesh(new T.CylinderGeometry(.004, .004, len, 4), new T.MeshBasicMaterial({ color: '#c9a3ad' })); line.position.y = -len / 2; pivot.add(line);
    const r = .085 * k / .62;
    const ball = new T.Mesh(new T.SphereGeometry(r, 24, 16), glass); ball.position.y = -len - r * .7; pivot.add(ball);
    const bd = new T.Mesh(new T.SphereGeometry(r * .14, 8, 6), bead); bd.position.y = -len - r * 1.75; pivot.add(bd);
    const sub = new T.Group(); sub.position.y = -len - r * 1.8; pivot.add(sub);
    const paper = new T.Mesh(new T.PlaneGeometry(r * .75, r * 3.6), strip); paper.position.y = -r * 2; sub.add(paper);
    chimes.push({ pivot, sub, ph: i * 1.9 });
  });
}

// ======== 地上的落花（貼在石板與草地上，會受燈光照亮）========
const groundPetals = (() => {
  const n = Math.round(2600 * Q), m = new T.InstancedMesh(new T.PlaneGeometry(1, 1), new T.MeshStandardMaterial({ map: TX.petal, alphaTest: .5, roughness: .7, side: T.DoubleSide }), n);
  const day = new Float32Array(n * 3), night = new Float32Array(n * 3), c = new Color();
  for (let i = 0; i < n; i++) {
    const z = 5 - Math.pow(R(), 1.6) * 40, off = rnd(-2.4, 2.4);
    const p = side(z, off, Math.abs(off) < 1.3 ? .065 : .01);
    dummy.position.copy(p); dummy.rotation.set(-Math.PI / 2 + rnd(-.3, .3), 0, rnd(0, 6.28)); dummy.scale.set(.05, .065, 1).multiplyScalar(rnd(.8, 1.3));
    dummy.updateMatrix(); m.setMatrixAt(i, dummy.matrix);
    c.set(pick(PAL.day.petals)); c.toArray(day, i * 3); c.set(pick(PAL.night.petals)); c.toArray(night, i * 3);
  }
  m.instanceColor = new T.InstancedBufferAttribute(day.slice(), 3); scene.add(m);
  return { m, day, night };
})();

// ======== 飄落的花瓣與花吹雪 ========
const MAXB = Math.round(2600 * Q), MAXF = Math.round(900 * Q);
const flyMat = new T.MeshBasicMaterial({ map: TX.petal, alphaTest: .4, side: T.DoubleSide });
const backFly = new T.InstancedMesh(new T.PlaneGeometry(1, 1), flyMat, MAXB);
const frontMat = flyMat.clone(); frontMat.transparent = true; frontMat.depthTest = false; frontMat.fog = false;
const frontFly = new T.InstancedMesh(new T.PlaneGeometry(1, 1), frontMat, MAXF);
[backFly, frontFly].forEach(m => { m.instanceColor = new T.InstancedBufferAttribute(new Float32Array(m.count * 3), 3); m.count = 0; m.frustumCulled = false; scene.add(m); });
frontFly.renderOrder = 11;
// ======== 轉場遮幕（照 sop.html）========
// 疊加順序與 sop.html 相同：3D 場景 → 2D 層（後層花瓣 → 花霧漸層 → 前層花瓣）→ 3D 立體花瓣風暴
// 2D 層畫在一張不放進頁面的 canvas，再當成全畫面貼圖疊上去；全部用同一個 WebGL renderer，不另外開第二個 WebGL context
const vcv = mk(2, 2);
const vg = vcv.getContext('2d');
const VPAL = {
  day: [['#fff8fa', '#f7b2c7'], ['#ffe3ec', '#ee8fad'], ['#ffffff', '#fbd0de']],
  night: [['#ff6b9b', '#b80d48'], ['#ff3877', '#800530'], ['#ff99bb', '#d91656']],
};
const VCOL = { day: ['255, 210, 226', '255, 236, 244'], night: ['195, 28, 88', '235, 75, 132'] };   // 花霧：邊緣色、中間色
const VPATH = new Path2D('M0 7 C-5.5 3.5 -6.5 -5.2 -2.4 -8.2 L0 -6.1 L2.4 -8.2 C6.5 -5.2 5.5 3.5 0 7 Z');
function veilSprite([c0, c1], soft) {
  const S = 64, c = mk(S, S), g = c.getContext('2d');
  g.translate(S / 2, S / 2); g.scale(2.8, 2.8);
  const gr = g.createLinearGradient(-3, 7, 3, -8); gr.addColorStop(0, c1); gr.addColorStop(.65, c0); gr.addColorStop(1, '#ffffff');
  g.fillStyle = gr;
  if (soft && 'filter' in g) {                                   // 柔焦花瓣：同 sop.html 的 blur(4px)；這張 64px 小圖用 CPU 繪製，不佔顯示記憶體
    g.filter = 'blur(4px)'; g.fill(VPATH);
  } else if (soft) {                                             // 不支援 canvas filter 的瀏覽器：疊幾層半透明花瓣模擬模糊
    for (const [k, a] of [[1.45, .12], [1.3, .16], [1.15, .22], [1, .5]]) { g.save(); g.scale(k, k); g.globalAlpha = a; g.fill(VPATH); g.restore(); }
  } else {
    g.fill(VPATH);
    g.strokeStyle = 'rgba(255,255,255,0.42)'; g.lineWidth = .35; g.beginPath(); g.moveTo(0, 5.5); g.quadraticCurveTo(.7, 0, 0, -5.5); g.stroke();
  }
  return c;
}
const VSPR = {};
for (const m of ['day', 'night']) VSPR[m] = { petal: VPAL[m].map(c => veilSprite(c, false)), petalB: VPAL[m].map(c => veilSprite(c, true)) };
let vW = 1, vH = 1, vDpr = 1, vU = 1, vDirty = false, vShow = false;
const vPetals = [], VMAX = Math.round(1400 * Q);
function veilResize(w, h, d) { vW = w; vH = h; vDpr = d; vU = h / 640; vcv.width = Math.round(w * d); vcv.height = Math.round(h * d); vDirty = true; }
function spawnVeilPetal() {
  if (vPetals.length >= VMAX) return;
  vPetals.push({ x: mr(-vW * .45, -20), y: mr(-vH * .25, vH * 1.15), z: mr(.8, 3.8), vx: mr(950, 1850) * (vW / 1280 * .65 + .35), vy: mr(-110, 160),
                 r: mr(0, 6.28), vr: mr(-7, 7), f: mr(0, 6.28), vf: mr(4, 8), i: Math.floor(Math.random() * 3) });
}
// 2D 層 → 全畫面貼圖
const vTex = new T.CanvasTexture(vcv); vTex.colorSpace = T.SRGBColorSpace; vTex.minFilter = T.LinearFilter; vTex.generateMipmaps = false;
const ovScene = new T.Scene(), ovCam = new T.OrthographicCamera(-1, 1, 1, -1, 0, 1);
ovScene.add(new T.Mesh(new T.PlaneGeometry(2, 2), new T.MeshBasicMaterial({ map: vTex, transparent: true, depthTest: false, depthWrite: false, toneMapped: false })));
// sop.html 的 3D 立體花瓣風暴：彎曲花瓣 InstancedMesh，只在颳風時出現（風勢^0.65 決定大小），畫在 2D 花霧之上
const stScene = new T.Scene(), stCam = new T.PerspectiveCamera(50, 2, 1, 2000); stCam.position.z = 500;
const ST_COUNT = Math.round(555 * Q), stData = [];
const stMesh = (() => {
  const shape = new T.Shape();
  shape.moveTo(0, -9); shape.bezierCurveTo(-7.5, -4, -8.5, 6, -2.6, 10); shape.lineTo(0, 7.2); shape.lineTo(2.6, 10); shape.bezierCurveTo(8.5, 6, 7.5, -4, 0, -9);
  const geom = new T.ShapeGeometry(shape, 6), pos = geom.attributes.position;
  for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), y = pos.getY(i); pos.setZ(i, x * x * .045 + Math.sin(y * .25) * 1.4); }   // 碗狀微彎
  geom.computeVertexNormals();
  const m = new T.InstancedMesh(geom, new T.MeshBasicMaterial({ color: 0xffffff, side: T.DoubleSide, transparent: true, opacity: .95, toneMapped: false }), ST_COUNT);
  m.instanceMatrix.setUsage(T.DynamicDrawUsage); m.frustumCulled = false;
  for (let i = 0; i < ST_COUNT; i++) stData.push({ x: mr(-700, 700), y: mr(-380, 380), z: mr(40, 410), vx: mr(35, 95), vy: mr(-45, -18),
    rx: mr(0, 6.28), ry: mr(0, 6.28), rz: mr(0, 6.28), vrx: mr(-3.5, 3.5), vry: mr(-4.5, 4.5), vrz: mr(-2.8, 2.8), scale: mr(1.2, 3.6), phase: mr(0, 6.28) });
  stScene.add(m); return m;
})();
const ST_PAL = { day: ['#fff6f9', '#ffd1df', '#ffabc5', '#ffe6ee', '#f58eb0'], night: ['#ff2a6d', '#ff6b9b', '#d91454', '#ff8fb8', '#b50b42'] };
function stColors(m) { const c = new Color(); for (let i = 0; i < ST_COUNT; i++) stMesh.setColorAt(i, c.set(ST_PAL[m][i % 5])); stMesh.instanceColor.needsUpdate = true; }
stColors('day');
let stShow = false;
function stepStorm(dt, wind) {
  const k = Math.pow(wind, .65); stShow = k >= .01;
  if (!stShow) return;                                           // 沒有風時不更新也不繪製（位置保留到下一次颳風）
  const boost = 1 + wind * 18;
  for (let i = 0; i < ST_COUNT; i++) {
    const d = stData[i];
    d.x += (d.vx * boost + Math.sin(t * 2.5 + d.phase) * 28) * dt;
    d.y += (d.vy * (1 - wind * .4) + Math.cos(t * 3.2 + d.phase) * 35 * wind) * dt;
    d.rx += d.vrx * (1 + wind * 3.5) * dt; d.ry += d.vry * (1 + wind * 3.5) * dt; d.rz += d.vrz * (1 + wind * 2.5) * dt;
    if (d.x > 780) { d.x = mr(-820, -650); d.y = mr(-420, 420); }
    if (d.y < -440) { d.y = 430; d.x = mr(-700, 500); }
    dummy.position.set(d.x, d.y, d.z); dummy.rotation.set(d.rx, d.ry, d.rz);
    const s = d.scale * k * (1 + wind * .55); dummy.scale.set(s, s, s); dummy.updateMatrix(); stMesh.setMatrixAt(i, dummy.matrix);
  }
  stMesh.instanceMatrix.needsUpdate = true;
}
// 繪製一格：3D 場景 → 2D 遮幕貼圖 → 3D 花瓣風暴
function renderAll() {
  renderer.render(scene, camera);
  if (!vShow && !stShow) return;
  renderer.autoClear = false;
  if (vShow) renderer.render(ovScene, ovCam);
  if (stShow) { renderer.clearDepth(); renderer.render(stScene, stCam); }
  renderer.autoClear = true;
}
let lastWind = 0;
function drawVeil(dt, cover, paint = true) {
  if (!vPetals.length && cover <= .01) {                        // 沒有轉場時不重畫，只在結束後清空一次
    if (vDirty) { vg.setTransform(1, 0, 0, 1, 0, 0); vg.clearRect(0, 0, vcv.width, vcv.height); vDirty = false; }
    vShow = false; return;
  }
  const sp = VSPR[mode], back = [], front = [];
  for (let i = vPetals.length - 1; i >= 0; i--) {
    const q = vPetals[i];
    q.f += q.vf * dt; q.r += q.vr * dt;
    q.x += q.vx * dt + Math.sin(t * 1.5 + q.f) * 14 * dt; q.y += q.vy * dt;
    if (q.x > vW + 110 || q.y > vH + 90 || q.y < -vH * .4) { vPetals.splice(i, 1); continue; }
    (q.z > 1.9 ? front : back).push(q);
  }
  if (!paint) return;                                            // 只更新位置、不繪製（測試用的加速模擬）
  vDirty = true; vShow = true; vTex.needsUpdate = true;
  vg.setTransform(1, 0, 0, 1, 0, 0); vg.clearRect(0, 0, vcv.width, vcv.height); vg.setTransform(vDpr, 0, 0, vDpr, 0, 0);
  const draw = q => {
    const s = (q.z > 2.3 ? 24 : 11) * q.z * vU, sx = Math.abs(Math.cos(q.f)) * .84 + .16;
    vg.save(); vg.translate(q.x, q.y); vg.rotate(q.r); vg.scale(sx, 1);
    vg.drawImage((q.z > 2.3 ? sp.petalB : sp.petal)[q.i], -s / 2, -s / 2, s, s); vg.restore();
  };
  back.forEach(draw);
  if (cover > .01) {                                             // 花霧漸層：風勢越強越不透明，高峰時完全遮住畫面
    const [edge, mid] = VCOL[mode], a = Math.min(.985, Math.pow(cover, .85) * 1.02);
    const gr = vg.createLinearGradient(0, 0, vW, vH * .35);
    gr.addColorStop(0, `rgba(${edge}, ${a})`); gr.addColorStop(.5, `rgba(${mid}, ${Math.min(.99, a * 1.03)})`); gr.addColorStop(1, `rgba(${edge}, ${a})`);
    vg.fillStyle = gr; vg.fillRect(0, 0, vW, vH);
  }
  front.forEach(draw);
}

// ======== 前景散景光點 ========
const bokehU = { uMode: { value: 0 }, uPx: { value: 1 }, uTime: skyU.uTime, uOpacity: { value: 1 } };
{
  const n = 46, P = new Float32Array(n * 3), A = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { P.set([rnd(-3.5, 4), rnd(.6, 4), rnd(-1.5, 1.2)], i * 3); A.set([rnd(18, 70), rnd(0, 6.28), R()], i * 3); }
  const g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(P, 3)); g.setAttribute('aB', new T.BufferAttribute(A, 3));
  const pts = new T.Points(g, new T.ShaderMaterial({
    uniforms: bokehU, transparent: true, depthWrite: false, depthTest: false, blending: T.AdditiveBlending,
    vertexShader: `attribute vec3 aB; uniform float uTime, uPx; varying float vK; varying float vA;
      void main(){ vec3 p = position; p.x += sin(uTime * .2 + aB.y) * .25; p.y += cos(uTime * .17 + aB.y) * .2;
        vK = aB.z; vA = .6 + .4 * sin(uTime * .6 + aB.y * 3.); gl_PointSize = aB.x * uPx; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.); }`,
    fragmentShader: `uniform float uMode, uOpacity; varying float vK; varying float vA;
      void main(){ float d = length(gl_PointCoord - .5); float a = pow(smoothstep(.5, .0, d), 1.8);
        vec3 day = mix(vec3(1., .96, .97), vec3(1., .78, .86), vK), night = mix(vec3(1., .3, .55), vec3(1., .62, .35), vK);
        gl_FragColor = vec4(mix(day * .14, night * .17, uMode) * a * vA * uOpacity, 1.);
        #include <colorspace_fragment>
      }`,
  }));
  pts.frustumCulled = false; pts.renderOrder = 9; scene.add(pts);
}

// ======== 光線 ========
const hemi = new T.HemisphereLight('#fff2f5', '#e7b5c3', 2.3); scene.add(hemi);
const sun = new T.DirectionalLight('#fff3e8', 1.8); sun.position.set(6, 12, -10); scene.add(sun);

// ======== 白天／夜晚切換 ========
const MODES = {
  day: { fog: '#f6cbd8', dens: .028, exp: 1.06, hemi: ['#fff3f7', '#f0bccb', 2.6], sun: ['#fff3e8', 2.0], pl: 0, paper: .25, glow: 0, bark: '#c9aeb4', bokeh: 1, stars: 0 },
  night: { fog: '#121535', dens: .032, exp: 1.12, hemi: ['#3d4796', '#3a0f26', .75], sun: ['#7e86ff', .35], pl: 9, paper: 2.6, glow: 1, bark: '#9a7c84', bokeh: 1.1, stars: 1 },
};
let mode = 'day', statusEl = null;
const STATUS = { day: '白晝・晴櫻風鈴', night: '夜晚・星雲夜櫻' };
function applyMode(m) {
  if (m === 'night') ensureNight();
  mode = m; const s = MODES[m], night = m === 'night' ? 1 : 0;
  hero.dataset.scene = m;
  if (statusEl) statusEl.textContent = STATUS[m];
  stColors(m);
  fog.color.set(s.fog); fog.density = s.dens; blossomU.uDensity.value = s.dens;
  renderer.toneMappingExposure = s.exp;
  hemi.color.set(s.hemi[0]); hemi.groundColor.set(s.hemi[1]); hemi.intensity = s.hemi[2];
  sun.color.set(s.sun[0]); sun.intensity = s.sun[1];
  lights.forEach(l => { l.intensity = s.pl; });
  M.paper.emissiveIntensity = s.paper; M.paper.emissive.set(night ? '#ff9a48' : '#ffe2c2');
  glowMat.opacity = s.glow; haloMat.opacity = s.glow * .5; poolMat.opacity = s.glow * .5;
  M.bark.color.set(s.bark);
  M.ground.map = TX.ground[m]; M.ground.needsUpdate = true;
  blossomU.uTex.value = TX.blossom[m]; blossomU.uMode.value = night; volU.uMode.value = night;
  skyU.uMode.value = night; starU.uOpacity.value = s.stars; bokehU.uMode.value = night; bokehU.uOpacity.value = s.bokeh;
  groundPetals.m.instanceColor.array.set(night ? groundPetals.night : groundPetals.day); groundPetals.m.instanceColor.needsUpdate = true;
}

// ---- 飄落花瓣的模擬 ----
const fly = [];
const camRight = new Vector3(), camUp = new Vector3(), camFwd = new Vector3(), tmpV = new Vector3();
function spawnAmbient(anyY) {
  const z = mr(-22, 3), p = new Vector3(cxz(z) + mr(-7, 6), anyY ? mr(0, 6) : mr(5, 6.5), z);
  fly.push({ p, v: new Vector3(mr(.1, .35), mr(-.55, -.3), mr(-.1, .1)), r: new Vector3(mr(0, 6), mr(0, 6), mr(0, 6)), w: new Vector3(mr(-2, 2), mr(-3, 3), mr(-2, 2)), s: mr(.04, .06), c: new Color(pick(PAL[mode].petals)), life: 0, max: 30, amb: true, ph: mr(0, 6.28) });
}
function updatePetals(dt, wind) {
  let nb = 0, nf = 0;
  for (let i = fly.length - 1; i >= 0; i--) {
    const q = fly[i]; q.life += dt;
    if (q.amb) {
      q.v.x += ((.25 + wind * 7) - q.v.x) * Math.min(1, dt * 1.5);
      q.p.addScaledVector(q.v, dt); q.p.x += Math.sin(t * 1.3 + q.ph) * .25 * dt; q.p.z += Math.cos(t * .9 + q.ph) * .15 * dt;
      if (q.p.y < .02 || q.p.x > cxz(q.p.z) + 12) { fly.splice(i, 1); continue; }
    } else {
      q.v.addScaledVector(camUp, Math.sin(t * 3 + q.ph) * 1.4 * dt);
      q.p.addScaledVector(q.v, dt);
      if (q.life > q.max) { fly.splice(i, 1); continue; }
    }
    q.r.addScaledVector(q.w, dt);
    const m = q.near ? frontFly : backFly, k = q.near ? nf : nb;
    if (k >= (q.near ? MAXF : MAXB)) continue;
    dummy.position.copy(q.p); dummy.rotation.set(q.r.x, q.r.y, q.r.z); dummy.scale.set(q.s * .78, q.s, q.s); dummy.updateMatrix();
    m.setMatrixAt(k, dummy.matrix); m.setColorAt(k, q.c);
    if (q.near) nf++; else nb++;
  }
  backFly.count = nb; frontFly.count = nf;
  [backFly, frontFly].forEach(m => { m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; });
}

// ======== 版面（依頁首尺寸調整相機）========
let W = 0, H = 0, narrow = false;
const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
let appliedW = 0, appliedH = 0, halted = false;
function resize() {
  // 只讀取頁首本身的尺寸；canvas 是絕對定位，不會反過來撐大頁首
  W = Math.round(Math.min(hero.clientWidth, 3840)); H = Math.round(Math.min(hero.clientHeight, MAX_HERO_H * 1.2, 1600));
  if (W < 10 || H < 10) return false;
  // 安全機制：頁首異常地高（例如被外層框架無限撐高）就停止繪製，避免吃光記憶體
  if (hero.clientHeight > MAX_HERO_H * 3) { halted = true; return false; }
  if (W === appliedW && H === appliedH) return true;
  appliedW = W; appliedH = H; narrow = W < 640;
  // 繪圖像素上限約 250 萬（≈ 2K），高解析度螢幕也不會配置過大的畫布
  const MAXPX = narrow ? 1.4e6 : 2.5e6;
  const dpr = Math.max(.5, Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(MAXPX / (W * H))));
  renderer.setPixelRatio(dpr); renderer.setSize(W, H, false);
  camera.aspect = W / H;
  camera.fov = camera.aspect < .8 ? 72 : camera.aspect < 1.3 ? 60 : 50;
  if (narrow) { camBase.set(.15, 1.5, 3.4); camLook.set(.5, 3, -20); } else { camBase.set(0, 1.55, 3.4); camLook.set(-1.6, 2.9, -20); }
  camera.updateProjectionMatrix();
  stCam.aspect = W / H; stCam.updateProjectionMatrix();
  veilResize(W, H, Math.min(dpr, 1.5));
  starU.uPx.value = dpr; bokehU.uPx.value = dpr * Math.min(W, H * 1.6) / 1100;
  return true;
}
function placeCamera() {
  pointer.x += (pointer.tx - pointer.x) * .04; pointer.y += (pointer.ty - pointer.y) * .04;
  camera.position.set(camBase.x + pointer.x * .35 + Math.sin(t * .13) * .08, camBase.y - pointer.y * .15 + Math.sin(t * .21) * .03, camBase.z);
  camera.lookAt(camLook.x + pointer.x * .6, camLook.y - pointer.y * .3, camLook.z);
  camera.updateMatrixWorld();
  camRight.setFromMatrixColumn(camera.matrixWorld, 0); camUp.setFromMatrixColumn(camera.matrixWorld, 1); camFwd.setFromMatrixColumn(camera.matrixWorld, 2).negate();
}

// ======== 時間軸：白天停留 → 花吹雪 → 夜晚停留 → 花吹雪 → … ========
const HOLD = { day: 7, night: 8.5 }, GUST = 3.4;
let phase = 'hold', timer = 0, gustT = 0, swapped = false, t = 0, from = 'day', autoCycle = true;
// 吹起櫻吹雪：自動循環到時間，或按右上角按鈕
function triggerGust() {
  if (phase === 'gust') return;
  if (reduce) { applyMode(mode === 'day' ? 'night' : 'day'); still(); return; }   // 減少動態效果：直接切換，不播轉場
  phase = 'gust'; gustT = 0; swapped = false; from = mode; timer = 0;
  start();
}
function frame(dt, draw = true) {
  t += dt;
  let wind = 0;
  if (autoCycle && phase === 'hold') { timer += dt; if (timer >= HOLD[mode]) triggerGust(); }
  if (phase === 'gust') {
    gustT += dt; const u = Math.min(1, gustT / GUST);
    // 風勢曲線（同 sop.html）：0～42% 增強、42～58% 最強（花霧完全遮住）、58～100% 減弱
    wind = u < .42 ? Math.pow(u / .42, 1.5) : u <= .58 ? 1 : Math.pow(Math.max(0, 1 - (u - .58) / .42), 1.35);
    let n = (85 + 1450 * wind) * Q * dt; while (n > 0) { if (Math.random() < n) spawnVeilPetal(); n -= 1; }   // 2D 高速花瓣流
    if (!swapped && u >= .5) { applyMode(from === 'day' ? 'night' : 'day'); swapped = true; }
    if (u >= 1) { phase = 'hold'; timer = 0; }
  }
  const amb = fly.reduce((s, q) => s + (q.amb ? 1 : 0), 0);
  if (amb < 150 * Q && Math.random() < dt * 20) spawnAmbient(false);
  skyU.uTime.value = t; blossomU.uTime.value = t; blossomU.uWind.value = wind;
  chimes.forEach(c => {
    c.pivot.rotation.z = Math.sin(t * 1.3 + c.ph) * .05 + wind * (.42 + .12 * Math.sin(t * 7 + c.ph));
    c.pivot.rotation.x = Math.sin(t * .9 + c.ph) * .04;
    c.sub.rotation.z = Math.sin(t * 2.3 + c.ph) * .12 + wind * (.5 + .3 * Math.sin(t * 11 + c.ph));
  });
  if (mode === 'night') {                                       // 燈火的微微搖曳
    const f = 1 + .06 * Math.sin(t * 9.1) * Math.sin(t * 3.7);
    lights.forEach((l, i) => { l.intensity = MODES.night.pl * (1 + .08 * Math.sin(t * 7 + i * 1.7) * Math.sin(t * 3.1 + i)); });
    M.paper.emissiveIntensity = MODES.night.paper * f;
  }
  placeCamera();
  updatePetals(dt, wind);
  lastWind = wind;
  drawVeil(dt, wind, draw);
  stepStorm(dt, wind);
  if (draw) renderAll();
}

// ======== 啟動、可見度、暫停 ========
let raf = 0, last = 0, vis = false;
// 自動循環開啟、正在轉場、或轉場花瓣還沒飛完時才持續繪製；關閉自動循環＝背景動態停止（符合 WCAG 2.2.2 可暫停）
const running = () => autoCycle || phase === 'gust' || vPetals.length > 0;
const loop = now => { raf = 0; if (halted) return; const dt = Math.min(.05, (now - last) / 1000 || .016); last = now; frame(dt); if (vis && running()) raf = requestAnimationFrame(loop); };
const start = () => { if (!raf && vis && running() && !reduce && !halted) { last = performance.now(); raf = requestAnimationFrame(loop); } };
const check = () => { const r = hero.getBoundingClientRect(); vis = r.bottom > 0 && r.top < innerHeight && !document.hidden; if (vis) start(); };
const still = () => { if (halted) return; placeCamera(); updatePetals(0, 0); drawVeil(0, lastWind); stepStorm(0, lastWind); renderAll(); };

applyMode('day');
if (!resize()) return;
for (let i = 0; i < 150 * Q; i++) spawnAmbient(true);            // 一開始就有花瓣在空中
still();
hero.classList.add('has-scene', 'is-ready');
if (!reduce) (window.requestIdleCallback || (f => setTimeout(f, 1200)))(ensureNight, { timeout: 4000 });

// ---- 右上角：狀態列＋「吹起櫻吹雪」＋「自動循環」（照 sop.html）----
{
  const ctl = document.createElement('div');
  ctl.className = 'hero-controls'; ctl.setAttribute('role', 'group'); ctl.setAttribute('aria-label', '場景時間與櫻吹雪切換');
  ctl.innerHTML = `<span class="hero-status-pill"><span class="hero-status-dot" aria-hidden="true"></span><span data-hero-status-text></span></span>
<button type="button" class="hero-ctl-btn" data-hero-gust-btn title="${reduce ? '切換白晝與夜晚' : '立即吹起櫻花花瓣風並切換晝夜'}"><span aria-hidden="true">🌸</span> ${reduce ? '切換晝夜' : '吹起櫻吹雪'}</button>
${reduce ? '' : '<button type="button" class="hero-ctl-btn" data-hero-auto-btn aria-pressed="true" title="關閉後停止自動晝夜循環與背景動態"><span data-hero-auto-text>自動循環：開</span></button>'}`;
  hero.append(ctl);
  statusEl = ctl.querySelector('[data-hero-status-text]'); statusEl.textContent = STATUS[mode];
  ctl.querySelector('[data-hero-gust-btn]').addEventListener('click', triggerGust);
  const autoBtn = ctl.querySelector('[data-hero-auto-btn]');
  // 平時隱藏：滑鼠在頁首上移動、手機輕點畫面、鍵盤聚焦按鈕時顯示，閒置 2 秒後淡出（滑鼠停在控制列上、或鍵盤聚焦在按鈕上時不淡出）
  let hideT = 0;
  const showCtl = () => {
    ctl.classList.add('is-shown'); clearTimeout(hideT);
    hideT = setTimeout(function idle() {
      if (ctl.matches(':hover') || ctl.querySelector(':focus-visible')) { hideT = setTimeout(idle, 2000); return; }
      ctl.classList.remove('is-shown');
    }, 2000);
  };
  hero.addEventListener('pointermove', showCtl, { passive: true });
  hero.addEventListener('pointerdown', showCtl, { passive: true });
  ctl.addEventListener('focusin', showCtl);
  ctl.addEventListener('focusout', showCtl);
  if (autoBtn) autoBtn.addEventListener('click', () => {
    autoCycle = !autoCycle; timer = 0;
    autoBtn.setAttribute('aria-pressed', String(autoCycle));
    autoBtn.querySelector('[data-hero-auto-text]').textContent = `自動循環：${autoCycle ? '開' : '關'}`;
    if (autoCycle) check();
  });
}
if (!reduce) {
  hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); pointer.tx = (e.clientX - r.left) / r.width * 2 - 1; pointer.ty = (e.clientY - r.top) / r.height * 2 - 1; }, { passive: true });
  hero.addEventListener('pointerleave', () => { pointer.tx = pointer.ty = 0; });
}
check();
let rt = 0;
if ('ResizeObserver' in window) new ResizeObserver(() => {
  clearTimeout(rt);
  rt = setTimeout(() => { if (Math.abs(hero.clientWidth - appliedW) < 2 && Math.abs(hero.clientHeight - appliedH) < 2) return; if (resize() && (reduce || !running())) still(); check(); }, 150);
}).observe(hero);
if ('IntersectionObserver' in window) new IntersectionObserver(check).observe(hero);
addEventListener('scroll', check, { passive: true });
document.addEventListener('visibilitychange', check);
// 測試用：讀取目前狀態、直接跳到指定場景
hero.shrineHero = { stats: () => ({ ...STATS, calls: renderer.info.render.calls, tris: renderer.info.render.triangles, px: [renderer.domElement.width, renderer.domElement.height] }), get mode() { return mode; }, get phase() { return phase; }, set: m => { applyMode(m); phase = 'hold'; timer = 0; vPetals.length = 0; lastWind = 0; still(); }, gust: triggerGust, sim: sec => { for (let i = 0; i < sec * 30; i++) frame(1 / 30, false); drawVeil(0, lastWind); stepStorm(0, lastWind); renderAll(); } };
}
})();
