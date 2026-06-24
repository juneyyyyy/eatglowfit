const testimonials = [
  {
    name: 'Sowjanya K.',
    text: 'I started with Arthi\'s 12-week diet plan, which is truly sustainable because she customizes it based on what we already eat, just with measured portions. Each week, she adjusts the diet accordingly, making it easier to maintain. Combined with her amazing strength training, overall body workouts, and yoga, this diet helped me lose 20 pounds in 12 weeks after struggling with my weight for years.',
    role: 'Lost 20 lbs in 12 Weeks',
  },
  {
    name: 'Anush K.',
    text: 'Weight loss is something I have been trying to achieve for a while, but always found it difficult to set up a diet and workout routine. With Arthi\'s help, I was able to lose 20 pounds while eating the foods I love and maintaining a workout regimen that works with my busy schedule. Thank you Arthi!',
    role: 'Lost 20 lbs',
  },
  {
    name: 'Nithya J.',
    text: 'What sets Arthi apart is her compassionate approach and dedication. She takes the time to explain the science behind dietary choices, empowering clients to make informed decisions. Her support and encouragement have made a significant impact on my journey toward better health — it hasn\'t just been about the numbers on the scale, it\'s been a transformative experience.',
    role: 'Health Transformation',
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
