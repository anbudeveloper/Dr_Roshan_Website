import implantImg from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 09_45_00 AM.png'
import rootImg from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 09_47_16 AM.png'
import alignerImg from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_15_23 AM.png'
import smileImg from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_15_33 AM.png'
import kidsImg from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_15_35 AM.png'
import ceramicImg from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_15_36 AM.png'

const treatments = [
  ['Dental Implants', implantImg],
  ['Root Canal Treatment', rootImg],
  ['Invisible Aligners', alignerImg],
  ['Smile Designing', smileImg],
  ['Kids Dentistry', kidsImg],
  ['Zirconia & Ceramic Teeth', ceramicImg],
]

function Treatments() {
  return (
    <section className="section treatments bg-white" id="treatments">
      <div className="container">
        <h2 className="section-title">Our Dental Treatments</h2>
        <div className="mt-12 grid grid-cols-6 gap-8 max-lg:grid-cols-3 max-sm:grid-cols-2">
          {treatments.map(([name, image], index) => (
            <article
              className="group animate-rise rounded-xl border border-transparent p-4 text-center transition duration-300 hover:-translate-y-2 hover:border-[#e8eef7] hover:bg-[#fbfdff] hover:shadow-[0_18px_38px_rgba(8,29,82,0.1)]"
              style={{ animationDelay: `${index * 90}ms` }}
              key={name}
            >
              <div className="mx-auto mb-5 grid h-[92px] w-[92px] place-items-center rounded-full bg-[#fff6f7] transition duration-300 group-hover:scale-110 group-hover:bg-[#fff0f2]">
                <img className="h-[76px] w-[76px] object-contain mix-blend-multiply drop-shadow-[0_10px_12px_rgba(255,38,56,0.1)]" src={image} alt={name} />
              </div>
              <h3 className="text-[14px] font-black leading-6 text-[#07133f]">{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments
