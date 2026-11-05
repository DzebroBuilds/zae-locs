import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import LightRays from './components/LightRays';
import './hero-rays.css';

function HeroRays() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = event => setReduced(event.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  return <>
    <div className="hero-rays-canvas" aria-hidden="true" style={{ width: '100%', height: '600px', position: 'relative' }}>
      {!reduced && <LightRays
        raysOrigin="top-center"
        raysColor="#3b82f6"
        raysSpeed={paused ? 0 : 0.5}
        lightSpread={1}
        rayLength={3}
        glow={0.6}
        haze={0.5}
        followMouse={!paused}
        mouseInfluence={0.1}
        rayDensity={1.6}
        raySharpness={0.5}
        atmosphere={0.7}
        distortion={0.12}
        cursorShadow={!paused}
        clickPulse={!paused}
      />}
    </div>
    {!reduced && <button className="rays-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
      {paused ? 'Resume light effect' : 'Pause light effect'}
    </button>}
  </>;
}

const mount = document.getElementById('hero-rays');
if (mount) createRoot(mount).render(<HeroRays />);
