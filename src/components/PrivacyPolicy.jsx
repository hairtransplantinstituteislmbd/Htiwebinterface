import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <div className="yellow-accent center"></div>
          <p>Hair Transplant Institute Islamabad | Peshawar | UAE</p>
        </div>
      </section>

      <main className="privacy-main">
        <div className="policy-container">
          <div className="policy-section">
            <h2>01. Patient Data Protection</h2>
            <p>
              At <strong>HTI</strong>, we prioritize the confidentiality of our patients. 
              Any personal data collected—including medical history, scalp images, and contact 
              details—is strictly used for clinical assessment and surgical planning.
            </p>
          </div>

          <div className="policy-section">
            <h2>02. Use of Medical Media</h2>
            <p>
              Digital imaging and "Before & After" photographs are a core part of our 
              consultation process. These images are stored in a secure encrypted environment 
              and are never published without your explicit written consent.
            </p>
          </div>

          <div className="policy-section highlight-teal">
            <h2>03. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable 
              information to outside parties. This does not include trusted medical staff 
              who assist us in conducting your surgery and providing care.
            </p>
          </div>

          <div className="policy-section">
            <h2>04. Security Protocols</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your 
              personal information. All digital consultation forms are processed through 
              secure networks accessible only by authorized personnel.
            </p>
          </div>

          <div className="contact-box">
            <h3>Questions regarding your privacy?</h3>
            <p>Contact our Islamabad Head Office at:</p>
            <div className="contact-info">
              <span><strong>WhatsApp:</strong> +92-321-5000242</span>
              <span><strong>Email:</strong> hairtransplantinstituteislmbd@gmail.com</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;