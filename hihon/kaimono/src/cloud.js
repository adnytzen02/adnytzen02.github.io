// Google Drive 雲端同步
// - 同步只要求兩個權限：openid（只拿到 Google 帳號識別碼 sub，沒有姓名、Email）
//   與 drive.appdata（只能讀寫本網站在你 Drive 裡的「應用程式專用隱藏資料夾」，看不到你其他檔案）
// - 匯出 PDF 到雲端時才另外要求 drive.file（只能存取本網站自己建立的檔案，例如匯出的 PDF）
// - 沒有後端：瀏覽器直接呼叫 Google API；存取權杖只放在記憶體，關掉分頁就消失
import { GOOGLE_CLIENT_ID } from './config.js';
import { store } from './store.js';

const META_KEY = 'shopping-relics:cloud';
const FILE_NAME = 'shopping-relics.json';
const DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';
const SCOPES = `openid ${DRIVE_SCOPE}`;
const FILE_SCOPE = 'https://www.googleapis.com/auth/drive.file';
const PDF_FOLDER = 'Shopping Relics';
const DRIVE = 'https://www.googleapis.com/drive/v3';
const UPLOAD = 'https://www.googleapis.com/upload/drive/v3';
const FILE_FIELDS = 'id,version,modifiedTime';
const AUTO_DELAY = 4000;

let token = null;          // { value, exp, scope }
let tokenClient = null;
let gisPromise = null;
let running = null;        // 同步進行中的 Promise（避免同時跑兩次）
let again = false;
let pending = null;        // 衝突時暫存的雲端資料
let checkWho = false;      // 拿到新權杖後要確認是哪個帳號
let autoTimer = null;
let status = { state: 'idle', message: '' };
const listeners = new Set();

/* ---------- 本機紀錄（不含權杖） ---------- */
const readMeta = () => { try { return JSON.parse(localStorage.getItem(META_KEY) || 'null') || {}; } catch { return {}; } };
let meta = readMeta();
function saveMeta(patch) {
  meta = patch === null ? {} : { ...meta, ...patch };
  try { patch === null ? localStorage.removeItem(META_KEY) : localStorage.setItem(META_KEY, JSON.stringify(meta)); } catch { /* 無法記住也能用 */ }
}

// 簡單雜湊（FNV-1a）：判斷「上次同步後，這台有沒有改過」
function hashStr(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(36) + s.length.toString(36);
}
const localHash = () => hashStr(store.dataJSON());

// phase：同步中再細分 'auth'（等 Google 登入）與 'transfer'（已登入、正在傳資料），首頁用來決定何時顯示「正在同步」
function setStatus(state, message = '', phase = '') {
  status = { state, message, phase };
  listeners.forEach((fn) => fn(cloudInfo()));
}

class CloudError extends Error {
  constructor(code, message) { super(message); this.code = code; }
}

/* ---------- 對外狀態 ---------- */
export function cloudAvailable() {
  if (!GOOGLE_CLIENT_ID) return { ok: false, reason: 'config' };
  const { protocol, hostname } = location;
  if (protocol !== 'https:' && hostname !== 'localhost' && hostname !== '127.0.0.1') return { ok: false, reason: 'origin' };
  return { ok: true };
}

export function cloudInfo() {
  return {
    linked: Boolean(meta.sub),
    idTail: meta.sub ? String(meta.sub).slice(-4) : '',
    lastSyncAt: meta.at || 0,
    hasToken: tokenValid(),
    dirty: Boolean(meta.sub) && meta.hash !== localHash(),
    ...status,
  };
}

// 開啟設定時先載入登入元件，按下按鈕時才能立刻開出登入視窗（避免被擋）
export function preloadCloud() { if (cloudAvailable().ok) loadGis().catch(() => {}); }

export function onCloudStatus(fn) { listeners.add(fn); return () => listeners.delete(fn); }

/* ---------- 登入（Google Identity Services，需在使用者點擊後呼叫） ---------- */
function loadGis() {
  if (window.google?.accounts?.oauth2) return Promise.resolve();
  gisPromise ??= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => { gisPromise = null; reject(new CloudError('network', '無法載入 Google 登入元件')); };
    document.head.append(s);
  });
  return gisPromise;
}

