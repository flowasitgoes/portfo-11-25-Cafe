import { motion } from 'framer-motion';
import type { Work } from '../../data/works';
import { ExternalLink } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useTranslation } from '../../contexts/LanguageContext';

interface WorkCardProps {
  work: Work;
  index: number;
}
// I like good things YesGoodGGGG

const WorkCard = ({ work, index }: WorkCardProps) => {
  const isMobile = useIsMobile();
  const t = useTranslation();
  
  // 移动端：完全禁用动画，使用普通 div
  if (isMobile) {
    return (
      <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-[#A3B087] transition-all duration-300">
      <div className="aspect-video bg-gradient-to-br from-[#A3B087]/20 to-[#FFF8D4]/20 flex items-center justify-center relative overflow-hidden">
        {work.thumbnail ? (
          
          <img
            src={work.thumbnail}
            alt={work.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-4xl opacity-20">🎨</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#A3B087] transition-colors">
          {work.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {work.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-[#3a5e9f] text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#A3B087] hover:text-[#FFF8D4] transition-colors font-semibold"
          whileHover={{ x: 5 }}
        >
          {t.works.viewProject}
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
      
      <div className="absolute inset-0 bg-[#A3B087]/0 group-hover:bg-[#A3B087]/5 transition-colors duration-300 pointer-events-none" />
      </div>
    );
  }

  // 桌面端：保留动画
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '100px', amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as const
      }}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-[#A3B087] transition-all duration-300"
    >
      <div className="aspect-video bg-gradient-to-br from-[#A3B087]/20 to-[#FFF8D4]/20 flex items-center justify-center relative overflow-hidden">
        {work.thumbnail ? (
          
          <img
            src={work.thumbnail}
            alt={work.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-4xl opacity-20">🎨</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#A3B087] transition-colors">
          {work.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {work.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-[#3a5e9f] text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#A3B087] hover:text-[#FFF8D4] transition-colors font-semibold"
          whileHover={{ x: 5 }}
        >
          {t.works.viewProject}
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
      
      <div className="absolute inset-0 bg-[#A3B087]/0 group-hover:bg-[#A3B087]/5 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default WorkCard;

