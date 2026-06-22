const tips = [
  {
    emoji: '🥛',
    title: 'Indian Fermented Foods Your Gut Will Love',
    excerpt:
      'Before kimchi and kombucha went mainstream, Indian kitchens already had curd, buttermilk (chaas), ragi ambali, and more. These traditional fermented foods are rich in beneficial lactic acid bacteria that support digestion and gut health.',
    tag: 'Gut Health',
  },
  {
    emoji: '🌾',
    title: 'Why Traditional Grains Matter',
    excerpt:
      'Millets like ragi, jowar, and bajra were staples in Indian diets for centuries. They\'re naturally gluten-friendly, rich in fiber, and packed with micronutrients. Rediscovering these grains can transform your meals.',
    tag: 'Nutrition',
  },
  {
    emoji: '🍋',
    title: 'The Power of Fermented Pickles',
    excerpt:
      'Traditional fermented pickles — salted mango, lemon, and gooseberry — do more than add flavor. The fermentation process can reduce anti-nutrients, improve digestibility, and enhance the availability of certain nutrients.',
    tag: 'Traditional Foods',
  },
  {
    emoji: '🫖',
    title: 'Hydration Beyond Water',
    excerpt:
      'Buttermilk, kanji, coconut water, and herbal infusions have been part of Indian hydration traditions. They provide electrolytes, probiotics, and flavor — making it easier to stay well-hydrated throughout the day.',
    tag: 'Wellness',
  },
]

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="section-header">
        <p className="section-label">Tips & Insights</p>
        <h2>Nutrition Wisdom</h2>
        <p className="section-subtitle">
          Traditional foods, modern science. Practical tips for everyday
          wellness.
        </p>
      </div>
      <div className="blog-grid">
        {tips.map((tip) => (
          <article key={tip.title} className="blog-card">
            <div className="blog-card-emoji">{tip.emoji}</div>
            <span className="blog-tag">{tip.tag}</span>
            <h3>{tip.title}</h3>
            <p>{tip.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
