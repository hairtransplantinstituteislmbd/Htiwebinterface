// export default ResultsSection;


import React, { useState, useRef } from 'react';
import './ResultsSection.css';
import ChWajahatBefore from '../Images/Ch Wajahat FUE After.webp'; 
import ChWajahatAfter from '../Images/Ch Wajahat FUE Before.webp'; 
import MasabAnwarAfter from '../Images/Masab Anwar FUE After.webp'; 
import MasabAnwarBefore from '../Images/Masab Anwar FUE Before.webp'; 
import MuhammadSaadAfter from '../Images/Muhammad Saad After.webp'; 
import MuhammadSaadBefore from '../Images/Muhammad Saad Before.webp'; 
import NaveedMalikAfter from '../Images/Naveed Malik After.webp'; 
import NaveedMalikBefore from '../Images/Naveed Malik Before.webp'; 
import RanaNaveedAfter from '../Images/Rana Naveed After.webp'; 
import RanaNaveedBefore from '../Images/Rana Naveed Before.webp'; 
import RashidJanjuaAfter from '../Images/Rashid Janjua FUE After.webp'; 
import RashidJanjuaBefore from '../Images/Rashid Janjua FUE Before.webp'; 



const resultsData = [
  {
    id: 1,
    title: "Full Scalp Restoration",
    desc: "This 34-year-old man underwent a 3,665-graft hair restoration, designed to rebuild the frontal hairline and extend coverage.",
     before: ChWajahatBefore ,
    after: ChWajahatAfter },
  {
    id: 2,
    title: "Front Temporal Restoration",
    desc: "This 28-year-old patient received 4,086 grafts over three sessions to restore thinning hair in the frontal and crown areas.",
    before: MasabAnwarBefore ,
    after: MasabAnwarAfter
  },
  {
    id: 3,
    title: "Hairline Advancement",
    desc: "This 49-year-old woman underwent a 2,141 graft dense-pack procedure to lower her high hairline and enhance thinning frontotemporal areas.",
     before: MuhammadSaadBefore ,
    after: MuhammadSaadAfter },
  {
    id: 4,
    title: "Frontal Midscalp Restoration",
    desc: "This patient underwent a two-session hair restoration totaling 4,563 grafts to create a natural hairline and boost density.",
     before: NaveedMalikBefore ,
    after: NaveedMalikAfter },
   {
    id: 5,
    title: "Hairline Advancement",
    desc: "This 49-year-old woman underwent a 2,141 graft dense-pack procedure to lower her high hairline and enhance thinning frontotemporal areas.",
    before: RanaNaveedBefore ,
    after: RanaNaveedAfter  },
   {
    id: 6,
    title: "Hairline Advancement",
    desc: "This 49-year-old woman underwent a 2,141 graft dense-pack procedure to lower her high hairline and enhance thinning frontotemporal areas.",
    before: RashidJanjuaBefore ,
    after: RashidJanjuaAfter  },
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