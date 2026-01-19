// src/components/InfoSection.jsx
import React from 'react';
import './InfoSection.css';

// --- PLACEHOLDER IMAGES (Aap apni asli images se replace kar lena) ---
// Note: Before/After ke liye maine 2 alag images use ki hain
const beforeImg = "https://einstein-clients.imgix.net/3094/482333/original_before-hair-loss-surgery-4210-graft-hair-restoration.jpg?1750441507=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=1102&h=840"; // Balding placeholder
const afterImg = "https://einstein-clients.imgix.net/3094/482334/original_after-hair-loss-surgery-4210-graft-hair-restoration.jpg?1750441507=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=1102&h=840";  // Full hair placeholder
const laptopMan = "https://einstein-clients.imgix.net/3094/482877/original.jpg?1751498962=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=1000&h=375"; // Man with laptop

const InfoSection = () => {
  return (
    <div className="info-section-wrapper">
      
      {/* ================= SECTION 1: TOP SPLIT (50/50) ================= */}
      <div className="info-split-container">
        
        {/* --- LEFT SIDE: NATURAL RESULTS --- */}
        <div className="info-half left-half">
          <h2 className="serif-heading">Natural-Looking <br/> Transplant Results</h2>
          
          {/* Before / After Images Row */}
          <div className="ba-images-row">
            <div className="ba-img-box">
              <img src={beforeImg} alt="Before Transplant" />
              <span className="ba-label">Before</span>
            </div>
            <div className="ba-img-box">
              <img src={afterImg} alt="After Transplant" />
              <span className="ba-label">After</span>
            </div>
          </div>

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

     
      {/* ================= SECTION 3: WHY CHOOSE US (DARK BOXES) ================= */}
      <div className="why-choose-section">
        <h2 className="centered-heading">Why Islamabad Hair <br/> Institute Is the Best Choice</h2>
        
        <div className="cards-grid">
          
          {/* Card 1 */}
          <div className="dark-card">
            <h3>Care by a Surgeon</h3>
            <p>
              Procedures like <a href="#">follicular unit extraction (FUE)</a> are often handed off to technicians. At CHI, our surgeons personally perform every stage of treatment so you get the very best results.
            </p>
          </div>

          {/* Card 2 */}
          <div className="dark-card">
            <h3>Expertise</h3>
            <p>
              <a href="#">Dr. Konior</a> combines world-class surgical training with decades of hair restoration expertise to deliver natural-looking, lasting results. He co-founded the American Board of Hair Restoration Surgery.
            </p>
          </div>

          {/* Card 3 */}
          <div className="dark-card">
            <h3>Results</h3>
            <p>
              Dr. Konior and <a href="#">Dr. Nadimi</a> approach hair restoration as an art form, and their meticulous technique ensures every follicle looks natural from every angle. 
              <br/><br/>
              <a href="#">See their natural-looking results in our gallery.</a>
            </p>
          </div>

        </div>
      </div>

 {/* ================= SECTION 2: TESTIMONIAL ================= */}
      <div className="testimonial-section">
        <div className="testimonial-container">
          <p className="quote-text">
            “I just got an FUE hair transplant with them and I am very happy with how the procedure went. If you are considering a transplant, I would recommend Chicago Hair Institute.”
          </p>
          <p className="author-text">
            – BMO, <a href="#" className="teal-link">5-Star Review</a>
          </p>

         <div className="action-buttons">
  
  {/* Added 'btn-call' class and replaced emoji with SVG */}
  <button className="btn-teal btn-call">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
    CALL OUR OFFICE
  </button>

</div>
        </div>
      </div>




    </div>
  );
};

export default InfoSection;