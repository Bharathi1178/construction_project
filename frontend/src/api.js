/**
 * API Service for communicating with Django REST Framework backend
 */
const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE_URL) 
  ? import.meta.env.VITE_API_BASE_URL 
  : 'http://127.0.0.1:8000/api';

export const fallbackServices = [
  // Interior
  {
    id: 1,
    title: "Residential Interiors",
    category: "interior",
    category_display: "Interior Design",
    icon_name: "Home",
    short_desc: "Bespoke residential interior environments tailored to elevated lifestyles, combining ergonomics, luxury materiality, and spatial harmony.",
    features: ["Full Home Concept Design", "Custom Millwork & Joinery", "Art Curation & Furniture Selection", "Spatial Ergonomics"]
  },
  {
    id: 2,
    title: "Commercial Interiors",
    category: "interior",
    category_display: "Interior Design",
    icon_name: "Building2",
    short_desc: "High-impact commercial workspaces, flagship retail stores, and hospitality environments that amplify brand prestige and human productivity.",
    features: ["Brand Identity Integration", "Acoustic Engineering", "Dynamic Collaboration Zones", "Compliance & Safety"]
  },
  {
    id: 3,
    title: "Modular Kitchen",
    category: "interior",
    category_display: "Interior Design",
    icon_name: "ChefHat",
    short_desc: "German-engineered modular culinary spaces featuring quartz worktops, soft-close hardware, integrated smart appliances, and concealed storage.",
    features: ["Precision Ergonomic Layouts", "Quartz & Dekton Countertops", "Smart Integrated Storage", "Anti-Fingerprint Finishes"]
  },
  {
    id: 4,
    title: "Living Room Design",
    category: "interior",
    category_display: "Interior Design",
    icon_name: "Armchair",
    short_desc: "Grand architectural living lounges sculpted with bespoke media consoles, warm ambient lighting layers, and curated statement seating.",
    features: ["Statement Accent Walls", "Architectural Media Units", "Custom Rugs & Upholstery", "Layered Illumination"]
  },
  {
    id: 5,
    title: "Bedroom Design",
    category: "interior",
    category_display: "Interior Design",
    icon_name: "BedDouble",
    short_desc: "Tranquil master suites and guest retreats engineered for sensory calm, acoustic isolation, walk-in closets, and customized headboards.",
    features: ["Custom Walk-In Wardrobes", "Acoustic Wall Paneling", "Automated Ambient Dimmers", "Integrated Bedside Automation"]
  },
  {
    id: 6,
    title: "Office Interiors",
    category: "interior",
    category_display: "Interior Design",
    icon_name: "Briefcase",
    short_desc: "Executive corporate boardrooms, private C-suite chambers, and collaborative agile workstations crafted for visionary organizations.",
    features: ["Ergonomic Executive Desking", "Soundproof Meeting Pods", "Smart Conference Tech Integration", "Biophilic Elements"]
  },
  {
    id: 7,
    title: "False Ceiling",
    category: "interior",
    category_display: "Interior Design",
    icon_name: "Grid",
    short_desc: "Architectural ceiling profiles with concealed cove LED troughs, acoustic baffle treatments, recessed channels, and seamless plasterwork.",
    features: ["Cove & Perimeter LED Channels", "Gypsum & Acoustic Baffles", "AC Diffuser Integration", "Shadow-line Trims"]
  },
  {
    id: 8,
    title: "Lighting Design",
    category: "interior",
    category_display: "Interior Design",
    icon_name: "Sun",
    short_desc: "Multi-tier architectural lighting schemes blending direct task illumination, museum-grade accent fixtures, and circadian smart control.",
    features: ["Circadian Dimming Protocols", "Architectural Track Spotlights", "Custom Chandelier Installations", "Scene Automation"]
  },
  // Construction
  {
    id: 9,
    title: "Residential Construction",
    category: "construction",
    category_display: "Construction",
    icon_name: "Warehouse",
    short_desc: "Ground-up bespoke villas, multi-family residences, and luxury contemporary estates built with structural precision and timeless craftsmanship.",
    features: ["Deep Foundation & RCC Framing", "Thermal & Acoustic Insulation", "Custom Architectural Facades", "Smart Home Infrastructure"]
  },
  {
    id: 10,
    title: "Commercial Construction",
    category: "construction",
    category_display: "Construction",
    icon_name: "Building",
    short_desc: "State-of-the-art office towers, retail complexes, and institutional facilities engineered to the highest commercial building codes.",
    features: ["Steel & Concrete Frame Systems", "Curtain Wall Glazing", "High-Volume MEP Coordination", "Green Building Certifications"]
  },
  {
    id: 11,
    title: "Building Construction",
    category: "construction",
    category_display: "Construction",
    icon_name: "Factory",
    short_desc: "End-to-end structural engineering and vertical development of multi-storey properties with rigorous geotechnical and seismic standards.",
    features: ["Seismic-Resistant Structural Core", "Sub-structure Waterproofing", "Prefabricated Concrete Elements", "Heavy Machinery Site Ops"]
  },
  {
    id: 12,
    title: "Renovation",
    category: "construction",
    category_display: "Construction",
    icon_name: "Hammer",
    short_desc: "Complete structural overhauls, historic building restorations, and modern expansions that breathe new life into existing properties.",
    features: ["Load-Bearing Wall Removal", "Retrofit Structural Reinforcement", "Facade Modernization", "Complete MEP Upgrades"]
  },
  {
    id: 13,
    title: "Structural Works",
    category: "construction",
    category_display: "Construction",
    icon_name: "ShieldAlert",
    short_desc: "Reinforced concrete framing, structural steel fabrication, underpinning, and heavy foundation engineering for enduring integrity.",
    features: ["Post-Tensioned Slab Systems", "Structural Steel Framework", "Retaining Walls & Shoring", "Non-Destructive Testing"]
  },
  {
    id: 14,
    title: "Civil Works",
    category: "construction",
    category_display: "Construction",
    icon_name: "Wrench",
    short_desc: "Comprehensive site preparation, grading, stormwater drainage, subterranean utilities, and heavy earthwork infrastructure.",
    features: ["Site Grading & Excavation", "Underground Drainage & Sewerage", "Paving & Access Roadways", "Retaining Wall Systems"]
  },
  {
    id: 15,
    title: "Project Management",
    category: "construction",
    category_display: "Construction",
    icon_name: "ClipboardList",
    short_desc: "Dedicated on-site superintendent management, milestone Gantt tracking, rigorous QA/QC inspection, and transparent vendor coordination.",
    features: ["Critical Path Schedule Tracking", "Strict Site Safety (OSHA) QA", "Vendor & Subcontractor Audits", "Daily Progress Reporting"]
  },
  {
    id: 16,
    title: "Turnkey Construction",
    category: "construction",
    category_display: "Construction",
    icon_name: "Key",
    short_desc: "Single-contract complete delivery uniting architectural design, structural engineering, procurement, and interior handover.",
    features: ["Single Point of Accountability", "Guaranteed Maximum Price (GMP)", "Integrated MEP + Fitouts", "Seamless Move-In Handover"]
  }
];

