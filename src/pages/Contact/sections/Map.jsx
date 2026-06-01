const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.848683740013!2d78.68030259999999!3d10.8228896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf54fa2610a9b%3A0x8cfb3b7200c4b44e!2sDr%20Roshan%27s%20Dental%20Care!5e0!3m2!1sen!2sin!4v1780031365197!5m2!1sen!2sin'

export default function Map() {
  return (
    <section className="ct-map">
      <div className="container">
        <div className="ab-section-head">
          <p className="eyebrow">Location</p>
          <h2 className="section-title lined">Find Us Easily</h2>
        </div>

        <div className="ct-map__wrap">
          <div className="ct-map__info">
            <strong>Dr. Roshan's Dental Care</strong>
            <p>No.34, First Floor, Thillai Nagar Main Road,<br />Trichy - 620 018, Tamil Nadu, India.</p>
            <a
              href="https://maps.google.com/?q=Dr+Roshan's+Dental+Care+Trichy"
              target="_blank"
              rel="noopener noreferrer"
            >
              View larger map
            </a>
          </div>
          <iframe
            src={mapUrl}
            title="Dr Roshan's Dental Care location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
