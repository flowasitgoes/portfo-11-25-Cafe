export type WorkCategory = 'ai-engine' | 'automation' | 'generative';

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
  // AI Image Engine 作品
  {
    id: 'ai-engine-1',
    category: 'ai-engine',
    title: '100-Piece Flat-Lay Series',
    description: 'AI-generated flat-lay compositions showcasing prompt engineering and visual aesthetics',
    link: '#', // 替换为实际链接
    tags: ['AI', 'Stable Diffusion', 'Prompt Engineering', 'Visual Design'],
  },
  
  // Visual Automation Pipeline 作品
  {
    id: 'automation-1',
    category: 'automation',
    title: 'Video Automation Pipeline',
    description: 'Automated video processing from Google Drive to YouTube with custom workflows',
    link: '#', // 替换为实际链接
    tags: ['Automation', 'Python', 'Google Drive API', 'YouTube API'],
  },
  {
    id: 'automation-2',
    category: 'automation',
    title: 'Content Creator Tools',
    description: 'Custom tools for streamlining creative workflows and content production',
    link: '#', // 替换为实际链接
    tags: ['Node.js', 'Automation', 'Creative Tools'],
  },
  
  // Generative Web Art 作品
  {
    id: 'generative-1',
    category: 'generative',
    title: 'Interactive Particle System',
    description: 'Real-time generative art using p5.js with interactive controls',
    link: '#', // 替换为实际链接
    tags: ['p5.js', 'Generative Art', 'Interactive'],
  },
  {
    id: 'generative-2',
    category: 'generative',
    title: '3D Visual Experience',
    description: 'Immersive Three.js scene with dynamic geometry and lighting',
    link: '#', // 替换为实际链接
    tags: ['Three.js', 'WebGL', '3D Graphics'],
  },
];

export const getWorksByCategory = (category: WorkCategory): Work[] => {
  return works.filter(work => work.category === category);
};

