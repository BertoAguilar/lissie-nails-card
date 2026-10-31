import { useTranslation } from 'react-i18next'
import './Gallery.css'

// Placeholder images — swap these for real photos of her work.
import photo1 from '../assets/gallery/placeholder-1.png'
import photo2 from '../assets/gallery/placeholder-2.png'
import photo3 from '../assets/gallery/placeholder-3.png'
import photo4 from '../assets/gallery/placeholder-4.png'

const photos = [photo1, photo2, photo3, photo4]

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="gallery__title">
        {t('gallery.title')}
      </h2>
      <div className="gallery__grid">
        {photos.map((src, index) => (
          <img
            key={src}
            className="gallery__image"
            src={src}
            alt={t('gallery.photoAlt', { number: index + 1 })}
            loading="lazy"
            width={300}
            height={300}
          />
        ))}
      </div>
    </section>
  )
}
