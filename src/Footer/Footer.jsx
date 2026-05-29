import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/Images/Header/Dental_logo.png'
import Icon from '../shared/Icons'

const facebookUrl = 'https://www.facebook.com/profile.php?id=61585815080475&ref=PROFILE_EDIT_xav_ig_profile_page_web#'
const instagramUrl = 'https://www.instagram.com/dr.roshansdentalcare/'
const quickLinks = ['Home', 'About Us', 'Treatments', 'Gallery', 'Contact']
const treatments = [
  'Dental Implants',
  'Root Canal Treatment',
  'Invisible Aligners',
  'Smile Designing',
  'Kids Dentistry',
  'Zirconia & Ceramic Teeth',
]

function Footer() {
  return (
    <footer className="border-t border-[#e8eef7] bg-[#fbfdff]">
      <div className="container grid grid-cols-[1.45fr_.75fr_1fr_1.45fr] gap-14 py-11 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <img className="h-[78px] w-[245px] object-contain object-left" src={logo} alt="Dr.Roshan's Dental Care" />
          <p className="my-4 text-sm font-semibold leading-7 text-[#43506b]">
            Multi-speciality dental clinic in Trichy providing advanced treatments with compassion and care since 1994.
          </p>
          <div className="flex items-center gap-4" aria-label="Social links">
            <a className="footer-social" href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF size={22} /></a>
            <a className="footer-social" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={22} /></a>
            <a className="footer-social" href="tel:+919443164101" aria-label="Call Dr.Roshan's Dental Care"><FaPhoneAlt size={21} /></a>
            <a className="footer-social text-[#24c45a]" href="https://wa.me/919443164101" aria-label="WhatsApp"><FaWhatsapp size={24} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          {quickLinks.map((link) => <a className="footer-link" key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</a>)}
        </div>

        <div className="footer-col">
          <h3>Treatments</h3>
          {treatments.map((item) => <a className="footer-link" key={item} href="#treatments">{item}</a>)}
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <p className="footer-contact"><Icon name="map" size={22} /> No.34, First Floor, Thillai Nagar Main Road, Trichy - 620 018, Tamil Nadu, India.</p>
          <p className="footer-contact"><Icon name="phone" size={22} /> +91 94431 64101</p>
          <p className="footer-contact"><Icon name="mail" size={22} /> drroshansdentalcare@gmail.com</p>
          <p className="footer-contact"><Icon name="clock" size={22} /> Mon - Sat: 9:00 AM - 8:00 PM</p>
          <p className="footer-contact"><Icon name="clock" size={22} /> Sunday: 10:00 AM - 2:00 PM</p>
        </div>
      </div>
      <div className="container flex justify-between gap-5 border-t border-[#e6edf7] py-4 text-[13px] font-bold text-[#43506b] max-sm:flex-col max-sm:text-center">
        <span>© 2026 Dr.Roshan's Dental Care. All rights reserved.</span>
        <span>
          Designed by <a className="text-[#ff2638] hover:text-[#071b57]" href="https://gobrightglobal.com/" target="_blank" rel="noreferrer">GoBright</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
