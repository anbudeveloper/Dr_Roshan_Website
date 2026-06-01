import Icon from '../../../shared/Icons'

export default function CTA() {
  return (
    <section className="ct-cta">
      <div className="container ct-cta__inner">

        <div className="ct-cta__left">
          <span className="ct-cta__icon"><Icon name="sparkle" size={28} /></span>
          <div>
            <h2>Book Your Appointment Today!</h2>
            <p>Take the first step towards a healthier, brighter smile.</p>
          </div>
        </div>

        <div className="ct-cta__btns">
          <a className="outline-btn ct-cta__book" href="tel:+919443164101">
            <Icon name="calendar" size={16} /> Book Appointment
          </a>
          <a className="ab-wa-btn" href="https://wa.me/919443164101" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
