// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import enTranslations from "./assets/i18n/en.json";
// import frTranslations from "./assets/i18n/fr.json";

// const resources = {
//   en: {
//     translation: enTranslations,
//   },
//   fr: {
//     translation: frTranslations,
//   },
// };
// console.log(resources)

// i18n.use(initReactI18next).init({
//   resources,
//   lng: "en", // Default language
//   fallbackLng: "en", // Fallback language if translation for the current language is not available
//   keySeparator: true, // Allow using dots in keys for nested translations, e.g., "header.title"
//   interpolation: {
//     escapeValue: false, // React already escapes the content, so no need to escape twice
//   },
// });

// export default i18n;
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslations from "./assets/i18n/en.json";
import frTranslations from "./assets/i18n/fr.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
};
console.log(resources);

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: localStorage.getItem("lng") || "en",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
