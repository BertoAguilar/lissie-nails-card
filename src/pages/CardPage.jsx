import { Calendar, MessageCircle, Phone, AtSign, MapPin, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { business } from '../config/business'
import ActionButton from '../components/ActionButton'
import SaveContactButton from '../components/SaveContactButton'
import Hours from '../components/Hours'
import Gallery from '../components/Gallery'
import logo from '../assets/brand/logo.svg'
import './CardPage.css'

export default function CardPage() {
  const { t } = useTranslation()

  return (
    <main className="card-page">
      <section className="card-page__header">
        <img className="card-page__logo" src={logo} alt={business.name} width={96} height={96} />
        <h1 className="card-page__name">{business.name}</h1>
        <p className="card-page__tagline">{t('tagline')}</p>
      </section>

      <ActionButton
        icon={Calendar}
        label={t('actions.book')}
        href={business.squareBookingUrl}
        variant="primary"
      />

      <nav className="card-page__actions" aria-label={t('actions.sectionLabel')}>
        <ActionButton icon={MessageCircle} label={t('actions.whatsapp')} href={business.whatsappUrl} />
        <ActionButton icon={Phone} label={t('actions.call')} href={business.callUrl} />
        <ActionButton icon={AtSign} label={t('actions.instagram')} href={business.instagramUrl} />
        <ActionButton icon={MapPin} label={t('actions.directions')} href={business.mapsUrl} />
        <ActionButton icon={Star} label={t('actions.reviews')} href={business.reviewsUrl} />
        <SaveContactButton />
      </nav>

      <Hours />
      <Gallery />
    </main>
  )
}
