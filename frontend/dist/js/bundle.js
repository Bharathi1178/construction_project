// VASTU & STRUX - Master React Application Bundle
const { useState, useEffect, createElement: h } = React;

// API & Fallback Data
const API_BASE_URL = 'http://127.0.0.1:8000/api';

const fallbackServices = [
  { id: 1, title: "Residential Interiors", category: "interior", icon_name: "Home", short_desc: "Bespoke residential interior environments tailored to elevated lifestyles, combining ergonomics, luxury materiality, and spatial harmony.", features: ["Full Home Concept Design", "Custom Millwork & Joinery", "Art Curation", "Spatial Ergonomics"] },
  { id: 2, title: "Commercial Interiors", category: "interior", icon_name: "Building2", short_desc: "High-impact commercial workspaces, flagship retail stores, and hospitality environments that amplify brand prestige.", features: ["Brand Identity Integration", "Acoustic Engineering", "Dynamic Collaboration Zones", "Safety Compliance"] },
  { id: 3, title: "Modular Kitchen", category: "interior", icon_name: "ChefHat", short_desc: "German-engineered modular culinary spaces featuring quartz worktops, soft-close hardware, and integrated smart appliances.", features: ["Precision Ergonomics", "Quartz & Dekton Tops", "Smart Integrated Storage", "Anti-Fingerprint Finishes"] },
  { id: 4, title: "Living Room Design", category: "interior", icon_name: "Armchair", short_desc: "Grand architectural living lounges sculpted with bespoke media consoles, warm ambient lighting layers, and statement seating.", features: ["Accent Walls", "Architectural Media Units", "Custom Rugs & Upholstery", "Layered Illumination"] },
  { id: 5, title: "Bedroom Design", category: "interior", icon_name: "BedDouble", short_desc: "Tranquil master suites and guest retreats engineered for sensory calm, acoustic isolation, walk-in closets, and custom headboards.", features: ["Walk-In Wardrobes", "Acoustic Wall Paneling", "Automated Dimmers", "Bedside Automation"] },
  { id: 6, title: "Office Interiors", category: "interior", icon_name: "Briefcase", short_desc: "Executive corporate boardrooms, private C-suite chambers, and collaborative agile workstations crafted for visionary firms.", features: ["Executive Desking", "Soundproof Meeting Pods", "Conference Tech", "Biophilic Elements"] },
  { id: 7, title: "False Ceiling", category: "interior", icon_name: "Grid", short_desc: "Architectural ceiling profiles with concealed cove LED troughs, acoustic baffle treatments, and seamless shadow lines.", features: ["Cove & Perimeter LEDs", "Gypsum & Acoustic Baffles", "AC Diffuser Integration", "Shadow-line Trims"] },
  { id: 8, title: "Lighting Design", category: "interior", icon_name: "Sun", short_desc: "Multi-tier architectural lighting schemes blending direct task illumination, museum-grade accent fixtures, and smart dimming.", features: ["Circadian Protocols", "Magnetic Track Spotlights", "Custom Chandeliers", "Scene Automation"] },
  { id: 9, title: "Residential Construction", category: "construction", icon_name: "Warehouse", short_desc: "Ground-up bespoke villas, multi-family residences, and luxury contemporary estates built with structural precision.", features: ["Deep Foundation & RCC", "Thermal & Acoustic Insulation", "Custom Facades", "Smart Infrastructure"] },
  { id: 10, title: "Commercial Construction", category: "construction", icon_name: "Building", short_desc: "State-of-the-art office towers, retail complexes, and institutional facilities engineered to the highest building codes.", features: ["Steel & Concrete Frame", "Curtain Wall Glazing", "High-Volume MEP", "Green Certifications"] },
  { id: 11, title: "Building Construction", category: "construction", icon_name: "Factory", short_desc: "End-to-end structural engineering and vertical development of multi-storey properties with geotechnical rigor.", features: ["Seismic-Resistant Core", "Sub-structure Waterproofing", "Prefabricated Concrete", "Site Operations"] },
  { id: 12, title: "Renovation", category: "construction", icon_name: "Hammer", short_desc: "Complete structural overhauls, historic building restorations, and modern expansions breathing new life into properties.", features: ["Load-Bearing Wall Removal", "Retrofit Reinforcement", "Facade Modernization", "Complete MEP Upgrades"] },
  { id: 13, title: "Structural Works", category: "construction", icon_name: "ShieldAlert", short_desc: "Reinforced concrete framing, structural steel fabrication, underpinning, and heavy foundation engineering.", features: ["Post-Tensioned Slabs", "Structural Steel Framework", "Retaining Walls & Shoring", "Testing & QA"] },
  { id: 14, title: "Civil Works", category: "construction", icon_name: "Wrench", short_desc: "Comprehensive site preparation, grading, stormwater drainage, subterranean utilities, and heavy earthwork infrastructure.", features: ["Site Grading & Excavation", "Drainage & Sewerage", "Paving & Access Roadways", "Retaining Systems"] },
  { id: 15, title: "Project Management", category: "construction", icon_name: "ClipboardList", short_desc: "Dedicated on-site superintendent management, milestone Gantt tracking, rigorous QA inspection, and vendor coordination.", features: ["Critical Path Tracking", "Strict Site Safety QA", "Vendor Audits", "Daily Progress Reporting"] },
  { id: 16, title: "Turnkey Construction", category: "construction", icon_name: "Key", short_desc: "Single-contract complete delivery uniting architectural design, structural engineering, procurement, and interior handover.", features: ["Single Point of Contact", "Guaranteed Maximum Price", "Integrated MEP + Fitouts", "Turnkey Move-In Handover"] }
];

