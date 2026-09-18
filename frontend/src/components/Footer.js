import React from 'react';

export default function Footer({ onOpenQuote, onSelectCategory }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceClick = (cat) => {
    onSelectCategory(cat);
    scrollTo('services');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
              <span className="logo-badge">V&S</span>
              <span className="logo-text">VASTU <span>&</span> STRUX</span>
            </a>
            <p>
              A multidisciplinary architectural design and civil construction firm delivering bespoke residences, 
              commercial developments, and complete turnkey environments.
            </p>
            <div className="social-links">
              {['Instagram', 'LinkedIn', 'Pinterest', 'Facebook'].map((social, i) => (
                <a key={i} href={`#${social.toLowerCase()}`} className="social-btn" aria-label={social}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Interior Services */}
          <div>
            <h4 className="footer-col-title">Interior Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Residential Interiors</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Commercial Interiors</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Modular Kitchens</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Living Room Design</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Bedroom Suites</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Office & Boardrooms</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>False Ceiling & MEP</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Architectural Lighting</a></li>
            </ul>
          </div>

          {/* Construction Services */}
          <div>
            <h4 className="footer-col-title">Construction</h4>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Residential Construction</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Commercial Construction</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Building Construction</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Renovation & Remodeling</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Structural RCC Works</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Civil Engineering</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Project Management</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Turnkey Delivery</a></li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h4 className="footer-col-title">Studio & Office</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              420 Architecture Blvd, Design District<br />
              Metropolis, NY 10012<br />
              Tel: +1 (800) 482-7889<br />
              Email: info@vastustrux.com
            </p>
            <button className="btn btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }} onClick={onOpenQuote}>
              Get a Free Estimate
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} VASTU & STRUX Architectural Studio & Construction Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Engagement</a>
            <a href="#sitemap">Site Directory</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
