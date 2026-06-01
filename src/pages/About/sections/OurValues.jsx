import { FaUsers, FaHandshake, FaTrophy, FaLightbulb, FaShieldAlt, FaHeart } from 'react-icons/fa'

const values = [
  { icon: <FaUsers     size={24} />, title: 'Patient First', desc: 'Your comfort and satisfaction are our highest priority.' },
  { icon: <FaHandshake size={24} />, title: 'Integrity',     desc: 'Honest consultation and transparent treatment.' },
  { icon: <FaTrophy    size={24} />, title: 'Excellence',    desc: 'We follow international standards in every treatment.' },
  { icon: <FaLightbulb size={24} />, title: 'Innovation',    desc: 'Advanced technology for accurate diagnosis and treatment.' },
  { icon: <FaShieldAlt size={24} />, title: 'Hygiene',       desc: 'Strict sterilization and infection control protocols.' },
  { icon: <FaHeart     size={24} />, title: 'Compassion',    desc: 'Gentle care with kindness, empathy and respect.' },
]

export default function OurValues() {
  return (
    <section className="ab-values">
      <div className="container">
        <div className="ab-section-head">
          <p className="eyebrow">Our Values</p>
          <h2 className="section-title lined">What We Stand For</h2>
        </div>
        <div className="ab-values__grid">
          {values.map((v) => (
            <div className="ab-value-card" key={v.title}>
              <span className="ab-value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
