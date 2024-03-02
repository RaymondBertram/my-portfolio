import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import { DEFAULT_LOCALE, Locale } from '../config';
import de_DE from './de-DE.json';
import en_US from './en-US.json';

export const translations = {
  [Locale.DE]: de_DE,
  [Locale.EN_US]: en_US,
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LOCALE,
    keySeparator: false,
    resources: translations,
  });

export default i18n;