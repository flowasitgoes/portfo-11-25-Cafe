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

function generateId(title: string, index: number): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 30) + `-${index}`;
}

async function main() {
  // 读取抓取的数据
  const infoPath = path.join(__dirname, '../src/data/website-info.json');
  
  if (!fs.existsSync(infoPath)) {
    console.error('请先运行 fetch-websites.ts 来抓取网站信息');
    process.exit(1);
  }

  const websites: WebsiteInfo[] = JSON.parse(
    fs.readFileSync(infoPath, 'utf-8')
  );

  // 读取现有的 works.ts
  const worksPath = path.join(__dirname, '../src/data/works.ts');
  const worksContent = fs.readFileSync(worksPath, 'utf-8');

  // 生成新的作品数据
  // 将 "other" 分类的网站也归类为 "generative"（网页设计类）
  const newWorks = websites
    .map((website, index) => {
      // 如果分类为 other，改为 generative（网页设计）
      const finalCategory = website.category === 'other' ? 'generative' : website.category;
      return { ...website, category: finalCategory };
    })
    .map((website, index) => {
      const id = generateId(website.title, index);
      return {
        id,
        category: website.category,
        title: website.title,
        description: website.description,
        link: website.url,
        thumbnail: website.screenshot ? `/${website.screenshot}` : undefined,
        tags: website.tags.length > 0 ? website.tags : ['Web Development'],
      };
    });

  // 生成新的 works.ts 内容
  const worksArrayString = newWorks
    .map(work => {
      const thumbnail = work.thumbnail ? `'${work.thumbnail}'` : 'undefined';
      const tagsString = `[${work.tags.map(t => `'${t.replace(/'/g, "\\'")}'`).join(', ')}]`;
      return `  {
    id: '${work.id}',
    category: '${work.category}',
    title: '${work.title.replace(/'/g, "\\'")}',
    description: '${work.description.replace(/'/g, "\\'")}',
    link: '${work.link}',
    thumbnail: ${thumbnail},
    tags: ${tagsString},
  }`;
    })
    .join(',\n');

  const newContent = `export type WorkCategory = 'ai-engine' | 'automation' | 'generative';

export type Work = {
  id: string;
  category: WorkCategory;
  title: string;
  description: string;
  link: string;
  thumbnail?: string;
  tags: string[];
};

export const works: Work[] = [
${worksArrayString}
];

export const getWorksByCategory = (category: WorkCategory): Work[] => {
  return works.filter(work => work.category === category);
};
`;

  // 备份原文件
  const backupPath = worksPath + '.backup';
  fs.writeFileSync(backupPath, worksContent);
  console.log(`已备份原文件到: ${backupPath}`);

  // 写入新文件
  fs.writeFileSync(worksPath, newContent);
  console.log(`已更新: ${worksPath}`);
  console.log(`共添加 ${newWorks.length} 个作品`);
}

main().catch(console.error);

