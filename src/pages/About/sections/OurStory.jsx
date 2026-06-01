import Icon from '../../../shared/Icons'

const timeline = [
  { year: '1994',  label: 'Clinic Established' },
  { year: '2000+', label: 'Advanced Equipment & New Technologies' },
  { year: '2010+', label: 'Specialized Dental Treatments Introduced' },
  { year: '2024',  label: 'Continuing to Create Beautiful Smiles Every Day' },
]

export default function OurStory() {
  return (
    <section className="ab-story">
      <div className="container ab-story__grid">

        <div className="ab-story__copy">
          <p className="eyebrow">Our Story</p>
          <h2>A Legacy Built on Trust &amp; Excellence</h2>
          <div className="ab-line" style={{ margin: '14px 0 22px' }} />
          <p>What started as a small dental clinic in 1994 has grown into one of the most trusted multispeciality dental clinics in Trichy. Our journey is built on patient trust, advanced technology and continuous learning.</p>
          <a className="outline-btn" href="#about">Know More About Us <Icon name="arrow" size={16} /></a>
        </div>

        <div className="ab-timeline">
          {timeline.map((item) => (
            <div className="ab-tl-item" key={item.year}>
              <div className="ab-tl-dot" />
              <div className="ab-tl-body">
                <strong>{item.year}</strong>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
