import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  // Page load hote hi top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      {/* Hero Header */}
      <header className="about-header">
        <h1>Welcome To HTI</h1>
        <p className="subtitle">Hair Transplant Institute Islamabad</p>
      </header>

      <div className="about-wrapper">
        {/* Expertise Section */}
        <section className="about-card intro-section">
          <h2>Our Expertise & Technique</h2>
          <p>
            H.T.I. Islamabad specializes in <strong>follicular units</strong> (1 or 2 hair grafts). 
            While some groups use mini and micro grafts (1-4 hairs) placed into slits, we take 
            a more precise approach. 
          </p>
          <div className="tech-details">
            <p>
              We cut all our grafts under <strong>high magnification</strong> to preserve the 
              follicular unit. This allows us to place hairs closer together, preventing 
              compression and ensuring a natural look that stands out.
            </p>
          </div>
        </section>

        {/* Surgeon Section */}
        <section className="surgeon-section">
          <div className="surgeon-info">
            <h2>Dr. Humayun Mohmand</h2>
            <span className="credential">Plastic, Cosmetic & Hair Restorative Surgeon</span>
            <p>
              Certified by the <strong>Royal College of Surgeons of Edinburgh</strong>, Dr. Humayun 
              has taken Hair Restoration surgery to a new dimension. He is a pioneer in performing 
              <strong> mega sessions of 4000 F.U.</strong> and above, specifically tailored for 
              the Asian population.
            </p>
          </div>
        </section>

        {/* Departments Section */}
        <section className="departments-section">
          <h2 className="section-title">Our Specialized Departments</h2>
          <div className="dept-grid">
            <div className="dept-card">
              <h3>Hair Transplant</h3>
              <ul>
                <li>Back Scar Repair</li>
                <li>Mustaches & Beard Reconstruction</li>
                <li>Temporal Peak & Fronto Temporal Angle</li>
                <li>Natural Hair Restoration</li>
              </ul>
            </div>
            <div className="dept-card">
              <h3>Plastic & Reconstructive</h3>
              <ul>
                <li>Rhinoplasty (Nose Surgery)</li>
                <li>Eyelid & Ear Surgery</li>
                <li>Breast Augmentation & Reduction</li>
                <li>Liposuction & Face Lifts</li>
                <li>Fillers & Laser Hair Removal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust & Quote */}
        <section className="trust-footer">
          <div className="guarantee-box">
            <h3>Trust Your Care to the Finest</h3>
            <p>
              H.T.I. Islamabad is world-renowned and has been called the 
              <strong> best hair transplant surgery center </strong> by fellow surgeons 
              who chose us for their own restoration.
            </p>
          
          </div>

          <div className="quote-section">
            <p className="quote-text">
              “A wonderful serenity has taken possession of my entire soul, like these 
              sweet mornings of spring which I enjoy with my whole heart...”
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;