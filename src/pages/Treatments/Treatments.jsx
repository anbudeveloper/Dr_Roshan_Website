import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../shared/SEO'
import Icon from '../../shared/Icons'
import SelectDropdown from '../../shared/SelectDropdown'
import DatePicker from '../../shared/DatePicker'
import { treatments } from './data/treatments'
import { submitForm } from '../../utils/submitForm'

import implantImg   from '../../assets/Images/Home/Implants.png'
import rootImg      from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 09_47_16 AM.png'
import alignerImg   from '../../assets/Images/Home/Aligners.png'
import smileImg     from '../../assets/Images/Home/Makeover.png'
import kidsImg      from '../../assets/Images/Home/banner-kids.png'
import ceramicImg   from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_15_36 AM.png'
import heroBg       from '../../assets/Images/Home/ba3.png'

const TREATMENT_OPTIONS = [
  'Dental Implants',
  'Root Canal Treatment',
  'Invisible Aligners',
  'Smile Designing',
  'Kids Dentistry',
  'Zirconia & Ceramic Teeth',
]

const treatmentImages = {
  'dental-implants':        implantImg,
  'root-canal':             rootImg,
  'invisible-aligners':     alignerImg,
  'smile-designing':        smileImg,
  'kids-dentistry':         kidsImg,
  'zirconia-ceramic-teeth': ceramicImg,
}

export default function Treatments() {
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
    <>
      <SEO
        title="Dental Treatments in Trichy | Dr. Roshan's Dental Care"
        description="Explore our full range of dental treatments in Trichy — Dental Implants, Root Canal, Invisible Aligners, Smile Designing, Kids Dentistry, and Zirconia Crowns."
        keywords="dental treatments Trichy, dental implants Trichy, root canal Trichy, smile designing Trichy, invisible aligners Trichy, kids dentist Trichy"
        path="/treatments"
      />

      {/* Hero */}
      <section className="ab-hero">
        <img src={heroBg} alt="Our Treatments" className="ab-hero__bg" />
        <div className="ab-hero__overlay" />
        <div className="container ab-hero__content">
          <div className="ab-hero__left">
            <p className="eyebrow mb-3" style={{ color: '#ff6b7a' }}>Dr. Roshan's Dental Care · Trichy</p>
            <h1 className="mb-4">Our Treatments</h1>
            <p className="text-white/80 text-lg max-w-lg">
              World-class dental care under one roof — from routine check-ups to complete smile transformations.
            </p>
            <nav className="ab-breadcrumb mt-6" aria-label="breadcrumb">
              <Link to="/">Home</Link>
              <Icon name="chevron" size={13} />
              <span>Treatments</span>
            </nav>
          </div>

          <form className="ab-hero__form" onSubmit={handleSubmit}>
            <div className="ab-hero__form-head">
              <span><Icon name="calendar" size={22} /></span>
              <div>
                <h3>Book Appointment</h3>
                <p>Quick & easy — we'll call you back</p>
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
                  onChange={(val) => setForm({ ...form, treatment: val })}
                  variant="dark"
                />
                <DatePicker
                  value={form.date}
                  onChange={(val) => setForm({ ...form, date: val })}
                  variant="dark"
                />
                {status === 'error' && (
                  <p className="text-xs text-red-300">Something went wrong. Please try again.</p>
                )}
                <button type="submit" className="primary-btn ab-hero__form-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <> Book Now <Icon name="arrow" size={16} /> </>}
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section bg-white">
        <div className="container">
          <p className="eyebrow text-center mb-3">What We Offer</p>
          <h2 className="section-title text-center mb-4">Comprehensive Dental Treatments</h2>
          <p className="text-center text-[#5a6a8a] mb-12 max-w-xl mx-auto">
            Every treatment is delivered by experienced specialists using advanced technology — for outcomes that last.
          </p>

          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {treatments.map((t, i) => (
              <Link
                key={t.slug}
                to={`/treatments/${t.slug}`}
                className="group rounded-2xl border border-[#eef2fb] bg-[#f8faff] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ffd6da] hover:bg-white hover:shadow-[0_20px_40px_rgba(255,38,56,0.12)] animate-rise"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-2xl bg-white shadow-[0_4px_16px_rgba(8,29,82,0.08)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_24px_rgba(255,38,56,0.15)]">
                  <img
                    src={treatmentImages[t.slug]}
                    alt={t.name}
                    className="h-[80px] w-[80px] object-contain mix-blend-multiply"
                  />
                </div>

                <h3 className="text-[17px] font-black text-[#07133f] mb-2 group-hover:text-[#ff2638] transition-colors">
                  {t.name}
                </h3>
                <p className="text-[13px] text-[#5a6a8a] leading-relaxed mb-4">{t.tagline}</p>

                <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#ff2638]">
                  Learn More <Icon name="arrow" size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-gradient-to-br from-[#07133f] to-[#0d1f5c]">
        <div className="container text-center">
          <p className="eyebrow mb-3" style={{ color: '#ff6b7a' }}>Get Started Today</p>
          <h2 className="text-white text-[32px] font-black mb-4">Not Sure Which Treatment You Need?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Book a free consultation with our specialist. We'll examine your teeth, understand your goals, and recommend the ideal treatment plan.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="tel:+919443164101" className="nav-grad-btn nav-call-btn text-base px-6 py-3">
              <Icon name="phone" size={16} /> +91 94431 64101
            </a>
            <a
              href="https://wa.me/919443164101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-6 py-3 text-white font-bold text-base hover:bg-[#1fba5a] transition"
            >
              <Icon name="whatsapp" size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
