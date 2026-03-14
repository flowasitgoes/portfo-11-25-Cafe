import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log('正在截图 YouTube 频道...');
  const browser = await puppeteer.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  try {
    await page.goto('https://www.youtube.com/@fivonLipa', { 
      waitUntil: 'networkidle2', 
      timeout: 30000 
    });
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const screenshotPath = path.join(__dirname, '../public/screenshots/youtube-fivon-lipa.png');
    const screenshotDir = path.dirname(screenshotPath);
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }
    
    await page.screenshot({ 
      path: screenshotPath, 
      fullPage: false, 
      clip: { x: 0, y: 0, width: 1920, height: 1080 } 
    });
    console.log('✓ 截图已保存:', screenshotPath);
  } catch (error: any) {
    console.error('截图失败:', error.message);
  }
  
  await browser.close();
})();

