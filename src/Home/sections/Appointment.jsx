import Icon from '../../shared/Icons'

const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.848683740013!2d78.68030259999999!3d10.8228896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf54fa2610a9b%3A0x8cfb3b7200c4b44e!2sDr%20Roshan%27s%20Dental%20Care!5e0!3m2!1sen!2sin!4v1780031365197!5m2!1sen!2sin"

function Appointment() {
  return (
    <section className="relative overflow-hidden bg-[#f6f9fe] py-14" id="appointment">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="container relative">
        <div className="mb-8 flex items-end justify-between gap-6 max-md:block">
          <div>
            <p className="eyebrow">Visit Our Clinic</p>
            <h2 className="m-0 text-[34px] font-black leading-tight text-[#071b57] max-sm:text-[28px]">
              Easy to Reach. Quick to Book.
            </h2>
          </div>
          <p className="max-w-[460px] text-[15px] font-semibold leading-7 text-[#43506b] max-md:mt-3">
            Find Dr.Roshan's Dental Care on the map and send your appointment request in one simple step.
          </p>
        </div>

        <div className="grid grid-cols-[.92fr_1.08fr] gap-8 max-lg:grid-cols-1">
          <div className="overflow-hidden rounded-2xl border border-[#e3eaf5] bg-white shadow-[0_18px_45px_rgba(8,29,82,0.1)]">
            <div className="flex items-center justify-between gap-4 border-b border-[#e8eef7] px-5 py-4 max-sm:block">
              <div>
                <h3 className="m-0 text-[19px] font-black text-[#071b57]">Dr.Roshan's Dental Care</h3>
                <p className="mt-1 text-[13px] font-semibold leading-5 text-[#5a6680]">Thillai Nagar Main Road, Trichy</p>
              </div>
              <a className="mt-0 inline-flex items-center gap-2 rounded-full bg-[#fff0f2] px-4 py-2 text-[13px] font-black text-[#ff2638] max-sm:mt-3" href="tel:+919443164101">
                <Icon name="phone" size={16} /> Call Now
              </a>
            </div>
            <iframe
              className="h-[315px] w-full max-sm:h-[270px]"
              src={mapUrl}
              title="Dr Roshan's Dental Care location map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="grid grid-cols-3 gap-3 p-4 max-sm:grid-cols-1">
              <div className="rounded-xl bg-[#f6f9fe] p-4">
                <strong className="block text-[15px] font-black text-[#071b57]">Clinic Hours</strong>
                <span className="mt-1 block text-[13px] font-semibold leading-5 text-[#5a6680]">Mon - Sat, 9 AM - 8 PM</span>
              </div>
              <div className="rounded-xl bg-[#fff6f7] p-4">
                <strong className="block text-[15px] font-black text-[#071b57]">Easy Parking</strong>
                <span className="mt-1 block text-[13px] font-semibold leading-5 text-[#5a6680]">Central Trichy access</span>
              </div>
              <div className="rounded-xl bg-[#f6f9fe] p-4">
                <strong className="block text-[15px] font-black text-[#071b57]">Call Support</strong>
                <span className="mt-1 block text-[13px] font-semibold leading-5 text-[#5a6680]">+91 94431 64101</span>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-[#e3eaf5] bg-white p-7 shadow-[0_18px_45px_rgba(8,29,82,0.1)] max-sm:p-5">
            <div className="mb-7 flex items-center gap-5">
              <span className="grid h-[64px] w-[64px] shrink-0 place-items-center rounded-xl bg-gradient-to-b from-[#0c2a72] to-[#06194e] text-white">
                <Icon name="calendar" size={30} />
              </span>
              <div>
                <h2 className="m-0 text-[28px] font-black leading-tight text-[#071b57]">Book Your Appointment</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#43506b]">Fill in your details and our team will contact you shortly.</p>
              </div>
            </div>

            <div className="grid gap-4">
              <label className="grid gap-2 text-xs font-black text-[#142452]">
                <span>Your Name</span>
                <input className="h-12 rounded-md border border-[#dfe7f3] px-4 outline-none transition focus:border-[#173987] focus:ring-4 focus:ring-[#173987]/10" type="text" placeholder="Enter your name" />
              </label>
              <label className="grid gap-2 text-xs font-black text-[#142452]">
                <span>Phone Number</span>
                <input className="h-12 rounded-md border border-[#dfe7f3] px-4 outline-none transition focus:border-[#173987] focus:ring-4 focus:ring-[#173987]/10" type="tel" placeholder="Enter phone number" />
              </label>
              <label className="grid gap-2 text-xs font-black text-[#142452]">
                <span>Select Treatment</span>
                <select className="h-12 rounded-md border border-[#dfe7f3] px-4 outline-none transition focus:border-[#173987] focus:ring-4 focus:ring-[#173987]/10" defaultValue="">
                  <option value="" disabled>Select treatment</option>
                  <option>Dental Implants</option>
                  <option>Root Canal Treatment</option>
                  <option>Invisible Aligners</option>
                  <option>Smile Designing</option>
                  <option>Kids Dentistry</option>
                </select>
              </label>
              <label className="grid gap-2 text-xs font-black text-[#142452]">
                <span>Preferred Date</span>
                <input className="h-12 rounded-md border border-[#dfe7f3] px-4 outline-none transition focus:border-[#173987] focus:ring-4 focus:ring-[#173987]/10" type="date" />
              </label>
              <button className="primary-btn mt-2 min-h-[52px] w-full" type="submit">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Appointment
