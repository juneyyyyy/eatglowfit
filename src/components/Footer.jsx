function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo-icon">🏋️</span>
          <span className="logo-text">Eat Glow Fit</span>
          <p>with Arthi</p>
        </div>
        <p className="footer-tagline">
          Nourish your body. Glow from within. Feel your best.
        </p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/arthi-geetha-sundar-1540942b/" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
          <span className="footer-dot">·</span>
          <a href="https://www.linkedin.com/company/eatglowfit-arthi/" target="_blank" rel="noopener noreferrer" className="footer-social-link">Business Page</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Eat Glow Fit with Arthi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
