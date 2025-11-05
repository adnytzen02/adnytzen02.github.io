// 儲存鍵名
const STORAGE_KEY = 'japan-shopping-list-v2';

// 自動分類關鍵字
const KEYWORDS = {
    drugstore: ['面膜', '防曬', '唇膏', '眼霜', '洗面乳', '化妝水', '精華', '藥妝', 'Biore', 'DHC', '資生堂', 'LuLuLun'],
    snacks: ['KitKat', 'Pocky', '抹茶', '米果', '巧克力', '糖果', '餅乾', '零食', '伴手禮', '東京香蕉'],
    goods: ['電池', '耳機', '雨傘', '口罩', '充電', 'Uniqlo', 'Sony', 'Eneloop', '電器', '雜貨']
};

document.addEventListener('DOMContentLoaded', function() {
    loadAllItems();
    setupEventListeners();
});

function setupEventListeners() {
    // 加入按鈕
    document.getElementById('add-btn').addEventListener('click', addItem);
    
    // Enter 鍵加入
    document.getElementById('new-item').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addItem();
    });

    // 清除全部
    document.getElementById('clear-all').addEventListener('click', function() {
        if (confirm('確定要清除「全部」項目嗎？')) {
            localStorage.removeItem(STORAGE_KEY);
            document.querySelectorAll('.checklist').forEach(ul => ul.innerHTML = '');
        }
    });
}

function addItem() {
    const input = document.getElementById('new-item');
    const select = document.getElementById('category-select');
    const text = input.value.trim();
    
    if (!text) {
        alert('請輸入想買的東西！');
        return;
    }

    const category = select.value === 'auto' ? detectCategory(text) : select.value;
    const id = Date.now().toString(); // 唯一 ID

    createListItem(text, category, id, false);
    saveToStorage(text, category, id, false);

    input.value = '';
    input.focus();
}

function detectCategory(text) {
    text = text.toLowerCase();
    for (const [cat, words] of Object.entries(KEYWORDS)) {
        if (words.some(word => text.includes(word.toLowerCase()))) {
            return cat;
        }
    }
    return 'goods'; // 預設
}

function createListItem(text, category, id, checked) {
    const ul = document.querySelector(`.category[data-category="${category}"] .checklist`);
    const li = document.createElement('li');

    li.innerHTML = `
        <input type="checkbox" id="${id}" ${checked ? 'checked' : ''}>
        <label for="${id}">${escapeHtml(text)}</label>
        <button class="delete-btn" data-id="${id}" data-category="${category}">
            <i class="fas fa-trash"></i>
        </button>
    `;

    // 勾選事件
    li.querySelector('input').addEventListener('change', function() {
        saveToStorage(text, category, id, this.checked);
    });

    // 刪除事件
    li.querySelector('.delete-btn').addEventListener('click', function() {
        if (confirm(`確定刪除「${text}」？`)) {
            li.remove();
            removeFromStorage(id);
        }
    });

    ul.appendChild(li);
}

function saveToStorage(text, category, id, checked) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (!data[category]) data[category] = {};
    data[category][id] = { text, checked };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function removeFromStorage(id) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    for (const cat in data) {
        if (data[cat][id]) {
            delete data[cat][id];
            if (Object.keys(data[cat]).length === 0) delete data[cat];
            break;
        }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadAllItems() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    for (const [category, items] of Object.entries(data)) {
        for (const [id, item] of Object.entries(items)) {
            createListItem(item.text, category, id, item.checked);
        }
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}