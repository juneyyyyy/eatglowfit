import { useState, useEffect } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand" onClick={() => scrollTo('hero')}>
        <img src="/logo.jpg" alt="Eat Glow Fit" className="navbar-logo" />
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
        <li><button onClick={() => scrollTo('services')}>Programs</button></li>
        <li><button onClick={() => scrollTo('testimonials')}>Testimonials</button></li>
        <li>
          <a href="https://calendly.com/glow-fit-with-me/30min" target="_blank" rel="noopener noreferrer" className="nav-cta">
            Book a Call
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
