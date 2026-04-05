import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Trophy, BookOpen, Target, CheckCircle, Zap, Shield, GraduationCap, Sparkles } from 'lucide-react';
import { Marquee3D } from '../components/Marquee3D';
import RollingNumber from '../components/RollingNumber';
import Hero from '../components/Hero';
import Skiper31 from '../components/Skiper31';

const programs = [
  { icon: <Zap size={28} />, title: 'JEE Mains & Advanced', desc: 'Comprehensive 2-year & 1-year programs for aspiring engineers targeting IITs and NITs.', duration: '1-2 Years', batch: 'Jun & Aug', color: 'rgba(255,51,51,0.12)' },
  { icon: <Shield size={28} />, title: 'NEET-UG', desc: 'Result-oriented medical entrance coaching with NCERT-centric pedagogy and clinical precision.', duration: '1-2 Years', batch: 'Jun & Aug', color: 'rgba(255,51,51,0.12)' },
  { icon: <Target size={28} />, title: 'MHT-CET (PCM & PCB)', desc: 'State-focused intensive program with deep expertise in Maharashtra\'s CET pattern.', duration: '1 Year / Crash', batch: 'Mar & Jun', color: 'rgba(255,51,51,0.12)' },
  { icon: <BookOpen size={28} />, title: 'Foundation (8th–10th)', desc: 'Build strong fundamentals early. Olympiad prep, NTSE training, and board excellence.', duration: '1-3 Years', batch: 'Jun', color: 'rgba(255,51,51,0.12)' },
  { icon: <GraduationCap size={28} />, title: 'Board Exam Excellence', desc: 'Parallel HSC/CBSE board coaching ensuring top marks alongside competitive preparation.', duration: 'Continuous', batch: 'Ongoing', color: 'rgba(255,51,51,0.12)' },
  { icon: <Sparkles size={28} />, title: 'Crash Courses', desc: 'High-intensity 45-90 day revision programs for last-minute score maximization.', duration: '45-90 Days', batch: 'Jan & Mar', color: 'rgba(255,51,51,0.12)' },
];


export default function HomePage() {

  return (
    <>
      {/* ===== HERO ===== */}
      <Hero />



      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Student Testimonials</span>
            <h2>Voices of Success</h2>
            <p>Hear from the students who transformed their careers with Education Hub</p>
          </div>
        </div>
        <Marquee3D />
      </section>

      {/* ===== CYBER STATS ===== */}
      <section className="cyber-stats-section">
        <div className="container">
          <div className="cyber-stats-grid">
            <div className="cyber-stat-card">
              <div className="cyber-stat-number"><RollingNumber target={15000} suffix="+" /></div>
              <div className="cyber-stat-label">Students Mentored</div>
            </div>
            <div className="cyber-stat-card">
              <div className="cyber-stat-number"><RollingNumber target={500} suffix="+" /></div>
              <div className="cyber-stat-label">IIT/NIT Selections</div>
            </div>
            <div className="cyber-stat-card">
              <div className="cyber-stat-number"><RollingNumber target={50} suffix="+" /></div>
              <div className="cyber-stat-label">Expert Faculty</div>
            </div>
            <div className="cyber-stat-card">
              <div className="cyber-stat-number"><RollingNumber target={12} /></div>
              <div className="cyber-stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== USP ===== */}
      <section className="usp-section">
        <div className="container">
          <div className="usp-grid">
            <div className="usp-content">
              <span className="section-label">Why Education Hub?</span>
              <h2>What Makes Us <span className="highlight">Different</span></h2>
              <div className="usp-features">
                <div className="usp-feature">
                  <div className="usp-feature-icon" style={{ background: 'rgba(255,51,51,0.12)' }}>
                    <Users size={22} color="var(--gold)" />
                  </div>
                  <div>
                    <h4>Small Batch Guarantee</h4>
                    <p>Strictly capped at 35 students per batch. Every student gets individual attention and mentorship.</p>
                  </div>
                </div>
                <div className="usp-feature">
                  <div className="usp-feature-icon" style={{ background: 'rgba(255,51,51,0.12)' }}>
                    <CheckCircle size={22} color="var(--teal)" />
                  </div>
                  <div>
                    <h4>Hybrid Pedagogy</h4>
                    <p>Offline classroom accountability paired with 24/7 digital resources and AI-powered analytics.</p>
                  </div>
                </div>
                <div className="usp-feature">
                  <div className="usp-feature-icon" style={{ background: 'rgba(255,51,51,0.12)' }}>
                    <Target size={22} color="var(--purple)" />
                  </div>
                  <div>
                    <h4>Real-Time Doubt Resolution</h4>
                    <p>Face-to-face sessions with faculty — no chatbots, no waiting for forum replies.</p>
                  </div>
                </div>
                <div className="usp-feature">
                  <div className="usp-feature-icon" style={{ background: 'rgba(255,51,51,0.12)' }}>
                    <Trophy size={22} color="var(--sky)" />
                  </div>
                  <div>
                    <h4>Regional Expertise</h4>
                    <p>Deep specialization in MHT-CET and state board integration alongside JEE & NEET.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="usp-table">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Mass-Market EdTech</th>
                    <th>Education Hub</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Batch Size</td>
                    <td>1000+ students</td>
                    <td>Max 35 per batch</td>
                  </tr>
                  <tr>
                    <td>Pedagogy</td>
                    <td>Purely digital</td>
                    <td>Hybrid offline + digital</td>
                  </tr>
                  <tr>
                    <td>Doubt Resolution</td>
                    <td>Chatbots / delayed forums</td>
                    <td>Face-to-face with faculty</td>
                  </tr>
                  <tr>
                    <td>Regional Focus</td>
                    <td>Generic national syllabus</td>
                    <td>HSC + MHT-CET integrated</td>
                  </tr>
                  <tr>
                    <td>Mentorship</td>
                    <td>None / AI-based</td>
                    <td>Dedicated personal mentor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROGRAMS ===== */}
      <Skiper31 />
      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <span className="section-label">Limited Seats Available</span>
            <h2>Your Journey to IIT, AIIMS & Top Colleges Starts Here</h2>
            <p>Join the next batch and experience the Education Hub difference. Admissions are open for 2026-27.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Enroll Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
