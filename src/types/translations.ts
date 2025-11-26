import zhTranslations from '../data/translations/zh.json';
import enTranslations from '../data/translations/en.json';

export type Language = 'zh' | 'en';

export type Translations = typeof zhTranslations;

export const translations: Record<Language, Translations> = {
  zh: zhTranslations,
  en: enTranslations,
};

