import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/results', label: 'Results' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/alumni', label: 'Alumni' },
  { path: '/programmes', label: 'Programmes' },
  { path: '/faculty', label: 'Faculty' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
];

const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0); // Full screen quad
    }
`;

const fragmentShader = `
    uniform float uTime;
    uniform vec2 uHoverPos;
    uniform float uHoverRadius;
    
    varying vec2 vUv;
    
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    
    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                            -0.577350269189626, 0.024429);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * vec3(1.0, 2.0, 3.0) - 1.0;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    }
    
    void main() {
        vec2 uv = vUv;
        
        float dist = length(uv - uHoverPos);
        float effect = smoothstep(0.0, uHoverRadius, dist);
        effect = 1.0 - effect;                     
        
        vec3 color = vec3(0.0);
        float alpha = 0.0;
        
        if (effect > 0.01) {
            float n1 = snoise(uv * 3.8 + uTime * 0.8);
            float n2 = snoise(uv * 7.2 + uTime * 1.4 + vec2(13.7, 24.3));
            float n3 = snoise(uv * 14.0 + uTime * 2.1);
            
            float fluidNoise = n1 * 0.6 + n2 * 0.3 + n3 * 0.1;
            fluidNoise = fluidNoise * 0.5 + 0.5; 
            
            vec3 red = vec3(1.0, 0.6, 0.2);
            vec3 orange = vec3(0.8, 0.478, 0.161);
            vec3 liquidColor = mix(red, orange, fluidNoise);
            
            liquidColor += 0.35 * effect;
            
            color = liquidColor;
            color += vec3(0.15) * sin(fluidNoise * 12.0 + uTime * 6.0) * effect * 0.15;
            
            alpha = effect * 0.85; // Transparent output localized to the hover radius
        }
        
        gl_FragColor = vec4(color, alpha);
    }
`;

function LiquidBackground({ hoverPos, hoverRadius }) {
    const materialRef = useRef();
    
    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
            
            // Smoothly interpolate current hover values to target values for buttery transitions
            materialRef.current.uniforms.uHoverPos.value.lerp(new THREE.Vector2(hoverPos.x, hoverPos.y), 0.1);
            materialRef.current.uniforms.uHoverRadius.value += (hoverRadius - materialRef.current.uniforms.uHoverRadius.value) * 0.1;
        }
    });

    const uniforms = useRef({
        uTime: { value: 0 },
        uHoverPos: { value: new THREE.Vector2(-10, -10) },
        uHoverRadius: { value: 0.15 }
    });
    
    return (
        <mesh>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms.current}
                transparent={true}
                depthWrite={false}
            />
        </mesh>
    );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const [hoverData, setHoverData] = useState({
    x: -10,
    y: -10,
    radius: 0.15
  });

  const linkRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const handleLinkHover = (path) => {
    const ref = linkRefs.current[path];
    if (!ref) return;
    
    const rect = ref.getBoundingClientRect();
    const centerX = (rect.left + rect.width / 2) / window.innerWidth;
    const centerY = 1.0 - (rect.top + rect.height / 2) / window.innerHeight;
    const radius = (rect.width / window.innerWidth) * 2.2;
    
    setHoverData({ x: centerX, y: centerY, radius });
  };

  const handleLeave = () => {
    setHoverData({ x: -10, y: -10, radius: 0.0 });
  };

  return (
    <>
      <div 
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 45 }}
      >
        <Canvas gl={{ antialias: true, alpha: true }} style={{ pointerEvents: 'none' }}>
            <LiquidBackground hoverPos={hoverData} hoverRadius={hoverData.radius} />
        </Canvas>
      </div>

      <nav 
        className={`floating-pill${scrolled ? ' scrolled' : ''}`} 
        style={{ 
          zIndex: 50, 
          transform: `translate(-50%, ${Math.max(-scrollY * 0.6, -120)}px)`,
          transition: 'transform 0.1s ease-out'
        }} 
        onMouseLeave={handleLeave}
      >
        <div className="nav-content">
          <Link to="/" className="eh-logo" onMouseEnter={() => handleLinkHover('logo')} ref={el => linkRefs.current['logo'] = el}>
            EH
          </Link>

          <div className="nav-links">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'home-pill' : 'nav-link'}
                ref={el => linkRefs.current[item.path] = el}
                onMouseEnter={() => handleLinkHover(item.path)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <Link 
              to="/contact" 
              className="apply-cta" 
              onMouseEnter={() => handleLinkHover('cta')} 
              ref={el => linkRefs.current['cta'] = el}
            >
              Apply Now
            </Link>
          </div>

          <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} color="#334155" /> : <Menu size={24} color="#334155" />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {/* Optional close button inside the overlay itself if needed, but hamburger handles it */}
        {navItems.map(item => (
          <Link 
            key={`${item.path}-mobile`} 
            to={item.path}
            ref={el => linkRefs.current[`${item.path}-mobile`] = el}
            onMouseEnter={() => handleLinkHover(`${item.path}-mobile`)}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="mobile-bottom-cta">
        <Link to="/contact" className="apply-cta">
          Apply Now
        </Link>
      </div>
    </>
  );
}
