# 作品集自动同步工具使用指南

## 🚀 快速开始

### 一键同步所有作品

```bash
npm run sync-portfolio
```

这个命令会：
1. ✅ 访问你提供的所有网站
2. ✅ 提取网站标题、描述等信息
3. ✅ 自动生成网站截图（1920x1080）
4. ✅ 根据内容自动分类（AI Engine / Automation / Generative Art）
5. ✅ 更新作品集数据文件

**预计时间**: 约 2-3 分钟（15 个网站 × 2 秒延迟）

## 📋 分步执行

如果你想分步执行，可以使用：

### 步骤 1: 抓取网站信息
```bash
npm run fetch-websites
```

输出：
- `src/data/website-info.json` - 原始数据
- `public/screenshots/*.png` - 网站截图

### 步骤 2: 更新作品集
```bash
npm run update-works
```

输出：
- `src/data/works.ts` - 更新后的作品数据
- `src/data/works.ts.backup` - 原文件备份

## 🎯 自动分类规则

工具会根据网站内容和 URL 自动分类：

### AI Image Engine
- 关键词：AI, image, generation, prompt, flat-lay, visual, creative
- 示例：包含 AI 图像生成相关的网站

### Automation
- 关键词：admin, erp, system, dashboard, management, automation, tool
- 示例：管理系统、ERP、后台工具

### Generative Art
- 关键词：game, interactive, canvas, animation, design, portfolio, showcase
- 示例：游戏、互动作品、设计作品集

### Other
- 未匹配到以上分类的网站（不会自动添加到作品集）

## ✏️ 自定义网站列表

编辑 `scripts/fetch-websites.ts`：

```typescript
const websites = [
  'https://your-new-website.com',
  'https://another-project.com',
  // ... 添加更多网站
];
```

## 🎨 自定义分类

编辑 `scripts/fetch-websites.ts` 中的 `categorizeWebsite` 函数来自定义分类逻辑。

## 📁 文件结构

```
portfo-11:24/
├── scripts/
│   ├── fetch-websites.ts    # 抓取脚本
│   ├── update-works.ts       # 更新脚本
│   └── README.md            # 详细文档
├── public/
│   └── screenshots/         # 截图存储目录
└── src/
    └── data/
        ├── website-info.json # 抓取的原始数据
        └── works.ts         # 作品集数据（会被更新）
```

## ⚠️ 注意事项

1. **首次运行**: Puppeteer 会下载 Chromium（约 300MB），只需下载一次
2. **网络要求**: 需要能访问所有列出的网站
3. **超时处理**: 如果网站加载超过 30 秒，会跳过并继续
4. **截图尺寸**: 固定为 1920x1080，适合作品集展示
5. **备份**: 更新前会自动备份原 `works.ts` 文件

## 🔧 故障排除

### 问题：Puppeteer 下载失败
**解决**: 手动设置环境变量或使用国内镜像

### 问题：某些网站无法访问
**解决**: 检查网络连接，或从列表中移除该网站

### 问题：分类不准确
**解决**: 编辑 `categorizeWebsite` 函数，添加自定义规则

### 问题：截图质量不佳
**解决**: 编辑 `fetch-websites.ts` 中的 `viewport` 和 `clip` 设置

## 💡 提示

- 运行前可以先测试单个网站，确保 Puppeteer 正常工作
- 截图会保存在 `public/screenshots/`，可以直接在浏览器中查看
- 如果对自动分类不满意，可以手动编辑 `website-info.json` 后再运行 `update-works`

## 🎉 完成后的下一步

1. 检查 `src/data/works.ts` 中的作品数据
2. 运行 `npm run dev` 查看作品集效果
3. 根据需要手动调整分类、标题或描述
4. 提交到 Git 并部署