export const fallbackProjects = [
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
    duration: "14 Months",
    client_type: "Private Client"
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
    duration: "22 Months",
    client_type: "Vertex Global Capital"
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
    duration: "11 Months",
    client_type: "Private Family Estate"
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
    duration: "16 Months",
    client_type: "Private Estate"
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
    duration: "7 Months",
    client_type: "Private Residence"
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
    duration: "5 Months",
    client_type: "Apex Ventures"
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
    duration: "3 Months",
    client_type: "Private Client"
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
    duration: "4 Months",
    client_type: "Private Client"
  }
];

export async function fetchServices(category = 'all') {
  try {
    const url = category && category !== 'all' 
      ? `${API_BASE_URL}/services/?category=${category}` 
      : `${API_BASE_URL}/services/`;
    const res = await fetch(url);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn("Using offline fallback for services:", err.message);
  }
  
  if (category === 'all') return fallbackServices;
  return fallbackServices.filter(s => s.category.toLowerCase() === category.toLowerCase());
}

export async function fetchProjects(category = 'all', projectType = 'all') {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (projectType && projectType !== 'all') params.append('project_type', projectType);
    
    const url = `${API_BASE_URL}/projects/?${params.toString()}`;
    const res = await fetch(url);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn("Using offline fallback for projects:", err.message);
  }

  return fallbackProjects.filter(p => {
    const matchCat = category === 'all' || p.category.toLowerCase() === category.toLowerCase();
    const matchType = projectType === 'all' || p.project_type.toLowerCase() === projectType.toLowerCase();
    return matchCat && matchType;
  });
}

export async function submitQuoteRequest(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/quotes/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn("API offline, simulating local quote calculation:", err.message);
  }

  // Local calculation fallback
  const area = Number(data.estimated_area) || 1500;
  const rates = {
    'Standard': { interior: 85, construction: 140, both: 210 },
    'Premium': { interior: 130, construction: 195, both: 305 },
    'Luxury Haute': { interior: 220, construction: 310, both: 490 }
  };
  const tierRates = rates[data.finish_tier] || rates['Premium'];
  const rate = tierRates[data.service_type] || tierRates['both'];
  const minCost = area * rate;
  const maxCost = Math.round(minCost * 1.25);

  return {
    ...data,
    id: Date.now(),
    estimate_summary: {
      rate_per_sqft: rate,
      estimated_range: `$${minCost.toLocaleString()} - $${maxCost.toLocaleString()}`,
      estimated_min: minCost,
      estimated_max: maxCost,
      currency: 'USD',
      timeline_weeks: area < 2500 ? '8-16 Weeks' : '16-32 Weeks',
      notes: 'Indicative range based on selected tier and architectural specifications.'
    }
  };
}

export async function submitInquiry(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/inquiries/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn("API offline, accepting contact form locally:", err.message);
  }
  return { ...data, status: 'success' };
}
