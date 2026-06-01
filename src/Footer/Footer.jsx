import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/Images/Header/Dental_logo.png'
import Icon from '../shared/Icons'

const facebookUrl  = 'https://www.facebook.com/profile.php?id=61585815080475'
const instagramUrl = 'https://www.instagram.com/dr.roshansdentalcare/'

const quickLinks = [
  { label: 'Home',       to: '/' },
  { label: 'About Us',  to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'Gallery',   to: '/gallery' },
  { label: 'Blog',      to: '/blog' },
  { label: 'Contact',   to: '/contact' },
]

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
          <Link to="/">
            <img className="h-[78px] w-[245px] object-contain object-left" src={logo} alt="Dr.Roshan's Dental Care" />
          </Link>
          <p className="my-4 text-sm font-semibold leading-7 text-[#43506b]">
            Multi-speciality dental clinic in Trichy providing advanced dental treatments with compassion and care since 1994.
          </p>
          <div className="flex items-center gap-3" aria-label="Social links">
            <a className="footer-social footer-social--fb"  href={facebookUrl}            target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF size={16} /></a>
            <a className="footer-social footer-social--ig"  href={instagramUrl}           target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram  size={16} /></a>
            <a className="footer-social footer-social--ph"  href="tel:+919443164101"      aria-label="Call us"><FaPhoneAlt  size={15} /></a>
            <a className="footer-social footer-social--wa"  href="https://wa.me/919443164101" aria-label="WhatsApp"><FaWhatsapp  size={17} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <Link className="footer-link" key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h3>Our Treatments</h3>
          {treatments.map((item) => (
            <Link className="footer-link" key={item} to="/treatments">{item}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <p className="footer-contact">
            <Icon name="map"   size={16} />
            No.34, First Floor, Thillai Nagar Main Road, Trichy - 620 018, Tamil Nadu, India.
          </p>
          <p className="footer-contact">
            <Icon name="phone" size={16} />
            <a href="tel:+919443164101">+91 94431 64101</a>
          </p>
          <p className="footer-contact">
            <Icon name="mail"  size={16} />
            <a href="mailto:drroshansdentalcare@gmail.com">drroshansdentalcare@gmail.com</a>
          </p>
          <p className="footer-contact">
            <Icon name="clock" size={16} />
            Mon - Sat: 9:00 AM - 8:00 PM
          </p>
          <p className="footer-contact">
            <Icon name="clock" size={16} />
            Sunday: 10:00 AM - 2:00 PM
          </p>
        </div>

      </div>

      <div className="container flex justify-between gap-5 border-t border-[#e6edf7] py-4 text-[13px] font-bold text-[#43506b] max-sm:flex-col max-sm:text-center">
        <span>© 2026 Dr.Roshan's Dental Care. All rights reserved.</span>
        <span>
          Designed with care by{' '}
          <a className="font-extrabold text-[#07133f] underline underline-offset-2 decoration-[#07133f]/30 transition hover:decoration-[#07133f]" href="https://gobrightglobal.com/" target="_blank" rel="noreferrer">
            GoBright
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
