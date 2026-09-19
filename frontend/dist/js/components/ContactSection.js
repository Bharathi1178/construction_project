import React, { useState } from 'react';
import { submitInquiry } from '../api.js';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consultation Request',
    service_interest: 'Interior & Construction',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please complete all required fields.', 'error');
      return;
    }
    setSubmitting(true);
    try {
      await submitInquiry(formData);
      onShowToast('Thank you! Your consultation request has been received. Our architects will contact you shortly.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Consultation Request',
        service_interest: 'Interior & Construction',
        message: ''
      });
    } catch (err) {
      onShowToast('Error submitting inquiry. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="section-title">Schedule a Design Consultation</h2>
          <p className="section-subtitle">
            Speak directly with our principal architects and project engineers to discuss your 
            upcoming interior or construction endeavor.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4 className="contact-info-title">Headquarters & Studio</h4>
                <p className="contact-info-val">
                  420 Architecture Boulevard, Design District<br />
                  Metropolis, NY 10012
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <h4 className="contact-info-title">Direct Inquiries</h4>
                <p className="contact-info-val">
                  consult@vastustrux.com<br />
                  projects@vastustrux.com
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h4 className="contact-info-title">Telephone & Site Visits</h4>
                <p className="contact-info-val">
                  +1 (800) 482-7889<br />
                  Mon - Sat: 8:00 AM – 7:00 PM EST
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Jonathan Vance"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jonathan@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Service Interest</label>
                  <select
                    name="service_interest"
                    className="form-select"
                    value={formData.service_interest}
                    onChange={handleChange}
                  >
                    <option value="Interior & Construction">Turnkey (Interior + Construction)</option>
                    <option value="Interior Design">Interior Design Only</option>
                    <option value="Construction">Construction Only</option>
                    <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Scope & Details *</label>
                <textarea
                  name="message"
                  required
                  placeholder="Describe your location, approximate square footage, vision, and expected timeframe..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={submitting}
              >
                {submitting ? 'Submitting Consultation Request...' : 'Send Consultation Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
