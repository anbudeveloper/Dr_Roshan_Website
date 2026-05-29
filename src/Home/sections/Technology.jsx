import Icon from '../../shared/Icons'

const technologies = [
  ['Digital X-Ray', 'Clear diagnosis with low-radiation imaging for accurate treatment planning.', 'sparkle'],
  ['Pain-Free Care', 'Gentle procedures and patient-first techniques for a calmer dental visit.', 'shield'],
  ['Modern Lab Support', 'Precise crowns, aligners and restorative work with reliable turnaround.', 'calendar'],
]

function Technology() {
  return (
    <section className="technology-section">
      <div className="container technology-grid">
        <div className="technology-copy">
          <p className="eyebrow">Advanced Clinic Setup</p>
          <h2>Technology That Makes Dental Care Easier</h2>
          <p>
            Our clinic combines modern equipment, careful diagnosis and friendly care so every patient understands the
            treatment before it begins.
          </p>
        </div>
        <div className="technology-list">
          {technologies.map(([title, text, icon]) => (
            <article key={title}>
              <span><Icon name={icon} size={26} /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technology
