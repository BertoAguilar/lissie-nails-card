import { Outlet } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggle'
import './RootLayout.css'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="root-layout__header">
        <LanguageToggle />
      </header>
      <Outlet />
    </div>
  )
}
