import Icon from '../../../shared/Icons'

export default function CTA() {
  return (
    <section className="ab-cta">
      <div className="container ab-cta__inner">
        <div className="ab-cta__left">
          <span className="ab-cta__icon"><Icon name="sparkle" size={28} /></span>
          <div>
            <h2>Ready to Transform Your Smile?</h2>
            <p>Book your appointment today and experience the difference.</p>
          </div>
        </div>
        <div className="ab-cta__btns">
          <a className="outline-btn ab-cta__book" href="#appointment">
            Book Appointment <Icon name="arrow" size={16} />
          </a>
          <a className="ab-wa-btn" href="https://wa.me/919443164101" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
