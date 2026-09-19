import React, { useState, useEffect } from 'react';
import { submitQuoteRequest } from '../api.js';

export default function QuoteModal({ isOpen, onClose, initialService, initialCategory, onShowToast }) {
  const [serviceType, setServiceType] = useState('both');
  const [projectType, setProjectType] = useState('residential');
  const [finishTier, setFinishTier] = useState('Premium');
  const [areaSqft, setAreaSqft] = useState(2500);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [estimateResult, setEstimateResult] = useState(null);

  useEffect(() => {
    if (initialCategory) {
      if (initialCategory === 'interior') setServiceType('interior');
      else if (initialCategory === 'construction') setServiceType('construction');
      else setServiceType('both');
    }
    if (initialService) {
      setMessage(`Interested in: ${initialService}`);
    }
  }, [initialService, initialCategory, isOpen]);

  if (!isOpen) return null;

  // Real-time local indicative calculation
  const rates = {
    'Standard': { interior: 85, construction: 140, both: 210 },
    'Premium': { interior: 130, construction: 195, both: 305 },
    'Luxury Haute': { interior: 220, construction: 310, both: 490 }
  };
  const currentRate = rates[finishTier][serviceType];
  const liveMin = areaSqft * currentRate;
  const liveMax = Math.round(liveMin * 1.25);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      onShowToast('Please provide your name and email address.', 'error');
      return;
    }

    setSubmitting(true);
    const payload = {
      name,
      email,
      phone,
      service_type: serviceType,
      project_type: projectType,
      finish_tier: finishTier,
      estimated_area: areaSqft,
      message
    };

    try {
      const response = await submitQuoteRequest(payload);
      setEstimateResult(response.estimate_summary);
      onShowToast('Quotation successfully generated & submitted to our estimating department!', 'success');
    } catch (err) {
      onShowToast('Unable to submit quote. Showing estimated figures below.', 'info');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setEstimateResult(null);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="section-tag" style={{ marginBottom: '0.25rem' }}>INSTANT ESTIMATOR & PROPOSAL</span>
            <h3 className="modal-title">Get a Personalized Project Quote</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {estimateResult ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: 'rgba(194, 155, 97, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>

              <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                Quotation Request Received
              </h3>
              <p style={{ color: 'var(--text-light-secondary)', marginBottom: '2rem' }}>
                A project estimator will review your specifications and contact you with a detailed Bill of Quantities (BOQ).
              </p>

              <div className="estimate-result-banner" style={{ flexDirection: 'column', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', padding: '1.75rem' }}>
                <span className="estimate-result-label">INDICATIVE PROJECT INVESTMENT RANGE</span>
                <span className="estimate-result-price">{estimateResult.estimated_range}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)' }}>
                  Estimated Rate: ${estimateResult.rate_per_sqft} / Sq. Ft. • Timeline: {estimateResult.timeline_weeks}
                </span>
              </div>

              <button className="btn btn-primary" onClick={handleReset}>
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Interactive Estimator Engine */}
              <div className="estimator-calc-box">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                    1. Configure Scope & Finish Tier
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>
                    Live indicative computation
                  </span>
                </div>

                <div className="calc-grid">
                  <button 
                    type="button" 
                    className={`tier-select-btn ${serviceType === 'interior' ? 'active' : ''}`}
                    onClick={() => setServiceType('interior')}
                  >
                    Interior Design
                  </button>
                  <button 
                    type="button" 
                    className={`tier-select-btn ${serviceType === 'construction' ? 'active' : ''}`}
                    onClick={() => setServiceType('construction')}
                  >
                    Construction
                  </button>
                  <button 
                    type="button" 
                    className={`tier-select-btn ${serviceType === 'both' ? 'active' : ''}`}
                    onClick={() => setServiceType('both')}
                  >
                    Turnkey (Both)
                  </button>
                </div>

                <div className="calc-grid">
                  {['Standard', 'Premium', 'Luxury Haute'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      className={`tier-select-btn ${finishTier === tier ? 'active' : ''}`}
                      onClick={() => setFinishTier(tier)}
                    >
                      {tier} Tier
                    </button>
                  ))}
                </div>

                {/* Range Slider */}
                <div className="range-slider-wrap">
                  <div className="range-slider-header">
                    <span>Estimated Project Area (Sq. Ft.)</span>
                    <span className="range-slider-val">{areaSqft.toLocaleString()} Sq. Ft.</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="100"
                    value={areaSqft}
                    onChange={(e) => setAreaSqft(Number(e.target.value))}
                    className="custom-range-slider"
                  />
                </div>

                {/* Result Preview */}
                <div className="estimate-result-banner">
                  <div>
                    <div className="estimate-result-label">INDICATIVE ESTIMATE RANGE</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>
                      ${currentRate} / sq ft • {serviceType.toUpperCase()} • {finishTier}
                    </div>
                  </div>
                  <div className="estimate-result-price">
                    ${liveMin.toLocaleString()} - ${liveMax.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                  2. Contact & Project Info
                </span>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Eleanor Rigby" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="eleanor@example.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      placeholder="+1 (555) 019-2831" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Property Type</label>
                    <select 
                      className="form-select" 
                      value={projectType} 
                      onChange={(e) => setProjectType(e.target.value)}
                    >
                      <option value="residential">Residential Property</option>
                      <option value="commercial">Commercial / Corporate Property</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Special Requirements / Notes</label>
                  <textarea 
                    className="form-textarea" 
                    style={{ minHeight: '80px' }} 
                    placeholder="Provide site location, desired start month, specific brand or structural preferences..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Generating Proposal...' : 'Submit & Receive Official Quote'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
