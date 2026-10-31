import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
import pt from './locales/pt.json'
import en from './locales/en.json'

export const SUPPORTED_LANGUAGES = ['es', 'pt', 'en']
export const DEFAULT_LANGUAGE = 'es'
const STORAGE_KEY = 'lissie-lang'

// Maps our internal language codes to the html lang attribute value.
const HTML_LANG = {
  es: 'es',
  pt: 'pt-BR',
  en: 'en',
}

export function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGUAGES.includes(stored)) return stored
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through to default
  }
  return null
}

export function storeLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // ignore — nothing we can do if storage isn't available
  }
}

export function applyHtmlLang(lang) {
  document.documentElement.lang = HTML_LANG[lang] ?? lang
}

const initialLanguage = getStoredLanguage() ?? DEFAULT_LANGUAGE

i18next.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: { escapeValue: false },
})

applyHtmlLang(initialLanguage)

i18next.on('languageChanged', (lang) => {
  applyHtmlLang(lang)
})

export default i18next
