import Icon from '../../../shared/Icons'
import whiteningImg from '../../../assets/Images/Home/Whitening.png'
import implantsImg  from '../../../assets/Images/Home/Implants.png'
import makeoverImg  from '../../../assets/Images/Home/Makeover.png'
import alignersImg  from '../../../assets/Images/Home/Aligners.png'

const items = [
  { img: whiteningImg, label: 'Teeth Whitening' },
  { img: implantsImg,  label: 'Dental Implants' },
  { img: makeoverImg,  label: 'Smile Makeover' },
  { img: alignersImg,  label: 'Aligners Treatment' },
]

export default function SmileTransformations() {
  return (
    <div className="gl-section">
      <h2 className="gl-section-title">Smile Transformations</h2>
      <div className="gl-grid">
        {items.map((item) => (
          <div className="gl-transform-card" key={item.label}>
            <div className="gl-transform-img">
              <img src={item.img} alt={`${item.label} before and after`} />
              <span className="gl-ba-label gl-ba-label--before">Before</span>
              <span className="gl-ba-label gl-ba-label--after">After</span>
              <span className="gl-ba-divider"><Icon name="chevron" size={14} /></span>
            </div>
            <p className="gl-transform-name">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
