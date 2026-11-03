import { useTranslation } from "react-i18next";
import "./Gallery.css";

// Placeholder images — swap these for real photos of her work.
import photo1 from "../assets/gallery/Butterflies.jpg";
import photo2 from "../assets/gallery/Coffe_Time.jpg";
import photo3 from "../assets/gallery/Mickey_Christmas.jpg";
import photo4 from "../assets/gallery/red_Nails.jpg";
import photo5 from "../assets/gallery/Tinkerbell.jpg";
import photo6 from "../assets/gallery/Tom_and_Jerry.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="gallery__title">
        {t("gallery.title")}
      </h2>
      <div className="gallery__grid">
        {photos.map((src, index) => (
          <img
            key={src}
            className="gallery__image"
            src={src}
            alt={t("gallery.photoAlt", { number: index + 1 })}
            loading="lazy"
            width={300}
            height={300}
          />
        ))}
      </div>
    </section>
  );
}
