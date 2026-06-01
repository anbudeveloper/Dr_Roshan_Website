import { FaTooth } from 'react-icons/fa'
import Icon from '../../../shared/Icons'

const infoItems = [
  {
    icon: 'map',
    label: 'Address',
    lines: ['No.34, First Floor, Thillai Nagar Main Road,', 'Trichy – 620 018, Tamil Nadu, India.'],
  },
  {
    icon: 'phone',
    label: 'Phone',
    lines: ['+91 94431 64101'],
  },
  {
    icon: 'mail',
    label: 'Email',
    lines: ['drroshansdentalcare@gmail.com'],
  },
  {
    icon: 'clock',
    label: 'Working Hours',
    lines: ['Mon – Sat : 9:00 AM – 8:00 PM', 'Sunday : 10:00 AM – 2:00 PM'],
  },
]

export default function GetInTouch() {
  return (
    <div className="ct-info">
      <h2 className="ct-section-title">Get in Touch</h2>

      <div className="ct-info__cards">
        {infoItems.map((item) => (
          <div className="ct-info-card" key={item.label}>
            <span className="ct-info-card__icon">
              <Icon name={item.icon} size={20} />
            </span>
            <div>
              <strong>{item.label}</strong>
              {item.lines.map((line) => <p key={line}>{line}</p>)}
            </div>
          </div>
        ))}
      </div>

      <div className="ct-wa-card">
        <span className="ct-wa-card__icon"><FaTooth size={26} /></span>
        <div className="ct-wa-card__body">
          <h3>Need Immediate Assistance?</h3>
          <p>Chat with us on WhatsApp</p>
          <a
            className="ct-wa-btn"
            href="https://wa.me/919443164101"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={17} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
