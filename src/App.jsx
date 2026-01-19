// src/App.jsx
import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home'; // <--- Home Import kiya
import DoctorDetail from './components/DoctorDetail';
import GalleryDetail from './components/GalleryDetail';
import GalleryChoice from './components/GalleryChoice';
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import VideoPage from './components/VideoPage';
import { Routes, Route, useLocation } from 'react-router-dom';

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
        <Route path="/gallery" element={<GalleryChoice />} />
        <Route path="/gallery/:type" element={<GalleryDetail />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
<Route path="/videos" element={<VideoPage />} />
<Route path="/contact" element={<ContactForm />} />

      </Routes>
       {location.pathname !== '/contact' && (
        <ContactForm /> 
      )}
        <Footer />
    </div>
  );
}

export default App;