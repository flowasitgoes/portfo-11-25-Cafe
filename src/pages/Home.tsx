import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import WorkSection from '../components/Works/WorkSection';
import Footer from '../components/Footer/Footer';
import { useIsMobile } from '../hooks/useIsMobile';
import { useTranslation } from '../contexts/LanguageContext';

const Home = () => {
  const isMobile = useIsMobile();
  const t = useTranslation();

  return (
    <main className="relative">
      <Hero />
      
      <section id="works" className="bg-[#313647]">
        <div style={{ background: '#484c56' }}>
          <WorkSection
            category="ai-engine"
            title={t.works.categories.portfolio.title}
            description={t.works.categories.portfolio.description}
          />
        </div>
        
        <div className="border-t border-gray-800" />
        
        
        
        <WorkSection
          category="generative"
          title={t.works.categories.brand.title}
          description={t.works.categories.brand.description}
          // icon="🎨"
        />
        
        <div className="border-t border-gray-800" />
        
        <WorkSection
          category="games"
          title={t.works.categories.games.title}
          description={t.works.categories.games.description}
          icon="🎮"
        />
      </section>

      <WorkSection
          category="automation"
          title={t.works.categories.automation.title}
          description={t.works.categories.automation.description}
          icon="⚙️"
        />
        
        <div className="border-t border-gray-800" />
      
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-[#313647] to-[#435663]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 25 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={isMobile
              ? { once: true, margin: '100px', amount: 0.2 }
              : { once: true, margin: '100px', amount: 0.3 }
            }
            transition={isMobile
              ? { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }
              : { 
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1] as const
                }
            }
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            {t.about.title}
          </motion.h2>
          <motion.p
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 25 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={isMobile
              ? { once: true, margin: '100px', amount: 0.2 }
              : { once: true, margin: '100px', amount: 0.3 }
            }
            transition={isMobile
              ? { duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }
              : { 
                  duration: 0.6, 
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1] as const
                }
            }
            className="text-xl text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.about.content.replace(/\n/g, '<br />') }}
          />
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Home;

