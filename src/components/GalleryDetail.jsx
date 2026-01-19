// src/components/GalleryDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryData } from '../galleryData';
import Navbar from './Navbar';
import './GalleryDetail.css'; // Iski CSS bhi neeche hai

const GalleryDetail = () => {
  const { type } = useParams(); // URL se type pakro (hair-loss ya hairline-lowering)
  const data = galleryData[type];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) return <h2 style={{marginTop:'100px', textAlign:'center'}}>Gallery Not Found</h2>;

  return (
    <>
      <Navbar />
      <div className="gallery-detail-page">
        
        {/* Header */}
        <div className="gd-header">
           <h1>{data.title}</h1>
           <p>{data.description}</p>
           <Link to="/" className="gd-back-btn">← Back to Home</Link>
        </div>

        {/* Grid */}
        <div className="gd-grid">
          {data.images.map((img) => (
            <div key={img.id} className="gd-card">
              
              <div className="gd-img-row">
                 <div className="gd-img-box">
                    <img src={img.before} alt="Before" />
                    <span className="gd-tag">Before</span>
                 </div>
                 <div className="gd-img-box">
                    <img src={img.after} alt="After" />
                    <span className="gd-tag">After</span>
                 </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default GalleryDetail;