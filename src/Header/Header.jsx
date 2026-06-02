import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/Images/Header/Dental_logo.png'
import Icon from '../shared/Icons'

const navItems = [
  { label: 'Home',        to: '/' },
  { label: 'About Us',   to: '/about' },
  {
    label: 'Treatments',
    to: '/treatments',
    children: [
      { label: 'Dental Implants',         slug: 'dental-implants' },
      { label: 'Root Canal Treatment',    slug: 'root-canal' },
      { label: 'Invisible Aligners',      slug: 'invisible-aligners' },
      { label: 'Smile Designing',         slug: 'smile-designing' },
      { label: 'Kids Dentistry',          slug: 'kids-dentistry' },
      { label: 'Zirconia & Ceramic Teeth', slug: 'zirconia-ceramic-teeth' },
    ],
  },
  { label: 'Gallery',    to: '/gallery' },
  { label: 'Blog',       to: '/blog' },
  { label: 'Contact',    to: '/contact' },
]

function Header({ onBookAppointment }) {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [expanded, setExpanded]     = useState(null)
  const closeMenu = () => { setMenuOpen(false); setExpanded(null) }

  return (
    <>
      {/* ── Desktop / Tablet Header ── */}
      <header className="sticky top-0 z-[100] border-b border-[#e7edf8] bg-white/95 shadow-[0_8px_28px_rgba(7,27,87,0.05)] backdrop-blur-xl">
        <div className="grid min-h-[100px] w-full grid-cols-[300px_1fr_auto] items-center gap-8 px-6 max-lg:flex max-lg:min-h-[82px] max-lg:justify-between max-sm:px-4">

          <Link className="shrink-0" to="/" aria-label="Dr.Roshan's Dental Care">
            <img className="h-[88px] w-[280px] object-contain object-left max-lg:h-[70px] max-lg:w-[220px] max-sm:h-[60px] max-sm:w-[190px]" src={logo} alt="Dr.Roshan's Dental Care" />
          </Link>

          {/* Desktop Nav */}
          <nav className="desk-nav flex items-center justify-center gap-7 text-[14.5px] font-extrabold text-[#07133f] max-xl:gap-5" aria-label="Primary navigation">
            {navItems.map((item) => (
              <div className="group relative" key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `inline-flex min-h-9 items-center gap-1 whitespace-nowrap transition hover:text-[#ff2638] relative ${
                      isActive
                        ? 'text-[#ff2638] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:rounded-full after:bg-[#ff2638] after:content-[\'\']'
                        : ''
                    }`
                  }
                >
                  {item.label}
                  {item.children && <Icon name="chevron" size={13} strokeWidth={2.6} />}
                </NavLink>

                {item.children && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-[110] w-[255px] -translate-x-1/2 translate-y-3 rounded-xl border border-[#e5edf8] bg-white p-3 opacity-0 shadow-[0_20px_45px_rgba(8,29,82,0.14)] transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <NavLink
                        className={({ isActive }) =>
                          `block rounded-lg px-4 py-3 text-[13.5px] font-extrabold transition hover:bg-[#fff0f2] hover:text-[#ff2638] ${
                            isActive ? 'bg-[#fff0f2] text-[#ff2638]' : 'text-[#24314f]'
                          }`
                        }
                        to={`/treatments/${child.slug}`}
                        key={child.slug}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-3 max-lg:gap-2">
            <a className="nav-grad-btn nav-call-btn" href="tel:+919443164101">
              <Icon name="phone" size={14} />
              +91 94431 64101
            </a>
            <button className="nav-grad-btn nav-book-mobile-hide" type="button" onClick={() => onBookAppointment()}>
              <Icon name="calendar" size={14} />
              Book Appointment
            </button>

            {/* Hamburger */}
            <button
              className="mob-menu-btn"
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Icon name="menu" size={22} />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Backdrop ── */}
      {menuOpen && (
        <button
          className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-label="Close menu"
          type="button"
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div className={`mob-drawer${menuOpen ? ' mob-drawer--open' : ''}`} aria-hidden={!menuOpen}>

        <div className="mob-drawer__head">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Dr.Roshan's Dental Care" className="h-[62px] w-[200px] object-contain object-left" />
          </Link>
          <button className="mob-drawer__close" onClick={closeMenu} aria-label="Close menu" type="button">
            <Icon name="xmark" size={20} />
          </button>
        </div>

        <nav className="mob-drawer__nav">
          {navItems.map((item) => (
            <div className="mob-drawer__nav-item" key={item.label}>
              {item.children ? (
                <button
                  className={`mob-drawer__link w-full text-left${expanded === item.label ? ' mob-drawer__link--active' : ''}`}
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  type="button"
                >
                  {item.label}
                  <span style={{ transform: expanded === item.label ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s' }}>
                    <Icon name="chevron" size={14} />
                  </span>
                </button>
              ) : (
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `mob-drawer__link${isActive ? ' mob-drawer__link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              )}

              {item.children && expanded === item.label && (
                <div className="mob-drawer__children">
                  {item.children.map((child) => (
                    <Link
                      className="mob-drawer__child"
                      to={`/treatments/${child.slug}`}
                      key={child.slug}
                      onClick={closeMenu}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mob-drawer__footer">
          <a className="mob-drawer__call" href="tel:+919443164101">
            <Icon name="phone" size={16} /> +91 94431 64101
          </a>
          <button
            className="mob-drawer__book"
            type="button"
            onClick={() => { onBookAppointment(); closeMenu() }}
          >
            <Icon name="calendar" size={16} /> Book Appointment
          </button>
        </div>

      </div>
    </>
  )
}

export default Header
