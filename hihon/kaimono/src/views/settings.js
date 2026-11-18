// 設定與資料備份
import { store } from '../store.js';
import { refreshRate, setManualRate } from '../rate.js';
import { createDialog, openDialog, closeDialog, confirmDialog, choiceDialog, esc, icon, num, fmtTime, toast, download, downloadBlob, syncOverlay } from '../ui.js';
import { cloudAvailable, cloudInfo, onCloudStatus, preloadCloud, connectGoogle, syncNow, resolveConflict, disconnectGoogle, deleteCloudData, prepareDriveFile, uploadPdf } from '../cloud.js';
import { buildListPdf, pdfFileName } from '../pdf.js';
import { THEMES, SKINS, getTheme, setTheme, getSkin, setSkin } from '../theme.js';
import { listTrips, saveTrips, startNewTrip, switchTrip, removeTrip } from '../trips.js';
import { getIntroMode, setIntroMode } from './home.js';

// 雲端同步區塊（狀態改變時整塊重繪）
// 說明原則：每顆按鈕旁直接寫「按了會怎樣」；同步檔看不到的原因與確認方法收在「同步檔存在哪裡？」
const whereHTML = `<details class="cloud-more">
    <summary>${icon('help', 'sm')}同步檔存在哪裡？為什麼在 Google Drive 裡看不到？</summary>
    <div class="cloud-more-body">
      <p>同步檔存在你 Google Drive 的<strong>「應用程式專用隱藏資料夾」</strong>，所以在雲端硬碟的檔案清單裡<strong>看不到，這是正常的</strong>。也因為只用這個隱藏資料夾，本網站碰不到你 Drive 裡的其他檔案。</p>
      <p><strong>想確認有存上去：</strong>用電腦打開 drive.google.com → 右上角齒輪「設定」→ 左側「管理應用程式」，找到本網站（名稱和登入時授權畫面上的一樣），說明下方會顯示隱藏資料的大小。</p>
      <p>匯出的 PDF 不一樣：存在「我的雲端硬碟 › Shopping Relics」資料夾，看得到、可以分享。</p>
    </div>
  </details>`;
const privacyHTML = `<p class="hint">本網站只取得 Google 的<strong>帳號識別碼</strong>（不含姓名、Email），沒有自己的伺服器，看不到你的清單。<a href="privacy.html" target="_blank" rel="noopener">隱私權說明<span class="sr-only">（另開新視窗）</span></a></p>`;
// 一顆按鈕＋一行說明
const act = (btn, id, desc) => `<div class="cloud-act">${btn.replace('<button ', `<button aria-describedby="${id}" `)}<p class="cloud-act-desc" id="${id}">${desc}</p></div>`;

