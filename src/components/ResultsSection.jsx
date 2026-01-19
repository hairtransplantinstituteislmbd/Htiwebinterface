// src/components/ResultsSection.jsx
import React from 'react';
import './ResultsSection.css';

const resultsData = [
  {
    id: 1,
    title: "Full Scalp Restoration",
    desc: "This 34-year-old man underwent a 3,665-graft hair restoration, designed to rebuild the frontal hairline and extend coverage.",
    before: "https://einstein-clients.imgix.net/3094/482391/original_before-Hair-Loss-Surgery-3665-Full-Scalp-Restoration.jpg?1750455416=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482390/original_after-Hair-Loss-Surgery-3665-Full-Scalp-Restoration.jpg?1750455416=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420"
  },
  {
    id: 2,
    title: "Front Temporal Restoration",
    desc: "This 28-year-old patient received 4,086 grafts over three sessions to restore thinning hair in the frontal and crown areas.",
    before: "https://einstein-clients.imgix.net/3094/482449/original_before-Hair-Loss-Surgery-4086-Graft-Staged-Frontotemporal-Restoration.jpg?1750698130=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482448/original_after-Hair-Loss-Surgery-4086-Graft-Staged-Frontotemporal-Restoration.jpg?1750698130=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420"
  },
  {
    id: 3,
    title: "Hairline Advancement",
    desc: "This 49-year-old woman underwent a 2,141 graft dense-pack procedure to lower her high hairline and enhance thinning frontotemporal areas.",
    before: "https://einstein-clients.imgix.net/3094/482450/original_before-Hair-Loss-Surgery-2141-Female-Frontal-Hairline-Advancement-Using-Dense-Pack-Grafting.jpg?1750698204=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482451/original_after-Hair-Loss-Surgery-2141-Female-Frontal-Hairline-Advancement-Using-Dense-Pack-Grafting.jpg?1750698204=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420"
  },
  {
    id: 4,
    title: "Frontal Midscalp Restoration",
    desc: "This patient underwent a two-session hair restoration totaling 4,563 grafts to create a natural hairline and boost density.",
    before: "https://einstein-clients.imgix.net/3094/482455/original_before-Hair-Loss-Surgery-4563-Graft-Frontal-Midscalp-Restoration.jpg?1750701444=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420",
    after: "https://einstein-clients.imgix.net/3094/482454/original_after-Hair-Loss-Surgery-4563-Graft-Frontal-Midscalp-Restoration.jpg?1750701443=&amp%3Bauto=format&amp%3Bfit=max&auto=format&w=540&h=420"
  }
];

const ResultsSection = () => {
  return (
    <div className="results-section">
      <h2 className="main-heading">The Results Speak for Themselves</h2>
      
      <div className="results-grid">
        {resultsData.map((item) => (
          <div key={item.id} className="result-card">
            
            {/* Images Row */}
            <div className="res-images-row">
              <div className="res-img-box">
                <img src={item.before} alt="Before" />
                <span className="res-tag">Before</span>
              </div>
              <div className="res-img-box">
                <img src={item.after} alt="After" />
                <span className="res-tag">After</span>
              </div>
            </div>

            {/* Text Content */}
            <h3 className="res-title">{item.title}</h3>
            <p className="res-desc">{item.desc}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;