import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MenuOverlay from './MenuOverlay'; 
import logo from "../assets/aiease_1767715345739.png";
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✅ SPECIAL FUNCTION: Jo har Link par chalega
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // 1. Page ko Top par bhejo
    setIsMenuOpen(false);  // 2. Menu band karo (agar mobile par ho)
  };

  // Scroll Effect
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
        
        {/* --- LOGO --- */}
        <Link to="/" className="logo-container" onClick={handleLinkClick}>
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
        </Link>
        
        {/* --- LINKS (Sab par handleLinkClick laga diya) --- */}
        <ul className="nav-links">
            <li>
                <Link to="/gallery" onClick={handleLinkClick}>GALLERY</Link>
            </li>
            <li>
                <Link to="/videos" onClick={handleLinkClick}>VIDEO</Link>
            </li>
            
            <li className="phone-link">+92(321)5321974</li>
            
            <li>
                <Link to="/location" onClick={handleLinkClick}>Location</Link>
            </li>
            <li>
                <Link to="/contact" onClick={handleLinkClick}>CONTACT</Link>
            </li>
            
            {/* MENU BUTTON */}
            <li className="menu-btn" onClick={toggleMenu} style={{cursor: 'pointer', minWidth: '90px', textAlign: 'right'}}>
                MENU 
                <span className="menu-icon" style={{marginLeft: '8px', fontSize: '18px'}}>
                  {isMenuOpen ? '✕' : '☰'}
                </span>
            </li>
        </ul>
        </nav>

        {/* --- MOBILE MENU OVERLAY --- */}
        <MenuOverlay isOpen={isMenuOpen} onClose={handleLinkClick} /> 
        {/* Note: Overlay close hone par bhi top par jayega, agar aap chahein to yahan sirf closeMenu bhi use kar sakte hain */}
        
    </div>
  );
};

export default Navbar;