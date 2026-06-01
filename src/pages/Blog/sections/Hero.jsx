import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../shared/Icons'
import SelectDropdown from '../../../shared/SelectDropdown'
import DatePicker from '../../../shared/DatePicker'
import heroBg from '../../../assets/Images/Home/ba3.png'

const TREATMENT_OPTIONS = [
  'Dental Implants',
  'Root Canal Treatment',
  'Invisible Aligners',
  'Smile Designing',
  'Kids Dentistry',
  'Zirconia & Ceramic Teeth',
]

export default function Hero() {
  const [treatment, setTreatment] = useState('')
  const [date, setDate]           = useState('')

  return (
    <section className="ab-hero">
      <img src={heroBg} alt="Dental Health Blog" className="ab-hero__bg" />
      <div className="ab-hero__overlay" />

      <div className="container ab-hero__content">
        <div className="ab-hero__left">
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '10px' }}>Blog</p>
          <h1>Dental Health <br /><span style={{ color: 'var(--red)' }}>Tips &amp; Updates</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '15px', fontWeight: 600, margin: '10px 0 0', lineHeight: 1.7 }}>
            Expert advice, dental care tips and the latest updates<br />to help you maintain a healthy smile.
          </p>
          <nav className="ab-breadcrumb" aria-label="breadcrumb" style={{ marginTop: '18px' }}>
            <Link to="/">Home</Link>
            <Icon name="chevron" size={13} />
            <span>Blog</span>
          </nav>
        </div>

        <form className="ab-hero__form" onSubmit={(e) => e.preventDefault()}>
          <div className="ab-hero__form-head">
            <span><Icon name="calendar" size={22} /></span>
            <div>
              <h3>Book Appointment</h3>
              <p>Quick &amp; easy — we'll call you back</p>
            </div>
          </div>

          <div className="ab-hero__form-fields">
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <SelectDropdown
              options={TREATMENT_OPTIONS}
              value={treatment}
              onChange={setTreatment}
              variant="dark"
            />
            <DatePicker value={date} onChange={setDate} variant="dark" />
            <button type="submit" className="primary-btn ab-hero__form-btn">
              Book Now <Icon name="arrow" size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
