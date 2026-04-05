import React, { useState, useEffect } from 'react';

const peacefulStyles = `
  .peaceful-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
    background: #ffffff;
  }
  .peaceful-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
    opacity: 0.5;
    mix-blend-mode: multiply;
  }
  .peaceful-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.8;
    animation: floatOrb 20s infinite alternate ease-in-out;
  }
  .peaceful-orb-1 {
    width: 700px;
    height: 700px;
    background: rgba(255, 153, 51, 0.12);
    top: -200px;
    left: -200px;
    animation-delay: 0s;
  }
  .peaceful-orb-2 {
    width: 600px;
    height: 600px;
    background: rgba(255, 179, 102, 0.15);
    bottom: -10%;
    right: -100px;
    animation-duration: 25s;
    animation-delay: -5s;
  }
  .peaceful-orb-3 {
    width: 500px;
    height: 500px;
    background: rgba(204, 122, 41, 0.08);
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-duration: 30s;
    animation-delay: -15s;
  }
  @keyframes floatOrb {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(40px, -60px) scale(1.1); }
    66% { transform: translate(-30px, 30px) scale(0.9); }
    100% { transform: translate(50px, 50px) scale(1.05); }
  }
`;

export default function VantaBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{peacefulStyles}</style>
      <div className="peaceful-bg">
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            transform: `translateY(${scrollY * 0.4}px)` 
          }}
        >
          <div className="peaceful-orb peaceful-orb-1" />
          <div className="peaceful-orb peaceful-orb-2" />
          <div className="peaceful-orb peaceful-orb-3" />
        </div>
      </div>
    </>
  );
}
