import { Link } from 'react-router-dom'
import './ActionButton.css'

export default function ActionButton({ icon: Icon, label, href, to, onClick, variant = 'default' }) {
  const className = `action-button action-button--${variant}`

  if (to) {
    return (
      <Link className={className} to={to}>
        <Icon className="action-button__icon" aria-hidden="true" strokeWidth={1.5} />
        <span>{label}</span>
      </Link>
    )
  }

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        className={className}
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        <Icon className="action-button__icon" aria-hidden="true" strokeWidth={1.5} />
        <span>{label}</span>
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      <Icon className="action-button__icon" aria-hidden="true" strokeWidth={1.5} />
      <span>{label}</span>
    </button>
  )
}
