// src/components/ServiceDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../servicesData';
import Navbar from './Navbar';
import './ServiceDetail.css'; // Simple styling

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <h2 style={{marginTop:'100px', textAlign:'center'}}>Service Not Found</h2>;

  return (
    <>
      <Navbar />
      <div className="service-detail-page">
        <div className="service-container">
          
          <div className="service-text">
            <h1 className="service-title">{service.title}</h1>
            <p className="service-desc">{service.fullDetails}</p>
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>

          <div className="service-img">
            <img src={service.image} alt={service.title} />
          </div>

        </div>
      </div>
    </>
  );
};

export default ServiceDetail;