import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 检查部署准备状态...\n');

const checks = {
  '构建测试': false,
  '截图文件': false,
  '作品数据': false,
  'Vercel 配置': false,
};

// 检查构建
try {
  const distPath = path.join(__dirname, '../dist');
  if (fs.existsSync(distPath)) {
    const indexHtml = path.join(distPath, 'index.html');
    if (fs.existsSync(indexHtml)) {
      checks['构建测试'] = true;
      console.log('✅ 构建测试: 通过');
    }
  }
} catch {
  console.log('❌ 构建测试: 失败 - 请运行 npm run build');
}

// 检查截图
try {
  const screenshotsPath = path.join(__dirname, '../public/screenshots');
  if (fs.existsSync(screenshotsPath)) {
    const files = fs.readdirSync(screenshotsPath).filter(f => f.endsWith('.png'));
    if (files.length > 0) {
      checks['截图文件'] = true;
      console.log(`✅ 截图文件: 找到 ${files.length} 张截图`);
    }
  }
} catch {
  console.log('❌ 截图文件: 未找到');
}

// 检查作品数据
try {
  const worksPath = path.join(__dirname, '../src/data/works.ts');
  if (fs.existsSync(worksPath)) {
    const content = fs.readFileSync(worksPath, 'utf-8');
    if (content.includes('export const works')) {
      checks['作品数据'] = true;
      console.log('✅ 作品数据: 存在');
    }
  }
} catch {
  console.log('❌ 作品数据: 未找到');
}

// 检查 Vercel 配置
try {
  const vercelPath = path.join(__dirname, '../vercel.json');
  if (fs.existsSync(vercelPath)) {
    checks['Vercel 配置'] = true;
    console.log('✅ Vercel 配置: 存在');
  }
} catch {
  console.log('❌ Vercel 配置: 未找到');
}

console.log('\n📊 检查结果:');
const allPassed = Object.values(checks).every(v => v);
if (allPassed) {
  console.log('✅ 所有检查通过！可以部署了。\n');
  console.log('📝 下一步:');
  console.log('1. 提交代码到 Git: git add . && git commit -m "Ready for deployment"');
  console.log('2. 推送到远程: git push');
  console.log('3. 在 Vercel Dashboard 导入项目或使用: vercel --prod');
} else {
  console.log('⚠️  部分检查未通过，请修复后再部署。\n');
  Object.entries(checks).forEach(([key, value]) => {
    if (!value) {
      console.log(`❌ ${key}: 未通过`);
    }
  });
}

