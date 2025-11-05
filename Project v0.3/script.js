// === 除錯模式 ===
console.log('script.js 已載入！');

const STORAGE_KEY = 'japan-shopping-list-v3';
const KEYWORDS = {
    drugstore: ['面膜','防曬','唇膏','眼霜','洗面乳','化妝水','精華','藥妝','biore','dhc','資生堂','lululun'],
    snacks: ['kitkat','pocky','抹茶','米果','巧克力','糖果','餅乾','零食','伴手禮','東京香蕉'],
    goods: ['電池','耳機','雨傘','口罩','充電','uniqlo','sony','eneloop','電器','雜貨']
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 已載入，開始初始化...');
    loadAllItems();
    setupEventListeners();
    document.getElementById('status').textContent = '✅ 已就緒！可以新增項目';
});

function setupEventListeners() {
    const addBtn = document.getElementById('add-btn');
    const input = document.getElementById('new-item');
    
    if (!addBtn || !input) {
        alert('錯誤：找不到按鈕或輸入框！請檢查 index.html');
        return;
    }

    addBtn.addEventListener('click', addItem);
    input.addEventListener('keypress', e => e.key === 'Enter' && addItem());

    document.getElementById('clear-all').addEventListener('click', () => {
        if (confirm('確定清除全部？')) {
            localStorage.removeItem(STORAGE_KEY);
            document.querySelectorAll('.checklist').forEach(ul => ul.innerHTML = '');
        }
    });
}

function addItem() {
    const input = document.getElementById('new-item');
    const select = document.getElementById('category-select');
    const text = input.value.trim();
    if (!text) return alert('請輸入項目！');

    const category = select.value === 'auto' ? detectCategory(text) : select.value;
    const id = Date.now().toString();

    createListItem(text, category, id, false);
    saveToStorage(text, category, id, false);

    input.value = '';
    input.focus();
}

function detectCategory(text) {
    const lower = text.toLowerCase();
    for (const [cat, words] of Object.entries(KEYWORDS)) {
        if (words.some(w => lower.includes(w))) return cat;
    }
    return 'goods';
}

function createListItem(text, category, id, checked) {
    const ul = document.querySelector(`.category[data-category="${category}"] .checklist`);
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" id="${id}" ${checked?'checked':''}>
        <label for="${id}">${escapeHtml(text)}</label>
        <button class="delete-btn" data-id="${id}">
            <i class="fas fa-trash"></i>
        </button>
    `;
    li.querySelector('input').addEventListener('change', function() {
        saveToStorage(text, category, id, this.checked);
    });
    li.querySelector('.delete-btn').addEventListener('click', () => {
        if (confirm(`刪除「${text}」？`)) {
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
    for (const [cat, items] of Object.entries(data)) {
        for (const [id, item] of Object.entries(items)) {
            createListItem(item.text, cat, id, item.checked);
        }
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}