function cloudSection() {
  const avail = cloudAvailable();
  const c = cloudInfo();
  if (!avail.ok) {
    return `<p class="cloud-status is-off">${icon('info', 'sm')}${avail.reason === 'config'
      ? '雲端同步尚未啟用：網站還沒設定 Google 用戶端 ID。'
      : '雲端同步需要從網址（https）開啟網站，直接開啟檔案時無法使用。'}</p>${privacyHTML}`;
  }
  const busy = c.state === 'syncing' ? ' disabled aria-busy="true"' : '';
  if (!c.linked) {
    return `<p class="cloud-lead">登入 Google 後，清單會存到你自己的 Google Drive。換手機或電腦時，登入同一個帳號就能接著用。</p>
      ${act(`<button type="button" class="btn btn-gold" data-cloud="connect"${busy}>${icon('sync')}登入 Google 並開始同步</button>`, 'cloud-d-connect',
    '第一次登入時：雲端還沒有資料，就把這台的清單存上去；雲端已有資料、這台是空的，就載入雲端的清單；兩邊都有清單，會先問你要保留哪一份。')}
      ${c.state === 'error' ? `<p class="cloud-status is-error">${icon('error', 'sm')}${esc(c.message)}</p>` : ''}
      ${whereHTML}${privacyHTML}`;
  }
  const line = {
    syncing: [`${icon('sync', 'sm')}同步中…`, ''],
    conflict: [`${icon('warning', 'sm')}${esc(c.message)}`, 'is-warn'],
    auth: [`${icon('info', 'sm')}連線已逾時，按「立即同步」重新連線`, 'is-warn'],
    error: [`${icon('error', 'sm')}${esc(c.message)}`, 'is-error'],
  }[c.state] ?? (c.dirty
    ? [`${icon('pending', 'sm')}這台有尚未同步的修改${c.hasToken ? '，幾秒後會自動上傳' : '，按「立即同步」上傳'}`, 'is-warn']
    : c.hasToken
      ? [`${icon('check_circle', 'sm')}已同步${c.lastSyncAt ? ` · ${fmtTime(c.lastSyncAt)}` : ''}，之後的修改會自動上傳`, 'is-ok']
      : [`${icon('check_circle', 'sm')}上次同步${c.lastSyncAt ? `：${fmtTime(c.lastSyncAt)}` : ''}。要取得其他裝置的修改，請按「立即同步」`, 'is-ok']);
  return `<p class="cloud-account">${icon('verified', 'sm')}已登入 Google（帳號識別碼末 4 碼 ${esc(c.idTail)}）</p>
    <p class="cloud-status ${line[1]}">${line[0]}</p>
    <div class="cloud-acts">
      ${act(`<button type="button" class="btn btn-gold" data-cloud="sync"${busy}>${icon('sync')}立即同步</button>`, 'cloud-d-sync',
    '比對這台和雲端，把比較新的一份帶到另一邊；兩邊都改過時，會先問你要保留哪一份。<strong>每次打開網站後先按一次</strong>，之後約 1 小時內的修改會自動上傳。')}
      ${act(`<button type="button" class="btn btn-ghost" data-cloud="disconnect">${icon('logout')}登出 Google</button>`, 'cloud-d-out',
    '停止同步。這台的清單和雲端的資料都會保留，之後登入同一個帳號就能接著同步。')}
      ${act(`<button type="button" class="btn btn-danger-ghost" data-cloud="delete">${icon('delete_forever')}刪除雲端資料</button>`, 'cloud-d-del',
    '刪掉 Google Drive 裡的同步檔並登出，<strong>無法復原</strong>；這台的清單會保留。')}
    </div>
    ${whereHTML}${privacyHTML}`;
}

const fmtCount = (n) => `${n} 件商品`;

// 執行同步，遇到「雲端和這台都改過」時讓使用者選
// 進度與結果都用「正在同步」動畫視窗顯示（首頁登入、設定的立即同步、開站提醒都走這裡）：
// Google 登入完成、開始傳資料時才出現；完成後顯示結果並自動消失；衝突時先收起來讓使用者選
// 回傳同步結果（{ action }），失敗或取消時回傳 null；動畫視窗消失後才回傳
export async function runSync(fn) {
  const ov = syncOverlay();
  const off = onCloudStatus((info) => {
    if (info.state === 'syncing' && info.phase === 'transfer') ov.show();
    else if (info.state === 'conflict') ov.close();
  });
  try {
    const r = await fn();
    off();
    if (r?.action === 'conflict') {
      await ov.close();
      const pick = await choiceDialog({
        title: '要保留哪一份清單？',
        body: `<p>雲端和這台裝置的資料不一樣：</p>
          <ul class="choice-facts"><li>雲端：${fmtCount(r.remoteCount)}，${fmtTime(r.remoteAt)} 儲存</li><li>這台：${fmtCount(r.localCount)}</li></ul>
          <p>沒選到的那份會被取代，<strong>無法復原</strong>。不確定的話，先取消並匯出這台的備份。</p>`,
        choices: [
          { value: 'cloud', text: '用雲端資料取代這台', tone: 'gold', icon: 'cloud_download' },
          { value: 'local', text: '用這台資料覆蓋雲端', icon: 'cloud_upload' },
        ],
      });
      if (!pick) return { action: 'conflict' };
      ov.show();
      await resolveConflict(pick);
      await ov.done(pick === 'cloud'
        ? { title: '已換成雲端的清單', sub: `共 ${fmtCount(store.state.items.length)}` }
        : { title: '已用這台的清單覆蓋雲端', sub: '其他裝置同步後就會看到' });
      return { action: 'resolved' };
    }
    const msg = {
      downloaded: { title: '已從雲端載入清單', sub: `共 ${fmtCount(store.state.items.length)}` },
      uploaded: { title: '已存到 Google Drive', sub: '其他裝置登入同一個帳號就能看到' },
      none: { title: '同步完成', sub: '這台和雲端的清單已是最新' },
    }[r?.action];
    if (msg) { ov.show(); await ov.done(msg); } else await ov.close();
    return r;
  } catch (err) {
    off();
    // 自己關掉登入視窗：不算錯誤
    if (err?.code === 'denied') await ov.close();
    else await ov.fail({ title: '同步失敗', sub: err?.message || '請稍後再試' });
    return null;
  }
}

