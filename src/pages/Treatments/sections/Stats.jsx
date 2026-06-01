export default function Stats({ treatment }) {
  return (
    <section className="border-y border-[#eef2fb] bg-white">
      <div className="container">
        <div className="grid grid-cols-4 divide-x divide-[#eef2fb] max-sm:grid-cols-2 max-sm:divide-x-0 max-sm:gap-0">
          {treatment.stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center max-sm:border-b max-sm:border-[#eef2fb] animate-rise"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="text-[38px] font-black leading-none text-[#ff2638] mb-1">
                {value}
              </span>
              <span className="text-[13px] font-semibold text-[#5a6a8a] uppercase tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
