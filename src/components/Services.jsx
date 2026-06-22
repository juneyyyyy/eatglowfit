const programs = [
  {
    number: '01',
    title: 'Coaching Program 1',
    description: 'Placeholder — describe this coaching program, what it includes, who it\'s for, and the expected outcomes.',
    link: 'https://buy.stripe.com/28EfZjflJbrYfGc3gZ8bS03',
  },
  {
    number: '02',
    title: 'Coaching Program 2',
    description: 'Placeholder — describe this coaching program, what it includes, who it\'s for, and the expected outcomes.',
    link: 'https://buy.stripe.com/8x228tflJcw29hO4l38bS02',
  },
  {
    number: '03',
    title: 'Coaching Program 3',
    description: 'Placeholder — describe this coaching program, what it includes, who it\'s for, and the expected outcomes.',
    link: 'https://buy.stripe.com/7sY9AVb5t2Vs3Xu4l38bS05',
  },
  {
    number: '04',
    title: '1-on-1 Packages',
    description: 'Placeholder — describe your personalized 1-on-1 coaching packages, available for individuals and couples.',
    link: 'https://buy.stripe.com/eVq4gB1uT9jQ51ydVD8bS04',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <p className="section-label">Programs</p>
        <h2>Coaching Programs</h2>
        <p className="section-subtitle">
          Placeholder — add a short intro about your coaching programs and
          what clients can expect.
        </p>
      </div>
      <div className="services-grid">
        {programs.map((program) => (
          <a
            key={program.number}
            href={program.link}
            target="_blank"
            rel="noopener noreferrer"
            className="service-card"
          >
            <span className="service-number">{program.number}</span>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <span className="service-cta">Learn More &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Services
