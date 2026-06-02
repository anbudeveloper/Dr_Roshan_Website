import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../shared/Icons'
import SelectDropdown from '../../../shared/SelectDropdown'
import DatePicker from '../../../shared/DatePicker'
import heroBg from '../../../assets/Images/Home/ba3.png'
import { submitForm } from '../../../utils/submitForm'

const TREATMENT_OPTIONS = [
  'Dental Implants',
  'Root Canal Treatment',
  'Invisible Aligners',
  'Smile Designing',
  'Kids Dentistry',
  'Zirconia & Ceramic Teeth',
]

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', treatment: '', date: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitForm(form)
      setStatus('success')
      setForm({ name: '', phone: '', treatment: '', date: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

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

        <form className="ab-hero__form" onSubmit={handleSubmit}>
          <div className="ab-hero__form-head">
            <span><Icon name="calendar" size={22} /></span>
            <div>
              <h3>Book Appointment</h3>
              <p>Quick &amp; easy — we'll call you back</p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Icon name="check" size={24} />
              </div>
              <p className="font-bold text-white">Request Received!</p>
              <p className="text-sm text-white/70">We'll call you back shortly to confirm.</p>
            </div>
          ) : (
            <div className="ab-hero__form-fields">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <SelectDropdown
                options={TREATMENT_OPTIONS}
                value={form.treatment}
                onChange={(value) => setForm({ ...form, treatment: value })}
                variant="dark"
              />
              <DatePicker value={form.date} onChange={(value) => setForm({ ...form, date: value })} variant="dark" />
              {status === 'error' && (
                <p className="text-xs text-red-300">Something went wrong. Please try again.</p>
              )}
              <button type="submit" className="primary-btn ab-hero__form-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : <> Book Now <Icon name="arrow" size={16} /> </>}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
