import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Preloader.css';

// Map route paths to a cinematic word sequence
const routeWords = {
  '/':          ['Education', 'Hub', '✦'],
  '/programmes':['Explore', 'Programmes', '✦'],
  '/results':   ['Our', 'Results', '✦'],
  '/faculty':   ['Meet', 'Faculty', '✦'],
  '/alumni':    ['Alumni', 'Stories', '✦'],
  '/gallery':   ['The', 'Gallery', '✦'],
  '/careers':   ['Join', 'Our', 'Team', '✦'],
  '/contact':   ['Get', 'In', 'Touch', '✦'],
};

const DEFAULT_WORDS = ['Education', 'Hub', '✦'];
const WORD_DURATION = 420;    // ms each word shows
const EXIT_DELAY    = 200;    // ms after last word before slide-out
const SLIDE_DURATION = 700;   // ms for slide-out animation

export default function Preloader() {
  const location = useLocation();
  const [phase, setPhase] = useState('hidden'); // 'hidden' | 'words' | 'exit'
  const [wordIndex, setWordIndex] = useState(0);
  const words = routeWords[location.pathname] || DEFAULT_WORDS;
  const keyRef = useRef(0); // force remount on route change

  useEffect(() => {
    // Every route change triggers a fresh preloader
    keyRef.current += 1;
    const runKey = keyRef.current;

    setPhase('words');
    setWordIndex(0);

    document.body.style.overflow = 'hidden';

    let idx = 0;
    const totalWords = words.length;

    const advance = () => {
      if (runKey !== keyRef.current) return; // stale closure guard
      idx++;
      if (idx < totalWords) {
        setWordIndex(idx);
        setTimeout(advance, WORD_DURATION);
      } else {
        // All words shown — start exit
        setTimeout(() => {
          if (runKey !== keyRef.current) return;
          setPhase('exit');
          setTimeout(() => {
            if (runKey !== keyRef.current) return;
            setPhase('hidden');
            document.body.style.overflow = '';
          }, SLIDE_DURATION);
        }, EXIT_DELAY);
      }
    };

    const firstTimer = setTimeout(advance, WORD_DURATION);

    return () => {
      clearTimeout(firstTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (phase === 'hidden') return null;

  return (
    <div className={`preloader-overlay ${phase === 'exit' ? 'preloader-exit' : ''}`}>
      {/* Animated background noise lines */}
      <div className="preloader-lines">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="preloader-line" style={{ '--i': i }} />
        ))}
      </div>

      {/* Corner marks */}
      <div className="preloader-corner tl" />
      <div className="preloader-corner tr" />
      <div className="preloader-corner bl" />
      <div className="preloader-corner br" />

      {/* Word display */}
      <div className="preloader-stage">
        {words.map((word, i) => (
          <span
            key={word + i}
            className={`
              preloader-word
              ${i < wordIndex ? 'pw-past' : ''}
              ${i === wordIndex ? 'pw-active' : ''}
              ${i > wordIndex ? 'pw-future' : ''}
              ${word === '✦' ? 'pw-symbol' : ''}
            `}
          >
            {word === '✦' ? (
              <span className="pw-spark">✦</span>
            ) : (
              word.split('').map((char, ci) => (
                <span
                  key={ci}
                  className="pw-char"
                  style={{ '--ci': ci, '--wl': word.length }}
                >
                  {char}
                </span>
              ))
            )}
          </span>
        ))}
      </div>

      {/* Bottom bar progress */}
      <div className="preloader-bar">
        <div
          className="preloader-bar-fill"
          style={{ width: `${((wordIndex + 1) / words.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
