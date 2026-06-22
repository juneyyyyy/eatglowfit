import { Play } from './Icons'

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
            <span>Photo</span>
          </div>
        </div>
        <div className="about-text">
          <p>
            Placeholder bio — replace with Arthi's story, background, certifications,
            and what inspired her to start Eat Glow Fit. Share your passion for
            helping clients transform their health through nutrition and fitness.
          </p>
          <p>
            Placeholder — describe your coaching philosophy, your approach to
            wellness, and what makes Eat Glow Fit different. Mention your
            experience and the results your clients have achieved.
          </p>
          <div className="about-video">
            <a href="https://youtu.be/5XIb8SG0Zww" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Play size={16} /> Watch My Story
            </a>
          </div>
          <div className="about-pills">
            <span className="pill">Meal Plans</span>
            <span className="pill">Fitness Coaching</span>
            <span className="pill">Glow & Wellness</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
