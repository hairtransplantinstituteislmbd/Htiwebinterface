import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
          
        {/* Left Side: Content */}
        <div className="hero-text">
          <h4>HAIR TRANSPLANT ISLAMABAD</h4>
          <h1>A World Leader in<br /> Hair Restoration</h1>
          
          <div className="features-row">
              <div className="feature">
                  <span>Transplants by <br/> Surgeons - Not Techs</span>
              </div>
              <div className="feature border-left">
                  <span>30+ Years <br/> in Practice</span>
              </div>
              <div className="feature border-left">
                  <span>Board- <br/> Certified</span>
              </div>
          </div>

          {/* BUTTONS SECTION - EXACT MATCH */}
         <div className="hero-buttons">
            
            {/* Button 1: Ab ye Link ban gya hai jo Contact page par le jayega */}
            <Link to="/contact" className="btn-teal btn-call" onClick={() => window.scrollTo(0, 0)}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="12" height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              CALL HERE
            </Link>

          </div>
        </div>

        {/* Right Side: Doctor Image */}
        <div className="hero-image">
           <img src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png" alt="Doctor" />
        </div>

      </div>
    </section>
  );
};

export default Hero;