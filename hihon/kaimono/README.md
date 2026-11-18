# Shopping Relics｜日本購物清單

純靜態網站（原生 HTML / CSS / JavaScript），可直接放到 GitHub Pages，也可以直接雙擊 `index.html` 開啟。

## 資料夾
- `index.html`、`css/`、`js/app.js`、`assets/`、`sw.js`、`manifest.webmanifest`：網站本體，上傳這些即可
- `css/themes/`：各主題的樣式，一個主題一個檔案（見「主題與外觀」）
- `src/`：JavaScript 原始碼（ES Modules）。修改後執行 `npm install`（第一次）與 `npm run build`，會重新產生 `js/app.js`
- `package.json`：只用於打包，不影響網站執行；`node_modules/` 不需要上傳

## 離線使用
放上 GitHub Pages（https）後，第一次開啟會出現「已可離線使用」，之後沒有網路也能打開清單、切換分頁。
手機瀏覽器選「加到主畫面」，就能像 App 一樣從桌面開啟。
- 雙擊開啟 `index.html` 時瀏覽器不允許離線快取，但網站照常可用
- 更新網站後，使用者下次開啟會在背景下載新版，再下一次開啟就是新版
- 若新增或改名網站本體檔案，請同步修改 `sw.js` 的 `SHELL_FILES`，並把 `VERSION` 改成新值

## 店名比對
- 全形半形、大小寫、空白不同的店名會自動視為同一家（例：`ＰＯＲＴＥＲ　澀谷` = `PORTER 澀谷`）
- 字相同但順序不同、或一個包含另一個時（例：`銀座三越` 與 `三越 銀座店`），只會提示，由使用者決定是否合併
- 規則在 `src/storeMatch.js`

## 主題與外觀
分成兩層，各自記在該裝置（不會跟著雲端同步或備份檔走）：
- **主題**（設計風格）：在右上角的「外觀與主題」選單或「設定 → 主題」選擇，立即套用。目前有四個：「金色遺物」（原始配色，預設）、「點陣柔光」（白天琥珀橘、夜晚藍紫）、「抹茶和紙」（抹茶綠配焙茶棕）、「夜櫻」（櫻粉配藤紫）
- **外觀**（深淺色）：預設淺色。右上角的按鈕會開啟「外觀與主題」選單，設定頁也能選

所有主題共用同一套「質感層」（`css/themes/effects.css`）：往內陷的凹槽、浮起的按鍵、底緣的發光細線與背景點陣。顏色由各主題決定，所以金色遺物的色調不變。
想讓某個主題回到平面樣式，在 `src/skins.js` 該主題加上 `fx: false` 後重新 `npm run build`。

首頁片頭是畫在 canvas 上的金色夜景，不隨主題改變。

### 新增主題
每個主題是一個 CSS 檔加一筆清單資料，不需要改其他程式：
1. 複製 `css/themes/matcha.css`（只有顏色，最單純）成 `css/themes/<id>.css`，把選擇器裡的 `matcha` 全部換成新的 `<id>`
   - 顏色 token 必填：淺色寫在 `:root[data-skin="<id>"]`，深色寫在 `:root[data-skin="<id>"][data-scheme="dark"]`。深色要把淺色定義過的顏色都重新定義一次
   - `--fx-*` 是質感層的效果顏色（光暈、凹槽、按鍵表面），不寫會自動取用主題的主色與底色，想微調再覆寫
   - 原設計裡寫死的金色、深藍，`effects.css` 最後一段會自動換成新主題的顏色，不必另外處理
   - 「跟隨系統」已由程式換算成 `data-scheme`，不必另外寫 `@media (prefers-color-scheme)`
2. 在 `src/skins.js` 的 `SKINS` 加一筆（`id`、名稱、說明、網址列顏色、預覽色）
3. 在 `index.html` 與 `privacy.html` 的主題樣式區塊最後加一行 `<link rel="stylesheet" href="css/themes/<id>.css">`
4. 在 `sw.js` 的 `SHELL_FILES` 加上該檔案，並把 `VERSION` 改成新值
5. 執行 `npm run build`

