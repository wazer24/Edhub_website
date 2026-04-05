import { useState } from 'react';
import { X } from 'lucide-react';
import VantaBackground from '../components/VantaBackground';

const categories = ['All', 'Doubt Solving', 'Regular Tests', 'Sports & Trips', 'Homework & Mentoring', 'Personality Development', 'Premises'];

const galleryItems = [
  { cat: 'Doubt Solving', title: 'One-on-one doubt session with Physics faculty', color: '#1a3a5c' },
  { cat: 'Doubt Solving', title: 'Small group chemistry problem solving', color: '#1c3854' },
  { cat: 'Doubt Solving', title: 'Mathematics doubt clinic after classes', color: '#1a2d4f' },
  { cat: 'Doubt Solving', title: 'Biology concept reinforcement session', color: '#162544' },
  { cat: 'Regular Tests', title: 'Computer-based JEE simulation test', color: '#1e2d3d' },
  { cat: 'Regular Tests', title: 'Weekly offline test in exam hall', color: '#1a2a3a' },
  { cat: 'Regular Tests', title: 'NEET full-length mock examination', color: '#1c2c3c' },
  { cat: 'Regular Tests', title: 'Chapter-wise assessment in progress', color: '#1a2640' },
  { cat: 'Sports & Trips', title: 'Annual cricket tournament at campus', color: '#1a3040' },
  { cat: 'Sports & Trips', title: 'Educational trip to science museum', color: '#1c3245' },
  { cat: 'Sports & Trips', title: 'Outdoor adventure and team building', color: '#183040' },
  { cat: 'Sports & Trips', title: 'Inter-batch sports competition day', color: '#1a2e42' },
  { cat: 'Homework & Mentoring', title: 'Faculty reviewing homework notebooks', color: '#1e2840' },
  { cat: 'Homework & Mentoring', title: 'Personal mentoring session', color: '#1a2a44' },
  { cat: 'Homework & Mentoring', title: 'Progress review with parents', color: '#1c2c46' },
  { cat: 'Homework & Mentoring', title: 'Assignment feedback and guidance', color: '#182a42' },
  { cat: 'Personality Development', title: 'Public speaking workshop', color: '#1c2640' },
  { cat: 'Personality Development', title: 'Guest lecture by IIT alumnus', color: '#1a2844' },
  { cat: 'Personality Development', title: 'Debate competition finals', color: '#1e2a42' },
  { cat: 'Personality Development', title: 'Career counseling seminar', color: '#182640' },
  { cat: 'Premises', title: 'Modern air-conditioned classroom', color: '#1a2a3c' },
  { cat: 'Premises', title: 'Interactive digital smart board lab', color: '#1c2c42' },
  { cat: 'Premises', title: 'Well-stocked library and study area', color: '#1a2840' },
  { cat: 'Premises', title: 'State-of-the-art computer lab for CBT', color: '#1e2e44' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(i => i.cat === filter);

  return (
    <>
      <section className="page-hero">
        <VantaBackground />
        <div className="container">
          <span className="section-label">Life at Education Hub</span>
          <h1>Our <span className="highlight">Gallery</span></h1>
          <p>A visual journey through classrooms, events, and the vibrant culture of our campus</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(cat => (
              <button key={cat} className={`results-tab${filter === cat ? ' active' : ''}`} onClick={() => setFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div className="gallery-item" key={i} onClick={() => setLightbox(item)} style={{ background: item.color }}>
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '0.5rem', padding: '1.5rem', textAlign: 'center'
                }}>
                  <span style={{ fontSize: '2.5rem' }}>
                    {item.cat === 'Doubt Solving' ? '🤔' : item.cat === 'Regular Tests' ? '📝' : item.cat === 'Sports & Trips' ? '🏏' : item.cat === 'Homework & Mentoring' ? '📒' : item.cat === 'Personality Development' ? '🎤' : '🏫'}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.cat}</span>
                </div>
                <div className="gallery-item-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}><X size={32} /></button>
          <div onClick={e => e.stopPropagation()} style={{
            background: lightbox.color, borderRadius: 'var(--radius-lg)',
            width: '70vw', maxWidth: 800, aspectRatio: '16/10',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '1rem', padding: '2rem'
          }}>
            <span style={{ fontSize: '4rem' }}>
              {lightbox.cat === 'Doubt Solving' ? '🤔' : lightbox.cat === 'Regular Tests' ? '📝' : lightbox.cat === 'Sports & Trips' ? '🏏' : lightbox.cat === 'Homework & Mentoring' ? '📒' : lightbox.cat === 'Personality Development' ? '🎤' : '🏫'}
            </span>
            <h3 style={{ textAlign: 'center' }}>{lightbox.title}</h3>
            <span className="badge badge-teal">{lightbox.cat}</span>
          </div>
        </div>
      )}
    </>
  );
}
