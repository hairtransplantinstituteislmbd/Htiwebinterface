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
          <a href="https://google.com" target="_blank" rel="noreferrer" className="icon-circle">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
               <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.347.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.053-3.24 2.08-2.16 2.72-5.2 2.72-7.613 0-.747-.08-1.48-.213-2.227h-10.56z"/>
            </svg>
          </a>

          {/* Facebook Icon */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon-circle">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Yelp Icon (Burst Shape) */}
          <a href="https://yelp.com" target="_blank" rel="noreferrer" className="icon-circle">
             <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20.1 13.9l-3.8-.9c-.6-.2-.9.5-.5.9l2.5 3.1c.9 1.1.2 2.8-1.2 2.8-1 0-1.5-.9-1.5-1.7l-.3-3.9c0-.6-.9-.9-1.2-.2l-2.1 3.4c-.7 1.2-2.5.9-2.8-.5-.2-1.1.3-1.7.9-2.3l2.8-2.8c.4-.4-.1-1.1-.6-.8l-3.8 1.4c-1.4.5-2.5-.9-1.8-2.1.5-.9 1.3-1.1 2.2-1.2l3.9-.3c.6 0 .8-.9.2-1.2l-3.2-2.3c-1.1-.8-.5-2.6.9-2.8 1.1-.1 1.7.5 2.3 1.1l2.2 3.3c.3.5 1.1.2 1-.4l-.6-3.9c-.1-1.4 1.7-2.1 2.5-.9.6.8.7 1.7.6 2.6l-.6 3.9c-.1.6.6.9.9.4l2.9-2.6c1-1 2.7.1 2.3 1.5-.3 1-.9 1.5-1.8 1.8l-3.6 1c-.6.2-.5 1.1.1 1.2l3.7.6c1.4.2 1.7 2.1.4 2.8-.7.4-1.6.4-2.5.1z"/>
             </svg>
          </a>

        </div>
      </div>

      {/* --- BOTTOM SECTION: LEGAL --- */}
      <div className="footer-bottom">
        <p className="disclaimer">
          *Disclaimer: results are not guaranteed, may not be permanent, and can vary per individual. Some images are of models, not actual patients.
        </p>

        <p className="copyright">
          ©2013 - 2026 Chicago Hair Institute | Forever Website® 2.0 | Designed & Developed by <a href="#" className="footer-link">Einstein Medical</a>
        </p>

        <div className="footer-nav">
          <Link to="/sitemap" className="footer-link">Sitemap</Link> | 
          <Link to="/privacy" className="footer-link"> Privacy Policy</Link> | 
          <Link to="/login" className="footer-link"> Login</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;