import React from 'react';
import './PatientDetails.css';

// Yahan apni 10 images import karein (Path apne folder ke hisaab se adjust kar lein)
import img1 from '../Images/Cricketerdata/1.webp'; 
import img2 from '../Images/Cricketerdata/2.webp'; 
import img3 from '../Images/Cricketerdata/3.webp'; 
import img4 from '../Images/Cricketerdata/4.webp'; 
import img5 from '../Images/Cricketerdata/5.webp'; 
import img6 from '../Images/Cricketerdata/6.webp'; 
import img7 from '../Images/Cricketerdata/7.webp'; 
import img8 from '../Images/Cricketerdata/8.webp'; 
import img9 from '../Images/Cricketerdata/9.webp'; 
import img10 from '../Images/Cricketerdata/10.webp'; 

const PatientDetails = () => {
  // Jab aapke paas sari 10 images aa jayen, toh unhein is array mein daal dein
  // Filhal testing ke liye main ne 2 images lagayi hain
  const galleryImages = [
    img1, img2,img3, img4, img5, img6, img7, img8, img9, img10 
  ];

  return (
    <div className="patient-details-page">
      <div className="pd-header">
        {/* Wapas pichle page par jane ka button */}
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back to Results
        </button>
        <h1 className="pd-main-heading">Full Scalp Restoration - Detailed Case</h1>
        <p className="pd-sub-heading">View the complete journey and multiple angles of this patient's hair restoration.</p>
      </div>

      <div className="pd-gallery-grid">
        {galleryImages.map((img, index) => (
          <div key={index} className="pd-image-card">
            <img src={img} alt={`Patient View ${index + 1}`} className="pd-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDetails;