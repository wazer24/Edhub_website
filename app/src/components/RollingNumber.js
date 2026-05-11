import React, { useState, useEffect, useRef } from 'react';

export default function RollingNumber({ target, suffix = '' }) {
  const [currentValue, setCurrentValue] = useState(0);
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
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp = null;
    const duration = 2000;
    const parsedTarget = parseInt(target, 10);
    
    if (isNaN(parsedTarget)) {
      setCurrentValue(target);
      return;
    }

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      setCurrentValue(Math.floor(easeOutQuad * parsedTarget));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="rolling-text-container" style={{ display: 'inline-flex' }}>
      {currentValue}{suffix}
    </span>
  );
}
