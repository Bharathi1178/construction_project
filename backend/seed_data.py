import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from api.models import Service, Project

def seed_database():
    print("Clearing existing services and projects...")
    Service.objects.all().delete()
    Project.objects.all().delete()

    interior_services = [
        {
            "title": "Residential Interiors",
            "category": "interior",
            "icon_name": "Home",
            "short_desc": "Bespoke residential interior environments tailored to elevated lifestyles, combining ergonomics, luxury materiality, and spatial harmony.",
            "features": ["Full Home Concept Design", "Custom Millwork & Joinery", "Art Curation & Furniture Selection", "Spatial Ergonomics"],
            "order": 1
        },
        {
            "title": "Commercial Interiors",
            "category": "interior",
            "icon_name": "Building2",
            "short_desc": "High-impact commercial workspaces, flagship retail stores, and hospitality environments that amplify brand prestige and human productivity.",
            "features": ["Brand Identity Integration", "Acoustic Engineering", "Dynamic Collaboration Zones", "Compliance & Safety"],
            "order": 2
        },
        {
            "title": "Modular Kitchen",
            "category": "interior",
            "icon_name": "ChefHat",
            "short_desc": "German-engineered modular culinary spaces featuring quartz worktops, soft-close hardware, integrated smart appliances, and concealed storage.",
            "features": ["Precision Ergonomic Layouts", "Quartz & Dekton Countertops", "Smart Integrated Storage", "Anti-Fingerprint Finishes"],
            "order": 3
        },
        {
            "title": "Living Room Design",
            "category": "interior",
            "icon_name": "Armchair",
            "short_desc": "Grand architectural living lounges sculpted with bespoke media consoles, warm ambient lighting layers, and curated statement seating.",
            "features": ["Statement Accent Walls", "Architectural Media Units", "Custom Rugs & Upholstery", "Layered Illumination"],
            "order": 4
        },
        {
            "title": "Bedroom Design",
            "category": "interior",
            "icon_name": "BedDouble",
            "short_desc": "Tranquil master suites and guest retreats engineered for sensory calm, acoustic isolation, walk-in closets, and customized headboards.",
            "features": ["Custom Walk-In Wardrobes", "Acoustic Wall Paneling", "Automated Ambient Dimmers", "Integrated Bedside Automation"],
            "order": 5
        },
        {
            "title": "Office Interiors",
            "category": "interior",
            "icon_name": "Briefcase",
            "short_desc": "Executive corporate boardrooms, private C-suite chambers, and collaborative agile workstations crafted for visionary organizations.",
            "features": ["Ergonomic Executive Desking", "Soundproof Meeting Pods", "Smart Conference Tech Integration", "Biophilic Elements"],
            "order": 6
        },
        {
            "title": "False Ceiling",
            "category": "interior",
            "icon_name": "Grid",
            "short_desc": "Architectural ceiling profiles with concealed cove LED troughs, acoustic baffle treatments, recessed channels, and seamless plasterwork.",
            "features": ["Cove & Perimeter LED Channels", "Gypsum & Acoustic Baffles", "AC Diffuser Integration", "Shadow-line Trims"],
            "order": 7
        },
        {
            "title": "Lighting Design",
            "category": "interior",
            "icon_name": "Sun",
            "short_desc": "Multi-tier architectural lighting schemes blending direct task illumination, museum-grade accent fixtures, and circadian smart control.",
            "features": ["Circadian Dimming Protocols", "Architectural Track Spotlights", "Custom Chandelier Installations", "Scene Automation"],
            "order": 8
        },
    ]

    construction_services = [
        {
            "title": "Residential Construction",
            "category": "construction",
            "icon_name": "Warehouse",
            "short_desc": "Ground-up bespoke villas, multi-family residences, and luxury contemporary estates built with structural precision and timeless craftsmanship.",
            "features": ["Deep Foundation & RCC Framing", "Thermal & Acoustic Insulation", "Custom Architectural Facades", "Smart Home Infrastructure"],
            "order": 9
        },
        {
            "title": "Commercial Construction",
            "category": "construction",
            "icon_name": "Building",
            "short_desc": "State-of-the-art office towers, retail complexes, and institutional facilities engineered to the highest commercial building codes.",
            "features": ["Steel & Concrete Frame Systems", "Curtain Wall Glazing", "High-Volume MEP Coordination", "Green Building Certifications"],
            "order": 10
        },
        {
            "title": "Building Construction",
            "category": "construction",
            "icon_name": "Factory",
            "short_desc": "End-to-end structural engineering and vertical development of multi-storey properties with rigorous geotechnical and seismic standards.",
            "features": ["Seismic-Resistant Structural Core", "Sub-structure Waterproofing", "Prefabricated Concrete Elements", "Heavy Machinery Site Ops"],
            "order": 11
        },
        {
            "title": "Renovation",
            "category": "construction",
            "icon_name": "Hammer",
            "short_desc": "Complete structural overhauls, historic building restorations, and modern expansions that breathe new life into existing properties.",
            "features": ["Load-Bearing Wall Removal", "Retrofit Structural Reinforcement", "Facade Modernization", "Complete MEP Upgrades"],
            "order": 12
        },
        {
            "title": "Structural Works",
            "category": "construction",
            "icon_name": "ShieldAlert",
            "short_desc": "Reinforced concrete framing, structural steel fabrication, underpinning, and heavy foundation engineering for enduring integrity.",
            "features": ["Post-Tensioned Slab Systems", "Structural Steel Framework", "Retaining Walls & Shoring", "Non-Destructive Testing"],
            "order": 13
        },
        {
            "title": "Civil Works",
            "category": "construction",
            "icon_name": "Wrench",
            "short_desc": "Comprehensive site preparation, grading, stormwater drainage, subterranean utilities, and heavy earthwork infrastructure.",
            "features": ["Site Grading & Excavation", "Underground Drainage & Sewerage", "Paving & Access Roadways", "Retaining Wall Systems"],
            "order": 14
        },
        {
            "title": "Project Management",
            "category": "construction",
            "icon_name": "ClipboardList",
            "short_desc": "Dedicated on-site superintendent management, milestone Gantt tracking, rigorous QA/QC inspection, and transparent vendor coordination.",
            "features": ["Critical Path Schedule Tracking", "Strict Site Safety (OSHA) QA", "Vendor & Subcontractor Audits", "Daily Progress Reporting"],
            "order": 15
        },
        {
            "title": "Turnkey Construction",
            "category": "construction",
            "icon_name": "Key",
            "short_desc": "Single-contract complete delivery uniting architectural design, structural engineering, procurement, and interior handover.",
            "features": ["Single Point of Accountability", "Guaranteed Maximum Price (GMP)", "Integrated MEP + Fitouts", "Seamless Move-In Handover"],
            "order": 16
        },
    ]

    for item in interior_services + construction_services:
        Service.objects.create(**item)

    print(f"Created {len(interior_services) + len(construction_services)} services.")

    projects = [
        {
            "title": "The Glass Pavillion Estate",
            "category": "construction",
            "project_type": "residential",
            "location": "Beverly Hills, CA",
            "year": "2024",
            "image_url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "description": "A 9,200 sq. ft. modern architectural marvel featuring cantilevered concrete planes, floor-to-ceiling curtain glass, and an infinity water pavilion.",
            "area_sqft": 9200,
            "duration": "14 Months",
            "client_type": "Private Client",
            "is_featured": True,
            "order": 1
        },
        {
            "title": "Aura Penthouse Duplex",
            "category": "interior",
            "project_type": "residential",
            "location": "Tribeca, New York",
            "year": "2024",
            "image_url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            "description": "Minimalist luxury master penthouse styled with Italian Statuario marble slabs, fluted walnut paneling, and customized bronze light fixtures.",
            "area_sqft": 4800,
            "duration": "7 Months",
            "client_type": "Private Residence",
            "is_featured": True,
            "order": 2
        },
        {
            "title": "Vertex Corporate Headquarters",
            "category": "construction",
            "project_type": "commercial",
            "location": "Financial District, London",
            "year": "2023",
            "image_url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            "description": "12-storey high-performance commercial tower featuring sustainable solar glass facades, post-tensioned floor plates, and rooftop executive gardens.",
            "area_sqft": 45000,
            "duration": "22 Months",
            "client_type": "Vertex Global Capital",
            "is_featured": True,
            "order": 3
        },
        {
            "title": "Monolith Executive Lounge & Office",
            "category": "interior",
            "project_type": "commercial",
            "location": "Marina Bay, Singapore",
            "year": "2024",
            "image_url": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
            "description": "Biophilic corporate executive headquarters blending bespoke acoustic felt slatted ceilings, natural volcanic stone islands, and private boardroom pods.",
            "area_sqft": 12500,
            "duration": "5 Months",
            "client_type": "Apex Ventures",
            "is_featured": True,
            "order": 4
        },
        {
            "title": "Solarium Hilltop Residence",
            "category": "construction",
            "project_type": "residential",
            "location": "Aspen, Colorado",
            "year": "2023",
            "image_url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
            "description": "Seismic-grade engineered timber and reinforced concrete chalet with panoramic triple-glazed thermal facades and radiant subterranean heating.",
            "area_sqft": 6800,
            "duration": "11 Months",
            "client_type": "Private Family Estate",
            "is_featured": True,
            "order": 5
        },
        {
            "title": "Nordic Warmth Kitchen & Living",
            "category": "interior",
            "project_type": "residential",
            "location": "Kensington, London",
            "year": "2024",
            "image_url": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
            "description": "Architectural kitchen remodel incorporating integrated Gaggenau appliances, monolithic Dekton island with waterfall edge, and custom smoked-oak joinery.",
            "area_sqft": 2200,
            "duration": "3 Months",
            "client_type": "Private Client",
            "is_featured": True,
            "order": 6
        },
        {
            "title": "Omnia Boutique Retail Gallery",
            "category": "interior",
            "project_type": "commercial",
            "location": "Champs-Élysées, Paris",
            "year": "2024",
            "image_url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
            "description": "Luxury haute horlogerie boutique with travertine display podiums, recessed magnetic track lighting, and private VIP salon rooms.",
            "area_sqft": 3400,
            "duration": "4 Months",
            "client_type": "Maison Omnia",
            "is_featured": True,
            "order": 7
        },
        {
            "title": "Crestview Heritage Villa Remodel",
            "category": "construction",
            "project_type": "residential",
            "location": "Cotswolds, UK",
            "year": "2023",
            "image_url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "description": "Full structural retrofit and subterranean expansion of an 18th-century stone manor, reinforced with discreet steel underpinning and modern glazing.",
            "area_sqft": 7500,
            "duration": "16 Months",
            "client_type": "Private Estate",
            "is_featured": True,
            "order": 8
        }
    ]

    for p in projects:
        Project.objects.create(**p)

    print(f"Created {len(projects)} realistic architectural projects.")

if __name__ == '__main__':
    seed_database()
