// export default ExpertCare;

import React, { useState, useRef } from 'react';
import './ExpertCare.css';
import { Link } from 'react-router-dom';

const ExpertCare = () => {
  // --- SLIDER LOGIC ---
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

  // Image URLs (extracted from your code)
  const imgBefore = "https://einstein-clients.imgix.net/3094/482385/original_before-Hair-Loss-Surgery-2249-Frontal-Midscalp-Restoration.jpg?1750452083=&auto=format&fit=max&auto=format&w=540&h=420";
  const imgAfter = "https://einstein-clients.imgix.net/3094/482384/original_after-Hair-Loss-Surgery-2249-Frontal-Midscalp-Restoration.jpg?1750452083=&auto=format&fit=max&auto=format&w=540&h=420";

  return (
    <div className="expert-section">
      <div className="expert-container">
        
        {/* --- LEFT COLUMN: Images & Review --- */}
        <div className="expert-left">
          
          {/* --- NEW: SLIDER COMPONENT --- */}
          <div 
            className="expert-slider-container" 
            ref={containerRef}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* 1. Base Image (AFTER) */}
            <img src={imgAfter} alt="After" className="img-base" />
            <span className="slider-label label-after">After</span>

            {/* 2. Overlay Image (BEFORE) - Width changes dynamically */}
            <div className="img-overlay" style={{ width: `${sliderPosition}%` }}>
              <img src={imgBefore} alt="Before" />
              <span className="slider-label label-before">Before</span>
            </div>

            {/* 3. Slider Handle */}
            <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
              <div className="handle-line"></div>
              <div className="handle-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
              </div>
            </div>
          </div>
          {/* --- END SLIDER --- */}

          <p className="ba-caption">
            Our advanced hair restoration solutions can give you natural-looking results.
          </p>

          {/* Testimonial Quote */}
          <div className="testimonial-block">
            <p className="quote-text">
              “I give the highest marks possible to Dr. Sahar Nadimi and her staff. The surgery I received was an FUT hair restoration... My experience at the Chicago Hair Institute Clinic was A+++, and I would highly recommend this clinic to anyone. Thank you.”
            </p>
            <p className="quote-author">— <strong>A J</strong>, <span className="green-text">5-Star Review</span></p>
          </div>

        </div>

        {/* --- RIGHT COLUMN: Content & Buttons --- */}
        <div className="expert-right">
          <h2 className="expert-heading">Expert Care with Convenient Payment Options</h2>
          
          <p className="expert-desc">
            Dr. Raymond Konior and Dr. Sahar Nadimi provide advanced hair restoration care to patients from around the world. Their expertise includes <span className="green-text underline">follicular unit extraction (FUE)</span>, a precise technique that transplants small groups of follicles.
          </p>

          <p className="expert-desc">
            At the Chicago Hair Institute, we want our services to be accessible and affordable, which is why we make paying for treatment easy. We accept all major credit cards including Visa, Mastercard, Discover, and American Express.
          </p>

          {/* Buttons */}
          <div className="expert-buttons">
           <Link to="/contact" className="btn-teal btn-call" onClick={() => window.scrollTo(0, 0)}>
              CALL OUR OFFICE
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ExpertCare;