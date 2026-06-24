// import React from 'react';
// import './PatientDetails.css';

// // Yahan apni 10 images import karein (Path apne folder ke hisaab se adjust kar lein)
// import img1 from '../Images/Cricketerdata/1.webp'; 
// import img2 from '../Images/Cricketerdata/2.webp'; 
// import img3 from '../Images/Cricketerdata/3.webp'; 
// import img4 from '../Images/Cricketerdata/4.webp'; 
// import img5 from '../Images/Cricketerdata/5.webp'; 
// import img6 from '../Images/Cricketerdata/6.webp'; 
// import img7 from '../Images/Cricketerdata/7.webp'; 
// import img8 from '../Images/Cricketerdata/8.webp'; 
// import img9 from '../Images/Cricketerdata/9.webp'; 
// import img10 from '../Images/Cricketerdata/10.webp'; 

// const PatientDetails = () => {
//   // Jab aapke paas sari 10 images aa jayen, toh unhein is array mein daal dein
//   // Filhal testing ke liye main ne 2 images lagayi hain
//   const galleryImages = [
//     img1, img2,img3, img4, img5, img6, img7, img8, img9, img10 
//   ];

//   return (
//     <div className="patient-details-page">
//       <div className="pd-header">
//         {/* Wapas pichle page par jane ka button */}
//         <button className="back-btn" onClick={() => window.history.back()}>
//           ← Back to Results
//         </button>
//         <h1 className="pd-main-heading">Full Scalp Restoration - Detailed Case</h1>
//         <p className="pd-sub-heading">View the complete journey and multiple angles of this patient's hair restoration.</p>
//       </div>

//       <div className="pd-gallery-grid">
//         {galleryImages.map((img, index) => (
//           <div key={index} className="pd-image-card">
//             <img src={img} alt={`Patient View ${index + 1}`} className="pd-img" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PatientDetails;



import React, { useState, useRef, useEffect } from 'react';
import './PatientDetails.css'; // Make sure your Slider CSS is also included here

// 1. Apni 10 images import karein
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

// 2. Comparison Slider Component (Jo in images ko combine karke slider banayega)
const ComparisonSlider = ({ item }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const offsetX = x - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div className="gallery-card">
      <div className="card-tag">{item.type}</div>
      
      <div 
        className="slider-container" 
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After Image */}
        <div className="img-wrapper after">
          <img src={item.after} alt="After" loading="lazy" />
          <div className="img-label after">AFTER</div>
        </div>

        {/* Before Image (Clipped) */}
        <div 
          className="img-wrapper before" 
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img src={item.before} alt="Before" loading="lazy" />
          <div className="img-label before">BEFORE</div>
        </div>

        {/* Professional Slim Handle */}
        <div className="slider-bar" style={{ left: `${sliderPos}%` }}>
          <div className="slider-button">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="4" fill="none"><path d="M15 18l-6-6 6-6"/></svg>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="4" fill="none"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        </div>
      </div>
      
      <div className="card-meta">
        <h4>{item.title}</h4>
      </div>
    </div>
  );
};

// 3. Main Page Component
const PatientDetails = () => {
  // Page load hone par top par scroll karne ke liye
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // 4. Yahan hum 10 images ko 5 pairs mein combine kar rahe hain (Before & After)
  const pairedImages = [
    { before: img1, after: img2, type: "Top View", title: "Angle 1: Front" },
    { before: img3, after: img4, type: "Frontal View", title: "Angle 2: Front" },
    { before: img5, after: img6, type: "Back View", title: "Angle 3: Crown Area" },
    { before: img7, after: img8, type: "Side View", title: "Angle 4: Left Profile" },
    { before: img9, after: img10, type: "Side View", title: "Angle 5: Right Profile" }
  ];

  return (
    <div className="patient-details-page">
      <div className="pd-header">
        {/* Wapas pichle page par jane ka button */}
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back to Results
        </button>
        <h1 className="pd-main-heading">Full Scalp Restoration - Detailed Case</h1>
        <p className="pd-sub-heading">Drag the slider to view the complete transformation from multiple angles.</p>
      </div>

      <div className="gallery-grid pd-gallery-grid">
        {/* 5. Pairs array par map chala kar slider render karein */}
        {pairedImages.map((pair, index) => (
          <ComparisonSlider 
            key={index} 
            item={pair} 
          />
        ))}
      </div>
    </div>
  );
};

export default PatientDetails;