// // src/components/MenuOverlay.jsx
// import React from 'react';
// import './MenuOverlay.css';

// // Online links
// const img1 = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600";
// const img2 = "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=600";
// const img3 = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=600";

// const MenuOverlay = ({ isOpen }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="menu-overlay">
      
//       {/* --- SCROLL WRAPPER --- */}
//       <div className="menu-scroll-wrapper">
//         <div className="menu-content">
          
//           {/* COLUMN 1 */}
//           <div className="menu-column">
//             <div className="menu-image-container">
//               <img src={img1} alt="Clinic" />
//             </div>
//             <h2 className="menu-header">About Us</h2>
//             <ul className="menu-list">
//               <li><a href="/">Home</a></li>
//               <li><a href="/">About our Doctors</a></li>
//               <li><a href="/">Dr. Raymond Konior</a></li>
//               <li><a href="/">Dr. Sahar Nadimi</a></li>
//               <li><a href="/">Dr. Qutaibah Khatib</a></li>
//               <li><a href="/">Oakbrook Terrace Location</a></li>
//             </ul>
//           </div>

//           {/* COLUMN 2 */}
//           <div className="menu-column">
//             <div className="menu-image-container">
//               <img src={img2} alt="Hair Restoration" />
//             </div>
//             <h2 className="menu-header">Hair Restoration</h2>
//             <ul className="menu-list">
//               <li><a href="/">Hair Restoration Treatment</a></li>
//               <li><a href="/">Hair Density</a></li>
//               <li><a href="/">FUE Hair Transplant</a></li>
//               <li><a href="/">Hair Loss Treatment</a></li>
//               <li><a href="/">Hair Loss Retreatment</a></li>
//               <li><a href="/">Women's Hair Loss</a></li>
//               <li><a href="/">Eyebrow Transplant</a></li>
//               <li><a href="/">Hair System</a></li>
//             </ul>
//           </div>

//           {/* COLUMN 3 */}
//           <div className="menu-column">
//             <div className="menu-image-container">
//               <img src={img3} alt="Patient Resources" />
//             </div>
//             <h2 className="menu-header">Patient Resources</h2>
//             <ul className="menu-list">
//               <li><a href="/">Virtual Consultation</a></li>
//               <li><a href="/">Mission Statement</a></li>
//               <li><a href="/">Out-of-Town Patients</a></li>
//               <li><a href="/">Blog</a></li>
//               <li><a href="/">Photo Gallery</a></li>
//               <li><a href="/">FAQ</a></li>
//               <li><a href="/">Treatment Considerations</a></li>
//             </ul>
//           </div>

//         </div>

//         {/* --- FOOTER BUTTON --- */}
//         <div className="menu-footer">
//           <a href="/services" className="view-all-services">VIEW ALL SERVICES</a>
//         </div>

//         {/* --- SPACER DIV (YEH MAGIC KAREGA) --- */}
//         {/* Yeh div zabardasti 200px ki jagah banayega taake button upar aa sakay */}
//         <div className="menu-bottom-decoration" style={{ height: '150px', width: '100%' }}></div>

//       </div> 
//       {/* --- SCROLL WRAPPER END --- */}

//       {/* --- FIXED BOTTOM FADE --- */}
//       <div className="menu-bottom-fade"></div>

//     </div>
//   );
// };

// export default MenuOverlay;


// import React, { useState, useEffect } from 'react';
// import './MenuOverlay.css';
// import { Link } from 'react-router-dom';
// import { servicesData } from '../servicesData';

// const img1 = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600";
// const img2 = "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=600";
// const img3 = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=600";

// // ✅ 1. Accept 'onClose' prop here
// const MenuOverlay = ({ isOpen, onClose }) => {
//   const [showServicesOnly, setShowServicesOnly] = useState(false);

//   useEffect(() => {
//     if (!isOpen) {
//       setShowServicesOnly(false);
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="menu-overlay">
//       <div className="menu-scroll-wrapper">
//         <div className="menu-content">

//           {/* COLUMN 1 — ABOUT US */}
//           {!showServicesOnly && (
//             <div className="menu-column">
//               <div className="menu-image-container">
//                 <img src={img1} alt="Clinic" />
//               </div>
//               <h2 className="menu-header">About Us</h2>
//               <ul className="menu-list">
//                 {/* Note: Static links par bhi onClose lagayen taake wo bhi menu band karein */}
//                 <li><Link to="/" onClick={onClose}>Home</Link></li>
//                 <li><Link to="/" onClick={onClose}>About our Doctors</Link></li>
//                 <li><Link to="/" onClick={onClose}>Dr. Raymond Konior</Link></li>
//                 <li><Link to="/" onClick={onClose}>Dr. Sahar Nadimi</Link></li>
//                 <li><Link to="/" onClick={onClose}>Dr. Qutaibah Khatib</Link></li>
//                 <li><Link to="/" onClick={onClose}>Oakbrook Terrace Location</Link></li>
//               </ul>
//             </div>
//           )}

//           {/* COLUMN 2 — HAIR RESTORATION (DYNAMIC DATA) */}
//           <div className="menu-column">
//             {!showServicesOnly && (
//               <div className="menu-image-container">
//                 <img src={img2} alt="Hair Restoration" />
//               </div>
//             )}
            
//             <h2 className="menu-header">Hair Restoration</h2>
            
