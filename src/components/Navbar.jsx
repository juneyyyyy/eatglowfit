import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => scrollTo('hero')}>
        <span className="logo-icon">🏋️</span>
        <span className="logo-text">Eat Glow Fit</span>
      </div>
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><button onClick={() => scrollTo('about')}>About</button></li>
        <li><button onClick={() => scrollTo('services')}>Services</button></li>
        <li><button onClick={() => scrollTo('blog')}>Tips</button></li>
        <li><button onClick={() => scrollTo('testimonials')}>Testimonials</button></li>
        <li><button onClick={() => scrollTo('contact')} className="nav-cta">Get in Touch</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
