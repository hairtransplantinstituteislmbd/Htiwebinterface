// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      
      {/* --- TOP SECTION: RATE & REVIEW --- */}
      <div className="footer-top">
        <h2 className="footer-heading">Rate, Review & Explore</h2>
        
        <div className="social-icons">
          
          {/* Google Icon */}
          <a href="https://www.google.com/search?q=Hair+Transplant+Institute&stick=H4sIAAAAAAAA_-NgU1I1qDC2SElLSjM2NDQzTbRIMTG1MqiwMEo2tzQwMTS0TEkzN0lOW8Qq6ZGYWaQQUpSYV1yQk5hXouCZV1ySWVJakgoAovEb7UUAAAA&hl=en&mat=CRD-i3Cv7_glElcBTVDHnjfd-FagZPRBTV7rKC2ZawSqYiYiWgClqzevK0Flj28ZkI_RvZGBjtC52Ha7aVdtEEy_awCwfoBd2NIBGvu6U7aNR2H6qQ4NXQs1aHxTuXXl_UQ&authuser=0" target="_blank" rel="noreferrer" className="icon-circle">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
               <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.347.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.053-3.24 2.08-2.16 2.72-5.2 2.72-7.613 0-.747-.08-1.48-.213-2.227h-10.56z"/>
            </svg>
          </a>

          {/* Facebook Icon */}
          <a href="https://www.facebook.com/share/1DW293eYgJ/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="icon-circle">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Yelp Icon (Burst Shape) */}
         <a href="https://www.instagram.com/hairtransplantinstitute?igsh=MWF2NHVwNDBsbDlhYg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="icon-circle">
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7.25A4.75,4.75 0 1,1 7.25,12A4.75,4.75 0 0,1 12,7.25M12,9A3,3 0 1,0 15,12A3,3 0 0,0 12,9M16.5,6A1.25,1.25 0 1,1 15.25,7.25A1.25,1.25 0 0,1 16.5,6Z"/>
  </svg>
</a>

        </div>
      </div>

      {/* --- BOTTOM SECTION: LEGAL --- */}
      <div className="footer-bottom">
        <p className="disclaimer">
          *Disclaimer: results are not guaranteed, may not be permanent, and can vary per individual. 
        </p>

        <p className="copyright">
          ©2001 - 2026 Hair transplant Institute | Forever Website® 1.0 | Designed & Developed by <a href="#" className="footer-link">Jahan</a>
        </p>

        <div className="footer-nav">
          
          <Link to="/privacy-policy" className="footer-link"> Privacy Policy</Link> | 
        
        </div>
      </div>

    </footer>
  );
};

export default Footer;