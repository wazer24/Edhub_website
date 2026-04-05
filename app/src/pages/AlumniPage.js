import { GraduationCap, MapPin, Building, Globe, ArrowRight } from 'lucide-react';
import VantaBackground from '../components/VantaBackground';

const alumniData = [
  {
    name: "Dr. Siddharth Rao",
    batch: "2016-2018",
    college: "AIIMS Delhi",
    current: "Resident Surgical Oncology",
    quote: "Education Hub didn't just teach me physics and chemistry; it taught me how to think clinically and critically under immense pressure.",
    initials: "SR"
  },
  {
    name: "Ananya Sharma",
    batch: "2018-2020",
    college: "IIT Bombay",
    current: "Software Engineer at Google",
    quote: "The personalized doubt clarification sessions were the game changer for my JEE Advanced preparation.",
    initials: "AS"
  },
  {
    name: "Rahul Desai",
    batch: "2019-2021",
    college: "VJTI Mumbai",
    current: "Data Scientist at Microsoft",
    quote: "The MHT-CET targeted modules and mock tests helped me secure a 99.9 percentile easily.",
    initials: "RD"
  },
  {
    name: "Neha Patel",
    batch: "2017-2019",
    college: "AFMC Pune",
    current: "Captain, Army Medical Corps",
    quote: "My mentors at Education Hub were like family. They guided me through both the academic and mental hurdles.",
    initials: "NP"
  },
  {
    name: "Karan Mehta",
    batch: "2020-2022",
    college: "BITS Pilani",
    current: "Product Manager Intern",
    quote: "The small batch size meant I couldn't hide in the back. I was constantly pushed to perform at my absolute best.",
    initials: "KM"
  },
  {
    name: "Pooja Singh",
    batch: "2015-2017",
    college: "NIT Trichy",
    current: "Senior Analyst at McKinsey",
    quote: "A phenomenal environment that perfectly balanced extreme competitiveness with incredible peer support.",
    initials: "PS"
  }
];

export default function AlumniPage() {
  return (
    <>
      <section className="page-hero" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px', textAlign: 'center', minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
        <VantaBackground />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span className="section-label">Global Network</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>Our Proud <span className="highlight" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Alumni</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            Joining Education Hub means becoming part of an elite, worldwide network of medical professionals, engineers, and researchers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          
          <div className="section-header">
            <h2>Where Are They Now?</h2>
            <p>From our classrooms to the world's most prestigious institutions and organizations.</p>
          </div>

          <div className="grid-3">
            {alumniData.map((alumnus, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.4rem', fontWeight: 'bold' }}>
                    {alumnus.initials}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{alumnus.name}</h3>
                    <span className="badge badge-gold">Batch of {alumnus.batch}</span>
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    "{alumnus.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    <GraduationCap size={16} color="var(--gold)" />
                    <strong>College:</strong> {alumnus.college}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <Building size={16} color="var(--gold)" />
                    <strong>Current:</strong> {alumnus.current}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Join the Network CTA */}
      <section className="section" style={{ background: 'var(--navy-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Globe size={48} color="var(--gold)" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Are You An Alumnus?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
            Reconnect with old batchmates, mentor current students, and attend our exclusive annual meetups. 
            We'd love to hear your success story!
          </p>
          <button className="btn btn-primary btn-lg">
            Join Alumni Directory <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </button>
        </div>
      </section>
    </>
  );
}
