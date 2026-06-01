import { FaCheckCircle } from 'react-icons/fa'
import Icon from '../../../shared/Icons'
import doctorImg from '../../../assets/Images/Home/ChatGPT Image May 29, 2026, 09_45_00 AM.png'

const points = [
  'Specialist in Dental Implants & Advanced Procedures',
  'Expert in Cosmetic & Restorative Dentistry',
  'Continuous Training in Modern Dentistry',
  'Committed to Painless & Comfortable Treatment',
]

export default function DoctorProfile() {
  return (
    <section className="section ab-doctor">
      <div className="container ab-doctor__grid">

        <div className="ab-doctor__img">
          <img src={doctorImg} alt="Dr. G. Shahul Hameed" />
        </div>

        <div className="ab-doctor__copy">
          <p className="eyebrow">Meet Our Chief Dental Surgeon</p>
          <h2>Dr. G. Shahul Hameed B.D.S.,</h2>
          <p className="ab-doctor__role">Consultant Dental Surgeon</p>
          <p>With over 15+ years of clinical experience, Dr. Shahul Hameed has treated thousands of patients with expertise in implantology, root canal treatment, cosmetic dentistry and smile makeovers.</p>
          <ul className="ab-doctor__points">
            {points.map((pt) => (
              <li key={pt}>
                <FaCheckCircle color="var(--red)" size={16} />
                {pt}
              </li>
            ))}
          </ul>
          <a className="primary-btn" href="#contact">
            Book Consultation <Icon name="arrow" size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}
