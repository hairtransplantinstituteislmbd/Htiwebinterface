

// export default MenuOverlay;

// src/components/MenuOverlay.jsx
import React, { useState, useEffect } from 'react';
import './MenuOverlay.css';
import { Link } from 'react-router-dom';
import { servicesData } from '../servicesData';
// 1. DOCTORS DATA IMPORT KIYA (Dhayn rahe: export ka naam 'doctors' hai)
import { doctors } from '../doctorsData'; 
import Menutop1 from '../Images/Menutop1.webp'; 
import Menutop2 from '../Images/Menutop2.webp';
import Menutop3 from '../Images/Menutop3.webp';

const img1 = Menutop1;
const img2 = Menutop2;
const img3 = Menutop3;

const MenuOverlay = ({ isOpen, onClose }) => {
  const [showServicesOnly, setShowServicesOnly] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setShowServicesOnly(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="menu-overlay">
      <div className="menu-scroll-wrapper">
        <div className="menu-content">

          {/* --- COLUMN 1 — ABOUT US (UPDATED) --- */}
          {!showServicesOnly && (
            <div className="menu-column">
              <div className="menu-image-container">
                <img src={img1} alt="Clinic" />
              </div>
              <h2 className="menu-header">About Us</h2>
              <ul className="menu-list">
                
                {/* Static Links */}
                <li><Link to="/" onClick={onClose}>Home</Link></li>
               
                
                {/* --- 2. DYNAMIC DOCTORS LIST --- */}
                {/* Ye loop doctorsData file se naam utha ke list banayega */}
                {doctors.map((doc) => (
                  <li key={doc.id}>
                    <Link to={`/doctor/${doc.id}`} onClick={onClose}>
                      {doc.name}
                    </Link>
                  </li>
                ))}

                {/* Static Link */}
                <li><Link to="/location" onClick={onClose}>HTI Office Location</Link></li>
              </ul>
            </div>
          )}

          {/* --- COLUMN 2 — HAIR RESTORATION (Already Dynamic) --- */}
          <div className="menu-column">
            {!showServicesOnly && (
              <div className="menu-image-container">
                <img src={img2} alt="Hair Restoration" />
              </div>
            )}
            
            <h2 className="menu-header">Hair Restoration</h2>
            
            <ul className="menu-list">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link to={`/service/${service.id}`} onClick={onClose}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3 — PATIENT RESOURCES --- */}
          <div className="menu-column">
            {!showServicesOnly && (
              <div className="menu-image-container">
                <img src={img3} alt="Patient Resources" />
              </div>
            )}
            {/* <h2 className="menu-header">Patient Resources</h2>
            <ul className="menu-list">
              <li><Link to="/" onClick={onClose}>Virtual Consultation</Link></li>
              <li><Link to="/" onClick={onClose}>Mission Statement</Link></li>
              <li><Link to="/" onClick={onClose}>Out-of-Town Patients</Link></li>
              <li><Link to="/" onClick={onClose}>Blog</Link></li>
              <li><Link to="/gallery" onClick={onClose}>Photo Gallery</Link></li>
              <li><Link to="/" onClick={onClose}>FAQ</Link></li>
              <li><Link to="/" onClick={onClose}>Treatment Considerations</Link></li>
            </ul> */}
          </div>

        </div>

        {/* FOOTER BUTTON */}
        {!showServicesOnly && (
          <div className="menu-footer">
            <button
              className="view-all-services"
              onClick={() => setShowServicesOnly(true)}
            >
              VIEW ALL SERVICES
            </button>
          </div>
        )}

        {/* SPACER */}
        <div className="menu-bottom-decoration" style={{ height: '150px', width: '100%' }}></div>
      </div>

      <div className="menu-bottom-fade"></div>
    </div>
  );
};

export default MenuOverlay;