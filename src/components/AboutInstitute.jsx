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
            With over 30 years of pioneering expertise in   <Link to="/services" className="ai-link">hair restoration</Link>. Dr. Humayun and the team at the Hair Transplant Institute provide truly world-class care. Dr. Humayun holds the elite distinction of being one of only 11 surgeons in the world accredited as a Fellow by the International Society of Hair Restoration Surgery (ISHRS). Alongside this global recognition, our doctors are proudly affiliated with leading professional associations, including:
          </p>

          <ul className="ai-list">
            <li>Founding Member, American Board of Hair Restoration Surgery</li>
            <li>International Society of Hair Restoration Surgery</li>
            <li>American Board of Facial Plastic and Reconstructive Surgery</li>
          </ul>

          <p className="ai-contact-text">
            To learn more or to schedule an appointment at our Islamabad, HTI , clinic, <Link to="/contact" className="ai-link" onClick={() => window.scrollTo(0, 0)}>contact us online</Link> or call <a href="tel:6309373449" className="ai-link">+92-321-5000242</a>.
          </p>

        </div>

      </div>
    </div>
  );
};

export default AboutInstitute;