const fallbackProjects = [
  // 100% PURE STRUCTURAL & CIVIL CONSTRUCTION PROJECTS
  { 
    id: 1, 
    title: "The Grand Horizon Civil & Structural Estate", 
    category: "construction", 
    category_display: "Construction", 
    project_type: "residential", 
    project_type_display: "Residential", 
    location: "Beverly Hills, CA", 
    year: "2024", 
    image_url: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80", 
    description: "Deep foundation engineering, reinforced concrete columns, and architectural framing executed for a multi-level hillside estate.", 
    area_sqft: 9200, 
    duration: "14 Months" 
  },
  { 
    id: 3, 
    title: "Vertex Commercial Tower Development", 
    category: "construction", 
    category_display: "Construction", 
    project_type: "commercial", 
    project_type_display: "Commercial", 
    location: "Financial District, London", 
    year: "2023", 
    image_url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", 
    description: "12-storey commercial tower structural core construction featuring heavy crane rigging, post-tensioned floor plates, and curtain wall engineering.", 
    area_sqft: 45000, 
    duration: "22 Months" 
  },
  { 
    id: 5, 
    title: "Solarium High-Elevation Structural Framing", 
    category: "construction", 
    category_display: "Construction", 
    project_type: "residential", 
    project_type_display: "Residential", 
    location: "Aspen, Colorado", 
    year: "2023", 
    image_url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80", 
    description: "Engineered timber, structural steel framework, and sub-structure waterproofing for a seismic-grade mountain residential property.", 
    area_sqft: 6800, 
    duration: "11 Months" 
  },
  { 
    id: 8, 
    title: "Crestview Heritage Civil Restructuring & Retrofit", 
    category: "construction", 
    category_display: "Construction", 
    project_type: "residential", 
    project_type_display: "Residential", 
    location: "Cotswolds, UK", 
    year: "2023", 
    image_url: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80", 
    description: "Comprehensive civil overhaul, heavy stone underpinning, perimeter scaffolding, and structural floor reinforcement.", 
    area_sqft: 7500, 
    duration: "16 Months" 
  },

  // 100% PURE LUXURY BESPOKE INTERIOR PROJECTS
  { 
    id: 2, 
    title: "Aura Penthouse Duplex", 
    category: "interior", 
    category_display: "Interior Design", 
    project_type: "residential", 
    project_type_display: "Residential", 
    location: "Tribeca, New York", 
    year: "2024", 
    image_url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", 
    description: "Minimalist luxury master penthouse styled with Italian Statuario marble slabs, fluted walnut paneling, and customized bronze light fixtures.", 
    area_sqft: 4800, 
    duration: "7 Months" 
  },
  { 
    id: 4, 
    title: "Monolith Executive Lounge & Office", 
    category: "interior", 
    category_display: "Interior Design", 
    project_type: "commercial", 
    project_type_display: "Commercial", 
    location: "Marina Bay, Singapore", 
    year: "2024", 
    image_url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", 
    description: "Biophilic corporate executive headquarters blending bespoke acoustic felt slatted ceilings, natural volcanic stone islands, and private boardroom pods.", 
    area_sqft: 12500, 
    duration: "5 Months" 
  },
  { 
    id: 6, 
    title: "Nordic Warmth Kitchen & Living", 
    category: "interior", 
    category_display: "Interior Design", 
    project_type: "residential", 
    project_type_display: "Residential", 
    location: "Kensington, London", 
    year: "2024", 
    image_url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80", 
    description: "Architectural kitchen remodel incorporating integrated Gaggenau appliances, monolithic Dekton island with waterfall edge, and custom smoked-oak joinery.", 
    area_sqft: 2200, 
    duration: "3 Months" 
  },
  { 
    id: 7, 
    title: "Omnia Luxury Master Suite", 
    category: "interior", 
    category_display: "Interior Design", 
    project_type: "residential", 
    project_type_display: "Residential", 
    location: "Champs-Élysées, Paris", 
    year: "2024", 
    image_url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", 
    description: "Sensory master suite retreat featuring custom walk-in wardrobes, velvet wall cladding, ambient architectural cove lighting, and bespoke headboards.", 
    area_sqft: 3400, 
    duration: "4 Months" 
  }
];

