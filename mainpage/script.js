document.addEventListener('DOMContentLoaded', () => {
    // === 數據模組 ===
	const dataModule = (() => {
		let items = [];
		const key = 'japanShoppingList_v2';

		const load = () => {
			const saved = localStorage.getItem(key);
			items = saved ? JSON.parse(saved) : [];
		};

		const save = () => localStorage.setItem(key, JSON.stringify(items));
		const get = () => items;
		const add = (item) => { items.push(item); save(); };
		const update = (i, field, val) => { 
			items[i][field] = field === 'amount' || field === 'quantity' ? parseFloat(val) || (field === 'quantity' ? 1 : 0) : val; 
			save(); 
		};
		const toggleCheck = (i, checked) => { items[i].checked = checked; save(); };
		const remove = (i) => { items.splice(i, 1); save(); };
		const reorder = (from, to) => {
			const [moved] = items.splice(from, 1);
			items.splice(to, 0, moved);
			save();
		};
		const clear = () => { items = []; save(); };
		const set = (newItems) => { items = newItems; save(); };
		const total = () => items.reduce((sum, item) => sum + ((item.amount || 0) * (item.quantity || 1)), 0);

		return { load, save, get, add, update, toggleCheck, remove, reorder, clear, set, total };
	})();

    // === 渲染模組 ===
	const renderModule = (() => {
		const tbody = document.getElementById('itemBody');
		const totalEl = document.getElementById('totalAmount');

		const render = () => {
			const frag = document.createDocumentFragment();
			dataModule.get().forEach((item, i) => {
				const tr = document.createElement('tr');
				tr.draggable = true;
				tr.dataset.index = i;
				tr.innerHTML = `
					<td>${item.image ? `<img src="${item.image}" alt="圖片">` : ''}</td>
					<td><input type="text" value="${item.name || ''}" onchange="eventModule.update(${i}, 'name', this.value)" ${item.checked ? 'class="checked"' : ''}></td>
					<td><input type="text" value="${item.store || ''}" onchange="eventModule.update(${i}, 'store', this.value)" ${item.checked ? 'class="checked"' : ''}></td>
					<td><input type="number" value="${item.quantity || 1}" min="1" onchange="eventModule.update(${i}, 'quantity', this.value)" ${item.checked ? 'class="checked"' : ''}></td>
					<td><input type="number" value="${item.amount || 0}" onchange="eventModule.update(${i}, 'amount', this.value)" ${item.checked ? 'class="checked"' : ''}></td>
					<td><input type="text" value="${item.category || ''}" onchange="eventModule.update(${i}, 'category', this.value)" ${item.checked ? 'class="checked"' : ''}></td>
					<td><input type="text" value="${item.note || ''}" onchange="eventModule.update(${i}, 'note', this.value)" ${item.checked ? 'class="checked"' : ''}></td>
					<td><input type="checkbox" ${item.checked ? 'checked' : ''} onchange="eventModule.toggleCheck(${i}, this.checked)"></td>
					<td><button class="del-btn" onclick="eventModule.remove(${i})"><i class="fas fa-trash"></i></button></td>
				`;
				frag.appendChild(tr);
			});
			tbody.innerHTML = '';
			tbody.appendChild(frag);
			eventModule.setupDrag();
			updateTotal();
		};

		const updateTotal = () => {
			totalEl.textContent = `總金額: ¥${dataModule.total().toFixed(0)}`;
		};

		return { render, updateTotal };
	})();

    // === 事件模組 ===
    const eventModule = (() => {
        const update = (i, field, val) => {
            dataModule.update(i, field, val);
            renderModule.render();
        };

        const toggleCheck = (i, checked) => {
            dataModule.toggleCheck(i, checked);
            renderModule.render();
        };

        const remove = (i) => {
            if (confirm('確定刪除此項目？')) {
                dataModule.remove(i);
                renderModule.render();
            }
        };

        const uploadImage = (i, input) => {
            const file = input.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = e => {
                    dataModule.update(i, 'image', e.target.result);
                    renderModule.render();
                };
                reader.readAsDataURL(file);
            }
        };

        const setupDrag = () => {
            document.querySelectorAll('#itemBody tr').forEach(tr => {
                tr.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', tr.dataset.index));
                tr.addEventListener('dragover', e => e.preventDefault());
                tr.addEventListener('drop', e => {
                    e.preventDefault();
                    const from = parseInt(e.dataTransfer.getData('text/plain'));
                    const to = parseInt(tr.dataset.index);
                    if (from !== to) {
                        dataModule.reorder(from, to);
                        renderModule.render();
                    }
                });
            });
        };

        return { update, toggleCheck, remove, uploadImage, setupDrag };
    })();

    // === 匯入匯出 ===
	const ioModule = (() => {
		const exportHTML = () => {
			const items = dataModule.get();
			const html = `<!DOCTYPE html><html lang="zh-TW"><head><meta charset="UTF-8"><title>日本購物清單</title>
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600&display=swap');
					body{font-family:'Noto Sans TC',Arial,sans-serif;margin:20px;background:#f5f5f5;color:#333;}
					h1{font-size:32px;text-align:center;padding:15px;background:linear-gradient(135deg,#6A1B9A,#9C27B0);color:white;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.2);transition:transform 0.3s;}
					h1:hover{transform:scale(1.02);}
					table{width:100%;border-collapse:separate;border-spacing:0;margin:20px 0;background:white;border-radius:12px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,0.15);}
					th,td{padding:12px 15px;text-align:left;border-bottom:1px solid #eee;}
					th{background:linear-gradient(135deg,#6A1B9A,#7B1FA2);color:white;font-weight:600;}
					tr:nth-child(even){background:#fafafa;}
					tr:hover{background:#f0f0f0;}
					img{max-width:80px;height:auto;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.1);}
					.checked td:not(:last-child){text-decoration:line-through double;color:#555;font-weight:600;opacity:0.85;background:rgba(200,200,200,0.15);}
					#total{font-size:22px;font-weight:600;text-align:right;margin:20px 0;color:#6A1B9A;padding:10px;border-radius:8px;background:linear-gradient(135deg,#E1BEE7,#F3E5F5);box-shadow:0 4px 12px rgba(0,0,0,0.1);transition:transform 0.3s;}
					#total:hover{transform:scale(1.02);}
					.checkbox-label{display:inline-block;padding:12px;cursor:pointer;}
					input[type="checkbox"]{width:32px;height:32px;margin:0;border:2px solid #6A1B9A;border-radius:6px;-webkit-appearance:none;appearance:none;background:#fff;cursor:pointer;position:relative;transition:transform 0.2s,border-color 0.2s;}
					input[type="checkbox"]:checked{background:#9C27B0;border-color:#9C27B0;}
					input[type="checkbox"]:checked:after{content:'✓';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;color:white;}
					input[type="checkbox"]:hover{border-color:#9C27B0;transform:scale(1.1);}
					td:last-child{text-align:center;}
					@media (max-width:768px){
						body{margin:15px;}
						h1{font-size:28px;padding:12px;}
						th,td{font-size:14px;padding:10px;}
						img{max-width:60px;}
						#total{font-size:18px;padding:8px;}
						.checkbox-label{padding:14px;}
						input[type="checkbox"]{width:36px;height:36px;}
						input[type="checkbox"]:checked:after{font-size:26px;}
						table{box-shadow:0 4px 15px rgba(0,0,0,0.1);}
					}
					@media (max-width:480px){
						h1{font-size:24px;}
						th,td{font-size:12px;padding:8px;}
						input[type="checkbox"]{width:34px;height:34px;}
						.checkbox-label{padding:12px;}
					}
					@media print{
						body{background:white;margin:10px;}
						h1{background:#6A1B9A;box-shadow:none;}
						table{background:white;box-shadow:none;}
						th{background:#6A1B9A;}
						.checked td:not(:last-child){text-decoration:line-through;color:#555;}
						input[type="checkbox"]{display:none;}
						.checked td:last-child:after{content:'✓';font-size:16px;color:#6A1B9A;}
						#total{background:none;box-shadow:none;}
					}
				</style>
				<script>
					document.addEventListener('DOMContentLoaded', () => {
						const rows = document.querySelectorAll('#itemList tbody tr');
						rows.forEach(row => {
							const checkbox = row.querySelector('input[type="checkbox"]');
							if (checkbox) {
								checkbox.addEventListener('change', () => {
									row.classList.toggle('checked', checkbox.checked);
								});
								if (checkbox.checked) row.classList.add('checked');
							}
						});
					});
				</script>
			</head><body>
				<h1>日本購物備忘清單</h1>
				<table id="itemList"><thead><tr><th>圖片</th><th>商品</th><th>店鋪</th><th>數量</th><th>金額</th><th>類別</th><th>備註</th><th>完成</th></tr></thead><tbody>
					${items.map(i => `<tr class="${i.checked ? 'checked' : ''}"><td>${i.image ? `<img src="${i.image}">` : ''}</td><td>${i.name}</td><td>${i.store}</td><td>${i.quantity || 1}</td><td>${i.amount}</td><td>${i.category}</td><td>${i.note}</td><td><label class="checkbox-label"><input type="checkbox" ${i.checked ? 'checked' : ''}></label></td></tr>`).join('')}
				</tbody></table>
				<div id="total">總金額: ¥${dataModule.total().toFixed(0)}</div>
			</body></html>`;
			const blob = new Blob([html], { type: 'text/html' });
			const url = URL.createObjectURL(blob);
			const a = Object.assign(document.createElement('a'), { href: url, download: 'japan_shopping_list.html' });
			a.click();
			URL.revokeObjectURL(url);
		};

		const importHTML = (e) => {
			const file = e.target.files[0];
			if (!file) return;
			const reader = new FileReader();
			reader.onload = ev => {
				const doc = new DOMParser().parseFromString(ev.target.result, 'text/html');
				const rows = doc.querySelectorAll('tbody tr');
				const newItems = Array.from(rows).map(row => {
					const tds = row.querySelectorAll('td');
					const img = tds[0]?.querySelector('img');
					const checkbox = tds[7]?.querySelector('input[type="checkbox"]');
					return {
						name: tds[1]?.textContent || '',
						store: tds[2]?.textContent || '',
						quantity: parseFloat(tds[3]?.textContent) || 1,
						amount: parseFloat(tds[4]?.textContent) || 0,
						category: tds[5]?.textContent || '',
						note: tds[6]?.textContent || '',
						image: img?.src || '',
						checked: checkbox?.checked || row.classList.contains('checked') || false
					};
				});
				dataModule.set(newItems);
				renderModule.render();
			};
			reader.readAsText(file);
		};

		return { exportHTML, importHTML };
	})();

    // === 初始化 ===
    dataModule.load();
    renderModule.render();

    // === 事件綁定 ===
	document.getElementById('addForm').addEventListener('submit', e => {
		e.preventDefault();
		const name = document.getElementById('name').value.trim();
		if (!name) return alert('請輸入商品名稱！');

		const newItem = {
			name,
			store: document.getElementById('store').value,
			amount: parseFloat(document.getElementById('amount').value) || 0,
			quantity: parseFloat(document.getElementById('quantity').value) || 1,
			category: document.getElementById('category').value,
			note: document.getElementById('note').value,
			image: '',
			checked: false
		};

		const fileInput = document.getElementById('image');
		if (fileInput.files[0]) {
			const reader = new FileReader();
			reader.onload = ev => {
				newItem.image = ev.target.result;
				dataModule.add(newItem);
				renderModule.render();
				e.target.reset();
				document.getElementById('name').focus();
			};
			reader.readAsDataURL(fileInput.files[0]);
		} else {
			dataModule.add(newItem);
			renderModule.render();
			e.target.reset();
			document.getElementById('name').focus();
		}
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

    // 暴露給 inline 使用
    window.eventModule = eventModule;
    window.renderModule = renderModule;
});