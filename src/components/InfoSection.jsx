
import React, { useState, useRef } from 'react'; // useState aur useRef import karein
import './InfoSection.css';
import { Link } from 'react-router-dom';

// --- PLACEHOLDER IMAGES ---
const beforeImg = "https://einstein-clients.imgix.net/3094/482333/original_before-hair-loss-surgery-4210-graft-hair-restoration.jpg?1750441507=&auto=format&fit=max&auto=format&w=1102&h=840"; 
const afterImg = "https://einstein-clients.imgix.net/3094/482334/original_after-hair-loss-surgery-4210-graft-hair-restoration.jpg?1750441507=&auto=format&fit=max&auto=format&w=1102&h=840";
const laptopMan = "https://einstein-clients.imgix.net/3094/482877/original.jpg?1751498962=&auto=format&fit=max&auto=format&w=1000&h=375";

const InfoSection = () => {
  // --- SLIDER LOGIC ---
  const [sliderPosition, setSliderPosition] = useState(50); // Default beech mein (50%)
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left; // Mouse ya Touch position
    const width = rect.width;
    
    // Calculate percentage (0 se 100 ke beech mein lock karein)
    let percent = (x / width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    
    setSliderPosition(percent);
  };

  return (
    <div className="info-section-wrapper">
      
      {/* ================= SECTION 1: TOP SPLIT ================= */}
      <div className="info-split-container">
        
        {/* --- LEFT SIDE: NATURAL RESULTS (SLIDER ADDED HERE) --- */}
        <div className="info-half left-half">
          <h2 className="serif-heading">Natural-Looking <br/> Transplant Results</h2>
          
          {/* --- NEW: IMAGE COMPARISON SLIDER --- */}
          <div 
            className="comparison-container" 
            ref={containerRef}
            onMouseMove={handleMove}
            onTouchMove={handleMove} // Mobile support
          >
            {/* 1. Background Image (AFTER - Full Width) */}
            <img src={afterImg} alt="After" className="img-base" />
            <span className="slider-label label-after">After</span>

            {/* 2. Foreground Image (BEFORE - Width controlled by slider) */}
            <div className="img-overlay" style={{ width: `${sliderPosition}%` }}>
              <img src={beforeImg} alt="Before" />
              <span className="slider-label label-before">Before</span>
            </div>

            {/* 3. The Slider Handle (Line & Arrows) */}
            <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
              <div className="handle-line"></div>
              <div className="handle-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
              </div>
            </div>
          </div>
          {/* --- END SLIDER --- */}

          <div className="info-text-wrapper">
            <p className="info-text">
              This 48-year-old man received 4,201 grafts from Dr. Raymond J. Konior over two sessions. Patients who demand natural-looking hair restoration results like these turn to Chicago Hair Institute.
            </p>
            <p className="info-text">
              Dr. Konior and Dr. Sahar Nadimi personally perform the most advanced procedures to give you the hairline and confidence you deserve.
            </p>
          </div>

        </div>

        {/* --- RIGHT SIDE: VIRTUAL CONSULTATION --- */}
        <div className="info-half right-half">
          <h2 className="serif-heading">Request Your <br/> Virtual Consultation</h2>
          
          <div className="consult-img-wrapper">
             <img src={laptopMan} alt="Virtual Consultation" />
          </div>

          <div className="info-text-wrapper">
            <p className="info-text">
              Chicago Hair Institute makes it incredibly easy to explore your options from home with a virtual consultation. No travel. No stress.
            </p>
            <p className="info-text">
              Our process starts with simple photos and a quick form about your hair loss history, goals, and concerns. Dr. Konior and Dr. Nadimi personally review your information to create a custom plan.
            </p>
          </div>
        </div>

      </div>

      {/* ================= SECTION 2: TESTIMONIAL ================= */}
      {/* ... Baki ka code same rahega (Testimonials & Why Choose Us) ... */}
      <div className="testimonial-section">
        <div className="testimonial-container">
          <p className="quote-text">
            “I just got an FUE hair transplant with them and I am very happy with how the procedure went. If you are considering a transplant, I would recommend Chicago Hair Institute.”
          </p>
          <p className="author-text">
            – BMO, <a href="#" className="teal-link">5-Star Review</a>
          </p>
          <div className="action-buttons">
           <Link to="/contact" className="btn-teal btn-call">
              CALL OUR OFFICE
            </Link>
          </div>
        </div>
      </div>

       {/* ================= SECTION 3: WHY CHOOSE US ================= */}
       <div className="why-choose-section">
        <h2 className="centered-heading">Why Islamabad Hair <br/> Institute Is the Best Choice</h2>
        <div className="cards-grid">
          <div className="dark-card">
            <h3>Care by a Surgeon</h3>
            <p>Procedures like <a href="#">follicular unit extraction (FUE)</a> are often handed off to technicians. At CHI, our surgeons personally perform every stage.</p>
          </div>
          <div className="dark-card">
            <h3>Expertise</h3>
            <p><a href="#">Dr. Konior</a> combines world-class surgical training with decades of hair restoration expertise.</p>
          </div>
          <div className="dark-card">
            <h3>Results</h3>
            <p>Dr. Konior and <a href="#">Dr. Nadimi</a> approach hair restoration as an art form. <br/><br/><a href="#">See their natural-looking results in our gallery.</a></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InfoSection;