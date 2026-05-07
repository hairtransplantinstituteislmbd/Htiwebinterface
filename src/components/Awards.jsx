

// export default Awards;

import React from 'react';
import './Awards.css';
import logo1 from '../Images/Awards/Awardlogo1.webp'; 
import logo2 from '../Images/Awards/Awardlogo2.webp'; 
import logo3 from '../Images/Awards/Awardlogo3.webp'; 
import logo4 from '../Images/Awards/Awardlogo4.webp'; 
import logo5 from '../Images/Awards/Awardlogo5.webp'; 
import logo6 from '../Images/Awards/Awardlogo6.webp'; 
import logo7 from '../Images/Awards/Awardlogo7.webp'; 

const logos = [
  {
    id: 1,
    src: logo1,
    alt: "ABFVRS Certified"
  },
  {
    id: 2,
    src: logo2,
    alt: "Award 2"
  },
  {
    id: 3,
    src: logo3,
    alt: "Award 3"
  },
  {
    id: 4,
    src: logo4,
    alt: "Award 4"
  },
   {
    id: 5,
    src: logo5,
    alt: "Award 5"
  },
 {
    id: 6,
    src: logo6,
    alt: "Award 5"
  },
   {
    id: 7,
    src: logo7,
    alt: "Award 5"
  }
];

const Awards = () => {
  return (
    <div className="awards-section">
      <div className="awards-track">

        {/* ORIGINAL */}
        <div className="awards-list">
          {logos.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="award-logo"
            />
          ))}
        </div>

        {/* DUPLICATE (for infinite scroll) */}
        <div className="awards-list" aria-hidden="true">
          {logos.map((logo) => (
            <img
              key={logo.id + '-dup'}
              src={logo.src}
              alt={logo.alt}
              className="award-logo"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Awards;
