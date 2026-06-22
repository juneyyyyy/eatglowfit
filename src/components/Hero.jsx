function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <img src="/logo.jpg" alt="Eat Glow Fit with Arthi" className="hero-logo" />
        <p className="hero-description">
          Personalized coaching to help you eat better, glow from within, and
          get fit — with programs designed around your lifestyle and goals.
        </p>
        <div className="hero-buttons">
          <a href="https://calendly.com/glow-fit-with-me/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book a Free Clarity Call
          </a>
          <button className="btn btn-secondary" onClick={() => scrollTo('services')}>
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
