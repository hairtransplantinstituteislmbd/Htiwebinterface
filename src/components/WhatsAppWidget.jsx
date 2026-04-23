import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const phoneNumber = "923215000242"; // Apna number yahan likhein
  const message = "Hello! I am interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={styles.floatingButton}
    >
      <FaWhatsapp size={25} style={{ marginRight: '10px' }} />
      <span style={styles.text}>CONTACT US</span>
    </a>
  );
};

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#25D366',
    color: 'white',
    padding: '12px 20px', // Button ko thora lamba karne ke liye padding
    borderRadius: '50px', // Pill shape ban banane ke liye
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
    zIndex: 1000,
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '15px',
    fontFamily: 'Arial, sans-serif',
  },
  text: {
    whiteSpace: 'nowrap', // Text ko line break se rokne ke liye
  }
};

export default WhatsAppWidget;