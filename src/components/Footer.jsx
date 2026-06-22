import { Instagram, YouTube, Facebook, LinkedIn } from './Icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/logo.jpg" alt="Eat Glow Fit with Arthi" className="footer-logo" />
        <p className="footer-tagline">
          Eat better. Glow from within. Get fit.
        </p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/eatglowfit.arthi" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://www.youtube.com/@eatglowfit_arthi" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="YouTube">
            <YouTube size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557344499892" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://www.linkedin.com/company/eatglowfit-arthi/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
            <LinkedIn size={20} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Eat Glow Fit with Arthi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
