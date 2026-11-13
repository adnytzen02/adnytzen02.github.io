// 首頁片頭（WebGL 版）：螺旋光流 → 觸水星芒 → 水冠 → 低拱光環、火焰光帶與散景爆開 → 金色的海
// 各個鏡頭先在 lab/ 的試作頁做好（intro-stream／crown／burst／sea），這裡把它們接成一條時間軸。
// 對外的介面和 home.js 裡原本的 2D 版 scene() 一樣（toggle／finish／restart／tap／destroy），
// 裝置不支援 WebGL 時回傳 null，由 home.js 改用 2D 版。
//
// 繪製流程（每格）：
//   1. 預先畫兩張小圖：水冠的液體濃度圖、火焰光帶（都是半解析度）
//   2. 場景：海與水面（整張畫面的著色器）＋所有光點（加法混色）＋液體＋彩虹拱
//   3. 暈光：把場景縮小、模糊成四層疊回去，亮的地方會往外溢
//   4. 合成：曝光壓縮（亮到一定程度變白）、暗角、抖色

const LAND_Y = 0.74; // 光流落下的位置（畫面高度的比例）：在地平線下方的水面上
// 時間軸（秒）
const TL = {
  crown: 1.72,   // 水冠開始升起（光流在 1.6 秒觸水）
  burst: 3.3,    // 星芒開始蓄力，0.9 秒後爆開
  sea: 4.6,      // 金色的海開始浮現
  start: 1.6, span: 5.875, // 換算成 home.js 用的進度 p：p = (秒 - start) / span；標題在 p = 0.8（約 6.3 秒）開始浮出
  settle: 9.5,   // 之後只剩金色的海，改成每秒約 30 格以省電
};
// 畫質等級：解析度上限、光點數量比例。持續掉格就降一級（只降不升）
const LEVELS = [{ dpr: 1.5, q: 1 }, { dpr: 1.15, q: 0.7 }, { dpr: 0.85, q: 0.45 }];

// 固定種子的亂數：每次播放的造型都一樣
function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/* ================= 繪圖引擎 ================= */
const VS_QUAD = `
  attribute vec2 aPos;
  varying vec2 vUv;
  void main() { vUv = aPos * .5 + .5; gl_Position = vec4(aPos, 0., 1.); }`;

// 光點：每個光點是一張方形面片（可旋轉），形狀在片段著色器裡用數學算出來
const VS_SPRITE = `
  attribute vec2 aCenter; attribute vec2 aCorner; attribute vec2 aSize; attribute vec4 aColor; attribute vec2 aKind;
  uniform vec2 uRes;
  varying vec2 vUv; varying vec4 vColor; varying float vKind; varying float vParam;
  void main() {
    float rot = aKind.x > 5.5 ? 0. : aKind.y;   // 彩虹環不旋轉，第二個數值改當作環的粗細
    float c = cos(rot), s = sin(rot);
    vParam = aKind.y;
    vec2 o = aCorner * aSize;
    vec2 p = aCenter + vec2(o.x * c - o.y * s, o.x * s + o.y * c);
    vUv = aCorner; vColor = aColor; vKind = aKind.x;
    gl_Position = vec4(p.x / uRes.x * 2. - 1., 1. - p.y / uRes.y * 2., 0., 1.);
  }`;
const FS_SPRITE = `
  precision mediump float;
  varying vec2 vUv; varying vec4 vColor; varying float vKind; varying float vParam;
  void main() {
    float d = length(vUv);
    float a = 0.;
    vec3 tint = vec3(1.);
    if (vKind < .5) {            // 0 柔光：外圍柔、中心有一個亮核
      float g = max(0., 1. - d); a = g * g * g + .7 * pow(g, 12.);
    } else if (vKind < 1.5) {    // 1 液滴球（畫進濃度圖）
      float g = max(0., 1. - d * d); a = g * g * g;
    } else if (vKind < 2.5) {    // 2 漣漪：橢圓形的細環
      a = smoothstep(.09, 0., abs(d - .86)) * step(d, 1.);
    } else if (vKind < 3.5) {    // 3 十字閃光
      vec2 q = abs(vUv);
      float g = max(0., 1. - d);
      a = pow(max(0., 1. - q.x), 8.) * pow(max(0., 1. - q.y * 10.), 2.)
        + pow(max(0., 1. - q.y), 8.) * pow(max(0., 1. - q.x * 10.), 2.) + g * g * g * .6;
    } else if (vKind < 4.5) {    // 4 散景：平整的圓盤，邊緣一圈略亮（失焦的光斑）
      a = smoothstep(1., .82, d) * (.78 + .22 * smoothstep(.5, .9, d));
    } else if (vKind < 5.5) {    // 5 光束：沿著長邊兩端淡出、短邊很細
      float lx = max(0., 1. - abs(vUv.x));
      a = lx * lx * exp(-vUv.y * vUv.y * 5.);
    } else {                     // 6 彩虹環：一圈細環，vParam 是環的半寬（相對於面片大小），中線在 1 - vParam
      float w = max(vParam, .002);
      float t = (d - (1. - w)) / w;                               // -1 內緣 ～ 1 外緣
      float band = smoothstep(1., .35, abs(t)) * step(d, 1.);
      // 真正的彩虹順序：內緣紫 → 藍 → 青 → 綠 → 黃 → 橘 → 外緣紅；中線是一條白熱的亮線
      float hue = mix(.78, 0., clamp(t * .68 + .5, 0., 1.));         // 稍微往中間收，外緣的橘紅才看得到
      vec3 rgb = clamp(abs(fract(hue + vec3(0., .6667, .3333)) * 6. - 3.) - 1., 0., 1.);
      tint = mix(rgb, vec3(1., .97, .9), .1 + .5 * smoothstep(.28, 0., abs(t)));
      a = band;
    }
    gl_FragColor = vec4(vColor.rgb * tint * (a * vColor.a), 1.);
  }`;

// 暈光的第一步：只留下夠亮的部分
const FS_PREFILTER = `
  precision mediump float;
  varying vec2 vUv; uniform sampler2D uTex;
  void main() {
    vec3 c = texture2D(uTex, vUv).rgb;
    float b = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(.25, .9, b), 1.);
  }`;
// 九點高斯模糊（橫、直各一次）；方向給 0 時等於單純縮小
const FS_BLUR = `
  precision mediump float;
  varying vec2 vUv; uniform sampler2D uTex; uniform vec2 uDir;
  void main() {
    vec3 c = texture2D(uTex, vUv).rgb * .2270270;
    c += (texture2D(uTex, vUv + uDir * 1.3846154).rgb + texture2D(uTex, vUv - uDir * 1.3846154).rgb) * .3162162;
    c += (texture2D(uTex, vUv + uDir * 3.2307692).rgb + texture2D(uTex, vUv - uDir * 3.2307692).rgb) * .0702703;
    gl_FragColor = vec4(c, 1.);
  }`;
// 合成：場景＋四層暈光 → 曝光壓縮（亮到一定程度變白）→ 暗角 → 抖色（避免暗部出現色階）
const FS_COMPOSITE = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uScene, uB0, uB1, uB2, uB3; uniform float uBloom; uniform float uExposure;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main() {
    vec3 c = texture2D(uScene, vUv).rgb;
    vec3 b = texture2D(uB0, vUv).rgb * .55 + texture2D(uB1, vUv).rgb * .8 + texture2D(uB2, vUv).rgb + texture2D(uB3, vUv).rgb * 1.2;
    c += b * uBloom;
    c = 1. - exp(-c * uExposure);
    vec2 v = vUv - .5;
    c *= 1. - dot(v, v) * .55;
    c += (hash(gl_FragCoord.xy) - .5) / 255.;
    gl_FragColor = vec4(c, 1.);
  }`;


// 建立引擎；裝置不支援或著色器編譯失敗時回傳 { error }
function createEngine(canvas) {
  const opts = { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'high-performance' };
  let gl = canvas.getContext('webgl2', opts);
  const gl2 = Boolean(gl);
  if (!gl) gl = canvas.getContext('webgl', opts);
  if (!gl) return { error: '無法使用 WebGL' };

  function program(fs, vs = VS_QUAD) {
    const make = (type, src) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    };
    const p = gl.createProgram();
    gl.attachShader(p, make(gl.VERTEX_SHADER, vs)); gl.attachShader(p, make(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    const u = {};
    const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) { const name = gl.getActiveUniform(p, i).name; u[name] = gl.getUniformLocation(p, name); }
    return { p, u };
  }

  let P;
  try {
    P = { sprite: program(FS_SPRITE, VS_SPRITE), pre: program(FS_PREFILTER), blur: program(FS_BLUR), comp: program(FS_COMPOSITE) };
  } catch (err) { return { error: `著色器編譯失敗：${err.message}` }; }

  // 高動態範圍的離屏畫面
  let hdr = null;
  if (gl2) {
    if (gl.getExtension('EXT_color_buffer_float') || gl.getExtension('EXT_color_buffer_half_float')) hdr = { internal: gl.RGBA16F, type: gl.HALF_FLOAT };
  } else {
    const hf = gl.getExtension('OES_texture_half_float');
    if (hf && gl.getExtension('OES_texture_half_float_linear') && gl.getExtension('EXT_color_buffer_half_float')) hdr = { internal: gl.RGBA, type: hf.HALF_FLOAT_OES };
  }
  function target(w, h) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    const fmt = hdr || { internal: gl.RGBA, type: gl.UNSIGNED_BYTE };
    gl.texImage2D(gl.TEXTURE_2D, 0, fmt.internal, w, h, 0, gl.RGBA, fmt.type, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    return { tex, fbo, w, h, ok: gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE };
  }
  const drop = (t) => { if (t) { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fbo); } };
  if (hdr && !target(4, 4).ok) hdr = null; // 宣稱支援但實際畫不進去的裝置，退回一般精度

  const quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

  /* 光點批次 */
  const STRIDE = 12; // 中心 xy、角落 xy、大小 xy、顏色 rgba、種類、旋轉
  const MAX = 6000;
  const data = new Float32Array(MAX * 6 * STRIDE);
  const vbuf = gl.createBuffer();
  const CORNERS = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
  let count = 0;

  const e = {
    gl, gl2, hdr: Boolean(hdr), P, W: 0, H: 0, U: 0, scene: null, bloom: [], bloomOn: true, maxDpr: 1.5,
    program, target, drop,
    // 排進一個光點：位置、半寬半高、顏色與強度、種類（見 FS_SPRITE）、旋轉角度（彩虹環則是環的半寬比例）
    push(x, y, sx, sy, r, g, b, a, kind, rot = 0) {
      if (count >= MAX || a <= 0.002) return;
      let o = count * 6 * STRIDE;
      for (let i = 0; i < 6; i++) {
        data[o++] = x; data[o++] = y; data[o++] = CORNERS[i * 2]; data[o++] = CORNERS[i * 2 + 1];
        data[o++] = sx; data[o++] = sy; data[o++] = r; data[o++] = g; data[o++] = b; data[o++] = a; data[o++] = kind; data[o++] = rot;
      }
      count += 1;
    },
    // 把排好的光點畫到目前的畫面上（w、h 是座標系的大小，通常就是畫布大小）
    flush(w = e.W, h = e.H) {
      if (!count) return;
      const { p, u } = P.sprite;
      gl.useProgram(p);
      gl.uniform2f(u.uRes, w, h);
      gl.bindBuffer(gl.ARRAY_BUFFER, vbuf);
      gl.bufferData(gl.ARRAY_BUFFER, data.subarray(0, count * 6 * STRIDE), gl.DYNAMIC_DRAW);
      const B = 4 * STRIDE;
      const at = (name, size, off) => {
        const loc = gl.getAttribLocation(p, name);
        gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, size, gl.FLOAT, false, B, off * 4);
      };
      at('aCenter', 2, 0); at('aCorner', 2, 2); at('aSize', 2, 4); at('aColor', 4, 6); at('aKind', 2, 10);
      gl.drawArrays(gl.TRIANGLES, 0, count * 6);
      count = 0;
    },
    fullscreen(prog) {
      gl.useProgram(prog.p);
      gl.bindBuffer(gl.ARRAY_BUFFER, quad);
      const loc = gl.getAttribLocation(prog.p, 'aPos');
      gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    },
    bindTex(unit, tex, loc) { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, tex); gl.uniform1i(loc, unit); },
    additive(on) { if (on) { gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); } else gl.disable(gl.BLEND); },
    // 畫布大小改變時重建離屏畫面；有改變回傳 true
    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, e.maxDpr);
      const w = Math.max(2, Math.round(canvas.clientWidth * dpr)); const h = Math.max(2, Math.round(canvas.clientHeight * dpr));
      if (w === e.W && h === e.H) return false;
      if (canvas.clientWidth < 2 || canvas.clientHeight < 2) return false; // 還沒排版好
      e.W = w; e.H = h; e.U = Math.min(w, h);
      canvas.width = w; canvas.height = h;
      drop(e.scene); e.bloom.forEach((lv) => { drop(lv.a); drop(lv.b); });
      e.scene = target(w, h);
      e.bloom = [2, 4, 8, 16].map((d) => {
        const bw = Math.max(2, Math.ceil(w / d)); const bh = Math.max(2, Math.ceil(h / d));
        return { a: target(bw, bh), b: target(bw, bh) };
      });
      return true;
    },
    // 開始畫一格：切到場景畫面並清成黑色
    begin() {
      gl.disable(gl.DEPTH_TEST);
      e.toScene();
      gl.disable(gl.BLEND);
      gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
    },
    toScene() { gl.bindFramebuffer(gl.FRAMEBUFFER, e.scene.fbo); gl.viewport(0, 0, e.W, e.H); },
    // 結束一格：做暈光並合成到螢幕
    finish({ bloom = 0.5, exposure = 1 } = {}) {
      gl.disable(gl.BLEND);
      let src = e.scene;
      e.bloom.forEach((lv, i) => {
        gl.bindFramebuffer(gl.FRAMEBUFFER, lv.a.fbo); gl.viewport(0, 0, lv.a.w, lv.a.h);
        const first = i === 0 ? P.pre : P.blur;
        gl.useProgram(first.p);
        e.bindTex(0, src.tex, first.u.uTex);
        if (i > 0) gl.uniform2f(first.u.uDir, 0, 0);
        e.fullscreen(first);
        for (let pass = 0; pass < 2; pass++) { // 橫、直各模糊一次
          const from = pass ? lv.b : lv.a; const to = pass ? lv.a : lv.b;
          gl.bindFramebuffer(gl.FRAMEBUFFER, to.fbo);
          gl.useProgram(P.blur.p);
          e.bindTex(0, from.tex, P.blur.u.uTex);
          gl.uniform2f(P.blur.u.uDir, pass ? 0 : 1 / lv.a.w, pass ? 1 / lv.a.h : 0);
          e.fullscreen(P.blur);
        }
        src = lv.a;
      });
      gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, e.W, e.H);
      gl.useProgram(P.comp.p);
      e.bindTex(0, e.scene.tex, P.comp.u.uScene);
      e.bloom.forEach((lv, i) => e.bindTex(i + 1, lv.a.tex, P.comp.u[`uB${i}`]));
      gl.uniform1f(P.comp.u.uBloom, e.bloomOn ? bloom : 0);
      gl.uniform1f(P.comp.u.uExposure, exposure);
      e.fullscreen(P.comp);
    },
  };
  return e;
}


/* ================= 鏡頭一：螺旋光流與星芒 ================= */
function makeStream(e) {
  const push = e.push;
  const R = rng(20261114);
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const easeOut = (x) => 1 - (1 - x) ** 3;
  const easeInOut = (x) => (x < 0.5 ? 2 * x * x : 1 - ((-2 * x + 2) ** 2) / 2);
  const TAU = Math.PI * 2;
  const FALL = 1.6;    // 光流落到水面的時間
  const LOOP = 6.2;

  const GOLD = [1, 0.76, 0.16]; const AMBER = [1, 0.5, 0.06]; const PALE = [1, 0.9, 0.55]; const WHITE = [1, 0.97, 0.88]; const COOL = [0.7, 0.8, 1];

  const STRANDS = 3;   // 幾股光帶
  const SEG = 64;      // 每股切成幾節
  // 金粉：沿著光流分布，越靠近中軸越密；各自往下流、繞著中軸轉、閃爍
  const glitter = Array.from({ length: 760 }, () => ({
    s: R(), rf: R() ** 1.6, ph: R() * TAU, spin: (R() - 0.5) * 3, v: 0.12 + R() * 0.3,
    size: 0.0024 + R() ** 2 * 0.007, f: 3 + R() * 9, tp: R() * TAU, star: R() < 0.13, c: R() < 0.12 ? WHITE : R() < 0.6 ? PALE : GOLD,
  }));
  const rays = Array.from({ length: 84 }, () => ({ ang: R() * TAU, len: 0.12 + R() ** 1.8 * 0.75, w: 0.0012 + R() * 0.0026, a: 0.3 + R() * 0.7, c: R() < 0.3 ? COOL : R() < 0.7 ? WHITE : PALE, off: 0.03 + R() * 0.1, f: 1 + R() * 3, ph: R() * TAU }));
  const stars = Array.from({ length: 16 }, () => ({ x: R(), y: R() * 0.9, s: 0.002 + R() * 0.004, rot: R() * Math.PI, f: 0.4 + R(), ph: R() * TAU }));

  // 光流在高度 s（0＝尖端，1＝最上面）的半徑：尖端收成一點，往上張開，帶一點起伏
  const radiusAt = (s, U, time) => U * (0.003 + 0.125 * s ** 0.8) * (1 + 0.2 * Math.sin(s * 7 - time * 1.6));

  return {
    emit(t, time) {
      const { W, H, U } = e;
      const cx = W / 2; const cy = H * LAND_Y;
    const tau = t - FALL;                                   // 觸水後經過的時間
    const fallK = easeInOut(clamp(t / FALL));
    const tipY = -H * 0.08 + (cy + H * 0.08) * fallK;       // 尖端的位置
    const L = Math.max(H * 0.9, tipY + H * 0.25);           // 光流往上延伸到畫面外
    const out = clamp(1 - (tau - 2.2) / 0.6);               // 散景爆開時光流淡出
    // 星芒的強度：觸水後綻開、停一下、收斂成小光點
    const flare = tau <= 0 ? 0 : (tau < 0.55 ? easeOut(tau / 0.55) : 1 - 0.78 * clamp((tau - 0.9) / 1.3)) * out;
    const tipStar = (0.25 + 0.75 * fallK) * (tau > 0 ? clamp(1 - tau / 0.4) : 1); // 落下途中尖端的十字星
    // 背景：幾顆緩慢閃爍的小星（斜斜的小橢圓）
    for (const st of stars) {
      const tw = 0.35 + 0.65 * Math.sin(time * st.f + st.ph) ** 2;
      push(st.x * W, st.y * H, U * st.s * 2.2, U * st.s, ...PALE, 0.9 * tw, 0, st.rot);
    }
    // 水面：落點下方一抹很淡的冷色反光（009）
    const near = clamp((fallK - 0.6) / 0.4);
    push(cx, cy + U * 0.03, U * 0.75, U * 0.05, 0.4, 0.3, 0.75, 0.22 * near * out, 0);
    push(cx, cy + U * 0.012, U * 0.3, U * 0.02, ...AMBER, 0.5 * near * out, 0);

    // 光流：三股光帶繞著中軸纏繞。前面的亮、後面的暗，才有立體的螺旋感
    const twist = 1.7;                                      // 整條光流繞幾圈
    for (let k = 0; k < STRANDS; k++) {
      let px = 0; let py = 0;
      for (let j = 0; j <= SEG; j++) {
        const s = j / SEG;
        const y = tipY - s * L;
        const phase = s * twist * TAU + time * 2.2 + (k / STRANDS) * TAU;
        const x = cx + Math.sin(phase) * radiusAt(s, U, time);
        if (j && y < H + 20 && py > -20) {
          const depth = 0.5 + 0.5 * Math.cos(phase);         // 1＝在前面
          const dx = x - px; const dy = y - py; const seg = Math.hypot(dx, dy);
          const a = (0.3 + 0.9 * depth) * clamp(s * 14) * (1 - 0.4 * s) * out;
          push((x + px) / 2, (y + py) / 2, seg * 1.5, U * (0.002 + 0.0032 * depth), ...PALE, a, 5, Math.atan2(dy, dx));
        }
        px = x; py = y;
      }
    }
    // 金粉
    for (const g of glitter) {
      const s = (((g.s - time * g.v) % 1) + 1) % 1;          // 往下流，流到尖端就回到上面
      const y = tipY - s * L;
      if (y < -10 || y > H + 10) continue;
      const rad = radiusAt(s, U, time) * (0.15 + 1.05 * g.rf);
      const x = cx + Math.sin(g.ph + time * g.spin + s * 7) * rad;
      const tw = 0.3 + 0.7 * Math.sin(time * g.f + g.tp) ** 2;
      const size = U * g.size * (g.star ? 4.2 : 1) * (0.7 + 0.6 * s);
      push(x, y, size, size, ...g.c, (g.star ? 2 : 1.7) * tw * clamp(s * 10) * out, g.star ? 3 : 0);
    }

    // 尖端的十字星（落下途中）：橫的長、直的短，外面一圈琥珀色的暖光（010）
    if (tipStar > 0.01) {
      push(cx, tipY, U * 0.28, U * 0.2, ...AMBER, 0.35 * tipStar, 0);
      push(cx, tipY, U * 0.2, U * 0.0045, ...GOLD, 2.2 * tipStar, 5);
      push(cx, tipY, U * 0.075, U * 0.004, ...GOLD, 2 * tipStar, 5, Math.PI / 2);
      push(cx, tipY, U * 0.03, U * 0.03, ...WHITE, 2.6 * tipStar, 0);
    }

    // 星芒（觸水後）
    if (flare > 0.01) {
      const grow = 0.35 + 0.65 * flare;
      // 放射細線：不從正中心出發（留一點空隙），長短粗細不一，偏白與冷色
      for (const r of rays) {
        const tw = 0.6 + 0.4 * Math.sin(time * r.f + r.ph);
        const len = U * r.len * grow; const off = U * r.off;
        const c = Math.cos(r.ang); const s = Math.sin(r.ang);
        push(cx + c * (off + len / 2), cy + s * (off + len / 2), len / 2, U * r.w, ...r.c, r.a * tw * flare * 1.1, 5, r.ang);
      }
      // 十字光束：橫的很長、直的較短，各有一條白熱的細芯
      push(cx, cy, W * 0.36 * grow, U * 0.012, ...GOLD, 1.3 * flare, 5);
      push(cx, cy, W * 0.46 * grow, U * 0.0035, ...WHITE, 3 * flare, 5);
      push(cx, cy, H * 0.3 * grow, U * 0.01, ...GOLD, 1.1 * flare, 5, Math.PI / 2);
      push(cx, cy, H * 0.38 * grow, U * 0.003, ...WHITE, 2.4 * flare, 5, Math.PI / 2);
      // 核心
      push(cx, cy, U * 0.42, U * 0.42, ...AMBER, 0.42 * flare, 0);
      push(cx, cy, U * 0.16, U * 0.16, ...GOLD, 1.6 * flare, 0);
      push(cx, cy, U * 0.06, U * 0.06, ...WHITE, 5 * flare, 0);
      // 兩側的弧光：幾段短弧，像鏡頭裡的反光（008）
      for (const [rad, span, a] of [[0.19, 0.42, 0.7], [0.215, 0.26, 0.4]]) {
        for (const side of [0, Math.PI]) {
          const N = 9;
          for (let j = 0; j < N; j++) {
            const u = j / (N - 1);
            const ang = side + (u - 0.5) * span * 2;
            const r = U * rad * (0.8 + 0.2 * flare);
            push(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, (r * span * 2) / N, U * 0.0022, ...PALE, a * flare * Math.sin(Math.PI * u), 5, ang + Math.PI / 2);
          }
        }
      }
    }
    },
  };
}

/* ================= 鏡頭二：水冠 ================= */
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


function makeCrown(e) {
  const { gl } = e;
  const push = e.push;
  const P = { water: e.program(FS_WATER), liquid: e.program(FS_LIQUID) };
  let W = 0; let H = 0; let U = 0;
  let field = null; // 液體的濃度圖（半解析度）

  /* ---------- 水冠的造型（固定種子，每次播放都一樣） ---------- */
  const R = rng(20261112);
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

  let cx = 0; let cy = 0; let tau = 0; let wet = 0;
  return {
    // t：水冠開始後經過的秒數
    pre(t) {
      if (W !== e.W || H !== e.H) { W = e.W; H = e.H; U = e.U; e.drop(field); field = e.target(Math.ceil(W / 2), Math.ceil(H / 2)); }
      cx = W / 2; cy = H * LAND_Y; tau = t;
      wet = clamp(tau / 0.25) * clamp(1 - (tau - LIFE) / 2); // 水面波光的強度
      if (tau >= LIFE) return;
      gl.bindFramebuffer(gl.FRAMEBUFFER, field.fbo); gl.viewport(0, 0, field.w, field.h);
      gl.disable(gl.BLEND); gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
      e.additive(true);
      emitField(cx, cy, tau);
      e.flush();
    },
    bg(time) {
      if (wet <= 0) return;
      gl.useProgram(P.water.p);
      gl.uniform2f(P.water.u.uRes, W, H); gl.uniform2f(P.water.u.uImpact, cx, cy);
      gl.uniform1f(P.water.u.uUnit, U); gl.uniform1f(P.water.u.uTau, tau); gl.uniform1f(P.water.u.uTime, time);
      gl.uniform1f(P.water.u.uPower, wet);
      e.fullscreen(P.water);
    },
    emit(time) { emitGlow(cx, cy, FALL + tau, tau, time); },
    post() {
      if (tau >= LIFE) return;
      gl.useProgram(P.liquid.p);
      e.bindTex(0, field.tex, P.liquid.u.uField);
      gl.uniform2f(P.liquid.u.uTexel, 1 / field.w, 1 / field.h);
      gl.uniform1f(P.liquid.u.uBaseY, 1 - cy / H); gl.uniform1f(P.liquid.u.uSpan, (U * 0.42) / H);
      gl.uniform1f(P.liquid.u.uPower, 1.15);
      e.fullscreen(P.liquid);
    },
    end: LIFE + 2, // 水面波光完全淡掉的時間
  };
}

/* ================= 鏡頭三：星芒爆開、彩虹拱、火焰光帶、散景 ================= */
const FS_FLAME = `
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uRes; uniform vec2 uCenter; uniform float uUnit; uniform float uTime; uniform float uPower; uniform float uReach;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0., a = .5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 17.3; a *= .5; }
    return v;
  }
  void main() {
    vec2 p = (vec2(vUv.x, 1. - vUv.y) * uRes - uCenter) / uUnit;
    float up = -p.y;                                   // 地面以上才有
    if (up <= 0.) { gl_FragColor = vec4(0., 0., 0., 1.); return; }
    float rad = length(p);
    float ang = atan(p.x, up);                         // 0＝正上方，±90 度＝貼著地面
    float side = abs(ang) / 1.5708;
    float warp = fbm(vec2(ang * 1.6, rad * 1.4 - uTime * .3));
    // 兩層粗細不同的絲：圓周方向的變化慢、半徑方向的變化快，所以是繞著中心的長絲，不是一團一團的雲
    float n1 = fbm(vec2(ang * 1.4 + warp * .9 + uTime * .12 * sign(p.x), rad * 13. - uTime * 1.7 + warp * 3.5));
    float n2 = fbm(vec2(ang * 2.3 - warp + 5., rad * 25. - uTime * 2.4));
    float fil = pow(1. - abs(2. * n1 - 1.), 5.) * 1.25 + pow(1. - abs(2. * n2 - 1.), 7.) * .65;
    float body = smoothstep(.35, .8, fbm(vec2(ang * 1.3 + 9., rad * 2.4 - uTime * .5)));   // 哪裡濃、哪裡淡
    float lobes = smoothstep(.16, .7, side) * (1. - .55 * smoothstep(.9, 1., side));         // 兩側最濃，正上方留空
    float radial = smoothstep(.1, .28, rad) * smoothstep(uReach, uReach * .4, rad);
    float v = fil * (.3 + 1.1 * body) * lobes * radial;
    vec3 col = mix(vec3(1., .40, .04), vec3(1., .76, .14), smoothstep(.08, .55, v));
    col = mix(col, vec3(1., .95, .68), smoothstep(.6, 1.15, v));
    gl_FragColor = vec4(col * v * uPower, 1.);
  }`;

function makeBurst(e) {
  const { gl } = e;
  const push = e.push;
  const P_FLAME = e.program(FS_FLAME);
  let flameT = null; let fw = 0; let fh = 0;
  const R = rng(20261113);
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const easeOut = (x) => 1 - (1 - x) ** 3;
  const easeIn = (x) => x * x;
  const TAU = Math.PI * 2;
  const BUILD = 0.9;   // 蓄力多久後爆開
  const LOOP = 5.6;

  // 顏色：金、琥珀、淡金、近白，以及少量偏藍的冷光（襯出金色）
  const GOLD = [1, 0.76, 0.14]; const AMBER = [1, 0.5, 0.06]; const PALE = [1, 0.88, 0.42]; const WHITE = [1, 0.97, 0.88]; const COOL = [0.55, 0.72, 1];
  const pick = () => { const r = R(); return r < 0.05 ? WHITE : r < 0.3 ? PALE : r < 0.75 ? GOLD : AMBER; };

  const rays = Array.from({ length: 70 }, () => ({ ang: R() * Math.PI, len: 0.22 + R() ** 1.6 * 0.95, w: 0.0025 + R() * 0.005, a: 0.35 + R() * 0.65, c: R() < 0.2 ? COOL : PALE, f: 1 + R() * 3, ph: R() * TAU }));
  const bokeh = Array.from({ length: 620 }, () => {
    const s = 0.008 + R() ** 2.2 * 0.07;
    return { ang: R() * TAU, dist: 0.04 + R() ** 1.35 * 1.05, s, delay: R() * 0.35, c: pick(), a: 1.7 - s * 14, drift: (R() - 0.5) * 0.05, lift: R() * 0.05, f: 0.5 + R() * 2, ph: R() * TAU };
  });
  const dust = Array.from({ length: 340 }, () => ({ ang: R() * TAU, dist: 0.2 + R() * 1.25, s: 0.003 + R() * 0.006, delay: R() * 0.25, c: R() < 0.5 ? PALE : GOLD, f: 3 + R() * 8, ph: R() * TAU, star: R() < 0.1 }));
  const ribbons = Array.from({ length: 11 }, (_, i) => ({ a0: (i / 11) * TAU + R() * 0.4, spin: (i % 2 ? -1 : 1) * (1.5 + R() * 1.4), reach: 0.55 + R() * 0.6, w: 0.6 + R() * 0.9, delay: R() * 0.3 }));

  let nBokeh = bokeh.length; let nDust = dust.length;
  let W = 0; let H = 0; let U = 0; let D = 0; let cx = 0; let cy = 0; let tau = 0; let flamePower = 0;
  return {
    setQ(q) { nBokeh = Math.ceil(bokeh.length * q); nDust = Math.ceil(dust.length * q); },
    // t：星芒開始蓄力後經過的秒數
    pre(t, time) {
      ({ W, H, U } = e); D = Math.hypot(W, H); cx = W / 2; cy = H * LAND_Y; tau = t - BUILD;
      flamePower = tau > 0 ? clamp(tau / 0.35) * clamp(1 - (tau - 1.5) / 1.9) : 0;
      if (fw !== W || fh !== H) { fw = W; fh = H; e.drop(flameT); flameT = e.target(Math.ceil(W / 2), Math.ceil(H / 2)); }
      if (flamePower <= 0) return;
      gl.bindFramebuffer(gl.FRAMEBUFFER, flameT.fbo); gl.viewport(0, 0, flameT.w, flameT.h);
      gl.disable(gl.BLEND);
      gl.useProgram(P_FLAME.p);
      gl.uniform2f(P_FLAME.u.uRes, W, H); gl.uniform2f(P_FLAME.u.uCenter, cx, cy);
      gl.uniform1f(P_FLAME.u.uUnit, U); gl.uniform1f(P_FLAME.u.uTime, time);
      gl.uniform1f(P_FLAME.u.uPower, 1.25 * flamePower);
      gl.uniform1f(P_FLAME.u.uReach, 0.5 + 1.5 * easeOut(clamp(tau / 1.6)));
      e.fullscreen(P_FLAME);
    },
    bg() {
      if (flamePower <= 0) return; // 把火焰疊進場景（模糊著色器方向給 0 就是單純複製）
      gl.useProgram(e.P.blur.p);
      e.bindTex(0, flameT.tex, e.P.blur.u.uTex);
      gl.uniform2f(e.P.blur.u.uDir, 0, 0);
      e.fullscreen(e.P.blur);
    },
    emit(t, time) {
      const build = easeIn(clamp(t / BUILD));      // 蓄力
      const flash = Math.exp(-((tau / 0.16) ** 2));
      const after = tau > 0 ? clamp(1 - tau / 2.6) : 1; // 爆開後核心慢慢收斂
      const core = ((0.15 + 0.85 * build) * (0.25 + 0.75 * after) + flash * 1.1) * clamp(1 - (tau - 2.2) / 1.2); // 最後完全熄掉，交給金色的海
      // 爆開後整個畫面籠罩一層暖色的霧光
    if (tau > 0) {
      const haze = clamp(tau / 0.3) * clamp(1 - (tau - 1.2) / 2.6);
      push(cx, cy, D * 0.75, D * 0.6, ...AMBER, 0.6 * haze, 0);
      push(cx, cy, D * 0.4, D * 0.3, ...GOLD, 0.7 * haze, 0);
      push(cx, cy - H * 0.45, D * 0.6, D * 0.45, 0.2, 0.22, 0.7, 0.16 * haze, 0); // 上方一點冷色
    }

    // 放射細線：長短粗細不一，緩慢旋轉、各自閃爍
    const rayLen = U * (0.35 + 0.65 * build + flash * 0.5);
    for (const r of rays) {
      const tw = 0.55 + 0.45 * Math.sin(time * r.f + r.ph);
      push(cx, cy, rayLen * r.len, U * r.w * (1 + flash), ...r.c, r.a * tw * core * 0.9, 5, r.ang + time * 0.05);
    }
    // 十字光束：橫的又長又亮（像鏡頭的橫向耀光），直的短一些
    push(cx, cy, W * 0.78 * (0.4 + 0.6 * build), U * 0.03, ...GOLD, 0.9 * core, 5);
    push(cx, cy, W * 0.95 * (0.4 + 0.6 * build), U * 0.006, ...WHITE, 2.4 * core, 5);
    push(cx, cy, H * 0.6 * (0.4 + 0.6 * build), U * 0.02, ...GOLD, 0.7 * core, 5, Math.PI / 2);
    push(cx, cy, H * 0.75 * (0.4 + 0.6 * build), U * 0.005, ...WHITE, 1.8 * core, 5, Math.PI / 2);
    // 核心
    push(cx, cy, U * 0.6, U * 0.6, ...AMBER, 0.55 * core, 0);
    push(cx, cy, U * 0.26, U * 0.26, ...GOLD, 1.8 * core, 0);
    push(cx, cy, U * 0.1, U * 0.1, ...WHITE, 5 * core, 0);
    // 爆光的一瞬間
    push(cx, cy, D * 0.62, D * 0.62, ...GOLD, flash * 1.5, 0);

    if (tau > 0) {
      // 金色光帶：繞著中心往外甩的弧線，由一節一節首尾相疊的光束連成
      for (const rb of ribbons) {
        const age = tau - rb.delay; if (age <= 0) continue;
        const grow = easeOut(clamp(age / 1.3));
        const alpha = clamp(age / 0.2) * clamp(1 - (age - 0.9) / 1.4);
        if (alpha <= 0) continue;
        const N = 30;
        let px = 0; let py = 0;
        for (let j = 0; j <= N; j++) {
          const s = j / N;
          const rad = U * rb.reach * (0.1 + s * 0.95) * grow;
          const ang = rb.a0 + rb.spin * (s * 0.85 + age * 0.6);
          const x = cx + Math.cos(ang) * rad; const y = cy + Math.sin(ang) * rad * 0.78;
          if (j) {
            const dx = x - px; const dy = y - py; const seg = Math.hypot(dx, dy);
            push((x + px) / 2, (y + py) / 2, seg * 1.6, U * 0.013 * rb.w * Math.sin(Math.PI * s) ** 1.5 + 0.5, ...GOLD, alpha * Math.sin(Math.PI * s) * 1.3, 5, Math.atan2(dy, dx));
          }
          px = x; py = y;
        }
      }

      // 散景：往外炸開後慢慢飄；越大的越淡（失焦），疊在一起的地方會白掉
      for (let i = 0; i < nBokeh; i++) { const b = bokeh[i];
        const age = tau - b.delay; if (age <= 0) continue;
        const k = easeOut(clamp(age / 1.5));
        const fade = clamp(age / 0.12) * clamp(1 - (age - 1.7) / 2.2);
        if (fade <= 0) continue;
        const d = D * 0.5 * b.dist * k;
        const x = cx + Math.cos(b.ang) * d + U * b.drift * age;
        const y = cy + Math.sin(b.ang) * d * 0.82 - U * b.lift * age;
        const s = U * b.s * (0.7 + 0.5 * k);
        const tw = 0.8 + 0.2 * Math.sin(time * b.f + b.ph);
        push(x, y, s, s, ...b.c, Math.max(0.45, b.a) * fade * tw, 4);
      }
      // 金粉：飛得更快、更遠的小光點，少數是十字閃光
      for (let i = 0; i < nDust; i++) { const p = dust[i];
        const age = tau - p.delay; if (age <= 0) continue;
        const k = easeOut(clamp(age / 1.1));
        const fade = clamp(age / 0.1) * clamp(1 - (age - 1.2) / 2);
        if (fade <= 0) continue;
        const d = D * 0.5 * p.dist * k;
        const tw = 0.4 + 0.6 * Math.sin(time * p.f + p.ph) ** 2;
        const s = U * p.s * (p.star ? 4 : 1);
        push(cx + Math.cos(p.ang) * d, cy + Math.sin(p.ang) * d * 0.82, s, s, ...p.c, 1.6 * fade * tw, p.star ? 3 : 0);
      }
    }
    },
    post() {
      // 彩虹光環（參考圖 011）：貼著地面的一道拱。圓心在落點，只露出地面以上的半圈；
    // 水面上有一道壓扁、比較淡的倒影。用裁切範圍分兩次畫。
    if (tau > 0) {
      const ground = Math.round(H - cy);                 // 裁切用的座標原點在左下角
      const arch = (squash, gain) => {
        for (const [lag, k, thick] of [[0, 1, 0.015], [0.2, 0.4, 0.007]]) {
          const q = clamp((tau - lag) / 1.5);
          if (q <= 0 || q >= 1) continue;
          const radius = U * 0.06 + D * 0.62 * easeOut(q);
          const alpha = gain * k * (1 - q) ** 0.9 * clamp(q / 0.05);
          const ring = (half, a) => { const size = radius + half; push(cx, cy, size, size * squash, 1, 1, 1, a, 6, half / size); };
          ring(U * thick, 1.25 * alpha);                  // 銳利的彩虹細環（強度不能太高，否則顏色會被過曝洗白）
          ring(U * thick * 4.5, 0.16 * alpha);            // 外面包一層很淡的光暈
        }
        e.flush();
      };
      gl.enable(gl.SCISSOR_TEST);
      gl.scissor(0, ground, W, H - ground); arch(1, 1);          // 地面以上：拱
      gl.scissor(0, 0, W, ground); arch(0.22, 0.32);             // 地面以下：水面的倒影
      gl.disable(gl.SCISSOR_TEST);
    }
    },
    end: BUILD + 4.4, // 散景完全淡掉的時間
  };
}

/* ================= 鏡頭四：金色的海（片頭結束後一直停留的畫面） ================= */
const FS_SEA = `
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uRes; uniform float uUnit; uniform float uTime; uniform float uRoll; uniform vec2 uPan;
  uniform float uRh; uniform float uH0; uniform float uPower;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0., a = .5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 17.3; a *= .5; }
    return v;
  }
  void main() {
    vec2 s = (vUv * uRes - .5 * uRes) / uUnit;              // 螢幕座標：原點在中心、y 往上
    float c = cos(uRoll), sn = sin(uRoll);
    vec2 q = vec2(c * s.x + sn * s.y, -sn * s.x + c * s.y) + uPan; // 換到地平線座標
    vec2 C = vec2(0., uH0 - uRh);                           // 地平線是一個大圓的上緣
    vec2 r = q - C;
    float d = length(r) - uRh;                              // 大於 0 是天空，小於 0 是海
    float ang = atan(r.x, r.y);                             // 沿著地平線的位置
    vec3 col;
    if (d > 0.) {
      col = mix(vec3(.055, .03, .11), vec3(.012, .014, .05), smoothstep(0., .9, d));
      col += vec3(1., .48, .10) * exp(-d * 6.5) * .32;      // 地平線上方的暖色霧光
    } else {
      float dz = -d;                                        // 離地平線多遠（越大越靠近鏡頭）
      float v = 1. / (dz + .06);                            // 透視：越靠近地平線，同樣的距離在畫面上越扁
      float u = ang * uRh * v * .9;
      // 先用一層雜訊把座標推歪，波紋才會彎彎曲曲的，不是一條條直線
      vec2 w = vec2(u, v) + (vec2(noise(vec2(u * .9, v * 1.3 + uTime * .25)), noise(vec2(u * 1.1 + 7., v * 1.1 - uTime * .2))) - .5) * 1.6;
      float n = fbm(vec2(w.x * 1.3 + uTime * .1, w.y * 2.1 - uTime * .4));
      float n2 = noise(vec2(w.x * 3.1 - uTime * .18, w.y * 5. + uTime * .28));
      float lines = pow(1. - abs(2. * n - 1.), 9.) * 1.2 + pow(1. - abs(2. * n2 - 1.), 11.) * .55; // 細細的波光
      float lit = exp(-dz * 4.2) * 1.1 + .16;               // 越靠近地平線越亮
      vec3 base = mix(vec3(.085, .04, .07), vec3(.035, .018, .055), smoothstep(0., .8, dz));
      col = base + vec3(1., .62, .12) * lines * lit * smoothstep(0., .06, dz);
      col += vec3(1., .44, .08) * exp(-dz * 9.) * .5;       // 地平線的光映在水面上
    }
    // 地平線本身：一條白熱的細芯，外面包著橘金色的光；沿線有的地方特別亮
    float a = abs(d);
    float hot = .5 + .5 * smoothstep(-.6, .5, sin(ang * 2.3 + 1.1 + uTime * .05));
    col += vec3(1., .93, .7) * exp(-a * a * 9000.) * 6.5 * hot;
    col += vec3(1., .6, .11) * exp(-a * 46.) * 1.5 * hot;
    gl_FragColor = vec4(col * uPower, 1.);
  }`;

function makeSea(e) {
  const { gl } = e;
  const push = e.push;
  const P_SEA = e.program(FS_SEA);
  const R = rng(20261115);
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const TAU = Math.PI * 2;
  const RH = 1.75;      // 地平線大圓的半徑（單位：畫面短邊）
  const GOLD = [1, 0.76, 0.14]; const AMBER = [1, 0.5, 0.06]; const PALE = [1, 0.88, 0.42]; const WHITE = [1, 0.97, 0.88];
  const pick = () => { const r = R(); return r < 0.04 ? WHITE : r < 0.3 ? PALE : r < 0.76 ? GOLD : AMBER; };
  const warm = () => { const r = R(); return r < 0.3 ? PALE : r < 0.72 ? GOLD : AMBER; }; // 大顆的不用白色，暗下來才不會變成灰色
  // 光斑沿著地平線的分布：不是平均的，左邊與光柱附近比較密（參考圖 005）
  const along = () => { const r = R(); return r < 0.45 ? -0.45 + (R() - 0.5) * 0.5 : (R() - 0.5) * 1.9; };

  // 水面上的光斑：離地平線越遠（越靠近鏡頭）越大、越淡
  const water = Array.from({ length: 420 }, () => {
    const dz = R() ** 1.8 * 0.62;
    return { a: along(), dz, s: 0.005 + dz ** 1.15 * 0.11 + R() * 0.006, c: pick(), k: clamp(1.25 - dz * 1.7), f: 0.4 + R() * 2.2, ph: R() * TAU, drift: (R() - 0.5) * 0.012 };
  });
  // 空中的光斑：從水面慢慢往上飄，飄到一定高度淡掉再重來
  const air = Array.from({ length: 300 }, () => ({ a: along(), h: R(), top: 0.1 + R() ** 1.7 * 0.7, v: 0.015 + R() * 0.05, s: 0.004 + R() ** 3.2 * 0.045, c: warm(), f: 0.5 + R() * 2.5, ph: R() * TAU, sway: (R() - 0.5) * 0.05 }));
  // 很靠近鏡頭的幾顆：又大又模糊
  const fore = Array.from({ length: 12 }, () => ({ a: (R() - 0.5) * 2, dz: -0.3 + R() * 1.1, s: 0.07 + R() * 0.1, c: AMBER, k: 0.22 + R() * 0.2, f: 0.2 + R() * 0.5, ph: R() * TAU }));
  // 地平線附近的細碎亮點
  const dust = Array.from({ length: 320 }, () => ({ a: along(), h: (R() - 0.42) * 0.3, s: 0.0018 + R() * 0.004, f: 2 + R() * 8, ph: R() * TAU, star: R() < 0.08 }));
  const pillars = [{ a: -0.3, len: 0.5, w: 1.5, ph: 0.3 }, { a: -0.06, len: 0.62, w: 1.9, ph: 2.1 }, { a: 0.26, len: 0.42, w: 1.2, ph: 4.2 }];

  let nWater = water.length; let nAir = air.length; let nDust = dust.length;
  let cam = null;
  return {
    setQ(q) { nWater = Math.ceil(water.length * q); nAir = Math.ceil(air.length * q); nDust = Math.ceil(dust.length * q); },
    // power：0～1，海從亮光中浮現的程度
    bg(power, time) {
      const { W, H, U } = e;
      // 鏡頭：緩慢地傾斜、平移、上下，兩張參考圖是同一片海在不同角度下的樣子
    const roll = 0.1 * Math.sin(time * 0.11 + 0.9);
    const panX = 0.1 * Math.sin(time * 0.07 + 2);
    const h0 = -0.2 * (H / U) + 0.02 * Math.sin(time * 0.09); // 地平線約在畫面 70% 的高度，標題與按鈕落在天空的範圍
    const cr = Math.cos(roll); const sr = Math.sin(roll);
    const cyc = h0 - RH; // 地平線大圓的圓心高度
    // 地平線座標 →（沿地平線的角度 a、離地平線的高度 h）→ 螢幕像素
    const at = (a, h) => {
      const qx = Math.sin(a) * (RH + h) - panX; const qy = cyc + Math.cos(a) * (RH + h);
      return [W / 2 + (cr * qx - sr * qy) * U, H / 2 - (sr * qx + cr * qy) * U];
    };
      cam = { roll, cr, sr, at, power };
      gl.useProgram(P_SEA.p);
      gl.uniform2f(P_SEA.u.uRes, W, H); gl.uniform1f(P_SEA.u.uUnit, U); gl.uniform1f(P_SEA.u.uTime, time);
      gl.uniform1f(P_SEA.u.uRoll, roll); gl.uniform2f(P_SEA.u.uPan, panX, 0);
      gl.uniform1f(P_SEA.u.uRh, RH); gl.uniform1f(P_SEA.u.uH0, h0); gl.uniform1f(P_SEA.u.uPower, power);
      e.fullscreen(P_SEA);
    },
    emit(time) {
      const { W, H, U } = e;
      const { roll, cr, sr, at, power } = cam;
      const inView = (x, y, m) => x > -m && x < W + m && y > -m && y < H + m;
    // 光柱：從水面往上的細光束，底部最亮；水裡有一段較短、較淡的倒影
    for (const p of pillars) {
      const breathe = (0.55 + 0.45 * Math.sin(time * 0.35 + p.ph)) * power;
      // 光柱彼此平行、垂直於畫面中央的海平面（不是各自沿著大圓的半徑往外散開）
      const [bx, by] = at(p.a, 0);
      const tx = bx - sr * p.len * U; const ty = by - cr * p.len * U;
      const rot = Math.atan2(ty - by, tx - bx);
      const len = Math.hypot(tx - bx, ty - by);
      const mid = (k) => [bx + (tx - bx) * k, by + (ty - by) * k];
      let [mx, my] = mid(0.5);
      push(mx, my, len * 0.62, U * 0.02 * p.w, ...GOLD, 0.7 * breathe, 5, rot);
      push(mx, my, len * 0.55, U * 0.0055 * p.w, ...WHITE, 2.6 * breathe, 5, rot);
      [mx, my] = mid(0.12);
      push(mx, my, len * 0.3, U * 0.011 * p.w, ...PALE, 2.2 * breathe, 5, rot);
      push(bx, by, U * 0.1 * p.w, U * 0.1 * p.w, ...GOLD, 1.3 * breathe, 0);
      [mx, my] = mid(-0.2);
      push(mx, my, len * 0.3, U * 0.012 * p.w, ...GOLD, 0.9 * breathe, 5, rot);
    }
    for (let i = 0; i < nWater; i++) { const b = water[i];
      const [x, y] = at(b.a + b.drift * Math.sin(time * 0.3 + b.ph), -b.dz);
      const s = U * b.s;
      if (!inView(x, y, s)) continue;
      const tw = 0.6 + 0.4 * Math.sin(time * b.f + b.ph);
      push(x, y, s, s * (0.55 + 0.45 * clamp(b.dz * 3)), ...b.c, (0.35 + 0.95 * b.k) * tw * power, 4, roll); // 遠處的被透視壓扁
    }
    for (let i = 0; i < nAir; i++) { const b = air[i];
      const k = (b.h + time * b.v) % 1;
      const [x, y] = at(b.a + b.sway * k, k * b.top);
      const s = U * b.s * (0.8 + 0.6 * k);
      if (!inView(x, y, s)) continue;
      const tw = 0.65 + 0.35 * Math.sin(time * b.f + b.ph);
      push(x, y, s, s, ...b.c, 1.5 * clamp(k * 8) * (1 - k) ** 1.3 * tw * power, 4);
    }
    for (const b of fore) {
      const [x, y] = at(b.a, -b.dz);
      const s = U * b.s;
      if (!inView(x, y, s)) continue;
      push(x, y, s, s, ...b.c, b.k * (0.7 + 0.3 * Math.sin(time * b.f + b.ph)) * power, 4);
    }
    for (let i = 0; i < nDust; i++) { const p = dust[i];
      const [x, y] = at(p.a, p.h);
      if (!inView(x, y, 8)) continue;
      const tw = Math.sin(time * p.f + p.ph) ** 2;
      const s = U * p.s * (p.star ? 4 : 1);
      push(x, y, s, s, ...PALE, 1.8 * tw * power, p.star ? 3 : 0);
    }
    },
  };
}

/* ================= 時間軸與播放控制 ================= */
// onFrame(p)：每格回報演出進度；reduceMotion()：系統是否要求減少動態；onSlow()：最低畫質仍然跑不動時呼叫
export function sceneGL(canvas, onFrame, reduceMotion, onSlow) {
  let e; let stream; let crown; let burst; let sea;
  try {
    e = createEngine(canvas);
    if (e.error) return null;
    stream = makeStream(e); crown = makeCrown(e); burst = makeBurst(e); sea = makeSea(e);
  } catch { return null; } // 著色器編譯失敗等：交給 2D 版

  const clamp = (v) => Math.min(1, Math.max(0, v));
  let running = false; let onScreen = false; let dead = false;
  let started = false; let t0 = performance.now(); let pausedAt = 0; // 片頭時間只在畫面真的看得到時才前進
  let lastP = -1; let lastT = 0; let lastDraw = 0; let ema = 16.7; let frames = 0; let slowFor = 0;
  let level = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || (navigator.deviceMemory && navigator.deviceMemory <= 4) ? 1 : 0;
  const applyLevel = () => { e.maxDpr = LEVELS[level].dpr; burst.setQ(LEVELS[level].q); sea.setQ(LEVELS[level].q); };
  applyLevel();

  function draw(now) {
    if (dead) return;
    const still = reduceMotion();
    const T = still ? 99 : (now - t0) / 1000;   // 這一輪片頭播到第幾秒
    const time = still ? 12 : now / 1000;        // 閃爍、流動、鏡頭用的連續時間
    const p = clamp((T - TL.start) / TL.span);
    if (Math.abs(p - lastP) > 0.001 || (p === 1 && lastP !== 1)) { lastP = p; onFrame(p); }
    e.resize();
    if (!e.W) return;

    const tc = T - TL.crown; const tb = T - TL.burst; const ts = T - TL.sea;
    const onStream = T < 4.6; const onCrown = tc > 0 && tc < crown.end; const onBurst = tb > 0 && tb < burst.end; const onSea = ts > 0;
    // 1. 預先畫的小圖
    if (onCrown) crown.pre(tc);
    if (onBurst) burst.pre(tb, time);
    // 2. 場景
    e.begin();
    e.additive(true);
    if (onSea) sea.bg(clamp(ts / 1.4), time);
    if (onCrown) crown.bg(time);
    if (onBurst) burst.bg();
    if (onStream) stream.emit(T, time);
    if (onCrown) crown.emit(time);
    if (onBurst) burst.emit(tb, time);
    if (onSea) sea.emit(time);
    e.flush();
    if (onCrown) crown.post();
    if (onBurst) burst.post();
    // 3、4. 暈光與合成
    e.finish({ bloom: 0.55, exposure: 1.02 });
  }

  // 監看每格耗時：持續低於約 36 fps 就降一級；最低一級還是很慢就通知外面改用輕量版
  const watch = (now) => {
    if (lastT) {
      const dt = now - lastT;
      if (dt < 250) { ema = ema * 0.9 + dt * 0.1; frames += 1; } // 切回分頁等長間隔不算
    }
    lastT = now;
    if (frames > 45 && ema > 28) {
      if (level < LEVELS.length - 1) { level += 1; applyLevel(); frames = 0; ema = 16.7; }
      else if (ema > 55 && (slowFor += 1) > 120 && onSlow) { stop(); onSlow(); }
    } else slowFor = 0;
  };
  const loop = (now) => {
    if (!running) return;
    requestAnimationFrame(loop);
    watch(now);
    // 片頭播完、只剩金色的海之後，隔格才畫（約每秒 30 格），省電也比較不燙
    if ((now - t0) / 1000 > TL.settle && now - lastDraw < 30) return;
    lastDraw = now;
    draw(now);
  };
  function stop() { running = false; }
  const toggle = () => {
    if (dead) return;
    const want = !reduceMotion() && onScreen && !document.hidden;
    if (want && !running) {
      const now = performance.now();
      if (!started) { t0 = now; started = true; } else if (pausedAt) t0 += now - pausedAt; // 暫停的時間不算
      pausedAt = 0;
      running = true; lastT = 0; requestAnimationFrame(loop);
    } else if (!want && running) { running = false; pausedAt = performance.now(); draw(pausedAt); }
    else if (!want) draw(performance.now());
  };
  const onLost = (ev) => { ev.preventDefault(); stop(); dead = true; if (onSlow) onSlow(); }; // 繪圖環境被系統收回：改用輕量版

  const ro = new ResizeObserver(() => { if (!running) draw(performance.now()); });
  ro.observe(canvas);
  const io = new IntersectionObserver((es) => { onScreen = es[0].isIntersecting; toggle(); });
  io.observe(canvas);
  document.addEventListener('visibilitychange', toggle);
  canvas.addEventListener('webglcontextlost', onLost);

  return {
    toggle,
    // 直接跳到最後畫面
    finish() { started = true; pausedAt = 0; t0 = performance.now() - 60000; if (!running) draw(performance.now()); },
    restart() { started = true; pausedAt = 0; t0 = performance.now(); lastP = -1; },
    tap() { /* WebGL 版目前沒有點擊互動 */ },
    destroy() {
      stop(); dead = true; ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', toggle);
      canvas.removeEventListener('webglcontextlost', onLost);
      e.gl.getExtension('WEBGL_lose_context')?.loseContext(); // 離開首頁就把繪圖環境還給系統
    },
  };
}
