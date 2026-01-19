// src/components/AboutInstitute.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutInstitute.css';

const AboutInstitute = () => {
  return (
    <div className="about-institute-section">
      <div className="ai-container">
        
        {/* --- LEFT SIDE: IMAGE --- */}
        <div className="ai-image-col">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60" 
            alt="Dr. Raymond Konior" 
          />
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="ai-text-col">
          <h2 className="ai-heading">Chicago Hair Institute</h2>
          
          <p className="ai-desc">
            Dr. Raymond J. Konior and the team at the Chicago Hair Institute offer world-class treatment backed by over 30 years of expertise in the field of <Link to="/services" className="ai-link">hair restoration</Link>. Our doctors are nationally affiliated with professional associations including:
          </p>

          <ul className="ai-list">
            <li>Founding Member, American Board of Hair Restoration Surgery</li>
            <li>International Society of Hair Restoration Surgery</li>
            <li>American Board of Facial Plastic and Reconstructive Surgery</li>
          </ul>

          <p className="ai-contact-text">
            To learn more or to schedule an appointment at our Chicago, IL, hair restoration clinic, <Link to="/contact" className="ai-link">contact us online</Link> or call <a href="tel:6309373449" className="ai-link">(630) 937-3449</a>.
          </p>

        </div>

      </div>
    </div>
  );
};

export default AboutInstitute;