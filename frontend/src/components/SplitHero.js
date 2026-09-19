import React, { useState } from 'react';

export default function SplitHero({ onSelectCategory, onOpenQuote }) {
  const [doorMode, setDoorMode] = useState('split'); // 'split' | 'interior' | 'construction'
  const [hoverPreview, setHoverPreview] = useState(null); // 'interior' | 'construction' | null

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
            LEFT SLIDING DOOR: INTERIOR
            ============================================================== */}
        <div 
          className={`split-pane interior-pane ${
            doorMode === 'split' 
              ? `mode-split ${hoverPreview === 'interior' ? 'hover-interior' : ''}` 
              : doorMode === 'interior' 
                ? 'mode-interior-active' 
                : 'mode-construction-active'
          }`}
          onMouseEnter={() => { if (doorMode === 'split') setHoverPreview('interior'); }}
          onMouseLeave={() => setHoverPreview(null)}
          onClick={() => handleDoorClick('interior')}
        >
          <div 
            className="split-bg" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85')` 
            }} 
          />
          <div className="split-overlay" />
          
          {/* Architectural Bronze Door Pull Handle (shown in split mode) */}
          {doorMode === 'split' && (
            <div className="door-pull-handle" title="Slide Door Open">
              <div className="door-handle-groove" />
              <div className="door-handle-groove" />
              <div className="door-handle-groove" />
            </div>
          )}

          <div className="split-content">
            <div className="sliding-door-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/>
              </svg>
              {doorMode === 'interior' ? 'Sliding Door Open • Full Realm' : '01 / Interior Architecture'}
            </div>

            <h1 className="split-heading">INTERIOR</h1>
            <h2 className="split-subheading">Design Spaces That Inspire</h2>
            
            <p className="split-desc">
              Bespoke residential and commercial interior environments crafted with curated marbles, 
              custom joinery, ergonomic space planning, and museum-grade architectural lighting.
            </p>

            {/* In full slide mode, reveal active service capability tags */}
            {doorMode === 'interior' && (
              <div className="sliding-door-service-pills">
                {interiorPills.map((pill, idx) => (
                  <span key={idx} className="door-service-pill">✦ {pill}</span>
                ))}
              </div>
            )}

            <div className="split-cta-wrap">
              {doorMode === 'interior' ? (
                <>
                  <button 
                    className="btn btn-primary"
                    onClick={(e) => handleExploreServices('interior', e)}
                  >
                    Explore Interior Services (8)
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>

                  <button 
                    className="reset-door-btn"
                    onClick={handleResetSplit}
                    title="Slide Construction Door Back"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Close Sliding Door (50/50)
                  </button>
                </>
              ) : (
                <button 
                  className="btn btn-primary"
                  onClick={(e) => { e.stopPropagation(); handleDoorClick('interior'); }}
                >
                  Slide Open Interior
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Center Connected Badge & Divider (Hidden when a sliding door is opened) */}
        <div className={`split-center-badge ${doorMode !== 'split' ? 'hidden-in-slide' : ''}`}>
          <div className="center-line-top" />
          <div className="center-pill">Click To Slide Door</div>
          <div className="center-line-bottom" />
        </div>

        {/* ==============================================================
            RIGHT SLIDING DOOR: CONSTRUCTION
            ============================================================== */}
        <div 
          className={`split-pane construction-pane ${
            doorMode === 'split' 
              ? `mode-split ${hoverPreview === 'construction' ? 'hover-construction' : ''}` 
              : doorMode === 'construction' 
                ? 'mode-construction-active' 
                : 'mode-interior-active'
          }`}
          onMouseEnter={() => { if (doorMode === 'split') setHoverPreview('construction'); }}
          onMouseLeave={() => setHoverPreview(null)}
          onClick={() => handleDoorClick('construction')}
        >
          <div 
            className="split-bg" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1800&q=85')` 
            }} 
          />
          <div className="split-overlay" />
          
          {/* Architectural Bronze Door Pull Handle (shown in split mode) */}
          {doorMode === 'split' && (
            <div className="door-pull-handle" title="Slide Door Open">
              <div className="door-handle-groove" />
              <div className="door-handle-groove" />
              <div className="door-handle-groove" />
            </div>
          )}

          <div className="split-content">
            <div className="sliding-door-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 9-3 3 3 3"/>
              </svg>
              {doorMode === 'construction' ? 'Sliding Door Open • Full Realm' : '02 / Civil Engineering'}
            </div>

            <h1 className="split-heading">CONSTRUCTION</h1>
            <h2 className="split-subheading">Build With Confidence</h2>
            
            <p className="split-desc">
              Ground-up residential estates and commercial developments engineered with structural precision, 
              geotechnical excellence, and on-time milestone execution.
            </p>

            {/* In full slide mode, reveal active service capability tags */}
            {doorMode === 'construction' && (
              <div className="sliding-door-service-pills">
                {constructionPills.map((pill, idx) => (
                  <span key={idx} className="door-service-pill">✦ {pill}</span>
                ))}
              </div>
            )}

            <div className="split-cta-wrap">
              {doorMode === 'construction' ? (
                <>
                  <button 
                    className="btn btn-primary"
                    onClick={(e) => handleExploreServices('construction', e)}
                  >
                    Explore Construction Services (8)
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>

                  <button 
                    className="reset-door-btn"
                    onClick={handleResetSplit}
                    title="Slide Interior Door Back"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    Close Sliding Door (50/50)
                  </button>
                </>
              ) : (
                <button 
                  className="btn btn-secondary"
                  onClick={(e) => { e.stopPropagation(); handleDoorClick('construction'); }}
                >
                  Slide Open Construction
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              )}
            </div>
          </div>
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
