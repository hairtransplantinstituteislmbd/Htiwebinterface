import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // 1. Link ko import kiya
import { galleryData } from '../galleryData';
import './Gallery.css';

// 2. detailLink ko as a prop receive kiya
const ComparisonSlider = ({ item, detailLink }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const offsetX = x - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div className="gallery-card">
      <div className="card-tag">{item.type}</div>
      
      <div 
        className="slider-container" 
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After Image */}
        <div className="img-wrapper after">
          <img src={item.after} alt="After" loading="lazy" />
          <div className="img-label after">AFTER</div>
        </div>

        {/* Before Image (Clipped) */}
        <div 
          className="img-wrapper before" 
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img src={item.before} alt="Before" loading="lazy" />
          <div className="img-label before">BEFORE</div>
        </div>

        {/* Professional Slim Handle */}
        <div className="slider-bar" style={{ left: `${sliderPos}%` }}>
          <div className="slider-button">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="4" fill="none"><path d="M15 18l-6-6 6-6"/></svg>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="4" fill="none"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        </div>
      </div>
      
      {/* 3. Card Meta ko update kiya taake Title aur Link dono show hon */}
      <div className="card-meta">
        <h4>H.T.I Clinical Result</h4>
        
        {/* Agar detailLink pass hua hai toh "See More" show hoga */}
        {detailLink && (
          <Link to={detailLink} className="see-more-link">
            See More →
          </Link>
        )}
      </div>
    </div>
  );
};

const Gallery = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const allImages = [
    ...galleryData["hair-loss"].images.map(img => ({ ...img, type: "Hair Loss" })),
    ...galleryData["hairline-lowering"].images.map(img => ({ ...img, type: "Hairline Lowering" }))
  ];

  return (
    <div className="gallery-view">
      <header className="gallery-intro">
        <h1>Transformation Gallery</h1>
        <div className="gold-divider center"></div>
      </header>
      <div className="gallery-grid">
        {allImages.map((item, idx) => {
          // 4. Sirf pehli image (idx === 0) par link add kar rahe hain. 
          // (Aap apne route ke mutabiq link change kar lein)
          const link = idx === 0 ? "/patient-details" : null;
          
          return (
            <ComparisonSlider 
              key={idx} 
              item={item} 
              detailLink={link} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;