// 主題卡片：左半是淺色、右半是深色的預覽
function skinCard(k) {
  const half = (p) => `<span class="skin-half" style="--p-bg:${p.bg};--p-surface:${p.surface};--p-accent:${p.accent}"><span class="skin-key"></span></span>`;
  return `<label class="skin-card">
    <input type="radio" name="skin" value="${k.id}" ${getSkin() === k.id ? 'checked' : ''}>
    <span class="skin-body">
      <span class="skin-preview" aria-hidden="true">${half(k.preview.light)}${half(k.preview.dark)}</span>
      <span class="skin-name">${esc(k.label)}${icon('check_circle', 'sm')}</span>
      <span class="skin-desc">${esc(k.desc)}</span>
    </span>
  </label>`;
}

// 多趟旅程：目前這趟＋封存清單
function tripsSection() {
  const trips = listTrips();
  const cur = store.state;
  return `
    <p class="hint">目前：<strong>${esc(cur.settings.tripName)}</strong>（${cur.items.length} 件商品）。封存後可以開始新的一趟，之後隨時切換回來。</p>
    <div class="btn-row">
      <button type="button" class="btn btn-ghost" data-trip="new">${icon('add_circle')}封存並開始新旅程</button>
    </div>
    ${trips.length ? `<ul class="trip-list">
      ${trips.map((t) => `<li>
        <div><strong>${esc(t.name)}</strong><span class="muted small">${t.count} 件商品 · ${fmtTime(t.savedAt)} 封存</span></div>
        <button type="button" class="btn btn-sm btn-ghost" data-trip="switch" data-id="${esc(t.id)}">${icon('swap_horiz', 'sm')}切換</button>
        <button type="button" class="icon-btn icon-btn-sm icon-btn-danger" data-trip="remove" data-id="${esc(t.id)}" aria-label="刪除封存的旅程「${esc(t.name)}」" title="刪除">${icon('delete', 'sm')}</button>
      </li>`).join('')}
    </ul>` : ''}
    <p class="hint">封存的旅程只存在這台裝置，雲端同步只同步目前這趟；匯出備份時會一併帶出。</p>`;
}

