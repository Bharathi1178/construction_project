import React, { useState, useEffect } from 'react';

export default function Header({ onOpenQuote, onSelectProjectCategory }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectFilterClick = (filter) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    if (onSelectProjectCategory) {
      onSelectProjectCategory(filter);
    }
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <span className="logo-badge">V&S</span>
          <span className="logo-text">VASTU <span>&</span> STRUX</span>
        </a>

        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <a href="#hero" className="nav-link active" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                Services
              </a>
            </li>
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a 
                href="#projects" 
                className="nav-link nav-link-has-dropdown" 
                onClick={(e) => { e.preventDefault(); handleProjectFilterClick('all'); }}
              >
                Projects
                <svg className="nav-dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>

              <ul className={`nav-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <li>
                  <div className="nav-dropdown-item" onClick={() => handleProjectFilterClick('all')}>
                    <span className="nav-dropdown-icon">✦</span> All Projects
                  </div>
                </li>
                <li>
                  <div className="nav-dropdown-item" onClick={() => handleProjectFilterClick('interior')}>
                    <span className="nav-dropdown-icon">🛋️</span> Interior Design
                  </div>
                </li>
                <li>
                  <div className="nav-dropdown-item" onClick={() => handleProjectFilterClick('construction')}>
                    <span className="nav-dropdown-icon">🏗️</span> Construction
                  </div>
                </li>
                <li>
                  <div className="nav-dropdown-item" onClick={() => handleProjectFilterClick('residential')}>
                    <span className="nav-dropdown-icon">🏡</span> Residential
                  </div>
                </li>
                <li>
                  <div className="nav-dropdown-item" onClick={() => handleProjectFilterClick('commercial')}>
                    <span className="nav-dropdown-icon">🏢</span> Commercial
                  </div>
                </li>
              </ul>
            </li>
            {mobileMenuOpen && (
              <li className="mobile-only-subnav" style={{ width: '100%' }}>
                <ul className="mobile-nav-sublinks">
                  <li className="mobile-sublink" onClick={() => handleProjectFilterClick('interior')}>
                    <span>🛋️</span> Interior Design
                  </li>
                  <li className="mobile-sublink" onClick={() => handleProjectFilterClick('construction')}>
                    <span>🏗️</span> Construction
                  </li>
                  <li className="mobile-sublink" onClick={() => handleProjectFilterClick('residential')}>
                    <span>🏡</span> Residential
                  </li>
                  <li className="mobile-sublink" onClick={() => handleProjectFilterClick('commercial')}>
                    <span>🏢</span> Commercial
                  </li>
                </ul>
              </li>
            )}
            <li>
              <a href="#process" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>
                Process
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
            <li className="mobile-only-btn" style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}>
                Get a Quote
              </button>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn btn-primary" onClick={onOpenQuote}>
            Get a Quote
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
