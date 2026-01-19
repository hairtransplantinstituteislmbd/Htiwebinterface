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
            <p>1S280 Summit Ave</p>
            <p>Ste C4</p>
            <p>Oakbrook Terrace, IL 60181</p>
          </div>

          <p className="loc-hours">Open Today 7:30 AM - 5:00 PM</p>

          <div className="loc-buttons">
            <button className="loc-btn">ABOUT OUR OFFICE</button>
            <button className="loc-btn">DIRECTIONS</button>
            <a href="tel:6309373581" className="loc-btn-link">
              <button className="loc-btn">(630) 937-3581</button>
            </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN: MAP --- */}
        <div className="loc-map-col">
          <iframe 
            title="Chicago Hair Institute Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.7679826315573!2d-87.98394448456166!3d41.85303997922437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4c6c1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2s1S280%20Summit%20Ave%20Ste%20C4%2C%20Oakbrook%20Terrace%2C%20IL%2060181!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default LocationSection;