import React, { useState } from 'react';

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Initial in-depth discovery session, spatial site inspection, budget alignment, and lifestyle requirements mapping."
    },
    {
      num: "02",
      title: "Planning & Design",
      desc: "Architectural floorplans, 3D photorealistic renderings, material moodboards, and structural engineering designs."
    },
    {
      num: "03",
      title: "Estimation",
      desc: "Transparent itemized Bill of Quantities (BOQ), material specification schedule, and committed milestone completion dates."
    },
    {
      num: "04",
      title: "Approval",
      desc: "Regulatory municipal clearances, technical drawing sign-offs, and procurement scheduling before breaking ground."
    },
    {
      num: "05",
      title: "Execution",
      desc: "Supervised civil construction, MEP integration, drywalling, bespoke joinery manufacturing, and fine finishing."
    },
    {
      num: "06",
      title: "Final Handover",
      desc: "Multi-point QA audit, deep snagging inspection, certification handover, and warranty documentation delivery."
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">METHODOLOGY</span>
          <h2 className="section-title">Our 6-Stage Delivery Process</h2>
          <p className="section-subtitle">
            A structured, transparent workflow engineered to ensure flawless precision, 
            zero timeline surprises, and absolute peace of mind.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`process-step-card ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
              style={{ cursor: 'pointer' }}
            >
              <div className="process-step-num">{step.num}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
