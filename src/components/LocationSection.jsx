// src/components/LocationSection.jsx
import React from 'react';
import './LocationSection.css';
import { Link } from 'react-router-dom';

const LocationSection = () => {
  return (
    <div className="location-section">
      <div className="loc-container">
        
        {/* --- LEFT COLUMN: INFO --- */}
        <div className="loc-info-col">
          <h2 className="loc-city">Hair Transplant Institute</h2>
          
          <div className="loc-address">
            <p>Cell No: 0321-5000242</p>
            <p>Whatsapp: +92(321)5000242</p>
           <p>Email: hairtransplantinstituteislmbd@gmail.com</p>
          </div>
          <h2 className="loc-city">PESHAWAR / UAE / DUBAI</h2>
          
          <div className="loc-address">
            <p>Cell No: +92-321-5321974</p>
            <p>Whatsapp: +92-321-5321974</p>
           <p>Email: htipeshawar@gmail.com</p>
          </div>

          <p className="loc-hours">Open Monday To Friday 7:30 AM - 5:00 PM</p>

          <div className="loc-buttons">
            <Link to="/about-us">
    <button className="loc-btn">ABOUT OUR INSTITUTE</button>
  </Link>
            <a href="tel:6309373581" className="loc-btn-link">
              <button className="loc-btn">+92-321-5000242</button>
            </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN: MAP --- */}
        <div className="loc-map-col">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1659.0746743723475!2d73.069267!3d33.730954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfae5741bff3%3A0xb3b0a4d6f4a8fa9d!2sAcademy%20of%20aesthetic%20medicines%20and%20surgery!5e0!3m2!1sen!2sus!4v1768841505192!5m2!1sen!2sus"
          width="600" height="450" style={{ border: 0 }}
           allowfullScreen="" loading="lazy" ></iframe>
        </div>

      </div>
    </div>
  );
};

export default LocationSection;