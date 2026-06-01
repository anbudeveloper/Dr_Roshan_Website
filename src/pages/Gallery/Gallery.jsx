import { useState } from 'react'
import SEO                from '../../shared/SEO'
import Hero                from './sections/Hero'
import FilterTabs          from './sections/FilterTabs'
import ClinicInterior      from './sections/ClinicInterior'
import TreatmentRooms      from './sections/TreatmentRooms'
import Technology          from './sections/Technology'
import SmileTransformations from './sections/SmileTransformations'
import HappyPatients       from './sections/HappyPatients'
import CTA                 from './sections/CTA'

const filters = [
  { id: 'all',             label: 'All Gallery' },
  { id: 'clinic',          label: 'Clinic Interior' },
  { id: 'treatment',       label: 'Treatment Rooms' },
  { id: 'technology',      label: 'Technology' },
  { id: 'team',            label: 'Our Team' },
  { id: 'transformations', label: 'Smile Transformations' },
  { id: 'patients',        label: 'Patient Stories' },
]

export default function Gallery() {
  const [active, setActive] = useState('all')

  const show = (cat) => active === 'all' || active === cat
  const showPatients = active === 'all' || active === 'patients' || active === 'team'

  return (
    <>
      <SEO
        title="Gallery | Clinic Photos & Smile Transformations"
        description="Explore Dr.Roshan's Dental Care gallery — clinic interiors, treatment rooms, advanced technology, smile transformations and happy patient stories in Trichy."
        keywords="dental clinic gallery Trichy, smile transformation photos, dental implant results Trichy, before after teeth whitening, dental clinic interior Trichy"
        path="/gallery"
      />
      <Hero />

      <section className="gl-main">
        <div className="container">
          <FilterTabs filters={filters} active={active} onChange={setActive} />

          {show('clinic')          && <ClinicInterior />}
          {show('treatment')       && <TreatmentRooms />}
          {show('technology')      && <Technology />}
          {show('transformations') && <SmileTransformations />}
          {showPatients            && <HappyPatients />}
        </div>
      </section>

      <CTA />
    </>
  )
}
