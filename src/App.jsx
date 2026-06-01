import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import ScrollToTop from './shared/ScrollToTop'
import Header from './Header/Header'
import Home from './pages/Home/Home'
import Footer from './Footer/Footer'
import Icon from './shared/Icons'
import SelectDropdown from './shared/SelectDropdown'
import DatePicker from './shared/DatePicker'
import { submitForm } from './utils/submitForm'
import About          from './pages/About/About'
import Treatments     from './pages/Treatments/Treatments'
import TreatmentDetail from './pages/Treatments/TreatmentDetail'
import Gallery        from './pages/Gallery/Gallery'
import Contact        from './pages/Contact/Contact'
import Blog           from './pages/Blog/Blog'
import BlogPost       from './pages/Blog/BlogPost'
import './App.css'

const TREATMENT_OPTIONS = [
  'Dental Implants',
  'Root Canal Treatment',
  'Invisible Aligners',
  'Smile Designing',
  'Kids Dentistry',
  'Zirconia & Ceramic Teeth',
]

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [modalForm, setModalForm] = useState({ name: '', phone: '', treatment: '', date: '' })
  const [modalStatus, setModalStatus] = useState('idle')

  const handleBookAppointment = (treatment = '') => {
    setModalForm({ name: '', phone: '', treatment, date: '' })
    setModalStatus('idle')
    setIsBookingOpen(true)
  }

  const closeBooking = () => {
    setIsBookingOpen(false)
    setModalStatus('idle')
  }

  const handleModalSubmit = async (e) => {
    e.preventDefault()
    setModalStatus('sending')
    try {
      await submitForm(modalForm)
      setModalStatus('success')
      setTimeout(() => { setIsBookingOpen(false); setModalStatus('idle') }, 3000)
    } catch {
      setModalStatus('error')
      setTimeout(() => setModalStatus('idle'), 4000)
    }
  }

  return (
    <>
      <a className="whatsapp-float" href="https://wa.me/919443164101" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={28} />
      </a>

      <div className="site-shell">
        <ScrollToTop />
        <Header onBookAppointment={handleBookAppointment} />
        <main>
          <Routes>
            <Route path="/"                    element={<Home onBookAppointment={handleBookAppointment} />} />
            <Route path="/about"               element={<About />} />
            <Route path="/treatments"          element={<Treatments />} />
            <Route path="/treatments/:slug"    element={<TreatmentDetail />} />
            <Route path="/gallery"             element={<Gallery />} />
            <Route path="/blog"                element={<Blog />} />
            <Route path="/blog/:slug"          element={<BlogPost />} />
            <Route path="/contact"             element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {isBookingOpen && (
          <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
            <button className="booking-modal__backdrop" type="button" aria-label="Close booking form" onClick={closeBooking} />
            <form className="booking-modal__panel animate-rise" onSubmit={handleModalSubmit}>
              <button className="booking-modal__close" type="button" aria-label="Close booking form" onClick={closeBooking}>×</button>
              <div className="booking-modal__head">
                <span><Icon name="calendar" size={30} /></span>
                <div>
                  <p className="eyebrow">Quick Booking</p>
                  <h2 id="booking-modal-title">Book Your Appointment</h2>
                </div>
              </div>

              {modalStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon name="check" size={26} />
                  </div>
                  <p style={{ fontWeight: 900, color: '#07133f', fontSize: 17 }}>Appointment Request Sent!</p>
                  <p style={{ color: '#5a6a8a', fontSize: 13, marginTop: 6 }}>We'll call you back shortly to confirm.</p>
                </div>
              ) : (
                <div className="booking-modal__fields">
                  <label>
                    <span>Your Name</span>
                    <input type="text" placeholder="Enter your name" required
                      value={modalForm.name} onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })} />
                  </label>
                  <label>
                    <span>Phone Number</span>
                    <input type="tel" placeholder="Enter phone number" required
                      value={modalForm.phone} onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })} />
                  </label>
                  <label>
                    <span>Select Treatment</span>
                    <SelectDropdown options={TREATMENT_OPTIONS} value={modalForm.treatment}
                      onChange={(v) => setModalForm({ ...modalForm, treatment: v })} variant="light" />
                  </label>
                  <label>
                    <span>Preferred Date</span>
                    <DatePicker value={modalForm.date} onChange={(v) => setModalForm({ ...modalForm, date: v })} variant="light" />
                  </label>
                  {modalStatus === 'error' && (
                    <p style={{ color: '#ef4444', fontSize: 13, fontWeight: 600 }}>Something went wrong. Please try again.</p>
                  )}
                  <button className="primary-btn" type="submit" disabled={modalStatus === 'sending'}>
                    {modalStatus === 'sending' ? 'Sending…' : 'Book Appointment'}
                  </button>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default App
