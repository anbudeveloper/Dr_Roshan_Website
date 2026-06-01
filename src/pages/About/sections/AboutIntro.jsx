import { FaClock, FaSmile, FaCog, FaTooth, FaAward } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Icon from '../../../shared/Icons'
import clinicImg from '../../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_14_52 AM.png'

const stats = [
  { icon: <FaClock size={22} />, value: '30+',   label: 'Years of Experience', cls: '' },
  { icon: <FaSmile size={22} />, value: '5000+', label: 'Happy Patients',       cls: 'ab-stat--2' },
  { icon: <FaCog   size={22} />, value: '',      label: 'Advanced Technology',  cls: 'ab-stat--3' },
  { icon: <FaTooth size={22} />, value: '',      label: 'Painless Treatments',  cls: 'ab-stat--4' },
]

export default function AboutIntro() {
  return (
    <section className="section ab-intro">
      <div className="container ab-intro__grid">

        <div className="ab-intro__copy">
          <p className="eyebrow">About Dr. Roshan's Dental Care</p>
          <h2>30+ Years of Trusted Dental Care in Trichy</h2>
          <div className="ab-line" />
          <p>Dr. Roshan's Dental Care was established in 1994 with a mission to provide world-class dental treatments with compassion, honesty and advanced technology.</p>
          <p>For more than three decades, we have been committed to creating healthy, confident smiles for thousands of patients across Trichy.</p>

          <div className="ab-stats">
            {stats.map((s) => (
              <div className={`ab-stat ${s.cls}`} key={s.label}>
                <span className="ab-stat__icon">{s.icon}</span>
                {s.value && <strong>{s.value}</strong>}
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="ab-intro__img">
          <img src={clinicImg} alt="Dr.Roshan's Dental Care reception" />
          <div className="google-card">
            <div className="google-card__top">
              <FcGoogle size={42} />
              <span>Google Reviews</span>
            </div>
            <div className="google-card__rating">
              <strong>4.9</strong>
              <span>{Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={16} filled />)}</span>
            </div>
            <small>230+ happy patient reviews</small>
          </div>
          <div className="since-badge">
            <span className="since-badge__medal"><FaAward size={28} color="var(--red)" /></span>
            <div>
              <strong>Since</strong>
              <em>1994</em>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
