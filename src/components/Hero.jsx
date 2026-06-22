function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-tagline">Nutrition & Wellness</p>
        <h1>Eat Glow Fit <span className="hero-highlight">with Arthi</span></h1>
        <p className="hero-description">
          Blending traditional wisdom with modern nutrition science to help you
          nourish your body, glow from within, and feel your best every day.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo('services')}>
            Explore Services
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
            Book a Consultation
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-circle">
          <span className="hero-emoji">🥗</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
