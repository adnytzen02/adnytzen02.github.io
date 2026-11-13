/* 片頭重製・試作 02：散景爆開與彩虹光環（參考圖 003、004）
   時間軸（秒）：
     0～0.9   星芒蓄力：核心光、十字光束與放射細線逐漸增強
     0.9      爆光
     0.9～2.4 彩虹光環像一道拱門貼著地面撐開；兩側捲起火焰狀的金色光帶；幾百顆散景與金粉往外炸開
     2.4～    散景慢慢飄散、淡出
   光點用共用引擎（intro-gl.js）的批次畫；火焰光帶是這一頁自己的著色器。 */
(() => {
  'use strict';

  const canvas = document.getElementById('stage');
  const e = IntroGL.create(canvas);
  if (e.error) { document.getElementById('msg').hidden = false; document.getElementById('info').textContent = e.error; return; }
  const push = e.push;
  const { gl } = e;

  // 火焰狀的金色光帶（參考圖 011）：繞著中心的一絲一絲亮線，兩側最濃、往上捲。
  // 用雜訊在極座標上畫：沿著圓周方向拉長，就會變成繞著中心流動的絲帶。
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
  let P_FLAME;
  try { P_FLAME = e.program(FS_FLAME); }
  catch (err) { document.getElementById('msg').hidden = false; document.getElementById('info').textContent = `著色器編譯失敗：${err.message}`; return; }
  let flameT = null; let fw = 0; let fh = 0; // 火焰先畫在半解析度的畫面上再疊回去，省一半以上的運算

  const R = IntroGL.rng(20261113);
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

  function render(t, time) {
    const { W, H, U } = e;
    const D = Math.hypot(W, H);
    const cx = W / 2; const cy = H * 0.74;
    const tau = t - BUILD;                      // 爆開後經過的時間
    const build = easeIn(clamp(t / BUILD));      // 蓄力
    const flash = Math.exp(-((tau / 0.16) ** 2));
    const after = tau > 0 ? clamp(1 - tau / 2.6) : 1; // 爆開後核心慢慢收斂
    const core = (0.15 + 0.85 * build) * (0.25 + 0.75 * after) + flash * 1.1;

    // 火焰光帶：爆開後出現、往外擴、再淡掉
    const flamePower = tau > 0 ? clamp(tau / 0.35) * clamp(1 - (tau - 1.5) / 1.9) : 0;
    if (fw !== W || fh !== H) { fw = W; fh = H; e.drop(flameT); flameT = e.target(Math.ceil(W / 2), Math.ceil(H / 2)); }
    if (flamePower > 0) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, flameT.fbo); gl.viewport(0, 0, flameT.w, flameT.h);
      gl.disable(gl.BLEND);
      gl.useProgram(P_FLAME.p);
      gl.uniform2f(P_FLAME.u.uRes, W, H); gl.uniform2f(P_FLAME.u.uCenter, cx, cy);
      gl.uniform1f(P_FLAME.u.uUnit, U); gl.uniform1f(P_FLAME.u.uTime, time);
      gl.uniform1f(P_FLAME.u.uPower, 1.25 * flamePower);
      gl.uniform1f(P_FLAME.u.uReach, 0.5 + 1.5 * easeOut(clamp(tau / 1.6)));
      e.fullscreen(P_FLAME);
    }

    e.begin();
    e.additive(true);
    if (flamePower > 0) { // 把火焰疊進場景（模糊著色器方向給 0 就是單純複製）
      gl.useProgram(e.P.blur.p);
      e.bindTex(0, flameT.tex, e.P.blur.u.uTex);
      gl.uniform2f(e.P.blur.u.uDir, 0, 0);
      e.fullscreen(e.P.blur);
    }

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
      for (const b of bokeh) {
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
      for (const p of dust) {
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

    e.flush();

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

    e.finish({ bloom: 0.55, exposure: 1.05 });
  }

  IntroGL.player(e, { loop: LOOP, still: BUILD + 0.55, render });
})();
