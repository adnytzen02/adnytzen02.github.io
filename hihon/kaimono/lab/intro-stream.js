/* 片頭重製・試作 03：螺旋光流與星芒（參考圖 010 → 008 → 009）
   時間軸（秒）：
     0～1.6   三股半透明的光帶互相纏繞著落下，裡面裹著密密的金粉；尖端是一顆十字星（010）
     1.6      尖端觸到水面
     1.6～2.4 星芒綻開：白熱的核心、橫長直短的十字光束、長短不一的放射細線、兩側的弧光（008）
     2.4～    星芒收斂，光流繼續往下灌（正式版這裡接水冠，009）
   全部用共用引擎（intro-gl.js）的光點批次畫。 */
(() => {
  'use strict';

  const canvas = document.getElementById('stage');
  const e = IntroGL.create(canvas);
  if (e.error) { document.getElementById('msg').hidden = false; document.getElementById('info').textContent = e.error; return; }
  const push = e.push;

  const R = IntroGL.rng(20261114);
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

  function render(t, time) {
    const { W, H, U } = e;
    const cx = W / 2; const cy = H * 0.72;
    const tau = t - FALL;                                   // 觸水後經過的時間
    const fallK = easeInOut(clamp(t / FALL));
    const tipY = -H * 0.08 + (cy + H * 0.08) * fallK;       // 尖端的位置
    const L = Math.max(H * 0.9, tipY + H * 0.25);           // 光流往上延伸到畫面外
    const out = clamp(1 - (tau - 2.6) / 1.4);               // 最後整體淡出
    // 星芒的強度：觸水後綻開、停一下、收斂成小光點
    const flare = tau <= 0 ? 0 : (tau < 0.55 ? easeOut(tau / 0.55) : 1 - 0.78 * clamp((tau - 0.9) / 1.3)) * out;
    const tipStar = (0.25 + 0.75 * fallK) * (tau > 0 ? clamp(1 - tau / 0.4) : 1); // 落下途中尖端的十字星

    e.begin();
    e.additive(true);

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

    e.flush();
    e.finish({ bloom: 0.5, exposure: 1 });
  }

  IntroGL.player(e, { loop: LOOP, still: FALL + 0.7, render });
})();
