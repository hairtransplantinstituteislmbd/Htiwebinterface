// // src/components/Awards.jsx
// import React from 'react';
// import './Awards.css';

// // --- IMAGES IMPORT KAREIN (Local Assets se) ---
// // Note: Make sure karein ke aapne images 'src/assets' folder mein rakh di hain
// import award1 from '../assets/awards/for ffp.jpeg'; // ABFPRS
// import award2 from '../assets/awards/doneee.jpeg'; // ABFPRS


// const logos = [
//   { id: 1, src: award1, alt: "ABFPRS Board Certified" },
//    { id: 2, src: award2, alt: "ABFPRS Board Certified" },
// ];

// const Awards = () => {
//   return (
//     <div className="awards-section">
//       <div className="awards-track">
        
//         {/* --- ORIGINAL SET --- */}
//         <div className="awards-list">
//           {logos.map((logo) => (
//             <img 
//               key={logo.id} 
//               src={logo.src} 
//               alt={logo.alt} 
//               className="award-logo" 
//             />
//           ))}
//         </div>

//         {/* --- DUPLICATE SET --- */}
//         <div className="awards-list" aria-hidden="true">
//           {logos.map((logo) => (
//             <img 
//               key={logo.id + '_dup'} 
//               src={logo.src} 
//               alt={logo.alt} 
//               className="award-logo" 
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Awards;

import React from 'react';
import './Awards.css';

const logos = [
  {
    id: 1,
    src: "https://einstein-clients.imgix.net/3094/472740/original_logo-abfvrs-1.png?1738351478=&auto=format&fit=max",
    alt: "ABFVRS Certified"
  },
  {
    id: 2,
    src: "https://einstein-clients.imgix.net/3094/156901/original_membersonlylogo-gold_without_background.jpg?1473186615=&auto=format&fit=max",
    alt: "Award 2"
  },
  {
    id: 3,
    src: "https://einstein-clients.imgix.net/3094/472741/original_logo-bestdoctors-3.png?1738351523=&auto=format&fit=max",
    alt: "Award 3"
  },
  {
    id: 4,
    src: "https://einstein-clients.imgix.net/3094/162221/original.png?1477338570=&auto=format&fit=max",
    alt: "Award 4"
  },
   {
    id: 5,
    src: "https://einstein-clients.imgix.net/3094/482330/original_castle-connolly-top-doctors.png?1750440478=&auto=format&fit=max",
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
