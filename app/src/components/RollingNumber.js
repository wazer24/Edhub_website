import React, { useState, useEffect, useRef } from 'react';

export default function RollingNumber({ target, suffix = '' }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const targetStr = String(target);
  
  return (
    <span ref={ref} className="rolling-text-container" style={{ display: 'inline-flex', overflow: 'hidden', height: '1em', lineHeight: '1em' }}>
      {targetStr.split('').map((char, i) => {
        if (isNaN(char)) return <span key={`char-${i}`} style={{ display: 'inline-block', height: '1em' }}>{char}</span>;
        
        const num = parseInt(char, 10);
        // Create a strip of 20 numbers, we target index 10 + num to guarantee a long roll
        const strip = [0,1,2,3,4,5,6,7,8,9, 0,1,2,3,4,5,6,7,8,9];
        
        return (
          <span key={`digit-${i}`} style={{
            display: 'inline-flex', flexDirection: 'column', 
            transition: `transform ${2 + (targetStr.length - i) * 0.2}s cubic-bezier(0.2, 0.8, 0.2, 1)`,
            transform: inView ? `translateY(-${(10 + num)}em)` : `translateY(0em)`
          }}>
            {strip.map((n, idx) => (
              <span key={`n-${idx}`} style={{ height: '1em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {n}
              </span>
            ))}
          </span>
        )
      })}
      {suffix && <span style={{ display: 'inline-block', height: '1em' }}>{suffix}</span>}
    </span>
  );
}