async function apiFetchServices(category) {
  try {
    const url = category && category !== 'all' ? `${API_BASE_URL}/services/?category=${category}` : `${API_BASE_URL}/services/`;
    const res = await fetch(url);
    if (res.ok) return await res.json();
  } catch (e) {}
  if (!category || category === 'all') return fallbackServices;
  return fallbackServices.filter(s => s.category.toLowerCase() === category.toLowerCase());
}

async function apiFetchProjects(category, projectType) {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (projectType && projectType !== 'all') params.append('project_type', projectType);
    const res = await fetch(`${API_BASE_URL}/projects/?${params.toString()}`);
    if (res.ok) return await res.json();
  } catch (e) {}
  return fallbackProjects.filter(p => {
    const matchCat = !category || category === 'all' || p.category.toLowerCase() === category.toLowerCase();
    const matchType = !projectType || projectType === 'all' || p.project_type.toLowerCase() === projectType.toLowerCase();
    return matchCat && matchType;
  });
}

async function apiSubmitQuote(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/quotes/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const area = Number(data.estimated_area) || 1500;
  const rates = {
    'Standard': { interior: 85, construction: 140, both: 210 },
    'Premium': { interior: 130, construction: 195, both: 305 },
    'Luxury Haute': { interior: 220, construction: 310, both: 490 }
  };
  const tier = rates[data.finish_tier] || rates['Premium'];
  const rate = tier[data.service_type] || tier['both'];
  const minCost = area * rate;
  const maxCost = Math.round(minCost * 1.25);
  return {
    ...data,
    estimate_summary: {
      rate_per_sqft: rate,
      estimated_range: `$${minCost.toLocaleString()} - $${maxCost.toLocaleString()}`,
      timeline_weeks: area < 2500 ? '8-16 Weeks' : '16-32 Weeks'
    }
  };
}

async function apiSubmitInquiry(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/inquiries/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) return await res.json();
  } catch (e) {}
  return { ...data, status: 'success' };
}

// Icon helper
function SvgIcon({ name }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {name === 'Home' && <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>}
      {name === 'Building2' && <><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></>}
      {name === 'ChefHat' && <><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></>}
      {name === 'Armchair' && <><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"/><path d="M6 19v2"/><path d="M18 19v2"/></>}
      {name === 'BedDouble' && <><path d="M2 4v16"/><path d="M2 8h20v12"/><path d="M2 17h20"/><path d="M6 8v9"/><path d="M18 8v9"/></>}
      {name === 'Briefcase' && <><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>}
      {name === 'Grid' && <><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></>}
      {name === 'Sun' && <><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/></>}
      {name === 'Warehouse' && <><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/></>}
      {name === 'Building' && <><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/></>}
      {name === 'Factory' && <><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></>}
      {name === 'Hammer' && <><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/></>}
      {name === 'ShieldAlert' && <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></>}
      {name === 'Wrench' && <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></>}
      {name === 'ClipboardList' && <><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></>}
      {name === 'Key' && <><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></>}
      {!['Home','Building2','ChefHat','Armchair','BedDouble','Briefcase','Grid','Sun','Warehouse','Building','Factory','Hammer','ShieldAlert','Wrench','ClipboardList','Key'].includes(name) && (
        <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>
      )}
    </svg>
  );
}

