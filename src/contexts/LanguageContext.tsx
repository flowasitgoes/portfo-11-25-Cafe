import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Language, Translations } from '../types/translations';
import { translations } from '../types/translations';

interface LanguageContextType {
  language: Language;
  displayLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslation = () => {
  const { t } = useLanguage();
  return t;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 从 localStorage 读取保存的语言偏好，默认为中文
    const saved = localStorage.getItem('language') as Language | null;
    return saved && (saved === 'zh' || saved === 'en') ? saved : 'zh';
  });
  
  // displayLanguage 用于实际显示的内容，会有延迟以支持淡入淡出动画
  const [displayLanguage, setDisplayLanguage] = useState<Language>(language);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // 保存语言偏好到 localStorage
    localStorage.setItem('language', language);
  }, [language]);

  // 当语言改变时，先触发淡出，然后延迟更新显示语言
  useEffect(() => {
    if (language !== displayLanguage) {
      setIsTransitioning(true);
      // 等待淡出动画完成（300ms）后再切换显示的语言
      const timer = setTimeout(() => {
        setDisplayLanguage(language);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [language, displayLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    displayLanguage,
    setLanguage,
    t: translations[displayLanguage],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

