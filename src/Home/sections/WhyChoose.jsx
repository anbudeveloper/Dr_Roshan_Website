import Icon from '../../shared/Icons'

const features = [
  {
    icon: 'shield',
    title: 'Strict Sterilization',
    text: 'Every instrument and treatment bay follows a clean, safe and patient-friendly workflow.',
  },
  {
    icon: 'sparkle',
    title: 'Smile-Focused Planning',
    text: 'Treatment plans are designed around comfort, natural looks and long-term dental health.',
  },
  {
    icon: 'calendar',
    title: 'Easy Appointments',
    text: 'Fast appointment support with clear guidance before you visit the clinic.',
  },
]

const steps = ['Consultation', 'Digital Diagnosis', 'Personal Care Plan', 'Confident Smile']

function WhyChoose() {
  return (
    <section className="care-section">
      <div className="container">
        <div className="care-section__head">
          <div>
            <p className="eyebrow">Why Patients Choose Us</p>
            <h2>Modern Dental Care With a Human Touch</h2>
          </div>
          <p>
            From first consultation to final follow-up, our team keeps every visit calm, transparent and focused on your smile.
          </p>
        </div>

        <div className="care-grid">
          {features.map((feature, index) => (
            <article className="care-card animate-rise" style={{ animationDelay: `${index * 120}ms` }} key={feature.title}>
              <span><Icon name={feature.icon} size={28} /></span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>

        <div className="care-steps">
          {steps.map((step, index) => (
            <div className="care-step" key={step}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
