import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent = () => {
  const { displayLanguage } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayLanguage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="App"
      >
        <Navigation />
        <Home />
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
