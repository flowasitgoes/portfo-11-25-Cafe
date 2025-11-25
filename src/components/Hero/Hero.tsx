import { motion } from 'framer-motion';
import Scene3D from '../Scene3D/Scene3D';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-gradient leading-tight"
        >
          品牌數位行銷整合
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          透過軟體前端技術的應用，為中小企業，執行品牌的數位內容傳播與網路系統整合
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => {
              const worksSection = document.getElementById('works');
              worksSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#A3B087] text-[#313647] font-semibold rounded-full hover:bg-[#FFF8D4] transition-all duration-300 glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            查看作品
          </motion.button>
          
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border-2 border-[#A3B087] text-[#A3B087] font-semibold rounded-full hover:bg-[#A3B087] hover:text-[#313647] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            了解更多
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#A3B087] rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#A3B087] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

