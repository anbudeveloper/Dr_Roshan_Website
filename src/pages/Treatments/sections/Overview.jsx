export default function Overview({ treatment, primaryImage, secondaryImage }) {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">

          {/* Text */}
          <div>
            <p className="eyebrow mb-3">Overview</p>
            <h2 className="section-title text-left mb-6">{treatment.overview.title}</h2>
            <p className="text-[#5a6a8a] text-[16px] leading-[1.8] mb-8">{treatment.overview.body}</p>

            <ul className="flex flex-col gap-3">
              {treatment.overview.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff0f2]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#ff2638" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[15px] font-semibold text-[#24314f]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dual image panel */}
          <div className="relative grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {/* Decorative blob */}
            <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#fff5f6] to-[#eef4ff] -rotate-2 -z-10" />

            <div className="overflow-hidden rounded-2xl shadow-lg row-span-2 max-sm:row-span-1">
              <img
                src={primaryImage}
                alt={treatment.name}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                style={{ minHeight: '260px' }}
              />
            </div>

            {secondaryImage && (
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={secondaryImage}
                  alt={`${treatment.name} treatment`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  style={{ minHeight: '120px' }}
                />
              </div>
            )}

            {/* Tag */}
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff2638] to-[#ff6b7a] p-4 text-center shadow-[0_8px_24px_rgba(255,38,56,0.3)]">
              <div>
                <p className="text-white font-black text-2xl leading-tight">{treatment.stats?.[0]?.value}</p>
                <p className="text-white/80 text-xs font-semibold mt-0.5">{treatment.stats?.[0]?.label}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
