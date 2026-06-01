import SEO          from '../../shared/SEO'
import Hero         from './sections/Hero'
import GetInTouch   from './sections/GetInTouch'
import ContactForm  from './sections/ContactForm'
import Map          from './sections/Map'
import CTA          from './sections/CTA'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Book Appointment at Dr.Roshan's Dental Care Trichy"
        description="Contact Dr.Roshan's Dental Care in Trichy. Call +91 94431 64101, email us or fill the form to book your appointment. Located at Thillai Nagar Main Road, Trichy."
        keywords="contact dentist Trichy, book dental appointment Trichy, Dr Roshan dental care contact, dental clinic Thillai Nagar Trichy, dentist phone number Trichy"
        path="/contact"
      />
      <Hero />

      <section className="ct-main">
        <div className="container ct-main__inner">
          <GetInTouch />
          <ContactForm />
        </div>
      </section>

      <Map />
      <CTA />
    </>
  )
}
