import SEO           from '../../shared/SEO'
import Hero          from './sections/Hero'
import AboutIntro    from './sections/AboutIntro'
import OurStory      from './sections/OurStory'
import OurValues     from './sections/OurValues'
import WhyChoose     from './sections/WhyChoose'
import DoctorProfile from './sections/DoctorProfile'
import ClinicGallery from './sections/ClinicGallery'
import CTA           from './sections/CTA'
import Appointment   from '../Home/sections/Appointment'

export default function About() {
  return (
    <>
      <SEO
        title="About Us | 30+ Years of Trusted Dental Care in Trichy"
        description="Learn about Dr.Roshan's Dental Care — Trichy's most trusted multi-speciality dental clinic since 1994. Meet our expert dental surgeons and explore our advanced clinic."
        keywords="about Dr Roshan dental care Trichy, best dentist Trichy, dental clinic since 1994, Dr Shahul Hameed dentist Trichy, multispeciality dental clinic Trichy"
        path="/about"
      />
      <Hero />
      <AboutIntro />
      <OurStory />
      <OurValues />
      <WhyChoose />
      <DoctorProfile />
      <ClinicGallery />
      <Appointment />
      <CTA />
    </>
  )
}
