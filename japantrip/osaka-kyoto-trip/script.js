// script.js

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans TC', 'sans-serif'],
            },
            colors: {
                morandi: {
                    base: '#F5F5F0', text: '#4A5568', accent: '#8CA6A4',
                    blue: '#9FB3C8', pink: '#D9C8C0', earth: '#BCAAA4', card: '#FFFFFF',
                }
            }
        }
    }
};

const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const currentDayIndex = ref(0);
        const isMapExpanded = ref(false);
        const isEditMode = ref(false);
        const fileInput = ref(null);
        
        // --- 新增：狀態管理 ---
        const currentView = ref('itinerary'); // 控制目前顯示 'itinerary' (行程) 或 'tools' (工具)

        // --- 新增：工具變數 ---
        const exchangeRate = ref(0.215); // 預設匯率 (可修改)
        const jpyAmount = ref('');
        const twdAmount = ref('');
        
        const billTotal = ref('');
        const headCount = ref(7); // 預設 7 人

        // --- 匯率計算邏輯 ---
        const calculateTWD = () => {
            if (jpyAmount.value) {
                twdAmount.value = (jpyAmount.value * exchangeRate.value).toFixed(0);
            } else {
                twdAmount.value = '';
            }
        };

        const calculateJPY = () => {
            if (twdAmount.value) {
                jpyAmount.value = (twdAmount.value / exchangeRate.value).toFixed(0);
            } else {
                jpyAmount.value = '';
            }
        };

        // --- 分帳計算邏輯 ---
        const splitResult = computed(() => {
            if (!billTotal.value || !headCount.value || headCount.value <= 0) return 0;
            return Math.ceil(billTotal.value / headCount.value); // 無條件進位比較方便收錢
        });

        // --- 原本的行程資料 ---
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
            {
                date: '1/12 (一)',
                title: 'Day 2: 京都天橋立 & 大阪城',
                desc: '一日團遊 -> 舟屋 -> 飛龍觀 -> 大阪城燈會',
                spots: [
                    { time: '06:00', name: 'Ocean心斎橋', type: 'hotel', note: '起床，早餐自理', link: '#' },
                    { time: '07:00', name: '蟹道樂道頓堀東店', type: 'transport', note: '跟團集合點報到', link: '#' },
                    { time: '10:00', name: '伊根灣遊船', type: 'sight', note: '欣賞舟屋 (約25分)', link: '#' },
                    { time: '11:00', name: '天橋立傘松公園', type: 'sight', note: '搭纜車看飛龍觀', link: '#' },
                    { time: '12:00', name: '天橋立', type: 'food', note: '午餐：半蟹海鮮鍋御膳', link: '#' },
                    { time: '14:45', name: '美山茅草屋之里', type: 'sight', note: '自由散策 (約60分)', link: '#' },
                    { time: '17:45', name: '蟹道樂道頓堀東店', type: 'transport', note: '返抵解散', link: '#' },
                    { time: '19:00', name: '大阪城公園', type: 'sight', note: '觀賞夜間燈光秀/燈會', link: '#' },
                    { time: '21:21', name: 'Ocean心斎橋', type: 'hotel', note: '回程', link: '#' }
                ]
            },
            {
                date: '1/13 (二)',
                title: 'Day 3: 勝尾寺 & 梅田',
                desc: '達摩聖地 -> 箕面 -> 梅田商圈購物',
                spots: [
                    { time: '06:30', name: 'Ocean心斎橋', type: 'hotel', note: '起床', link: '#' },
                    { time: '10:25', name: '勝尾寺', type: 'sight', note: '滿滿的達摩', link: '#' },
                    { time: '14:00', name: '箕面市', type: 'food', note: '午餐 (當地定食或連鎖店)', link: '#' },
                    { time: '15:25', name: 'TRUFFLE mini JR大阪駅', type: 'food', note: 'Lucua大阪店，下午茶', link: '#' },
                    { time: '16:30', name: '梅田 HEP FIVE', type: 'shop', note: '摩天輪、阪急百貨購物', link: '#' },
                    { time: '17:46', name: '梅田 滝見小路', type: 'food', note: '晚餐：木地大阪燒 (需排隊，可拆桌)', link: '#' },
                    { time: '19:30', name: 'Ocean心斎橋', type: 'hotel', note: '回程', link: '#' }
                ]
            },
            {
                date: '1/14 (三)',
                title: 'Day 4: 環球影城 USJ',
                desc: '早起衝 USJ -> 全天遊玩',
                spots: [
                    { time: '04:30', name: 'Ocean心斎橋', type: 'hotel', note: '超早起，準備出發', link: '#' },
                    { time: '06:21', name: '日本環球影城 (USJ)', type: 'sight', note: '全天暢玩，預計21:00離開', link: '#' },
                    { time: '22:00', name: 'Ocean心斎橋', type: 'hotel', note: '回程休息', link: '#' }
                ]
            },
            {
                date: '1/15 (四)',
                title: 'Day 5: 京都漫遊',
                desc: '清水寺 -> 二三年坂 -> 錦市場 -> 祇園',
                spots: [
                    { time: '06:30', name: 'Ocean心斎橋', type: 'hotel', note: '起床，前往京都', link: '#' },
                    { time: '09:00', name: '清水寺', type: 'sight', note: '清水舞台、地主神社', link: '#' },
                    { time: '10:30', name: '三年坂 (產寧坂)', type: 'walk', note: '逛街、拍照', link: '#' },
                    { time: '12:05', name: 'Chiikawa Mogumogu Honpo', type: 'shop', note: '伏見店 (吉伊卡哇)', link: '#' },
                    { time: '13:30', name: '錦市場', type: 'food', note: '午餐：邊走邊吃 或 名代豬排 (可拆桌)', link: '#' },
                    { time: '15:00', name: '錦市場', type: 'shop', note: '京都的廚房，購物', link: '#' },
                    { time: '17:00', name: '祇園 (八坂神社)', type: 'sight', note: '感受古都氛圍', link: '#' },
                    { time: '20:30', name: 'Ocean心斎橋', type: 'hotel', note: '回程', link: '#' }
                ]
            },
            {
                date: '1/16 (五)',
                title: 'Day 6: 大阪深度探索',
                desc: '市場 -> 神社 -> 扭蛋 -> 梅田電器',
                spots: [
                    { time: '06:30', name: 'Ocean心斎橋', type: 'hotel', note: '起床', link: '#' },
                    { time: '09:15', name: '大阪木津批發市場', type: 'food', note: '參觀批發市場', link: '#' },
                    { time: '10:28', name: '一味禪', type: 'food', note: '早午餐：天婦羅飯', link: '#' },
                    { time: '11:49', name: '難波八阪神社', type: 'sight', note: '巨大獅子頭神社', link: '#' },
                    { time: '12:30', name: '黑門市場', type: 'food', note: '海鮮小吃 (可拆開用餐)', link: '#' },
                    { time: '13:30', name: '大鳥大社', type: 'sight', note: '和泉國一之宮', link: '#' },
                    { time: '15:17', name: 'grenier Umeda Store', type: 'food', note: '下午茶：布蕾千層', link: '#' },
                    { time: '16:20', name: 'Tonkatsu KYK', type: 'food', note: '晚餐：咖哩豬排', link: '#' },
                    { time: '17:27', name: 'Gachagacha no mori', type: 'shop', note: '梅田店 (超爆多扭蛋)', link: '#' },
                    { time: '18:30', name: 'Yodobashi Camera 梅田', type: 'shop', note: '電器、玩具購物', link: '#' },
                    { time: '19:30', name: 'Ocean心斎橋', type: 'hotel', note: '回程', link: '#' }
                ]
            },
            {
                date: '1/17 (六)',
                title: 'Day 7: Outlet & 返程',
                desc: '臨空城 Outlet -> 機場',
                spots: [
                    { time: '06:30', name: 'Ocean心斎橋', type: 'hotel', note: '起床，退房', link: '#' },
                    { time: '09:43', name: 'Rinku Premium Outlets', type: 'shop', note: '臨空城 Outlet 購物', link: '#' },
                    { time: '13:45', name: 'Rinku Pleasure Town Seacle', type: 'sight', note: '摩天輪 / 周邊設施', link: '#' },
                    { time: '15:00', name: '關西國際機場 (KIX)', type: 'transport', note: '抵達機場，準備返程', link: '#' }
                ]
            }
        ];

        const itinerary = ref([...defaultItinerary]);
        const currentSpot = ref(defaultItinerary[0].spots[0]);

        // --- 以下維持原有邏輯 ---

        const loadData = () => {
            const saved = localStorage.getItem('trip_mole_2026_v2');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        itinerary.value = parsed;
                        if (parsed[0].spots && parsed[0].spots.length > 0) {
                            currentSpot.value = parsed[0].spots[0];
                        }
                    }
                } catch (e) { console.error(e); }
            }
        };
        loadData(); 

        const saveData = () => { localStorage.setItem('trip_mole_2026_v2', JSON.stringify(itinerary.value)); };

        const exportData = () => {
            const dataStr = JSON.stringify(itinerary.value, null, 4);
            const blob = new Blob([dataStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "osaka_mole_trip_v2.json";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            alert('行程已匯出並下載！');
        };

        const triggerImport = () => { fileInput.value.click(); };

        const handleFileUpload = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if (Array.isArray(importedData) && importedData.length > 0 && importedData[0].spots) {
                        if(confirm('確定要匯入此檔案嗎？')) {
                            itinerary.value = importedData;
                            saveData();
                            currentDayIndex.value = 0;
                            currentSpot.value = itinerary.value[0].spots[0];
                            alert('匯入成功！');
                        }
                    } else { alert('檔案格式錯誤。'); }
                } catch (error) { alert('讀取失敗。'); }
                event.target.value = '';
            };
            reader.readAsText(file);
        };

        const resetData = () => {
            if(confirm('確定要重置回預設行程嗎？')) {
                itinerary.value = JSON.parse(JSON.stringify(defaultItinerary));
                saveData();
                isEditMode.value = false;
                currentSpot.value = itinerary.value[0].spots[0];
            }
        };

        const currentDayData = computed(() => itinerary.value[currentDayIndex.value] || { title: '', desc: '', spots: [] });
        
        const toggleEditMode = () => {
            if (isEditMode.value) saveData();
            isEditMode.value = !isEditMode.value;
        };

        const addSpot = () => {
            const newSpot = { time: '12:00', name: '新地點', type: 'sight', note: '', link: '#' };
            if (!itinerary.value[currentDayIndex.value].spots) itinerary.value[currentDayIndex.value].spots = [];
            itinerary.value[currentDayIndex.value].spots.push(newSpot);
            currentSpot.value = newSpot;
        };

        const removeSpot = (index) => {
            if(confirm('確定刪除這個地點嗎？')) {
                const daySpots = itinerary.value[currentDayIndex.value].spots;
                daySpots.splice(index, 1);
                currentSpot.value = daySpots.length > 0 ? daySpots[Math.max(0, index - 1)] : null;
            }
        };

        const changeDay = (index) => {
            currentDayIndex.value = index;
            const dayData = itinerary.value[index];
            currentSpot.value = (dayData && dayData.spots.length > 0) ? dayData.spots[0] : null;
            isMapExpanded.value = false;
        };

        const selectSpot = (spot) => {
            currentSpot.value = spot;
            isMapExpanded.value = true;
        };

        const spotTypes = [
            { value: 'transport', label: '交通', icon: 'fa-plane' },
            { value: 'train', label: '鐵路', icon: 'fa-train-subway' },
            { value: 'hotel', label: '住宿', icon: 'fa-bed' },
            { value: 'food', label: '美食', icon: 'fa-utensils' },
            { value: 'shop', label: '購物', icon: 'fa-bag-shopping' },
            { value: 'sight', label: '景點', icon: 'fa-camera' },
            { value: 'walk', label: '散步', icon: 'fa-person-walking' }
        ];

        const getIcon = (type) => {
            const found = spotTypes.find(t => t.value === type);
            return found ? `fa-solid ${found.icon}` : 'fa-solid fa-map-pin';
        };

        const getIconColor = (type) => {
            const colors = { transport: 'bg-blue-400', train: 'bg-blue-400', hotel: 'bg-indigo-300', food: 'bg-orange-300', shop: 'bg-pink-300', sight: 'bg-[#8CA6A4]', walk: 'bg-[#BCAAA4]' };
            return colors[type] || 'bg-gray-400';
        };

        const getTextColor = (type) => {
            const colors = { transport: 'text-blue-400', train: 'text-blue-400', hotel: 'text-indigo-300', food: 'text-orange-300', shop: 'text-pink-300', sight: 'text-[#8CA6A4]', walk: 'text-[#BCAAA4]' };
            return colors[type] || 'text-gray-400';
        };

        const getMapUrl = (locationName) => `https://maps.google.com/maps?q=${encodeURIComponent(locationName + ' 日本')}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        
        const getNavLink = (spot) => {
            if (!spot) return '#';
            if (spot.link && spot.link !== '#' && spot.link !== '') return spot.link;
            return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' 日本')}`;
        };

        return {
            currentDayIndex, itinerary, currentDayData, currentSpot, isMapExpanded, isEditMode, spotTypes, fileInput,
            currentView, // 新增
            exchangeRate, jpyAmount, twdAmount, calculateTWD, calculateJPY, // 新增
            billTotal, headCount, splitResult, // 新增
            changeDay, selectSpot, toggleEditMode, addSpot, removeSpot, resetData, exportData, triggerImport, handleFileUpload,
            getIcon, getIconColor, getTextColor, getMapUrl, getNavLink
        };
    }
}).mount('#app');