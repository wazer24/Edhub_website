import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero relative overflow-hidden">
      <div className="hero-container h-full relative z-10">
        <div className="hero-grid">

          {/* ══ LEFT: Content ══ */}
          <div className="hero-content-col">

            {/* Eyebrow pill */}
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              India's Premier Coaching Platform
            </div>

            <h1 className="hero-heading">
              All-In-One Learning<br />
              Platform For{' '}
              <span className="heading-accent">Competitive Exams</span>
            </h1>

            <p className="hero-subheading">
              We prepare students for entrance, government and commerce exams —
              as well as offering personalised tuition in Science and Commerce.
            </p>

            <div className="hero-button-group">
              <button
                onClick={() => navigate('/contact')}
                className="btn btn-primary btn-lg"
              >
                <span>Register Now</span>
                <span className="arrow-icon">&#8599;</span>
              </button>

              <button
                onClick={() => navigate('/programmes')}
                className="btn btn-secondary btn-lg"
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
                  <div className="avatar">🧑‍🎓</div>
                </div>
                <span className="font-medium">15k+ Students</span>
              </div>
              <div className="divider-vertical" />
              <div className="trust-item rating">
                <CheckCircle size={16} className="mr-1" />
                <span>4.98 Average Rating</span>
              </div>
            </div>
          </div>

          {/* ══ RIGHT: Hero Portrait ══ */}
          <div className="hero-visual-col">

            {/* Rotating diamond background shape */}
            <svg
              className="hero-shape"
              width="520"
              height="520"
              viewBox="0 0 520 520"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#FF9933" stopOpacity="0.13" />
                  <stop offset="100%" stopColor="#CC7A29" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="diamondInner" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#FF9933" stopOpacity="0.20" />
                  <stop offset="100%" stopColor="#FFB366" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <polygon
                points="260,32 488,260 260,488 32,260"
                fill="url(#diamondGrad)"
                stroke="#FF9933"
                strokeOpacity="0.18"
                strokeWidth="1.5"
              />
              <polygon
                points="260,110 410,260 260,410 110,260"
                fill="url(#diamondInner)"
              />
            </svg>

            {/* Portrait image with frame */}
            <div className="hero-image-container">
              <div className="hero-image-frame">
                <img
                  src="/Hero_image.png"
                  alt="Education Hub mentor"
                  className="main-subject-img"
                />
              </div>

              {/* LIVE badge — top right */}
              <div className="floating-badge">
                <div className="pulse-dot" />
                LIVE CLASSES
              </div>

              {/* Stats chip — bottom left */}
              <div className="secondary-subject">
                <div className="color-block">
                  <span className="color-block-number">500+</span>
                  <span className="color-block-label">IIT / NIT Selections</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
