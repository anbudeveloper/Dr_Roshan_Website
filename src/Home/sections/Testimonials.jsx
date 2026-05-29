import { useEffect, useState } from 'react'
import { FaFemale, FaMale } from 'react-icons/fa'
import Icon from '../../shared/Icons'

const reviews = [
  {
    name: 'Priya S.',
    text: 'Very friendly doctors and painless treatment. Highly recommended clinic in Trichy.',
    gender: 'female',
  },
  {
    name: 'Karthik R.',
    text: 'Got my implant treatment done. Excellent care and professional approach.',
    gender: 'male',
  },
  {
    name: 'Anitha M.',
    text: 'Best dental clinic for kids. My child is not afraid to visit the dentist now!',
    gender: 'female',
  },
  {
    name: 'Ramesh K.',
    text: 'Clear explanation, neat clinic and very comfortable dental care experience.',
    gender: 'male',
  },
]

function Testimonials() {
  const [activeReview, setActiveReview] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length)
    }, 3800)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="section testimonials" id="reviews">
      <div className="container">
        <h2 className="section-title lined">What Our Patients Say</h2>
        <div className="review-slider">
          <div className="review-track" style={{ transform: `translateX(-${activeReview * 100}%)` }}>
            {reviews.map((review, index) => (
              <article className="review-card review-slide" key={review.name}>
                <div className={`avatar avatar--${index + 1}`}>
                  {review.gender === 'male' ? <FaMale size={30} /> : <FaFemale size={30} />}
                </div>
                <div className="review-card__content">
                  <div className="review-card__head">
                    <h3>{review.name}</h3>
                    <span className="mini-google">G</span>
                  </div>
                  <div className="rating">
                    {Array.from({ length: 5 }).map((_, starIndex) => <Icon name="star" size={13} filled key={starIndex} />)}
                  </div>
                  <p>{review.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="slider-dots" aria-label="Patient review slides">
          {reviews.map((review, index) => (
            <button
              className={activeReview === index ? 'active' : ''}
              type="button"
              aria-label={`Show ${review.name} review`}
              onClick={() => setActiveReview(index)}
              key={review.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
