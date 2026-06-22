const testimonials = [
  {
    name: 'Client Name',
    text: 'Placeholder testimonial — replace with a real client review about their experience working with Arthi.',
    role: 'Role / Title',
  },
  {
    name: 'Client Name',
    text: 'Placeholder testimonial — replace with a real client review about their health and wellness journey.',
    role: 'Role / Title',
  },
  {
    name: 'Client Name',
    text: 'Placeholder testimonial — replace with a real client review about the results they achieved.',
    role: 'Role / Title',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-header">
        <p className="section-label">Testimonials</p>
        <h2>What Clients Say</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