// 1. Header Component
function Header({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <span className="logo-badge">V&S</span>
          <span className="logo-text">VASTU <span>&</span> STRUX</span>
        </a>

        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#hero" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Us</a></li>
            <li><a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a></li>
            <li><a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a></li>
            <li><a href="#process" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>Process</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn btn-primary" onClick={onOpenQuote}>Get a Quote</button>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

// 2. Sliding Door Split Hero Component
function SplitHero({ doorMode, setDoorMode, onSelectCategory, onOpenQuote }) {
  const [hoverPreview, setHoverPreview] = useState(null);

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
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCycleNext = (currentSide, e) => {
    e.stopPropagation();
    if (doorMode === 'interior') {
      // 1st click from Interior -> Construction
      setDoorMode('construction');
    } else if (doorMode === 'construction') {
      // 2nd click from Construction -> Split 50/50
      setDoorMode('split');
    } else {
      setDoorMode('interior');
    }
  };

  const interiorPills = ["Residential Interiors", "Commercial Spaces", "Modular Kitchens", "Master Suites", "Acoustic Ceilings", "Architectural Lighting"];
  const constructionPills = ["Ground-Up Residential", "Commercial Towers", "Structural RCC", "Heritage Renovation", "Civil Engineering", "Turnkey Delivery"];

  return (
    <section id="hero" className="split-hero-wrapper">
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
          {/* 100% Genuine Luxury Interior Living & Architectural Ambience Background */}
          <div 
            className="split-bg" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85')` 
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
          {/* 100% Genuine Civil Engineering & Architectural Construction Background */}
          <div 
            className="split-bg" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1800&q=85')` 
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
    </section>
  );
}

// 3. About Company
function AboutCompany({ onOpenQuote }) {
  const stats = [
    { value: "18+", label: "Years of Excellence", desc: "Established studio & civil practice" },
    { value: "340+", label: "Completed Projects", desc: "Luxury residences & commercial towers" },
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
              <p>"Great architecture is not just how a structure looks, but how flawlessly its structure, lighting, materials, and living spaces function together."</p>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <button className="btn btn-secondary" onClick={onOpenQuote}>Discover Our Approach →</button>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. Services Section
function ServicesSection({ activeCategory, onCategoryChange, onOpenQuoteWithService }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    apiFetchServices(activeCategory).then(data => setServices(data));
  }, [activeCategory]);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">COMPREHENSIVE CAPABILITIES</span>
          <h2 className="section-title">End-to-End Architectural Services</h2>
          <p className="section-subtitle">
            Whether sculpting tailored luxury interiors or building multi-storey civil foundations, 
            our specialized divisions ensure seamless execution from first sketch to final key handover.
          </p>
        </div>

        <div className="service-filter-nav">
          <button className={`service-tab-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => onCategoryChange('all')}>All Services (16)</button>
          <button className={`service-tab-btn ${activeCategory === 'interior' ? 'active' : ''}`} onClick={() => onCategoryChange('interior')}>Interior Design (8)</button>
          <button className={`service-tab-btn ${activeCategory === 'construction' ? 'active' : ''}`} onClick={() => onCategoryChange('construction')}>Construction (8)</button>
        </div>

        <div className="services-grid">
          {services.map((srv) => (
            <div key={srv.id} className={`service-card ${srv.category}`}>
              <div className="service-card-header">
                <div className="service-icon-wrap"><SvgIcon name={srv.icon_name} /></div>
                <span className="service-category-badge">{srv.category === 'interior' ? 'Interior' : 'Construction'}</span>
              </div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.short_desc}</p>
              {srv.features && (
                <ul className="service-features-list">
                  {srv.features.map((f, idx) => <li key={idx} className="service-feature-item">{f}</li>)}
                </ul>
              )}
              <div className="service-card-action">
                <button className="service-inquire-btn" onClick={() => onOpenQuoteWithService(srv.title, srv.category)}>
                  Inquire For Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. Featured Projects
function FeaturedProjects({ activeCategory = 'all', onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState(activeCategory || 'all');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (activeCategory) {
      setActiveFilter(activeCategory);
    }
  }, [activeCategory]);

  useEffect(() => {
    let cat = 'all', pType = 'all';
    if (activeFilter === 'interior' || activeFilter === 'construction') cat = activeFilter;
    else if (activeFilter === 'residential' || activeFilter === 'commercial') pType = activeFilter;
    apiFetchProjects(cat, pType).then(data => setProjects(data));
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

        <div className="project-filters">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'interior', label: 'Interior Design' },
            { id: 'construction', label: 'Construction' },
            { id: 'residential', label: 'Residential' },
            { id: 'commercial', label: 'Commercial' },
          ].map(f => (
            <button key={f.id} className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`} onClick={() => setActiveFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card" onClick={() => setSelectedProject(proj)}>
              <div className="project-img-wrap">
                <img src={proj.image_url} alt={proj.title} className="project-img" loading="lazy" />
                <div className="project-tag-pill">{proj.category_display || (proj.category === 'interior' ? 'Interior' : 'Construction')}</div>
                <div className="project-specs-overlay">{proj.area_sqft ? `${proj.area_sqft.toLocaleString()} Sq. Ft.` : 'Featured'}</div>
              </div>
              <div className="project-info">
                <div className="project-location"><span>📍 {proj.location} • {proj.year}</span></div>
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-desc">{proj.description}</p>
                <div className="project-card-meta">
                  <span style={{ textTransform: 'capitalize' }}>Type: {proj.project_type}</span>
                  <span className="view-project-link">View Project Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-container lightbox-card" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img-wrap">
              <img src={selectedProject.image_url} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button className="modal-close-btn" style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'rgba(0,0,0,0.8)', borderRadius: '50%', padding: '0.6rem', color: '#fff' }} onClick={() => setSelectedProject(null)}>✕</button>
            </div>
            <div className="lightbox-content">
              <span className="section-tag">{selectedProject.category_display} • {selectedProject.project_type_display || selectedProject.project_type}</span>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{selectedProject.title}</h2>
              <div className="lightbox-meta-grid">
                <div><div className="meta-item-label">Location</div><div className="meta-item-val">{selectedProject.location}</div></div>
                <div><div className="meta-item-label">Floor Area</div><div className="meta-item-val">{selectedProject.area_sqft ? `${selectedProject.area_sqft.toLocaleString()} Sq. Ft.` : 'Custom'}</div></div>
                <div><div className="meta-item-label">Timeline</div><div className="meta-item-val">{selectedProject.duration || '6 Months'}</div></div>
                <div><div className="meta-item-label">Completed</div><div className="meta-item-val">{selectedProject.year || '2024'}</div></div>
              </div>
              <p style={{ color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>{selectedProject.description}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => { setSelectedProject(null); onOpenQuote(); }}>Request Similar Project Estimate</button>
                <button className="btn btn-secondary" onClick={() => setSelectedProject(null)}>Close Preview</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// 6. Why Choose Us
function WhyChooseUs() {
  const pillars = [
    { num: "01", title: "Professional Expertise", desc: "Chartered structural engineers, licensed architects, and certified site supervisors managing every stage of construction and interior fitouts." },
    { num: "02", title: "Quality Materials", desc: "Direct procurement of premium grade steel, certified high-strength concrete, Italian marble slabs, and durable eco-friendly joinery materials." },
    { num: "03", title: "Transparent Pricing", desc: "Complete Bill of Quantities (BOQ) with fixed itemized rates. No surprise surcharges, unapproved variations, or hidden contract fees." },
    { num: "04", title: "On-Time Execution", desc: "Rigorous milestone-based Gantt scheduling with active weekly client dashboards ensuring delivery on or ahead of contracted schedules." },
    { num: "05", title: "End-to-End Management", desc: "From municipal permits and structural excavation to turnkey styling and MEP integrations, we serve as your sole accountability partner." },
    { num: "06", title: "Customer-Focused Approach", desc: "Tailored spatial layouts and customized architectural aesthetics engineered specifically around your family lifestyle or organizational workflows." }
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">THE VASTU & STRUX ADVANTAGE</span>
          <h2 className="section-title">Why Discerning Clients Choose Us</h2>
          <p className="section-subtitle">We bridge the gap between creative design vision and uncompromising structural engineering, delivering spaces of timeless distinction.</p>
        </div>
        <div className="why-us-grid">
          {pillars.map((p, i) => (
            <div key={i} className="pillar-card">
              <div className="pillar-number">{p.num}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. Our Process
function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { num: "01", title: "Consultation", desc: "Initial in-depth discovery session, spatial site inspection, budget alignment, and lifestyle requirements mapping." },
    { num: "02", title: "Planning & Design", desc: "Architectural floorplans, 3D photorealistic renderings, material moodboards, and structural engineering designs." },
    { num: "03", title: "Estimation", desc: "Transparent itemized Bill of Quantities (BOQ), material specification schedule, and committed milestone completion dates." },
    { num: "04", title: "Approval", desc: "Regulatory municipal clearances, technical drawing sign-offs, and procurement scheduling before breaking ground." },
    { num: "05", title: "Execution", desc: "Supervised civil construction, MEP integration, drywalling, bespoke joinery manufacturing, and fine finishing." },
    { num: "06", title: "Final Handover", desc: "Multi-point QA audit, deep snagging inspection, certification handover, and warranty documentation delivery." }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">METHODOLOGY</span>
          <h2 className="section-title">Our 6-Stage Delivery Process</h2>
          <p className="section-subtitle">A structured, transparent workflow engineered to ensure flawless precision, zero timeline surprises, and absolute peace of mind.</p>
        </div>
        <div className="process-timeline">
          {steps.map((s, i) => (
            <div key={i} className={`process-step-card ${activeStep === i ? 'active' : ''}`} onClick={() => setActiveStep(i)} style={{ cursor: 'pointer' }}>
              <div className="process-step-num">{s.num}</div>
              <h3 className="process-step-title">{s.title}</h3>
              <p className="process-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. Call to Action
function CallToAction({ onOpenQuote, onScrollToContact }) {
  return (
    <section className="cta-section">
      <div className="cta-backdrop-glow" />
      <div className="container">
        <div className="cta-box">
          <span className="section-tag">START YOUR TRANSFORMATION</span>
          <h2 className="cta-heading">Let's Build Something Exceptional</h2>
          <p className="cta-desc">Whether you are planning a ground-up luxury residence, commercial facility, or bespoke interior renovation, our team is ready to bring your vision to life.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={onOpenQuote}>Start Your Project →</button>
            <button className="btn btn-secondary" onClick={onScrollToContact}>Get a Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// 9. Contact Section
function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service_interest: 'Interior & Construction', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in name, email, and message.', 'error');
      return;
    }
    setSubmitting(true);
    await apiSubmitInquiry(formData);
    onShowToast('Thank you! Your consultation inquiry has been received. Our architects will contact you shortly.', 'success');
    setFormData({ name: '', email: '', phone: '', service_interest: 'Interior & Construction', message: '' });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="section-title">Schedule a Design Consultation</h2>
          <p className="section-subtitle">Speak directly with our principal architects and project engineers to discuss your upcoming interior or construction endeavor.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-col">
            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <div>
                <h4 className="contact-info-title">Headquarters & Studio</h4>
                <p className="contact-info-val">420 Architecture Boulevard, Design District<br />Metropolis, NY 10012</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">✉️</div>
              <div>
                <h4 className="contact-info-title">Direct Inquiries</h4>
                <p className="contact-info-val">consult@vastustrux.com<br />projects@vastustrux.com</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <div>
                <h4 className="contact-info-title">Telephone & Site Visits</h4>
                <p className="contact-info-val">+1 (800) 482-7889<br />Mon - Sat: 8:00 AM – 7:00 PM EST</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" required placeholder="e.g. Jonathan Vance" className="form-input" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" required placeholder="jonathan@example.com" className="form-input" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="form-input" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Service Interest</label>
                  <select className="form-select" value={formData.service_interest} onChange={(e) => setFormData({...formData, service_interest: e.target.value})}>
                    <option value="Interior & Construction">Turnkey (Interior + Construction)</option>
                    <option value="Interior Design">Interior Design Only</option>
                    <option value="Construction">Construction Only</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Project Scope & Details *</label>
                <textarea required placeholder="Describe your location, approx square footage, timeline..." className="form-textarea" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                {submitting ? 'Submitting...' : 'Send Consultation Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10. Quote Modal
function QuoteModal({ isOpen, onClose, initialService, initialCategory, onShowToast }) {
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
    if (initialService) setMessage(`Interested in: ${initialService}`);
  }, [initialService, initialCategory, isOpen]);

  if (!isOpen) return null;

  const rates = {
    'Standard': { interior: 85, construction: 140, both: 210 },
    'Premium': { interior: 130, construction: 195, both: 305 },
    'Luxury Haute': { interior: 220, construction: 310, both: 490 }
  };
  const rate = rates[finishTier][serviceType];
  const liveMin = areaSqft * rate;
  const liveMax = Math.round(liveMin * 1.25);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      onShowToast('Please provide your name and email.', 'error');
      return;
    }
    setSubmitting(true);
    const res = await apiSubmitQuote({ name, email, phone, service_type: serviceType, project_type: projectType, finish_tier: finishTier, estimated_area: areaSqft, message });
    setEstimateResult(res.estimate_summary);
    onShowToast('Quotation successfully generated & submitted to our estimating team!', 'success');
    setSubmitting(false);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="section-tag" style={{ marginBottom: '0.25rem' }}>INSTANT ESTIMATOR & PROPOSAL</span>
            <h3 className="modal-title">Get a Personalized Project Quote</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} style={{ fontSize: '1.2rem', color: '#fff' }}>✕</button>
        </div>

        <div className="modal-body">
          {estimateResult ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: 'rgba(194, 155, 97, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '2rem' }}>✓</div>
              <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Quotation Request Received</h3>
              <p style={{ color: 'var(--text-light-secondary)', marginBottom: '2rem' }}>An estimating engineer will review your specifications and follow up with a formal Bill of Quantities (BOQ).</p>
              <div className="estimate-result-banner" style={{ flexDirection: 'column', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', padding: '1.75rem' }}>
                <span className="estimate-result-label">INDICATIVE PROJECT INVESTMENT RANGE</span>
                <span className="estimate-result-price">{estimateResult.estimated_range}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)' }}>Estimated Rate: ${estimateResult.rate_per_sqft} / Sq. Ft. • Timeline: {estimateResult.timeline_weeks}</span>
              </div>
              <button className="btn btn-primary" onClick={() => { setEstimateResult(null); onClose(); }}>Close & Return</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="estimator-calc-box">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>1. Scope & Finish Tier</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>Live indicative calculation</span>
                </div>
                <div className="calc-grid">
                  <button type="button" className={`tier-select-btn ${serviceType === 'interior' ? 'active' : ''}`} onClick={() => setServiceType('interior')}>Interior Design</button>
                  <button type="button" className={`tier-select-btn ${serviceType === 'construction' ? 'active' : ''}`} onClick={() => setServiceType('construction')}>Construction</button>
                  <button type="button" className={`tier-select-btn ${serviceType === 'both' ? 'active' : ''}`} onClick={() => setServiceType('both')}>Turnkey (Both)</button>
                </div>
                <div className="calc-grid">
                  {['Standard', 'Premium', 'Luxury Haute'].map(t => (
                    <button key={t} type="button" className={`tier-select-btn ${finishTier === t ? 'active' : ''}`} onClick={() => setFinishTier(t)}>{t} Tier</button>
                  ))}
                </div>
                <div className="range-slider-wrap">
                  <div className="range-slider-header">
                    <span>Estimated Area (Sq. Ft.)</span>
                    <span className="range-slider-val">{areaSqft.toLocaleString()} Sq. Ft.</span>
                  </div>
                  <input type="range" min="500" max="10000" step="100" value={areaSqft} onChange={(e) => setAreaSqft(Number(e.target.value))} className="custom-range-slider" />
                </div>
                <div className="estimate-result-banner">
                  <div>
                    <div className="estimate-result-label">INDICATIVE ESTIMATE RANGE</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>${rate} / sq ft • {serviceType.toUpperCase()} • {finishTier}</div>
                  </div>
                  <div className="estimate-result-price">${liveMin.toLocaleString()} - ${liveMax.toLocaleString()}</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>2. Contact Information</span>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" required className="form-input" placeholder="Eleanor Rigby" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input type="email" required className="form-input" placeholder="eleanor@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" placeholder="+1 (555) 019-2831" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Property Type</label>
                    <select className="form-select" value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                      <option value="residential">Residential Property</option>
                      <option value="commercial">Commercial Property</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Project Notes</label>
                  <textarea className="form-textarea" style={{ minHeight: '70px' }} placeholder="Provide site location, desired start month, specific preferences..." value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Calculating...' : 'Submit & Receive Official Quote'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// 11. Footer
function Footer({ onOpenQuote, onSelectCategory }) {
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
          <div className="footer-brand">
            <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
              <span className="logo-badge">V&S</span>
              <span className="logo-text">VASTU <span>&</span> STRUX</span>
            </a>
            <p>A multidisciplinary architectural design and civil construction firm delivering bespoke residences, commercial developments, and complete turnkey environments.</p>
          </div>
          <div>
            <h4 className="footer-col-title">Interior Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Residential Interiors</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Commercial Interiors</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Modular Kitchens</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Living Room Design</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Bedroom Suites</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('interior'); }}>Architectural Lighting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Construction</h4>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Residential Construction</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Commercial Construction</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Building Construction</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Renovation & Remodeling</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Structural RCC Works</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleServiceClick('construction'); }}>Turnkey Delivery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Studio & Office</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              420 Architecture Blvd, Design District<br />Metropolis, NY 10012<br />Tel: +1 (800) 482-7889
            </p>
            <button className="btn btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }} onClick={onOpenQuote}>Get a Free Estimate</button>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} VASTU & STRUX Architectural Studio & Construction Inc. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}><a href="#privacy">Privacy Policy</a><a href="#terms">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}

// 12. Toast Notification
function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast-wrap">
      <div className={`toast toast-${type}`}>
        <span>{type === 'success' ? '✓ ' : '⚠️ '}{message}</span>
      </div>
    </div>
  );
}

// 13. Sticky Floating Right-Side Architectural Door Handle (Revealed upon selecting a side)
function StickyFloatingDoorHandle({ doorMode, onCycleDoor }) {
  if (doorMode === 'split') {
    return null; // Hidden on the initial front 50/50 split page
  }

  const getNextLabel = () => {
    if (doorMode === 'interior') return 'CONSTRUCTION';
    return 'INTERIOR';
  };

  const getCurrentBadge = () => {
    if (doorMode === 'interior') return 'INTERIOR';
    return 'CONSTRUCTION';
  };

  return (
    <div 
      className="sticky-floating-door-handle" 
      onClick={onCycleDoor}
      title={`Active: ${getCurrentBadge()} • Click to slide to ${getNextLabel()}`}
    >
      <div className="floating-handle-grip" />
      <div className="floating-handle-text">SLIDE DOOR</div>
      <div className="floating-handle-state-pill">{getCurrentBadge()}</div>
    </div>
  );
}

// MASTER APP ORCHESTRATOR
function App() {
  const [doorMode, setDoorMode] = useState('split');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('');
  const [quoteCategory, setQuoteCategory] = useState('');
  const [toast, setToast] = useState(null);

  const handleCycleDoor = () => {
  const handleSetDoorMode = (mode) => {
    setDoorMode(mode);
    if (mode === 'interior') setActiveCategory('interior');
    else if (mode === 'construction') setActiveCategory('construction');
    else if (mode === 'split') setActiveCategory('all');
  };

  const handleCycleDoor = () => {
    let nextMode = 'interior';
    if (doorMode === 'split') nextMode = 'interior';
    else if (doorMode === 'interior') nextMode = 'construction';
    else if (doorMode === 'construction') nextMode = 'split';
    
    handleSetDoorMode(nextMode);
    
    // Smoothly bring hero into view to observe the sliding door
    const heroEl = document.getElementById('hero');
    if (heroEl) heroEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenQuote = (service = '', category = '') => {
    setQuoteService(service);
    setQuoteCategory(category);
    setIsQuoteOpen(true);
  };

  const showToast = (message, type = 'success') => setToast({ message, type });
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isConstructionTheme = (doorMode === 'construction' || activeCategory === 'construction');

  return (
    <div className={`app-root ${isConstructionTheme ? 'theme-construction-page' : ''}`}>
      <Header onOpenQuote={() => handleOpenQuote()} />
      
      {/* Signature Split Hero with shared door state */}
      <SplitHero 
        doorMode={doorMode}
        setDoorMode={handleSetDoorMode}
        onSelectCategory={(cat) => setActiveCategory(cat)} 
        onOpenQuote={() => handleOpenQuote()} 
      />

      {/* Sticky Floating Right-Side Architectural Door Handle */}
      <StickyFloatingDoorHandle 
        doorMode={doorMode} 
        onCycleDoor={handleCycleDoor} 
      />

      <AboutCompany onOpenQuote={() => handleOpenQuote()} />
      <ServicesSection activeCategory={activeCategory} onCategoryChange={(cat) => setActiveCategory(cat)} onOpenQuoteWithService={(svc, cat) => handleOpenQuote(svc, cat)} />
      <FeaturedProjects activeCategory={activeCategory} onOpenQuote={() => handleOpenQuote()} />
      <WhyChooseUs />
      <OurProcess />
      <CallToAction onOpenQuote={() => handleOpenQuote()} onScrollToContact={scrollToContact} />
      <ContactSection onShowToast={showToast} />
      <Footer onOpenQuote={() => handleOpenQuote()} onSelectCategory={(cat) => setActiveCategory(cat)} />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} initialService={quoteService} initialCategory={quoteCategory} onShowToast={showToast} />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

// Mount to DOM
const rootEl = document.getElementById('root');
if (rootEl && window.ReactDOM) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
