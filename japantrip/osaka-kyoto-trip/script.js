// script.js

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"SF Pro Text"', '"SF Pro Display"', 'system-ui', 'Noto Sans TC', 'sans-serif'],
            },
            colors: {
                morandi: {
                    base: '#F5F5F0', text: '#1D1D1F', accent: '#8CA6A4',
                    blue: '#9FB3C8', pink: '#D9C8C0', earth: '#BCAAA4',
                }
            }
        }
    }
};

const { createApp, ref, computed, watch, onMounted } = Vue;

// Firebase Config (請填入您的設定)
  const firebaseConfig = {
    apiKey: "AIzaSyC4vPtFEesCBlWlwOQk604iQM74UOmnmBc",
    authDomain: "osaka-trip-2026-01.firebaseapp.com",
    databaseURL: "https://osaka-trip-2026-01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "osaka-trip-2026-01",
    storageBucket: "osaka-trip-2026-01.firebasestorage.app",
    messagingSenderId: "143328118542",
    appId: "1:143328118542:web:b1c77c757fe1c0845ab95f",
    measurementId: "G-CPV7JBJEDF"
  };

// 安全檢查：避免沒有 Firebase 環境時報錯
let db = null;
const DB_PATH = 'osaka_trip_data';
try {
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
    db = firebase.database();
} catch (e) {
    console.warn("Firebase not initialized (Offline Mode)");
}

