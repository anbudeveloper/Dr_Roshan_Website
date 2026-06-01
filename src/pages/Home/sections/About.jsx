import Icon from '../../../shared/Icons'
import { FcGoogle } from 'react-icons/fc'
import clinicImg from '../../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_14_52 AM.png'

const points = [
  'Experienced & Friendly Doctors',
  'Painless & Advanced Treatments',
  'Sterilized & Hygienic Environment',
  'Affordable & Transparent Pricing',
]

function About() {
  return (
    <section className="section about" id="about-us">
      <div className="container about__grid">
        <div className="about__copy">
          <p className="eyebrow">About Us</p>
          <h2>Trusted Dental Care in Trichy</h2>
          <p>
            Dr.Roshan's Dental Care is a multi-speciality dental clinic providing world-class treatments with modern
            technology and a patient-first approach.
          </p>
          <ul>
            {points.map((point) => (
              <li key={point}><Icon name="check" size={17} /> {point}</li>
            ))}
          </ul>
          <a className="outline-btn" href="#about-us">
            Know More About Us <Icon name="arrow" size={17} />
          </a>
        </div>

        <div className="clinic-card">
          <img src={clinicImg} alt="Dr.Roshan's Dental Care reception" />
          <div className="google-card" aria-label="Google rating 4.9 from 230 reviews">
            <div className="google-card__top">
              <FcGoogle size={42} />
              <span>Google Reviews</span>
            </div>
            <div className="google-card__rating">
              <strong>4.9</strong>
              <span>{Array.from({ length: 5 }).map((_, index) => <Icon name="star" size={16} filled key={index} />)}</span>
            </div>
            <small>230+ happy patient reviews</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
