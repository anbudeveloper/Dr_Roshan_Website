import SEO from '../../shared/SEO'
import About from './sections/About'
import Appointment from './sections/Appointment'
import Banner from './sections/Banner'
import Faq from './sections/Faq'
import Technology from './sections/Technology'
import Testimonials from './sections/Testimonials'
import Transformations from './sections/Transformations'
import Treatments from './sections/Treatments'
import WhyChoose from './sections/WhyChoose'

function Home({ onBookAppointment }) {
  return (
    <>
      <SEO
        description="Dr.Roshan's Dental Care — Trichy's most trusted dental clinic since 1994. Expert dental implants, root canal treatment, invisible aligners, smile designing and kids dentistry. Book your appointment today."
        keywords="best dentist in Trichy, dental clinic Trichy, dental implants Trichy, root canal Trichy, invisible aligners Trichy, smile designing Trichy, kids dentist Trichy, painless dental treatment Trichy, Dr Roshan dental care"
        path="/"
      />
      <Banner onBookAppointment={onBookAppointment} />
      <Treatments />
      <About />
      <WhyChoose />
      <Transformations />
      <Technology />
      <Faq />
      <Testimonials />
      <Appointment />
    </>
  )
}

export default Home
