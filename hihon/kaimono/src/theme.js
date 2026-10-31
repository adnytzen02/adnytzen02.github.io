// 外觀主題：淺色（預設）／深色／跟隨系統，選擇存在 localStorage
const KEY = 'shopping-relics:theme';

export const THEMES = [
  { id: 'light', label: '淺色', icon: 'light_mode' },
  { id: 'dark', label: '深色', icon: 'dark_mode' },
  { id: 'auto', label: '跟隨系統', icon: 'brightness_auto' },
];

export function getTheme() {
  const t = document.documentElement.dataset.theme;
  return THEMES.some((x) => x.id === t) ? t : 'light';
}

// 實際呈現的是淺色還是深色（auto 時看系統）
function isDark(theme) {
  return theme === 'dark' || (theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
}

function syncUI(theme) {
  const cur = THEMES.find((x) => x.id === theme);
  const next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
  const btn = document.getElementById('btn-theme');
  if (btn) {
    btn.querySelector('.ms').textContent = cur.icon;
    btn.setAttribute('aria-label', `外觀：${cur.label}，按下切換為${next.label}`);
    btn.title = `外觀：${cur.label}（按下切換為${next.label}）`;
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark(theme) ? '#0b1422' : '#f4f7f9');
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(KEY, theme); } catch { /* 無痕模式不記憶 */ }
  syncUI(theme);
}

export function cycleTheme() {
  const i = THEMES.findIndex((x) => x.id === getTheme());
  const next = THEMES[(i + 1) % THEMES.length];
  setTheme(next.id);
  return next;
}

export function initTheme() {
  syncUI(getTheme());
  // 跟隨系統時，系統切換要同步更新網址列顏色
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => syncUI(getTheme()));
}
