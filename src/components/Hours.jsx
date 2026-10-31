import { Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { business } from '../config/business'
import './Hours.css'

export default function Hours() {
  const { t } = useTranslation()

  return (
    <section className="hours" aria-labelledby="hours-title">
      <h2 id="hours-title" className="hours__title">
        <Clock className="hours__icon" aria-hidden="true" strokeWidth={1.5} />
        {t('hours.title')}
      </h2>
      <dl className="hours__list">
        {business.hours.map(({ dayKey, value }) => (
          <div className="hours__row" key={dayKey}>
            <dt>{t(`hours.days.${dayKey}`)}</dt>
            <dd>{value === 'closed' ? t('hours.closed') : value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