//             <ul className="menu-list">
//               {servicesData.map((service) => (
//                 <li key={service.id}>
//                   {/* ✅ 2. IMPORTANT CHANGE: onClick={onClose} added here */}
//                   <Link 
//                     to={`/service/${service.id}`} 
//                     onClick={onClose}
//                   >
//                     {service.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//           </div>

//           {/* COLUMN 3 — PATIENT RESOURCES */}
//           <div className="menu-column">
//             {!showServicesOnly && (
//               <div className="menu-image-container">
//                 <img src={img3} alt="Patient Resources" />
//               </div>
//             )}
//             <h2 className="menu-header">Patient Resources</h2>
//             <ul className="menu-list">
//               <li><Link to="/" onClick={onClose}>Virtual Consultation</Link></li>
//               <li><Link to="/" onClick={onClose}>Mission Statement</Link></li>
//               <li><Link to="/" onClick={onClose}>Out-of-Town Patients</Link></li>
//               <li><Link to="/" onClick={onClose}>Blog</Link></li>
//               <li><Link to="/gallery" onClick={onClose}>Photo Gallery</Link></li>
//               <li><Link to="/" onClick={onClose}>FAQ</Link></li>
//               <li><Link to="/" onClick={onClose}>Treatment Considerations</Link></li>
//             </ul>
//           </div>

//         </div>

//         {/* FOOTER BUTTON */}
//         {!showServicesOnly && (
//           <div className="menu-footer">
//             <button
//               className="view-all-services"
//               onClick={() => setShowServicesOnly(true)}
//             >
//               VIEW ALL SERVICES
//             </button>
//           </div>
//         )}

//         {/* SPACER */}
//         <div
//           className="menu-bottom-decoration"
//           style={{ height: '150px', width: '100%' }}
//         ></div>
//       </div>

//       <div className="menu-bottom-fade"></div>
//     </div>
//   );
// };

// export default MenuOverlay;

// src/components/MenuOverlay.jsx
import React, { useState, useEffect } from 'react';
import './MenuOverlay.css';
import { Link } from 'react-router-dom';
import { servicesData } from '../servicesData';
// 1. DOCTORS DATA IMPORT KIYA (Dhayn rahe: export ka naam 'doctors' hai)
import { doctors } from '../doctorsData'; 

const img1 = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600";
const img2 = "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=600";
const img3 = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=600";

const MenuOverlay = ({ isOpen, onClose }) => {
  const [showServicesOnly, setShowServicesOnly] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setShowServicesOnly(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="menu-overlay">
      <div className="menu-scroll-wrapper">
        <div className="menu-content">

          {/* --- COLUMN 1 — ABOUT US (UPDATED) --- */}
          {!showServicesOnly && (
            <div className="menu-column">
              <div className="menu-image-container">
                <img src={img1} alt="Clinic" />
              </div>
              <h2 className="menu-header">About Us</h2>
              <ul className="menu-list">
                
                {/* Static Links */}
                <li><Link to="/" onClick={onClose}>Home</Link></li>
                <li><Link to="/" onClick={onClose}>About our Doctors</Link></li>
                
                {/* --- 2. DYNAMIC DOCTORS LIST --- */}
                {/* Ye loop doctorsData file se naam utha ke list banayega */}
                {doctors.map((doc) => (
                  <li key={doc.id}>
                    <Link to={`/doctor/${doc.id}`} onClick={onClose}>
                      {doc.name}
                    </Link>
                  </li>
                ))}

                {/* Static Link */}
                <li><Link to="/" onClick={onClose}>Oakbrook Terrace Location</Link></li>
              </ul>
            </div>
          )}

          {/* --- COLUMN 2 — HAIR RESTORATION (Already Dynamic) --- */}
          <div className="menu-column">
            {!showServicesOnly && (
              <div className="menu-image-container">
                <img src={img2} alt="Hair Restoration" />
              </div>
            )}
            
            <h2 className="menu-header">Hair Restoration</h2>
            
            <ul className="menu-list">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link to={`/service/${service.id}`} onClick={onClose}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3 — PATIENT RESOURCES --- */}
          <div className="menu-column">
            {!showServicesOnly && (
              <div className="menu-image-container">
                <img src={img3} alt="Patient Resources" />
              </div>
            )}
            <h2 className="menu-header">Patient Resources</h2>
            <ul className="menu-list">
              <li><Link to="/" onClick={onClose}>Virtual Consultation</Link></li>
              <li><Link to="/" onClick={onClose}>Mission Statement</Link></li>
              <li><Link to="/" onClick={onClose}>Out-of-Town Patients</Link></li>
              <li><Link to="/" onClick={onClose}>Blog</Link></li>
              <li><Link to="/gallery" onClick={onClose}>Photo Gallery</Link></li>
              <li><Link to="/" onClick={onClose}>FAQ</Link></li>
              <li><Link to="/" onClick={onClose}>Treatment Considerations</Link></li>
            </ul>
          </div>

        </div>

        {/* FOOTER BUTTON */}
        {!showServicesOnly && (
          <div className="menu-footer">
            <button
              className="view-all-services"
              onClick={() => setShowServicesOnly(true)}
            >
              VIEW ALL SERVICES
            </button>
          </div>
        )}

        {/* SPACER */}
        <div className="menu-bottom-decoration" style={{ height: '150px', width: '100%' }}></div>
      </div>

      <div className="menu-bottom-fade"></div>
    </div>
  );
};

export default MenuOverlay;