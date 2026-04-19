// // src/components/GalleryDetail.jsx
// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { galleryData } from '../galleryData';
// import Navbar from './Navbar';
// import './GalleryDetail.css'; // Iski CSS bhi neeche hai

// const GalleryDetail = () => {
//   const { type } = useParams(); // URL se type pakro (hair-loss ya hairline-lowering)
//   const data = galleryData[type];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [type]);

//   if (!data) return <h2 style={{marginTop:'100px', textAlign:'center'}}>Gallery Not Found</h2>;

//   return (
//     <>
//       <Navbar />
//       <div className="gallery-detail-page">
        
//         {/* Header */}
//         <div className="gd-header">
//            <h1>{data.title}</h1>
//            <p>{data.description}</p>
//            <Link to="/" className="gd-back-btn">← Back to Home</Link>
//         </div>

//         {/* Grid */}
//         <div className="gd-grid">
//           {data.images.map((img) => (
//             <div key={img.id} className="gd-card">
              
//               <div className="gd-img-row">
//                  <div className="gd-img-box">
//                     <img src={img.before} alt="Before" />
//                     <span className="gd-tag">Before</span>
//                  </div>
//                  <div className="gd-img-box">
//                     <img src={img.after} alt="After" />
//                     <span className="gd-tag">After</span>
//                  </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </>
//   );
// };

// export default GalleryDetail;
import React, { useState, useRef, useEffect } from 'react'; // useState aur useRef add kiya
import { useParams, Link } from 'react-router-dom';
import { galleryData } from '../galleryData';
import Navbar from './Navbar';
import './GalleryDetail.css';

// --- 1. Slider Component (Doboara use karne ke liye) ---
const ImageSlider = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const width = rect.width;
    let percent = (x / width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setSliderPosition(percent);
  };

  return (
    <div 
      className="res-slider-container" // CSS class wahi use ki hai jo purani thi
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={after} alt="After" className="res-img-base" />
      <span className="res-label label-after">After</span>

      <div className="res-img-overlay" style={{ width: `${sliderPosition}%` }}>
        <img src={before} alt="Before" />
        <span className="res-label label-before">Before</span>
      </div>

      <div className="res-handle" style={{ left: `${sliderPosition}%` }}>
        <div className="res-handle-line"></div>
        <div className="res-handle-circle">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
        </div>
      </div>
    </div>
  );
};

// --- 2. Main Component ---
const GalleryDetail = () => {
  const { type } = useParams();
  const data = galleryData[type];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) return <h2 style={{marginTop:'100px', textAlign:'center'}}>Gallery Not Found</h2>;

  return (
    <>
      <Navbar />
      <div className="gallery-detail-page">
        
        <div className="gd-header">
           <h1>{data.title}</h1>
           <p>{data.description}</p>
           <Link to="/" className="gd-back-btn">← Back to Home</Link>
        </div>

        <div className="gd-grid">
          {data.images.map((img) => (
            <div key={img.id} className="gd-card">
              {/* Purani gd-img-row ki jagah ab ImageSlider use hoga */}
              <ImageSlider before={img.before} after={img.after} />
              
              {/* Agar niche koi text dikhana ho to idher add kar sakte hain */}
              <div className="gd-info">
                 <p>Patient Case #{img.id}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default GalleryDetail;