注意文字對比要達 WCAG AA：`--text-dim`、`--gold-text`、`--cyan-text` 放在 `--bg`、`--surface`、`--gold-soft` 上至少 4.5:1；`--on-gold` 放在 `--gold-dim` 上至少 4.5:1。
相關的 localStorage：`shopping-relics:skin`（主題）、`shopping-relics:theme`（外觀）。存的主題若已被移除，會自動退回預設主題。

## 功能
### 首頁（光的序章）
- 一個畫面、與瀏覽器視窗同寬同高，不用捲動；導覽列在畫面下方（手機是工具列＋分頁列兩層）
- 片頭有兩個版本，在「設定 → 首頁片頭」切換：
  - **華麗版（預設，WebGL）**：`src/views/home-gl.js`。約 7 秒：螺旋光流落下 → 觸水綻開星芒 → 液體水冠 → 彩虹拱、火焰光帶與散景爆開 → 金色的海與標題浮出。有暈光與高動態範圍；播完後只畫金色的海，並降到每秒約 30 格
  - **輕量版（2D canvas）**：`src/views/home.js` 原本的版本。裝置不支援 WebGL、著色器編譯失敗、或最低畫質仍跑不動時，會自動改用這一版
- 完整的片頭只在這台裝置第一次打開時播（記錄在 localStorage `shopping-relics:intro-played`）；之後直接顯示最後畫面並短暫淡入，可按「重播片頭」再看一次。播放中右下角有「跳過片頭」
- 各個鏡頭的試作頁在 `lab/`（`intro-stream`、`intro-crown`、`intro-burst`、`intro-sea`），可以單獨開啟、慢動作檢查；正式版是把它們接在一條時間軸上。`lab/` 不是網站的一部分，部署時可以不上傳
- 輕量版播完後點水面會泛起漣漪、點天空會灑出金粉；華麗版目前沒有點擊互動
- 標題下方顯示清單概況（待買件數、店家數、預估退稅）
- 整段畫在一張 canvas 上（`src/views/home.js`），不用圖片或影片；會自動偵測裝置效能並降低畫質，畫面在背景時暫停
- 系統設定「減少動態」時直接顯示靜態畫面與標題，導覽列照常顯示

### 採買清單（行前規劃＋現場掃貨）
- **店鋪**（預設）：每家店一張卡片（與分類卡片同寬的網格）。點卡片會以彈出視窗打開該店的採買清單，自用與代購（`@朋友`）的商品一起列出，邊拿邊勾選
- 店鋪卡片直接顯示湊單進度：`目前 ¥X（差 ¥Y 免稅）`、清單全買能否達標、下一個優惠券門檻，以及「開啟優惠券」按鈕
- 一件商品可選 1～3 家候選店（第一家為主選）；在某家勾選買到後，就會從其他店的待買清單消失
- 「不限店鋪（比價中）」的商品，勾選時會詢問在哪家買到
- **分類**：用分類膠囊標籤、搜尋、對象、狀態篩選找東西
- 新增商品只要品名、價格、店鋪；店鋪選單內建常用通路，也能輸入自訂店名（會記成「我的店鋪」）
- 選了店鋪會帶出該店的免稅條件與優惠（例：Bic Camera 依分類自動套用 7%／5%／3%），可自行修改

### 小細節
- 每頁標題下方有一道金色光弧，呼應首頁的地平線
- 勾選「買到了」時會蓋上朱紅色的「済」印章；某家店今天剛好跨過免稅門檻時，進度條閃過金光並跳出「免稅達成」（`src/fx.js`）
- 店鋪卡片在還沒開始買時顯示「清單合計（未稅）」與「全買可免稅／還差多少」，開始買之後改顯示「今天已買」
- 預算匯率、打包與海關兩個長頁面，在手機上有可橫向滑動的快速跳轉列（黏在頁首下方，標示目前所在區塊）
- 統計數字、頁首「清單總額」變動時會從舊值滾動到新值；金額使用等寬數字，變動時不會左右跳
- 往下捲時右下角的「＋」會收起，往上捲再出現；手機上提示訊息顯示在「＋」上方
- 代購分帳：還沒收齊時「複製明細」是主要按鈕、「標記已收」是次要按鈕；編輯與刪除按鈕的可點範圍為 44px，彼此不重疊

