// export default ResultsSection;


import React, { useState, useRef } from 'react';
import './ResultsSection.css';

const resultsData = [
  {
    id: 1,
    title: "Full Scalp Restoration",
    desc: "This 34-year-old man underwent a 3,665-graft hair restoration, designed to rebuild the frontal hairline and extend coverage.",
    before: "https://einstein-clients.imgix.net/3094/482391/original_before-Hair-Loss-Surgery-3665-Full-Scalp-Restoration.jpg?1750455416=&auto=format&fit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482390/original_after-Hair-Loss-Surgery-3665-Full-Scalp-Restoration.jpg?1750455416=&auto=format&fit=max&auto=format&w=540&h=420"
  },
  {
    id: 2,
    title: "Front Temporal Restoration",
    desc: "This 28-year-old patient received 4,086 grafts over three sessions to restore thinning hair in the frontal and crown areas.",
    before: "https://einstein-clients.imgix.net/3094/482449/original_before-Hair-Loss-Surgery-4086-Graft-Staged-Frontotemporal-Restoration.jpg?1750698130=&auto=format&fit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482448/original_after-Hair-Loss-Surgery-4086-Graft-Staged-Frontotemporal-Restoration.jpg?1750698130=&auto=format&fit=max&auto=format&w=540&h=420"
  },
  {
    id: 3,
    title: "Hairline Advancement",
    desc: "This 49-year-old woman underwent a 2,141 graft dense-pack procedure to lower her high hairline and enhance thinning frontotemporal areas.",
    before: "https://einstein-clients.imgix.net/3094/482450/original_before-Hair-Loss-Surgery-2141-Female-Frontal-Hairline-Advancement-Using-Dense-Pack-Grafting.jpg?1750698204=&auto=format&fit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482451/original_after-Hair-Loss-Surgery-2141-Female-Frontal-Hairline-Advancement-Using-Dense-Pack-Grafting.jpg?1750698204=&auto=format&fit=max&auto=format&w=540&h=420"
  },
  {
    id: 4,
    title: "Frontal Midscalp Restoration",
    desc: "This patient underwent a two-session hair restoration totaling 4,563 grafts to create a natural hairline and boost density.",
    before: "https://einstein-clients.imgix.net/3094/482455/original_before-Hair-Loss-Surgery-4563-Graft-Frontal-Midscalp-Restoration.jpg?1750701444=&auto=format&fit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482454/original_after-Hair-Loss-Surgery-4563-Graft-Frontal-Midscalp-Restoration.jpg?1750701443=&auto=format&fit=max&auto=format&w=540&h=420"
  },
   {
    id: 5,
    title: "Hairline Advancement",
    desc: "This 49-year-old woman underwent a 2,141 graft dense-pack procedure to lower her high hairline and enhance thinning frontotemporal areas.",
    before: "https://einstein-clients.imgix.net/3094/482450/original_before-Hair-Loss-Surgery-2141-Female-Frontal-Hairline-Advancement-Using-Dense-Pack-Grafting.jpg?1750698204=&auto=format&fit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482451/original_after-Hair-Loss-Surgery-2141-Female-Frontal-Hairline-Advancement-Using-Dense-Pack-Grafting.jpg?1750698204=&auto=format&fit=max&auto=format&w=540&h=420"
  },
   {
    id: 6,
    title: "Hairline Advancement",
    desc: "This 49-year-old woman underwent a 2,141 graft dense-pack procedure to lower her high hairline and enhance thinning frontotemporal areas.",
    before: "https://einstein-clients.imgix.net/3094/482450/original_before-Hair-Loss-Surgery-2141-Female-Frontal-Hairline-Advancement-Using-Dense-Pack-Grafting.jpg?1750698204=&auto=format&fit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482451/original_after-Hair-Loss-Surgery-2141-Female-Frontal-Hairline-Advancement-Using-Dense-Pack-Grafting.jpg?1750698204=&auto=format&fit=max&auto=format&w=540&h=420"
  }
];

// --- SUB-COMPONENT FOR INDIVIDUAL SLIDERS ---
const ResultSlider = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const width = rect.width;
    let percent = (x / width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setSliderPosition(percent);
  };

  return (
    <div 
      className="res-slider-container" 
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={after} alt="After" className="res-img-base" />
      <span className="res-label label-after">After</span>

      <div className="res-img-overlay" style={{ width: `${sliderPosition}%` }}>
        <img src={before} alt="Before" />
        <span className="res-label label-before">Before</span>
      </div>

      <div className="res-handle" style={{ left: `${sliderPosition}%` }}>
        <div className="res-handle-line"></div>
        <div className="res-handle-circle">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
        </div>
      </div>
    </div>
  );
};


// --- MAIN COMPONENT ---
const ResultsSection = () => {
  return (
    <div className="results-section">
      <h2 className="main-heading">The Results Speak for Themselves</h2>
      
      <div className="results-grid">
        {resultsData.map((item) => (
          <div key={item.id} className="result-card">
            
            {/* Using the new Slider Component here */}
            <ResultSlider before={item.before} after={item.after} />

            {/* Text Content */}
            <div className="res-text-content">
              <h3 className="res-title">{item.title}</h3>
              <p className="res-desc">{item.desc}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;