// 大阪轉乘站・梅田購物：分層立體示意圖（three.js）
// 一般 <script>（不用 type="module"），直接點兩下打開 HTML 也能執行；由 train.js／shop.js 在支援 WebGL 時載入
// 每張圖的資料寫在面板裡的 <script type="application/json" data-osk3d>；座標沿用平面示意圖（900×600）
// 畫法：把「2 樓以上、地面、地下」拆成上下三片樓板，每片都有樓層牌；路線走在樓板上，換樓層的地方用直立虛線表示
(() => {
'use strict';
const GAP = 5;                                                     // 樓板之間的距離（刻意拉開，示意用）
const LEVEL_OF = { up: 'upper', bridge: 'upper', ground: 'ground', under: 'under' };   // 資料裡的四種高度 → 三片樓板
const LEVELS = {
  upper:  { y: GAP,  tag: '2F↑', name: '2 樓以上', note: '天橋・高架', fill: 0xf8e9c6, line: 0xb7791f, op: 0.42 },
  ground: { y: 0,    tag: '1F',  name: '地面',     note: '1 樓',       fill: 0xfbf9f5, line: 0x8a8377, op: 0.62 },
  under:  { y: -GAP, tag: 'B',   name: '地下',     note: '地下街・地鐵', fill: 0xd7e5f8, line: 0x2a5ea8, op: 0.6 },
};
const ORDER = ['upper', 'ground', 'under'];
const S = 1 / 60;                                                  // 平面圖座標 → 立體座標
const ROUTE_COLOR = 0xc8102e;

function mount(host, data) {
  const T = window.THREE;
  const stage = host.querySelector('.osk3d__stage');
  const canvas = host.querySelector('canvas');
  const labelBox = host.querySelector('.osk3d__labels');
  const bar = host.querySelector('.osk3d__bar');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const hex = c => parseInt(c.slice(1), 16);
  const lvOf = l => LEVEL_OF[l] || 'ground';
  // 樓板範圍：預設是整張平面圖；資料可用 plate:[x0,y0,x1,y1] 只取有內容的部分，畫面才不會留一大片空白
  const B = data.plate || [0, 0, 900, 600];
  const HALF_W = (B[2] - B[0]) / 2 * S + 0.8, HALF_D = (B[3] - B[1]) / 2 * S + 0.8;
  const P = (x, z) => [(x - (B[0] + B[2]) / 2) * S, (z - (B[1] + B[3]) / 2) * S];

  const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.outputColorSpace = T.SRGBColorSpace;
  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(20, 1.5, 0.1, 400);       // 視角窄一點，接近等角投影，樓板才不會變形
  scene.add(new T.HemisphereLight(0xffffff, 0xb9b2a6, 1.7));
  const sun = new T.DirectionalLight(0xfff4e0, 1.3); sun.position.set(-4, 12, 6); scene.add(sun);

  // 這張圖用到哪幾層
  const used = new Set();
  (data.stations || []).forEach(s => used.add(lvOf(s.level)));
  (data.gates || []).forEach(g => used.add(lvOf(g.level)));
  (data.routes || []).forEach(r => r.pts.forEach(p => p && used.add(lvOf(p[2]))));
  used.add('ground');
  const levels = ORDER.filter(k => used.has(k));
  stage.dataset.levels = levels.length;                              // 層數越多，畫面給得越高（見 style.css）

  // 所有會淡出的材質都登記在這裡：{ mat, base, level, key }
  const fades = [];
  const reg = (mat, level, key) => { mat.transparent = true; fades.push({ mat, base: mat.opacity, level, key }); return mat; };

  // ---- 樓板 ----
  const rect = (hw, hd, y, cx = 0, cz = 0) => [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]].map(([x, z]) => new T.Vector3(cx + x, y, cz + z));
  levels.forEach(k => {
    const L = LEVELS[k];
    const plate = new T.Mesh(new T.PlaneGeometry(HALF_W * 2, HALF_D * 2), reg(new T.MeshBasicMaterial({ color: L.fill, opacity: L.op, depthWrite: false, side: T.DoubleSide }), k, 'plate'));
    plate.rotation.x = -Math.PI / 2; plate.position.y = L.y; scene.add(plate);
    // 上下兩圈外框，看起來像一片有厚度的板
    [0.004, -0.14].forEach((dy, i) => scene.add(new T.LineLoop(new T.BufferGeometry().setFromPoints(rect(HALF_W, HALF_D, L.y + dy)), reg(new T.LineBasicMaterial({ color: L.line, opacity: i ? 0.45 : 1 }), k, 'plate'))));
  });

  // ---- 地面上的道路、河川 ----
  const flat = (q, color, dy) => {
    const x0 = Math.max(q.x, B[0] - 40), y0 = Math.max(q.y, B[1] - 40), r = { x: x0, y: y0, w: Math.min(q.x + q.w, B[2] + 40) - x0, h: Math.min(q.y + q.h, B[3] + 40) - y0 };   // 超出樓板的部分裁掉
    if (r.w <= 0 || r.h <= 0) return;
    const [cx, cz] = P(r.x + r.w / 2, r.y + r.h / 2);
    const m = new T.Mesh(new T.PlaneGeometry(r.w * S, r.h * S), reg(new T.MeshBasicMaterial({ color, opacity: 1, depthWrite: false }), 'ground', 'plate'));
    m.rotation.x = -Math.PI / 2; m.position.set(cx, dy, cz); scene.add(m);
  };
  (data.roads || []).forEach(r => flat(r, 0xe2dbcf, 0.006));
  (data.water || []).forEach(r => flat(r, 0x9cc8ea, 0.008));

  // ---- 方塊：車站、建築、地標 ----
  const box = (b, color, h, y0, level, key, op = 1, line = 0xffffff) => {
    const [cx, cz] = P(b.x + b.w / 2, b.y + b.h / 2), hw = b.w * S / 2, hd = b.h * S / 2;
    const m = new T.Mesh(new T.BoxGeometry(hw * 2, h, hd * 2), reg(new T.MeshStandardMaterial({ color, roughness: 0.7, opacity: op }), level, key));
    m.position.set(cx, y0 + h / 2, cz); scene.add(m);
    scene.add(new T.LineLoop(new T.BufferGeometry().setFromPoints(rect(hw, hd, y0 + h + 0.004, cx, cz)), reg(new T.LineBasicMaterial({ color: line, opacity: 0.8 }), level, key)));
    return { cx, cz, top: y0 + h };
  };
  (data.landmarks || []).forEach((l, i) => { l._k = 'land' + i; l._b = box(l, l.color ? hex(l.color) : 0xd8d1c4, Math.min(0.5, (l.height || 0.5) * 0.6), 0, 'ground', l._k, 0.6, 0x9a927f); });
  const stations = (data.stations || []).map((s, i) => {
    const level = lvOf(s.level), y = LEVELS[level].y, key = 'st' + i;
    const building = level === 'ground' && s.height;                 // 購物頁的建築物：有指定高度
    const h = building ? Math.min(1.15, 0.35 + s.height * 0.42) : level === 'ground' ? 0.5 : 0.42;
    const b = box(s, hex(s.color), h, y, level, key, s.op || 1);
    // 建築物在 2 樓那片樓板上也畫出範圍，天橋路線才看得出接到哪一棟
    if (building && used.has('upper')) {
      const hw = s.w * S / 2, hd = s.h * S / 2, yu = LEVELS.upper.y + 0.01;
      const tile = new T.Mesh(new T.PlaneGeometry(hw * 2, hd * 2), reg(new T.MeshBasicMaterial({ color: hex(s.color), opacity: 0.3, depthWrite: false }), 'upper', key));
      tile.rotation.x = -Math.PI / 2; tile.position.set(b.cx, yu, b.cz); scene.add(tile);
      scene.add(new T.LineLoop(new T.BufferGeometry().setFromPoints(rect(hw, hd, yu + 0.004, b.cx, b.cz)), reg(new T.LineBasicMaterial({ color: hex(s.color), opacity: 0.9 }), 'upper', key)));
    }
    return { s, key, level, building, ...b };
  });
  // 摩天輪（簡單的環）
  (data.wheels || []).forEach(w => {
    const [cx, cz] = P(w.x, w.y);
    const ring = new T.Mesh(new T.TorusGeometry(0.42, 0.045, 8, 40), reg(new T.MeshStandardMaterial({ color: 0xd8352a, opacity: 1 }), 'ground', 'wheel'));
    ring.position.set(cx, Math.min(1.15, 0.35 + (w.base || 1) * 0.42) + 0.46, cz); ring.rotation.y = Math.PI / 2; scene.add(ring);
  });

  // ---- 閘門（白色小圓柱） ----
  const gateGeo = new T.CylinderGeometry(0.11, 0.11, 0.1, 20);
  const gates = (data.gates || []).map((g, i) => {
    const level = lvOf(g.level), [x, z] = P(g.x, g.y), y = LEVELS[level].y + 0.06;
    const m = new T.Mesh(gateGeo, reg(new T.MeshStandardMaterial({ color: 0xffffff, emissive: 0x2a2a2a, opacity: 1 }), level, 'gate' + i));
    m.position.set(x, y, z); m.renderOrder = 5; m.material.depthTest = false; scene.add(m);
    return { g, level, key: 'gate' + i, pos: new T.Vector3(x, y + 0.1, z) };
  });

  // ---- 路線：走在樓板上；換樓層時先走到定點，再用直立虛線上下 ----
  const Y_UP = new T.Vector3(0, 1, 0);
  const routeMat = () => new T.MeshBasicMaterial({ color: ROUTE_COLOR, depthTest: false, transparent: true });
  const tubeGeo = new T.CylinderGeometry(0.075, 0.075, 1, 10), ballGeo = new T.SphereGeometry(0.085, 12, 10), dotGeo = new T.SphereGeometry(0.06, 10, 8);
  const changeText = (from, to) => to === 'under' ? '↓ 下到地下' : to === 'upper' ? '↑ 上到 2 樓' : from === 'under' ? '↑ 上到地面' : '↓ 下到地面';
  const routes = (data.routes || []).map(r => {
    const group = new T.Group(); group.visible = false; scene.add(group);
    const add = (geo, mat, order = 10) => { const m = new T.Mesh(geo, mat); m.renderOrder = order; group.add(m); return m; };
    const segs = []; let cur = [];
    r.pts.forEach(p => { if (!p) { segs.push(cur); cur = []; } else cur.push(p); }); segs.push(cur);
    const marks = [], paths = [], lv = new Set(), xy = [];
    segs.filter(s => s.length > 1).forEach((pts, si, all) => {
      // 把資料點展開成「水平段＋垂直段」的折線
      const line = []; let prev = null;
      pts.forEach(p => {
        const level = lvOf(p[2]), [x, z] = P(p[0], p[1]), y = LEVELS[level].y + 0.1;
        lv.add(level); xy.push([p[0], p[1], level]);
        if (prev && prev.level !== level) {
          const foot = new T.Vector3(x, prev.y, z);
          if (foot.distanceTo(line[line.length - 1]) > 0.02) line.push(foot);
          const top = new T.Vector3(x, y, z);
          marks.push({ text: changeText(prev.level, level), cls: 'is-change', pos: foot.clone().lerp(top, 0.5) });
          line.push(top); top.riser = true;                           // 這一段是上下樓
        } else line.push(new T.Vector3(x, y, z));
        prev = { level, y };
      });
      // 畫出來
      let total = 0; const lens = [0];
      for (let i = 1; i < line.length; i++) {
        const a = line[i - 1], b = line[i], len = a.distanceTo(b);
        if (b.riser) {                                               // 上下樓：一串小圓點
          const n = Math.max(2, Math.round(len / 0.3));
          for (let k = 1; k < n; k++) add(dotGeo, routeMat()).position.copy(a).lerp(b, k / n);
        } else {
          const m = add(tubeGeo, routeMat());
          m.position.copy(a).lerp(b, 0.5); m.scale.set(1, len, 1);
          m.quaternion.setFromUnitVectors(Y_UP, b.clone().sub(a).normalize());
        }
        add(ballGeo, routeMat()).position.copy(b);
        total += len; lens.push(total);
      }
      // 起點、終點
      const start = add(new T.SphereGeometry(0.17, 16, 12), new T.MeshBasicMaterial({ color: 0xffffff, depthTest: false, transparent: true }), 11); start.position.copy(line[0]);
      add(new T.SphereGeometry(0.11, 16, 12), routeMat(), 12).position.copy(line[0]);
      const end = line[line.length - 1];
      add(new T.SphereGeometry(0.2, 16, 12), routeMat(), 11).position.copy(end);
      add(new T.SphereGeometry(0.09, 16, 12), new T.MeshBasicMaterial({ color: 0xffffff, depthTest: false, transparent: true }), 12).position.copy(end);
      if (si === 0) marks.push({ text: '出發', cls: 'is-start', pos: line[0].clone().setY(line[0].y + 0.25) });
      marks.push({ text: all.length > 1 ? `抵達 ${si + 1}` : '抵達', cls: 'is-end', pos: end.clone().setY(end.y + 0.3) });
      // 沿線移動的光點（顯示方向）
      const runners = [0, 1].map(() => add(new T.SphereGeometry(0.1, 12, 10), new T.MeshBasicMaterial({ color: 0xffffff, depthTest: false, transparent: true }), 13));
      paths.push({ line, lens, total, runners });
    });
    // 這條路線經過哪些車站、閘門（其餘淡出）
    const near = (b, pad) => xy.some(([x, y]) => x >= b.x - pad && x <= b.x + b.w + pad && y >= b.y - pad && y <= b.y + b.h + pad);
    const keys = new Set(['plate', 'wheel']);
    stations.forEach(st => { if (near(st.s, 40)) keys.add(st.key); });
    gates.forEach(gt => { if (xy.some(([x, y, l]) => l === gt.level && Math.hypot(x - gt.g.x, y - gt.g.y) < 46)) keys.add(gt.key); });
    const all = paths.flatMap(p => p.line), center = all.reduce((a, v) => a.add(v), new T.Vector3()).multiplyScalar(1 / (all.length || 1));
    return { id: r.id, group, paths, marks, levels: lv, keys, center };
  });

  // ---- HTML 標籤 ----
  const labels = [];
  const addLabel = (html, cls, pos, o = {}) => {
    const el = document.createElement('span'); el.className = 'osk3d__label ' + cls; el.innerHTML = `<b>${html}</b>`;
    labelBox.appendChild(el); const l = { el, pos, ...o }; labels.push(l); return l;
  };
  const badge = level => level === 'under' ? '<i class="osk3d__lv is-under">地下</i>' : level === 'upper' ? '<i class="osk3d__lv is-upper">2F↑</i>' : '';
  // 樓層牌：固定在每片樓板的左前角
  levels.forEach(k => { const L = LEVELS[k]; addLabel(`<i>${L.tag}</i>${L.name}<small>${L.note}</small>`, `is-level is-${k}`, new T.Vector3(-HALF_W, L.y, HALF_D), { level: k, fixed: true }); });
  routes.forEach(r => r.marks.forEach(m => addLabel(m.text, 'is-mark ' + m.cls, m.pos, { route: r.id })));
  stations.filter(st => !st.s.nolabel).sort((a, b) => (a.s.pri ?? 99) - (b.s.pri ?? 99))
    .forEach(st => addLabel(`${badge(st.building ? '' : st.level)}${st.s.name}${st.s.sub ? `<small>${st.s.sub}</small>` : ''}`, 'is-station', new T.Vector3(st.cx, st.top + 0.08, st.cz), { level: st.level, key: st.key }));
  // 只看 2 樓那一層時，建築名稱改標在 2 樓的範圍上
  if (used.has('upper')) stations.filter(st => st.building && !st.s.nolabel).forEach(st => addLabel(st.s.name, 'is-station', new T.Vector3(st.cx, LEVELS.upper.y + 0.1, st.cz), { level: 'upper', key: st.key, noGround: true }));
  gates.forEach(gt => { const o = gt.g.off ? new T.Vector3(gt.g.off[0] * S, 0, gt.g.off[1] * S) : null; addLabel(gt.g.name, 'is-gate', o ? gt.pos.clone().add(o) : gt.pos, { level: gt.level, key: gt.key }); });
  (data.landmarks || []).filter(l => !l.nolabel).forEach(l => addLabel(`${l.name}${l.sub ? `<small>${l.sub}</small>` : ''}`, 'is-land', new T.Vector3(l._b.cx, l._b.top + 0.06, l._b.cz), { level: 'ground', key: l._k }));

  // ---- 樓層按鈕（只看其中一層）與圖例 ----
  let pick = null;                                                   // 使用者指定只看哪一層（null＝自動）
  const lvBtns = [];
  if (levels.length > 1 && bar) {
    const grp = document.createElement('span'); grp.className = 'osk3d__levels'; grp.setAttribute('role', 'group'); grp.setAttribute('aria-label', '顯示樓層');
    [[null, '全部樓層']].concat(levels.map(k => [k, LEVELS[k].name])).forEach(([k, text]) => {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = text; b.dataset.osk3dLevel = k || '';
      b.addEventListener('click', () => { pick = k; sync(); });
      grp.appendChild(b); lvBtns.push([k, b]);
    });
    bar.insertBefore(grp, bar.querySelector('.osk3d__views'));
  }
  const key = document.createElement('p'); key.className = 'osk3d__key';
  key.innerHTML = '<span><i class="k-line"></i>走法</span><span><i class="k-dots"></i>上下樓（樓梯・電扶梯・電梯）</span><span><i class="k-gate"></i>閘門</span>';
  stage.after(key);

  // ---- 視角 ----
  const az0 = data.az ?? -0.35;
  const EL = { wide: 0.42, tall: 0.5 };                               // 斜看的俯角：夠低，三片樓板才不會互相蓋住
  const view = { az: az0, taz: az0, el: EL.wide, tel: EL.wide, dist: 60, tdist: 60, portrait: null };
  const target = new T.Vector3(), goal = new T.Vector3();
  let active = null, needFit = true, drag = null;
  canvas.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, az: view.taz, el: view.tel }; canvas.setPointerCapture(e.pointerId); stage.classList.add('is-drag'); });
  canvas.addEventListener('pointermove', e => {
    if (!drag) return;
    view.taz = T.MathUtils.clamp(drag.az - (e.clientX - drag.x) * 0.006, -1.5, 1.2);
    if (e.pointerType === 'mouse') view.tel = T.MathUtils.clamp(drag.el + (e.clientY - drag.y) * 0.004, 0.1, 1.5);   // 觸控時垂直滑動留給頁面捲動
    needFit = true; wake();
  });
  const endDrag = () => { drag = null; stage.classList.remove('is-drag'); };
  canvas.addEventListener('pointerup', endDrag); canvas.addEventListener('pointercancel', endDrag);
  host.querySelectorAll('[data-osk3d-view]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.osk3dView;
    if (v === 'top') { view.taz = 0; view.tel = 1.5; if (!pick && levels.length > 1) pick = active ? [...active.levels][0] : 'ground'; }   // 俯視時樓板會疊在一起，所以一次只看一層
    else if (v === 'side') { view.taz = az0; view.tel = 0.14; pick = null; }
    else { view.taz = az0; view.tel = view.portrait ? EL.tall : EL.wide; pick = null; }
    sync();
  }));

  // 目前要清楚顯示哪幾層
  const focus = () => pick ? new Set([pick]) : active ? active.levels : new Set(levels);
  // 樓層、路線改變後：更新淡出、按鈕狀態與鏡頭要對準的位置
  function sync() {
    const f = focus();
    fades.forEach(o => {
      const lv = f.has(o.level) ? 1 : pick ? 0.05 : 0.14;
      const on = !active || o.key === 'plate' || active.keys.has(o.key) ? 1 : 0.38;
      o.goal = o.base * lv * on;
    });
    routes.forEach(r => { r.group.visible = r === active; });
    lvBtns.forEach(([k, b]) => b.setAttribute('aria-pressed', String(k === pick)));
    const ys = [...f].map(k => LEVELS[k].y), mid = (Math.max(...ys) + Math.min(...ys)) / 2;
    goal.set(active ? active.center.x * 0.35 : 0, mid + 0.3, (active ? active.center.z * 0.35 : 0) + (data.tz ?? 0) * 0.5);
    needFit = true; wake();
  }
  function show(id) { active = routes.find(r => r.id === id) || null; pick = null; sync(); }

  // 算出鏡頭要退多遠，目前顯示的樓板才會完整落在畫面裡
  const corner = new T.Vector3();
  function fit() {
    const f = focus(), ys = [...f].map(k => LEVELS[k].y), y0 = Math.min(...ys) - 0.2, y1 = Math.max(...ys) + 1.5;
    const inside = d => {
      place(d);
      for (const x of [-HALF_W, HALF_W]) for (const y of [y0, y1]) for (const z of [-HALF_D, HALF_D]) {
        corner.set(x, y, z).project(camera);
        if (Math.abs(corner.x) > 0.93 || corner.y > 0.8 || corner.y < -0.9) return false;
      }
      return true;
    };
    let lo = 12, hi = 220;
    for (let i = 0; i < 16; i++) { const mid = (lo + hi) / 2; if (inside(mid)) hi = mid; else lo = mid; }
    view.tdist = hi;
  }
  function place(d) {
    camera.position.set(target.x + d * Math.cos(view.el) * Math.sin(view.az), target.y + d * Math.sin(view.el), target.z + d * Math.cos(view.el) * Math.cos(view.az));
    camera.lookAt(target); camera.updateMatrixWorld(true);
  }

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    const portrait = w / h < 1.1;
    if (portrait !== view.portrait) { view.portrait = portrait; view.tel = view.el = portrait ? EL.tall : EL.wide; }
    needFit = true; wake();
  }
  new ResizeObserver(resize).observe(stage);

  // ---- 動畫（看得到才播放；減少動態時只畫靜態畫面） ----
  let visible = false, raf = 0, last = 0, t = 0, settle = 0, first = true;
  const v = new T.Vector3();
  function frame(now) {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now; t += dt;
    const k = first || reduce.matches ? 1 : Math.min(1, dt * 6);
    view.az += (view.taz - view.az) * k; view.el += (view.tel - view.el) * k;
    target.lerp(goal, k);
    if (needFit) { needFit = false; const a = view.az, e = view.el, tx = target.clone(); view.az = view.taz; view.el = view.tel; target.copy(goal); fit(); view.az = a; view.el = e; target.copy(tx); }
    view.dist += (view.tdist - view.dist) * k;
    place(view.dist);
    let fading = 0;
    fades.forEach(o => { const d = (o.goal ?? o.base) - o.mat.opacity; if (Math.abs(d) > 0.004) { o.mat.opacity += d * k; fading = 1; } else o.mat.opacity = o.goal ?? o.base; });
    if (active) active.paths.forEach(p => p.runners.forEach((d, j) => {
      d.visible = !reduce.matches;
      if (!d.visible) return;
      const s = ((t * 0.9 + j * p.total / 2) % p.total);
      let i = 1; while (i < p.lens.length - 1 && p.lens[i] < s) i++;
      d.position.copy(p.line[i - 1]).lerp(p.line[i], (s - p.lens[i - 1]) / ((p.lens[i] - p.lens[i - 1]) || 1));
    }));
    renderer.render(scene, camera);

    // 標籤跟著 3D 位置；互相重疊時往旁邊挪，挪不開就淡化（樓層牌、路線標記、車站優先）
    const w = stage.clientWidth, h = stage.clientHeight, f = focus(), placed = [];
    const isDim = l => !l.route && !l.fixed && active && !active.keys.has(l.key);
    labels.filter(l => !isDim(l)).concat(labels.filter(isDim)).forEach(l => {
      const shown = l.route ? !!active && active.id === l.route : f.has(l.level) && !(l.noGround && f.has('ground'));
      const dim = isDim(l);
      if (!shown && !l.fixed) { l.el.style.opacity = '0'; l.el.style.visibility = 'hidden'; return; }
      l.el.style.visibility = '';
      if (l.fixed) {                                                 // 樓層牌：貼在這片樓板在畫面上最左邊的角
        let best = 9;
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) { corner.set(sx * HALF_W, l.pos.y, sz * HALF_D).project(camera); if (corner.x < best) { best = corner.x; v.copy(corner); } }
      } else v.copy(l.pos).project(camera);
      const ew = l.el.offsetWidth, eh = l.el.offsetHeight;
      if (!ew) return;                                               // 手機版用 CSS 隱藏的標籤
      const x0 = (v.x + 1) / 2 * w, y0 = (1 - v.y) / 2 * h;
      const cx = d => Math.min(w - ew / 2 - 4, Math.max(ew / 2 + 4, x0 + d)), cy = d => Math.min(h - 4, Math.max(eh + 4, y0 + d));
      const hit = (xx, yy) => placed.some(r => Math.abs(r.x - xx) < (r.w + ew) / 2 + 3 && Math.abs(r.y - (yy - eh / 2)) < (r.h + eh) / 2 + 2);
      let x = cx(l.fixed ? ew / 2 + 6 : 0), y = null;
      if (l.fixed) { y = cy(eh / 2); for (const dy of [0, eh + 4, -eh - 4, eh * 2 + 8]) if (!hit(x, cy(eh / 2 + dy))) { y = cy(eh / 2 + dy); break; } }
      else outer: for (const dx of [0, ew * 0.6, -ew * 0.6]) for (const dy of [0, -eh * 0.7, eh * 0.7, -eh * 1.3, eh * 1.3]) if (!hit(cx(dx), cy(dy))) { x = cx(dx); y = cy(dy); break outer; }
      l.el.style.transform = `translate(-50%,-100%) translate(${x.toFixed(1)}px,${(y ?? cy(0)).toFixed(1)}px)`;
      l.el.style.opacity = v.z >= 1 ? '0' : l.fixed ? (shown ? '' : '.45') : y === null ? '0' : dim ? '.45' : '';
      if (y !== null) placed.push({ x, y: y - eh / 2, w: ew, h: eh });
    });
    first = false;
    const moving = Math.abs(view.taz - view.az) + Math.abs(view.tel - view.el) + target.distanceTo(goal) + Math.abs(view.tdist - view.dist) * 0.01 > 0.002 || fading;
    if (moving) settle = 0; else settle += dt;
    if (visible && (moving || (active && !reduce.matches) || settle < 0.3)) raf = requestAnimationFrame(frame);
  }
  function wake() { if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) wake(); }).observe(stage);
  host.classList.remove('is-loading'); host.classList.add('is-ready');
  sync(); target.copy(goal); resize();
  return { show };
}
window.OskMap3D = { mount };
})();
