import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import SelectDropdown from '../../../shared/SelectDropdown'
import { submitForm } from '../../../utils/submitForm'

const TREATMENT_OPTIONS = [
  'Dental Implants',
  'Root Canal Treatment',
  'Invisible Aligners',
  'Smile Designing',
  'Kids Dentistry',
  'Zirconia & Ceramic Teeth',
]

export default function ContactForm() {
  const [form, setForm]     = useState({ name: '', phone: '', email: '', treatment: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitForm(form)
      setStatus('success')
      setForm({ name: '', phone: '', email: '', treatment: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <div className="ct-form">
      <h2 className="ct-section-title">Send Us a Message</h2>

      {status === 'success' ? (
        <div className="flex flex-col items-center gap-3 py-12 text-center">
          <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">✓</div>
          <p className="text-lg font-black text-[#07133f]">Message Sent!</p>
          <p className="text-sm text-[#5a6a8a]">We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="ct-form__row">
            <label className="ct-label">
              <span>Your Name</span>
              <input type="text" placeholder="Enter your name" required
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label className="ct-label">
              <span>Phone Number</span>
              <input type="tel" placeholder="Enter your phone number" required
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </label>
          </div>

          <label className="ct-label">
            <span>Email Address</span>
            <input type="email" placeholder="Enter your email address"
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>

          <label className="ct-label">
            <span>Select Treatment</span>
            <SelectDropdown options={TREATMENT_OPTIONS} value={form.treatment}
              onChange={(v) => setForm({ ...form, treatment: v })} variant="light" />
          </label>

          <label className="ct-label">
            <span>Message</span>
            <textarea rows={5} placeholder="How can we help you?"
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </label>

          {status === 'error' && (
            <p className="text-sm font-semibold text-red-500 mb-3">Something went wrong. Please try again or call us directly.</p>
          )}

          <button className="ct-submit" type="submit" disabled={status === 'sending'}>
            <FaPaperPlane size={15} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          <p className="ct-form__note">We'll get back to you as soon as possible!</p>
        </form>
      )}
    </div>
  )
}
