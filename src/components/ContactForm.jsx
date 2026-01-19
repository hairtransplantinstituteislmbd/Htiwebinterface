// src/components/ContactForm.jsx
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
    <div className="contact-section">
      <div className="contact-card">
        
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-sub">Fields marked with <span style={{color:'#e53935'}}>*</span> are required</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          
          {/* --- NEW: 2 Column Row for Names --- */}
          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input type="text" name="first_name" className="form-input" placeholder="John" required />
            </div>

            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" name="last_name" className="form-input" placeholder="Doe" required />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" name="user_email" className="form-input" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" className="form-input" placeholder="(555) 123-4567" />
          </div>

          <div className="form-group">
            <label>How can we help you?</label>
            <textarea name="message" className="form-input" rows="5" placeholder="Tell us about your hair restoration goals..."></textarea>
          </div>

          {/* Consent Checkboxes */}
          <div className="consent-section">
            <div className="consent-box">
                <input type="checkbox" id="sms-consent" name="sms_consent" />
                <label htmlFor="sms-consent">
                I consent to receive texts and calls from Chicago Hair Institute. <span className="small-text">Standard rates may apply.</span>
                </label>
            </div>

            <div className="consent-box">
                <input type="checkbox" id="email-consent" name="email_consent" />
                <label htmlFor="email-consent">
                I agree to receive emails from Chicago Hair Institute regarding updates and offers.
                </label>
            </div>
          </div>

          {/* Status Message */}
          {status && <div className={`status-msg ${status.includes('Success') ? 'success' : 'error'}`}>{status}</div>}

          <button type="submit" className="submit-btn">SEND MESSAGE</button>

        </form>

        <p className="form-footer">
          Prefer to call? <a href="tel:6309373581" className="link">(630) 937-3581</a>
          <br/>
          <span className="secure-text">🔒 Secure 256-bit Encryption</span>
        </p>

      </div>
    </div>
  );
};

export default ContactForm;