import React from 'react';

export default function CallToAction({ onOpenQuote, onScrollToContact }) {
  return (
    <section className="cta-section">
      <div className="cta-backdrop-glow" />
      <div className="container">
        <div className="cta-box">
          <span className="section-tag">START YOUR TRANSFORMATION</span>
          <h2 className="cta-heading">Let's Build Something Exceptional</h2>
          <p className="cta-desc">
            Whether you are planning a ground-up luxury residence, commercial facility, 
            or bespoke interior renovation, our team is ready to bring your vision to life.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={onOpenQuote}>
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={onScrollToContact}>
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
