import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage, useTranslation } from '../../contexts/LanguageContext';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#313647]/80 backdrop-blur-md border-b border-[#A3B087]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            NDC Studio
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('works')}
              className="text-white hover:text-[#A3B087] transition-colors duration-300"
            >
              {t.navigation.works}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#A3B087] transition-colors duration-300"
            >
              {t.navigation.about}
            </button>
            <motion.a
              href="#contact"
              className="px-6 py-2 border border-[#A3B087] text-[#A3B087] rounded-full hover:bg-[#A3B087] hover:text-[#313647] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.navigation.contact}
            </motion.a>
            <motion.button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-semibold text-white hover:text-[#A3B087] transition-colors duration-300 border border-[#A3B087]/30 rounded-full hover:border-[#A3B087]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'zh' ? 'EN' : 'CH'}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

