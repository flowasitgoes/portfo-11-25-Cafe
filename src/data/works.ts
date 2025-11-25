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

export const works: Work[] = [
  {
    id: '--14',
    category: 'generative',
    title: 'TJ Technology 堤杰科技',
    description: '專為上市櫃企業與品牌公司服務，雲端數位網頁設計公司是您指定的御用夥伴。我們專注提供頂尖的網頁設計、網站設計以及 RWD 響應式等客製化服務。結合電商解決方案與專業 SEO 網站優化，協助您的品牌網站呈現出類拔萃的國際級形象。',
    link: 'https://porfolio.tj-tech.pro/',
    thumbnail: '/screenshots/tj-tech.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel'],
  },
  {
    id: '--6',
    category: 'generative',
    title: '高雄靈糧堂基督教會',
    description: '高雄靈糧堂官方網站首頁，提供教會最新消息、聚會時間、服務項目、信仰資源等資訊，歡迎您來到主的家。',
    link: 'https://www.bolcckh.org.tw/',
    thumbnail: '/screenshots/www-bolcckh-org-tw-.png',
    tags: ['Web Design', 'Interactive', 'Creative'],
  },
  {
    id: 'one-one-9',
    category: 'generative',
    title: 'One One 萬萬奶昔',
    description: '每一杯奶昔都是調皮的小精靈，帶著獨特風味和趣味，準備驚喜你味蕾。萬萬不僅僅是一個名字，而是一種生活態度。每個細節都灑滿美學追求，從店內設計到產品包裝，每一吋都展現我們對生活的熱愛。',
    link: 'https://www.oneone.global/',
    thumbnail: '/screenshots/www-oneone-global-.png',
    tags: ['Web Design', 'Interactive', 'Creative'],
  },
  {
    id: 'lissom-8',
    category: 'generative',
    title: 'Lissom 里山家具代理',
    description: '純粹而極致的設計，勾勒出空間的尊貴格調。高品質木材與精湛工藝相結合，每一筆紋理皆訴說著時光的故事。這不只是家具，而是一種生活態度。',
    link: 'https://www.lissomcasa.com/',
    thumbnail: '/screenshots/www-lissomcasa-com-.png',
    tags: ['Web Design', 'Interactive', 'Creative'],
  },
  {
    id: 'road-bike-racing-bikes-italian-1',
    category: 'generative',
    title: '義大利手工單車品牌展示',
    description: '前端製作的執行能力, 響應式設計 動態規劃, 以及UI/UX的精準實作...',
    link: 'https://demo-sartooo.vercel.app/',
    thumbnail: '/screenshots/demo-sartooo-vercel-app-.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel'],
  },
  {
    id: 'golflink--10',
    category: 'automation',
    title: 'GolfLink - 高領資通',
    description: '高領資通藉由客製 CRM + POS 系統，串接北中南多個台灣高爾夫球場。共享行銷受眾，運用數位科技與內容，吸引年輕朋友加入這項引人入勝的活動，持續擴增新的消費族群，配合資訊系統的輔助，方能永續發展高爾夫球產業。',
    link: 'https://golflink-go.vercel.app/',
    thumbnail: '/screenshots/golflink-go-vercel-app-.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel'],
  },
  {
    id: '-erp--2',
    category: 'automation',
    title: '工廠 ERP 系統',
    description: '為百人工廠將傳統紙本紀錄數位化，藉由導入數位工程，提升作業效率，紀錄進銷存。',
    link: 'https://et-pack-admin-updated-10-15-2025.vercel.app/login',
    thumbnail: '/screenshots/et-pack-admin-updated-10-15-2025-vercel-app-login.png',
    tags: ['Automation', 'System', 'Tool', 'Vercel'],
  },
  {
    id: 'fivon-lipa-youtube-17',
    category: 'automation',
    title: 'Automated YouTube Channel',
    description: '為中小企業、獨立品牌開發的生成式客製化內容與推播自動化的工具',
    link: 'https://www.youtube.com/@fivonLipa',
    thumbnail: '/screenshots/youtube-fivon-lipa.png',
    tags: ['Automation', 'YouTube', 'Content Creation', 'Video Production'],
  },
  // {
  //   id: 'youtube-finder-100m-18',
  //   category: 'automation',
  //   title: 'YouTube 高點閱影片搜尋器',
  //   description: '尋找點閱率超過 1 億的 YouTube 影片，提供搜尋歷史、配額管理與自動化搜尋功能',
  //   link: 'https://youtube-finder-100m.vercel.app/',
  //   thumbnail: '/screenshots/youtube-finder-100m.png',
  //   tags: ['Automation', 'YouTube API', 'Search Tool', 'Vercel', 'System'],
  // },
  {
    id: 'kaomoji-collection--7',
    category: 'games',
    title: 'Kaomoji Collection - 顏文字',
    description: 'A beautiful collection of kaomoji with quick copy functionality',
    link: 'https://v0-recreate-ui-from-screenshot-three-opal-82.vercel.app/',
    thumbnail: '/screenshots/v0-recreate-ui-from-screenshot-three-opal-82-verce.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel', 'UI/UX'],
  },
  {
    id: 'ionic-app-3',
    category: 'games',
    title: 'Ionic App 1',
    description: 'Select a level to play',
    link: 'https://longcat-thoughtful-2.vercel.app/',
    thumbnail: '/screenshots/longcat-thoughtful-2-vercel-app-.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel'],
  },
  {
    id: '--4',
    category: 'games',
    title: '網格填色遊戲',
    description: '跟著顏色節奏，一起拼出最亮眼的圖案！',
    link: 'https://grid-fill-colors.vercel.app/',
    thumbnail: '/screenshots/grid-fill-colors-vercel-app-.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel'],
  },
  {
    id: 'ionic-app-5',
    category: 'games',
    title: 'Ionic App 2',
    description: '* 點擊後請確保聲音已開啟',
    link: 'https://ionic-base-roan.vercel.app/home',
    thumbnail: '/screenshots/ionic-base-roan-vercel-app-home.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel', 'Ionic'],
  },
  {
    id: 'game-with-friends-11',
    category: 'games',
    title: 'Game with friends',
    description: '一個有趣的2048數字方塊遊戲',
    link: 'https://game-with-friends.vercel.app/',
    thumbnail: '/screenshots/game-with-friends-vercel-app-.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel'],
  },
  {
    id: 'the-harmony--13',
    category: 'generative',
    title: 'The Harmony 禾沐行銷',
    description: '公關公司，策劃活動，完美執行。服務合作對象包括 Toyota, Lexus, Hitachi, etc.',
    link: 'https://new-harmony.vercel.app/',
    thumbnail: '/screenshots/new-harmony-vercel-app-.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel'],
  },
  {
    id: 'conflux-stuido-15',
    category: 'generative',
    title: 'Wordpress 組件展示',
    description: '已開發的穩定版型組建展示，有多個套件可以交互應用，屬於經濟實惠的商品...',
    link: 'https://conflux-portfolio.vercel.app/',
    thumbnail: '/screenshots/conflux-portfolio-vercel-app-.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel', 'UI/UX', 'Portfolio'],
  },
  {
    id: 'quiet-beauty-blog-12',
    category: 'generative',
    title: 'Quiet Beauty 極簡部落格',
    description: '極簡的部落格網站，適合剛起步的內容製作者。小說家，日記，雜記，喜愛文青風格之受眾。',
    link: 'https://quiet-beauty.vercel.app/',
    thumbnail: '/screenshots/quiet-beauty-vercel-app-.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel', 'UI/UX'],
  },
  {
    id: 'marvelous-conflux-0',
    category: 'generative',
    title: '2025潮流版型選擇',
    description: 'Conflux Group 2025精選設計集合，包含Studio-Alphonse、OH Architecture、Interior Design等頂尖設計作品。特色包括獨特視覺風格、Lottie動畫、橫向捲動、自訂游標等創新設計元素，適合精品家居、建築設計、室內設計、廣告創意，時尚彩妝，健康保養品等各式各樣產業使用。',
    link: 'https://marvelous-conflux.vercel.app/',
    thumbnail: '/screenshots/marvelous-conflux-vercel-app-.png',
    tags: ['Web Design', 'Interactive', 'Creative', 'Vercel', 'UI/UX'],
  }
];

export const getWorksByCategory = (category: WorkCategory): Work[] => {
  return works.filter(work => work.category === category);
};
