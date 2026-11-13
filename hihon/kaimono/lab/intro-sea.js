/* 片頭重製・試作 04：金色的海（參考圖 005、006）
   這是片頭最後停留的畫面，會一直播下去：
     - 地平線是一道會暈光的弧線（像從很高的地方看海），鏡頭緩慢地傾斜、平移
     - 水面是深色的，上面有被照亮的金色波紋，越靠近地平線越亮
     - 幾百顆光斑：地平線附近的小而清楚，靠近鏡頭的大而模糊（景深）
     - 幾道從水面升起的光柱，水裡有倒影
   海與天空是這一頁自己的著色器；光斑與光柱用共用引擎（intro-gl.js）的光點批次畫。
   所有東西都先在「地平線座標」裡擺位置（原點在畫面中心、單位是畫面短邊、y 往上），
   再依鏡頭的傾斜與平移換算到螢幕上，所以鏡頭一動，海、光斑、光柱會一起動。 */
(() => {
  'use strict';

  const canvas = document.getElementById('stage');
  const e = IntroGL.create(canvas);
  if (e.error) { document.getElementById('msg').hidden = false; document.getElementById('info').textContent = e.error; return; }
  const { gl } = e;
  const push = e.push;

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
  let P_SEA;
  try { P_SEA = e.program(FS_SEA); }
  catch (err) { document.getElementById('msg').hidden = false; document.getElementById('info').textContent = `著色器編譯失敗：${err.message}`; return; }

  const R = IntroGL.rng(20261115);
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

  function render(t, time) {
    const { W, H, U } = e;
    // 鏡頭：緩慢地傾斜、平移、上下，兩張參考圖是同一片海在不同角度下的樣子
    const roll = 0.27 * Math.sin(time * 0.2 + 0.9);
    const panX = 0.2 * Math.sin(time * 0.13 + 2);
    const h0 = -0.04 + 0.05 * Math.sin(time * 0.17);
    const cr = Math.cos(roll); const sr = Math.sin(roll);
    const cyc = h0 - RH; // 地平線大圓的圓心高度
    // 地平線座標 →（沿地平線的角度 a、離地平線的高度 h）→ 螢幕像素
    const at = (a, h) => {
      const qx = Math.sin(a) * (RH + h) - panX; const qy = cyc + Math.cos(a) * (RH + h);
      return [W / 2 + (cr * qx - sr * qy) * U, H / 2 - (sr * qx + cr * qy) * U];
    };
    const power = clamp(t / 1.2);           // 開頭從亮光中浮現
    const flash = Math.exp(-t * 2.6);

    // 1. 海、天空、地平線
    e.begin();
    gl.useProgram(P_SEA.p);
    gl.uniform2f(P_SEA.u.uRes, W, H); gl.uniform1f(P_SEA.u.uUnit, U); gl.uniform1f(P_SEA.u.uTime, time);
    gl.uniform1f(P_SEA.u.uRoll, roll); gl.uniform2f(P_SEA.u.uPan, panX, 0);
    gl.uniform1f(P_SEA.u.uRh, RH); gl.uniform1f(P_SEA.u.uH0, h0); gl.uniform1f(P_SEA.u.uPower, 0.25 + 0.75 * power);
    e.fullscreen(P_SEA);

    // 2. 光點
    e.additive(true);
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
    for (const b of water) {
      const [x, y] = at(b.a + b.drift * Math.sin(time * 0.3 + b.ph), -b.dz);
      const s = U * b.s;
      if (!inView(x, y, s)) continue;
      const tw = 0.6 + 0.4 * Math.sin(time * b.f + b.ph);
      push(x, y, s, s * (0.55 + 0.45 * clamp(b.dz * 3)), ...b.c, (0.35 + 0.95 * b.k) * tw * power, 4, roll); // 遠處的被透視壓扁
    }
    for (const b of air) {
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
    for (const p of dust) {
      const [x, y] = at(p.a, p.h);
      if (!inView(x, y, 8)) continue;
      const tw = Math.sin(time * p.f + p.ph) ** 2;
      const s = U * p.s * (p.star ? 4 : 1);
      push(x, y, s, s, ...PALE, 1.8 * tw * power, p.star ? 3 : 0);
    }
    // 開頭的亮光（正式版這裡接在散景爆開之後）
    if (flash > 0.01) push(W / 2, H / 2, Math.hypot(W, H) * 0.8, Math.hypot(W, H) * 0.8, ...PALE, flash * 2.2, 0);
    e.flush();
    e.finish({ bloom: 0.6, exposure: 1.05 });
  }

  IntroGL.player(e, { loop: 3600, still: 9, render });
})();
