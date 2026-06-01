const icons = [
  /* person */ <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  /* star   */ <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  /* heart  */ <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  /* check  */ <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  /* clock  */ <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  /* shield */ <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
]

export default function IdealFor({ treatment }) {
  return (
    <section className="section bg-[#f8faff]">
      <div className="container">
        <p className="eyebrow text-center mb-3">Right For You?</p>
        <h2 className="section-title text-center mb-4">Who Is {treatment.name} For?</h2>
        <p className="text-center text-[#5a6a8a] mb-12 max-w-xl mx-auto">
          This treatment is especially recommended for the following types of patients.
        </p>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {treatment.idealFor.map(({ title, desc }, i) => (
            <div
              key={title}
              className="group rounded-2xl bg-white border border-[#eef2fb] p-6 shadow-[0_2px_16px_rgba(8,29,82,0.05)] hover:shadow-[0_8px_32px_rgba(255,38,56,0.1)] hover:border-[#ffd6da] transition duration-300 animate-rise"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f2] text-[#ff2638] group-hover:bg-[#ff2638] group-hover:text-white transition duration-300">
                {icons[i % icons.length]}
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
