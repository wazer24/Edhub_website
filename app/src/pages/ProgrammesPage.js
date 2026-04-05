import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import VantaBackground from '../components/VantaBackground';

const programmes = [
  {
    title: 'JEE Mains & Advanced — 2-Year Integrated',
    icon: '⚡', color: 'rgba(255,51,51,0.12)',
    target: 'Students entering Class XI (PCM)',
    duration: '2 Years (Class XI & XII)',
    batch: 'June & August intake',
    highlights: ['Complete NCERT + advanced problem-solving', 'Weekly full-length JEE simulations', 'Dedicated mentor for each student', 'Board exam integration (HSC/CBSE)', 'AI-powered performance analytics'],
    outcomes: ['Target: AIR under 5000 in JEE Advanced', '99+ percentile in JEE Mains', '90%+ in XII Board exams'],
  },
  {
    title: 'JEE Mains & Advanced — 1-Year Intensive',
    icon: '🎯', color: 'rgba(255,51,51,0.12)',
    target: 'Students in Class XII or Droppers',
    duration: '1 Year',
    batch: 'June intake',
    highlights: ['Accelerated syllabus coverage', 'Daily 8-hour immersive program', 'Previous year paper analysis (20 years)', 'Mock test series — 30+ full-length tests', 'Special dropper batch with focused mentoring'],
    outcomes: ['Target: Sub-10,000 AIR in JEE Advanced', '98+ percentile in JEE Mains', 'Parallel board preparation'],
  },
  {
    title: 'NEET-UG — 2-Year Medical Program',
    icon: '🩺', color: 'rgba(255,51,51,0.12)',
    target: 'Students entering Class XI (PCB)',
    duration: '2 Years (Class XI & XII)',
    batch: 'June & August intake',
    highlights: ['NCERT-centric pedagogy — line-by-line coverage', 'Chapter-wise MCQ banks (10,000+ questions)', 'Biology diagram mastery workshops', 'Physics & Chemistry numerical drilling', 'Regular NEET-pattern full-length tests'],
    outcomes: ['Target: 650+ out of 720', 'Government medical college admission', 'Strong XII Board performance'],
  },
  {
    title: 'NEET-UG — 1-Year Intensive',
    icon: '💊', color: 'rgba(255,51,51,0.12)',
    target: 'XII students and NEET Repeaters',
    duration: '1 Year',
    batch: 'June intake',
    highlights: ['Rapid revision + deep practice', 'High-yield topic prioritization', 'Daily MCQ solving sessions (200+ per day)', 'Previous 10-year NEET paper analysis', 'Specialized repeater support program'],
    outcomes: ['Target: 600+ out of 720', 'Focus on high-weightage chapters', 'Comprehensive doubt resolution'],
  },
  {
    title: 'MHT-CET — Intensive & Crash Course',
    icon: '🏆', color: 'rgba(255,51,51,0.12)',
    target: 'XII students (PCM or PCB stream)',
    duration: '1 Year / 45-90 Days (Crash)',
    batch: 'June (Regular) | Jan & Mar (Crash)',
    highlights: ['Deep MHT-CET pattern analysis', 'HSC Board syllabus alignment', 'Chapter-wise weightage focused study', 'State-level topper strategies', 'PCM and PCB separate specialized batches'],
    outcomes: ['Target: 99+ state percentile', 'Top engineering/pharmacy/agriculture colleges', 'Maharashtra state quota maximization'],
  },
  {
    title: 'Foundation Course — Class 8th to 10th',
    icon: '📚', color: 'rgba(255,51,51,0.12)',
    target: 'Students in Class 8, 9, or 10',
    duration: '1-3 Years',
    batch: 'June intake',
    highlights: ['Strong conceptual foundation building', 'NTSE & Olympiad preparation (NSO, IMO, RMO)', 'Board exam excellence focus', 'Early competitive exam exposure', 'Reduced future academic pressure'],
    outcomes: ['NTSE scholarship qualification', 'Olympiad medals and certificates', '95%+ in Board exams', 'Seamless transition to JEE/NEET streams'],
  },
];

export default function ProgrammesPage() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <section className="page-hero">
        <VantaBackground />
        <div className="container">
          <span className="section-label">Academic Excellence</span>
          <h1>Our <span className="highlight">Programmes</span></h1>
          <p>Structured curricula designed for every exam, every ambition, every learner</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {programmes.map((p, i) => (
            <div className="programme-detail" key={i}>
              <div className="programme-header" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <div className="programme-header-left">
                  <div className="programme-icon" style={{ background: p.color }}>{p.icon}</div>
                  <div>
                    <h3>{p.title}</h3>
                    <div className="programme-meta">
                      <span>👤 {p.target}</span>
                      <span>⏱ {p.duration}</span>
                      <span>📅 {p.batch}</span>
                    </div>
                  </div>
                </div>
                <button className={`programme-toggle${openIdx === i ? ' open' : ''}`}>
                  <ChevronDown size={24} />
                </button>
              </div>

              <div className={`programme-body${openIdx === i ? ' open' : ''}`}>
                <div className="programme-body-grid">
                  <div>
                    <h4>Programme Highlights</h4>
                    <ul>
                      {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Expected Outcomes</h4>
                    <ul>
                      {p.outcomes.map((o, j) => <li key={j}>{o}</li>)}
                    </ul>
                    <div style={{ marginTop: '1.5rem' }}>
                      <Link to="/contact" className="btn btn-primary btn-sm">
                        Enquire Now <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Board Exam Message */}
      <section className="section" style={{ background: 'var(--navy-light)' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <span className="section-label">Board + Competitive Integration</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem',
            background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>
            We Never Compromise on Board Exams
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Every programme at Education Hub is designed to run parallel with HSC and CBSE board syllabi.
            Our integrated curriculum ensures that students excel in board examinations while preparing for
            competitive entrances — because we believe top ranks and top board marks are not mutually exclusive.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Programme Details <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
