import { Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { business } from '../config/business'
import { services } from '../config/services'
import ActionButton from '../components/ActionButton'
import './ServicesPage.css'

function groupByCategory(list) {
  const groups = new Map()
  for (const item of list) {
    if (!groups.has(item.category)) groups.set(item.category, [])
    groups.get(item.category).push(item)
  }
  return Array.from(groups.entries())
}

export default function ServicesPage() {
  const { t } = useTranslation()
  const groups = groupByCategory(services)

  return (
    <main className="services-page">
      <h1 className="services-page__title">{t('services.title')}</h1>

      <div className="services-page__list">
        {groups.map(([category, items]) => {
          if (items.length === 1 && !items[0].detail) {
            return (
              <div className="services-row" key={category}>
                <span>{category}</span>
                <span className="services-row__price">${items[0].price}</span>
              </div>
            )
          }
          return (
            <section className="services-group" key={category}>
              <h2 className="services-group__category">{category}</h2>
              {items.map((item) => (
                <div className="services-row" key={item.detail}>
                  <span>{item.detail}</span>
                  <span className="services-row__price">${item.price}</span>
                </div>
              ))}
            </section>
          )
        })}
      </div>

      <ActionButton
        icon={Calendar}
        label={t('actions.book')}
        href={business.squareBookingUrl}
        variant="primary"
      />
    </main>
  )
}
