# Mirko 網站資源文件

此文件夾包含 Mirko 網站的所有資源文件，可直接用於其他專案。

## 文件結構

```
deliver/
├── mirko.html                    # 來自 public-all 的 HTML 文件
├── mirko-public3.html            # 來自 public3 的 HTML 文件
└── assets/
    ├── css/                      # CSS 樣式文件
    │   ├── index.css
    │   └── mirkoromanelli.webflow.b46c8a0c7.min.css
    ├── js/                       # JavaScript 文件
    │   ├── index.js
    │   ├── jquery-3.5.1.min.dc5e7f18c8.js
    │   ├── webflow.4c391935.0796ef096c01682d.js
    │   ├── webflow.schunk.4a394eb5af8156f2.js
    │   └── webflow.schunk.81c4ce843f2a7706.js
    ├── images/                   # 圖片資源（265 個文件）
    │   └── [主要為 .webp 格式的圖片]
    └── fonts/                    # 字體文件（目前為空）
```

## 統計信息

- **HTML 文件**: 2 個
- **CSS 文件**: 2 個
- **JavaScript 文件**: 5 個
- **圖片文件**: 265 個
- **總文件數**: 274 個
- **總大小**: 約 35MB

## 使用說明

所有 HTML 文件中的資源路徑已經更新為相對路徑（`./assets/...`），可以直接在本地使用。

### 本地預覽

可以使用任何靜態文件服務器來預覽：

```bash
# 使用 Python
python3 -m http.server 8000

# 使用 Node.js (需要安裝 http-server)
npx http-server -p 8000

# 使用 PHP
php -S localhost:8000
```

然後在瀏覽器中訪問 `http://localhost:8000/mirko.html` 或 `http://localhost:8000/mirko-public3.html`

## 注意事項

- 所有外部資源已經下載到本地
- 資源路徑已更新為相對路徑
- 圖片主要使用 WebP 格式以優化文件大小
- 如果需要在其他專案中使用，請確保保持相同的文件夾結構

