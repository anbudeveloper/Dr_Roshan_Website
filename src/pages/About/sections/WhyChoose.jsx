import { FaUserMd, FaMicrochip, FaShieldAlt, FaTag, FaTooth, FaAmbulance } from 'react-icons/fa'

const features = [
  {
    icon: <FaUserMd    size={26} />,
    title: 'Experienced Team',
    desc: 'Skilled and friendly dentists at your service.',
  },
  {
    icon: <FaMicrochip size={26} />,
    title: 'Advanced Technology',
    desc: 'Modern tools for precise and painless treatment.',
  },
  {
    icon: <FaShieldAlt size={26} />,
    title: 'Hygienic Environment',
    desc: 'Strict sterilization and safety protocols.',
  },
  {
    icon: <FaTag       size={26} />,
    title: 'Affordable Pricing',
    desc: 'Quality treatment with transparent pricing.',
  },
  {
    icon: <FaTooth     size={26} />,
    title: 'Comprehensive Care',
    desc: 'All dental solutions under one roof.',
  },
  {
    icon: <FaAmbulance size={26} />,
    title: 'Emergency Care',
    desc: "We're here when you need us the most.",
  },
]

export default function WhyChoose() {
  return (
    <section className="ab-why">
      <div className="container">
        <div className="ab-section-head">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title lined">Why Patients Trust Dr. Roshan's</h2>
        </div>
        <div className="ab-why__grid">
          {features.map((f) => (
            <div className="ab-why__card" key={f.title}>
              <span className="ab-why__icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
