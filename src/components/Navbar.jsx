
// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MenuOverlay from './MenuOverlay'; 
import logo from "../assets/aiease_1767715345739.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // --- 1. STATE: Menu khula hai ya band? ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- 2. TOGGLE FUNCTION: Button ke liye ---
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // --- 3. ✅ NEW: CLOSE FUNCTION (Link click hone par menu band karega) ---
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{width: '100%', background: 'white', position: 'sticky', top: 0, zIndex: 1000}}>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        
        {/* --- LOGO SECTION --- */}
        <div className="logo-container">
            <img src={logo} alt="Logo" className="nav-logo-img" />
            <div className="logo-text-wrapper">
                <div className="logo-main">
                    <span className="logo-bold">HAIR</span>
                    <span className="logo-thin">TRANSPLANT</span>
                </div>
                <div className="logo-bottom">
                    <span className="line-left"></span>
                    <span className="logo-sub">INSTITUTE</span>
                    <span className="line-right"></span>
                </div>
            </div>
        </div>
        
        {/* Links Section */}
        <ul className="nav-links">
            <li><Link to="/gallery">GALLERY</Link></li>
           <li><Link to="/videos">VIDEO</Link></li>
            <li className="phone-link">+92(321)5321974</li>
            <li>LOCATION</li>
          <li><Link to="/contact">CONTACT</Link></li>
            
            {/* MENU BUTTON */}
            <li className="menu-btn" onClick={toggleMenu} style={{cursor: 'pointer', minWidth: '90px', textAlign: 'right'}}>
                MENU 
                <span className="menu-icon" style={{marginLeft: '8px', fontSize: '18px'}}>
                  {isMenuOpen ? '✕' : '☰'}
                </span>
            </li>
        </ul>
        </nav>

        {/* --- 4. ✅ CHANGE HERE: onClose prop pass kiya --- */}
        <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
        
    </div>
  );
};

export default Navbar;