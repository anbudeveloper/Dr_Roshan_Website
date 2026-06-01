export default function Benefits({ treatment }) {
  return (
    <section className="section bg-white">
      <div className="container">
        <p className="eyebrow text-center mb-3">Why Choose This</p>
        <h2 className="section-title text-center mb-12">
          Benefits of {treatment.name}
        </h2>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {treatment.benefits.map((benefit, i) => (
            <div
              key={benefit}
              className="flex items-start gap-4 rounded-2xl border border-[#eef2fb] bg-[#f8faff] p-5 animate-rise"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff2638] to-[#ff6b7a] shadow-[0_4px_12px_rgba(255,38,56,0.25)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-[14.5px] font-semibold text-[#24314f] leading-snug">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
