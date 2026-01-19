// src/components/DoctorsHighlight.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <--- 1. Import Link
import { doctors } from '../doctorsData';
import './DoctorsHighlight.css'; // Path sahi rakhna (jo abhi fix kiya tha)

const DoctorsHighlight = () => {
  return (
    <div className="doctors-wrapper">
      {doctors.map((doc, index) => (
        <div key={doc.id} className={`dr-section ${index % 2 !== 0 ? 'reverse-layout' : ''}`}>
          <div className="dr-container">
            
            <div className="dr-text-col">
              <h2 className="dr-name">Meet {doc.name}</h2>
              <h4 className="dr-title">{doc.title}</h4>
              <p className="dr-desc">{doc.bio}</p>
              
              {/* 2. Button ko Link mein wrap karein */}
              <Link to={`/doctor/${doc.id}`}>
                <button className="dr-btn">
                   VIEW PROFILE
                </button>
              </Link>

            </div>

            <div className="dr-img-col">
               <img src={doc.image} alt={doc.name} className="dr-img" />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorsHighlight;