/* 片頭重製・共用的繪圖引擎（WebGL）
   各個試作頁與之後的正式片頭都用這一份：
     - 光點批次：每格把所有光點排進一個陣列，一次畫完（柔光、液滴球、漣漪、十字閃光、散景、光束、彩虹環）
     - 離屏畫面：盡量用半精度浮點（高動態範圍），亮度才能超過 1、暈光才有東西可以溢出
     - 暈光與合成：場景縮小模糊成四層再疊回去 → 曝光壓縮 → 暗角 → 抖色
     - 試作頁共用的播放控制（重播、慢動作、暫停、暈光開關、fps）
   用一般的 <script defer> 載入（不是 module），直接雙擊 HTML 也能開。對外只有一個全域物件 IntroGL。 */
window.IntroGL = (() => {
  'use strict';

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
  function create(canvas, { maxDpr = 1.5 } = {}) {
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
      gl, gl2, hdr: Boolean(hdr), P, W: 0, H: 0, U: 0, scene: null, bloom: [], bloomOn: true,
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
        const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
        const w = Math.max(2, Math.round(canvas.clientWidth * dpr)); const h = Math.max(2, Math.round(canvas.clientHeight * dpr));
        if (w === e.W && h === e.H) return false;
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

  /* 試作頁共用的播放控制。
     loop：一輪幾秒；still：減少動態或暫停時停在第幾秒；render(clock, time)：畫一格 */
  function player(engine, { loop, still, render }) {
    const $ = (id) => document.getElementById(id);
    const info = $('info'); const fpsEl = $('fps');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    let clock = 0; let time = 0; let speed = 1;
    let paused = reduce.matches; // 減少動態：停在代表畫面，按「重播」才播一次
    let once = false; let last = 0; let acc = 0; let frames = 0;
    if (paused) clock = still;
    const sync = () => {
      $('btn-pause').setAttribute('aria-pressed', String(paused));
      $('btn-slow').setAttribute('aria-pressed', String(speed < 1));
      $('btn-bloom').setAttribute('aria-pressed', String(engine.bloomOn));
    };
    $('btn-replay').addEventListener('click', () => { clock = 0; paused = false; once = reduce.matches; sync(); });
    $('btn-slow').addEventListener('click', () => { speed = speed < 1 ? 1 : 0.25; sync(); });
    $('btn-pause').addEventListener('click', () => { paused = !paused; sync(); });
    $('btn-bloom').addEventListener('click', () => { engine.bloomOn = !engine.bloomOn; sync(); });
    // 測試用：網址加上 #t=1.4 可以直接停在第 1.4 秒
    const m = /[#&]t=([\d.]+)/.exec(location.hash);
    if (m) { clock = Number(m[1]); time = clock; paused = true; }
    const label = () => { info.textContent = `${engine.gl2 ? 'WebGL 2' : 'WebGL 1'} · ${engine.hdr ? '高動態範圍' : '一般精度'} · ${engine.W}×${engine.H}`; };
    function frame(now) {
      requestAnimationFrame(frame);
      if (engine.resize()) label();
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
      last = now;
      if (!paused && !document.hidden) {
        clock += dt * speed; time += dt * speed;
        if (clock > loop) {
          if (once) { paused = true; once = false; clock = still; sync(); } else clock = 0;
        }
      }
      render(clock, time);
      acc += dt; frames += 1;
      if (acc >= 0.5) { fpsEl.textContent = `${Math.round(frames / acc)} fps`; acc = 0; frames = 0; }
    }
    sync();
    requestAnimationFrame(frame);
  }

  // 固定種子的亂數：每次播放的造型都一樣
  function rng(seed) {
    let s = seed >>> 0;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }

  return { create, player, rng, VS_QUAD };
})();