createApp({
    setup() {
        const currentDayIndex = ref(0);
        const isMapExpanded = ref(false);
        const isEditMode = ref(false);
        const fileInput = ref(null);
        const imageInput = ref(null);
        const currentView = ref('itinerary');
        const bookingTab = ref('flight');
        const currentEditBooking = ref(null);
        const syncStatus = ref('連線中...');
        
        // --- Auth State ---
        const showAuthModal = ref(false);
        const authPassword = ref('');
        const CORRECT_PASSWORD = '2026'; // 設定密碼

        const exchangeRate = ref(0.215);
        const jpyAmount = ref('');
        const twdAmount = ref('');
        const billTotal = ref('');
        const headCount = ref(7);
        const dragData = ref({ type: null, index: null, parentIndex: null });

        // Default Itinerary
        const defaultItinerary = [
             {
                date: '1/11 (日)',
                title: 'Day 1: 抵達大阪 & 難波探索',
                desc: '心齋橋購物 -> 串炸 -> 章魚燒 -> 燒肉晚餐',
                spots: [
                    { time: '05:00', name: 'Ocean心斎橋', type: 'hotel', note: '起床，準備登機', link: '#' },
                    { time: '09:55', name: '關西國際機場 (KIX)', type: 'transport', note: '抵達、入境', link: '#' },
                    { time: '11:48', name: 'Ocean心斎橋', type: 'hotel', note: '辦理入住 / 寄放行李', link: '#' },
                    { time: '13:01', name: '心齋橋 PARCO', type: 'shop', note: 'PARCO / 大丸百貨購物', link: '#' },
                    { time: '15:04', name: '達摩串炸 心齋橋店', type: 'food', note: '大阪名物午餐/下午茶', link: '#' },
                    { time: '16:11', name: 'Takoyaki Wanaka Dotonbori', type: 'food', note: '章魚燒仙貝', link: '#' },
                    { time: '16:28', name: '道頓堀', type: 'sight', note: '戎橋、Glico跑跑人拍照', link: '#' },
                    { time: '17:32', name: 'STRAWBERRY MANIA', type: 'food', note: '草莓甜點', link: '#' },
                    { time: '17:40', name: '心齋橋筋商店街', type: 'shop', note: '藥妝、伴手禮補貨', link: '#' },
                    { time: '18:36', name: '國產牛燒肉放題(或大起水產)', type: 'food', note: '晚餐無預約，建議拆3+4人座', link: '#' },
                    { time: '19:36', name: 'Ocean心斎橋', type: 'hotel', note: '回程休息', link: '#' }
                ]
            },
            { date: '1/12 (一)', title: 'Day 2: 京都天橋立 & 大阪城', desc: '一日團遊 -> 舟屋 -> 飛龍觀 -> 大阪城燈會', spots: [ { time: '06:00', name: 'Ocean心斎橋', type: 'hotel', note: '起床，早餐自理', link: '#' }, { time: '07:00', name: '蟹道樂道頓堀東店', type: 'transport', note: '跟團集合點報到', link: '#' }, { time: '10:00', name: '伊根灣遊船', type: 'sight', note: '欣賞舟屋 (約25分)', link: '#' }, { time: '11:00', name: '天橋立傘松公園', type: 'sight', note: '搭纜車看飛龍觀', link: '#' }, { time: '12:00', name: '天橋立', type: 'food', note: '午餐：半蟹海鮮鍋御膳', link: '#' }, { time: '14:45', name: '美山茅草屋之里', type: 'sight', note: '自由散策 (約60分)', link: '#' }, { time: '17:45', name: '蟹道樂道頓堀東店', type: 'transport', note: '返抵解散', link: '#' }, { time: '19:00', name: '大阪城公園', type: 'sight', note: '觀賞夜間燈光秀/燈會', link: '#' }, { time: '21:21', name: 'Ocean心斎橋', type: 'hotel', note: '回程', link: '#' } ] },
            { date: '1/13 (二)', title: 'Day 3: 勝尾寺 & 梅田', desc: '達摩聖地 -> 梅田商圈購物', spots: [ { time: '06:30', name: 'Ocean心斎橋', type: 'hotel', note: '起床', link: '#' }, { time: '10:25', name: '勝尾寺', type: 'sight', note: '滿滿的達摩', link: '#' }, { time: '14:00', name: '箕面市', type: 'food', note: '午餐 (當地定食或連鎖店)', link: '#' }, { time: '15:25', name: 'TRUFFLE mini JR大阪駅', type: 'food', note: 'Lucua大阪店，下午茶', link: '#' }, { time: '16:30', name: '梅田 HEP FIVE', type: 'shop', note: '摩天輪、阪急百貨購物', link: '#' }, { time: '17:46', name: '梅田 滝見小路', type: 'food', note: '晚餐：木地大阪燒 (需排隊，可拆桌)', link: '#' }, { time: '19:30', name: 'Ocean心斎橋', type: 'hotel', note: '回程', link: '#' } ] },
            { date: '1/14 (三)', title: 'Day 4: 環球影城 USJ', desc: '早起衝 USJ -> 全天遊玩', spots: [ { time: '04:30', name: 'Ocean心斎橋', type: 'hotel', note: '超早起，準備出發', link: '#' }, { time: '06:21', name: '日本環球影城 (USJ)', type: 'sight', note: '全天暢玩，預計21:00離開', link: '#' }, { time: '22:00', name: 'Ocean心斎橋', type: 'hotel', note: '回程休息', link: '#' } ] },
            { date: '1/15 (四)', title: 'Day 5: 京都漫遊', desc: '清水寺 -> 二三年坂 -> 錦市場 -> 祇園', spots: [ { time: '06:30', name: 'Ocean心斎橋', type: 'hotel', note: '起床，前往京都', link: '#' }, { time: '09:00', name: '清水寺', type: 'sight', note: '清水舞台、地主神社', link: '#' }, { time: '10:30', name: '三年坂 (產寧坂)', type: 'walk', note: '逛街、拍照', link: '#' }, { time: '12:05', name: 'Chiikawa Mogumogu Honpo', type: 'shop', note: '伏見店 (吉伊卡哇)', link: '#' }, { time: '13:30', name: '錦市場', type: 'food', note: '午餐：邊走邊吃 或 名代豬排 (可拆桌)', link: '#' }, { time: '15:00', name: '錦市場', type: 'shop', note: '京都的廚房，購物', link: '#' }, { time: '17:00', name: '祇園 (八坂神社)', type: 'sight', note: '感受古都氛圍', link: '#' }, { time: '20:30', name: 'Ocean心斎橋', type: 'hotel', note: '回程', link: '#' } ] },
            { date: '1/16 (五)', title: 'Day 6: 大阪深度探索', desc: '市場 -> 神社 -> 扭蛋 -> 梅田電器', spots: [ { time: '06:30', name: 'Ocean心斎橋', type: 'hotel', note: '起床', link: '#' }, { time: '09:15', name: '大阪木津批發市場', type: 'food', note: '參觀批發市場', link: '#' }, { time: '10:28', name: '一味禪', type: 'food', note: '早午餐：天婦羅飯', link: '#' }, { time: '11:49', name: '難波八阪神社', type: 'sight', note: '巨大獅子頭神社', link: '#' }, { time: '12:30', name: '黑門市場', type: 'food', note: '海鮮小吃 (可拆開用餐)', link: '#' }, { time: '13:30', name: '大鳥大社', type: 'sight', note: '和泉國一之宮', link: '#' }, { time: '15:17', name: 'grenier Umeda Store', type: 'food', note: '下午茶：布蕾千層', link: '#' }, { time: '16:20', name: 'Tonkatsu KYK', type: 'food', note: '晚餐：咖哩豬排', link: '#' }, { time: '17:27', name: 'Gachagacha no mori', type: 'shop', note: '梅田店 (超爆多扭蛋)', link: '#' }, { time: '18:30', name: 'Yodobashi Camera 梅田', type: 'shop', note: '電器、玩具購物', link: '#' }, { time: '19:30', name: 'Ocean心斎橋', type: 'hotel', note: '回程', link: '#' } ] },
            { date: '1/17 (六)', title: 'Day 7: Outlet & 返程', desc: '臨空城 Outlet -> 機場', spots: [ { time: '06:30', name: 'Ocean心斎橋', type: 'hotel', note: '起床，退房', link: '#' }, { time: '09:43', name: 'Rinku Premium Outlets', type: 'shop', note: '臨空城 Outlet 購物', link: '#' }, { time: '13:45', name: 'Rinku Pleasure Town Seacle', type: 'sight', note: '摩天輪 / 周邊設施', link: '#' }, { time: '15:00', name: '關西國際機場 (KIX)', type: 'transport', note: '抵達機場，準備返程', link: '#' } ] }
        ];

        const defaultBookings = [
            { category: 'flight', title: '去程機票 - 台灣虎航', date: '2026/01/11', time: '09:55 抵達', number: 'IT210', note: 'KIX 第一航廈入境', link: '#', dep: 'TPE', arr: 'KIX' },
            { category: 'hotel', title: 'Ocean心斎橋', date: '1/11 - 1/17', time: '15:00 CI', number: '未填寫', note: '6晚住宿，寄放行李', link: '#' },
            { category: 'ticket', title: '京都天橋立一日遊', date: '2026/01/12', time: '07:15 出發', number: '未填寫', note: '集合：蟹道樂道頓堀東店', link: '#' },
            { category: 'ticket', title: '日本環球影城 USJ', date: '2026/01/14', time: '全日', number: '未填寫', note: '含快速通關', link: '#' },
            { category: 'flight', title: '回程機票', date: '2026/01/17', time: '15:00 報到', number: '未填寫', note: 'KIX 出境', link: '#', dep: 'KIX', arr: 'TPE' }
        ];

        const defaultChecklist = [
            { title: '1. 清潔與保養用品', items: [{ name: '牙刷、牙膏', checked: false }, { name: '洗面乳 / 卸妝用品', checked: false }, { name: '隱形眼鏡 + 清潔液', checked: false }, { name: '衛生紙 / 濕紙巾', checked: false }, { name: '酒精 (隨身瓶)', checked: false }, { name: '護唇膏 / 指緣油', checked: false }, { name: '身體乳液 / 護手霜', checked: false }] },
            { title: '2. 衣物穿搭', items: [{ name: '內衣褲', checked: false }, { name: '發熱衣 / 發熱褲', checked: false }, { name: '上衣', checked: false }, { name: '褲子', checked: false }, { name: '外套', checked: false }, { name: '襪子', checked: false }, { name: '圍巾、手套、毛帽', checked: false }, { name: '好走的鞋', checked: false }, { name: '真空壓縮袋', checked: false }] },
            { title: '3. 隨身物品', items: [{ name: '雨傘', checked: false }, { name: '台幣 / 日幣現鈔', checked: false }, { name: '信用卡', checked: false }, { name: '獨立零錢包', checked: false }, { name: 'SIM卡 / Wifi機', checked: false }, { name: '保溫瓶', checked: false }, { name: '口罩', checked: false }, { name: '環保購物袋', checked: false }, { name: '暖暖包', checked: false }, { name: '原子筆', checked: false }] },
            { title: '4. 電器相關', items: [{ name: '手機 + 充電器', checked: false }, { name: '相機 + 電池', checked: false }, { name: '行動電源', checked: false }, { name: '電源轉接頭', checked: false }] },
            { title: '5. 重要文件', items: [{ name: '護照', checked: false }, { name: 'VJW QR Code', checked: false }, { name: '電子機票', checked: false }, { name: '訂房憑證', checked: false }, { name: '保險單', checked: false }, { name: '身分證', checked: false }, { name: '2吋照片', checked: false }] },
            { title: '6. 藥品', items: [{ name: '暈車藥', checked: false }, { name: '常備藥品', checked: false }, { name: '個人常備藥', checked: false }, { name: 'OK蹦', checked: false }, { name: 'B群 / 維他命C', checked: false }] }
        ];

        const itinerary = ref([...defaultItinerary]);
        const bookings = ref([...defaultBookings]);
        const checklistData = ref(JSON.parse(JSON.stringify(defaultChecklist)));
        const currentSpot = ref(null);
        let isReceivingUpdate = false;

        // --- Auth Logic (New) ---
        const toggleEditMode = () => {
            if (isEditMode.value) {
                // If currently editing, save and exit
                saveData();
                isEditMode.value = false;
            } else {
                // If viewing, show password modal
                authPassword.value = '';
                showAuthModal.value = true;
            }
        };

        const verifyPassword = () => {
            if (authPassword.value === CORRECT_PASSWORD) {
                showAuthModal.value = false;
                isEditMode.value = true;
            } else {
                alert('密碼錯誤！');
                authPassword.value = '';
            }
        };

        // --- Drag & Drop ---
        const onDragEnter = (event) => {};
        const onSpotDragStart = (event, index) => {
            if (!isEditMode.value) return;
            dragData.value = { type: 'spot', index: index };
            event.dataTransfer.effectAllowed = 'move';
            event.target.classList.add('draggable-source');
        };
        const onSpotDrop = (event, index) => {
            event.target.classList.remove('draggable-source');
            if (dragData.value.type !== 'spot') return;
            const fromIndex = dragData.value.index;
            if (fromIndex === index) return;
            const list = itinerary.value[currentDayIndex.value].spots;
            const item = list.splice(fromIndex, 1)[0];
            list.splice(index, 0, item);
            saveData();
            dragData.value = { type: null, index: null };
        };
        const onChecklistDragStart = (event, cIndex, iIndex) => {
            if (!isEditMode.value) return;
            dragData.value = { type: 'checklist', parentIndex: cIndex, index: iIndex };
            event.dataTransfer.effectAllowed = 'move';
            event.target.classList.add('draggable-source');
        };
        const onChecklistDrop = (event, cIndex, iIndex) => {
            event.target.classList.remove('draggable-source');
            if (dragData.value.type !== 'checklist' || dragData.value.parentIndex !== cIndex) return;
            const fromIndex = dragData.value.index;
            if (fromIndex === iIndex) return;
            const list = checklistData.value[cIndex].items;
            const item = list.splice(fromIndex, 1)[0];
            list.splice(iIndex, 0, item);
            saveData();
            dragData.value = { type: null, index: null, parentIndex: null };
        };
        const onDragEnd = (event) => { event.target.classList.remove('draggable-source'); };

        // --- Firebase ---
        onMounted(() => {
            if(db) {
                db.ref(DB_PATH).on('value', (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        isReceivingUpdate = true;
                        if (data.itinerary) itinerary.value = data.itinerary;
                        if (data.bookings) bookings.value = data.bookings;
                        if (data.checklist) checklistData.value = data.checklist;
                        if (!currentSpot.value && itinerary.value[0].spots.length > 0) currentSpot.value = itinerary.value[0].spots[0];
                        syncStatus.value = '已同步';
                        setTimeout(() => { isReceivingUpdate = false; }, 100);
                    } else { saveData(); }
                });
            } else {
                syncStatus.value = '離線模式';
                loadDataLocal();
            }
        });

        const loadDataLocal = () => {
            const savedV3 = localStorage.getItem('trip_data_v3');
            if (savedV3) {
                try {
                    const parsed = JSON.parse(savedV3);
                    if (parsed.itinerary) itinerary.value = parsed.itinerary;
                    if (parsed.bookings) bookings.value = parsed.bookings;
                    if (parsed.checklist) checklistData.value = parsed.checklist;
                } catch(e) {}
            }
            if (itinerary.value.length > 0) currentSpot.value = itinerary.value[0].spots[0];
        };

        const saveData = () => {
            if (isReceivingUpdate) return;
            syncStatus.value = '同步中...';
            const dataToSave = {
                itinerary: JSON.parse(JSON.stringify(itinerary.value)),
                bookings: JSON.parse(JSON.stringify(bookings.value)),
                checklist: JSON.parse(JSON.stringify(checklistData.value))
            };
            localStorage.setItem('trip_data_v3', JSON.stringify(dataToSave));
            if(db) {
                db.ref(DB_PATH).set(dataToSave).then(() => { syncStatus.value = '已同步'; }).catch(() => { syncStatus.value = '同步失敗'; });
            } else { syncStatus.value = '已儲存(本機)'; }
        };

        watch([itinerary, bookings, checklistData], () => { saveData(); }, { deep: true });

        const exportData = () => {
            const dataToSave = { itinerary: itinerary.value, bookings: bookings.value, checklist: checklistData.value };
            const dataStr = JSON.stringify(dataToSave, null, 4);
            const blob = new Blob([dataStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = "osaka_trip.json"; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
            alert('匯出成功');
        };

        const handleFileUpload = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if(confirm('確定匯入？')) {
                        if (importedData.itinerary) itinerary.value = importedData.itinerary;
                        if (importedData.bookings) bookings.value = importedData.bookings;
                        if (importedData.checklist) checklistData.value = importedData.checklist;
                        saveData();
                        currentDayIndex.value = 0;
                        if (itinerary.value[0].spots.length > 0) currentSpot.value = itinerary.value[0].spots[0];
                        alert('匯入成功');
                    }
                } catch (error) { alert('檔案錯誤'); }
                event.target.value = '';
            };
            reader.readAsText(file);
        };

        const triggerImageUpload = (bookingItem) => { currentEditBooking.value = bookingItem; imageInput.value.click(); };
        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (!file || !currentEditBooking.value) return;
            if (file.size > 500 * 1024) { alert('圖片太大！請小於 500KB'); return; }
            const reader = new FileReader();
            reader.onload = (e) => { currentEditBooking.value.image = e.target.result; saveData(); currentEditBooking.value = null; };
            reader.readAsDataURL(file); event.target.value = '';
        };

        const resetData = () => {
            if(confirm('確定重置？')) {
                itinerary.value = JSON.parse(JSON.stringify(defaultItinerary));
                bookings.value = JSON.parse(JSON.stringify(defaultBookings));
                checklistData.value = JSON.parse(JSON.stringify(defaultChecklist));
                isEditMode.value = false;
                if (itinerary.value[0].spots.length > 0) currentSpot.value = itinerary.value[0].spots[0];
                saveData();
            }
        };

        const triggerImport = () => fileInput.value.click();
        const flightBookings = computed(() => bookings.value.filter(b => b.category === 'flight'));
        const hotelBookings = computed(() => bookings.value.filter(b => b.category === 'hotel'));
        const ticketBookings = computed(() => bookings.value.filter(b => b.category === 'ticket'));
        const addBooking = (type) => { bookings.value.push({ category: type, title: '新項目', date: '', time: '', number: '', note: '', link: '#', image: '', dep:'DEP', arr:'ARR' }); };
        const removeBooking = (item) => { if(confirm('確定刪除？')) { const idx = bookings.value.indexOf(item); if (idx > -1) bookings.value.splice(idx, 1); }};
        const toggleChecklistItem = (c, i) => { checklistData.value[c].items[i].checked = !checklistData.value[c].items[i].checked; saveData(); };
        const addChecklistItem = (cIndex) => { checklistData.value[cIndex].items.push({ name: '新項目', checked: false }); saveData(); };
        const removeChecklistItem = (cIndex, iIndex) => { if(confirm('刪除項目？')) { checklistData.value[cIndex].items.splice(iIndex, 1); saveData(); }};
        const calculateTWD = () => { if (jpyAmount.value) twdAmount.value = (jpyAmount.value * exchangeRate.value).toFixed(0); else twdAmount.value = ''; };
        const calculateJPY = () => { if (twdAmount.value) jpyAmount.value = (twdAmount.value / exchangeRate.value).toFixed(0); else jpyAmount.value = ''; };
        const splitResult = computed(() => { if (!billTotal.value || !headCount.value || headCount.value <= 0) return 0; return Math.ceil(billTotal.value / headCount.value); });
        const currentDayData = computed(() => itinerary.value[currentDayIndex.value] || { title: '', desc: '', spots: [] });
        
        const addSpot = () => { const newSpot = { time: '12:00', name: '新地點', type: 'sight', note: '', link: '#' }; if (!itinerary.value[currentDayIndex.value].spots) itinerary.value[currentDayIndex.value].spots = []; itinerary.value[currentDayIndex.value].spots.push(newSpot); currentSpot.value = newSpot; };
        const removeSpot = (index) => { if(confirm('刪除？')) { const daySpots = itinerary.value[currentDayIndex.value].spots; daySpots.splice(index, 1); currentSpot.value = daySpots.length > 0 ? daySpots[Math.max(0, index - 1)] : null; }};
        const changeDay = (index) => { currentDayIndex.value = index; const dayData = itinerary.value[index]; currentSpot.value = (dayData && dayData.spots.length > 0) ? dayData.spots[0] : null; isMapExpanded.value = false; };
        const selectSpot = (spot) => { currentSpot.value = spot; isMapExpanded.value = true; };
        const spotTypes = [ { value: 'transport', label: '交通' }, { value: 'train', label: '鐵路' }, { value: 'hotel', label: '住宿' }, { value: 'food', label: '美食' }, { value: 'shop', label: '購物' }, { value: 'sight', label: '景點' }, { value: 'walk', label: '散步' } ];
        const getIcon = (type) => { const icons = {transport:'fa-plane',train:'fa-train-subway',hotel:'fa-bed',food:'fa-utensils',shop:'fa-bag-shopping',sight:'fa-camera',walk:'fa-person-walking'}; return icons[type] ? `fa-solid ${icons[type]}` : 'fa-solid fa-map-pin'; };
        const getIconColor = (type) => { const colors = { transport: 'bg-gradient-to-br from-blue-400 to-blue-500', train: 'bg-gradient-to-br from-indigo-400 to-indigo-500', hotel: 'bg-gradient-to-br from-purple-400 to-purple-500', food: 'bg-gradient-to-br from-orange-300 to-orange-400', shop: 'bg-gradient-to-br from-pink-300 to-pink-400', sight: 'bg-gradient-to-br from-[#8CA6A4] to-[#7A9593]', walk: 'bg-gradient-to-br from-[#BCAAA4] to-[#A1887F]' }; return colors[type] || 'bg-gray-400'; };
        const getTextColor = () => 'text-gray-500';
        const getMapUrl = (locationName) => `https://maps.google.com/maps?q=${encodeURIComponent(locationName + ' 日本')}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        const getNavLink = (spot) => { if (!spot) return '#'; if (spot.link && spot.link !== '#' && spot.link !== '') return spot.link; return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' 日本')}`; };
        const getMapSearchUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ' 日本')}`;
        const getBookingIcon = (category) => { const map = { flight: { icon: 'fa-solid fa-plane-up', color: 'bg-gradient-to-br from-blue-400 to-blue-600' }, hotel: { icon: 'fa-solid fa-bed', color: 'bg-gradient-to-br from-purple-400 to-purple-600' }, ticket: { icon: 'fa-solid fa-ticket', color: 'bg-gradient-to-br from-green-400 to-green-600' } }; return map[category] || { icon: 'fa-solid fa-file', color: 'bg-gray-400' }; };
        const copyText = (text) => { navigator.clipboard.writeText(text).then(() => alert('已複製')); };

        return {
            currentDayIndex, itinerary, bookings, checklistData, currentDayData, currentSpot, isMapExpanded, isEditMode, spotTypes, fileInput, imageInput,
            currentView, bookingTab, exchangeRate, jpyAmount, twdAmount, billTotal, headCount, splitResult, syncStatus,
            flightBookings, hotelBookings, ticketBookings,
            toggleChecklistItem, addChecklistItem, removeChecklistItem,
            onSpotDragStart, onSpotDrop, onChecklistDragStart, onChecklistDrop, onDragEnd, onDragEnter,
            changeDay, selectSpot, toggleEditMode, addSpot, removeSpot, resetData, exportData, triggerImport, handleFileUpload, triggerImageUpload, handleImageUpload,
            getIcon, getIconColor, getTextColor, getMapUrl, getNavLink, calculateTWD, calculateJPY, addBooking, removeBooking, copyText, 
            getBookingIcon, getMapSearchUrl,
            // New for Auth
            showAuthModal, authPassword, verifyPassword
        };
    }
}).mount('#app');