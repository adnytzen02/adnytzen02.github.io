# Shopping Relics｜日本購物清單

純靜態網站（原生 HTML / CSS / JavaScript），可直接放到 GitHub Pages，也可以直接雙擊 `index.html` 開啟。

## 資料夾
- `index.html`、`css/`、`js/app.js`、`assets/`：網站本體，上傳這些即可
- `src/`：JavaScript 原始碼（ES Modules）。修改後執行 `npm install`（第一次）與 `npm run build`，會重新產生 `js/app.js`
- `sw.js`、`manifest.webmanifest`：離線快取與「加到主畫面」設定，要和 `index.html` 放在同一層
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

## 外觀
預設淺色。右上角按鈕可在「淺色 → 深色 → 跟隨系統」間切換，設定頁也能選，選擇會記在該裝置。

## 功能
- **購物聖庫**：快速新增（只要品名、價格、店家，其他收在「更多設定」）、編輯／刪除商品，勾選已入手，分類、狀態、地區篩選與搜尋，匯出 CSV
- **購買地區**：依地區 → 店家分組，顯示每家店離免稅門檻（同日同店未稅 ¥5,000）還差多少；偵測相似店名可一鍵合併，未填日期的同店商品會提醒
- **預算匯率**：即時匯率（免金鑰公開 API，可手動覆寫）、預算進度（目前已支付／全部買完預估分開）、各店退稅預估、單筆試算盤
- **行程行李**：託運／隨身重量（目前實際／全部買完預估分開）、入箱進度、液體與鋰電池提醒、打包清單
- **頁首匯率**：手機版顯示「¥1,000 ≈ NT$xxx」，點一下到換算器
- **出示給店員**：日文大字、放大 JAN 條碼（點擊全螢幕給店員掃）、指差會話短語；沒填日文名稱時會提醒補上
- 資料存在瀏覽器 localStorage；設定中可匯出／匯入 JSON 備份

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
圖示字型只包含目前用到的 81 個圖示，並以 base64 內嵌在 `css/style.css` 的 `@font-face`（雙擊開啟時瀏覽器不允許另外載入字型檔）。若程式中新增其他圖示名稱，需重新產生子集，再把新檔案轉成 base64 替換 CSS 裡的 data URI：

```bash
npm pack material-symbols && tar xzf material-symbols-*.tgz
pip install fonttools brotli
python3 -m fontTools.varLib.instancer package/material-symbols-outlined.woff2 GRAD=0 opsz=24 wght=400:700 -o inst.ttf
# glyphs.txt：要保留的圖示 ligature glyph 名稱（逗號分隔）
python3 -m fontTools.subset inst.ttf --glyphs="$(cat glyphs.txt)" \
  --unicodes="U+0030-0039,U+0041-005A,U+005F,U+0061-007A" \
  --no-layout-closure --layout-features='rlig' --flavor=woff2 \
  --output-file=assets/fonts/material-symbols-subset.woff2
```

## 免稅計算說明
依日本 2026/11/1 起的退稅新制（リファンド方式）：店頭先付含稅價，出境查驗後退回消費稅。
門檻為同一天、同一店家未稅合計 ¥5,000 以上。計算結果僅供參考，實際以店家與海關為準。
資料來源：[日本觀光廳](https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html)
