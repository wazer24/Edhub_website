import React from 'react';

const testimonials = [
  { name: 'Aarav Sharma', initials: 'AS', exam: 'JEE Advanced 2025', rank: 'AIR 47', quote: 'The personalized mentoring at EduHub transformed my approach to Physics. My mentor identified my weak areas in Mechanics and crafted a targeted study plan that improved my score from the 90th to the 99.8th percentile.' },
  { name: 'Priya Deshmukh', initials: 'PD', exam: 'NEET-UG 2025', rank: '685/720', quote: 'The biology faculty here is exceptional. Their NCERT-focused approach combined with regular MCQ drills helped me secure a seat at Seth GS Medical College. The doubt-clearing sessions were a game changer.' },
  { name: 'Rohan Patil', initials: 'RP', exam: 'MHT-CET 2025', rank: '99.7 Percentile', quote: 'Starting late in 12th, I joined the CET crash course. The structured 45-day program covered every chapter systematically. I went from average scores to the 99.7th percentile — I couldn\'t believe it!' },
  { name: 'Sneha Kulkarni', initials: 'SK', exam: 'JEE Mains 2025', rank: '99.4 Percentile', quote: 'What sets EduHub apart is the small batch size. I could ask questions freely without hesitation. The weekly tests perfectly simulated the actual exam environment.' },
  { name: 'Arjun Mehta', initials: 'AM', exam: 'NEET-UG 2025', rank: '670/720', quote: 'The hybrid model was perfect for me. I attended offline classes for discipline and used the online portal for revision at my own pace. The AI-based analytics showed exactly where I needed improvement.' },
  { name: 'Kavya Joshi', initials: 'KJ', exam: 'XII CBSE Board', rank: '98.4%', quote: 'EduHub ensured my board preparation ran parallel to competitive coaching. Their integrated approach helped me score 98.4% in boards while also clearing JEE Mains with a strong percentile.' },
  { name: 'Vikram Singh', initials: 'VS', exam: 'MHT-CET 2025', rank: '99.9 Percentile', quote: 'The deep understanding of the MHT-CET pattern by the faculty is unmatched. Chapter-wise weightage analysis and previous year paper practice gave me confidence that no other institute could.' },
  { name: 'Ananya Rao', initials: 'AR', exam: 'JEE Advanced 2025', rank: 'AIR 156', quote: 'Two years at EduHub\'s classroom program gave me the discipline and problem-solving skills needed for JEE Advanced. The faculty didn\'t just teach — they mentored us for life.' },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);
const thirdRow = testimonials.slice(0, testimonials.length / 2);
const fourthRow = testimonials.slice(testimonials.length / 2);

function ReviewCard({ initials, name, exam, rank, quote }) {
  return (
    <figure className="review-card">
      <div className="review-card-header">
        <div className="review-card-avatar">{initials}</div>
        <div className="review-card-author">
          <figcaption className="review-card-name">{name}</figcaption>
          <p className="review-card-username">{exam} — {rank}</p>
        </div>
      </div>
      <blockquote className="review-card-body">"{quote}"</blockquote>
    </figure>
  );
}

function Marquee({ className = "", reverse = false, pauseOnHover = false, vertical = false, children, style }) {
  const containerClass = `marquee-container ${vertical ? "vertical" : ""} ${pauseOnHover ? "pause-on-hover" : ""} ${reverse ? "reverse" : ""} ${className}`;
  return (
    <div className={containerClass} style={style}>
      <div className="marquee-track">
        {children}
      </div>
      <div className="marquee-track">
        {children}
      </div>
    </div>
  );
}

export function Marquee3D() {
  return (
    <div className="marquee-3d-section">
      <div className="marquee-3d-wrapper">
        <Marquee pauseOnHover vertical style={{ '--duration': '40s' }}>
          {firstRow.map((review, i) => (
            <ReviewCard key={`r1-${i}`} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical style={{ '--duration': '40s' }}>
          {secondRow.map((review, i) => (
            <ReviewCard key={`r2-${i}`} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical style={{ '--duration': '40s' }}>
          {thirdRow.map((review, i) => (
            <ReviewCard key={`r3-${i}`} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical style={{ '--duration': '40s' }}>
          {fourthRow.map((review, i) => (
            <ReviewCard key={`r4-${i}`} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="fade-top"></div>
      <div className="fade-bottom"></div>
      <div className="fade-left"></div>
      <div className="fade-right"></div>
    </div>
  );
}
