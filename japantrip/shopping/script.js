document.addEventListener('DOMContentLoaded', () => {
    // === 工具：圖片壓縮 ===
    const ImageUtils = {
        compress: (file, maxWidth = 800, quality = 0.7) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target.result;
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        let width = img.width;
                        let height = img.height;

                        if (width > maxWidth) {
                            height = Math.round((height * maxWidth) / width);
                            width = maxWidth;
                        }

                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, width, height);
                        resolve(canvas.toDataURL('image/jpeg', quality));
                    };
                };
            });
        }
    };

    // === 資料庫模組 (IndexedDB) ===
    const dbModule = (() => {
        const DB_NAME = 'JapanShoppingDB';
        const STORE_NAME = 'shoppingList';
        const DATA_KEY = 'items_v1';
        let db = null;

        const init = () => {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open(DB_NAME, 1);
                request.onupgradeneeded = (e) => {
                    const db = e.target.result;
                    if (!db.objectStoreNames.contains(STORE_NAME)) {
                        db.createObjectStore(STORE_NAME);
                    }
                };
                request.onsuccess = (e) => {
                    db = e.target.result;
                    resolve(db);
                };
                request.onerror = (e) => reject(e.target.error);
            });
        };

        const load = async () => {
            if (!db) await init();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(STORE_NAME, 'readonly');
                const store = tx.objectStore(STORE_NAME);
                const request = store.get(DATA_KEY);
                request.onsuccess = () => resolve(request.result || []);
                request.onerror = () => reject(request.error);
            });
        };

        const save = async (items) => {
            if (!db) await init();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(STORE_NAME, 'readwrite');
                const store = tx.objectStore(STORE_NAME);
                const request = store.put(items, DATA_KEY);
                request.onsuccess = () => resolve();
                request.onerror = (e) => reject(e.target.error);
            });
        };

        return { init, load, save };
    })();

    // === 數據模組 ===
    const dataModule = (() => {
        let items = [];
        const oldKey = 'japanShoppingList_final_v5'; 
        let saveTimeout;

        const load = async () => {
            try {
                items = await dbModule.load();
                if (!items || items.length === 0) {
                    const oldData = localStorage.getItem(oldKey);
                    if (oldData) {
                        items = JSON.parse(oldData);
                        await dbModule.save(items);
                    }
                }
            } catch (e) {
                console.error("讀取失敗", e);
                items = [];
            }
        };

        const save = () => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(async () => {
                await dbModule.save(items);
            }, 300);
        };

        const get = () => items;
        const add = (item) => { items.push(item); save(); };
        const update = (i, field, val) => {
            if (!items[i]) return;
            if (field === 'amount' || field === 'quantity') {
                items[i][field] = parseFloat(val) || 0;
            } else {
                items[i][field] = val;
            }
            save();
        };
        const remove = (i) => { items.splice(i, 1); save(); };
        const clear = () => { items = []; save(); };
        const set = (newItems) => { items = newItems; save(); };
        const reorder = (from, to) => {
            const [moved] = items.splice(from, 1);
            items.splice(to, 0, moved);
            save();
        };
        const total = () => items.reduce((sum, item) => sum + ((item.amount || 0) * (item.quantity || 1)), 0);

        return { load, get, add, update, remove, clear, set, reorder, total, save };
    })();

    // === 事件處理 ===
    const eventModule = (() => {
        const tbody = document.getElementById('itemBody');
        const hiddenInput = document.getElementById('hiddenFileInput');
        let currentEditIndex = null;

        const triggerImageUpload = (index) => {
            currentEditIndex = index;
            hiddenInput.value = ''; 
            hiddenInput.click();
        };

        hiddenInput.addEventListener('change', async (e) => {
            if (e.target.files && e.target.files[0] && currentEditIndex !== null) {
                const file = e.target.files[0];
                const compressedImg = await ImageUtils.compress(file);
                dataModule.update(currentEditIndex, 'image', compressedImg);
                renderModule.render();
            }
        });

        tbody.addEventListener('input', (e) => {
            const target = e.target;
            const tr = target.closest('tr');
            if (!tr || !target.dataset.field) return;

            const index = parseInt(tr.dataset.index);
            const field = target.dataset.field;
            dataModule.update(index, field, target.value);
            if (field === 'amount' || field === 'quantity') {
                renderModule.updateTotal();
            }
        });

        tbody.addEventListener('click', (e) => {
            if (e.target.closest('.del-btn')) {
                const tr = e.target.closest('tr');
                if (confirm('確定刪除？')) {
                    dataModule.remove(parseInt(tr.dataset.index));
                    renderModule.render();
                }
            }
        });

        return { triggerImageUpload };
    })();

    // === 渲染模組 ===
    const renderModule = (() => {
        const tbody = document.getElementById('itemBody');
        const totalEl = document.getElementById('totalAmount');

        const categories = [
            { val: "", label: "未分類" },
            { val: "藥妝", label: "藥妝美妝" },
            { val: "零食", label: "零食伴手禮" },
            { val: "電器", label: "生活電器" },
            { val: "服飾", label: "服飾鞋包" },
            { val: "動漫", label: "動漫周邊" }
        ];

        const renderRow = (item, i) => {
            const categoryOptions = categories.map(c => 
                `<option value="${c.val}" ${item.category === c.val ? 'selected' : ''}>${c.label}</option>`
            ).join('');

            return `
                <tr draggable="true" data-index="${i}">
                    <td class="img-cell" onclick="eventModule.triggerImageUpload(${i})" title="點擊更換圖片">
                        ${item.image 
                            ? `<img src="${item.image}" class="preview-img" alt="圖">` 
                            : `<div class="add-img-placeholder"><i class="fas fa-camera"></i></div>`
                        }
                    </td>
                    <td><input type="text" data-field="name" value="${item.name || ''}"></td>
                    <td><input type="text" data-field="store" value="${item.store || ''}"></td>
                    <td><input type="number" data-field="quantity" value="${item.quantity || 1}" min="1" class="qty-input"></td>
                    <td><input type="number" data-field="amount" value="${item.amount || 0}" class="amt-input"></td>
                    <td><select data-field="category">${categoryOptions}</select></td>
                    <td><input type="text" data-field="note" value="${item.note || ''}"></td>
                    <td class="text-center"><button class="del-btn"><i class="fas fa-trash"></i></button></td>
                </tr>
            `;
        };

        const render = () => {
            const items = dataModule.get();
            tbody.innerHTML = items.map((item, i) => renderRow(item, i)).join('');
            updateTotal();
            setupDrag();
        };

        const updateTotal = () => {
            totalEl.textContent = `總金額: ¥${dataModule.total().toLocaleString()}`;
        };

        return { render, updateTotal };
    })();

    // === 拖曳排序 ===
    let dragSrcIndex = null;
    function setupDrag() {
        const rows = document.querySelectorAll('#itemBody tr');
        rows.forEach(row => {
            row.addEventListener('dragstart', (e) => {
                dragSrcIndex = parseInt(row.dataset.index);
                e.dataTransfer.effectAllowed = 'move';
                row.classList.add('dragging');
            });
            row.addEventListener('dragend', () => {
                row.classList.remove('dragging');
                document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
            });
            row.addEventListener('dragover', (e) => { e.preventDefault(); row.classList.add('drag-over'); });
            row.addEventListener('dragleave', () => { row.classList.remove('drag-over'); });
            row.addEventListener('drop', (e) => {
                e.preventDefault();
                const dropIndex = parseInt(row.dataset.index);
                if (dragSrcIndex !== dropIndex) {
                    dataModule.reorder(dragSrcIndex, dropIndex);
                    renderModule.render();
                }
            });
        });
    }

    // === 匯出匯入模組 (含 iOS 返回鍵) ===
    const ioModule = (() => {
        const exportHTML = () => {
            const items = dataModule.get();
            const now = new Date().toLocaleDateString();
            const jsonData = JSON.stringify(items).replace(/<\/script>/g, '<\\/script>');
            
            const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">
<title>購物清單 ${now}</title>
<style>
/* 視覺優化：深灰藍色背景 */
:root { 
    --bg-color: #202124;
    --card-bg: #2d2e31;
    --text-primary: #E8EAED;
    --text-secondary: #9AA0A6;
    --accent: #BB86FC;
    --price-color: #81C995;
    --border-color: #3c4043;
    --danger: #F28B82;
    --safe-bottom: env(safe-area-inset-bottom, 20px);
}
* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-primary);
    margin: 0;
    padding-bottom: calc(100px + var(--safe-bottom));
}

/* Header 改為 Flex 佈局以支援返回鍵 */
.header {
    background: rgba(32, 33, 36, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 12px 16px; /* 稍微調整 padding */
    padding-top: max(12px, env(safe-area-inset-top));
    position: sticky; top: 0; z-index: 100;
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    
    /* Flexbox 讓標題置中，按鈕在左 */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header h2 { 
    margin: 0; 
    font-size: 19px; 
    letter-spacing: 0.5px; 
    color: var(--text-primary);
    flex: 1; /* 佔滿中間 */
    text-align: center;
}

/* 返回按鈕樣式 */
.back-btn {
    background: transparent;
    border: none;
    color: var(--accent);
    font-size: 24px;
    font-weight: 300;
    padding: 4px 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; /* 固定寬度 */
    border-radius: 8px;
    transition: background 0.2s;
}
.back-btn:active {
    background: rgba(255,255,255,0.1);
}
.header-spacer {
    width: 40px; /* 右邊的隱形佔位符，確保標題置中 */
}

/* 其他卡片樣式保持不變 */
.container { padding: 16px; max-width: 600px; margin: 0 auto; }
.card {
    background: var(--card-bg);
    border-radius: 16px;
    padding: 14px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 14px;
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.img-wrapper {
    width: 85px; height: 85px; border-radius: 12px;
    background: #3c4043; flex-shrink: 0; overflow: hidden; cursor: zoom-in;
    display: flex; align-items: center; justify-content: center;
}
.img-wrapper img { width: 100%; height: 100%; object-fit: cover; }
.no-img { font-size: 24px; color: #5f6368; }
.content { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; }
.title { font-size: 17px; font-weight: 600; margin-bottom: 8px; line-height: 1.3; color: var(--text-primary); }
.badges { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 6px; }
.badge { font-size: 12px; padding: 3px 8px; border-radius: 6px; background: #3c4043; color: #dadce0; }
.badge.store { background: rgba(138, 180, 248, 0.15); color: #8ab4f8; }
.note { font-size: 13px; color: var(--danger); margin-top: 4px; display: flex; align-items: center; gap: 4px; }
.footer-row { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; }
.price { font-size: 20px; font-weight: 700; color: var(--price-color); }
.price span { font-size: 13px; margin-right: 2px; }
.qty-badge {
    background: var(--accent);
    color: #000;
    font-size: 14px;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 8px rgba(187, 134, 252, 0.3);
}
.check-wrapper { width: 44px; display: flex; justify-content: flex-end; }
input[type=checkbox] {
    appearance: none; -webkit-appearance: none;
    width: 28px; height: 28px;
    border: 2px solid #5f6368;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
}
input[type=checkbox]:checked {
    background: var(--accent);
    border-color: var(--accent);
    position: relative;
}
input[type=checkbox]:checked::after {
    content: '✓'; position: absolute;
    color: #000; font-size: 16px; font-weight: 900;
    top: 50%; left: 50%; transform: translate(-50%, -50%);
}
.card.checked { opacity: 0.5; background: #252629; }
.card.checked .title { text-decoration: line-through; color: #80868b; }
.total-bar {
    position: fixed; bottom: 0; left: 0; right: 0;
    background: rgba(32, 33, 36, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-top: 1px solid var(--border-color);
    padding: 16px 20px;
    padding-bottom: calc(16px + var(--safe-bottom));
    display: flex; justify-content: space-between; align-items: center;
    box-shadow: 0 -4px 16px rgba(0,0,0,0.5); z-index: 1000;
}
.total-label { font-size: 15px; color: var(--text-secondary); }
.grand-total { font-size: 22px; font-weight: 800; color: var(--accent); }
.modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 2000; align-items: center; justify-content: center; flex-direction: column; }
.modal img { max-width: 95%; max-height: 80vh; border-radius: 8px; box-shadow: 0 0 30px rgba(187, 134, 252, 0.2); animation: popIn 0.3s; }
.modal-hint { color: #888; margin-top: 20px; font-size: 14px; }
@keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
</style>
</head>
<body>
<div class="header">
    <button class="back-btn" onclick="history.back()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <h2>Shopping List (${now})</h2>
    <div class="header-spacer"></div>
</div>
<div class="container">${items.map((i,x)=>`
<div class="card ${i.checked?'checked':''}" id="card-${x}">
<div class="img-wrapper" onclick="openModal('${i.image}')">${i.image?`<img src="${i.image}">`:'<div class="no-img"><i class="fas fa-camera"></i></div>'}</div>
<div class="content">
    <div class="title">${i.name}</div>
    <div class="badges">${i.store?`<span class="badge store">🏬 ${i.store}</span>`:''}${i.category?`<span class="badge">📂 ${i.category}</span>`:''}</div>
    ${i.note?`<div class="note">📝 ${i.note}</div>`:''}
    <div class="footer-row">
        <div class="price"><span>¥</span>${i.amount.toLocaleString()}</div>
        ${i.quantity>1 ? `<div class="qty-badge">x ${i.quantity}</div>` : ''}
    </div>
</div>
<div class="check-wrapper"><input type="checkbox" ${i.checked?'checked':''} onclick="toggleCheck(this,'card-${x}')"></div>
</div>`).join('')}</div>
<div class="total-bar"><div class="total-label">Total (${items.length} items)</div><div class="grand-total">¥${dataModule.total().toLocaleString()}</div></div>
<div id="imgModal" class="modal" onclick="closeModal()"><img id="modalImg"><div class="modal-hint">Tap anywhere to close</div></div>
<script id="raw-data" type="application/json">${jsonData}</script>
<script>
function toggleCheck(c,i){const e=document.getElementById(i);c.checked?e.classList.add('checked'):e.classList.remove('checked')}
function openModal(s){if(!s)return;document.getElementById('imgModal').style.display='flex';document.getElementById('modalImg').src=s}
function closeModal(){document.getElementById('imgModal').style.display='none'}
</script></body></html>`;
            const blob = new Blob([html], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Japan_List_iOS_${now.replace(/\//g,'-')}.html`;
            a.click();
        };

        const importHTML = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                const doc = new DOMParser().parseFromString(ev.target.result, 'text/html');
                let newItems = [];
                const rawDataEl = doc.getElementById('raw-data');
                if (rawDataEl) {
                    try { newItems = JSON.parse(rawDataEl.textContent); } catch (err) {}
                }
                if (newItems.length === 0) {
                     const cards = doc.querySelectorAll('.card');
                     if(cards.length > 0) {
                         cards.forEach(card => {
                             const title = card.querySelector('.title')?.textContent.trim() || '未命名';
                             let store = ''; let category = '';
                             const storeBadge = card.querySelector('.badge.store');
                             if (storeBadge) store = storeBadge.textContent.replace('🏬','').trim();
                             const meta = card.querySelector('.meta')?.textContent || '';
                             if(!store && meta.includes('🏬')) store = meta.split('🏬')[1].split('|')[0].trim();
                             
                             let amount = 0;
                             const priceEl = card.querySelector('.price');
                             if (priceEl) {
                                 const m = priceEl.textContent.replace(/,/g,'').match(/(\d+)/);
                                 if(m) amount = parseFloat(m[0]);
                             }
                             
                             let quantity = 1;
                             const qtyBadge = card.querySelector('.qty-badge');
                             if(qtyBadge) {
                                 const m = qtyBadge.textContent.match(/(\d+)/);
                                 if(m) quantity = parseFloat(m[0]);
                             }
                             const oldQty = card.querySelector('.qty');
                             if(oldQty) {
                                 const m = oldQty.textContent.match(/x(\d+)/);
                                 if(m) quantity = parseFloat(m[1]);
                             }

                             const image = card.querySelector('img')?.src || '';
                             if(title||image) newItems.push({name:title, store, category:'', note:'', amount, quantity, image, checked:false});
                         });
                     }
                }
                if (newItems.length > 0) {
                    if (confirm(`成功解析 ${newItems.length} 項目，是否覆蓋？`)) {
                        dataModule.set(newItems);
                        renderModule.render();
                    }
                } else {
                    alert('無法辨識檔案格式。');
                }
            };
            reader.readAsText(file);
        };
        return { exportHTML, importHTML };
    })();

    window.eventModule = eventModule; 
    (async () => { await dataModule.load(); renderModule.render(); })();

    document.getElementById('addForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('name');
        const fileInput = document.getElementById('image');
        let image = '';
        if (fileInput.files[0]) {
            image = await ImageUtils.compress(fileInput.files[0]);
        }
        dataModule.add({
            name: nameInput.value.trim(),
            store: document.getElementById('store').value,
            amount: parseFloat(document.getElementById('amount').value) || 0,
            quantity: parseFloat(document.getElementById('quantity').value) || 1,
            category: document.getElementById('category').value,
            note: document.getElementById('note').value,
            image: image,
            checked: false
        });
        renderModule.render();
        e.target.reset();
        nameInput.focus();
    });

    document.getElementById('exportBtn').onclick = ioModule.exportHTML;
    document.getElementById('importBtn').onclick = () => document.getElementById('importFile').click();
    document.getElementById('importFile').onchange = ioModule.importHTML;
    document.getElementById('clearList').onclick = () => {
        if (confirm('確定清空全部？')) {
            dataModule.clear();
            renderModule.render();
        }
    };
});