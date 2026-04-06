import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/contact');
  };

  const handleExplore = () => {
    const el = document.getElementById('programmes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero relative overflow-hidden">
      <div className="hero-container h-full relative z-10">
        <div className="hero-grid">
          
          {/* LEFT COLUMN: Content */}
          <div className="hero-content-col">
            
            <h1 className="hero-heading">
              All-In-One Learning Platform<br className="hidden-md" /> For Competitive Exams
            </h1>
            
            <p className="hero-subheading">
              We Prepare Students For Entrance, Government And Commerce Exams. 
              As Well As Offering Personalized Tuition In Science And Commerce.
            </p>
            
            <div className="hero-button-group">
              <button 
                onClick={handleRegister}
                className="btn btn-primary btn-lg group"
              >
                <span>Register Now</span>
                <span className="arrow-icon group-active:rotate-45">&#8599;</span>
              </button>
              
              <button 
                onClick={handleExplore}
                className="btn btn-secondary btn-lg group"
              >
                <span>Explore Courses</span>
                <ArrowRight size={18} className="arrow-icon-right" />
              </button>
            </div>
            
            {/* Trust signals */}
            <div className="trust-signals">
              <div className="trust-item">
                <div className="avatars">
                  <div className="avatar">👨‍🎓</div>
                  <div className="avatar">👩‍🎓</div>
                </div>
                <span className="font-medium">50k+ Students</span>
              </div>
              <div className="divider-vertical"></div>
              <div className="trust-item rating">
                <CheckCircle size={16} className="mr-1" />
                <span>4.98 Average Rating</span>
              </div>
            </div>

          </div>
          
          {/* RIGHT COLUMN: Hero Imagery */}
          <div className="hero-visual-col">
            
            {/* Decorative saffron geometric shape */}
            <svg 
              className="hero-shape"
              width="520" 
              height="520" 
              viewBox="0 0 520 520" 
              xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#CC7A29" stopOpacity="0.08" />
                </linearGradient>
                <linearGradient id="diamondInner" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#FFB366" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <polygon points="260,40 480,260 260,480 40,260" fill="url(#diamondGrad)" stroke="#FF9933" strokeOpacity="0.15" strokeWidth="2" />
              <polygon points="260,100 420,260 260,420 100,260" fill="url(#diamondInner)" />
            </svg>
            
            {/* Hero subject image container */}
            <div className="hero-image-container">
              
              <img 
                src="/Hero_image.png" 
                alt="Education Hub tutors / mentors"
                className="main-subject-img"
              />
              
              {/* Floating badge */}
              <div className="floating-badge">
                <div className="pulse-dot"></div>
                LIVE CLASSES
              </div>
              
              {/* Second small overlapping subject (Color block as requested) */}
              <div className="secondary-subject">
                <div className="color-block"></div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
