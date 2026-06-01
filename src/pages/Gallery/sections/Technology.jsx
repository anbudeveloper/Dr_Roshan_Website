import r1 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.37 AM.jpeg'
import r2 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.37 AM (1).jpeg'
import r3 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.37 AM (2).jpeg'
import r4 from '../../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.38 AM.jpeg'

const items = [
  { img: r1, label: 'Digital X-Ray' },
  { img: r2, label: 'Intraoral Scanner' },
  { img: r3, label: 'Dental Microscope' },
  { img: r4, label: 'Implant Planning' },
]

export default function Technology() {
  return (
    <div className="gl-section">
      <h2 className="gl-section-title">Advanced Technology</h2>
      <div className="gl-grid">
        {items.map((item) => (
          <div className="gl-item gl-item--labeled" key={item.label}>
            <img src={item.img} alt={item.label} />
            <span className="gl-tech-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
