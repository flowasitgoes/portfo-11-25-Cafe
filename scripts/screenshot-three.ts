import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2025潮流版型選擇、GolfLink、Video Digest 縮圖
const urls: { url: string; slug: string }[] = [
  { url: 'https://marvelous-conflux.vercel.app/', slug: 'marvelous-conflux-vercel-app-' },
  { url: 'https://golflink-go.vercel.app/', slug: 'golflink-go-vercel-app-' },
  { url: 'https://summary.ifunlove.com/', slug: 'summary-ifunlove-com' },
];

async function screenshotUrl(url: string, slug: string, outputDir: string): Promise<void> {
  console.log(`Screenshot: ${url}`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 2500));
    const filePath = path.join(outputDir, `${slug}.png`);
    await page.screenshot({
      path: filePath,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    });
    console.log(`  -> ${filePath}`);
  } finally {
    await browser.close();
  }
}

async function main() {
  const outputDir = path.join(__dirname, '../public/screenshots');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  for (const { url, slug } of urls) {
    try {
      await screenshotUrl(url, slug, outputDir);
    } catch (e) {
      console.error(`Failed ${url}:`, e);
    }
    await new Promise((r) => setTimeout(r, 1500));
  }
  console.log('Done.');
}

main().catch(console.error);
