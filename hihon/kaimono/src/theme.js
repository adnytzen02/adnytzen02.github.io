// 外觀分兩層，各自存在 localStorage：
// - 主題（skin）：整體設計風格，清單在 src/skins.js，樣式在 css/themes/<id>.css
// - 外觀（theme）：淺色（預設）／深色／跟隨系統
// <html> 上會有 data-skin、data-theme，以及換算後實際呈現的 data-scheme（light／dark）
import { SKINS, DEFAULT_SKIN } from './skins.js';

const KEY = 'shopping-relics:theme';
const SKIN_KEY = 'shopping-relics:skin';

export { SKINS };

export const THEMES = [
  { id: 'light', label: '淺色', icon: 'light_mode' },
  { id: 'dark', label: '深色', icon: 'dark_mode' },
  { id: 'auto', label: '跟隨系統', icon: 'brightness_auto' },
];

export function getTheme() {
  const t = document.documentElement.dataset.theme;
  return THEMES.some((x) => x.id === t) ? t : 'light';
}

export function getSkin() {
  const s = document.documentElement.dataset.skin;
  return SKINS.some((x) => x.id === s) ? s : DEFAULT_SKIN;
}

// 實際呈現的是淺色還是深色（auto 時看系統）
function isDark(theme) {
  return theme === 'dark' || (theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
}

// 把「跟隨系統」換算成 light／dark 寫到 data-scheme，主題的 CSS 只需要寫 [data-scheme="dark"]
function syncScheme(theme = getTheme()) {
  document.documentElement.dataset.scheme = isDark(theme) ? 'dark' : 'light';
}

function syncUI(theme) {
  const cur = THEMES.find((x) => x.id === theme);
  const btn = document.getElementById('btn-theme');
  if (btn) {
    btn.querySelector('.ms').textContent = cur.icon;
    btn.setAttribute('aria-label', `外觀與主題（目前：${cur.label}）`);
    btn.title = `外觀與主題（目前：${cur.label}）`;
  }
  syncScheme(theme);
  syncThemeColor(theme);
}

// 手機瀏覽器網址列的顏色：首頁永遠是深色的動畫畫面，其他頁面跟著主題
export function syncThemeColor(theme = getTheme()) {
  const home = document.body?.dataset.route === 'home';
  const colors = SKINS.find((x) => x.id === getSkin()).themeColor;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', home ? '#010104' : isDark(theme) ? colors.dark : colors.light);
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(KEY, theme); } catch { /* 無痕模式不記憶 */ }
  syncUI(theme);
}

// 主題在 skins.js 設了 fx: false 時，關閉共用質感層（effects.css）
function syncFx(skin) {
  document.documentElement.dataset.fx = skin.fx === false ? 'off' : 'on';
}

export function setSkin(id) {
  const skin = SKINS.find((x) => x.id === id) || SKINS.find((x) => x.id === DEFAULT_SKIN);
  document.documentElement.dataset.skin = skin.id;
  syncFx(skin);
  try { localStorage.setItem(SKIN_KEY, skin.id); } catch { /* 無痕模式不記憶 */ }
  syncThemeColor();
  return skin;
}

export function cycleTheme() {
  const i = THEMES.findIndex((x) => x.id === getTheme());
  const next = THEMES[(i + 1) % THEMES.length];
  setTheme(next.id);
  return next;
}

export function initTheme() {
  // 存的主題若已不存在（例如之後移除了某個主題），退回預設主題
  document.documentElement.dataset.skin = getSkin();
  syncFx(SKINS.find((x) => x.id === getSkin()));
  syncUI(getTheme());
  // 跟隨系統時，系統切換要同步更新 data-scheme 與網址列顏色
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => syncUI(getTheme()));
}
