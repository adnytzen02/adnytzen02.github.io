// 鐵道頁：新幹線路線立體地圖（東海道・山陽，three.js）
// 一般 <script>（不用 type="module"），直接點兩下打開 HTML 也能執行；由 train.js 在桌機條件符合時載入
// 地形：Natural Earth 50m（公有領域）簡化；車站時間：Nozomi 東京起參考值（依車次不同）
(() => {
'use strict';
const DATA = {"rings":[[[-3.917,3.523],[-3.893,3.579],[-4.089,4.122],[-4.048,4.204],[-4.08,4.379],[-4.176,4.627],[-4.278,4.545],[-4.391,4.55],[-4.438,4.637],[-4.342,4.72],[-4.496,4.879],[-4.726,4.997],[-4.613,4.675],[-4.697,4.453],[-4.782,4.415],[-4.703,4.381],[-4.645,4.437],[-4.63,4.29],[-4.738,4.285],[-4.831,4.487],[-4.802,4.666],[-4.723,4.729],[-4.785,4.845],[-4.892,4.751],[-5.079,4.754],[-5.163,4.592],[-5.073,4.619],[-4.988,4.438],[-4.994,4.357],[-5.12,4.21],[-5.067,4.18],[-5.114,3.906],[-5.0,3.881],[-4.843,3.661],[-4.773,3.494],[-4.802,3.454],[-4.718,3.351],[-4.895,3.378],[-4.753,3.297],[-4.761,3.219],[-4.901,3.076],[-4.919,2.912],[-5.064,2.812],[-5.154,2.88],[-5.079,3.025],[-5.172,3.125],[-4.983,3.143],[-4.968,3.312],[-5.125,3.407],[-5.154,3.315],[-5.09,3.248],[-5.184,3.206],[-5.3,3.243],[-5.469,3.432],[-5.373,3.275],[-5.551,3.074],[-5.53,2.93],[-5.457,2.946],[-5.469,3.01],[-5.411,3.005],[-5.385,3.162],[-5.353,3.125],[-5.256,3.155],[-5.303,2.984],[-5.463,2.934],[-5.492,2.837],[-5.527,2.898],[-5.545,2.802],[-5.612,2.789],[-5.597,2.63],[-5.524,2.601],[-5.379,2.719],[-5.364,2.603],[-5.431,2.545],[-5.361,2.557],[-5.379,2.447],[-5.245,2.554],[-5.122,2.466],[-5.184,2.427],[-5.09,2.334],[-5.023,2.425],[-4.942,2.395],[-4.936,2.331],[-5.023,2.319],[-4.898,2.282],[-4.863,2.145],[-4.648,2.056],[-4.52,2.108],[-4.444,2.034],[-4.482,2.184],[-4.365,2.376],[-4.153,2.425],[-4.027,2.324],[-3.911,2.333],[-3.853,2.515],[-3.966,2.65],[-4.039,2.637],[-4.036,2.726],[-3.719,2.734],[-3.794,2.873],[-3.713,2.875],[-3.736,2.925],[-3.643,2.908],[-3.719,3.016],[-3.576,3.057],[-3.876,3.413],[-3.896,3.477],[-3.853,3.508]],[[-1.464,2.172],[-1.77,2.427],[-1.881,2.763],[-2.082,2.507],[-2.233,2.463],[-2.594,2.635],[-2.65,2.841],[-2.83,3.013],[-2.868,3.148],[-2.83,3.288],[-2.9,3.222],[-3.133,3.248],[-3.066,3.091],[-3.189,3.064],[-3.232,3.108],[-3.258,2.959],[-3.331,2.981],[-3.244,2.868],[-3.323,2.797],[-3.247,2.831],[-3.197,2.773],[-3.25,2.723],[-3.215,2.686],[-3.305,2.658],[-3.299,2.555],[-3.346,2.532],[-3.631,2.652],[-3.092,2.284],[-3.063,2.096],[-2.897,1.932],[-2.915,1.877],[-2.877,1.858],[-2.728,2.067],[-2.571,2.01],[-2.417,2.035],[-2.312,1.921],[-2.312,1.816],[-2.379,1.74],[-2.265,1.769],[-2.093,1.63],[-1.957,1.652],[-1.907,1.608],[-1.887,1.676],[-1.846,1.645],[-1.665,1.792],[-1.499,1.76],[-1.543,1.961],[-1.453,2.062],[-1.499,2.147]],[[-2.49,1.554],[-2.603,1.679],[-2.577,1.634],[-2.632,1.573],[-2.682,1.72],[-2.769,1.74],[-2.772,1.682],[-2.696,1.645],[-2.758,1.61],[-2.784,1.667],[-2.964,1.689],[-3.11,1.801],[-3.2,1.796],[-3.221,1.647],[-3.36,1.65],[-3.459,1.762],[-3.468,2.01],[-3.532,2.062],[-3.509,2.159],[-3.608,2.225],[-3.553,2.137],[-3.759,2.002],[-3.818,2.03],[-3.783,1.973],[-3.85,1.944],[-3.969,1.963],[-3.987,2.015],[-4.059,1.968],[-4.091,2.022],[-4.135,1.961],[-4.24,2.076],[-4.421,1.953],[-4.531,2.076],[-4.56,1.887],[-4.511,1.816],[-4.555,1.721],[-4.531,1.645],[-4.423,1.618],[-4.49,1.581],[-4.31,1.632],[-4.31,1.571],[-4.222,1.591],[-4.281,1.63],[-4.115,1.576],[-3.966,1.34],[-3.756,1.286],[-3.311,0.825],[-3.124,0.705],[-3.127,0.56],[-2.857,0.484],[-2.758,0.399],[-2.568,0.431],[-2.618,0.504],[-2.507,0.546],[-2.361,0.467],[-1.831,0.453],[-1.587,0.328],[-1.272,0.359],[-1.03,0.227],[-0.966,0.328],[-1.062,0.455],[-1.013,0.408],[-0.955,0.553],[-0.888,0.517],[-0.94,0.463],[-0.838,0.397],[-0.8,0.502],[-0.69,0.457],[-0.71,0.514],[-0.628,0.509],[-0.643,0.438],[-0.538,0.465],[-0.556,0.357],[-0.419,0.369],[-0.439,0.271],[-0.39,0.235],[-0.349,0.338],[-0.323,0.224],[-0.433,0.001],[-0.305,-0.253],[-0.095,-0.391],[0.152,-0.73],[0.216,-0.889],[0.184,-1.127],[0.138,-1.149],[0.202,-1.359],[0.679,-1.517],[0.694,-1.453],[0.604,-1.414],[0.612,-1.315],[0.493,-1.283],[0.417,-1.185],[0.347,-1.222],[0.292,-1.077],[0.388,-1.046],[0.443,-1.099],[0.408,-0.835],[0.647,-0.758],[0.767,-0.933],[1.41,-1.183],[1.658,-1.377],[1.908,-1.828],[2.354,-2.132],[2.421,-2.455],[2.648,-2.818],[2.849,-3.407],[2.878,-3.728],[2.805,-3.88],[2.636,-3.858],[2.59,-4.006],[2.689,-3.961],[2.814,-4.126],[2.852,-4.354],[2.718,-4.609],[2.869,-4.768],[3.041,-4.795],[3.091,-5.028],[3.132,-4.986],[3.161,-5.026],[3.03,-5.134],[3.091,-5.149],[3.108,-5.266],[3.204,-5.183],[3.274,-5.225],[3.344,-5.195],[3.399,-4.854],[3.478,-4.839],[3.551,-5.011],[3.743,-4.873],[3.865,-5.155],[3.807,-5.264],[3.688,-5.183],[3.452,-5.144],[3.566,-5.538],[3.863,-5.354],[4.014,-5.43],[3.956,-5.161],[3.994,-4.67],[4.311,-4.251],[4.323,-4.07],[4.41,-3.996],[4.454,-3.773],[4.422,-3.598],[4.48,-3.638],[4.506,-3.55],[4.41,-3.461],[4.498,-3.466],[4.372,-3.331],[4.436,-3.328],[4.369,-3.275],[4.381,-3.17],[4.323,-3.152],[4.378,-3.098],[4.302,-3.091],[4.326,-3.022],[4.23,-3.037],[4.232,-2.951],[4.157,-2.985],[4.186,-2.851],[4.116,-2.882],[4.064,-2.769],[4.098,-2.703],[4.014,-2.661],[4.072,-2.639],[4.02,-2.569],[4.084,-2.519],[4.02,-2.429],[4.084,-2.385],[4.046,-2.372],[4.066,-2.267],[3.988,-2.38],[3.886,-2.407],[3.778,-2.323],[3.705,-2.362],[3.615,-2.171],[3.574,-1.965],[3.659,-1.727],[3.647,-1.134],[3.609,-0.967],[3.481,-0.886],[3.289,-0.283],[3.353,-0.013],[3.542,0.279],[3.367,0.311],[3.222,0.435],[3.143,0.619],[3.149,0.803],[3.091,0.87],[2.939,0.877],[2.773,1.093],[2.634,1.044],[2.727,1.0],[2.686,0.842],[2.724,0.754],[2.654,0.681],[2.913,0.433],[2.791,0.328],[2.66,0.397],[2.642,0.347],[2.66,0.489],[2.543,0.546],[2.546,0.701],[2.625,0.75],[2.561,0.806],[2.578,0.86],[2.52,0.865],[2.462,0.691],[2.252,0.703],[2.141,0.766],[2.15,0.864],[2.083,0.946],[2.135,1.129],[2.016,1.35],[1.888,1.404],[1.818,1.309],[1.83,1.021],[1.85,0.973],[1.949,0.97],[1.865,0.879],[1.661,0.904],[1.629,1.021],[1.509,1.083],[1.387,1.287],[1.402,1.406],[1.186,1.333],[0.848,1.323],[0.417,1.421],[0.464,1.335],[0.493,1.375],[0.633,1.269],[0.65,1.311],[0.668,1.233],[0.586,1.184],[0.542,1.237],[0.42,1.216],[0.371,1.167],[0.388,1.076],[0.336,1.225],[0.382,1.304],[0.289,1.26],[0.26,1.061],[0.312,0.911],[0.283,0.96],[0.266,0.921],[0.274,0.968],[0.129,1.015],[0.015,1.319],[0.041,1.399],[0.344,1.576],[0.321,1.733],[0.239,1.747],[0.28,1.693],[0.184,1.71],[0.167,1.666],[-0.133,1.816],[-0.154,1.91],[-0.227,1.926],[-0.183,2.029],[-0.218,2.007],[-0.221,2.062],[-0.32,2.108],[-0.436,2.407],[-0.599,2.567],[-0.594,2.518],[-0.853,2.449],[-0.949,2.329],[-0.896,2.287],[-1.118,2.106],[-1.167,2.12],[-1.153,2.022],[-1.083,1.975],[-1.138,1.932],[-1.115,1.863],[-1.06,1.85],[-1.164,1.733],[-0.911,1.515],[-0.879,1.308],[-1.007,1.299],[-1.019,1.35],[-1.176,1.375],[-1.421,1.233],[-1.625,1.213],[-1.735,1.294],[-1.855,1.272],[-1.796,1.303],[-1.93,1.414],[-2.073,1.412],[-1.986,1.419],[-2.073,1.549],[-2.19,1.558],[-2.245,1.473]],[[7.497,-7.387],[7.538,-7.365],[7.378,-7.304],[7.305,-7.169],[6.988,-7.129],[7.014,-7.08],[6.88,-7.044],[6.889,-6.99],[6.769,-6.988],[6.714,-7.047],[6.667,-6.924],[6.443,-6.938],[6.329,-7.002],[5.977,-6.845],[5.724,-6.603],[5.54,-6.32],[5.453,-5.928],[5.226,-6.105],[4.821,-6.271],[4.302,-6.6],[3.988,-6.565],[3.621,-6.299],[3.426,-6.565],[3.201,-6.565],[3.094,-6.433],[3.067,-6.259],[3.274,-6.105],[3.408,-6.134],[3.801,-5.8],[3.647,-5.712],[3.499,-5.771],[3.405,-5.746],[3.42,-5.811],[3.365,-5.827],[3.321,-5.735],[3.199,-5.681],[3.181,-5.531],[3.053,-5.482],[3.0,-5.401],[2.864,-5.443],[2.814,-5.582],[2.936,-5.823],[2.948,-5.982],[2.642,-6.311],[2.706,-6.627],[2.948,-6.757],[2.995,-6.814],[3.076,-6.771],[3.254,-6.997],[3.097,-7.25],[3.213,-7.373],[3.475,-7.196],[3.65,-7.23],[3.659,-7.176],[3.778,-7.14],[3.982,-7.318],[3.912,-7.713],[4.16,-7.937],[4.171,-8.277],[4.285,-8.641],[4.25,-8.885],[4.104,-9.207],[4.165,-9.437],[4.305,-9.423],[4.404,-9.521],[5.243,-8.586],[5.578,-8.322],[5.887,-8.189],[5.808,-8.182],[5.849,-8.113],[6.163,-8.13],[6.207,-8.103],[6.152,-8.032],[6.193,-8.02],[6.265,-8.12],[6.373,-7.956],[6.705,-7.922],[7.154,-8.346],[7.177,-8.248],[6.935,-7.775],[7.194,-7.306],[7.09,-7.316],[7.296,-7.23],[7.349,-7.336]],[[-4.712,5.625],[-4.77,5.747],[-4.866,5.774],[-4.954,5.605],[-4.855,5.532]],[[-4.409,5.159],[-4.403,5.389],[-4.479,5.627],[-4.537,5.644],[-4.572,5.539]],[[-4.927,3.488],[-4.881,3.488],[-4.965,3.624],[-4.971,3.575],[-5.064,3.604],[-5.088,3.564]],[[-5.128,3.454],[-5.093,3.661],[-5.248,3.81],[-5.291,3.748],[-5.245,3.707],[-5.207,3.694],[-5.28,3.645],[-5.256,3.467]],[[2.663,2.864],[2.733,2.912],[2.686,2.959],[2.625,2.881]],[[-5.987,3.011],[-5.92,3.015],[-6.014,3.182],[-6.069,3.033],[-5.999,2.976],[-5.979,2.834]],[[-5.618,2.589],[-5.705,2.802],[-5.763,2.831],[-5.784,2.787],[-5.743,2.814],[-5.711,2.652]],[[-5.44,2.226],[-5.484,2.302],[-5.533,2.216],[-5.51,2.128],[-5.446,2.155]],[[-3.451,2.132],[-3.457,2.047],[-3.378,2.103],[-3.27,2.073],[-3.337,2.159]],[[-2.833,1.792],[-2.868,1.802],[-2.848,1.748],[-2.795,1.726]],[[-5.816,1.72],[-5.845,1.872],[-5.897,1.9],[-5.9,1.671]],[[-1.211,1.392],[-1.298,1.627],[-1.246,1.73],[-1.432,1.809],[-1.47,1.672]],[[-5.702,1.38],[-5.778,1.61],[-5.749,1.59],[-5.743,1.662],[-5.804,1.696],[-5.786,1.644],[-5.848,1.625],[-5.807,1.352],[-5.69,1.299]],[[2.36,1.22],[2.38,1.323],[2.307,1.281],[2.31,1.203]],[[-2.533,-0.275],[-2.568,-0.158],[-2.676,-0.205],[-2.594,-0.342]],[[1.585,-2.07],[1.678,-2.075],[1.678,-2.036],[1.608,-1.892],[1.512,-1.828],[1.387,-1.809],[1.492,-1.967],[1.413,-1.978],[1.419,-2.09],[1.6,-2.319],[1.635,-2.308]],[[2.467,-6.244],[2.421,-6.078],[2.383,-6.055],[2.366,-6.102],[2.366,-6.191]],[[3.906,-9.172],[3.845,-9.099],[3.746,-9.17],[3.804,-9.249]],[[3.682,-9.45],[3.67,-9.265],[3.641,-9.42],[3.615,-9.464]],[[-1.726,1.446],[-1.741,1.569],[-1.764,1.531],[-1.826,1.583],[-1.881,1.48]]],"route":[[2.643,0.319],[2.62,0.372],[2.522,0.493],[2.148,0.744],[2.086,0.896],[1.528,1.028],[0.999,1.296],[0.713,1.237],[0.309,0.829],[0.15,0.684],[-0.17,0.685],[-0.6,1.014],[-0.809,1.267],[-1.055,1.294],[-1.464,1.173],[-2.089,1.334],[-2.539,1.511],[-3.256,1.602],[-4.129,1.907],[-4.545,2.113],[-4.918,2.41]],"stations":[{"name":"東京","ja":"とうきょう","i":0,"t":0,"major":1},{"name":"品川","ja":"しながわ","i":1,"t":6,"major":0},{"name":"新橫濱","ja":"しんよこはま","i":2,"t":17,"major":0},{"name":"名古屋","ja":"なごや","i":8,"t":94,"major":1},{"name":"京都","ja":"きょうと","i":11,"t":128,"major":1},{"name":"新大阪","ja":"しんおおさか","i":12,"t":142,"major":1},{"name":"新神戶","ja":"しんこうべ","i":13,"t":156,"major":0},{"name":"岡山","ja":"おかやま","i":15,"t":189,"major":0},{"name":"廣島","ja":"ひろしま","i":17,"t":229,"major":1},{"name":"小倉","ja":"こくら","i":19,"t":275,"major":0},{"name":"博多","ja":"はかた","i":20,"t":292,"major":1}]};
const LAND_H = 0.16, RAIL_Y = LAND_H + 0.06;
const C_TOKAIDO = 0x5ee0ff, C_SANYO = 0xffd23f, C_TRAIN = 0xffffff;
const fmt = m => m >= 60 ? `${Math.floor(m / 60)} 小時 ${String(m % 60).padStart(2, '0')} 分` : `${m} 分`;

function mount(host) {
  const T = window.THREE;
  const stage = host.querySelector('.tm3d__stage');
  const canvas = host.querySelector('canvas');
  const labelBox = host.querySelector('.tm3d__labels');
  const info = host.querySelector('.tm3d__info');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.outputColorSpace = T.SRGBColorSpace;
  const scene = new T.Scene();
  scene.fog = new T.Fog(0x0f1f38, 15, 28);
  const camera = new T.PerspectiveCamera(30, 2, 0.1, 100);
  const target = new T.Vector3(-1.15, 0.2, 1.35);

  scene.add(new T.HemisphereLight(0xc6d6ff, 0x0a1324, 1.15));
  const sun = new T.DirectionalLight(0xfff0d0, 1.5); sun.position.set(-3, 9, 7); scene.add(sun);

  // ---- 陸地 ----
  const land = new T.Group(); scene.add(land);
  const capMat = new T.MeshStandardMaterial({ color: 0x27466e, roughness: 0.85, flatShading: true });
  const sideMat = new T.MeshStandardMaterial({ color: 0x132640, roughness: 0.9, emissive: 0x16304f, emissiveIntensity: 0.4, flatShading: true });
  const coastMat = new T.LineBasicMaterial({ color: 0x9fc3ff, transparent: true, opacity: 0.45 });
  DATA.rings.forEach(r => {
    const geo = new T.ExtrudeGeometry(new T.Shape(r.map(([x, z]) => new T.Vector2(x, -z))), { depth: LAND_H, bevelEnabled: false, curveSegments: 1 });
    geo.rotateX(-Math.PI / 2);
    land.add(new T.Mesh(geo, [capMat, sideMat]));
    land.add(new T.LineLoop(new T.BufferGeometry().setFromPoints(r.map(([x, z]) => new T.Vector3(x, LAND_H + 0.004, z))), coastMat));
  });
  // 海面點陣（像月台地面的止滑點）
  const dots = [];
  for (let x = -12; x <= 12; x += 0.36) for (let z = -12; z <= 10; z += 0.36) dots.push(x, -0.02, z);
  const dg = new T.BufferGeometry(); dg.setAttribute('position', new T.Float32BufferAttribute(dots, 3));
  scene.add(new T.Points(dg, new T.PointsMaterial({ color: 0x6f8fc0, size: 0.03, transparent: true, opacity: 0.5 })));

  // ---- 路線：東海道（東京–新大阪）、山陽（新大阪–博多）兩段發光管 ----
  const P = DATA.route.map(([x, z]) => new T.Vector3(x, RAIL_Y, z));
  const iOsaka = DATA.stations.find(s => s.name === '新大阪').i;
  const glow = (color, op) => new T.MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false, blending: T.AdditiveBlending });
  const tube = (pts, color) => {
    const curve = new T.CatmullRomCurve3(pts, false, 'centripetal');
    scene.add(new T.Mesh(new T.TubeGeometry(curve, pts.length * 16, 0.028, 8, false), new T.MeshBasicMaterial({ color })));
    scene.add(new T.Mesh(new T.TubeGeometry(curve, pts.length * 16, 0.075, 8, false), glow(color, 0.22)));
  };
  tube(P.slice(0, iOsaka + 1), C_TOKAIDO);
  tube(P.slice(iOsaka), C_SANYO);
  const full = new T.CatmullRomCurve3(P, false, 'centripetal');   // 列車行駛用

  // ---- 車站 ----
  const stGeo = new T.CylinderGeometry(1, 1, 1, 24);
  const ringGeo = new T.RingGeometry(0.13, 0.17, 40); ringGeo.rotateX(-Math.PI / 2);
  const stations = DATA.stations.map(s => {
    const p = P[s.i], r = s.major ? 0.085 : 0.05, h = s.major ? 0.16 : 0.1;
    const g = new T.Group(); g.position.set(p.x, RAIL_Y - 0.03, p.z);
    const body = new T.Mesh(stGeo, new T.MeshBasicMaterial({ color: 0xffffff })); body.scale.set(r, h, r); body.position.y = h / 2;
    const ring = new T.Mesh(ringGeo, new T.MeshBasicMaterial({ color: s.i <= iOsaka ? C_TOKAIDO : C_SANYO, transparent: true, opacity: 0, depthWrite: false }));
    g.add(body, ring); scene.add(g);
    return { s, g, body, ring, top: h };
  });

  // ---- 列車：三節膠囊沿線行駛（造型為一般化的白色車身，非特定車種） ----
  const train = new T.Group(); scene.add(train);
  const carGeo = new T.CapsuleGeometry(0.045, 0.16, 4, 10); carGeo.rotateZ(Math.PI / 2);
  const cars = [0, 1, 2].map(k => {
    const m = new T.Mesh(carGeo, new T.MeshStandardMaterial({ color: C_TRAIN, emissive: 0x9fd8ff, emissiveIntensity: 0.55, roughness: 0.4 }));
    train.add(m); return m;
  });
  const headGlow = new T.Mesh(new T.CylinderGeometry(0.11, 0.11, 0.01, 24), glow(0xffffff, 0.35)); train.add(headGlow);

  // ---- 標籤（主要站）＋資訊框 ----
  let sel = null, hover = null;
  const labels = stations.filter(x => x.s.major).map(x => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'tm3d__label';
    b.innerHTML = `<b>${x.s.name}</b><span lang="ja">${x.s.ja}</span>`;
    b.setAttribute('aria-label', `${x.s.name}：東京起約 ${fmt(x.s.t)}`);
    b.addEventListener('click', () => select(x.s.i));
    b.addEventListener('pointerenter', () => setHover(x.s.i));
    b.addEventListener('pointerleave', () => setHover(null));
    b.addEventListener('focus', () => setHover(x.s.i));
    b.addEventListener('blur', () => setHover(null));
    labelBox.appendChild(b);
    return { x, el: b };
  });
  // 頁面上的車站清單也連動
  document.querySelectorAll('[data-st]').forEach(li => {
    const i = +li.dataset.st;
    li.addEventListener('pointerenter', () => setHover(i));
    li.addEventListener('pointerleave', () => setHover(null));
    li.addEventListener('click', () => select(i));
  });
  function setHover(i) { hover = i; wake(); }
  function select(i) {
    sel = i; const s = DATA.stations.find(q => q.i === i);
    const toEnd = DATA.stations[DATA.stations.length - 1].t - s.t;
    info.innerHTML = s.t === 0
      ? `<b>${s.name}</b><span>起點站・到博多約 ${fmt(toEnd)}</span>`
      : `<b>${s.name}</b><span>東京起約 ${fmt(s.t)}${toEnd ? `・到博多約 ${fmt(toEnd)}` : '（終點）'}</span>`;
    info.hidden = false;
    labels.forEach(l => l.el.setAttribute('aria-pressed', String(l.x.s.i === i)));
    document.querySelectorAll('[data-st]').forEach(li => li.classList.toggle('is-on', +li.dataset.st === i));
    wake();
  }

  // ---- 視角：拖曳旋轉（限制角度，不攔截捲動） ----
  const view = { az: -0.12, el: 0.92, dist: 11.5, taz: -0.12, tel: 0.92 };
  let drag = null;
  canvas.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, az: view.taz, el: view.tel, moved: false }; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', e => {
    if (drag) {
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
      view.taz = T.MathUtils.clamp(drag.az - dx * 0.004, -0.5, 0.35);
      view.tel = T.MathUtils.clamp(drag.el + dy * 0.004, 0.72, 1.15);
      wake();
    } else pick(e, false);
  });
  canvas.addEventListener('pointerup', e => { const d = drag; drag = null; if (d && !d.moved) pick(e, true); });
  canvas.addEventListener('pointerleave', () => { if (!drag) setHover(null); });
  const ray = new T.Raycaster(), ndc = new T.Vector2(), bodies = stations.map(x => x.body);
  function pick(e, go) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(bodies, false)[0];
    const x = hit && stations.find(q => q.body === hit.object);
    canvas.style.cursor = x ? 'pointer' : 'grab';
    if (go) { if (x) select(x.s.i); } else if ((x ? x.s.i : null) !== hover) setHover(x ? x.s.i : null);
  }

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); wake();
  }
  new ResizeObserver(resize).observe(stage);

  // ---- 動畫（看得到才播放） ----
  let visible = false, raf = 0, last = 0, t0 = -1;
  const v = new T.Vector3(), tan = new T.Vector3();
  const RUN = 16, REST = 1.6;                 // 東京→博多 16 秒，到站停 1.6 秒
  function frame(now) {
    raf = 0;
    if (t0 < 0) t0 = now;
    const t = (now - t0) / 1000, dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
    land.scale.y = 0.02 + 0.98 * (1 - Math.pow(1 - Math.min(1, t / 1.1), 3));
    // 列車位置：等速沿線（加減速讓進出站更自然）
    const cyc = (t % (RUN + REST)) / RUN, u = Math.min(1, cyc), e = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
    cars.forEach((c, k) => {
      const uu = T.MathUtils.clamp(e - k * 0.011, 0, 1);
      full.getPointAt(uu, v); full.getTangentAt(uu, tan);
      c.position.set(v.x, v.y + 0.03, v.z);
      c.rotation.set(0, Math.atan2(-tan.z, tan.x), 0);
    });
    headGlow.position.copy(cars[0].position); headGlow.position.y = RAIL_Y - 0.02;
    train.visible = t > 1.1;
    // 車站：hover／選取時亮圈
    stations.forEach((x, k) => {
      const on = hover === x.s.i || sel === x.s.i;
      const pulse = (t * 0.7 + k * 0.13) % 1;
      x.ring.scale.setScalar(on ? 1 + pulse * 1.6 : 1);
      x.ring.material.opacity = on ? (1 - pulse) * 0.9 : 0;
    });
    view.az += (view.taz - view.az) * Math.min(1, dt * 6);
    view.el += (view.tel - view.el) * Math.min(1, dt * 6);
    const drift = Math.sin(t * 0.22) * 0.025;
    camera.position.set(target.x + view.dist * Math.cos(view.el) * Math.sin(view.az + drift), target.y + view.dist * Math.sin(view.el), target.z + view.dist * Math.cos(view.el) * Math.cos(view.az + drift));
    camera.lookAt(target);
    renderer.render(scene, camera);
    // 標籤位置：跟著車站，重疊時往上錯開
    const W = stage.clientWidth, H = stage.clientHeight, placed = [];
    labels.map(l => {
      if (!l.w) { l.w = l.el.offsetWidth; l.h = l.el.offsetHeight; }
      v.copy(l.x.g.position); v.y += l.x.top + 0.12; v.project(camera);
      return { l, x: (v.x * 0.5 + 0.5) * W, y: (-v.y * 0.5 + 0.5) * H };
    }).sort((a, b) => b.y - a.y).forEach(o => {
      const w = o.l.w, h = o.l.h, minY = h + 8;
      let x = T.MathUtils.clamp(o.x, w / 2 + 8, W - w / 2 - 8), y = Math.max(o.y, minY);
      for (let k = 0; k < 6; k++) {
        const hit = placed.find(q => Math.abs(q.x - x) < (q.w + w) / 2 + 4 && y > q.y - q.h - 4 && y - h - 4 < q.y);
        if (!hit) break;
        const up = hit.y - hit.h - 6;
        if (up >= minY) y = up; else x = T.MathUtils.clamp(hit.x + (o.x >= hit.x ? 1 : -1) * ((hit.w + w) / 2 + 6), w / 2 + 8, W - w / 2 - 8);
      }
      placed.push({ x, y, w, h });
      o.l.el.style.setProperty('--lead', `${Math.round(6 + o.y - y)}px`);
      o.l.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
      o.l.el.classList.toggle('is-on', hover === o.l.x.s.i || sel === o.l.x.s.i);
      o.l.el.style.opacity = t > 0.8 ? 1 : 0;
    });
    if (visible && !document.hidden) raf = requestAnimationFrame(frame);
  }
  function wake() { if (!raf && visible) raf = requestAnimationFrame(frame); }
  // 是否在畫面內：IntersectionObserver 之外，再用捲動與分頁切換時的位置檢查補強（部分環境 IO 回報較慢）
  const checkVis = () => {
    const r = stage.getBoundingClientRect();
    const v = r.width > 0 && r.bottom > 0 && r.top < innerHeight;
    if (v && !visible) resize();
    visible = v; wake();
  };
  new IntersectionObserver(checkVis, { threshold: 0.05 }).observe(stage);
  let pend = 0;
  const onScroll = () => { if (!pend) pend = requestAnimationFrame(() => { pend = 0; checkVis(); }); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  document.addEventListener('click', e => { if (e.target.closest('[role="tab"]')) setTimeout(checkVis, 50); });
  document.addEventListener('visibilitychange', wake);

  host.classList.remove('is-loading');
  canvas.style.cursor = 'grab';
  resize();
  checkVis();
}
window.TrainMap3D = { mount };
})();