function body() {
  const s = store.state.settings;
  return `
  <form class="dlg-shell settings-shell" novalidate>
    <header class="dlg-head">
      <p class="eyebrow">${icon('tune', 'sm')}SETTINGS · 設定</p>
      <h2 id="settings-title" class="dlg-title">旅程設定與資料備份</h2>
      <button type="button" class="icon-btn dlg-close" aria-label="關閉設定">${icon('close')}</button>
      <!-- 分類導覽：常用的帳號同步、匯出放最前面，點一下直接跳到該區 -->
      <nav class="st-nav" aria-label="設定分類">
        <button type="button" class="st-nav-btn" data-goto="sec-sync">帳號同步</button>
        <button type="button" class="st-nav-btn" data-goto="sec-export">匯出 PDF</button>
        <button type="button" class="st-nav-btn" data-goto="sec-trip">旅程預算</button>
        <button type="button" class="st-nav-btn" data-goto="sec-rate">匯率</button>
        <button type="button" class="st-nav-btn" data-goto="sec-luggage">行李</button>
        <button type="button" class="st-nav-btn" data-goto="sec-trips">多趟旅程</button>
        <button type="button" class="st-nav-btn" data-goto="sec-look">外觀</button>
        <button type="button" class="st-nav-btn" data-goto="sec-data">備份</button>
      </nav>
    </header>
    <div class="dlg-scroll">
      <fieldset class="fs" id="sec-sync" tabindex="-1">
        <legend class="fs-title">${icon('sync_alt', 'sm')}帳號與雲端同步（Google Drive）</legend>
        <div data-cloud-region aria-live="polite">${cloudSection()}</div>
      </fieldset>

      <fieldset class="fs" id="sec-export" tabindex="-1">
        <legend class="fs-title">${icon('picture_as_pdf', 'sm')}匯出清單（PDF）</legend>
        <p class="hint">把目前這趟的購物清單依店鋪排好、做成 A4 的 PDF，可以列印、傳給同行的人，或在沒網路時打開。</p>
        <div class="seg-pills" role="radiogroup" aria-label="PDF 要包含哪些商品">
          <label class="pill"><input type="radio" name="pdfScope" value="all" checked><span>全部商品</span></label>
          <label class="pill"><input type="radio" name="pdfScope" value="pending"><span>只列待買</span></label>
        </div>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-pdf="local">${icon('download')}下載到這台裝置</button>
          <button type="button" class="btn btn-ghost" data-pdf="cloud"${cloudAvailable().ok ? '' : ' aria-disabled="true"'} aria-describedby="hint-pdf-cloud">${icon('cloud_upload')}存到 Google Drive</button>
        </div>
        <p class="hint" id="hint-pdf-cloud">${cloudAvailable().ok
    ? '存到「我的雲端硬碟 › Shopping Relics」資料夾。第一次會請你同意「建立 Google Drive 檔案」的權限，本網站只能存取自己建立的檔案。'
    : '存到 Google Drive 需要從網址（https）開啟網站。'}</p>
        <div data-pdf-status role="status" aria-live="polite"></div>
      </fieldset>

      <fieldset class="fs" id="sec-trip" tabindex="-1">
        <legend class="fs-title">${icon('flight_takeoff', 'sm')}旅程與預算</legend>
        <div class="grid-2">
          <div class="field span2">
            <label for="st-trip">旅程名稱</label>
            <input id="st-trip" name="tripName" value="${esc(s.tripName)}" maxlength="40">
          </div>
          <div class="field">
            <label for="st-budget">購物預算（日圓）</label>
            <div class="input-affix"><span aria-hidden="true">¥</span><input id="st-budget" name="budget" type="number" inputmode="numeric" min="0" step="1000" value="${s.budget}"></div>
          </div>
          <div class="field">
            <label for="st-fee">預設退稅手續費 %</label>
            <input id="st-fee" name="refundFeePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${s.refundFeePct}" aria-describedby="hint-st-fee">
            <p class="hint" id="hint-st-fee">新制由店家決定，首日回報多在 0%～2.3%，也有每筆收固定金額的店；唐吉訶德、Bic Camera 為 0（已內建）。本網站以含稅價估算</p>
          </div>
          <div class="field">
            <label for="st-rebate">刷卡淨回饋 %</label>
            <input id="st-rebate" name="cardRebatePct" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="${s.cardRebatePct}" aria-describedby="hint-st-rebate">
            <p class="hint" id="hint-st-rebate">回饋扣掉海外手續費後的數字，不用可填 0</p>
          </div>
        </div>
      </fieldset>

      <fieldset class="fs" id="sec-rate" tabindex="-1">
        <legend class="fs-title">${icon('currency_exchange', 'sm')}匯率</legend>
        <div class="rate-row">
          <div class="field grow">
            <label for="st-rate">1 日圓 = ? 台幣</label>
            <input id="st-rate" name="rate" type="number" inputmode="decimal" min="0.01" max="5" step="0.0001" value="${s.rate}">
          </div>
          <button type="button" class="btn btn-ghost" data-sync>${icon('sync')}抓最新匯率</button>
        </div>
        <p class="hint">目前來源：${s.rateSource === 'manual' ? '手動輸入' : s.rateSource === 'api' ? esc(s.rateProvider || '公開匯率 API') : '預設值'}${s.rateUpdatedAt ? ` · ${fmtTime(s.rateUpdatedAt)}` : ''}。修改數字後儲存，就會改用手動匯率。</p>
      </fieldset>

      <fieldset class="fs" id="sec-luggage" tabindex="-1">
        <legend class="fs-title">${icon('luggage', 'sm')}行李</legend>
        <div class="grid-2">
          <div class="field"><label for="st-cl">託運限重（kg）</label><input id="st-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${s.checkedLimit}"></div>
          <div class="field"><label for="st-cb">託運基本重量（kg）</label><input id="st-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${s.checkedBase}" aria-describedby="hint-base"></div>
          <div class="field"><label for="st-pl">隨身限重（kg）</label><input id="st-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${s.carryLimit}"></div>
          <div class="field"><label for="st-pb">隨身基本重量（kg）</label><input id="st-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${s.carryBase}"></div>
        </div>
        <p class="hint" id="hint-base">基本重量＝行李箱本身加上衣物等非購物品。</p>
      </fieldset>

      <fieldset class="fs" id="sec-trips" tabindex="-1">
        <legend class="fs-title">${icon('inventory_2', 'sm')}多趟旅程</legend>
        <div data-trips-region>${tripsSection()}</div>
      </fieldset>

      <fieldset class="fs" id="sec-look" tabindex="-1">
        <legend class="fs-title">${icon('auto_awesome', 'sm')}主題</legend>
        <div class="skin-grid" role="radiogroup" aria-label="主題">
          ${SKINS.map(skinCard).join('')}
        </div>
        <p class="hint">主題決定整體的設計風格，選擇後立即套用。首頁片頭維持金色夜景，不隨主題改變。</p>
      </fieldset>

      <fieldset class="fs" id="sec-look2" tabindex="-1">
        <legend class="fs-title">${icon('light_mode', 'sm')}外觀</legend>
        <div class="seg-pills" role="radiogroup" aria-label="外觀（深淺色）">
          ${THEMES.map((t) => `<label class="pill"><input type="radio" name="theme" value="${t.id}" ${getTheme() === t.id ? 'checked' : ''}><span>${icon(t.icon, 'sm')}${t.label}</span></label>`).join('')}
        </div>
        <p class="hint">選擇後立即套用，並記在這台裝置。</p>
      </fieldset>

      <fieldset class="fs" id="sec-intro" tabindex="-1">
        <legend class="fs-title">${icon('movie', 'sm')}首頁片頭</legend>
        <div class="seg-pills" role="radiogroup" aria-label="首頁片頭的版本">
          <label class="pill"><input type="radio" name="intro" value="gl" ${getIntroMode() === 'gl' ? 'checked' : ''}><span>${icon('auto_awesome', 'sm')}華麗版</span></label>
          <label class="pill"><input type="radio" name="intro" value="2d" ${getIntroMode() === '2d' ? 'checked' : ''}><span>${icon('light_mode', 'sm')}輕量版</span></label>
        </div>
        <p class="hint">華麗版需要較新的裝置，跑不動時會自動改用輕量版。變更後下次回到首頁生效；完整的片頭只在第一次播，之後可在首頁按「重播片頭」。</p>
      </fieldset>

      <fieldset class="fs" id="sec-data" tabindex="-1">
        <legend class="fs-title">${icon('database', 'sm')}資料備份</legend>
        <p class="hint">清單存在這台裝置的瀏覽器；沒有連結 Google 的話，換手機或清除瀏覽資料前，記得先匯出備份。</p>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-export>${icon('download')}匯出備份（JSON）</button>
          <label class="btn btn-ghost file-btn">${icon('upload')}匯入備份<input type="file" accept="application/json,.json" class="sr-only" data-import></label>
        </div>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-demo>${icon('auto_awesome')}載入示範資料</button>
          <button type="button" class="btn btn-danger-ghost" data-reset>${icon('delete_forever')}清除全部資料</button>
        </div>
      </fieldset>
    </div>
    <footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-cancel>取消</button>
      <button type="submit" class="btn btn-gold">${icon('save')}儲存設定</button>
    </footer>
  </form>`;
}

