// 頁首插畫（一般 <script>，直接點開 HTML 也能執行；全部是程式產生的原創向量圖，不用外部圖片）
// data-scene="ginkgo"：動漫頁＿平面海報風（深藍底、扁平銀杏葉、金色圓、細線）
// data-scene="shrine"：神社頁＿木版畫風（藍色漸層天空、霞雲、遠山、朱紅鳥居、石燈籠）；3～4 月櫻花，其他月份紅葉
// 動畫只有少量飄落的葉子／花瓣（CSS 動畫，「減少動態效果」時不播放）。網址加 ?season=sakura 或 ?season=maple 可預覽另一季
(() => {
'use strict';
const hero = document.querySelector('[data-scene]');
const box = hero && hero.querySelector('.scene-fx');
if (!box) return;

let kind = hero.dataset.scene;
if (kind === 'shrine') {
  const m = new Date().getMonth() + 1;
  kind = m === 3 || m === 4 ? 'sakura' : 'maple';
  const q = new URLSearchParams(location.search).get('season');
  if (q === 'sakura' || q === 'maple') kind = q;
}
hero.dataset.season = kind;

// 固定亂數：每次開頁畫面都一樣
const R = (s => () => (s = (s * 16807) % 2147483647) / 2147483647)(kind === 'ginkgo' ? 20261028 : 1931);
const rnd = (a, b) => a + R() * (b - a);
const pick = a => a[Math.floor(R() * a.length)];
const f1 = n => n.toFixed(1);

// ---- 形狀 ----
// 銀杏葉（扁平）：扇形＋中央缺口，原點在葉柄根部，葉片朝上，高約 100
const GINKGO = 'M0 0 C-6 -22 -40 -48 -58 -70 C-40 -96 -12 -104 -4 -100 L0 -86 L4 -100 C12 -104 40 -96 58 -70 C40 -48 6 -22 0 0 Z';
const GINKGO_VEINS = [-50, -36, -22, -10, 10, 22, 36, 50].map(x => `M0 -4 L${x} ${-60 - Math.abs(x) * .25 - (Math.abs(x) < 14 ? 14 : 0)}`).join(' ');
// 楓葉圖案（木版畫的小色點，5 裂）
const MAPLE = 'M0 -10 L2 -4 L8 -6 L5 -1 L10 1 L4 3 L5 9 L0 5 L-5 9 L-4 3 L-10 1 L-5 -1 L-8 -6 L-2 -4 Z';
// 櫻花五瓣
const SAKURA = (() => { let d = ''; for (let k = 0; k < 5; k++) { const a = k * Math.PI * 2 / 5 - Math.PI / 2, c = Math.cos(a), s = Math.sin(a); const p = (r, t) => `${f1(c * r - s * t)} ${f1(s * r + c * t)}`; d += `M0 0 C${p(3, -5)} ${p(9, -5)} ${p(10, -1.4)} L${p(8.4, 0)} L${p(10, 1.4)} C${p(9, 5)} ${p(3, 5)} 0 0 Z `; } return d; })();
const PETAL = 'M0 6 C-5 3 -6 -5 -2.2 -7.6 L0 -5.9 L2.2 -7.6 C6 -5 5 3 0 6 Z';

// =====================================================================
// 動漫頁：平面海報風
// =====================================================================
function poster() {
  const W = 1600, H = 760, o = [];
  o.push(`<rect width="${W}" height="${H}" fill="#0f1f38"/>`);
  // 細斜線底紋（右半）
  o.push('<defs><pattern id="sc-lines" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)"><line x1="0" y1="0" x2="0" y2="14" stroke="#ecd06a" stroke-opacity=".07" stroke-width="2"/></pattern>');
  o.push('<radialGradient id="sc-dot-fade" cx=".8" cy=".4" r=".6"><stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>');
  o.push('<mask id="sc-dotmask"><rect width="1600" height="760" fill="url(#sc-dot-fade)"/></mask>');
  o.push('<pattern id="sc-dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="9" cy="9" r="2.2" fill="#ecd06a" fill-opacity=".18"/></pattern></defs>');
  o.push(`<rect x="700" width="${W - 700}" height="${H}" fill="url(#sc-lines)"/>`);
  o.push(`<rect width="${W}" height="${H}" fill="url(#sc-dots)" mask="url(#sc-dotmask)"/>`);
  // 大金色圓（秋天的太陽）＋朱紅細圈
  o.push('<circle cx="1190" cy="330" r="250" fill="#c9a227"/>');
  o.push('<circle cx="1190" cy="330" r="292" fill="none" stroke="#b7282e" stroke-width="3"/>');
  o.push('<circle cx="1190" cy="330" r="310" fill="none" stroke="#ecd06a" stroke-opacity=".35" stroke-width="1.5" stroke-dasharray="2 9"/>');
  // 紅葉重ね色帶（細斜帶）
  const band = ['#b7282e', '#d0602c', '#c9a227', '#2f7d5b'];
  band.forEach((c, i) => o.push(`<rect x="960" y="${120 + i * 9}" width="900" height="5" fill="${c}" transform="rotate(-8 1190 140)"/>`));
  // 大片扁平銀杏葉：三種黃，帶細葉脈
  const leaves = [
    [1330, 470, 3.0, -28, '#f2c418'], [1060, 470, 2.2, 22, '#e0a10e'], [1460, 230, 2.0, -62, '#f6e27a'],
    [1200, 560, 2.3, 4, '#f6e27a'], [930, 300, 1.4, 38, '#f2c418'], [1560, 520, 1.9, -12, '#e0a10e'], [1270, 150, 1.2, -14, '#f2c418'],
  ];
  leaves.forEach(([x, y, s, r, c]) => {
    o.push(`<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">`
      + `<path d="M0 0 Q3 22 -2 46" fill="none" stroke="${c}" stroke-width="${f1(4 / s)}" stroke-linecap="round"/>`
      + `<path d="${GINKGO}" fill="${c}"/>`
      + `<path d="${GINKGO_VEINS}" fill="none" stroke="#9a6a08" stroke-opacity=".45" stroke-width="${f1(1.2 / s)}"/></g>`);
  });
  // 小銀杏葉散落（線框＋實心混搭）
  for (let i = 0; i < 26; i++) {
    const x = rnd(760, 1600), y = rnd(20, 740), s = rnd(.22, .48), r = rnd(-180, 180), solid = R() < .55, c = pick(['#f2c418', '#ecd06a', '#e0a10e']);
    o.push(`<path d="${GINKGO}" transform="translate(${f1(x)} ${f1(y)}) rotate(${f1(r)}) scale(${f1(s)})" ${solid ? `fill="${c}" fill-opacity=".9"` : `fill="none" stroke="${c}" stroke-width="${f1(2 / s)}" stroke-opacity=".7"`}/>`);
  }
  // 直書小字標記（手機太窄會壓到內文，不放）
  if (innerWidth >= 640) {
  o.push('<g font-family="Noto Serif JP, Noto Serif TC, serif" font-size="22" fill="#ecd06a" fill-opacity=".75" letter-spacing="6">'
    + [...'銀杏並木'].map((ch, i) => `<text x="1560" y="${120 + i * 32}" text-anchor="middle">${ch}</text>`).join('') + '</g>');
  o.push('<text x="1520" y="120" font-family="Noto Sans TC, sans-serif" font-size="12" fill="#ecd06a" fill-opacity=".55" letter-spacing="4" transform="rotate(90 1520 120)">TOKYO ・ OSAKA</text>');
  }
  return { W, H, svg: o.join('') };
}

// =====================================================================
// 神社頁：木版畫風
// =====================================================================
function woodblock() {
  const W = 1600, H = 680, o = [], spring = kind === 'sakura', ink = '#2a211c';
  const sky = spring ? ['#3d5a80', '#9db4cc', '#f1e6dc'] : ['#1f3a5f', '#5f7f9c', '#efe1c4'];
  o.push('<defs>');
  o.push(`<linearGradient id="sc-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset=".38" stop-color="${sky[1]}"/><stop offset=".62" stop-color="${sky[2]}"/></linearGradient>`);
  // 和紙紋理
  o.push('<filter id="sc-paper" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7"/><feColorMatrix values="0 0 0 0 .3  0 0 0 0 .25  0 0 0 0 .2  0 0 0 .22 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>');
  o.push('</defs>');
  o.push(`<rect width="${W}" height="${H}" fill="url(#sc-sky)"/>`);
  // 遠山（兩層）
  const hills = (y0, amp, col, seed) => { let d = `M0 ${H} L0 ${y0}`; for (let x = 0; x <= W; x += 80) d += ` Q${x + 40} ${f1(y0 - amp * (.4 + Math.abs(Math.sin(x * .004 + seed))))} ${x + 80} ${f1(y0 - amp * .2 * Math.sin(x * .01 + seed))}`; return `<path d="${d} L${W} ${H} Z" fill="${col}" stroke="${ink}" stroke-opacity=".35" stroke-width="1.5"/>`; };
  o.push(hills(330, 70, spring ? '#9fae9a' : '#8e9a80', 1.3));
  o.push(hills(372, 50, spring ? '#7f9480' : '#6f7d62', 4.1));
  // 霞（浮世繪的橫向雲帶）
  const kasumi = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="#f6eedd" fill-opacity=".92" stroke="${ink}" stroke-opacity=".18" stroke-width="1"/>`;
  [[-60, 210, 640, 34], [820, 180, 520, 28], [1180, 246, 520, 32], [200, 300, 460, 26], [980, 312, 380, 24]].forEach(k => o.push(kasumi(...k)));
  // 地面與參道（透視）
  const hz = 400, vx = 1010;
  o.push(`<path d="M0 ${hz} L${W} ${hz} L${W} ${H} L0 ${H} Z" fill="${spring ? '#cdbf9e' : '#cbb58c'}" stroke="${ink}" stroke-width="1.5"/>`);
  o.push(`<path d="M${vx - 18} ${hz} L${vx + 18} ${hz} L${vx + 330} ${H} L${vx - 330} ${H} Z" fill="#a49d92" stroke="${ink}" stroke-width="2"/>`);
  for (let k = 1; k < 9; k++) { const t = Math.pow(k / 9, 1.8), y = hz + (H - hz) * t, hw = 18 + 312 * t; o.push(`<path d="M${f1(vx - hw)} ${f1(y)} L${f1(vx + hw)} ${f1(y)}" stroke="${ink}" stroke-opacity=".55" stroke-width="${f1(.8 + t * 1.6)}"/>`); }
  o.push(`<path d="M${vx} ${hz} L${vx - 110} ${H} M${vx} ${hz} L${vx + 110} ${H}" stroke="${ink}" stroke-opacity=".35" stroke-width="1.2"/>`);
  // 鳥居
  const torii = (cx, by, s) => {
    const h = 300 * s, hw = 150 * s, pw = 15 * s, red = '#c8321e';
    let g = '';
    for (const sx of [-1, 1]) g += `<path d="M${f1(cx + sx * hw * .8 - pw / 2)} ${f1(by)} L${f1(cx + sx * hw * .8 + pw / 2)} ${f1(by)} L${f1(cx + sx * hw * .74 + pw * .42)} ${f1(by - h)} L${f1(cx + sx * hw * .74 - pw * .42)} ${f1(by - h)} Z" fill="${red}" stroke="${ink}" stroke-width="2.2"/>`
      + `<rect x="${f1(cx + sx * hw * .8 - pw * .65)}" y="${f1(by - h * .07)}" width="${f1(pw * 1.3)}" height="${f1(h * .07)}" fill="${ink}"/>`;
    g += `<rect x="${f1(cx - hw * .98)}" y="${f1(by - h * .74)}" width="${f1(hw * 1.96)}" height="${f1(h * .06)}" fill="${red}" stroke="${ink}" stroke-width="2"/>`;
    g += `<rect x="${f1(cx - pw * .45)}" y="${f1(by - h * .9)}" width="${f1(pw * .9)}" height="${f1(h * .16)}" fill="${red}" stroke="${ink}" stroke-width="2"/>`;
    g += `<rect x="${f1(cx - hw * 1.06)}" y="${f1(by - h * .94)}" width="${f1(hw * 2.12)}" height="${f1(h * .06)}" fill="${red}" stroke="${ink}" stroke-width="2"/>`;
    g += `<path d="M${f1(cx - hw * 1.3)} ${f1(by - h * 1.02)} Q${f1(cx)} ${f1(by - h * .95)} ${f1(cx + hw * 1.3)} ${f1(by - h * 1.02)} L${f1(cx + hw * 1.22)} ${f1(by - h * .945)} Q${f1(cx)} ${f1(by - h * .9)} ${f1(cx - hw * 1.22)} ${f1(by - h * .945)} Z" fill="${ink}"/>`;
    return g;
  };
  // 石燈籠
  const lantern = (x, by, s) => {
    const st = `fill="#b3ada2" stroke="${ink}" stroke-width="1.6"`;
    return `<g transform="translate(${x} ${by}) scale(${s})"><rect x="-14" y="-10" width="28" height="10" ${st}/><rect x="-5" y="-58" width="10" height="48" ${st}/><rect x="-13" y="-68" width="26" height="10" ${st}/>`
      + `<rect x="-10" y="-90" width="20" height="22" ${st}/><rect x="-5" y="-86" width="10" height="12" fill="#f3c66a" stroke="${ink}" stroke-width="1"/>`
      + `<path d="M-22 -90 L22 -90 L4 -106 L-4 -106 Z" ${st}/><circle cx="0" cy="-111" r="5" ${st}/></g>`;
  };
  // 樹：墨線樹幹＋一團團色點樹冠
  const LEAF = spring ? SAKURA : MAPLE;
  const cols = spring ? ['#f7d4de', '#f2b8c9', '#fbe6ec', '#e89ab2'] : ['#b7282e', '#d0602c', '#c43a2f', '#e0a03a', '#9e2229'];
  const crown = (cx, cy, rx, ry, n, sc) => {
    let g = `<ellipse cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="${spring ? '#efc7d3' : '#8e2a1e'}" stroke="${ink}" stroke-opacity=".5" stroke-width="1.5"/>`;
    for (let i = 0; i < n; i++) { const a = rnd(0, 6.28), r = Math.sqrt(R()); g += `<path d="${LEAF}" transform="translate(${f1(cx + Math.cos(a) * rx * r)} ${f1(cy + Math.sin(a) * ry * r)}) rotate(${f1(rnd(0, 360))}) scale(${f1(sc * rnd(.8, 1.3))})" fill="${pick(cols)}"/>`; }
    return g;
  };
  const treeAt = (x, by, s, flip) => {
    const k = flip ? -1 : 1;
    let g = `<path d="M${f1(x - 10 * s)} ${by} C${f1(x - 12 * s)} ${f1(by - 120 * s)} ${f1(x + k * 30 * s)} ${f1(by - 200 * s)} ${f1(x + k * 90 * s)} ${f1(by - 260 * s)} L${f1(x + k * 100 * s)} ${f1(by - 250 * s)} C${f1(x + k * 44 * s)} ${f1(by - 190 * s)} ${f1(x + 12 * s)} ${f1(by - 120 * s)} ${f1(x + 12 * s)} ${by} Z" fill="#4a352a" stroke="${ink}" stroke-width="2"/>`;
    g += `<path d="M${f1(x + k * 20 * s)} ${f1(by - 150 * s)} Q${f1(x - k * 40 * s)} ${f1(by - 210 * s)} ${f1(x - k * 80 * s)} ${f1(by - 230 * s)}" fill="none" stroke="#4a352a" stroke-width="${f1(7 * s)}" stroke-linecap="round"/>`;
    const blobs = [[k * 90, -270, 120, 70], [-k * 70, -240, 100, 62], [k * 10, -310, 110, 64], [k * 150, -230, 80, 50]];
    blobs.forEach(([dx, dy, rx, ry]) => { g += crown(x + dx * s, by + dy * s, rx * s, ry * s, Math.round(90 * s + 30), 1.7 * s + .5); });
    return g;
  };
  // 由遠到近
  o.push(treeAt(640, hz + 6, .45, false), treeAt(1390, hz + 6, .42, true));
  o.push(torii(vx, hz + 34, .34));
  o.push(lantern(vx - 120, hz + 60, .5), lantern(vx + 120, hz + 60, .5));
  o.push(treeAt(520, hz + 90, .78, false), treeAt(1520, hz + 100, .8, true));
  o.push(torii(vx, hz + 150, .78));
  o.push(lantern(vx - 300, H - 70, .95), lantern(vx + 300, H - 70, .95));
  // 前景：右上角垂下的枝（框景）
  o.push(`<path d="M${W + 20} 40 C1450 70 1320 120 1180 150" fill="none" stroke="#4a352a" stroke-width="12" stroke-linecap="round"/><path d="M1380 90 Q1330 150 1300 200 M1260 128 Q1200 110 1150 120" fill="none" stroke="#4a352a" stroke-width="5" stroke-linecap="round"/>`);
  [[1500, 70, 120, 55], [1330, 120, 110, 52], [1210, 150, 80, 40], [1300, 205, 60, 32]].forEach(([x, y, rx, ry]) => o.push(crown(x, y, rx, ry, 110, 2.2)));
  // 地上的落葉／花瓣
  for (let i = 0; i < 260; i++) { const y = rnd(hz + 10, H), t = (y - hz) / (H - hz); o.push(`<path d="${spring ? PETAL : MAPLE}" transform="translate(${f1(rnd(0, W))} ${f1(y)}) rotate(${f1(rnd(0, 360))}) scale(${f1(.6 + t * 1.6)} ${f1((.6 + t * 1.6) * .55)})" fill="${pick(cols)}" fill-opacity=".9"/>`); }
  // 和紙紋理＋落款風印章
  o.push(`<rect width="${W}" height="${H}" filter="url(#sc-paper)" fill="#fff"/>`);
  o.push(`<g transform="translate(1540 600)"><rect x="-24" y="-56" width="48" height="56" fill="none" stroke="#b7282e" stroke-width="3"/><text x="0" y="-32" text-anchor="middle" font-family="Noto Serif JP, Noto Serif TC, serif" font-size="18" fill="#b7282e">${spring ? '春' : '秋'}</text><text x="0" y="-10" text-anchor="middle" font-family="Noto Serif JP, Noto Serif TC, serif" font-size="18" fill="#b7282e">參</text></g>`);
  return { W, H, svg: o.join('') };
}

// ---- 輸出 ----
const art = kind === 'ginkgo' ? poster() : woodblock();
const narrow = innerWidth < 640;   // 手機直向：把畫面主體（右側）留在畫面內
box.insertAdjacentHTML('afterbegin', `<svg class="scene-art" viewBox="0 0 ${art.W} ${art.H}" preserveAspectRatio="${narrow ? (kind === 'ginkgo' ? 'xMaxYMid' : 'xMidYMid') : 'xMidYMid'} slice" aria-hidden="true" focusable="false">${art.svg}</svg>`);

// ---- 少量飄落（CSS 動畫） ----
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) {
  const n = kind === 'sakura' ? 14 : 9;
  const shape = kind === 'ginkgo' ? GINKGO : kind === 'sakura' ? PETAL : MAPLE;
  const vb = kind === 'ginkgo' ? '-62 -108 124 112' : '-11 -11 22 22';
  const cols = kind === 'ginkgo' ? ['#f2c418', '#ecd06a', '#e0a10e'] : kind === 'sakura' ? ['#f7d4de', '#f2b8c9', '#fbe6ec'] : ['#b7282e', '#d0602c', '#e0a03a'];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < n; i++) {
    const el = document.createElement('span'); el.className = 'scene-fall';
    const size = kind === 'ginkgo' ? rnd(16, 30) : kind === 'sakura' ? rnd(10, 16) : rnd(14, 24);
    el.style.cssText = `left:${f1(rnd(30, 100))}%;width:${f1(size)}px;height:${f1(size)}px;animation-duration:${f1(rnd(9, 16))}s,${f1(rnd(2.6, 4.2))}s;animation-delay:-${f1(rnd(0, 16))}s,-${f1(rnd(0, 4))}s;--drift:${f1(rnd(-140, -40))}px`;
    el.innerHTML = `<svg viewBox="${vb}"><path d="${shape}" fill="${pick(cols)}"/></svg>`;
    frag.append(el);
  }
  box.append(frag);
}
hero.classList.add('has-scene');
})();
