// 設定與資料備份
import { store } from '../store.js';
import { refreshRate, setManualRate } from '../rate.js';
import { createDialog, openDialog, closeDialog, confirmDialog, choiceDialog, esc, icon, num, fmtTime, toast, download } from '../ui.js';
import { cloudAvailable, cloudInfo, onCloudStatus, preloadCloud, connectGoogle, syncNow, resolveConflict, disconnectGoogle, deleteCloudData } from '../cloud.js';
import { THEMES, SKINS, getTheme, setTheme, getSkin, setSkin } from '../theme.js';
import { listTrips, saveTrips, startNewTrip, switchTrip, removeTrip } from '../trips.js';
import { getIntroMode, setIntroMode } from './home.js';

// 雲端同步區塊（狀態改變時整塊重繪）
function cloudSection() {
  const avail = cloudAvailable();
  const c = cloudInfo();
  const privacy = `<p class="hint">只取得 Google 提供的<strong>帳號識別碼</strong>（不含姓名、Email），清單存在<strong>你自己 Google Drive 的應用程式專用隱藏資料夾</strong>。本網站沒有伺服器，看不到你的資料。<a href="privacy.html" target="_blank" rel="noopener">隱私權說明<span class="sr-only">（另開新視窗）</span></a></p>`;
  if (!avail.ok) {
    return `${privacy}<p class="cloud-status is-off">${icon('info', 'sm')}${avail.reason === 'config'
      ? '雲端同步尚未啟用：網站還沒設定 Google 用戶端 ID。'
      : '雲端同步需要從網址（https）開啟網站，直接開啟檔案時無法使用。'}</p>`;
  }
  if (!c.linked) {
    return `${privacy}
      <div class="btn-row"><button type="button" class="btn btn-ghost" data-cloud="connect" ${c.state === 'syncing' ? 'disabled aria-busy="true"' : ''}>${icon('sync')}用 Google 帳號連結</button></div>
      ${c.state === 'error' ? `<p class="cloud-status is-error">${icon('error', 'sm')}${esc(c.message)}</p>` : ''}`;
  }
  const line = {
    syncing: [`${icon('sync', 'sm')}同步中…`, ''],
    conflict: [`${icon('warning', 'sm')}${esc(c.message)}`, 'is-warn'],
    auth: [`${icon('info', 'sm')}連線已逾時，按「立即同步」重新連線`, 'is-warn'],
    error: [`${icon('error', 'sm')}${esc(c.message)}`, 'is-error'],
  }[c.state] ?? (c.dirty
    ? [`${icon('pending', 'sm')}這台有尚未同步的修改${c.hasToken ? '，稍後會自動上傳' : '，按「立即同步」上傳'}`, 'is-warn']
    : [`${icon('check_circle', 'sm')}已同步${c.lastSyncAt ? ` · ${fmtTime(c.lastSyncAt)}` : ''}`, 'is-ok']);
  return `${privacy}
    <p class="cloud-account">${icon('verified', 'sm')}已連結 Google 帳號（識別碼末 4 碼 ${esc(c.idTail)}）</p>
    <p class="cloud-status ${line[1]}">${line[0]}</p>
    <div class="btn-row">
      <button type="button" class="btn btn-ghost" data-cloud="sync" ${c.state === 'syncing' ? 'disabled aria-busy="true"' : ''}>${icon('sync')}立即同步</button>
      <button type="button" class="btn btn-ghost" data-cloud="disconnect">${icon('close')}中斷連結</button>
      <button type="button" class="btn btn-danger-ghost" data-cloud="delete">${icon('delete_forever')}刪除雲端資料</button>
    </div>
    <p class="hint">連線後，修改會自動上傳；重新開啟網站後，按一次「立即同步」就會繼續同步。</p>`;
}

const fmtCount = (n) => `${n} 件商品`;

