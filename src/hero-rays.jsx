import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import LightRays from './components/LightRays';
import GlassSurface from './components/GlassSurface';
import VariableProximity from './components/VariableProximity';
import ScrollExpand from './components/ScrollExpand';
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
    <div className="hero-glass-booking">
      <GlassSurface
        width={320}
        height={76}
        borderRadius={38}
        distortionScale={-180}
        displace={0.5}
        backgroundOpacity={0.1}
        borderWidth={0.07}
        brightness={50}
        opacity={0.93}
        blur={11}
        saturation={1}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        refraction
        renderer="auto"
        style={{ maxWidth: '100%' }}
      >
        <button className="glass-booking-button" type="button" onClick={() => document.querySelector('header [data-book]')?.click()}>
          Book your visit
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </GlassSurface>
    </div>
    {!reduced && <button className="rays-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
      {paused ? 'Resume light effect' : 'Pause light effect'}
    </button>}
  </>;
}

const mount = document.getElementById('hero-rays');
if (mount) createRoot(mount).render(<HeroRays />);

function HeroTitle() {
  const containerRef = useRef(null);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = event => setReduced(event.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  return <span ref={containerRef} className="hero-title-container" style={{ position: 'relative' }}>
    {reduced ? <span className="hero-title-still">ZAE LOCS</span> : <VariableProximity
      label="ZAE LOCS"
      className="variable-proximity-demo"
      fromFontVariationSettings="'wght' 400, 'opsz' 9"
      toFontVariationSettings="'wght' 1000, 'opsz' 40"
      containerRef={containerRef}
      radius={100}
      falloff="linear"
      smoothing={0.2}
      scale={1}
      lift={0}
      idleWave={false}
      fontSize={64}
    />}
  </span>;
}

const title = document.getElementById('hero-title');
if (title) createRoot(title).render(<HeroTitle />);

function StudioPortrait() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = event => setReduced(event.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  const content = <>
    <h2>Made for you.</h2>
    <p>Intentional loc care and styling by Zae at Renton Landing.</p>
    <span className="portrait-credit">Concept imagery</span>
  </>;
  if (reduced) return <div className="portrait-still">
    <img src="art-1.jpg" alt="Concept portrait celebrating natural locs" width="627" height="627" />
    <div className="portrait-still-copy">{content}</div>
  </div>;
  return <ScrollExpand
    src="art-1.jpg"
    alt="Concept portrait celebrating natural locs"
    title="Rooted here."
    scrollHint="Scroll"
    useWindowScroll
    mediaZoom={1.35}
    className="studio-scroll-expand"
  >{content}</ScrollExpand>;
}

const portrait = document.getElementById('studio-scroll');
if (portrait) createRoot(portrait).render(<StudioPortrait />);
