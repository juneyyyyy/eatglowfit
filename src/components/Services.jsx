import { Check } from './Icons'

const programs = [
  {
    number: '01',
    title: 'Personalized 1:1 Coaching',
    subtitle: 'Individual or Couples',
    description: 'A fully customized 12-week coaching experience designed for busy people or those with dietary restrictions who want a simple, structured plan that removes all the guesswork.',
    features: [
      '60-90 min onboarding consultation',
      'Weekly personalized meal plans',
      'Weekly 1:1 coaching calls (30 min)',
      'Daily WhatsApp chat support',
      'Customized workout guidance',
      'Lifestyle & habit integration',
    ],
    link: 'https://buy.stripe.com/eVq4gB1uT9jQ51ydVD8bS04',
    highlighted: true,
  },
  {
    number: '02',
    title: 'Group Coaching Program',
    subtitle: 'Minimum 3 Members',
    description: 'A structured, supportive 12-week coaching experience for friends or family with similar goals who want accountability, sustainable weight loss, and weekly guidance.',
    features: [
      'Comprehensive 1:1 kickstart call',
      'Weekly group check-ins',
      'Weekly meal plans',
      'Weekly live Zoom coaching calls',
      'Lifestyle & fitness challenges',
      'WhatsApp chat support',
    ],
    link: 'https://buy.stripe.com/28EfZjflJbrYfGc3gZ8bS03',
    highlighted: false,
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <p className="section-label">Programs</p>
        <h2>Signature 12-Week Coaching</h2>
        <p className="section-subtitle">
          Choose your level of support — both programs are built around your real life,
          your schedule, and the foods you already love.
        </p>
      </div>
      <div className="programs-grid">
        {programs.map((program) => (
          <div
            key={program.number}
            className={`program-card${program.highlighted ? ' program-card--highlighted' : ''}`}
          >
            {program.highlighted && <span className="program-badge">Most Popular</span>}
            <span className="service-number">{program.number}</span>
            <h3>{program.title}</h3>
            <p className="program-subtitle">{program.subtitle}</p>
            <p className="program-description">{program.description}</p>
            <ul className="program-features">
              {program.features.map((feature, i) => (
                <li key={i}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={program.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${program.highlighted ? 'btn-primary' : 'btn-outline'} program-cta`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
