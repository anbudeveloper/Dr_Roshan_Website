import { useState } from 'react'
import Icon from '../../../shared/Icons'
import SelectDropdown from '../../../shared/SelectDropdown'
import DatePicker from '../../../shared/DatePicker'

const TREATMENT_OPTIONS = [
  'Dental Implants',
  'Root Canal Treatment',
  'Invisible Aligners',
  'Smile Designing',
  'Kids Dentistry',
  'Zirconia & Ceramic Teeth',
]

export default function BookingCTA({ treatment }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    treatment: treatment.name,
    date: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', treatment: treatment.name, date: '' })
  }

  return (
    <section className="section bg-gradient-to-br from-[#07133f] to-[#0d1f5c]">
      <div className="container">
        <div className="grid grid-cols-2 gap-12 items-center max-lg:grid-cols-1">

          {/* Left — content */}
          <div>
            <p className="eyebrow mb-3" style={{ color: '#ff6b7a' }}>Ready to Start?</p>
            <h2 className="text-white text-[32px] font-black leading-tight mb-4">
              Book Your {treatment.name} Consultation
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-8">
              Get a personalised treatment plan and transparent cost estimate from our specialist. No pressure, no obligation.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon name="phone" size={14} />
                </span>
                <span>Call us: <a href="tel:+919443164101" className="text-white font-bold hover:underline">+91 94431 64101</a></span>
              </div>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon name="calendar" size={14} />
                </span>
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon name="location" size={14} />
                </span>
                <span>Dr. Roshan's Dental Care, Trichy</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-8 shadow-[0_24px_64px_rgba(0,0,0,0.2)]"
          >
            <h3 className="text-[#07133f] font-black text-xl mb-6">Book an Appointment</h3>

            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <div className="h-14 w-14 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-black text-[#07133f]">Request Received!</p>
                <p className="text-sm text-[#5a6a8a]">We'll call you back shortly to confirm your appointment.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <input
                  className="w-full rounded-xl border border-[#e5edf8] bg-[#f8faff] px-4 py-3 text-[14px] text-[#07133f] outline-none focus:border-[#ff2638] focus:ring-2 focus:ring-[#ff2638]/10 transition"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="w-full rounded-xl border border-[#e5edf8] bg-[#f8faff] px-4 py-3 text-[14px] text-[#07133f] outline-none focus:border-[#ff2638] focus:ring-2 focus:ring-[#ff2638]/10 transition"
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
                  variant="light"
                />
                <DatePicker
                  value={form.date}
                  onChange={(val) => setForm({ ...form, date: val })}
                  variant="light"
                />
                <button
                  type="submit"
                  className="primary-btn w-full justify-center"
                >
                  Confirm Appointment <Icon name="arrow" size={16} />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