// 執行同步，遇到「雲端和這台都改過」時讓使用者選
export async function runSync(fn) {
  try {
    const r = await fn();
    if (r?.action === 'conflict') {
      const pick = await choiceDialog({
        title: '要保留哪一份清單？',
        body: `<p>雲端和這台裝置的資料不一樣：</p>
          <ul class="choice-facts"><li>雲端：${fmtCount(r.remoteCount)}，${fmtTime(r.remoteAt)} 儲存</li><li>這台：${fmtCount(r.localCount)}</li></ul>
          <p>沒選到的那份會被取代，<strong>無法復原</strong>。不確定的話，先取消並匯出這台的備份。</p>`,
        choices: [
          { value: 'cloud', text: '用雲端資料取代這台', tone: 'gold' },
          { value: 'local', text: '用這台資料覆蓋雲端' },
        ],
      });
      if (pick) {
        await resolveConflict(pick);
        toast({ title: pick === 'cloud' ? '已換成雲端資料' : '已上傳到雲端', tone: 'muted', duration: 3000 });
      }
    } else if (r?.action === 'downloaded') toast({ title: '已從雲端載入清單', message: fmtCount(store.state.items.length), tone: 'muted', duration: 3000 });
    else if (r?.action === 'uploaded') toast({ title: '已同步到 Google Drive', tone: 'muted', duration: 2500 });
    else if (r?.action === 'none') toast({ title: '已是最新狀態', tone: 'muted', duration: 2500 });
  } catch (err) {
    if (err?.code !== 'denied') toast({ title: '同步失敗', message: esc(err?.message || '請稍後再試'), tone: 'error', duration: 6000 });
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
    </header>
    <div class="dlg-scroll">
      <fieldset class="fs">
        <legend class="fs-title">${icon('auto_awesome', 'sm')}主題</legend>
        <div class="skin-grid" role="radiogroup" aria-label="主題">
          ${SKINS.map(skinCard).join('')}
        </div>
        <p class="hint">主題決定整體的設計風格，選擇後立即套用。首頁片頭維持金色夜景，不隨主題改變。</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${icon('light_mode', 'sm')}外觀</legend>
        <div class="seg-pills" role="radiogroup" aria-label="外觀（深淺色）">
          ${THEMES.map((t) => `<label class="pill"><input type="radio" name="theme" value="${t.id}" ${getTheme() === t.id ? 'checked' : ''}><span>${icon(t.icon, 'sm')}${t.label}</span></label>`).join('')}
        </div>
        <p class="hint">選擇後立即套用，並記在這台裝置。</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${icon('movie', 'sm')}首頁片頭</legend>
        <div class="seg-pills" role="radiogroup" aria-label="首頁片頭的版本">
          <label class="pill"><input type="radio" name="intro" value="gl" ${getIntroMode() === 'gl' ? 'checked' : ''}><span>${icon('auto_awesome', 'sm')}華麗版</span></label>
          <label class="pill"><input type="radio" name="intro" value="2d" ${getIntroMode() === '2d' ? 'checked' : ''}><span>${icon('light_mode', 'sm')}輕量版</span></label>
        </div>
        <p class="hint">華麗版需要較新的裝置，跑不動時會自動改用輕量版。變更後下次回到首頁生效；完整的片頭只在第一次播，之後可在首頁按「重播片頭」。</p>
      </fieldset>

      <fieldset class="fs">
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

      <fieldset class="fs">
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

      <fieldset class="fs">
        <legend class="fs-title">${icon('luggage', 'sm')}行李</legend>
        <div class="grid-2">
          <div class="field"><label for="st-cl">託運限重（kg）</label><input id="st-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${s.checkedLimit}"></div>
          <div class="field"><label for="st-cb">託運基本重量（kg）</label><input id="st-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${s.checkedBase}" aria-describedby="hint-base"></div>
          <div class="field"><label for="st-pl">隨身限重（kg）</label><input id="st-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${s.carryLimit}"></div>
          <div class="field"><label for="st-pb">隨身基本重量（kg）</label><input id="st-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${s.carryBase}"></div>
        </div>
        <p class="hint" id="hint-base">基本重量＝行李箱本身加上衣物等非購物品。</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${icon('inventory_2', 'sm')}多趟旅程</legend>
        <div data-trips-region>${tripsSection()}</div>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${icon('sync_alt', 'sm')}雲端同步（Google Drive）</legend>
        <div data-cloud-region aria-live="polite">${cloudSection()}</div>
      </fieldset>

      <fieldset class="fs">
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

  dlg.addEventListener('click', async (e) => {
    const t = e.target;
    const cloudAct = t.closest('[data-cloud]')?.dataset.cloud;
    if (cloudAct === 'connect') runSync(connectGoogle);
    if (cloudAct === 'sync') runSync(() => syncNow({ interactive: true }));
    if (cloudAct === 'disconnect') {
      const ok = await confirmDialog({ title: '中斷 Google 連結？', body: '這台的清單和雲端的同步檔都會保留，只是之後不再自動同步。', confirmText: '中斷連結' });
      if (ok) { disconnectGoogle(); toast({ title: '已中斷連結', tone: 'muted', duration: 2500 }); }
    }
    if (cloudAct === 'delete') {
      const ok = await confirmDialog({ title: '刪除雲端資料？', body: '會刪除你 Google Drive 隱藏資料夾裡的<strong>同步檔</strong>並中斷連結，<strong>無法復原</strong>。這台裝置的清單會保留。', confirmText: '刪除雲端資料', danger: true });
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