export function openSettings() {
  const dlg = createDialog('dlg-settings', body(), 'settings-title');
  const form = dlg.querySelector('form');
  const initialRate = store.state.settings.rate;

  // 雲端同步狀態變動時重繪該區塊（對話框關閉後就取消訂閱）
  preloadCloud();
  const region = dlg.querySelector('[data-cloud-region]');
  const off = onCloudStatus(() => {
    if (!dlg.isConnected) { off(); return; }
    const focused = document.activeElement?.dataset?.cloud;
    region.innerHTML = cloudSection();
    if (focused) region.querySelector(`[data-cloud="${focused}"]`)?.focus();
  });

  /* ---------- 分類導覽：點了跳到該區；捲動時標出目前所在的分類 ---------- */
  const scroller = dlg.querySelector('.dlg-scroll');
  const navBtns = [...dlg.querySelectorAll('[data-goto]')];
  const sections = [...dlg.querySelectorAll('.dlg-scroll > fieldset[id]')];
  // 外觀底下還有「外觀」「首頁片頭」兩區，同樣算在「外觀」
  const navOf = (id) => navBtns.find((b) => b.dataset.goto === id) ?? navBtns.find((b) => b.dataset.goto === 'sec-look');
  let current = null;
  const markNav = () => {
    const top = scroller.getBoundingClientRect().top + 24;
    // 捲到底時，最後一區不一定能頂到上方，直接算最後一區
    const atEnd = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4;
    const sec = atEnd ? sections.at(-1) : sections.filter((x) => x.getBoundingClientRect().top <= top).at(-1) ?? sections[0];
    const btn = navOf(sec.id);
    if (btn === current) return;
    current?.removeAttribute('aria-current');
    btn.setAttribute('aria-current', 'true');
    current = btn;
    // 導覽列本身可以橫向捲動：把目前分類捲進可見範圍（只動導覽列，不動整個視窗）
    const nav = btn.parentElement;
    const l = btn.offsetLeft - nav.offsetLeft;
    if (l < nav.scrollLeft || l + btn.offsetWidth > nav.scrollLeft + nav.clientWidth) nav.scrollLeft = l - 16;
  };
  let raf = 0;
  scroller.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(markNav); }, { passive: true });
  requestAnimationFrame(markNav);

  /* ---------- 匯出 PDF ---------- */
  const pdfStatus = dlg.querySelector('[data-pdf-status]');
  let pdfBusy = false;
  async function exportPdf(btn) {
    if (pdfBusy) return;
    const kind = btn.dataset.pdf;
    if (btn.getAttribute('aria-disabled') === 'true') {
      toast({ title: '目前無法存到 Google Drive', message: '需要從網址（https）開啟網站，可以先下載到這台裝置。', tone: 'muted', duration: 5000 });
      return;
    }
    const scope = form.elements.pdfScope.value;
    const count = scope === 'pending' ? store.state.items.filter((i) => !i.purchased).length : store.state.items.length;
    if (!count) {
      toast({ title: scope === 'pending' ? '沒有待買的商品' : '清單是空的', message: '加入商品後再匯出。', tone: 'muted', duration: 3500 });
      return;
    }
    pdfBusy = true;
    const label = btn.innerHTML;
    try {
      // 存到雲端：先在按下的當下取得權限（登入視窗才不會被擋），再產生檔案
      if (kind === 'cloud') await prepareDriveFile();
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      btn.innerHTML = `${icon('pending')}產生中…`;
      pdfStatus.innerHTML = `<p class="cloud-status">${icon('pending', 'sm')}正在產生 PDF（${count} 件商品）…</p>`;
      const blob = await buildListPdf(store.state, { scope });
      const name = pdfFileName(store.state);
      const size = blob.size > 1048576 ? `${(blob.size / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(blob.size / 1024))} KB`;
      if (kind === 'local') {
        downloadBlob(name, blob);
        pdfStatus.innerHTML = `<p class="cloud-status is-ok">${icon('check_circle', 'sm')}已下載「${esc(name)}」（${size}）</p>`;
      } else {
        btn.innerHTML = `${icon('cloud_upload')}上傳中…`;
        pdfStatus.innerHTML = `<p class="cloud-status">${icon('cloud_upload', 'sm')}正在上傳到 Google Drive（${size}）…</p>`;
        const { link } = await uploadPdf(blob, name);
        pdfStatus.innerHTML = `<p class="cloud-status is-ok">${icon('check_circle', 'sm')}<span>已存到「我的雲端硬碟 › Shopping Relics」。<a href="${esc(link)}" target="_blank" rel="noopener">在 Google Drive 開啟${icon('open_in_new', 'sm')}<span class="sr-only">（另開新視窗）</span></a></span></p>`;
        toast({ title: '已存到 Google Drive', message: esc(name), tone: 'muted', duration: 3500 });
      }
    } catch (err) {
      if (err?.code === 'denied') pdfStatus.innerHTML = ''; // 自己關掉登入視窗：不算錯誤
      else pdfStatus.innerHTML = `<p class="cloud-status is-error">${icon('error', 'sm')}${esc(err?.message || '匯出失敗，請稍後再試')}</p>`;
    } finally {
      pdfBusy = false;
      btn.disabled = false;
      btn.removeAttribute('aria-busy');
      btn.innerHTML = label;
    }
  }

  dlg.addEventListener('click', async (e) => {
    const t = e.target;
    const goto = t.closest('[data-goto]');
    if (goto) {
      const sec = dlg.querySelector(`#${goto.dataset.goto}`);
      const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
      const top = sec.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 8;
      scroller.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
      sec.focus({ preventScroll: true }); // 讀螢幕軟體與鍵盤從這一區接著往下
      return;
    }
    const pdfBtn = t.closest('[data-pdf]');
    if (pdfBtn) { exportPdf(pdfBtn); return; }
    const cloudAct = t.closest('[data-cloud]')?.dataset.cloud;
    if (cloudAct === 'connect') runSync(connectGoogle);
    if (cloudAct === 'sync') runSync(() => syncNow({ interactive: true }));
    if (cloudAct === 'disconnect') {
      const ok = await confirmDialog({ title: '登出 Google 帳號？', body: '這台的清單和雲端的同步檔都會保留，只是之後不再自動同步。再登入同一個帳號就能接著同步。', confirmText: '登出' });
      if (ok) { disconnectGoogle(); toast({ title: '已登出 Google', tone: 'muted', duration: 2500 }); }
    }
    if (cloudAct === 'delete') {
      const ok = await confirmDialog({ title: '刪除雲端資料？', body: '會刪除你 Google Drive 隱藏資料夾裡的<strong>同步檔</strong>並登出，<strong>無法復原</strong>。這台裝置的清單會保留。', confirmText: '刪除雲端資料', danger: true });
      if (ok) {
        try { await deleteCloudData(); toast({ title: '雲端資料已刪除', tone: 'muted', duration: 3000 }); }
        catch (err) { toast({ title: '刪除失敗', message: esc(err?.message || '請稍後再試'), tone: 'error' }); }
      }
    }
    if (t.closest('.dlg-close, [data-cancel]')) { closeDialog(dlg); return; }
    if (t.closest('[data-sync]')) {
      const btn = t.closest('[data-sync]');
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      const r = await refreshRate({ force: true });
      btn.disabled = false;
      btn.removeAttribute('aria-busy');
      if (r.ok) {
        form.elements.rate.value = r.rate;
        toast({ title: '匯率已更新', message: `1 JPY = ${num(r.rate, 4)} TWD`, tone: 'muted', duration: 3000 });
      } else {
        toast({ title: '暫時抓不到匯率', message: '網路或匯率服務無回應，可以手動輸入。', tone: 'error' });
      }
    }
    const tripBtn = t.closest('[data-trip]');
    if (tripBtn) {
      const act = tripBtn.dataset.trip;
      const trip = listTrips().find((x) => x.id === tripBtn.dataset.id);
      const full = () => toast({ title: '儲存空間不足', message: '瀏覽器的儲存空間滿了，請先刪除不需要的封存旅程或商品照片。', tone: 'error' });
      if (act === 'new') {
        const ok = await confirmDialog({
          title: '封存並開始新旅程？',
          body: `「${esc(store.state.settings.tripName)}」的 <strong>${store.state.items.length} 件商品</strong>、收款與打包記錄會封存起來，之後可以切換回來。新旅程會沿用匯率、預算、行李限重與自訂店鋪。`,
          confirmText: '封存並開始',
        });
        if (!ok) return;
        if (!startNewTrip('新的旅程')) { full(); return; }
        closeDialog(dlg);
        toast({ title: '已開始新的旅程', message: '可以在設定裡修改旅程名稱。', tone: 'muted' });
      } else if (act === 'switch' && trip) {
        const ok = await confirmDialog({
          title: `切換到「${trip.name}」？`,
          body: store.state.items.length
            ? `目前的「${esc(store.state.settings.tripName)}」會先封存，再載入「${esc(trip.name)}」的 ${trip.count} 件商品。`
            : `目前的「${esc(store.state.settings.tripName)}」沒有商品，不會封存；直接載入「${esc(trip.name)}」的 ${trip.count} 件商品。`,
          confirmText: '切換旅程',
        });
        if (!ok) return;
        if (!switchTrip(trip.id)) { full(); return; }
        closeDialog(dlg);
        toast({ title: `已切換到「${trip.name}」`, tone: 'muted' });
      } else if (act === 'remove' && trip) {
        const ok = await confirmDialog({
          title: `刪除封存的「${trip.name}」？`,
          body: `會刪除這趟封存的 <strong>${trip.count} 件商品</strong>與所有記錄，<strong>無法復原</strong>。`,
          confirmText: '刪除這趟旅程',
          danger: true,
        });
        if (!ok) return;
        removeTrip(trip.id);
        dlg.querySelector('[data-trips-region]').innerHTML = tripsSection();
        dlg.querySelector('[data-trip="new"]')?.focus();
        toast({ title: '已刪除封存的旅程', tone: 'muted', duration: 3000 });
      }
      return;
    }
    if (t.closest('[data-export]')) {
      // 備份檔一併帶出封存的旅程
      const backup = { ...JSON.parse(store.exportJSON()), archivedTrips: listTrips() };
      download(`shopping-relics-backup-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(backup, null, 2), 'application/json');
    }
    if (t.closest('[data-demo]')) {
      store.loadDemo();
      toast({ title: '已載入示範資料', message: '價格為示意數字，可在清單頁清除。' });
    }
    if (t.closest('[data-reset]')) {
      const ok = await confirmDialog({
        title: '清除全部資料？',
        body: `會刪除清單中的 <strong>${store.state.items.length} 件商品</strong>、打包清單與所有設定，<strong>無法復原</strong>。建議先匯出備份。`,
        confirmText: '清除全部資料',
        danger: true,
      });
      if (ok) {
        store.resetAll();
        closeDialog(dlg);
        toast({ title: '資料已全部清除', tone: 'muted' });
      }
    }
  });

  // 主題與外觀立即套用，不必按儲存
  form.addEventListener('change', (e) => {
    if (e.target.name === 'skin') setSkin(e.target.value);
    if (e.target.name === 'intro') setIntroMode(e.target.value);
    if (e.target.name === 'theme') setTheme(e.target.value);
  });

  dlg.querySelector('[data-import]').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ok = await confirmDialog({
      title: '用備份檔取代目前資料？',
      body: `目前的 ${store.state.items.length} 件商品會被「${esc(file.name)}」的內容取代。`,
      confirmText: '匯入並取代',
      danger: true,
    });
    if (!ok) { e.target.value = ''; return; }
    try {
      const text = await file.text();
      store.importJSON(text);
      // 備份檔裡有封存的旅程就一併還原（沒有這個欄位的舊備份不影響現有封存）
      const archived = JSON.parse(text).archivedTrips;
      if (Array.isArray(archived)) saveTrips(archived);
      closeDialog(dlg);
      toast({ title: '備份已匯入', message: `共 ${store.state.items.length} 件商品` });
    } catch (err) {
      toast({ title: '匯入失敗', message: `這個檔案不是有效的備份：${esc(err.message)}`, tone: 'error', duration: 8000 });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = form.elements;
    const n = (el, fallback) => (el.value === '' || Number.isNaN(Number(el.value)) ? fallback : Math.max(0, Number(el.value)));
    const s = store.state.settings;
    store.updateSettings({
      tripName: f.tripName.value.trim() || s.tripName,
      budget: n(f.budget, s.budget),
      refundFeePct: n(f.refundFeePct, 0),
      cardRebatePct: n(f.cardRebatePct, 0),
      checkedLimit: n(f.checkedLimit, s.checkedLimit),
      checkedBase: n(f.checkedBase, s.checkedBase),
      carryLimit: n(f.carryLimit, s.carryLimit),
      carryBase: n(f.carryBase, s.carryBase),
    });
    const rate = Number(f.rate.value);
    if (rate > 0 && Math.abs(rate - store.state.settings.rate) > 1e-9 && rate !== initialRate) setManualRate(rate);
    closeDialog(dlg);
    toast({ title: '設定已儲存', tone: 'muted', duration: 2500 });
  });

  openDialog(dlg, { backdropClose: false });
}
