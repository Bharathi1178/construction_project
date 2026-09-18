import React from 'react';

export default function AboutCompany({ onOpenQuote }) {
  const stats = [
    { value: "18+", label: "Years of Excellence", desc: "Established studio & civil practice" },
    { value: "340+", label: "Completed Projects", desc: "Luxury residences & corporate spaces" },
    { value: "2.8M+", label: "Sq. Ft. Executed", desc: "Precision construction & turnkey styling" },
    { value: "99%", label: "Client Satisfaction", desc: "Single-source project accountability" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content-wrap">
            <span className="section-tag">WHO WE ARE</span>
            <h2 className="about-headline">
              Unifying Architectural Design & Precision Civil Construction Under One Roof.
            </h2>
            <p className="about-p">
              At <strong>VASTU & STRUX</strong>, we eliminate the friction between creative interior design 
              and complex civil engineering. From initial conceptual moodboards and 3D architectural renders 
              to foundation excavation, structural RCC framing, and bespoke joinery fitouts — we provide complete, 
              end-to-end execution with a single point of accountability.
            </p>

            <div className="about-highlight-box">
              <p>
                "Great architecture is not just how a structure looks, but how flawlessly its structure, 
                lighting, materials, and living spaces function together."
              </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button className="btn btn-secondary" onClick={onOpenQuote}>
                Discover Our Approach
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((item, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
                <div className="stat-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
