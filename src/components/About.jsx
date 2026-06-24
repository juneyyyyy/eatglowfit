import { Play } from './Icons'
import arthiPhoto from '../assets/arthi.jpg'

function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <p className="section-label">About</p>
        <h2>Meet Arthi</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={arthiPhoto} alt="Eat Glow Fit Coaching" className="about-photo" />
        </div>
        <div className="about-text">
          <p>
            I know what it feels like to struggle — to juggle a demanding career, a busy
            family life, and still try to show up for your own health. That struggle is
            exactly what led me to coaching. I needed guidance myself, and when I found
            the right approach, everything changed.
          </p>
          <p>
            Now I help working professionals who feel the same way. My focus is on
            realistic, sustainable plans that fit into your actual lifestyle — not an
            imaginary one. I've dedicated myself to integrating balanced nutrition and
            effective workouts into the rhythm of a busy life, because I believe taking
            care of yourself shouldn't require giving up everything else.
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
