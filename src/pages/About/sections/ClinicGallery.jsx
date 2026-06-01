import g1 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.39 AM (2).jpeg'
import g2 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.40 AM.jpeg'
import g3 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.41 AM.jpeg'
import g4 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.41 AM (1).jpeg'

const images = [g1, g2, g3, g4]

export default function ClinicGallery() {
  return (
    <section className="ab-gallery">
      <div className="container">
        <div className="ab-section-head">
          <p className="eyebrow">Our Clinic</p>
          <h2 className="section-title lined">Modern Clinic With Advanced Facilities</h2>
        </div>
        <div className="ab-gallery__grid">
          {images.map((img, i) => (
            <div className="ab-gallery__item" key={i}>
              <img src={img} alt={`Clinic facility ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
