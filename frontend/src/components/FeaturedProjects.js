import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api.js';

export default function FeaturedProjects({ activeCategory = 'all', onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState(activeCategory || 'all');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeCategory) {
      setActiveFilter(activeCategory);
    }
  }, [activeCategory]);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      let cat = 'all';
      let pType = 'all';

      if (activeFilter === 'interior' || activeFilter === 'construction') {
        cat = activeFilter;
      } else if (activeFilter === 'residential' || activeFilter === 'commercial') {
        pType = activeFilter;
      }

      const data = await fetchProjects(cat, pType);
      setProjects(data);
      setLoading(false);
    }
    loadProjects();
  }, [activeFilter]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">SELECTED WORKS</span>
          <h2 className="section-title">Architectural & Interior Showcase</h2>
          <p className="section-subtitle">
            Explore a curated selection of our bespoke residential villas, penthouse residences, 
            and commercial developments executed with uncompromising precision.
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'interior', label: 'Interior Design' },
            { id: 'construction', label: 'Construction' },
            { id: 'residential', label: 'Residential' },
            { id: 'commercial', label: 'Commercial' },
          ].map((flt) => (
            <button
              key={flt.id}
              className={`filter-btn ${activeFilter === flt.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(flt.id)}
            >
              {flt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((proj) => (
            <div 
              key={proj.id} 
              className="project-card"
              onClick={() => setSelectedProject(proj)}
            >
              <div className="project-img-wrap">
                <img 
                  src={proj.image_url} 
                  alt={proj.title} 
                  className="project-img" 
                  loading="lazy"
                />
                <div className="project-tag-pill">
                  {proj.category_display || (proj.category === 'interior' ? 'Interior' : 'Construction')}
                </div>
                <div className="project-specs-overlay">
                  {proj.area_sqft ? `${proj.area_sqft.toLocaleString()} Sq. Ft.` : 'Featured'}
                </div>
              </div>

              <div className="project-info">
                <div className="project-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{proj.location} • {proj.year}</span>
                </div>

                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-desc">{proj.description}</p>

                <div className="project-card-meta">
                  <span style={{ textTransform: 'capitalize' }}>
                    Type: {proj.project_type}
                  </span>
                  <span className="view-project-link">
                    View Project Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-container lightbox-card" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img-wrap">
              <img 
                src={selectedProject.image_url} 
                alt={selectedProject.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button 
                className="modal-close-btn" 
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'rgba(0,0,0,0.7)', borderRadius: '50%', padding: '0.6rem' }}
                onClick={() => setSelectedProject(null)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="lightbox-content">
              <span className="section-tag" style={{ marginBottom: '0.5rem' }}>
                {selectedProject.category_display} • {selectedProject.project_type_display || selectedProject.project_type}
              </span>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
                {selectedProject.title}
              </h2>
              
              <div className="lightbox-meta-grid">
                <div>
                  <div className="meta-item-label">Location</div>
                  <div className="meta-item-val">{selectedProject.location}</div>
                </div>
                <div>
                  <div className="meta-item-label">Floor Area</div>
                  <div className="meta-item-val">{selectedProject.area_sqft ? `${selectedProject.area_sqft.toLocaleString()} Sq. Ft.` : 'Custom'}</div>
                </div>
                <div>
                  <div className="meta-item-label">Timeline</div>
                  <div className="meta-item-val">{selectedProject.duration || '6 Months'}</div>
                </div>
                <div>
                  <div className="meta-item-label">Completed</div>
                  <div className="meta-item-val">{selectedProject.year || '2024'}</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                {selectedProject.description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuote();
                  }}
                >
                  Request Similar Project Estimate
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
