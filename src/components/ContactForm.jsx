

import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxvvlaJqHt9DvWctJ-gmrxQC722zDk34azNhrqQNvolkqPEi1XYTLKXny6WlaFh_ZTd/exec"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data.result === 'success') {
          setStatus('Success! We received your message.');
          e.target.reset();
      } else {
          setStatus('Something went wrong.');
      }
    })
    .catch((error) => {
      console.log(error);
      setStatus('Error! Please try again.');
    });
  };

  return (
    <div className="contact-body">
      <div className="contact-container">
        
        {/* --- LEFT PANEL (Info) --- */}
        <div className="contact-info">
          <div>
            <h2 className="info-heading">Contact Us</h2>
            <p className="info-sub">
              Not sure what you need? The team at Chicago Hair Institute will be happy to listen to you and suggest ideas you hadn't considered.
            </p>
          </div>

          <div className="info-details">
            <div className="info-row">
              <span className="icon">✉️</span>
              <span>hairtransplantinstituteislmbd@gmail.com</span>
            </div>
            <div className="info-row">
              <span className="icon">
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
              </span>
              <span>Support: +92-300-9558737</span>
            </div>
          </div>
        </div>

        {/* --- RIGHT PANEL (Form) --- */}
        <div className="contact-form-wrapper">
          <div className="form-header">
            <h3>We'd love to hear from you!</h3>
            <p>Let's get in touch</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            
            {/* Row 1: Names */}
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="first_name" className="form-input" placeholder="John" required />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="last_name" className="form-input" placeholder="Doe" required />
            </div>

            {/* Row 2: Email & Phone */}
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" className="form-input" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input type="tel" name="phone" className="form-input" placeholder="+1 (555) 000-0000" />
            </div>

            {/* Row 3: Message (Full Width) */}
            <div className="form-group full-width">
              <label>Message</label>
              <textarea name="message" className="form-input textarea" placeholder="Type your message here..."></textarea>
            </div>

            {/* Consent Section (Full Width) */}
            <div className="consent-section">
                <div className="consent-box">
                    <input type="checkbox" id="sms-consent" name="sms_consent" />
                    <label htmlFor="sms-consent">I consent to receive texts. <span className="small-text">Standard rates may apply.</span></label>
                </div>
                <div className="consent-box">
                    <input type="checkbox" id="email-consent" name="email_consent" />
                    <label htmlFor="email-consent">I agree to receive emails regarding updates.</label>
                </div>
            </div>

            {/* Status Message */}
            {status && <div className={`status-msg ${status.includes('Success') ? 'success' : 'error'}`}>{status}</div>}

            <button type="submit" className="submit-btn">Send Message</button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;