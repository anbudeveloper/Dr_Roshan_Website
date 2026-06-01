import r1 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.38 AM (1).jpeg'
import r2 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.38 AM (2).jpeg'
import r3 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.39 AM.jpeg'
import r4 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.39 AM (1).jpeg'

const images = [r1, r2, r3, r4]

export default function HappyPatients() {
  return (
    <div className="gl-section">
      <h2 className="gl-section-title">Happy Patients</h2>
      <div className="gl-grid">
        {images.map((img, i) => (
          <div className="gl-item gl-item--patient" key={i}>
            <img src={img} alt={`Happy patient ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
