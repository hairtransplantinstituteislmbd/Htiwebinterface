// src/components/DoctorDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors } from '../doctorsData';
import Navbar from './Navbar';
import './DoctorDetail.css'; // Hum nayi CSS file banayenge iske liye

const DoctorDetail = () => {
  const { id } = useParams();
  const doc = doctors.find((d) => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!doc) return <div className="not-found">Doctor Not Found</div>;

  return (
    <>
      <Navbar />
      
      <div className="detail-page">
        <div className="detail-container">
          
          {/* --- TOP SECTION: BIO & IMAGE --- */}
          <div className="top-section">
            <div className="text-content">
              <span className="detail-subtitle">{doc.title}</span>
              <h1 className="detail-title">{doc.name}</h1>
              
              <div className="info-block">
                <h3>My Journey</h3>
                <p>{doc.journey}</p>
              </div>

              <div className="info-block">
                <h3>Education & Expertise</h3>
                <p>{doc.education}</p>
              {/* </div>

              <Link to="/" className="back-btn">← Back to Home</Link>
            </div> */}

            <div className="image-content">
              <img src={doc.image} alt={doc.name} className="main-doc-img" />
            </div>
          </div>

          {/* --- BOTTOM SECTION: BEFORE & AFTER --- */}
          <div className="case-study-section">
            <h2 className="section-heading">Patient Success Story</h2>
            <p className="case-desc">{doc.caseStudy}</p>

            <div className="before-after-grid">
              
              <div className="ba-card">
                <span className="ba-label">BEFORE</span>
                <img src={doc.beforeImage} alt="Before" />
              </div>

              <div className="ba-card">
                <span className="ba-label">AFTER</span>
                <img src={doc.afterImage} alt="After" />
              </div>

            </div>
          </div>

        </div>
         </div>

              <Link to="/" className="back-btn">← Back to Home</Link>
            </div>

      </div>
    </>
  );
};

export default DoctorDetail;