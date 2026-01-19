// src/components/GalleryChoice.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryChoice.css';

const GalleryChoice = () => {
  return (
    <div className="gallery-choice-section">
      <h2 className="gallery-heading">Before & After Gallery</h2>
      
      <div className="gallery-choice-container">
        
        {/* Card 1: Hair Loss (Men) */}
        <Link to="/gallery/hair-loss" className="choice-card">
          <div className="choice-img-wrapper">
             <img src="https://d1c40o0u1pbjgy.cloudfront.net/public/assets/images/829505/large_image.jpg" alt="Hair Loss Surgery" />
             <div className="choice-overlay">
                <h3>Hair Loss Surgery</h3>
             </div>
          </div>
        </Link>

        {/* Card 2: Hairline Lowering (Women) */}
        <Link to="/gallery/hairline-lowering" className="choice-card">
          <div className="choice-img-wrapper">
             <img src="https://d1c40o0u1pbjgy.cloudfront.net/public/assets/images/1607505/large_image.png" alt="Hairline Lowering Surgery" />
             <div className="choice-overlay">
                <h3>Hairline Lowering Surgery</h3>
             </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default GalleryChoice;