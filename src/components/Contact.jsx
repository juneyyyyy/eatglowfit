function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <p className="section-label">Contact</p>
        <h2>Let's Start Your Wellness Journey</h2>
        <p className="section-subtitle">
          Ready to transform your relationship with food? Reach out to Arthi
          for a personalized consultation.
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>eatglowfit@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div>
              <h4>Phone</h4>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>United States (Virtual consultations available nationwide)</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📸</span>
            <div>
              <h4>Instagram</h4>
              <p>@eatglowfit</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <div>
              <h4>LinkedIn</h4>
              <p>
                <a href="https://www.linkedin.com/in/arthi-geetha-sundar-1540942b/" target="_blank" rel="noopener noreferrer">Arthi Geetha Sundar</a>
                {' · '}
                <a href="https://www.linkedin.com/company/eatglowfit-arthi/" target="_blank" rel="noopener noreferrer">Eat Glow Fit</a>
              </p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Tell me about your health goals..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
