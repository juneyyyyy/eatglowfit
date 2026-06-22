const services = [
  {
    icon: '🥗',
    title: 'Personalized Meal Plans',
    description:
      'Custom nutrition plans designed around your health goals, dietary preferences, and lifestyle. Rooted in traditional foods you already love.',
  },
  {
    icon: '🌱',
    title: 'Gut Health Guidance',
    description:
      'Discover the power of fermented foods like curd, buttermilk, kanji, and idli batter. Learn to support your microbiome with foods from your own kitchen.',
  },
  {
    icon: '✨',
    title: 'Glow & Wellness Programs',
    description:
      'Holistic programs focusing on skin health, energy, and overall vitality through nutrition, hydration, and mindful eating practices.',
  },
  {
    icon: '📋',
    title: 'One-on-One Consultations',
    description:
      'Personalized sessions to understand your unique needs, address concerns, and create a sustainable path to better health.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Nutrition',
    description:
      'Guidance for the whole family — from kids to elders. Make mealtimes healthier and more enjoyable with practical, realistic advice.',
  },
  {
    icon: '📱',
    title: 'Online Programs',
    description:
      'Flexible virtual consultations and group programs so you can access expert nutrition guidance from anywhere.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <p className="section-label">Services</p>
        <h2>How Arthi Can Help You</h2>
        <p className="section-subtitle">
          From personalized meal plans to gut health guidance, find the support
          you need for your wellness journey.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
