// 神社頁頁首：櫻花隧道（three.js 寫實 3D 版）
// 構圖：參道筆直延伸到遠方，左右兩排櫻花樹往中間拱起，形成一條花的隧道；兩側朱紅欄杆、石柱與燈籠柱
// 動畫：白天櫻花 → 一陣風捲起花吹雪遮住畫面 → 夜晚（深藍星空＋星雲、深紅櫻花、燈籠點亮）→ 再吹回白天，循環
// 白天色調參考粉白柔光的櫻花與玻璃風鈴；夜晚色調參考深藍星空與深紅櫻花
// 頁首撐滿視窗（扣除網站標頭）；canvas 固定絕對定位且限制像素量，避免「canvas 撐大頁首 → 再放大 canvas」的記憶體暴增迴圈
// 一般 <script>（defer）載入，three.js 以動態 import 從 CDN 取得；載入失敗或不支援 WebGL 時保留漸層底圖
// 「減少動態效果」時只畫一張白天靜止畫面；動畫可用右下角按鈕暫停
// 進站時只顯示滿版的靜態文字畫面（文字定格晃動；轉場完成前鎖住頁面捲動）（不載入 three.js、不建立 WebGL）；轉動滾輪／按鍵／輕滑／點按鈕後，
// 文字化作花瓣隱約散開，同時在背後載入動畫，兩者都完成後才淡出進站畫面、露出動畫頁首（頁面不會被捲動）
(() => {
'use strict';
const hero = document.querySelector('[data-sakura-hero]');
const box = hero && hero.querySelector('.scene-fx');
if (!box) return;
const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- 頁首專用樣式：底圖（載入前／失敗時）、文字區遮罩、暫停按鈕 ----
const css = document.createElement('style');
css.textContent = `
section[data-sakura-hero]{position:relative !important;overflow:hidden !important;display:flex;align-items:center;
  min-height:var(--sakura-h,560px) !important}
section[data-sakura-hero] > .scene-fx{position:absolute !important;inset:0 !important;overflow:hidden !important;
  background:radial-gradient(90% 80% at 56% 52%,#fff6f8 0%,#f8d2de 38%,#d98aa6 100%)}
section[data-sakura-hero] > .scene-fx > .scene-cv{position:absolute !important;inset:0 !important;width:100% !important;height:100% !important;
  max-width:none !important;display:block;opacity:0;transition:opacity .9s ease}
section[data-sakura-hero] > .hero__inner{position:relative;z-index:1}
section[data-sakura-hero].is-ready > .scene-fx > .scene-cv{opacity:1}
[data-sakura-hero] .scene-scrim{position:absolute;inset:0;pointer-events:none;transition:background .5s ease;
  background:linear-gradient(90deg,rgba(96,30,62,.8) 0%,rgba(96,30,62,.64) 38%,rgba(96,30,62,.42) 54%,rgba(96,30,62,0) 72%)}
[data-sakura-hero][data-scene="night"] .scene-scrim{
  background:linear-gradient(90deg,rgba(4,7,26,.84) 0%,rgba(4,7,26,.64) 38%,rgba(4,7,26,.4) 54%,rgba(4,7,26,0) 72%)}
@media (max-width:639px){
  [data-sakura-hero] .scene-scrim{background:linear-gradient(180deg,rgba(84,26,52,.5),rgba(84,26,52,.72) 45%,rgba(84,26,52,.55))}
  [data-sakura-hero][data-scene="night"] .scene-scrim{background:linear-gradient(180deg,rgba(4,7,26,.45),rgba(4,7,26,.72) 45%,rgba(4,7,26,.5))}
}
[data-sakura-hero] .scene-toggle{position:absolute;right:12px;bottom:12px;z-index:3;min-height:44px;padding:0 16px;border-radius:999px;
  border:1px solid rgba(255,255,255,.55);background:rgba(20,8,20,.55);color:#fff;font:500 14px/1 inherit;font-family:inherit;cursor:pointer;
  -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
[data-sakura-hero] .scene-toggle:hover{background:rgba(20,8,20,.75)}
[data-sakura-hero] .scene-toggle:focus-visible{outline:3px solid #fff;outline-offset:2px}
/* ---- 進站畫面：滿版靜態文字（沿用網站頁首的深藍底＋金色／緋紅光暈），轉動滾輪後文字化作花瓣散開 ---- */
[data-sakura-hero] .scene-intro{position:absolute;inset:0;z-index:4;display:grid;place-items:center;text-align:center;padding:32px 24px;color:#fff;
  background:radial-gradient(circle at 85% 20%,rgba(201,162,39,.28),transparent 45%),radial-gradient(circle at 70% 90%,rgba(183,40,46,.35),transparent 50%),#0f1f38;
  background:radial-gradient(circle at 50% 42%,color-mix(in srgb,var(--gold) 14%,transparent),transparent 42%),
             radial-gradient(circle at 85% 20%,color-mix(in srgb,var(--gold) 28%,transparent),transparent 45%),
             radial-gradient(circle at 70% 90%,color-mix(in srgb,var(--crimson) 35%,transparent),transparent 50%),var(--navy-deep);
  transition:opacity .9s ease,visibility 0s linear .9s}
[data-sakura-hero] .scene-intro::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.55;
  background:radial-gradient(3px 4px at 18% 22%,var(--gold-soft) 60%,transparent 62%),radial-gradient(4px 5px at 82% 30%,var(--crimson-soft) 60%,transparent 62%),
             radial-gradient(3px 4px at 70% 76%,var(--gold) 60%,transparent 62%),radial-gradient(5px 6px at 26% 70%,var(--crimson-soft) 60%,transparent 62%),
             radial-gradient(3px 4px at 90% 58%,var(--gold-soft) 60%,transparent 62%),radial-gradient(4px 5px at 8% 48%,var(--gold) 60%,transparent 62%),
             radial-gradient(3px 4px at 56% 12%,var(--crimson-soft) 60%,transparent 62%),radial-gradient(4px 5px at 40% 88%,var(--gold-soft) 60%,transparent 62%)}
[data-sakura-hero] .scene-intro__body{position:relative;max-width:44rem}
[data-sakura-hero] .scene-intro .eyebrow{gap:0;margin-bottom:1.4rem}
[data-sakura-hero] .scene-intro__title{display:block;font-family:var(--font-serif);font-weight:700;letter-spacing:.16em;line-height:1.2;
  font-size:clamp(2.6rem,9vw,6rem);text-shadow:0 0 26px color-mix(in srgb,var(--gold) 40%,transparent),0 2px 12px rgba(0,0,0,.4)}
[data-sakura-hero] .scene-intro__title .is-accent{color:var(--gold)}
[data-sakura-hero] .scene-intro__lead{display:block;margin:1.4rem auto 0;font-size:clamp(1rem,2.4vw,1.2rem);line-height:1.8;color:rgba(255,255,255,.85)}
/* 定格晃動（stop motion）：每個字一格一格跳到下一個姿勢（steps，無平滑過渡），0.9 秒循環，各字錯開節奏 */
[data-sakura-hero] .sm{display:inline-block;white-space:pre;animation:var(--sm,smA) .9s steps(1,end) infinite;animation-delay:var(--sd,0s)}
@keyframes smA{0%,100%{transform:translate(calc(var(--a)*-1px),calc(var(--a)*.5px)) rotate(calc(var(--a)*-1.6deg))}
  25%{transform:translate(calc(var(--a)*.8px),calc(var(--a)*-1px)) rotate(calc(var(--a)*1.2deg))}
  50%{transform:translate(calc(var(--a)*-.4px),calc(var(--a)*1px)) rotate(calc(var(--a)*-.6deg))}
  75%{transform:translate(calc(var(--a)*1px),calc(var(--a)*.3px)) rotate(calc(var(--a)*1.8deg))}}
@keyframes smB{0%,100%{transform:translate(calc(var(--a)*.6px),calc(var(--a)*.8px)) rotate(calc(var(--a)*1.4deg))}
  25%{transform:translate(calc(var(--a)*-.9px),calc(var(--a)*-.2px)) rotate(calc(var(--a)*-1.1deg))}
  50%{transform:translate(calc(var(--a)*.2px),calc(var(--a)*-1px)) rotate(calc(var(--a)*.5deg))}
  75%{transform:translate(calc(var(--a)*-.7px),calc(var(--a)*.6px)) rotate(calc(var(--a)*-1.9deg))}}
@keyframes smC{0%,100%{transform:translate(calc(var(--a)*.2px),calc(var(--a)*-.9px)) rotate(calc(var(--a)*-.8deg))}
  25%{transform:translate(calc(var(--a)*1px),calc(var(--a)*.5px)) rotate(calc(var(--a)*1.7deg))}
  50%{transform:translate(calc(var(--a)*-1px),calc(var(--a)*.1px)) rotate(calc(var(--a)*-1.5deg))}
  75%{transform:translate(calc(var(--a)*.4px),calc(var(--a)*1px)) rotate(calc(var(--a)*.9deg))}}
@media (prefers-reduced-motion:reduce){[data-sakura-hero] .scene-intro,[data-sakura-hero] .scene-intro__body > *{transition:opacity .4s ease}
  [data-sakura-hero].intro-leaving .scene-intro__body > *{transform:none}[data-sakura-hero] .sm{animation:none}}
[data-sakura-hero] .scene-intro__body > *{transition:opacity 1.1s ease,transform 1.4s cubic-bezier(.2,.7,.2,1),letter-spacing 1.4s ease}
[data-sakura-hero].intro-leaving .scene-intro__body > *{opacity:0;pointer-events:none}
[data-sakura-hero].intro-leaving .scene-intro__title{transform:scale(1.08);letter-spacing:.4em}
[data-sakura-hero].intro-leaving .scene-intro .eyebrow{transform:translateY(-12px)}
[data-sakura-hero].intro-leaving .scene-intro__lead{transform:translateY(10px);transition-delay:.12s}
[data-sakura-hero] .scene-intro__petals{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
[data-sakura-hero] .scene-intro__wait{position:absolute;left:50%;bottom:14%;transform:translateX(-50%);font-size:.85rem;letter-spacing:.2em;color:var(--gold-soft);
  opacity:0;transition:opacity .6s ease .8s}
[data-sakura-hero].intro-leaving .scene-intro__wait{opacity:.75}
[data-sakura-hero].intro-done .scene-intro{opacity:0;visibility:hidden;pointer-events:none}
/* 進入動畫頁首之前鎖住頁面捲動 */
html.sakura-lock{overflow:hidden !important;scroll-behavior:auto !important}
html.sakura-lock body{overflow:hidden !important}
`;
document.head.append(css);
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
const scrim = document.createElement('div'); scrim.className = 'scene-scrim';
box.append(scrim);
hero.dataset.scene = 'day';

// ======== 進站畫面：先只顯示靜態文字；一定要轉動滾輪進入動畫頁首後，才能往下看到內容 ========
// 把文字拆成一個字一個 span，套上定格晃動；每個字隨機挑一組姿勢、隨機錯開起點
const sm = (text, amp, accent = '') => [...text].map((ch, i) => {
  const set = ['smA', 'smB', 'smC'][Math.floor(Math.random() * 3)], delay = -(Math.random() * .9).toFixed(3);
  const cls = accent && accent.includes(ch) ? ' is-accent' : '';
  return `<span class="sm${cls}" style="--a:${(amp * (.75 + Math.random() * .5)).toFixed(2)};--sm:${set};--sd:${delay}s">${ch === ' ' ? ' ' : ch}</span>`;
}).join('');
const intro = document.createElement('div');
intro.className = 'scene-intro';
intro.innerHTML = `<div class="scene-intro__body">
  <span class="eyebrow" aria-hidden="true">${sm('SHRINES & TEMPLES', .7).replace('&', '&amp;')}</span>
  <span class="scene-intro__title" aria-hidden="true">${sm('櫻花參道', 1.6, '參道')}</span>
  <span class="scene-intro__lead" aria-hidden="true">${sm('一陣風吹過花隧道，白晝便化作夜櫻。', .8)}</span>
</div>
<span class="scene-intro__wait" aria-hidden="true">櫻花綻放中…</span>`;
hero.append(intro);

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
  const h = location.hash || savedHash;                                         // 網址帶 #錨點：進入後再捲過去
  const el = h && document.getElementById(decodeURIComponent(h.slice(1)));
  if (el) requestAnimationFrame(() => el.scrollIntoView());
}

function begin() {
  if (begun) return; begun = true;
  const hadFocus = intro.contains(document.activeElement);
  hero.classList.add('intro-leaving');
  // 花瓣散完、動畫也準備好了，才淡出進站畫面（避免先露出空白底圖）
  let scattered = false, ready = false, finished = false;
  const finish = () => {
    if (finished || !scattered || !ready) return; finished = true;
    hero.classList.add('intro-done');
    unlock();                                                                   // 進入動畫頁首後才能往下捲
    if (hadFocus) { const h1 = hero.querySelector('h1'); if (h1) { h1.tabIndex = -1; h1.focus({ preventScroll: true }); } }
    setTimeout(() => intro.remove(), 1000);
  };
  scatter(() => { scattered = true; scatterDone(); finish(); });
  const markReady = () => { ready = true; finish(); };
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
  const cs = getComputedStyle(root), v = (n, f) => cs.getPropertyValue(n).trim() || f;   // 花瓣顏色取自網站主題色
  const cols = [v('--gold-soft', '#fbf4df'), v('--crimson-soft', '#fbeceb'), v('--gold', '#c9a227'), '#ffffff', v('--crimson-soft', '#fbeceb'), v('--gold-soft', '#fbf4df')];
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
box.insertBefore(cv, scrim);

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
// 遮幕：貼在鏡頭前的一層「花瓣牆」，由左往右捲過畫面
const veilU = { uVeil: { value: 0 }, uIn: { value: 0 }, uOut: { value: 0 }, uMix: { value: 0 }, uTime: skyU.uTime, uAspect: { value: 2 } };
const veil = new T.Mesh(new T.PlaneGeometry(1, 1), new T.ShaderMaterial({
  uniforms: veilU, transparent: true, depthTest: false, depthWrite: false,
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  fragmentShader: `
    uniform float uIn, uOut, uMix, uTime, uAspect; varying vec2 vUv;
    float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
    vec4 layer(vec2 uv, float sc, float sp, float sd){
      vec2 p = uv * sc; p.x -= uTime * sp; p.y += sin(p.x * .7 + sd) * .3;
      vec2 id = floor(p), f = fract(p) - .5;
      float h = h2(id + sd), a = h * 6.28 + uTime * (h - .5) * 4.;
      vec2 q = mat2(cos(a), -sin(a), sin(a), cos(a)) * (f + (vec2(h2(id + sd + 1.), h2(id + sd + 2.)) - .5) * .35);
      q.y += .1 * q.x * q.x * 4.;
      float m = smoothstep(.34, .3, length(q * vec2(1., 1.75)));
      return vec4(vec3(.75 + .35 * h + .25 * q.y), m);
    }
    void main(){
      vec2 uv = vec2(vUv.x * uAspect, vUv.y);
      vec3 dA = vec3(.98, .82, .87), dB = vec3(.93, .62, .74), nA = vec3(.86, .14, .38), nB = vec3(.36, .04, .2);
      vec3 base = mix(mix(dB, dA, .4), mix(nB, nA, .35), uMix);
      vec3 pc = mix(dA, nA, uMix), col = base * (.85 + .2 * n2(uv * 3. + vec2(-uTime * 2., 0.)));
      for (int i = 0; i < 3; i++){ float fi = float(i); vec4 L = layer(uv, 5. + fi * 4., 2.4 + fi * 1.6, fi * 7.); col = mix(col, pc * L.rgb, L.a * .9); }
      float s = vUv.x + (n2(uv * 2.5 + uTime) - .5) * .35;
      float a = (1. - smoothstep(uIn - .22, uIn, s)) * smoothstep(uOut - .22, uOut, s);
      gl_FragColor = vec4(pow(col, vec3(2.2)), a);
      #include <colorspace_fragment>
    }`,
}));
veil.renderOrder = 10; veil.frustumCulled = false; veil.position.z = -1.2; camera.add(veil); veil.visible = false;

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
let mode = 'day';
function applyMode(m) {
  if (m === 'night') ensureNight();
  mode = m; const s = MODES[m], night = m === 'night' ? 1 : 0;
  hero.dataset.scene = m;
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
function spawnGust() {
  const fov = camera.fov * Math.PI / 360, d = .45 + 13 * Math.pow(Math.random(), 2.3), hh = Math.tan(fov) * d, hw = hh * camera.aspect;
  const local = new Vector3(-hw * mr(1.02, 1.6), mr(-hh * 1.1, hh * 1.15), -d).applyMatrix4(camera.matrixWorld);
  const sp = d * mr(1.7, 2.8) + .5;
  const v = camRight.clone().multiplyScalar(sp).addScaledVector(camUp, sp * mr(-.18, .3)).addScaledVector(camFwd, mr(-.3, .3));
  fly.push({ p: local, v, r: new Vector3(mr(0, 6), mr(0, 6), mr(0, 6)), w: new Vector3(mr(-9, 9), mr(-12, 12), mr(-9, 9)), s: mr(.035, .06) * (d < 1.5 ? 1.2 : 1), c: new Color(pick(PAL[mode].petals)), life: 0, max: (2 * hw * 1.6) / sp + .6, amb: false, ph: mr(0, 6.28), near: d < 1.15 });
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
  const vh = 2 * Math.tan(camera.fov * Math.PI / 360) * 1.2 * 1.08; veil.scale.set(vh * camera.aspect, vh, 1); veilU.uAspect.value = camera.aspect;
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
const HOLD = { day: 7, night: 9 }, GUST = 4.2;
let phase = 'hold', timer = 0, gustT = 0, swapped = false, t = 0, from = 'day';
function frame(dt, draw = true) {
  t += dt; timer += dt;
  let wind = 0;
  if (phase === 'hold' && timer > HOLD[mode]) { phase = 'gust'; gustT = 0; swapped = false; from = mode; }
  veil.visible = false;
  if (phase === 'gust') {
    gustT += dt; const u = Math.min(1, gustT / GUST);
    wind = u < .4 ? Math.pow(u / .4, 1.5) : u < .62 ? 1 : Math.pow(Math.max(0, 1 - (u - .62) / .38), 1.4);
    let n = (60 + 820 * wind) * Q * dt; while (n > 0) { if (Math.random() < n) spawnGust(); n -= 1; }
    // 遮幕：先由左往右蓋滿（u .12→.46），切換場景（u .5），再由左往右揭開（u .56→.92）
    const ease = x => x * x * (3 - 2 * x), rmp = (a, b) => ease(Math.min(1, Math.max(0, (u - a) / (b - a))));
    veilU.uIn.value = -.25 + 1.6 * rmp(.12, .46); veilU.uOut.value = -.25 + 1.6 * rmp(.56, .92);
    veilU.uMix.value = from === 'day' ? rmp(.4, .6) : 1 - rmp(.4, .6);
    veil.visible = u > .1 && u < .95;
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
  if (draw) renderer.render(scene, camera);
}

// ======== 啟動、可見度、暫停 ========
let raf = 0, last = 0, vis = false, paused = false;
const loop = now => { raf = 0; if (halted) return; const dt = Math.min(.05, (now - last) / 1000 || .016); last = now; frame(dt); if (vis && !paused) raf = requestAnimationFrame(loop); };
const start = () => { if (!raf && vis && !paused && !reduce && !halted) { last = performance.now(); raf = requestAnimationFrame(loop); } };
const check = () => { const r = hero.getBoundingClientRect(); vis = r.bottom > 0 && r.top < innerHeight && !document.hidden; if (vis) start(); };
const still = () => { if (halted) return; placeCamera(); updatePetals(0, 0); renderer.render(scene, camera); };

applyMode('day');
if (!resize()) return;
for (let i = 0; i < 150 * Q; i++) spawnAmbient(true);            // 一開始就有花瓣在空中
still();
hero.classList.add('has-scene', 'is-ready');
if (!reduce) (window.requestIdleCallback || (f => setTimeout(f, 1200)))(ensureNight, { timeout: 4000 });

if (!reduce) {
  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'scene-toggle';
  const label = () => { btn.textContent = paused ? '▶ 播放背景動畫' : '❚❚ 暫停背景動畫'; btn.setAttribute('aria-pressed', String(paused)); };
  label(); hero.append(btn);
  btn.addEventListener('click', () => { paused = !paused; label(); if (!paused) check(); });
  hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); pointer.tx = (e.clientX - r.left) / r.width * 2 - 1; pointer.ty = (e.clientY - r.top) / r.height * 2 - 1; }, { passive: true });
  hero.addEventListener('pointerleave', () => { pointer.tx = pointer.ty = 0; });
}
check();
let rt = 0;
if ('ResizeObserver' in window) new ResizeObserver(() => {
  clearTimeout(rt);
  rt = setTimeout(() => { if (Math.abs(hero.clientWidth - appliedW) < 2 && Math.abs(hero.clientHeight - appliedH) < 2) return; if (resize() && (reduce || paused)) still(); check(); }, 150);
}).observe(hero);
if ('IntersectionObserver' in window) new IntersectionObserver(check).observe(hero);
addEventListener('scroll', check, { passive: true });
document.addEventListener('visibilitychange', check);
// 測試用：讀取目前狀態、直接跳到指定場景
hero.shrineHero = { stats: () => ({ ...STATS, calls: renderer.info.render.calls, tris: renderer.info.render.triangles, px: [renderer.domElement.width, renderer.domElement.height] }), get mode() { return mode; }, get phase() { return phase; }, set: m => { applyMode(m); phase = 'hold'; timer = 0; veil.visible = false; still(); }, gust: () => { timer = 999; }, sim: sec => { for (let i = 0; i < sec * 30; i++) frame(1 / 30, false); renderer.render(scene, camera); } };
}
})();
