// script.js - 包含複製功能的完整版

// 1. 檢查重複功能 (保持不變)
function checkDuplicates() {
    const textInput = document.getElementById('textInput');
    const rawText = textInput.value;
    const resultsDiv = document.getElementById('results');
    const summaryDiv = document.getElementById('summary');
    const cleanContainer = document.getElementById('cleanResultContainer');
    
    // 隱藏去重結果區，專注於檢查
    cleanContainer.classList.add('hidden');
    
    resultsDiv.innerHTML = '';
    summaryDiv.innerHTML = '';

    if (!rawText.trim()) {
        summaryDiv.innerHTML = '<p style="color: red;">❌ 請輸入文字內容。</p>';
        return;
    }

    const lines = rawText.split(/\r\n|\n|\r/);
    const lineMap = new Map();

    lines.forEach((line, index) => {
        const cleanLine = line.trim();
        if (cleanLine === '') return; 

        const lineNumber = index + 1;

        if (lineMap.has(cleanLine)) {
            const data = lineMap.get(cleanLine);
            data.count += 1;
            data.lineNumbers.push(lineNumber);
        } else {
            lineMap.set(cleanLine, {
                originalText: cleanLine,
                count: 1,
                lineNumbers: [lineNumber]
            });
        }
    });

    const duplicates = [];
    lineMap.forEach((value) => {
        if (value.count > 1) {
            duplicates.push(value);
        }
    });

    duplicates.sort((a, b) => b.count - a.count);

    if (duplicates.length === 0) {
        summaryDiv.innerHTML = '<h3 style="color: green;">✅ 完美！沒有發現重複的行。</h3>';
    } else {
        summaryDiv.innerHTML = `
            <h3>📊 分析報告</h3>
            <p>總行數：${lines.length}</p>
            <p>發現 <strong>${duplicates.length}</strong> 組重複內容</p>
        `;

        let resultHTML = '<ul style="list-style: none; padding: 0;">';
        duplicates.forEach(dup => {
            resultHTML += `
                <li class="duplicate-item">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                        <span style="background:#e74c3c; color:white; padding:2px 8px; border-radius:4px; font-size:0.9em;">
                            重複 ${dup.count} 次
                        </span>
                    </div>
                    <div style="background: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-family: monospace;">
                        ${escapeHtml(dup.originalText)}
                    </div>
                    <div style="margin-top:5px; color: #666; font-size: 0.9em;">
                        出現在行號：${dup.lineNumbers.join(', ')}
                    </div>
                </li>
            `;
        });
        resultHTML += '</ul>';
        resultsDiv.innerHTML = resultHTML;
    }
}

// 2. 產生去重結果 (不刪除原始文字)
function generateUniqueText() {
    const textInput = document.getElementById('textInput');
    const cleanOutput = document.getElementById('cleanOutput');
    const cleanContainer = document.getElementById('cleanResultContainer');
    const resultsDiv = document.getElementById('results');
    const summaryDiv = document.getElementById('summary');

    const rawText = textInput.value;
    
    if (!rawText.trim()) {
        alert("請先輸入文字！");
        return;
    }

    // 清空檢查報告，讓畫面乾淨一點
    resultsDiv.innerHTML = '';
    summaryDiv.innerHTML = '';

    const lines = rawText.split(/\r\n|\n|\r/);
    const seen = new Set();
    const cleanLines = [];
    let removedCount = 0;

    lines.forEach(line => {
        const cleanLine = line.trim();
        
        // 保留空行
        if (cleanLine === '') {
            cleanLines.push(line);
            return;
        }

        if (seen.has(cleanLine)) {
            removedCount++; // 發現重複，計數但不加入結果陣列
        } else {
            seen.add(cleanLine);
            cleanLines.push(line);
        }
    });

    // 將結果填入新的文字框
    cleanOutput.value = cleanLines.join('\n');
    
    // 顯示結果區塊
    cleanContainer.classList.remove('hidden');
    
    // 自動捲動到底部
    cleanContainer.scrollIntoView({ behavior: 'smooth' });

    // 簡單提示
    if (removedCount > 0) {
        summaryDiv.innerHTML = `<p style="color: #28a745;">✅ 已過濾掉 ${removedCount} 個重複行，結果顯示在下方。</p>`;
    } else {
        summaryDiv.innerHTML = `<p style="color: orange;">ℹ️ 原文中沒有重複內容，結果與原文相同。</p>`;
    }
}

// 3. 複製功能
function copyToClipboard() {
    const cleanOutput = document.getElementById('cleanOutput');
    const btnCopy = document.getElementById('btnCopy');

    // 選取文字
    cleanOutput.select();
    cleanOutput.setSelectionRange(0, 99999); // 手機版支援

    // 執行複製
    navigator.clipboard.writeText(cleanOutput.value).then(() => {
        // 視覺回饋：按鈕變色
        const originalText = btnCopy.innerText;
        btnCopy.innerText = "✅ 已複製！";
        btnCopy.style.backgroundColor = "#28a745";
        
        // 2秒後恢復原狀
        setTimeout(() => {
            btnCopy.innerText = originalText;
            btnCopy.style.backgroundColor = "#007bff";
        }, 2000);
    }).catch(err => {
        alert("複製失敗，請手動複製。");
        console.error('複製錯誤:', err);
    });
}

// 輔助函式
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}