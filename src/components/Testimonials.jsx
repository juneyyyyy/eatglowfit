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
            <svg className="testimonial-quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
            </svg>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.name.charAt(0)}</div>
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
