import { Calendar, WhatsApp, Instagram, YouTube, Facebook, LinkedIn } from './Icons'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <p className="section-label">Get Started</p>
        <h2>Ready to Transform?</h2>
        <p className="section-subtitle">
          Book a free 30-minute clarity call or send a message — let's talk about your goals.
        </p>
      </div>
      <div className="contact-actions">
        <a
          href="https://calendly.com/glow-fit-with-me/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action-card"
        >
          <div className="contact-action-icon-wrap">
            <Calendar size={28} />
          </div>
          <h3>Book a Free Clarity Call</h3>
          <p>Schedule a 30-minute call to discuss your goals and find the right program for you.</p>
          <span className="contact-action-btn">Book Now &rarr;</span>
        </a>
        <a
          href="https://wa.me/message/P4GGRLGGGNYHH1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action-card"
        >
          <div className="contact-action-icon-wrap whatsapp">
            <WhatsApp size={28} />
          </div>
          <h3>Message on WhatsApp</h3>
          <p>Have a quick question? Send a message and I'll get back to you as soon as I can.</p>
          <span className="contact-action-btn">Message Now &rarr;</span>
        </a>
      </div>
      <div className="contact-socials">
        <a href="https://www.instagram.com/eatglowfit.arthi" target="_blank" rel="noopener noreferrer" className="social-link">
          <Instagram size={18} /> Instagram
        </a>
        <a href="https://www.youtube.com/@eatglowfit_arthi" target="_blank" rel="noopener noreferrer" className="social-link">
          <YouTube size={18} /> YouTube
        </a>
        <a href="https://www.facebook.com/profile.php?id=61557344499892" target="_blank" rel="noopener noreferrer" className="social-link">
          <Facebook size={18} /> Facebook
        </a>
        <a href="https://www.linkedin.com/in/arthi-geetha-sundar-1540942b/" target="_blank" rel="noopener noreferrer" className="social-link">
          <LinkedIn size={18} /> LinkedIn
        </a>
        <a href="https://www.linkedin.com/company/eatglowfit-arthi/" target="_blank" rel="noopener noreferrer" className="social-link">
          <LinkedIn size={18} /> Business Page
        </a>
      </div>
    </section>
  )
}

export default Contact
