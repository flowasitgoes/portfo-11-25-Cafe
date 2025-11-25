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
            description="前端技術應用，結合 Generative AI、流程自動化，展現 prompt 工程與視覺美學的結合"
            icon="🤖"
          />
        </div>
        
        <div className="border-t border-gray-800" />
        
        <WorkSection
          category="automation"
          title="系統 & 自動化工具"
          description="創作者工具與自動化工作流程，包含 Node.js 工具、n8n 串接與後端功能"
          icon="⚙️"
        />
        
        <div className="border-t border-gray-800" />
        
        <WorkSection
          category="generative"
          title="品牌網站作品"
          description="視覺導向開發、前端互動 UI、使用 React、Angular、Ionic 製作的網頁與手機互動體驗"
          icon="🎨"
        />
        
        <div className="border-t border-gray-800" />
        
        <WorkSection
          category="games"
          title="遊戲製作"
          description="使用 Ionic、Angular 等技術製作的互動小遊戲，展現前端開發與遊戲設計的結合"
          icon="🎮"
        />
      </section>
      
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
            具 1.5 年前端實作經驗與 2 年 UI 設計經驗，使用 React 生態系、JavaScript / TypeScript、Tailwind、前端互動 UI、以及 AI API 整合。
            <br /><br />
            在公司期間主要負責前端界面開發、串接 API、簡單後端功能、跨裝置版面調整與部署。
            <br /><br />
            同時也透過大量 Side Projects 累積了視覺導向開發、AI 圖片流程、自製 Node.js 自動化工具、混音工具、n8n 製圖串接自動流、使用 Angular.js、Ionic 製作手機互動小遊戲。
            <br /><br />
            我不是把所有框架都「精通」的人，但使用過的工具與廣度很廣，英文閱讀與聽力極佳，具備快速學習與落地建構（prototype）的能力。
          </motion.p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Home;

