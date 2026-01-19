// src/components/LocationSection.jsx
import React from 'react';
import './LocationSection.css';

const LocationSection = () => {
  return (
    <div className="location-section">
      <div className="loc-container">
        
        {/* --- LEFT COLUMN: INFO --- */}
        <div className="loc-info-col">
          <h2 className="loc-city">Oakbrook Terrace</h2>
          
          <div className="loc-address">
            <p>Plot No 10,</p>
            <p>Stno:25A</p>
            <p>F-6/2 Islamabad Pakistan</p>
           
          </div>

          <p className="loc-hours">Open Monday To Friday 7:30 AM - 5:00 PM</p>

          <div className="loc-buttons">
            <button className="loc-btn">ABOUT OUR OFFICE</button>
            <button className="loc-btn">DIRECTIONS</button>
            <a href="tel:6309373581" className="loc-btn-link">
              <button className="loc-btn">+92-300-9558737</button>
            </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN: MAP --- */}
        <div className="loc-map-col">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1659.0746743723475!2d73.069267!3d33.730954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfae5741bff3%3A0xb3b0a4d6f4a8fa9d!2sAcademy%20of%20aesthetic%20medicines%20and%20surgery!5e0!3m2!1sen!2sus!4v1768841505192!5m2!1sen!2sus"
          width="600" height="450" style={{ border: 0 }}
           allowfullscreen="" loading="lazy" ></iframe>
        </div>

      </div>
    </div>
  );
};

export default LocationSection;