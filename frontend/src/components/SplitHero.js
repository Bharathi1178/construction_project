import React, { useState } from 'react';

export default function SplitHero({ onSelectCategory, onOpenQuote }) {
  const [doorMode, setDoorMode] = useState('split'); // 'split' | 'interior' | 'construction'

  const handleDoorClick = (side) => {
    if (doorMode === side) return;
    setDoorMode(side);
  };

  const handleResetSplit = (e) => {
    e.stopPropagation();
    setDoorMode('split');
  };

  const handleExploreServices = (category, e) => {
    e.stopPropagation();
    onSelectCategory(category);
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const interiorPills = [
    "Residential Interiors", "Commercial Spaces", "Modular Kitchens", 
    "Master Living Suites", "Acoustic Ceilings", "Architectural Lighting"
  ];

  const constructionPills = [
    "Ground-Up Residential", "Commercial Towers", "Structural RCC Works", 
    "Historic Renovation", "Civil Engineering", "Turnkey Project Delivery"
  ];

  return (
    <section id="hero" className="split-hero-wrapper">
      {/* Overhead & Floor Architectural Sliding Rails */}
      <div className="sliding-door-track-top" />
      <div className="sliding-door-track-bottom" />

      <div className="split-hero-container">
        {/* ==============================================================
            LEFT: INTERIOR SLIDING DOOR (NIGHT EFFECT)
            ============================================================== */}
        <div 
          className={`split-pane interior-pane ${
            doorMode === 'split' 
              ? 'mode-split' 
              : doorMode === 'interior' 
                ? 'mode-interior-active' 
                : 'mode-construction-active'
          }`}
          onClick={() => {
            if (doorMode === 'construction' || doorMode === 'split') {
              setDoorMode('interior');
            }
          }}
        >
          {/* Night Ambience Luxury Villa Interior Background */}
          <div 
            className="split-bg" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85')` 
            }} 
          />
          <div className="split-overlay" />

          {doorMode === 'split' ? (
            /* FRONT 50/50 VIEW: Clean Image & Page Title Only */
            <div className="split-content split-mode-front">
              <h1 className="split-heading">INTERIOR</h1>
              <div className="split-front-hint">
                <span>✦ Click to Explore</span>
              </div>
            </div>
          ) : doorMode === 'interior' ? (
            /* EXPANDED INTERIOR VIEW: All details revealed upon click */
            <div className="split-content split-mode-expanded">
              <div className="interior-night-badge">
                🌙 NIGHT AMBIENCE • BESPOKE INTERIORS
              </div>
              <h1 className="split-heading">INTERIOR</h1>
              <h2 className="split-subheading">Design Spaces That Inspire</h2>
              <p className="split-desc">
                Bespoke residential and commercial interior environments crafted with warm ambient illumination, 
                curated Italian marbles, custom joinery, and sensory spatial planning.
              </p>

              <div className="sliding-door-service-pills">
                {interiorPills.map((pill, idx) => (
                  <span key={idx} className="door-service-pill">✦ {pill}</span>
                ))}
              </div>

              <div className="split-cta-wrap">
                <button className="btn btn-primary" onClick={(e) => handleExploreServices('interior', e)}>
                  Explore Interior Services (8) →
                </button>
                <button className="reset-door-btn" onClick={handleResetSplit}>
                  ← Return to Split View (50/50)
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* ==============================================================
            RIGHT: CONSTRUCTION SLIDING DOOR (DAY EFFECT)
            ============================================================== */}
        <div 
          className={`split-pane construction-pane ${
            doorMode === 'split' 
              ? 'mode-split' 
              : doorMode === 'construction' 
                ? 'mode-construction-active' 
                : 'mode-interior-active'
          }`}
          onClick={() => {
            if (doorMode === 'interior' || doorMode === 'split') {
              setDoorMode('construction');
            }
          }}
        >
          {/* User-provided Blueprint & Architectural Drafting Background */}
          <div 
            className="split-bg" 
            style={{ 
              backgroundImage: `url('img/construction-blueprint.jpg')` 
            }} 
          />
          <div className="split-overlay" />

          {doorMode === 'split' ? (
            /* FRONT 50/50 VIEW: Clean Image & Page Title Only */
            <div className="split-content split-mode-front">
              <h1 className="construction-heading">CONSTRUCTION</h1>
              <div className="split-front-hint construction-hint">
                <span>Click to Explore ➔</span>
              </div>
            </div>
          ) : doorMode === 'construction' ? (
            /* EXPANDED CONSTRUCTION VIEW: All details revealed upon click */
            <div className="split-content split-mode-expanded">
              <div className="construction-day-badge">
                ☀️ DAYLIGHT EXECUTION • CIVIL ENGINEERING
              </div>

              <h1 className="construction-heading">CONSTRUCTION</h1>
              <h2 className="construction-subheading">Precision Engineering & Structural Excellence</h2>
              
              <p className="construction-desc">
                Ground-up commercial developments, luxury residential estates, and seismic structural foundations 
                engineered with rigorous geotechnical standards and milestone execution.
              </p>

              {/* Live Structural Metric HUD Cards */}
              <div className="construction-hud-grid">
                <div className="construction-hud-card">
                  <div className="hud-card-val">2.8M+</div>
                  <div className="hud-card-label">Sq. Ft. Built</div>
                </div>
                <div className="construction-hud-card">
                  <div className="hud-card-val">SEISMIC IV</div>
                  <div className="hud-card-label">Core Standard</div>
                </div>
                <div className="construction-hud-card">
                  <div className="hud-card-val">0% DEFECT</div>
                  <div className="hud-card-label">Handover SLA</div>
                </div>
              </div>

              <div className="construction-tech-pills">
                {constructionPills.map((pill, idx) => (
                  <span key={idx} className="construction-tech-pill">⬢ {pill}</span>
                ))}
              </div>

              <div className="split-cta-wrap">
                <button className="btn-construction-action" onClick={(e) => handleExploreServices('construction', e)}>
                  Explore Construction Services (8) ➔
                </button>
                <button className="btn-construction-reset" onClick={handleResetSplit}>
                  ← Return to Split View (50/50)
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Hero Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="mouse-icon">
          <div className="mouse-wheel" />
        </div>
        <span>SCROLL DOWN</span>
      </div>
    </section>
  );
}
