export default function TreatmentGallery({ images, treatment }) {
  const [main, ...rest] = images

  return (
    <section className="section bg-white">
      <div className="container">
        <p className="eyebrow text-center mb-3">Our Clinic</p>
        <h2 className="section-title text-center mb-4">
          {treatment.name} at Dr. Roshan's
        </h2>
        <p className="text-center text-[#5a6a8a] mb-12 max-w-xl mx-auto">
          State-of-the-art equipment, experienced specialists, and a comfortable environment — all in one place.
        </p>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1" style={{ minHeight: '420px' }}>
          {/* Main large image — spans 2 rows */}
          <div className="col-span-1 row-span-2 max-lg:col-span-2 max-lg:row-span-1 overflow-hidden rounded-2xl max-sm:col-span-1">
            <img
              src={main}
              alt={`${treatment.name} at Dr. Roshan's Dental Care Trichy`}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
              style={{ minHeight: '320px' }}
            />
          </div>

          {/* Secondary images */}
          {rest.slice(0, 4).map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`${treatment.name} clinic photo ${i + 2}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                style={{ minHeight: '190px' }}
              />
            </div>
          ))}
        </div>

        {/* Badge row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {[
            'Advanced Technology',
            'Certified Specialists',
            'Sterile & Safe Environment',
            'Comfortable Experience',
          ].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-[#eef2fb] bg-[#f8faff] px-4 py-2 text-[13px] font-bold text-[#24314f]"
            >
              <span className="h-2 w-2 rounded-full bg-[#ff2638]" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
