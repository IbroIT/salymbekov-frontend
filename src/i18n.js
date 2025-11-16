import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationKG from './locales/kg/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  kg: {
    translation: translationKG
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    debug: false,
    detection: {
      order: ['localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      caches: ['localStorage', 'sessionStorage'],
      excludeCacheFor: ['cimode'] // не кешировать язык при тестировании
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;