// 權杖還有效，而且包含需要的權限（同步用 drive.appdata；匯出 PDF 用 drive.file）
const tokenValid = (need = DRIVE_SCOPE) => Boolean(token && token.exp - Date.now() > 60_000
  && need.split(' ').every((sc) => sc === 'openid' || token.scope.split(' ').includes(sc)));

// scopes：這次要求的權限；need：一定要拿到的那一項（使用者可能在同意畫面取消勾選）
async function requestToken(scopes = SCOPES, need = DRIVE_SCOPE) {
  await loadGis();
  return new Promise((resolve, reject) => {
    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: scopes,
      include_granted_scopes: true, // 新權杖也帶著先前同意過的權限（同步與匯出 PDF 共用一個權杖）
      callback: (resp) => {
        if (resp.error) { reject(new CloudError('denied', '已取消授權')); return; }
        if (!window.google.accounts.oauth2.hasGrantedAllScopes(resp, need)) {
          reject(new CloudError('scope', need === FILE_SCOPE
            ? '沒有勾選「建立 Google Drive 檔案」的權限，無法存到雲端'
            : '沒有勾選 Google Drive 權限，無法同步'));
          return;
        }
        token = { value: resp.access_token, exp: Date.now() + Number(resp.expires_in || 3600) * 1000, scope: String(resp.scope || '') };
        checkWho = true;
        resolve();
      },
      error_callback: (err) => reject(new CloudError(err?.type === 'popup_failed_to_open' ? 'popup' : 'denied',
        err?.type === 'popup_failed_to_open' ? '登入視窗被瀏覽器擋住了，請允許彈出視窗後再試' : '登入視窗已關閉')),
    });
    tokenClient.requestAccessToken({ prompt: meta.sub ? '' : 'consent' });
  });
}

async function ensureToken(interactive) {
  if (tokenValid(SCOPES)) return;
  if (!interactive) throw new CloudError('auth', '需要重新連線 Google');
  await requestToken();
}

async function api(url, opts = {}) {
  let res;
  try {
    res = await fetch(url, { ...opts, headers: { Authorization: `Bearer ${token.value}`, ...opts.headers } });
  } catch {
    throw new CloudError('network', '網路連線失敗');
  }
  if (res.status === 401) { token = null; throw new CloudError('auth', '連線已逾時，請重新連線'); }
  if (res.status === 403) throw new CloudError('http', 'Google 拒絕了這個操作，請確認已同意權限（403）');
  if (res.status === 404) return null;
  if (!res.ok) throw new CloudError('http', `Google 回應錯誤（${res.status}）`);
  return res.status === 204 ? true : res.json();
}

/* ---------- Drive 檔案操作（appDataFolder） ---------- */
async function findFile() {
  const q = encodeURIComponent(`name='${FILE_NAME}' and trashed=false`);
  const r = await api(`${DRIVE}/files?spaces=appDataFolder&q=${q}&orderBy=modifiedTime desc&fields=files(${FILE_FIELDS})`);
  return r?.files?.[0] ?? null;
}
const fileMeta = (id) => api(`${DRIVE}/files/${id}?fields=${FILE_FIELDS}`);
const download = (id) => api(`${DRIVE}/files/${id}?alt=media`);

function payload() {
  return JSON.stringify({ app: 'shopping-relics', version: 1, savedAt: new Date().toISOString(), data: store.state });
}

