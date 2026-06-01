export default function Procedure({ treatment }) {
  return (
    <section className="section bg-[#f8faff]">
      <div className="container">
        <p className="eyebrow text-center mb-3">Step by Step</p>
        <h2 className="section-title text-center mb-4">How It Works</h2>
        <p className="text-center text-[#5a6a8a] mb-12 max-w-xl mx-auto">
          A clear, comfortable process from your first consultation to your final smile.
        </p>

        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {treatment.procedure.map(({ step, title, desc }, i) => (
            <div
              key={step}
              className="relative rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(8,29,82,0.07)] border border-[#eef2fb] animate-rise"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Connector line (desktop) */}
              {i < treatment.procedure.length - 1 && (
                <span className="absolute top-10 -right-3 z-10 hidden w-6 border-t-2 border-dashed border-[#ffc8cc] lg:block" />
              )}

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff2638] to-[#ff6b7a] text-white font-black text-sm shadow-[0_4px_12px_rgba(255,38,56,0.3)]">
                {step}
              </div>
              <h3 className="text-[15px] font-black text-[#07133f] mb-2">{title}</h3>
              <p className="text-[13.5px] text-[#5a6a8a] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
