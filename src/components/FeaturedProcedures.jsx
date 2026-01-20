// src/components/FeaturedProcedures.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../servicesData';
import './FeaturedProcedures.css';

const FeaturedProcedures = () => {
  return (
    <div className="procedures-section">
      <div className="procedures-container">
        
        {/* --- LEFT: Text & Links & Testimonial --- */}
        <div className="proc-text-col">
          
          {/* 1. Procedures List */}
          <h2 className="proc-heading">Featured Procedures</h2>
          
          <div className="proc-links-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="proc-item">
                <span className="bullet">•</span>
                <Link to={`/service/${service.id}`} className="proc-link">
                  {service.title}
                </Link>
              </div>
            ))}
          </div>

          {/* 2. NEW: Testimonial Section (Divider ke baad) */}
          <div className="proc-testimonial-block">
            <h2 className="testi-heading">“Do yourself the favor.”</h2>
            
            <p className="testi-quote">
              “If you are like me, wondering the pros and cons of undergoing hair restoration. Just stop wondering, stop questioning! Do yourself the favor and get it done by Dr Raymond Konior! Im 200% certain... he is the guy you need.” 
            </p>
            
            <p className="testi-author">
              — Christian, <span className="testi-stars">5-Star Review</span>
            </p>

            {/* Buttons */}
            <div className="testi-buttons-row">
             <Link to="/contact" className="btn-teal btn-call">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              CALL HERE
            </Link>
              
             
            </div>
          </div>

        </div>

        {/* --- RIGHT: Image --- */}
        <div className="proc-img-col">
          <img 
            src="https://dramnaclinic.com/wp-content/uploads/2023/07/2nd-image-hair-transplant.jpeg"
          />
        </div>

      </div>
    </div>
  );
};

export default FeaturedProcedures;