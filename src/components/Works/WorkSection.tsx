import { motion } from 'framer-motion';
import { getWorksByCategory } from '../../data/works';
import type { WorkCategory } from '../../data/works';
import WorkCard from './WorkCard';
import { useIsMobile } from '../../hooks/useIsMobile';

interface WorkSectionProps {
  category: WorkCategory;
  title: string;
  description: string;
  icon?: string;
}

const WorkSection = ({ category, title, description, icon }: WorkSectionProps) => {
  const works = getWorksByCategory(category);
  const isMobile = useIsMobile();

  // 移动端使用更微妙的动画
  const initialY = isMobile ? 15 : 25;
  const animationDuration = isMobile ? 0.5 : 0.6;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: initialY }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? '50px' : '100px', amount: 0.3 }}
          transition={{ 
            duration: animationDuration,
            ease: [0.25, 0.1, 0.25, 1] // 平滑的缓动函数
          }}
          className="text-center mb-12"
        >
          {icon && <div className="text-6xl mb-4">{icon}</div>}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