async function upload(id) {
  const body = payload();
  if (id) {
    return api(`${UPLOAD}/files/${id}?uploadType=media&fields=${FILE_FIELDS}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body,
    });
  }
  const boundary = `sr${Date.now().toString(36)}`;
  const multipart = [
    `--${boundary}`, 'Content-Type: application/json; charset=UTF-8', '',
    JSON.stringify({ name: FILE_NAME, parents: ['appDataFolder'], mimeType: 'application/json' }),
    `--${boundary}`, 'Content-Type: application/json; charset=UTF-8', '', body, `--${boundary}--`,
  ].join('\r\n');
  return api(`${UPLOAD}/files?uploadType=multipart&fields=${FILE_FIELDS}`, {
    method: 'POST', headers: { 'Content-Type': `multipart/related; boundary=${boundary}` }, body: multipart,
  });
}

function markSynced(file) {
  saveMeta({ fileId: file.id, version: String(file.version), hash: localHash(), at: Date.now() });
}

function applyRemote(file, data) {
  if (!data || data.app !== 'shopping-relics' || !data.data) throw new CloudError('format', '雲端檔案格式不符');
  store.importData(data.data);
  markSynced(file);
}

/* ---------- 同步主流程 ---------- */
// 回傳 { action: 'uploaded' | 'downloaded' | 'none' | 'conflict', ... }
async function doSync(interactive) {
  await ensureToken(interactive);
  setStatus('syncing', '同步中…', 'transfer'); // 登入完成，開始和雲端比對、傳資料

  // 每次登入後確認帳號：只向 Google 取帳號識別碼 sub（openid 權限只會回傳這一項）
  if (checkWho || !meta.sub) {
    const me = await api('https://openidconnect.googleapis.com/v1/userinfo');
    if (!me?.sub) throw new CloudError('http', '無法取得 Google 帳號識別');
    if (meta.sub && meta.sub !== me.sub) saveMeta(null); // 換了帳號：不沿用舊帳號的同步紀錄
    saveMeta({ sub: me.sub });
    checkWho = false;
  }

  let remote = meta.fileId ? await fileMeta(meta.fileId) : null;
  remote ??= await findFile();
  const dirty = meta.hash !== localHash();

  if (!remote) {
    markSynced(await upload(null));
    return { action: 'uploaded' };
  }

  const remoteChanged = remote.id !== meta.fileId || String(remote.version) !== meta.version;

  // 這台裝置第一次和這個帳號同步
  if (!meta.hash) {
    const data = await download(remote.id);
    if (!store.state.items.length) { applyRemote(remote, data); return { action: 'downloaded' }; }
    return conflict(remote, data);
  }
  if (!remoteChanged && !dirty) return { action: 'none' };
  if (!remoteChanged && dirty) { markSynced(await upload(remote.id)); return { action: 'uploaded' }; }
  const data = await download(remote.id);
  if (!dirty) { applyRemote(remote, data); return { action: 'downloaded' }; }
  return conflict(remote, data);
}

function conflict(remote, data) {
  pending = { remote, data };
  return {
    action: 'conflict',
    remoteAt: data?.savedAt ? new Date(data.savedAt).getTime() : new Date(remote.modifiedTime).getTime(),
    remoteCount: data?.data?.items?.length ?? 0,
    localCount: store.state.items.length,
  };
}

export async function syncNow({ interactive = true } = {}) {
  if (running) { again = true; return running; }
  setStatus('syncing', '同步中…', 'auth');
  running = (async () => {
    try {
      const r = await doSync(interactive);
      setStatus(r.action === 'conflict' ? 'conflict' : 'ok', r.action === 'conflict' ? '雲端和這台都有修改，請選擇要保留哪一份' : '');
      return r;
    } catch (err) {
      // 使用者自己關掉登入視窗：回到原本狀態，不顯示錯誤
      if (err.code === 'denied') setStatus('idle');
      else setStatus(err.code === 'auth' ? 'auth' : 'error', err.message || '同步失敗');
      throw err;
    } finally {
      running = null;
      if (again) { again = false; scheduleAuto(); }
    }
  })();
  return running;
}

export const connectGoogle = () => syncNow({ interactive: true });

// 衝突時選擇：'cloud' 用雲端取代這台；'local' 用這台覆蓋雲端
export async function resolveConflict(choice) {
  if (!pending) return;
  const { remote, data } = pending;
  pending = null;
  setStatus('syncing', '同步中…');
  try {
    await ensureToken(true);
    if (choice === 'cloud') applyRemote(remote, data);
    else markSynced(await upload(remote.id));
    setStatus('ok');
  } catch (err) {
    setStatus(err.code === 'auth' ? 'auth' : 'error', err.message || '同步失敗');
    throw err;
  }
}

// 中斷連結：撤銷授權、清除本機的同步紀錄；這台的清單與雲端檔案都保留
export function disconnectGoogle() {
  if (token && window.google?.accounts?.oauth2) window.google.accounts.oauth2.revoke(token.value, () => {});
  token = null;
  pending = null;
  saveMeta(null);
  setStatus('idle');
}

// 刪除雲端資料：刪掉 Drive 隱藏資料夾裡的同步檔，再中斷連結
export async function deleteCloudData() {
  await ensureToken(true);
  const file = meta.fileId ? await fileMeta(meta.fileId) : await findFile();
  if (file) await api(`${DRIVE}/files/${file.id}`, { method: 'DELETE' });
  disconnectGoogle();
}

/* ---------- 自動同步：已連線且權杖有效時，資料改動 4 秒後自動上傳 ---------- */
function scheduleAuto() {
  clearTimeout(autoTimer);
  if (!meta.sub || !tokenValid() || status.state === 'conflict') return;
  autoTimer = setTimeout(() => {
    if (meta.hash === localHash()) return; // 沒有新改動就不打 API
    syncNow({ interactive: false }).catch(() => { /* 狀態已顯示在設定裡 */ });
  }, AUTO_DELAY);
}
store.subscribe(() => {
  scheduleAuto();
  if (meta.sub) listeners.forEach((fn) => fn(cloudInfo())); // 更新「有未同步的修改」提示
});

/* ---------- 匯出 PDF 到 Google Drive（存在「我的雲端硬碟 › Shopping Relics」資料夾，看得到、可分享） ---------- */
// 第一步：取得 drive.file 權限。要在使用者按下按鈕後「馬上」呼叫，登入視窗才不會被瀏覽器擋住；
// 產生 PDF 比較花時間，所以先拿權限、再產生檔案、最後上傳
export async function prepareDriveFile() {
  if (!cloudAvailable().ok) throw new CloudError('config', '雲端功能需要從網址（https）開啟網站');
  if (tokenValid(FILE_SCOPE)) return;
  await requestToken(meta.sub ? `${SCOPES} ${FILE_SCOPE}` : FILE_SCOPE, FILE_SCOPE);
}

// 找本網站建立的資料夾（drive.file 只看得到自己建立的檔案），沒有就建立
async function pdfFolder() {
  if (meta.pdfFolder) {
    const f = await api(`${DRIVE}/files/${meta.pdfFolder}?fields=id,trashed`);
    if (f && !f.trashed) return f.id;
  }
  const q = encodeURIComponent(`name='${PDF_FOLDER}' and mimeType='application/vnd.google-apps.folder' and trashed=false`);
  const found = await api(`${DRIVE}/files?q=${q}&fields=files(id)&pageSize=1`);
  let id = found?.files?.[0]?.id;
  if (!id) {
    const made = await api(`${DRIVE}/files?fields=id`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: PDF_FOLDER, mimeType: 'application/vnd.google-apps.folder' }),
    });
    id = made?.id;
  }
  if (!id) throw new CloudError('http', '無法在 Google Drive 建立資料夾');
  saveMeta({ pdfFolder: id });
  return id;
}

// 上傳 PDF；回傳 { id, link }（link 可以在新分頁打開這份檔案）
export async function uploadPdf(blob, name) {
  if (!tokenValid(FILE_SCOPE)) throw new CloudError('auth', '連線已逾時，請再按一次');
  const folder = await pdfFolder();
  const boundary = `srpdf${Date.now().toString(36)}`;
  const body = new Blob([
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`,
    JSON.stringify({ name, parents: [folder], mimeType: 'application/pdf' }),
    `\r\n--${boundary}\r\nContent-Type: application/pdf\r\n\r\n`,
    blob,
    `\r\n--${boundary}--`,
  ]);
  const file = await api(`${UPLOAD}/files?uploadType=multipart&fields=id,webViewLink`, {
    method: 'POST', headers: { 'Content-Type': `multipart/related; boundary=${boundary}` }, body,
  });
  if (!file?.id) throw new CloudError('http', '上傳失敗');
  return { id: file.id, link: file.webViewLink || `https://drive.google.com/file/d/${file.id}/view` };
}
