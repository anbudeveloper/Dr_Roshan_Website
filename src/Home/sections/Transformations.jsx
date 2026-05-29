import Icon from '../../shared/Icons'
import whiteningImg from '../../assets/Images/Home/Whitening.png'
import implantsImg from '../../assets/Images/Home/Implants.png'
import makeoverImg from '../../assets/Images/Home/Makeover.png'
import alignersImg from '../../assets/Images/Home/Aligners.png'

const results = [
  ['Teeth Whitening', whiteningImg],
  ['Dental Implants', implantsImg],
  ['Smile Makeover', makeoverImg],
  ['Aligners Treatment', alignersImg],
]

function Transformations() {
  return (
    <section className="section transformations" id="gallery">
      <div className="container">
        <h2 className="section-title lined">Smile Transformations</h2>
        <div className="result-grid">
          {results.map(([title, image], index) => (
            <article className="result-card" key={title}>
              <div className={`smile-photo smile-photo--${index + 1}`}>
                <img src={image} alt={`${title} before and after result`} />
                <span className="divider"><Icon name="chevron" size={16} /></span>
              </div>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
        <a className="outline-btn center-btn" href="#gallery">
          View More Results <Icon name="arrow" size={17} />
        </a>
      </div>
    </section>
  )
}

export default Transformations
