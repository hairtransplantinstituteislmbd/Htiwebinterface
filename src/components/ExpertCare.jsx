// src/components/ExpertCare.jsx
import React from 'react';
import './ExpertCare.css';

const ExpertCare = () => {
  return (
    <div className="expert-section">
      <div className="expert-container">
        
        {/* --- LEFT COLUMN: Images & Review --- */}
        <div className="expert-left">
          
          {/* Before / After Images */}
          <div className="ba-images-row">
            <div className="ba-item">
              <img 
                src="https://einstein-clients.imgix.net/3094/482385/original_before-Hair-Loss-Surgery-2249-Frontal-Midscalp-Restoration.jpg?1750452083=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420" 
                alt="Before Hair Transplant" 
              />
              <span className="ba-tag">Before</span>
            </div>
            <div className="ba-item">
              <img 
                src="https://einstein-clients.imgix.net/3094/482384/original_after-Hair-Loss-Surgery-2249-Frontal-Midscalp-Restoration.jpg?1750452083=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420" 
                alt="After Hair Transplant" 
              />
              <span className="ba-tag">After</span>
            </div>
          </div>

          <p className="ba-caption">
            Our advanced hair restoration solutions can give you natural-looking results.
          </p>

          {/* Testimonial Quote */}
          <div className="testimonial-block">
            <p className="quote-text">
              “I give the highest marks possible to Dr. Sahar Nadimi and her staff. The surgery I received was an FUT hair restoration... My experience at the Chicago Hair Institute Clinic was A+++, and I would highly recommend this clinic to anyone. Thank you.”
            </p>
            <p className="quote-author">— <strong>A J</strong>, <span className="green-text">5-Star Review</span></p>
          </div>

        </div>

        {/* --- RIGHT COLUMN: Content & Buttons --- */}
        <div className="expert-right">
          <h2 className="expert-heading">Expert Care with Convenient Payment Options</h2>
          
          <p className="expert-desc">
            Dr. Raymond Konior and Dr. Sahar Nadimi provide advanced hair restoration care to patients from around the world. Their expertise includes <span className="green-text underline">follicular unit extraction (FUE)</span>, a precise technique that transplants small groups of follicles.
          </p>

          <p className="expert-desc">
            At the Chicago Hair Institute, we want our services to be accessible and affordable, which is why we make paying for treatment easy. We accept all major credit cards including Visa, Mastercard, Discover, and American Express.
          </p>

          {/* Buttons */}
          <div className="expert-buttons">
            
            <button className="expert-btn">
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
              CALL HERE
            </button>

           

          </div>

        </div>

      </div>
    </div>
  );
};

export default ExpertCare;