import { Link } from 'react-router-dom'
import Icon from '../../../shared/Icons'
import heroBg from '../../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_14_52 AM.png'

export default function Hero() {
  return (
    <section className="ab-hero ct-hero-short">
      <img src={heroBg} alt="Dr.Roshan's Dental Care" className="ab-hero__bg" />
      <div className="ab-hero__overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '38px 0' }}>
        <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '10px' }}>Contact Us</p>
        <h1 style={{ margin: '0 0 10px', color: '#fff', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, lineHeight: 1.1 }}>
          We're Here to Help You Smile
        </h1>
        <div className="ab-line" style={{ margin: '14px 0 16px' }} />
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.72)', fontSize: '15px', fontWeight: 600, lineHeight: 1.7 }}>
          Have a question or need an appointment? Reach out to us and our team will be happy to assist you.
        </p>
        <nav className="ab-breadcrumb" aria-label="breadcrumb" style={{ marginTop: '18px' }}>
          <Link to="/">Home</Link>
          <Icon name="chevron" size={13} />
          <span>Contact</span>
        </nav>
      </div>
    </section>
  )
}
