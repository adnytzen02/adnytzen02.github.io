// script.js

// 1. Tailwind 設定
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans TC', 'sans-serif'],
            },
            colors: {
                morandi: {
                    base: '#F5F5F0',       // 米白底色
                    text: '#4A5568',       // 深灰文字
                    accent: '#8CA6A4',     // 莫蘭迪綠
                    blue: '#9FB3C8',       // 霧霾藍
                    pink: '#D9C8C0',       // 藕粉色
                    earth: '#BCAAA4',      // 大地色
                    card: '#FFFFFF',
                }
            }
        }
    }
};

const { createApp, ref, computed, watch } = Vue;

createApp({
    setup() {
        const currentDayIndex = ref(0);
        const isMapExpanded = ref(false);
        const isEditMode = ref(false);

        // 預設資料 (確保就算沒有存檔，App 也有資料可以顯示，不會崩潰)
        const defaultItinerary = [
            {
                date: 'Day 1',
                title: '抵達大阪 & 難波探索',
                desc: '關西機場入境 -> 飯店 Check-in -> 道頓堀美食',
                spots: [
                    { time: '10:00', name: '關西國際機場 (KIX)', type: 'transport', note: '領取周遊券 & SIM卡', link: '#' },
                    { time: '11:30', name: '南海電鐵難波站', type: 'train', note: '搭乘 Rapi:t 前往難波站', link: '#' },
                    { time: '13:00', name: '大阪難波飯店', type: 'hotel', note: '先寄放行李', link: '#' },
                    { time: '15:00', name: '道頓堀', type: 'food', note: '跑跑人看板、章魚燒、拉麵', link: '#' },
                    { time: '19:00', name: '心齋橋筋商店街', type: 'shop', note: '藥妝店補貨、Uniqlo', link: '#' }
                ]
            },
            {
                date: 'Day 2',
                title: '京都古都巡禮',
                desc: '伏見稻荷 -> 清水寺 -> 祇園',
                spots: [
                    { time: '09:30', name: '伏見稻荷大社', type: 'sight', note: '千本鳥居拍照', link: '#' },
                    { time: '12:30', name: '清水寺', type: 'sight', note: '清水舞台、地主神社', link: '#' },
                    { time: '18:00', name: '祇園花見小路', type: 'sight', note: '尋找藝妓的身影', link: '#' }
                ]
            },
            {
                date: 'Day 3',
                title: '環球影城 USJ',
                desc: '全天瑪利歐世界 & 哈利波特',
                spots: [
                    { time: '07:30', name: '日本環球影城', type: 'sight', note: '記得買快速通關', link: '#' },
                    { time: '18:00', name: '哈利波特魔法世界', type: 'sight', note: '夜間霍格華茲', link: '#' }
                ]
            }
        ];

        // 初始化行程變數 (先給預設值，避免畫面渲染時因為是空陣列而報錯)
        const itinerary = ref([...defaultItinerary]);
        
        // 為了安全起見，先給一個預設的 currentSpot，避免 undefined 錯誤
        const currentSpot = ref(defaultItinerary[0].spots[0]);

        // 讀取 LocalStorage 資料
        const loadData = () => {
            const saved = localStorage.getItem('my_trip_data_v1');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    // 簡單檢查資料格式是否正確 (至少要有陣列)
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        itinerary.value = parsed;
                        // 資料讀取成功後，更新 currentSpot
                        if (parsed[0].spots && parsed[0].spots.length > 0) {
                            currentSpot.value = parsed[0].spots[0];
                        }
                    }
                } catch (e) {
                    console.error('讀取失敗，維持預設值', e);
                }
            }
        };

        // 立即執行讀取 (不要放在 onMounted，確保渲染前就有資料)
        loadData();

        // 儲存資料
        const saveData = () => {
            localStorage.setItem('my_trip_data_v1', JSON.stringify(itinerary.value));
        };

        // 重置資料
        const resetData = () => {
            if(confirm('確定要重置所有行程嗎？編輯的內容將會消失。')) {
                itinerary.value = JSON.parse(JSON.stringify(defaultItinerary));
                saveData();
                isEditMode.value = false;
                // 重置後修正 currentSpot
                currentSpot.value = itinerary.value[0].spots[0];
            }
        };

        // 計算屬性：當前天數的資料
        const currentDayData = computed(() => {
            // 安全防護：萬一 itinerary 壞掉變空，回傳一個假的空物件防止崩潰
            return itinerary.value[currentDayIndex.value] || { title: '', desc: '', spots: [] };
        });

        // 切換編輯模式
        const toggleEditMode = () => {
            if (isEditMode.value) {
                saveData(); // 關閉編輯模式時存檔
            }
            isEditMode.value = !isEditMode.value;
        };

        // 新增地點
        const addSpot = () => {
            const newSpot = {
                time: '12:00',
                name: '新地點',
                type: 'sight',
                note: '點擊編輯內容',
                link: '#'
            };
            // 確保 spots 陣列存在
            if (!itinerary.value[currentDayIndex.value].spots) {
                itinerary.value[currentDayIndex.value].spots = [];
            }
            itinerary.value[currentDayIndex.value].spots.push(newSpot);
            currentSpot.value = newSpot;
        };

        // 刪除地點
        const removeSpot = (index) => {
            if(confirm('確定刪除這個地點嗎？')) {
                const daySpots = itinerary.value[currentDayIndex.value].spots;
                daySpots.splice(index, 1);
                
                if (daySpots.length > 0) {
                    currentSpot.value = daySpots[Math.max(0, index - 1)];
                } else {
                    currentSpot.value = null;
                }
            }
        };

        // 切換天數
        const changeDay = (index) => {
            currentDayIndex.value = index;
            const dayData = itinerary.value[index];
            if (dayData && dayData.spots && dayData.spots.length > 0) {
                currentSpot.value = dayData.spots[0];
            } else {
                currentSpot.value = null;
            }
            isMapExpanded.value = false;
        };

        const selectSpot = (spot) => {
            currentSpot.value = spot;
            isMapExpanded.value = true;
        };

        // 圖示列表
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
            const colors = {
                transport: 'bg-blue-400', train: 'bg-blue-400',
                hotel: 'bg-indigo-300', food: 'bg-orange-300',
                shop: 'bg-pink-300', sight: 'bg-[#8CA6A4]', walk: 'bg-[#BCAAA4]'
            };
            return colors[type] || 'bg-gray-400';
        };

        const getTextColor = (type) => {
            const colors = {
                transport: 'text-blue-400', train: 'text-blue-400',
                hotel: 'text-indigo-300', food: 'text-orange-300',
                shop: 'text-pink-300', sight: 'text-[#8CA6A4]', walk: 'text-[#BCAAA4]'
            };
            return colors[type] || 'text-gray-400';
        };

        const getMapUrl = (locationName) => {
            if (!locationName) return '';
            return `https://maps.google.com/maps?q=${encodeURIComponent(locationName + ' 日本')}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        };

        const getNavLink = (spot) => {
            if (!spot) return '#';
            if (spot.link && spot.link !== '#' && spot.link !== '') return spot.link;
            return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' 日本')}`;
        };

        return {
            currentDayIndex,
            itinerary,
            currentDayData,
            currentSpot,
            isMapExpanded,
            isEditMode,
            spotTypes,
            changeDay,
            selectSpot,
            toggleEditMode,
            addSpot,
            removeSpot,
            resetData,
            getIcon,
            getIconColor,
            getTextColor,
            getMapUrl,
            getNavLink
        };
    }
}).mount('#app');