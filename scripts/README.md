# 作品集同步工具

这个工具可以自动抓取网站信息、生成截图，并更新到作品集中。

## 使用方法

### 方法 1: 一键同步（推荐）

```bash
npm run sync-portfolio
```

这会：
1. 抓取所有网站的信息和截图
2. 自动分类
3. 更新 `src/data/works.ts`

### 方法 2: 分步执行

#### 步骤 1: 抓取网站信息
```bash
npm run fetch-websites
```

这会：
- 访问每个网站
- 提取标题、描述等信息
- 生成截图（保存到 `public/screenshots/`）
- 自动分类（AI Engine / Automation / Generative Art）
- 保存结果到 `src/data/website-info.json`

#### 步骤 2: 更新作品集数据
```bash
npm run update-works
```

这会：
- 读取 `src/data/website-info.json`
- 生成新的 `src/data/works.ts`
- 自动备份原文件

## 自定义网站列表

编辑 `scripts/fetch-websites.ts` 中的 `websites` 数组来添加或修改网站：

```typescript
const websites = [
  'https://your-website.com',
  // ... 更多网站
];
```

## 分类规则

工具会根据以下规则自动分类：

- **AI Image Engine**: 包含 AI、image、generation、prompt 等关键词
- **Automation**: 包含 admin、erp、system、automation、tool 等关键词
- **Generative Art**: 包含 game、interactive、canvas、design、portfolio 等关键词
- **Other**: 其他未匹配的网站

你可以在 `categorizeWebsite` 函数中自定义分类逻辑。

## 输出文件

- `src/data/website-info.json`: 抓取的原始数据
- `public/screenshots/*.png`: 网站截图
- `src/data/works.ts`: 更新后的作品数据（原文件会备份为 `.backup`）

## 注意事项

- 首次运行会下载 Chromium（Puppeteer 需要）
- 每个网站之间会有 2 秒延迟，避免请求过快
- 如果某个网站无法访问，会跳过并继续处理其他网站
- 截图尺寸：1920x1080

