import { motion } from 'framer-motion';
import type { Work } from '../../data/works';
import { ExternalLink } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

interface WorkCardProps {
  work: Work;
  index: number;
}
// I like good things YesGoodGGGG

const WorkCard = ({ work, index }: WorkCardProps) => {
  const isMobile = useIsMobile();
  
  // 移动端使用更微妙的动画：更小的位移，更平滑的淡入
  const initialY = isMobile ? 15 : 30;
  const viewportMargin = isMobile ? '50px' : '100px';
  const animationDuration = isMobile ? 0.5 : 0.6;
  const animationDelay = isMobile ? index * 0.05 : index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin, amount: 0.2 }}
      transition={{ 
        duration: animationDuration, 
        delay: animationDelay,
        ease: [0.25, 0.1, 0.25, 1] // 使用更平滑的缓动函数
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
          查看專案
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
      
      <div className="absolute inset-0 bg-[#A3B087]/0 group-hover:bg-[#A3B087]/5 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default WorkCard;

