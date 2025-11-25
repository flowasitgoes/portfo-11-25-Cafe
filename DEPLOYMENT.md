# Vercel 部署指南

## ✅ 部署前检查清单

### 1. 代码准备
- [x] 构建测试通过 (`npm run build`)
- [x] 截图文件已生成 (`public/screenshots/`)
- [x] 作品数据已更新 (`src/data/works.ts`)
- [x] Vercel 配置已设置 (`vercel.json`)

### 2. Git 准备
确保以下文件已提交到 Git：
- ✅ `src/data/works.ts` - 作品数据
- ✅ `public/screenshots/*.png` - 所有截图
- ✅ `vercel.json` - Vercel 配置
- ✅ `package.json` - 依赖配置

### 3. 文件检查
运行以下命令检查：
```bash
# 检查构建
npm run build

# 检查截图是否存在
ls -la public/screenshots/*.png

# 检查 dist 目录
ls -la dist/screenshots/
```

## 🚀 部署步骤

### 方法 1: 通过 Vercel Dashboard（推荐）

1. **登录 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub/GitLab/Bitbucket 账号登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择你的 Git 仓库
   - Vercel 会自动检测 Vite 项目

3. **配置项目**
   - Framework Preset: Vite（自动检测）
   - Root Directory: `./`（默认）
   - Build Command: `npm run build`（自动检测）
   - Output Directory: `dist`（自动检测）
   - Install Command: `npm install`（自动检测）

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 2-3 分钟）

### 方法 2: 通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   vercel
   ```
   
   首次部署会询问：
   - Set up and deploy? → Yes
   - Which scope? → 选择你的账号
   - Link to existing project? → No（首次）
   - Project name? → 输入项目名称（或直接回车）
   - Directory? → `./`（默认）

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

## 📋 部署后检查

部署完成后，检查以下内容：

1. **网站可访问**
   - 打开 Vercel 提供的 URL
   - 检查页面是否正常加载

2. **截图显示**
   - 检查作品卡片中的截图是否显示
   - 如果截图不显示，检查路径是否正确

3. **3D 场景**
   - 检查首页 3D 场景是否正常渲染
   - 检查交互是否正常

4. **响应式设计**
   - 在不同设备上测试
   - 检查移动端显示

## 🔧 常见问题

### 问题 1: 构建失败
**原因**: 可能是依赖问题或 TypeScript 错误
**解决**: 
```bash
# 清理并重新安装
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 问题 2: 截图不显示
**原因**: 截图路径或文件未正确部署
**解决**:
- 检查 `public/screenshots/` 是否在 Git 中
- 检查 `works.ts` 中的路径是否为 `/screenshots/xxx.png`
- 确保截图文件已提交到 Git

### 问题 3: 3D 场景不显示
**原因**: Three.js 可能需要更多时间加载
**解决**: 
- 检查浏览器控制台错误
- 确保网络连接正常
- 检查 Three.js 依赖是否正确安装

### 问题 4: 样式不显示
**原因**: Tailwind CSS 配置问题
**解决**:
- 检查 `src/index.css` 中的 Tailwind 导入
- 确保 PostCSS 配置正确

## 📝 环境变量（如果需要）

目前项目不需要环境变量。如果将来需要，可以在 Vercel Dashboard 中设置：
1. 进入项目设置
2. 选择 "Environment Variables"
3. 添加变量

## 🔄 更新部署

每次推送代码到 Git 后，Vercel 会自动重新部署。

也可以手动触发：
1. 在 Vercel Dashboard 中点击 "Redeploy"
2. 或使用 CLI: `vercel --prod`

## 📊 性能优化建议

1. **图片优化**
   - 考虑使用 WebP 格式
   - 添加图片懒加载

2. **代码分割**
   - Three.js 库较大（1MB+），已做代码分割
   - 考虑使用动态导入进一步优化

3. **CDN**
   - Vercel 自动提供 CDN
   - 确保静态资源正确配置

## 🎉 完成！

部署成功后，你的作品集网站就可以通过 Vercel 提供的 URL 访问了！

如果需要自定义域名，可以在 Vercel Dashboard 的 "Settings" → "Domains" 中添加。

