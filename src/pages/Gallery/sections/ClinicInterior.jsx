import r1 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.34 AM.jpeg'
import r2 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.35 AM.jpeg'
import r3 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.35 AM (1).jpeg'
import r4 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.35 AM (2).jpeg'

const images = [r1, r2, r3, r4]

export default function ClinicInterior() {
  return (
    <div className="gl-section">
      <h2 className="gl-section-title">Clinic Interior</h2>
      <div className="gl-grid">
        {images.map((img, i) => (
          <div className="gl-item" key={i}>
            <img src={img} alt={`Clinic interior ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
