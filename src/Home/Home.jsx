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
