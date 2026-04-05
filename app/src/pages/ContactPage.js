import { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import VantaBackground from '../components/VantaBackground';
import { submitEnquiry } from '../api';

const channels = [
  { icon: <Phone size={22} color="var(--gold)" />, color: 'rgba(255,51,51,0.12)', title: 'Call Us', info: '+91 98765 43210', link: 'tel:+919876543210' },
  { icon: <MessageCircle size={22} color="var(--teal)" />, color: 'rgba(255,51,51,0.12)', title: 'WhatsApp', info: '+91 98765 43210', link: 'https://wa.me/919876543210' },
  { icon: <Mail size={22} color="var(--purple)" />, color: 'rgba(255,51,51,0.12)', title: 'Email', info: 'admissions@eduhub.in', link: 'mailto:admissions@eduhub.in' },
  { icon: <MapPin size={22} color="var(--coral)" />, color: 'rgba(255,51,51,0.12)', title: 'Visit Us', info: 'Kothrud, Pune 411038, Maharashtra', link: '#map' },
];

const leadMagnets = [
  { icon: '📄', title: 'MHT-CET Previous Year Papers', desc: 'Last 10 years solved papers with detailed explanations', cta: 'Download Free' },
  { icon: '🧠', title: 'NEET Biology Mind Maps', desc: 'High-yield NCERT chapter-wise concept maps', cta: 'Download Free' },
  { icon: '📊', title: 'Free All-India Mock Test', desc: 'Take a full-length JEE/NEET simulation test', cta: 'Start Test' },
  { icon: '🎥', title: 'Free Demo Class', desc: 'Experience our teaching style in a live online session', cta: 'Register Now' },
  { icon: '📋', title: 'JEE Advanced Formula Sheet', desc: 'Complete PCM formula compilation for quick revision', cta: 'Download Free' },
  { icon: '📞', title: 'Career Counseling Webinar', desc: 'Free guidance on exam strategy and college selection', cta: 'Book Slot' },
];

const emptyForm = { name: '', phone: '', classLevel: '', exam: '', email: '', message: '' };

function buildEnquiryPayload(formData) {
  const lines = [];
  if (formData.exam === 'mhtcet_pcm') lines.push('MHT-CET stream: PCM');
  if (formData.exam === 'mhtcet_pcb') lines.push('MHT-CET stream: PCB');
  if (formData.exam === 'board') lines.push('Target: Board exam focus');
  if (formData.message && String(formData.message).trim()) lines.push(String(formData.message).trim());
  const message = lines.join('\n');

  let targetExam;
  if (formData.exam === 'jee') targetExam = 'JEE';
  else if (formData.exam === 'neet') targetExam = 'NEET';
  else if (formData.exam === 'mhtcet_pcm' || formData.exam === 'mhtcet_pcb') targetExam = 'MHT-CET';
  else if (formData.exam === 'foundation') targetExam = 'Foundation';

  const payload = {
    studentName: formData.name.trim(),
    phone: formData.phone.trim(),
    email: formData.email.trim() || undefined,
    classLevel: formData.classLevel,
    message: message || undefined,
  };
  if (targetExam) payload.targetExam = targetExam;
  return payload;
}

export default function ContactPage() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!formData.name || !formData.phone || !formData.classLevel || !formData.exam) {
      alert('Please fill all required fields.');
      return;
    }
    setSubmitting(true);
    try {
      await submitEnquiry(buildEnquiryPayload(formData));
      setSubmitted(true);
      setFormData(emptyForm);
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <VantaBackground />
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h1><span className="highlight">Contact</span> Us</h1>
          <p>Ready to begin your journey? Reach out through any channel — we respond within hours</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Channels + Map */}
            <div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Reach Us Instantly</h3>
              <div className="contact-channels">
                {channels.map((c, i) => (
                  <a href={c.link} className="contact-channel" key={i} target="_blank" rel="noopener noreferrer">
                    <div className="contact-channel-icon" style={{ background: c.color }}>{c.icon}</div>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.info}</p>
                    </div>
                  </a>
                ))}
              </div>

              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Our Location</h3>
              <div className="map-placeholder">
                <div style={{ textAlign: 'center' }}>
                  <MapPin size={40} color="var(--gold)" style={{ marginBottom: '0.5rem' }} />
                  <p>Education Hub Campus</p>
                  <p style={{ fontSize: '0.85rem' }}>Kothrud, Pune 411038, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form">
              <h3>Enquire About Admission</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Fill in your details and our counselor will contact you within 2 hours.
              </p>
              {submitError && (
                <div style={{
                  background: 'rgba(220,60,60,0.12)', border: '1px solid rgba(220,60,60,0.45)',
                  borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.5rem',
                  color: '#f87171', fontWeight: 600,
                }}>
                  {submitError}
                </div>
              )}
              {submitted && (
                <div style={{
                  background: 'rgba(0,200,80,0.15)', border: '1px solid rgba(0,200,80,0.4)',
                  borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.5rem',
                  color: '#4ade80', textAlign: 'center', fontWeight: 600
                }}>
                  ✓ Enquiry submitted successfully! We'll contact you within 2 hours.
                </div>
              )}
              <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Student Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Current Class *</label>
                  <select name="classLevel" value={formData.classLevel} onChange={handleChange} required>
                    <option value="">Select class</option>
                    <option value="8th">8th</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                    <option value="Dropper">Dropper / Repeater</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Target Exam *</label>
                  <select name="exam" value={formData.exam} onChange={handleChange} required>
                    <option value="">Select exam</option>
                    <option value="jee">JEE Mains &amp; Advanced</option>
                    <option value="neet">NEET-UG</option>
                    <option value="mhtcet_pcm">MHT-CET (PCM)</option>
                    <option value="mhtcet_pcb">MHT-CET (PCB)</option>
                    <option value="foundation">Foundation / Olympiads</option>
                    <option value="board">Board Exam Focus</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com (optional)" />
              </div>
              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any specific questions or requirements..." rows={3} />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                {submitting ? 'Submitting…' : <>Submit Enquiry <ArrowRight size={18} /></>}
              </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="section" style={{ background: 'var(--navy-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Free Resources</span>
            <h2>Download & Learn for Free</h2>
            <p>Access high-value study materials and demo classes — no payment required</p>
          </div>
          <div className="lead-magnets-grid">
            {leadMagnets.map((lm, i) => (
              <div className="lead-magnet-card" key={i}>
                <div className="lm-icon">{lm.icon}</div>
                <h4>{lm.title}</h4>
                <p>{lm.desc}</p>
                <button className="btn btn-secondary btn-sm">{lm.cta} <ArrowRight size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <h2>Still Have Questions?</h2>
            <p>Book a free one-on-one counseling session with our academic advisor. No obligations.</p>
            <a href="https://wa.me/919876543210" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
