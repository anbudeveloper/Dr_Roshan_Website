import logo from '../assets/Images/Header/Dental_logo.png'
import Icon from '../shared/Icons'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  {
    label: 'Treatments',
    href: '#treatments',
    children: [
      'Dental Implants',
      'Root Canal Treatment',
      'Invisible Aligners',
      'Smile Designing',
      'Kids Dentistry',
      'Zirconia & Ceramic Teeth',
    ],
  },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

function Header({ onBookAppointment }) {
  return (
    <header className="sticky top-0 z-[100] border-b border-[#e7edf8] bg-white/95 shadow-[0_8px_28px_rgba(7,27,87,0.05)] backdrop-blur-xl">
      <div className="grid min-h-[96px] w-full grid-cols-[260px_1fr_auto] items-center gap-8 px-4 max-lg:flex max-lg:min-h-[82px] max-lg:justify-between max-sm:px-3">
        <a className="shrink-0 justify-self-start" href="#home" aria-label="Dr.Roshan's Dental Care home">
          <img className="h-[76px] w-[250px] object-contain object-left max-lg:h-[62px] max-lg:w-[205px]" src={logo} alt="Dr.Roshan's Dental Care" />
        </a>

        <nav className="flex items-center justify-center gap-8 justify-self-center text-center text-[15px] font-extrabold text-[#07133f] max-xl:gap-5 max-lg:hidden" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div className="group relative" key={item.label}>
              <a
                className={`inline-flex min-h-9 items-center gap-1 whitespace-nowrap transition hover:text-[#ff2638] ${item.label === 'Home' ? 'text-[#ff2638]' : ''}`}
                href={item.href}
              >
                {item.label}
                {item.children && <Icon name="chevron" size={14} strokeWidth={2.6} />}
              </a>

              {item.children && (
                <div className="pointer-events-none absolute left-1/2 top-full z-[110] w-[255px] -translate-x-1/2 translate-y-3 rounded-xl border border-[#e5edf8] bg-white p-3 opacity-0 shadow-[0_20px_45px_rgba(8,29,82,0.14)] transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      className="block rounded-lg px-4 py-3 text-[14px] font-extrabold text-[#24314f] transition hover:bg-[#fff0f2] hover:text-[#ff2638]"
                      href="#treatments"
                      key={child}
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4 justify-self-end">
          <a className="inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-extrabold text-[#07133f] max-xl:hidden" href="tel:+919443164101">
            <Icon name="phone" size={16} />
            <span>+91 94431 64101</span>
          </a>
          <button className="primary-btn nav-book-btn min-h-[48px] px-6 max-lg:hidden" type="button" onClick={onBookAppointment}>
            <Icon name="calendar" size={16} />
            <span>Book Appointment</span>
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-lg border border-[#e7edf8] bg-white text-[#071b57] lg:hidden" type="button" aria-label="Open menu">
            <Icon name="menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
