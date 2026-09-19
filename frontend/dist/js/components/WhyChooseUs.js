import React from 'react';

export default function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      title: "Professional Expertise",
      desc: "Chartered structural engineers, licensed architects, and certified site supervisors managing every stage of construction and interior fitouts."
    },
    {
      num: "02",
      title: "Quality Materials",
      desc: "Direct procurement of premium grade steel, certified high-strength concrete, Italian marble slabs, and durable eco-friendly joinery materials."
    },
    {
      num: "03",
      title: "Transparent Pricing",
      desc: "Complete Bill of Quantities (BOQ) with fixed itemized rates. No surprise surcharges, unapproved variations, or hidden contract fees."
    },
    {
      num: "04",
      title: "On-Time Execution",
      desc: "Rigorous milestone-based Gantt scheduling with active weekly client dashboards ensuring delivery on or ahead of contracted schedules."
    },
    {
      num: "05",
      title: "End-to-End Management",
      desc: "From municipal permits and structural excavation to turnkey styling and MEP integrations, we serve as your sole accountability partner."
    },
    {
      num: "06",
      title: "Customer-Focused Approach",
      desc: "Tailored spatial layouts and customized architectural aesthetics engineered specifically around your family lifestyle or organizational workflows."
    }
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">THE VASTU & STRUX ADVANTAGE</span>
          <h2 className="section-title">Why Discerning Clients Choose Us</h2>
          <p className="section-subtitle">
            We bridge the gap between creative design vision and uncompromising structural engineering, 
            delivering spaces of timeless distinction.
          </p>
        </div>

        <div className="why-us-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-number">{item.num}</div>
              <h3 className="pillar-title">{item.title}</h3>
              <p className="pillar-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
