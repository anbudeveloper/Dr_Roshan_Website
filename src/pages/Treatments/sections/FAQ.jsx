import { useState } from 'react'
import Icon from '../../../shared/Icons'

export default function FAQ({ treatment }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="section bg-[#f8faff]">
      <div className="container max-w-3xl">
        <p className="eyebrow text-center mb-3">Got Questions?</p>
        <h2 className="section-title text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {treatment.faq.map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#eef2fb] bg-white overflow-hidden shadow-[0_2px_12px_rgba(8,29,82,0.05)]"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="text-[15px] font-black text-[#07133f]">{q}</span>
                <span
                  className="shrink-0 text-[#ff2638] transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'none' }}
                >
                  <Icon name="chevron" size={16} />
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '200px' : '0px' }}
              >
                <p className="px-6 pb-5 text-[14.5px] text-[#5a6a8a] leading-relaxed border-t border-[#f0f4ff] pt-4">
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
