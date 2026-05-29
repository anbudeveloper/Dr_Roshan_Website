import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Icon from '../../shared/Icons'
import heroImg from '../../assets/Images/Home/B1.png'
import adultBanner from '../../assets/Images/Home/ba2.png'
import kidsBanner from '../../assets/Images/Home/ba3.png'

const slideContent = [
  {
    image: adultBanner,
    align: 'right',
    eyebrow: 'CREATING CONFIDENT SMILES',
    title: ['Quality Dental Care', 'You Can Trust'],
    highlight: 'Since 1994',
    text: 'Providing advanced, painless and affordable dental treatments for you and your family.',
    stats: [
      { icon: 'users', value: '30+', label: 'Years Experience' },
      { icon: 'sparkle', value: '5000+', label: 'Happy Patients' },
      { icon: 'shield', value: '100%', label: 'Sterile Care' },
    ],
  },
  {
    image: kidsBanner,
    align: 'left',
    eyebrow: 'Gentle Dental Care for Growing Smiles',
    title: ['Healthy Smiles'],
    highlight: 'Start Early',
    text: 'Give your child the confidence of a bright, healthy smile with friendly and stress-free dental care.',
    stats: [
      { icon: 'users', value: 'Kids', label: 'Friendly Care' },
      { icon: 'shield', value: 'Gentle', label: 'Treatments' },
      { icon: 'sparkle', value: 'Happy', label: 'Young Smiles' },
    ],
  },
]

const stats = [
  { icon: 'users', value: '30+', label: 'Years Experience' },
  { icon: 'sparkle', value: '5000+', label: 'Happy Patients' },
  { icon: 'shield', value: '100%', label: 'Sterile Care' },
]

function Banner({ onBookAppointment }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 1 + slideContent.length

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % totalSlides)
    }, 4800)

    return () => window.clearInterval(timer)
  }, [totalSlides])

  const moveSlide = (direction) => {
    setActiveSlide((current) => (current + direction + totalSlides) % totalSlides)
  }

  return (
    <section className="hero-section" id="home">
      <div className="hero-carousel">
        <div className="hero-carousel__track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          <article className="hero-slide hero-slide--classic">
            <img className="hero-section__image" src={heroImg} alt="Dentist treating a smiling patient" />
            <div className="container hero-section__content">
              <div className="hero-copy">
                <p className="eyebrow">CREATING CONFIDENT SMILES</p>
                <h1>
                  <span className="hero-nowrap">Quality Dental Care</span>
                  <span>You Can Trust</span>
                  <strong>Since 1994</strong>
                </h1>
                <p className="hero-copy__text">
                  Providing advanced, painless and affordable dental treatments for you and your family.
                </p>

                <div className="stats-row">
                  {stats.map((stat, index) => (
                    <div className="stat-item" key={stat.value}>
                      <span className={`stat-icon stat-icon--${index + 1}`}><Icon name={stat.icon} size={24} /></span>
                      <div>
                        <strong>{stat.value}</strong>
                        <small>{stat.label}</small>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hero-actions">
                  <button className="primary-btn" type="button" onClick={onBookAppointment}>
                    Book Appointment <Icon name="calendar" size={17} />
                  </button>
                  <a className="secondary-btn" href="https://wa.me/919443164101">
                    Chat on WhatsApp <FaWhatsapp size={19} />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {slideContent.map((slide, index) => (
            <article className={`hero-slide hero-slide--designed hero-slide--designed-${index + 2} hero-slide--${slide.align}`} key={slide.eyebrow}>
              <img className="hero-designed-bg" src={slide.image} alt="" aria-hidden="true" />
              <div className="container hero-designed-content">
                <div className="hero-designed-copy">
                  <p className="hero-designed-eyebrow"><Icon name="sparkle" size={28} /> {slide.eyebrow}</p>
                  <h2>
                    {slide.title.map((line, lineIndex) => <span className={lineIndex === 0 ? 'hero-nowrap' : ''} key={line}>{line}</span>)}
                    <strong>{slide.highlight}</strong>
                  </h2>
                  <p className="hero-designed-text">{slide.text}</p>
                  <div className="stats-row hero-designed-mini-stats">
                    {slide.stats.map((stat, statIndex) => (
                      <div className="stat-item" key={`${slide.eyebrow}-${stat.value}`}>
                        <span className={`stat-icon stat-icon--${statIndex + 1}`}><Icon name={stat.icon} size={24} /></span>
                        <div>
                          <strong>{stat.value}</strong>
                          <small>{stat.label}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hero-actions">
                    <button className="primary-btn" type="button" onClick={onBookAppointment}>
                      Book Appointment <Icon name="calendar" size={17} />
                    </button>
                    <a className="secondary-btn" href="https://wa.me/919443164101">
                      Chat on WhatsApp <FaWhatsapp size={19} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="hero-carousel__arrow hero-carousel__arrow--prev" type="button" aria-label="Previous banner" onClick={() => moveSlide(-1)}>
          <Icon name="arrow" size={20} />
        </button>
        <button className="hero-carousel__arrow hero-carousel__arrow--next" type="button" aria-label="Next banner" onClick={() => moveSlide(1)}>
          <Icon name="arrow" size={20} />
        </button>

        <div className="hero-carousel__dots" aria-label="Banner slides">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              className={index === activeSlide ? 'active' : ''}
              type="button"
              aria-label={`Show banner slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              key={index}
            />
          ))}
        </div>
      </div>

      <a className="whatsapp-float" href="https://wa.me/919443164101" aria-label="Chat on WhatsApp">
        <FaWhatsapp size={32} />
      </a>
    </section>
  )
}

export default Banner
