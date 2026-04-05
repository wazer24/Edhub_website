import { useState } from 'react';
import VantaBackground from '../components/VantaBackground';

const categories = ['JEE Mains & Advanced', 'NEET-UG', 'MHT-CET', 'XI-XII Board', 'Foundation (8-10)'];

const resultsData = {
  'JEE Mains & Advanced': {
    toppers: [
      { name: 'Aarav Sharma', initials: 'AS', rank: 'AIR 47', exam: 'JEE Advanced 2025', program: '2-Year Integrated Classroom' },
      { name: 'Ananya Rao', initials: 'AR', rank: 'AIR 156', exam: 'JEE Advanced 2025', program: '2-Year Integrated Classroom' },
      { name: 'Ishaan Verma', initials: 'IV', rank: 'AIR 312', exam: 'JEE Advanced 2025', program: '2-Year Integrated Classroom' },
    ],
    others: [
      { name: 'Arjun Patel', initials: 'AP', rank: '99.8 %ile', program: '2-Year Classroom' },
      { name: 'Neha Gupta', initials: 'NG', rank: '99.6 %ile', program: '1-Year Program' },
      { name: 'Karan Malhotra', initials: 'KM', rank: '99.5 %ile', program: '2-Year Classroom' },
      { name: 'Shreya Iyer', initials: 'SI', rank: '99.3 %ile', program: '1-Year Program' },
      { name: 'Varun Nair', initials: 'VN', rank: '99.1 %ile', program: '2-Year Classroom' },
      { name: 'Pooja Reddy', initials: 'PR', rank: '98.9 %ile', program: '2-Year Classroom' },
      { name: 'Aditya Jain', initials: 'AJ', rank: '98.7 %ile', program: '1-Year Program' },
      { name: 'Tanvi Desai', initials: 'TD', rank: '98.4 %ile', program: '2-Year Classroom' },
      { name: 'Rahul Sen', initials: 'RS', rank: '98.2 %ile', program: '2-Year Classroom' },
      { name: 'Divya Kapoor', initials: 'DK', rank: '97.9 %ile', program: '1-Year Program' },
    ],
  },
  'NEET-UG': {
    toppers: [
      { name: 'Priya Deshmukh', initials: 'PD', rank: '685/720', exam: 'NEET-UG 2025', program: '2-Year Medical Program' },
      { name: 'Arjun Mehta', initials: 'AM', rank: '670/720', exam: 'NEET-UG 2025', program: '2-Year Medical Program' },
      { name: 'Sanya Bhatt', initials: 'SB', rank: '658/720', exam: 'NEET-UG 2025', program: '1-Year Intensive' },
    ],
    others: [
      { name: 'Riya Sharma', initials: 'RS', rank: '645/720', program: '2-Year Medical' },
      { name: 'Vivek Kumar', initials: 'VK', rank: '638/720', program: '2-Year Medical' },
      { name: 'Meera Nair', initials: 'MN', rank: '630/720', program: '1-Year Intensive' },
      { name: 'Akash Yadav', initials: 'AY', rank: '625/720', program: '2-Year Medical' },
      { name: 'Nisha Patel', initials: 'NP', rank: '618/720', program: '2-Year Medical' },
      { name: 'Rohit Gupta', initials: 'RG', rank: '610/720', program: '1-Year Intensive' },
      { name: 'Sneha Singh', initials: 'SS', rank: '605/720', program: '2-Year Medical' },
      { name: 'Dev Mishra', initials: 'DM', rank: '598/720', program: '2-Year Medical' },
      { name: 'Anjali Rao', initials: 'AR', rank: '592/720', program: '1-Year Intensive' },
      { name: 'Kunal Shah', initials: 'KS', rank: '585/720', program: '2-Year Medical' },
    ],
  },
  'MHT-CET': {
    toppers: [
      { name: 'Vikram Singh', initials: 'VS', rank: '99.9 %ile (PCM)', exam: 'MHT-CET 2025', program: '1-Year CET Intensive' },
      { name: 'Rohan Patil', initials: 'RP', rank: '99.7 %ile (PCM)', exam: 'MHT-CET 2025', program: 'CET Crash Course' },
      { name: 'Aditi More', initials: 'AM', rank: '99.5 %ile (PCB)', exam: 'MHT-CET 2025', program: '1-Year CET Intensive' },
    ],
    others: [
      { name: 'Omkar Joshi', initials: 'OJ', rank: '99.3 %ile', program: '1-Year CET' },
      { name: 'Sakshi Pawar', initials: 'SP', rank: '99.1 %ile', program: 'CET Crash Course' },
      { name: 'Tejas Kulkarni', initials: 'TK', rank: '98.8 %ile', program: '1-Year CET' },
      { name: 'Gauri Deshpande', initials: 'GD', rank: '98.5 %ile', program: '1-Year CET' },
      { name: 'Mahesh Shinde', initials: 'MS', rank: '98.2 %ile', program: 'CET Crash Course' },
      { name: 'Rutuja Bhosale', initials: 'RB', rank: '97.9 %ile', program: '1-Year CET' },
      { name: 'Pranav Chavan', initials: 'PC', rank: '97.6 %ile', program: '1-Year CET' },
      { name: 'Shruti Gaikwad', initials: 'SG', rank: '97.3 %ile', program: 'CET Crash Course' },
      { name: 'Nikhil Jadhav', initials: 'NJ', rank: '97.0 %ile', program: '1-Year CET' },
      { name: 'Komal Londhe', initials: 'KL', rank: '96.7 %ile', program: '1-Year CET' },
    ],
  },
  'XI-XII Board': {
    toppers: [
      { name: 'Kavya Joshi', initials: 'KJ', rank: '98.4% (CBSE)', exam: 'XII Board 2025', program: 'Integrated Classroom' },
      { name: 'Siddharth Rane', initials: 'SR', rank: '97.8% (HSC)', exam: 'XII Board 2025', program: 'Integrated Classroom' },
      { name: 'Ritika Sawant', initials: 'RS', rank: '97.2% (HSC)', exam: 'XII Board 2025', program: 'Integrated Classroom' },
    ],
    others: [
      { name: 'Amit Khare', initials: 'AK', rank: '96.8%', program: 'Integrated' },
      { name: 'Nandini Das', initials: 'ND', rank: '96.4%', program: 'Integrated' },
      { name: 'Manish Tiwari', initials: 'MT', rank: '95.9%', program: 'Integrated' },
      { name: 'Simran Kaur', initials: 'SK', rank: '95.5%', program: 'Integrated' },
      { name: 'Deepak Goel', initials: 'DG', rank: '95.1%', program: 'Integrated' },
      { name: 'Pallavi Hegde', initials: 'PH', rank: '94.7%', program: 'Integrated' },
      { name: 'Raj Chopra', initials: 'RC', rank: '94.3%', program: 'Integrated' },
      { name: 'Aarti Pandey', initials: 'AP', rank: '93.8%', program: 'Integrated' },
      { name: 'Nitin Wagh', initials: 'NW', rank: '93.5%', program: 'Integrated' },
      { name: 'Prachi Shukla', initials: 'PS', rank: '93.1%', program: 'Integrated' },
    ],
  },
  'Foundation (8-10)': {
    toppers: [
      { name: 'Ayush Dubey', initials: 'AD', rank: 'NTSE Scholar', exam: 'NTSE 2025', program: 'Foundation (9th-10th)' },
      { name: 'Tanya Verma', initials: 'TV', rank: 'SOF Gold Medalist', exam: 'NSO 2025', program: 'Foundation (8th-9th)' },
      { name: 'Harsh Agarwal', initials: 'HA', rank: '98.6% (CBSE X)', exam: 'X Board 2025', program: 'Foundation (9th-10th)' },
    ],
    others: [
      { name: 'Isha Menon', initials: 'IM', rank: 'RMO Qualifier', program: 'Foundation' },
      { name: 'Yash Tripathi', initials: 'YT', rank: '97.8%', program: 'Foundation' },
      { name: 'Sanjana Roy', initials: 'SR', rank: '97.4%', program: 'Foundation' },
      { name: 'Atharv Gadgil', initials: 'AG', rank: '96.9%', program: 'Foundation' },
      { name: 'Kiara Saxena', initials: 'KS', rank: '96.5%', program: 'Foundation' },
      { name: 'Mihir Thakur', initials: 'MT', rank: '96.1%', program: 'Foundation' },
      { name: 'Nehal Khan', initials: 'NK', rank: '95.7%', program: 'Foundation' },
      { name: 'Rhea Bose', initials: 'RB', rank: 'Olympiad Silver', program: 'Foundation' },
      { name: 'Vedant Shirke', initials: 'VS', rank: '95.2%', program: 'Foundation' },
      { name: 'Tanvi Oberoi', initials: 'TO', rank: '94.8%', program: 'Foundation' },
    ],
  },
};

export default function ResultsPage() {
  const [active, setActive] = useState(categories[0]);
  const data = resultsData[active];

  return (
    <>
      <section className="page-hero">
        <VantaBackground />
        <div className="container">
          <span className="section-label">Our Track Record</span>
          <h1>Results That <span className="highlight">Speak</span></h1>
          <p>Verified achievements across every exam category — proof that our methods deliver</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="results-tabs">
            {categories.map(cat => (
              <button key={cat} className={`results-tab${active === cat ? ' active' : ''}`} onClick={() => setActive(cat)}>
                {cat}
              </button>
            ))}
          </div>

          {/* Top Rankers */}
          <div className="results-hero-cards">
            {data.toppers.map((s, i) => (
              <div className="result-hero-card" key={i}>
                <div className="rank-badge">{s.rank}</div>
                <div className="student-avatar">{s.initials}</div>
                <h3>{s.name}</h3>
                <div className="exam-name">{s.exam}</div>
                <div className="program-name">{s.program}</div>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="results-grid">
            {data.others.map((s, i) => (
              <div className="result-card" key={i}>
                <div className="student-avatar">{s.initials}</div>
                <h4>{s.name}</h4>
                <div className="rank">{s.rank}</div>
                <div className="program-name">{s.program}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