### 代購分帳（回飯店／回國後看）
- 代購費與匯率鎖定：每位朋友可設定代購費（百分比＋固定金額）並鎖定換算匯率（`settings.friendMeta`）
- 唯讀分享連結：把一位朋友的明細編進網址 `#/share/<資料>`（`src/views/share.js`），對方打開就能看；內容是產生當下的快照，不會更新
- 分次收款：每位朋友可逐筆記錄收款（`settings.payLog`），總額仍存在 `settings.paidFriends`，舊資料相容
- 自動抓清單裡標了 `@朋友` 的商品，依人加總日幣與台幣（以退稅後實際成本計算）
- 卡片可直接編輯：勾選買到／改回待買、編輯、刪除每一件商品
- 「臨時加購」：記下臨時幫朋友加買的東西（直接列為已買），也能從頁首替新朋友加購
- 一鍵複製明細貼到 LINE；標記已收款會記下金額，之後再加買會顯示「尚差」金額

### 預算匯率
- 花費分析：依分類、自用／代購、購買日期統計店頭支付金額
- 即時匯率（免金鑰公開 API，可手動覆寫）、預算進度（目前已支付／全部買完預估）、各店退稅預估、單筆試算盤

### 打包與海關（分頁）
- 免稅品查驗清單：已買且達免稅門檻的商品依收據（同店同日）分組，可勾選「已查驗」（記在 `settings.inspectedGroups`）
- 入境免稅額試算：已買商品以退稅後成本、目前匯率換算台幣，對照每人 NT$35,000 的行李免稅額；酒類與「不放行李」的商品不計入。額度與查證日寫在 `src/calc.js` 的 `TW_DUTY_FREE_TWD`、`CUSTOMS_VERIFIED`
- 只列已買商品：必須託運（液體、刀剪）、必須手提（鋰電池）、一般商品，逐一打勾裝箱
- 機場管制區免稅店買的液體不強制託運
- 行李重量、出境海關提醒、隨身裝備清單、航班與限重設定

### 其他
- 出示給店員：日文大字、放大 JAN 條碼、指差會話短語
- 相似店名提示合併（例：「銀座三越」與「三越 銀座店」）
- 資料存在瀏覽器 localStorage；設定中可匯出／匯入 JSON 備份
- 舊網址 `#/areas` 導向採買清單（店鋪），`#/luggage` 導向打包與海關

## 店鋪資料與優惠
內建店鋪與優惠資訊在 `src/storeCatalog.js`，查證日為 2026/10/31。優惠券條件常變動，畫面都會註明「以店家公告為準」。
查不到可靠來源的店家（例如松本清、大國藥妝）沒有預填優惠，可在店鋪區塊按「加入優惠券連結」自行填入。

## Google Drive 雲端同步（設定步驟）
程式已經寫好，只差你的 **OAuth 用戶端 ID**。沒填之前，設定裡會顯示「雲端同步尚未啟用」，其他功能照常使用。

**權限共三個**（都屬於 Google 分類的「非敏感」範圍，不需要送審）：
- `openid`：只取得 Google 帳號識別碼（sub），不取得姓名、Email
- `https://www.googleapis.com/auth/drive.appdata`：只能讀寫本網站在使用者 Drive 裡的應用程式專用隱藏資料夾，看不到其他檔案
- `https://www.googleapis.com/auth/drive.file`：只在「匯出清單 PDF → 存到 Google Drive」時才詢問；只能存取本網站自己建立的檔案

