// src/App.jsx
import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home'; // <--- Home Import kiya
import DoctorDetail from './components/DoctorDetail';
import Gallery from './components/Gallery';

import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import VideoPage from './components/VideoPage';
import LocationSection from './components/LocationSection';
import { Routes, Route, useLocation } from 'react-router-dom';
import WhatsAppWidget from './components/WhatsAppWidget';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div>
      
      <Navbar /> {/* Navbar har jagah dikhega */}
      
      <Routes>
        {/* Jab Link "/" ho, to HOME dikhao (Hero, Awards, etc.) */}
        <Route path="/" element={<Home />} />
        
        {/* Jab Link "/doctor/..." ho, to DETAIL dikhao */}
        <Route path="/doctor/:id" element={<DoctorDetail />} />
       
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/location" element={<LocationSection />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
       {location.pathname !== '/contact' && (
        <ContactForm /> 
      )}
        <Footer />
        <WhatsAppWidget />
    </div>
  );
}

export default App;