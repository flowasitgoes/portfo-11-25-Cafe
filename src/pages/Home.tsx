import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import WorkSection from '../components/Works/WorkSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      
      <section id="works" className="bg-[#313647]">
        <div style={{ background: '#484c56' }}>
          <WorkSection
            category="ai-engine"
            title="Portfolio"
            description="結合前端技術、Generative AI、流程自動化、提示詞(Prompt)工程的實作"
          />
        </div>
        
        <div className="border-t border-gray-800" />
        
        
        
        <WorkSection
          category="generative"
          title="品牌網站作品"
          description="視覺導向UI、使用當代網頁技術製作的 Web & Mobile 互動體驗"
          // icon="🎨"
        />
        
        <div className="border-t border-gray-800" />
        
        <WorkSection
          category="games"
          title="動動腦遊戲製作"
          description="使用網頁前端等等技術製作的互動遊戲，作為客戶網站的延伸為品牌方製作遊戲，建製角色IP，進而行銷推廣產品"
          icon="🎮"
        />
      </section>

      <WorkSection
          category="automation"
          title="近期開發中專案"
          description="系統建置與自動化流程，結合 Node.js, Python, n8n, LLM 等創作者工具"
          icon="⚙️"
        />
        
        <div className="border-t border-gray-800" />
      
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-[#313647] to-[#435663]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            關於我
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            2 年前端實作經驗，2 年 UI 設計經驗，使用 React 生態系、TypeScript、Tailwind... 等 Web 技術
            <br /><br />
            服務企業時主要負責前端界面開發、串接 API、基礎微後端部署、跨裝置版面翻新與實作。
            <br /><br />
            同時透過大量 Side Projects 累積不同業態的專案開發經驗、AI 圖片批次自動化生成、Node.js Script 工具、企業 AppScript 整合、混音工具、n8n workflow、使用 Angular.js 製作手機互動小遊戲。
            <br /><br />
            善於快速迭代( Iteration )，落地建構（ Prototype ）的能力。
          </motion.p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Home;

