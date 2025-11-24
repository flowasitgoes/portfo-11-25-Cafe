import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface WebsiteInfo {
  url: string;
  title: string;
  description: string;
  category: 'ai-engine' | 'automation' | 'generative' | 'other';
  tags: string[];
  screenshot?: string;
}

// 网站列表
const websites = [
  'https://marvelous-conflux.vercel.app/',
  'https://demo-sartooo.vercel.app/',
  'https://et-pack-admin-updated-10-15-2025.vercel.app/login',
  'https://longcat-thoughtful-2.vercel.app/',
  'https://grid-fill-colors.vercel.app/',
  'https://ionic-base-roan.vercel.app/home',
  'https://www.bolcckh.org.tw/',
  'https://v0-recreate-ui-from-screenshot-three-opal-82.vercel.app/',
  'https://www.lissomcasa.com/',
  'https://www.oneone.global/',
  'https://golflink-go.vercel.app/',
  'https://game-with-friends.vercel.app/',
  'https://quiet-beauty.vercel.app/',
  'https://new-harmony.vercel.app/',
  'https://inspiring-change.vercel.app/',
];

// 关键词分类规则
function categorizeWebsite(url: string, title: string, description: string): {
  category: 'ai-engine' | 'automation' | 'generative' | 'other';
  tags: string[];
} {
  const lowerUrl = url.toLowerCase();
  const lowerTitle = title.toLowerCase();
  const lowerDesc = description.toLowerCase();
  const combined = `${lowerUrl} ${lowerTitle} ${lowerDesc}`;

  const tags: string[] = [];
  let category: 'ai-engine' | 'automation' | 'generative' | 'other' = 'other';

  // AI Image Engine 关键词
  const aiKeywords = ['ai', 'image', 'generation', 'stable diffusion', 'prompt', 'flat-lay', 'visual', 'creative'];
  // Automation 关键词
  const automationKeywords = ['admin', 'erp', 'system', 'dashboard', 'management', 'automation', 'tool', 'platform'];
  // Generative Art 关键词
  const generativeKeywords = ['game', 'interactive', 'canvas', 'animation', 'visual', 'art', 'creative', 'design', 'portfolio', 'showcase'];

  // 检查 AI Engine
  if (aiKeywords.some(keyword => combined.includes(keyword)) && 
      (combined.includes('image') || combined.includes('visual') || combined.includes('creative'))) {
    category = 'ai-engine';
    tags.push('AI', 'Visual Design', 'Creative');
  }
  // 检查 Automation
  else if (automationKeywords.some(keyword => combined.includes(keyword)) || 
           lowerUrl.includes('admin') || lowerUrl.includes('erp') || lowerUrl.includes('system')) {
    category = 'automation';
    tags.push('Automation', 'System', 'Tool');
  }
  // 检查 Generative Art
  else if (generativeKeywords.some(keyword => combined.includes(keyword)) || 
           lowerUrl.includes('game') || lowerUrl.includes('interactive') || 
           lowerUrl.includes('portfolio') || lowerUrl.includes('showcase')) {
    category = 'generative';
    tags.push('Web Design', 'Interactive', 'Creative');
  }

  // 添加技术标签
  if (lowerUrl.includes('vercel')) tags.push('Vercel');
  if (lowerUrl.includes('react') || lowerUrl.includes('next')) tags.push('React');
  if (lowerUrl.includes('ionic')) tags.push('Ionic');
  if (combined.includes('design') || combined.includes('ui')) tags.push('UI/UX');
  if (combined.includes('ecommerce') || combined.includes('shop')) tags.push('E-commerce');
  if (combined.includes('portfolio') || combined.includes('showcase')) tags.push('Portfolio');

  return { category, tags: [...new Set(tags)] };
}

async function fetchWebsiteInfo(url: string): Promise<WebsiteInfo> {
  console.log(`正在抓取: ${url}`);
  
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    // 设置超时
    await page.goto(url, { 
      waitUntil: 'networkidle2', 
      timeout: 30000 
    }).catch(() => {
      console.warn(`页面加载超时: ${url}`);
    });

    // 等待页面渲染
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 获取页面内容
    const html = await page.content();
    const $ = cheerio.load(html);

    // 提取标题
    let title = $('title').text() || $('h1').first().text() || 'Untitled';
    title = title.trim().replace(/\s+/g, ' ').substring(0, 100);

    // 提取描述
    let description = 
      $('meta[name="description"]').attr('content') ||
      $('meta[property="og:description"]').attr('content') ||
      $('p').first().text() ||
      $('h2').first().text() ||
      'No description available';
    description = description.trim().replace(/\s+/g, ' ').substring(0, 200);

    // 生成截图文件名
    const urlSlug = url
      .replace(/https?:\/\//, '')
      .replace(/[^a-z0-9]/gi, '-')
      .toLowerCase()
      .substring(0, 50);
    const screenshotPath = `screenshots/${urlSlug}.png`;
    const fullScreenshotPath = path.join(__dirname, '../public', screenshotPath);

    // 确保目录存在
    const screenshotDir = path.dirname(fullScreenshotPath);
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    // 截图
    await page.screenshot({
      path: fullScreenshotPath,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    });

    await browser.close();

    // 分类
    const { category, tags } = categorizeWebsite(url, title, description);

    return {
      url,
      title,
      description,
      category,
      tags,
      screenshot: screenshotPath,
    };
  } catch (error) {
    console.error(`抓取失败 ${url}:`, error);
    return {
      url,
      title: 'Failed to fetch',
      description: 'Unable to fetch website information',
      category: 'other',
      tags: ['Error'],
    };
  }
}

async function main() {
  console.log('开始抓取网站信息...\n');

  const results: WebsiteInfo[] = [];

  // 逐个抓取（避免并发过多）
  for (const url of websites) {
    const info = await fetchWebsiteInfo(url);
    results.push(info);
    console.log(`✓ ${info.title}\n`);
    
    // 延迟避免请求过快
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // 保存结果
  const outputPath = path.join(__dirname, '../src/data/website-info.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`\n完成！共抓取 ${results.length} 个网站`);
  console.log(`结果已保存到: ${outputPath}`);
  console.log(`截图已保存到: public/screenshots/`);
}

main().catch(console.error);

