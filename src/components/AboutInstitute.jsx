// src/components/AboutInstitute.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutInstitute.css';
import DrHumayun from '../Images/DrHumayonSaeed.webp'; 
const AboutInstitute = () => {
  return (
    <div className="about-institute-section">
      <div className="ai-container">
        
        {/* --- LEFT SIDE: IMAGE --- */}
        <div className="ai-image-col">
           <img src={DrHumayun} alt="Dr. Humayun - Hair Restoration Expert" />
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="ai-text-col">
          <h2 className="ai-heading">Hair Transplant Institute</h2>
          
          <p className="ai-desc">
            Dr. Humayon saeed and the team at the Islamabad Hair Institute offer world-class treatment backed by over 30 years of expertise in the field of <Link to="/services" className="ai-link">hair restoration</Link>. Our doctors are nationally affiliated with professional associations including:
          </p>

          <ul className="ai-list">
            <li>Founding Member, American Board of Hair Restoration Surgery</li>
            <li>International Society of Hair Restoration Surgery</li>
            <li>American Board of Facial Plastic and Reconstructive Surgery</li>
          </ul>

          <p className="ai-contact-text">
            To learn more or to schedule an appointment at our Islamabad, IL, hair restoration clinic, <Link to="/contact" className="ai-link" onClick={() => window.scrollTo(0, 0)}>contact us online</Link> or call <a href="tel:6309373449" className="ai-link">+92-321-5000242</a>.
          </p>

        </div>

      </div>
    </div>
  );
};

export default AboutInstitute;