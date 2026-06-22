function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <p className="section-label">About</p>
        <h2>Meet Arthi</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="about-image-placeholder">
            <span>🧑‍⚕️</span>
          </div>
        </div>
        <div className="about-text">
          <p>
            Arthi is a passionate nutrition and wellness consultant who believes that
            the best health solutions often come from the wisdom of our own kitchens.
            With a deep understanding of both traditional Indian food practices and
            modern nutritional science, she helps clients rediscover the power of
            wholesome, time-tested foods.
          </p>
          <p>
            At <strong>Eat Glow Fit</strong>, the philosophy is simple: nourish your
            body with real, whole foods that have sustained generations. From the
            gut-friendly fermented foods of Indian kitchens to balanced meal plans
            tailored to your unique needs, Arthi guides you on a journey to better
            health without fads or extremes.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-icon">🌿</span>
              <span className="stat-label">Holistic Approach</span>
            </div>
            <div className="stat">
              <span className="stat-icon">🍽️</span>
              <span className="stat-label">Traditional Wisdom</span>
            </div>
            <div className="stat">
              <span className="stat-icon">💪</span>
              <span className="stat-label">Science-Backed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
