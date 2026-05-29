import { useState } from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Icon from './shared/Icons'
import './App.css'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="site-shell">
      <Header onBookAppointment={() => setIsBookingOpen(true)} />
      <main>
        <Home onBookAppointment={() => setIsBookingOpen(true)} />
      </main>
      <Footer />
      {isBookingOpen && (
        <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
          <button className="booking-modal__backdrop" type="button" aria-label="Close booking form" onClick={() => setIsBookingOpen(false)} />
          <form className="booking-modal__panel animate-rise">
            <button className="booking-modal__close" type="button" aria-label="Close booking form" onClick={() => setIsBookingOpen(false)}>
              ×
            </button>
            <div className="booking-modal__head">
              <span><Icon name="calendar" size={30} /></span>
              <div>
                <p className="eyebrow">Quick Booking</p>
                <h2 id="booking-modal-title">Book Your Appointment</h2>
              </div>
            </div>
            <div className="booking-modal__fields">
              <label>
                <span>Your Name</span>
                <input type="text" placeholder="Enter your name" />
              </label>
              <label>
                <span>Phone Number</span>
                <input type="tel" placeholder="Enter phone number" />
              </label>
              <label>
                <span>Select Treatment</span>
                <select defaultValue="">
                  <option value="" disabled>Select treatment</option>
                  <option>Dental Implants</option>
                  <option>Root Canal Treatment</option>
                  <option>Invisible Aligners</option>
                  <option>Smile Designing</option>
                  <option>Kids Dentistry</option>
                </select>
              </label>
              <label>
                <span>Preferred Date</span>
                <input type="date" />
              </label>
              <button className="primary-btn" type="submit">Submit Appointment</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default App
