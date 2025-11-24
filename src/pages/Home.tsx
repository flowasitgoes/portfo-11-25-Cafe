import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import WorkSection from '../components/Works/WorkSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      
      <section id="works" className="bg-black">
        <WorkSection
          category="ai-engine"
          title="AI Image Engine"
          description="AI-generated visual compositions showcasing prompt engineering and aesthetic mastery"
          icon="🤖"
        />
        
        <div className="border-t border-gray-800" />
        
        <WorkSection
          category="automation"
          title="Visual Automation Pipeline"
          description="Creator tools and automated workflows for content production"
          icon="⚙️"
        />
        
        <div className="border-t border-gray-800" />
        
        <WorkSection
          category="generative"
          title="Generative Web Art"
          description="Interactive visual experiences using p5.js and Three.js"
          icon="🎨"
        />
      </section>
      
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            I'm a Creative Tech Engineer working at the intersection of engineering, design, 
            visual arts, and AI. I specialize in building visual engines—from AI image pipelines 
            to generative interfaces and interactive tools. My work combines technical expertise 
            with aesthetic sensibility, creating tools and experiences that bridge code and creativity.
          </motion.p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Home;

