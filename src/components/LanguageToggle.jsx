import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, storeLanguage } from '../i18n'
import './LanguageToggle.css'

const LABELS = { es: 'ES', pt: 'PT', en: 'EN' }

export default function LanguageToggle() {
  const { i18n, t } = useTranslation()

  function handleSelect(lang) {
    if (lang === i18n.language) return
    i18n.changeLanguage(lang)
    storeLanguage(lang)
  }

  return (
    <div className="language-toggle" role="group" aria-label={t('language.label')}>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          className={`language-toggle__option${i18n.language === lang ? ' is-active' : ''}`}
          aria-pressed={i18n.language === lang}
          onClick={() => handleSelect(lang)}
        >
          {LABELS[lang]}
        </button>
      ))}
    </div>
  )
}
