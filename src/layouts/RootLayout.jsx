import { Outlet, Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from '../components/LanguageToggle'
import './RootLayout.css'

export default function RootLayout() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="root-layout">
      <header className={`root-layout__header${isHome ? ' root-layout__header--home' : ''}`}>
        {!isHome && (
          <Link className="root-layout__back" to="/" aria-label={t('nav.back')}>
            <ArrowLeft aria-hidden="true" strokeWidth={1.5} />
          </Link>
        )}
        <LanguageToggle />
      </header>
      <Outlet />
    </div>
  )
}
