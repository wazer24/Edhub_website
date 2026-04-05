import { useState } from 'react';
import VantaBackground from '../components/VantaBackground';

const departments = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology'];

const faculty = [
  {
    name: 'Dr. Rajesh Sharma', dept: 'Physics', initials: 'RS', emoji: '⚛️',
    qual: 'Ph.D. Physics, IIT Kanpur', exp: '18 years',
    achievement: 'Mentored 120+ students to AIR under 1000 in JEE Advanced',
    quote: 'Physics is not about formulas — it\'s about understanding nature. I teach students to visualize before they calculate.',
  },
  {
    name: 'Prof. Anita Deshmukh', dept: 'Chemistry', initials: 'AD', emoji: '🧪',
    qual: 'M.Sc. Chemistry, IIT Bombay', exp: '15 years',
    achievement: 'Developed proprietary Organic Chemistry reaction mapping system',
    quote: 'Organic Chemistry becomes intuitive once students understand electron movement. My goal is to make reactions predictable, not memorizable.',
  },
  {
    name: 'Prof. Vikram Iyer', dept: 'Mathematics', initials: 'VI', emoji: '📐',
    qual: 'M.Sc. Mathematics, ISI Kolkata', exp: '20 years',
    achievement: '35+ students scored 100/100 in JEE Mains Mathematics',
    quote: 'Mathematics rewards persistence and pattern recognition. I train students to see the elegant shortcut in every complex problem.',
  },
  {
    name: 'Dr. Priya Nair', dept: 'Biology', initials: 'PN', emoji: '🧬',
    qual: 'Ph.D. Molecular Biology, TIFR', exp: '14 years',
    achievement: 'Students averaged 340/360 in NEET Biology under her guidance',
    quote: 'NCERT is the Bible for NEET Biology. I teach line-by-line mastery — every diagram, every footnote, every assertion-reason.',
  },
  {
    name: 'Prof. Suresh Kulkarni', dept: 'Physics', initials: 'SK', emoji: '🔭',
    qual: 'M.Tech, IIT Delhi', exp: '16 years',
    achievement: 'Specialist in Mechanics & Electromagnetism for JEE Advanced',
    quote: 'The beauty of Physics lies in its ability to explain the complex through simple laws. I ensure my students see that beauty.',
  },
  {
    name: 'Dr. Kavita Patil', dept: 'Chemistry', initials: 'KP', emoji: '⚗️',
    qual: 'Ph.D. Physical Chemistry, NCL Pune', exp: '12 years',
    achievement: 'Pioneered CBT-based chemistry assessment at EduHub',
    quote: 'Physical Chemistry is where math meets chemistry. Mastering it means mastering both disciplines simultaneously.',
  },
  {
    name: 'Prof. Amit Joshi', dept: 'Mathematics', initials: 'AJ', emoji: '∑',
    qual: 'M.Sc. Applied Mathematics, IIT Madras', exp: '13 years',
    achievement: 'Created the "Calculus Intuition" module used by 5000+ students',
    quote: 'Calculus is the language of change. Once students speak this language fluently, JEE Advanced mathematics becomes a conversation, not a battle.',
  },
  {
    name: 'Dr. Sneha Rao', dept: 'Biology', initials: 'SR', emoji: '🔬',
    qual: 'MBBS, KEM Hospital + Ph.D.', exp: '10 years',
    achievement: 'Former NEET-UG AIR 112 — teaches from lived exam experience',
    quote: 'Having walked the NEET path myself, I know exactly what examiners look for. I teach students to think like the question setter.',
  },
  {
    name: 'Prof. Nikhil Thakur', dept: 'Physics', initials: 'NT', emoji: '🌊',
    qual: 'M.Sc. Physics, BHU', exp: '11 years',
    achievement: 'MHT-CET Physics specialist — 200+ state top-100 students',
    quote: 'MHT-CET Physics has its own character. Understanding the state exam pattern is as crucial as understanding the subject itself.',
  },
];

export default function FacultyPage() {
  const [activeDept, setActiveDept] = useState('All');
  const filtered = activeDept === 'All' ? faculty : faculty.filter(f => f.dept === activeDept);

  return (
    <>
      <section className="page-hero">
        <VantaBackground />
        <div className="container">
          <span className="section-label">Pedagogical Authority</span>
          <h1>Our <span className="highlight">Faculty</span></h1>
          <p>Expert educators from IITs, IISc, TIFR, and premier institutions — the minds behind the results</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faculty-tabs">
            {departments.map(dept => (
              <button key={dept} className={`results-tab${activeDept === dept ? ' active' : ''}`} onClick={() => setActiveDept(dept)}>
                {dept}
              </button>
            ))}
          </div>

          <div className="faculty-grid">
            {filtered.map((f, i) => (
              <div className="faculty-card" key={i}>
                <div className="faculty-card-img">
                  <span>{f.emoji}</span>
                  <span className="faculty-dept badge badge-gold">{f.dept}</span>
                </div>
                <div className="faculty-card-body">
                  <h3>{f.name}</h3>
                  <div className="faculty-qual">{f.qual}</div>
                  <div className="faculty-exp">📅 {f.exp} of teaching experience</div>
                  <div className="faculty-achievement">🏆 {f.achievement}</div>
                  <div className="faculty-quote">"{f.quote}"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background: 'var(--navy-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
          <span className="section-label">Leadership</span>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem',
            background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>
            50+ Faculty Members Across 4 Core Departments
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Every faculty member at Education Hub undergoes rigorous screening and continuous training.
            Our teaching team collectively holds 200+ years of classroom experience and has mentored
            15,000+ students to success in competitive examinations.
          </p>
        </div>
      </section>
    </>
  );
}
