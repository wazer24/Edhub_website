import { Briefcase, BookOpen, UserCheck, Heart, ArrowRight } from 'lucide-react';
import VantaBackground from '../components/VantaBackground';
import { Link } from 'react-router-dom';

const jobs = [
  {
    title: "Senior Faculty - Physics",
    department: "Academics",
    location: "Pune branch / Hybrid",
    type: "Full-Time",
    desc: "Looking for an experienced educator capable of guiding JEE Advanced aspirants through complex mechanics and electromagnetism."
  },
  {
    title: "Student Counselor",
    department: "Admissions & Support",
    location: "Mumbai branch",
    type: "Full-Time",
    desc: "Guide prospective students and parents through our programs, providing empathetic mentorship and career mapping."
  },
  {
    title: "Subject Matter Expert (Biology)",
    department: "Content & Curriculum",
    location: "Remote",
    type: "Part-Time",
    desc: "Develop advanced test papers, mock exams, and video solutions tailored specifically to the latest NEET-UG pattern."
  },
  {
    title: "Center Admissions Manager",
    department: "Administration",
    location: "Nashik branch",
    type: "Full-Time",
    desc: "Manage the core operations and daily activities of our newest center, ensuring our premium standards are met."
  }
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px', textAlign: 'center', minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
        <VantaBackground />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span className="section-label">Join Our Mission</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>Shape the <span className="highlight" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Future</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            We're always looking for passionate educators, mentors, and operators who want to redefine test preparation in India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Work With Us?</h2>
            <p>Beyond competitive compensation, we offer an environment of profound impact.</p>
          </div>

          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,153,51,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <BookOpen size={30} color="var(--gold)" />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Academic Freedom</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We don't micromanage. Our faculty dictates the pedagogy and shapes the curriculum based on what actually works in the classroom.</p>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
               <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,153,51,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Heart size={30} color="var(--gold)" />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Impact Driven</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Every day you come to work, you are literally changing the trajectory of a student's life and career. The fulfillment is unmatched.</p>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
               <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,153,51,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <UserCheck size={30} color="var(--gold)" />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Premium Compensation</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We believe in paying top-of-market rates for tier-1 talent. Your growth grows linearly with the success of your batches.</p>
            </div>
          </div>

          <div className="divider"></div>

          <div style={{ marginTop: '4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2>Open Positions</h2>
              <span className="badge badge-teal">4 Openings Available</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              {jobs.map((job, idx) => (
                <div key={idx} style={{ background: 'var(--navy-light)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', transition: 'all 0.3s ease' }} className="job-card" onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  
                  <div style={{ flex: '1 1 500px' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span className="badge badge-gold">{job.department}</span>
                      <span className="badge badge-teal">{job.type}</span>
                    </div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{job.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      <Briefcase size={16} /> <strong>Location:</strong> {job.location}
                    </div>
                  </div>

                  <div>
                     <Link to="/contact" className="btn btn-outline" style={{ display: 'inline-flex' }}>
                       Apply Now <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                     </Link>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
