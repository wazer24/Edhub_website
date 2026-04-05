import React, { useEffect, useRef, useState } from 'react';
import './Hero3D.css';

export default function Hero3D() {
  const canvasRef = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    let animationFrameId;
    
    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 3.5 + 0.8;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.speedY = (Math.random() - 0.5) * 0.8 - 0.6;
            this.life = Math.random() * 180 + 80;
            this.hue = Math.random() > 0.6 ? 15 : 25; // red-orange range
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedY -= 0.008; // gentle upward drift
            this.life--;
            if (this.life <= 0 || this.y < 0) this.reset();
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.life / 180;
            ctx.fillStyle = `hsl(${this.hue}, 95%, 82%)`;
            ctx.shadowBlur = 12;
            ctx.shadowColor = `hsl(${this.hue}, 100%, 75%)`;
            ctx.fillRect(this.x, this.y, this.size, this.size);
            ctx.restore();
        }
    }
    
    const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };
    
    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        while (particles.length < 120) {
            particles.push(new Particle());
        }
        
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw();
        }
        
        animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    const group = groupRef.current;
    if (!group) return;
    
    const baseRotateX = 22;
    const baseRotateY = -38;
    
    const xPercent = (e.clientX / window.innerWidth) - 0.5;
    const yPercent = (e.clientY / window.innerHeight) - 0.5;
    
    const rotateY = baseRotateY + (xPercent * 18);
    const rotateX = baseRotateX - (yPercent * 14);
    
    group.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const group = groupRef.current;
    if (!group) return;
    
    const baseRotateX = 22;
    const baseRotateY = -38;
    group.style.transform = `rotateX(${baseRotateX}deg) rotateY(${baseRotateY}deg)`;
  };

  return (
    <section 
        className="hero-3d" 
        id="hero"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
        <canvas id="particles" ref={canvasRef}></canvas>
        
        <div className="scene-3d">
            <div className="isometric-group" id="group" ref={groupRef}>
                <div className="letter-container">
                    <div className="letter letter-e">E</div>
                </div>
                
                <div className="letter-container">
                    <div className="letter letter-h">H</div>
                </div>
            </div>
        </div>
        
        <div className="hero-text-3d">
            BUILDING DEPTH.<br/>DEFINING YOUR HERO.
        </div>
        
        <div className="hero-scroll-indicator">
            <div>SCROLL FOR MORE</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-9-9m0 0L5 5" />
            </svg>
        </div>
    </section>
  );
}
