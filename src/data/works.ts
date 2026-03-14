import type { Translations } from '../types/translations';
import zhTranslations from './translations/zh.json';

export type WorkCategory = 'ai-engine' | 'automation' | 'generative' | 'games';

export type Work = {
  id: string;
  category: WorkCategory;
  title: string;
  description: string;
  link: string;
  thumbnail?: string;
  tags: string[];
};

// 基础作品数据（不包含可翻译的 title 和 description）
const worksBase: Omit<Work, 'title' | 'description'>[] = [
  {
    id: '--14',
    category: 'generative',
    link: 'https://porfolio.tj-tech.pro/',
    thumbnail: '/screenshots/tj-tech.png',
    tags: ['Web Design', 'Interactive', 'Creative'],
  },
  {
    id: '--6',
    category: 'generative',
    link: 'https://www.bolcckh.org.tw/',
    thumbnail: '/screenshots/www-bolcckh-org-tw-.png',
    tags: ['Web Design', 'Custom Design', 'Official'],
  },
  {
    id: 'one-one-9',
    category: 'generative',
    link: 'https://www.oneone.global/',
    thumbnail: '/screenshots/www-oneone-global-.png',
    tags: ['Web Design', 'Branding', 'Official'],
  },
  {
    id: 'lissom-8',
    category: 'generative',
    link: 'https://www.lissomcasa.com/',
    thumbnail: '/screenshots/www-lissomcasa-com-.png',
    tags: ['Web Design', 'Branding', 'Aesthetic'],
  },
  {
    id: 'road-bike-racing-bikes-italian-1',
    category: 'generative',
    link: 'https://demo-sartooo.vercel.app/',
    thumbnail: '/screenshots/demo-sartooo-vercel-app-.png',
    tags: ['UI/UX Implementation', 'Marketing', 'Prototyping'],
  },
  {
    id: 'golflink--10',
    category: 'automation',
    link: 'https://golflink-go.vercel.app/',
    thumbnail: '/screenshots/golflink-go-vercel-app-.jpg',
    tags: ['Web Design', 'Interactive', 'Creative'],
  },
  {
    id: '-erp--2',
    category: 'automation',
    link: 'https://et-pack-admin-updated-10-15-2025.vercel.app/login',
    thumbnail: '/screenshots/et-pack-admin-updated-10-15-2025-vercel-app-login.png',
    tags: ['Automation', 'System', 'ERP', 'Digitalization'],
  },
  {
    id: 'fivon-lipa-youtube-17',
    category: 'automation',
    link: 'https://www.youtube.com/@fivonLipa',
    thumbnail: '/screenshots/youtube-fivon-lipa.png',
    tags: ['Automation', 'Content Creation', 'Video Production'],
  },
  {
    id: 'video-digest-ifunlove',
    category: 'automation',
    link: 'https://summary.ifunlove.com/',
    thumbnail: '/screenshots/summary-ifunlove-com.jpg',
    tags: ['Tool', 'YouTube', 'Summary', 'ifunlove'],
  },
  {
    id: 'keelung-cook-ifunlove',
    category: 'automation',
    link: 'https://keelung-cook.ifunlove.com/',
    thumbnail: '/screenshots/keelung-cook-ifunlove-com.png',
    tags: ['Platform', 'Cooking', 'Local', 'ifunlove'],
  },
  {
    id: 'zodiac-ifunlove',
    category: 'automation',
    link: 'https://zodiac.ifunlove.com/',
    thumbnail: '/screenshots/zodiac-ifunlove-com.png',
    tags: ['Tool', 'Music Visualizer', 'Generative Art', 'ifunlove'],
  },
  {
    id: 'pray-ifunlove',
    category: 'automation',
    link: 'https://pray.ifunlove.com/',
    thumbnail: '/screenshots/pray-ifunlove-com.png',
    tags: ['Tool', 'Wellness', 'Prayer', 'ifunlove'],
  },
  {
    id: 'kaomoji-collection--7',
    category: 'games',
    link: 'https://v0-recreate-ui-from-screenshot-three-opal-82.vercel.app/',
    thumbnail: '/screenshots/kaomoji.jpg',
    tags: ['Tool', 'Web App', 'Creative',  'Integration'],
  },
  {
    id: 'ionic-app-3',
    category: 'games',
    link: 'https://longcat-thoughtful-2.vercel.app/game/level_1773474096852_ic1l72s00',
    thumbnail: '/screenshots/longcat.jpg',
    tags: ['Web App', 'Game', 'Mobile'],
  },
  {
    id: '--4',
    category: 'games',
    link: 'https://grid-fill-colors.vercel.app/',
    thumbnail: '/screenshots/grid-fill-colors-vercel-app-.png',
    tags: ['Web App', 'Game', 'Story', 'Music', 'iOS', 'Android'],
  },
  {
    id: 'ionic-app-5',
    category: 'games',
    link: 'https://ionic-base-roan.vercel.app/home',
    thumbnail: '/screenshots/ionic-base-roan-vercel-app-home.png',
    tags: ['Web App', 'Remix', 'iOS', 'Android'],
  },
  {
    id: 'game-with-friends-11',
    category: 'games',
    link: 'https://game-with-friends.vercel.app/',
    thumbnail: '/screenshots/game-with-friends-vercel-app-.png',
    tags: ['Web App', 'Modification', 'Integration', 'Video', 'Music'],
  },
  // 跳躍階梯平台遊戲（暫時隱藏）
  // {
  //   id: 'jumping-stairs-16',
  //   category: 'games',
  //   link: 'https://2nd-game-ionic-bricks-pfme.vercel.app/jumping',
  //   thumbnail: '/screenshots/jumping-stairs.png',
  //   tags: ['Web App', 'Game', 'Mobile', 'Platformer'],
  // },
  {
    id: 'ifunlove-main',
    category: 'games',
    link: 'https://www.ifunlove.com/',
    thumbnail: '/screenshots/www-ifunlove-com.png',
    tags: ['Web App', 'Game', 'Interactive', 'ifunlove'],
  },
  {
    id: 'eggcute-ifunlove',
    category: 'games',
    link: 'https://eggcute.ifunlove.com/',
    thumbnail: '/screenshots/eggcute-ifunlove-com.png',
    tags: ['Web App', 'Game', 'Puzzle', 'ifunlove'],
  },
  {
    id: 'stall-run-ifunlove',
    category: 'games',
    link: 'https://stall-run.ifunlove.com/',
    thumbnail: '/screenshots/stall-run-ifunlove-com.png',
    tags: ['Web App', 'Game', 'Night Market', 'ifunlove'],
  },
  {
    id: 'jumper-ifunlove',
    category: 'games',
    link: 'https://jumper.ifunlove.com/home',
    thumbnail: '/screenshots/jumper-ifunlove-com-home.png',
    tags: ['Web App', 'Game', 'Platformer', 'ifunlove'],
  },
  {
    id: 'border-maker-17',
    category: 'games',
    link: 'https://border-maker.vercel.app/',
    thumbnail: '/screenshots/Bordermaker.png',
    tags: ['Web App', 'Tool', 'Pixel Art', 'Creative'],
  },
  {
    id: 'street-food-ifunlove',
    category: 'games',
    link: 'https://street-food.ifunlove.com/',
    thumbnail: '/screenshots/street-food-ifunlove-com.png',
    tags: ['Web App', 'Game', 'Night Market', 'ifunlove'],
  },
  {
    id: 'the-harmony--13',
    category: 'generative',
    link: 'https://new-harmony.vercel.app/',
    thumbnail: '/screenshots/new-harmony-vercel-app-.png',
    tags: ['Web Design', 'Marketing', 'Scroll Animation'],
  },
  {
    id: 'conflux-stuido-15',
    category: 'generative',
    link: 'https://conflux-portfolio.vercel.app/',
    thumbnail: '/screenshots/conflux-portfolio-vercel-app-.png',
    tags: ['Admin', 'Plug-in', 'Economic',  'Modular', 'E-commerce'],
  },
  {
    id: 'quiet-beauty-blog-12',
    category: 'generative',
    link: 'https://quiet-beauty.vercel.app/',
    thumbnail: '/screenshots/quiet-beauty-vercel-app-.png',
    tags: ['Web Design', 'Blog', 'Minimalist',  'Diary', 'Literature'],
  },
  {
    id: 'marvelous-conflux-0',
    category: 'generative',
    link: 'https://marvelous-conflux.vercel.app/',
    thumbnail: '/screenshots/marvelous-conflux-vercel-app-.jpg',
    tags: ['Templates', 'Fashion', 'Trend',  'Future'],
  }
];

// 根据翻译获取完整的作品列表
export const getWorks = (t: Translations): Work[] => {
  return worksBase.map(work => {
    const translation = t.works.items[work.id as keyof typeof t.works.items];
    return {
      ...work,
      title: translation?.title || work.id,
      description: translation?.description || '',
    };
  });
};

// 为了向后兼容，导出默认的中文版本（使用 zh 翻译）
export const works: Work[] = getWorks(zhTranslations);

export const getWorksByCategory = (category: WorkCategory, t: Translations): Work[] => {
  return getWorks(t).filter(work => work.category === category);
};
