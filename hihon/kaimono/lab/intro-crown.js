/* 片頭重製・試作 01：水冠與暈光
   目的：確認 WebGL 能做出參考圖 002 的質感（連續的發光液體、過曝的暈光），以及手機跑不跑得動。
   繪製流程（每格）：
     1. 場景：水面的環狀波光＋光點（加法混色）
     2. 液體：把水冠的每一顆「液滴球」畫成一張濃度圖，超過門檻的地方才是液體（球與球會融在一起）
     3. 暈光與合成：交給共用引擎（intro-gl.js） */
(() => {
  'use strict';

  const canvas = document.getElementById('stage');
  const e = IntroGL.create(canvas);
  if (e.error) { document.getElementById('msg').hidden = false; document.getElementById('info').textContent = e.error; return; }
  const { gl } = e;

  // 水面：落點周圍一圈圈被擾動的金色波光（用雜訊把同心環打散，才不會像靶心）
  const FS_WATER = `
    precision highp float;
    varying vec2 vUv;
    uniform vec2 uRes; uniform vec2 uImpact; uniform float uUnit; uniform float uTau; uniform float uTime; uniform float uPower;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
      return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
    }
    void main() {
      vec2 p = vec2(vUv.x, 1. - vUv.y) * uRes;
      vec2 q = (p - uImpact) / uUnit; q.y /= .24;                 // 壓扁成俯視的橢圓
      float rho = length(q);
      float ang = atan(q.y, q.x);
      vec2 dir = vec2(cos(ang), sin(ang));                       // 用方向向量取雜訊，繞一圈不會有接縫
      float n = noise(dir * 1.7 + vec2(uTime * .22, rho * 4. - uTime * .5));
      float n2 = noise(q * 7. + uTime * .3);
      float front = uTau * .55 + .12;                              // 波前隨時間往外推
      float rings = sin(rho * 40. - uTau * 10. + n * 9. + n2 * 2.5);
      rings = smoothstep(.2, 1., rings) * (.25 + .75 * n2) * (.4 + .6 * n);
      float reach = smoothstep(front, front - .22, rho) * smoothstep(.02, .12, rho);
      float fall = exp(-rho * 2.4);
      vec3 col = vec3(1., .66, .10) * rings * reach * fall * 1.7;
      col += vec3(1., .42, .04) * exp(-rho * 5.5) * .55;          // 落點附近的水面被照亮
      col += vec3(.10, .06, .16) * exp(-rho * 1.4) * .5 * (.5 + .5 * n2); // 外圍一點點冷色，襯出金色
      gl_FragColor = vec4(col * uPower, 1.);
    }`;

  // 液體：濃度超過門檻才算液體；用濃度的斜率當法線做高光與邊緣光，越厚越亮（底部白熱）
  const FS_LIQUID = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uField; uniform vec2 uTexel; uniform float uBaseY; uniform float uSpan; uniform float uPower;
    const float T0 = .2;
    void main() {
      float f = texture2D(uField, vUv).r;
      float m = smoothstep(T0, T0 + .03, f);
      float fx = texture2D(uField, vUv + vec2(uTexel.x, 0.)).r - texture2D(uField, vUv - vec2(uTexel.x, 0.)).r;
      float fy = texture2D(uField, vUv + vec2(0., uTexel.y)).r - texture2D(uField, vUv - vec2(0., uTexel.y)).r;
      vec3 nrm = normalize(vec3(-fx, -fy, .05));
      float thick = clamp((f - T0) / 1.1, 0., 1.);
      vec3 col = mix(vec3(1., .46, .02), vec3(1., .80, .08), smoothstep(0., .3, thick));
      col = mix(col, vec3(1., .93, .5), smoothstep(.55, 1., thick));
      float rim = pow(1. - nrm.z, 2.);
      col += vec3(1., .85, .35) * rim * .35;
      float spec = pow(max(dot(nrm, normalize(vec3(-.35, .55, .76))), 0.), 28.);
      col += vec3(1.) * spec * .9;
      float heat = clamp(1. - (vUv.y - uBaseY) / uSpan, 0., 1.);   // 越靠近水面越熱
      col *= .62 + 1.25 * heat * heat * heat;
      vec3 halo = vec3(1., .55, .08) * smoothstep(0., T0, f) * (1. - m) * .32; // 液體邊緣外的一圈光
      gl_FragColor = vec4((col * m + halo) * uPower, 1.);
    }`;

  let P;
  try { P = { water: e.program(FS_WATER), liquid: e.program(FS_LIQUID) }; }
  catch (err) { document.getElementById('msg').hidden = false; document.getElementById('info').textContent = `著色器編譯失敗：${err.message}`; return; }

  // 這一頁沿用的簡寫：畫布大小與單位長度每格從引擎讀取
  let W = 0; let H = 0; let U = 0;
  let field = null; // 液體的濃度圖（半解析度）
  const push = e.push;

  /* ---------- 水冠的造型（固定種子，每次播放都一樣） ---------- */
  const R = IntroGL.rng(20261112);
  const FINGERS = 13;
  const fingers = Array.from({ length: FINGERS }, (_, i) => ({
    th: (i + (R() - 0.5) * 0.55) / FINGERS * Math.PI * 2,
    h: 0.72 + R() * 0.55,        // 這根水指的高度比例
    lean: 0.18 + R() * 0.34,     // 往外傾的程度
    detach: 0.4 + R() * 0.2,     // 尖端的水珠在什麼時候脫離
    w: 0.85 + R() * 0.4,
  }));
  const WALL = 60; // 水冠牆面沿圓周取樣的數量
  const drops = Array.from({ length: 54 }, () => ({
    th: R() * Math.PI * 2, v: 0.5 + R() * 0.75, out: 0.05 + R() * 0.36, s: 0.4 + R() * 0.8, delay: R() * 0.12,
  }));
  const glitter = Array.from({ length: 150 }, () => ({
    x: (R() - 0.5), y: R(), s: 0.35 + R() * 0.9, f: 2 + R() * 7, ph: R() * 6.28, star: R() < 0.16, v: 0.04 + R() * 0.1,
  }));

  const clamp = (v) => Math.min(1, Math.max(0, v));
  const easeOut = (x) => 1 - (1 - x) ** 3;
  const easeIn = (x) => x * x;
  const SQUASH = 0.24;      // 俯視的壓扁比例
  const FLARE = 0.5;        // 水冠牆面往外張開的程度（碗狀）
  const LIFE = 2.3;         // 水冠從濺起到落回的時間（秒）
  const FALL = 0.75;        // 光流落下的時間
  const LOOP = 5.4;         // 一輪的長度

  // 水冠的高度隨時間：快速升起 → 懸停、微微下沉 → 落回
  const envelope = (u) => (u < 0.2 ? easeOut(u / 0.2) : u < 0.58 ? 1 - 0.1 * ((u - 0.2) / 0.38) : 0.9 * (1 - easeIn(clamp((u - 0.58) / 0.42))));
  const ringR = (u) => U * (0.075 + 0.085 * easeOut(clamp(u * 1.15)));
  // 圓周上某個角度的牆面高度：靠近水指的地方比較高
  function lobe(th) {
    let m = 0;
    for (const f of fingers) {
      let d = Math.abs(th - f.th) % (Math.PI * 2); if (d > Math.PI) d = Math.PI * 2 - d;
      m = Math.max(m, Math.exp(-((d / 0.17) ** 2)) * f.h);
    }
    return m;
  }

  /* ---------- 每格：把要畫的東西排進批次 ---------- */
  function emitField(cx, cy, tau) {
    const u = tau / LIFE;
    if (u <= 0 || u >= 1) return;
    const env = envelope(u);
    const rr = ringR(u);
    const Hmax = U * 0.37;
    const thin = 1 - 0.35 * clamp((u - 0.45) / 0.55); // 後段液體變薄
    const blob = (x, y, r, k) => push(x, y, r, r, k, 0, 0, 1, 1);
    // 牆面：一圈往上疊的液滴球，彼此融成連續的面
    for (let i = 0; i < WALL; i++) {
      const th = (i / WALL) * Math.PI * 2;
      const c = Math.cos(th); const s = Math.sin(th);
      const front = 0.86 + 0.14 * s; // 後半圈稍微小一點，做出前後
      const top = Hmax * env * (0.24 + 0.24 * lobe(th));
      const levels = 5;
      for (let k = 0; k < levels; k++) {
        const t = k / (levels - 1);
        const x = cx + c * rr * (1 + FLARE * t);
        const y = cy + s * rr * SQUASH * (1 + FLARE * t) - top * t;
        blob(x, y, U * (0.05 - 0.022 * t) * front * thin, 0.27);
      }
    }
    // 水指：從牆頂再往上拉長，中段變細、尖端鼓起一顆水珠，之後脫離
    for (const f of fingers) {
      const c = Math.cos(f.th); const s = Math.sin(f.th);
      const front = 0.86 + 0.14 * s;
      const base = Hmax * env * (0.24 + 0.24 * f.h);
      // 水珠脫離後，水指很快縮回牆面（不是整根瞬間消失）
      // 水珠脫離後，水指順著原本的方向慢慢縮回牆面（先慢、中段快、最後輕輕收住）
      const back = u > f.detach ? clamp((u - f.detach) / 0.24) : 0;
      const keep = envelope(clamp(u * 1.08)) * (1 - back * back * (3 - 2 * back)); // 目前長度佔全長的比例
      const len = Hmax * (0.66 * f.h) * keep;
      // 脫離前頸部收細；縮回時頸部回填，最後融成牆緣上的一顆圓珠
      const neck = 1 - 0.38 * clamp((u - f.detach + 0.1) / 0.1) * (1 - back);
      const n = 15;
      const tip = { x: 0, y: 0 };
      for (let k = 1; k <= n; k++) {
        const t = k / n;
        // 接在牆頂外緣，越往上越往外彎；外彎的幅度跟著長度一起縮，
        // 否則縮短後只剩橫向的位移，會變成往兩側戳出去的短刺
        const reach = 1 + FLARE + f.lean * keep * (t * 0.9 + t * t * 0.9);
        const x = cx + c * rr * reach;
        const y = cy + s * rr * SQUASH * reach - base - len * (t - 0.12 * t * t);
        const narrow = k < n ? (1 - 0.5 * t * (1 - 0.6 * back)) * (0.45 + 0.55 * neck) : 1.3; // 最後一顆是尖端鼓起的水珠；縮回時尖端不再變細
        if (k === n) { tip.x = x; tip.y = y; }
        if (k < n || u <= f.detach) blob(x, y, U * 0.046 * f.w * narrow * front * thin * (1 - 0.5 * back), 0.32); // 縮回後逐漸融進牆緣，不留一顆大圓球
      }
      if (u > f.detach) { // 脫離的水珠：先慣性往上，再落下
        const dt = (u - f.detach) * LIFE;
        // 起點固定在「脫離那一刻」的尖端，不跟著縮回的水指被往下拖
        const ud = f.detach; const rd = ringR(ud);
        const reachD = 1 + FLARE + f.lean * envelope(clamp(ud * 1.08)) * 1.8;
        const x0 = cx + c * rd * reachD;
        const y0 = cy + s * rd * SQUASH * reachD - Hmax * envelope(ud) * (0.24 + 0.24 * f.h) - Hmax * (0.66 * f.h) * envelope(clamp(ud * 1.08)) * 0.88;
        const x = x0 + c * U * 0.05 * dt;
        const y = y0 - U * 0.1 * dt + U * 0.42 * dt * dt;
        if (y < cy + s * rr * SQUASH) blob(x, y, U * 0.036 * f.w * front, 0.36);
      }
    }
    // 飛濺的小水珠
    for (const d of drops) {
      const t = tau - d.delay; if (t <= 0) continue;
      const x = cx + Math.cos(d.th) * (rr * 0.9 + U * d.out * t);
      const y = cy + Math.sin(d.th) * rr * SQUASH - U * d.v * t + U * 0.62 * t * t;
      if (y > cy + U * 0.02) continue;
      blob(x, y, U * 0.02 * d.s, 0.36);
    }
    // 落點中央湧起的一團
    blob(cx, cy - Hmax * 0.04 * env, U * 0.085 * env, 0.34);
  }

  function emitGlow(cx, cy, t, tau, time) {
    const u = tau / LIFE;
    // 落下的光流：一顆亮頭加一串尾巴
    if (t < FALL) {
      const k = easeIn(t / FALL);
      const hy = -U * 0.05 + (cy + U * 0.05) * k;
      for (let i = 0; i < 26; i++) {
        const y = hy - i * U * 0.022 * (0.4 + k); if (y < -40) break;
        const sway = Math.sin(y * 0.02 + i) * U * 0.006;
        push(cx + sway, y, U * (0.03 - i * 0.0009), U * (0.03 - i * 0.0009), 1, i ? 0.72 : 0.95, i ? 0.18 : 0.7, (1 - i / 26) * 1.6, 0);
      }
    }
    if (tau > 0) {
      const env = u < 1 ? envelope(u) : 0;
      const fade = clamp(1 - (tau - LIFE * 0.85) / 1.6);
      // 撞擊的一瞬間
      const hit = Math.exp(-((tau / 0.09) ** 2));
      push(cx, cy, U * 0.5 * hit + 1, U * 0.5 * hit + 1, 1, 0.85, 0.5, hit * 3.5, 0);
      // 底部白熱的一攤光，以及往上照亮液體的柔光
      const pool = (0.35 + 0.65 * env) * fade;
      push(cx, cy, U * 0.24, U * 0.058, 1, 0.9, 0.55, 1.5 * pool, 0);
      push(cx, cy, U * 0.42, U * 0.1, 1, 0.55, 0.08, 0.8 * pool, 0);
      push(cx, cy - U * 0.1, U * 0.3, U * 0.3, 1, 0.6, 0.1, 0.5 * env, 0);
      // 幾圈往外推的細漣漪
      for (let i = 0; i < 5; i++) {
        const age = tau - i * 0.22; if (age <= 0) continue;
        const r = U * (0.1 + age * 0.2);
        push(cx, cy, r, r * SQUASH, 1, 0.74, 0.2, clamp(1 - age / 2.6) * 0.9, 2);
      }
      // 水冠上方的金粉：往上飄、閃爍，少數是十字閃光
      for (const g of glitter) {
        const rise = (g.y + tau * g.v) % 1;
        const x = cx + g.x * U * (0.22 + 0.5 * rise);
        const y = cy - U * (0.12 + rise * 0.78);
        const tw = 0.5 + 0.5 * Math.sin(time * g.f + g.ph);
        const a = clamp(tau / 0.5) * fade * (1 - rise) * (0.25 + 0.75 * tw) * 1.5;
        const s = U * 0.008 * g.s * (g.star ? 3.2 : 1);
        push(x, y, s, s, 1, 0.82, 0.32, a, g.star ? 3 : 0);
      }
    }
  }

  /* ---------- 繪製 ---------- */
  function render(t, time) {
    if (W !== e.W || H !== e.H) { // 畫布大小變了：重建濃度圖
      W = e.W; H = e.H; U = e.U;
      e.drop(field);
      field = e.target(Math.ceil(W / 2), Math.ceil(H / 2));
    }
    const cx = W / 2; const cy = H * 0.74;
    const tau = t - FALL;

    // 1. 場景：水面＋光點
    e.begin();
    gl.useProgram(P.water.p);
    gl.uniform2f(P.water.u.uRes, W, H); gl.uniform2f(P.water.u.uImpact, cx, cy);
    gl.uniform1f(P.water.u.uUnit, U); gl.uniform1f(P.water.u.uTau, Math.max(0, tau)); gl.uniform1f(P.water.u.uTime, time);
    gl.uniform1f(P.water.u.uPower, tau > 0 ? clamp(tau / 0.25) * clamp(1 - (tau - LIFE) / 2) : 0);
    e.fullscreen(P.water);
    e.additive(true);
    emitGlow(cx, cy, t, tau, time);
    e.flush();

    // 2. 液體：先畫濃度圖，再依門檻轉成液體疊到場景上
    gl.bindFramebuffer(gl.FRAMEBUFFER, field.fbo); gl.viewport(0, 0, field.w, field.h);
    gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
    emitField(cx, cy, tau);
    e.flush();
    e.toScene();
    gl.useProgram(P.liquid.p);
    e.bindTex(0, field.tex, P.liquid.u.uField);
    gl.uniform2f(P.liquid.u.uTexel, 1 / field.w, 1 / field.h);
    gl.uniform1f(P.liquid.u.uBaseY, 1 - cy / H); gl.uniform1f(P.liquid.u.uSpan, (U * 0.42) / H);
    gl.uniform1f(P.liquid.u.uPower, 1.15);
    e.fullscreen(P.liquid);

    // 3. 暈光與合成
    e.finish({ bloom: 0.5, exposure: 1 });
  }

  IntroGL.player(e, { loop: LOOP, still: FALL + LIFE * 0.3, render });
})();
