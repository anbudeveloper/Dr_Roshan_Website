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
  const [date, setDate] = useState('')

  return (
    <section className="ab-hero">
      <img src={heroBg} alt="About Dr.Roshan's Dental Care" className="ab-hero__bg" />
      <div className="ab-hero__overlay" />

      <div className="container ab-hero__content">

        {/* Left — title + breadcrumb */}
        <div className="ab-hero__left">
          <h1>About Us</h1>
          <nav className="ab-breadcrumb" aria-label="breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevron" size={13} />
            <span>About Us</span>
          </nav>
        </div>

        {/* Right — transparent booking form */}
        <form className="ab-hero__form" onSubmit={(e) => e.preventDefault()}>
          <div className="ab-hero__form-head">
            <span><Icon name="calendar" size={22} /></span>
            <div>
              <h3>Book Appointment</h3>
              <p>Quick & easy — we'll call you back</p>
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