**步驟**
1. 到 [Google Cloud Console](https://console.cloud.google.com/) 建立新專案（例如 `shopping-relics`）。
2. 「API 和服務 → 程式庫」搜尋 **Google Drive API**，按「啟用」。
3. 「Google Auth Platform（OAuth 同意畫面）」：
   - 使用者類型選「外部」，填應用程式名稱、支援 Email。
   - 應用程式首頁：`https://adnytzen02.github.io/hihon/kaimono/`
   - 隱私權政策：`https://adnytzen02.github.io/hihon/kaimono/privacy.html`
   - 「資料存取／範圍」加入 `openid`、`.../auth/drive.appdata` 與 `.../auth/drive.file`。
   - 只有自己和家人用的話，維持「測試」狀態，在「目標對象 → 測試使用者」加入要用的 Google 帳號（最多 100 個）。要開放給所有人，再按「發布應用程式」。
4. 「用戶端 → 建立用戶端」：類型選 **網頁應用程式**
   - 已授權的 JavaScript 來源：`https://adnytzen02.github.io`（只填網域，不含 `/hihon/kaimono/`）
   - 本機測試再加 `http://localhost:8773`
   - 「已授權的重新導向 URI」不用填。
5. 複製「用戶端 ID」（`xxxx.apps.googleusercontent.com`），貼到 `src/config.js` 的 `GOOGLE_CLIENT_ID`，執行 `npm run build`，再上傳。

用戶端 ID 本來就會出現在前端，公開沒有關係；這個做法**不需要也不要使用「用戶端密碼」**，不要把密碼放進 repo。

**同步方式**
- 同步檔：使用者 Drive 隱藏資料夾裡的 `shopping-relics.json`（含照片，所以可能有幾 MB）。
- 存取權杖只放在記憶體，關閉分頁就消失；重新開網站後，進到清單等頁面會提示「同步」，按一下即可（不會再出現同意畫面）。
- 連線期間，修改後 4 秒自動上傳。
- 雲端和這台都改過時不會自動覆蓋，會讓使用者選「用雲端取代這台」或「用這台覆蓋雲端」。
- 手動同步（首頁登入、設定「立即同步」、開站提醒）的進度與結果都用「正在同步」動畫視窗顯示，完成後自動消失；自動上傳則在背景進行、不跳視窗。
- 設定裡可以「登出 Google」（兩邊資料都保留）或「刪除雲端資料」。
- 同步檔在隱藏資料夾，Drive 檔案清單裡看不到；可在 drive.google.com →「設定 › 管理應用程式」看到本網站的隱藏資料大小。

## 匯出清單 PDF
設定 →「匯出 PDF」：依店鋪排好的 A4 清單（含總覽、勾選框、照片縮圖、代購對象與備註），可選「全部商品／只列待買」。
- **下載到這台裝置**：不需要登入。
- **存到 Google Drive**：存到使用者「我的雲端硬碟 › Shopping Relics」資料夾（看得到、可分享）。
- 做法：用 canvas 畫出每頁，轉成 JPEG 後組成 PDF（`src/pdf.js`，沒有用套件）。好處是不必嵌入中日文字型、檔案小；代價是 PDF 裡的文字無法選取或搜尋。
- 本機只記住帳號識別碼、同步檔 ID、版本與時間（localStorage `shopping-relics:cloud`）。

## 部署到 GitHub Pages
1. 把整個資料夾內容放到 repo 根目錄（或 `docs/`）
2. Pages 設定選擇對應的分支與資料夾
3. 分享預覽（LINE、Facebook）已設定為正式網址 `https://adnytzen02.github.io/hihon/kaimono/`。
   若網址改變，請修改 `index.html` 裡的 `canonical`、`og:url`、`og:image`、`twitter:image` 四處。
   上線後可用 [Facebook 分享偵錯工具](https://developers.facebook.com/tools/debug/) 貼上網址檢查；LINE 會快取預覽，舊連結可能要隔一段時間才更新

所有路徑都是相對路徑，專案頁或使用者頁都能直接使用；路由用 hash（`#/budget`），重新整理不會 404。

> 本機預覽：直接雙擊 `index.html` 即可。

## 外部資源
- 文字字型：Google Fonts（Noto Sans TC / Noto Serif TC / Noto Sans JP），離線時會退回系統字型
- 匯率：`open.er-api.com`，失敗時改用 jsDelivr 上的 `@fawazahmed0/currency-api`；都失敗則沿用上次數值
- 圖示：自架 Material Symbols 子集（`assets/fonts/`，Apache 2.0）

## 新增圖示時
圖示字型只包含目前用到的 95 個圖示，並以 base64 內嵌在 `css/style.css` 的 `@font-face`（雙擊開啟時瀏覽器不允許另外載入字型檔）。若程式中新增其他圖示名稱，需重新產生子集，再把新檔案轉成 base64 替換 CSS 裡的 data URI：

```bash
npm pack material-symbols && tar xzf material-symbols-*.tgz
pip install fonttools brotli
python3 -m fontTools.varLib.instancer package/material-symbols-outlined.woff2 GRAD=0 opsz=24 wght=400:700 -o inst.ttf
# glyphs.txt：要保留的圖示 ligature glyph 名稱（逗號分隔；注意 local_offer 在新版字型的 glyph 名稱是 sell）
python3 -m fontTools.subset inst.ttf --glyphs="$(cat glyphs.txt)" \
  --unicodes="U+0030-0039,U+0041-005A,U+005F,U+0061-007A" \
  --no-layout-closure --layout-features='rlig' --flavor=woff2 \
  --output-file=assets/fonts/material-symbols-subset.woff2
```

## 免稅計算說明
依日本 2026/11/1 起的退稅新制（リファンド方式）：店頭先付含稅價，出境查驗後退回消費稅。
門檻為同一天、同一店家未稅合計 ¥5,000 以上。計算結果僅供參考，實際以店家與海關為準。
資料來源：[日本觀光廳](https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html)

## 2026/11～2027 制度變更（查證日 2026/11/7）
內容放在「退稅指南」頁（`#/guide`，從預算匯率頁進入）的「新制度」分頁與「打包與海關 → 出境與入境提醒」，資料寫在 `src/views/refund-guide.js` 的 `RULES` 與 `src/views/packing.js`。
- 2026/7/1 起：日本出國稅 ¥1,000 → ¥3,000（以購票日判斷）
- 2026/11/1 起：免稅改為出境後退稅；消耗品 50 萬日圓上限取消；以收據為單位查驗；部分機場可用 Visit Japan Web 事先辦理
- 2027/4/1～2029/3/31（法案審議中）：食品消費稅 8% → 1%，酒類與內用餐飲維持 10%。新增商品可選「1% 食品」稅率
- 2028 年度（預定）：電子入境許可 JESTA
- 行動電源：日本出發航班 2026/4/24 起、台灣民航局 2026/4/8 起，每人最多 2 顆、機上禁止使用與充電
- 回台灣：行李免稅額 NT$35,000、酒類 1.5 公升（年滿 18 歲）、肉製品一律不能帶
- 退稅指南（頁面 `src/views/guide.js`、內容 `src/views/refund-guide.js`）：獨立的一頁 `#/guide`，由預算匯率頁進入，導覽列標示在「預算匯率」；頁內的小分頁，分成「流程／退稅公司／機場現金／信用卡／手續費／新制度」，只放說明，不影響計算。要更新資料時，改檔案上方的 `OPERATORS`、`CASH_POINTS`、`FEES`、`RULES` 陣列與 `VERIFIED` 查證日即可；上次看的分頁記在 localStorage 的 `shopping-relics:guide-tab`。
- 店家內建退稅手續費：唐吉訶德、Bic Camera 為 0%（`src/storeCatalog.js` 的 `refundFeePct`）；計算順序為「商品自訂 → 店家內建 → 設定預設值」
法規會變動，若要更新內容，修改上述兩個檔案後執行 `npm run build`，並把 `sw.js` 的 `VERSION` 改成新值。

## 多趟旅程
設定 →「多趟旅程」可以把目前的旅程封存、開始新的一趟，之後再切換回來（`src/trips.js`）。
- 封存的旅程存在 localStorage 的 `shopping-relics:trips`，只在這台裝置；雲端同步只同步目前這趟
- 匯出備份時會放在備份檔的 `archivedTrips`，匯入時一併還原
- 新旅程沿用匯率、預算、行李限重、自訂店鋪；收款、查驗、航班備註不沿用
