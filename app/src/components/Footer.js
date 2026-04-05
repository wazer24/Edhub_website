import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Globe, Camera, Play, Briefcase } from 'lucide-react';

export default function Footer() {
  const [subEmail, setSubEmail] = useState('');
  const [subDone, setSubDone] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subEmail || !subEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    setSubDone(true);
    setSubEmail('');
    setTimeout(() => setSubDone(false), 5000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="nav-logo" style={{ marginBottom: '0.5rem' }}>
              <div className="logo-icon"><GraduationCap size={20} /></div>
              <span>EduHub</span>
            </Link>
            <p>
              India's trusted coaching destination for JEE, NEET & MHT-CET aspirants.
              Combining offline discipline with digital innovation to build tomorrow's engineers and doctors.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Globe size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Camera size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Play size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Briefcase size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/results">Results</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/faculty">Our Faculty</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/alumni">Alumni Network</Link>
            <Link to="/careers">Careers</Link>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <a href="tel:+919876543210"><Phone size={14} style={{ display: 'inline', marginRight: 6 }} />+91 98765 43210</a>
            <a href="mailto:info@eduhub.in"><Mail size={14} style={{ display: 'inline', marginRight: 6 }} />info@eduhub.in</a>
            <a href="https://maps.google.com/?q=Pune+Maharashtra" target="_blank" rel="noopener noreferrer"><MapPin size={14} style={{ display: 'inline', marginRight: 6 }} />Pune, Maharashtra</a>
          </div>

          <div>
            <h4>Stay Updated</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Get exam tips, batch updates & exclusive offers.
            </p>
            {subDone ? (
              <p style={{ color: '#4ade80', fontWeight: 600, fontSize: '0.9rem' }}>✓ Subscribed successfully!</p>
            ) : (
              <form className="footer-newsletter" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Your email address" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} />
                <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Education Hub. All rights reserved.</span>
          <span>Engineered for academic excellence</span>
        </div>
      </div>
    </footer>
  );
}
