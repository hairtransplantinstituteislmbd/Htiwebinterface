// import React, { useState, useEffect } from 'react';
// import './VideoPage.css';

// const VideoPage = () => {
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // --- 1. MAIN VIDEO STATE ---
//   const [mainVideo, setMainVideo] = useState({
//     url: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58087/original/Intro_to_Dr_Nadimi_V1.mp4?1655158202",
//     title: "A Compassionate Facial Plastic Surgeon",
//     desc: "Facial plastic surgeon Sahar Nadimi tells us how and why she came to Chicago Hair Institute. She has a special interest in helping women affected by hair loss."
//   });

//   const handleVideoChange = (video) => {
//     setMainVideo(video);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // --- 2. DATA ARRAYS ---
  
//   // Note: Aapne 'img' property mein MP4 links dale hain, isliye hum 'vid.img' ko hi video URL ke tor par use karenge.
  
//   const surgicalVideos = [
//     { id: 1, title: "Hair Transplant Scar Repair", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58083/original/Hair_Transplantation_Scar_Revision_V1.mp4?1655157942", duration: "00:51" },
//     { id: 2, title: "Hairline Lowering Surgery", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58087/original/Intro_to_Dr_Nadimi_V1.mp4?1655158202", duration: "01:15" },
//     { id: 3, title: "Female Hair Loss", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58079/original/Female_Hair_Loss_V1.mp4?1655157901", duration: "01:08" }
//   ];

//   const otherServicesVideos = [
//     { id: 4, title: "Chin Implants", duration: "00:55", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58071/original/Chin_Implants_V1.mp4?1655157810" },
//     { id: 5, title: "Eyelid Surgery", duration: "01:10", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58073/original/Eyelid_Surgery_V1.mp4?1655157844" },
//     { id: 6, title: "Facelift", duration: "00:56", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58075/original/Facelift_V1.mp4?1655157859" },
//     { id: 7, title: "Neck Lift", duration: "00:47", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58091/original/Necklift_V1.mp4?1655158022" },
//     { id: 8, title: "Rhinoplasty", duration: "00:57", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58095/original/Rhinoplasty_V1.mp4?1655158120" },
//     { id: 9, title: "Otoplasty", duration: "00:52", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58093/original/Otoplasty_V1.mp4?1655158042" },
//     { id: 10, title: "Neck Liposuction", duration: "00:45", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58097/original/Submental_Liposuction_V1.mp4?1655158158" },
//     { id: 11, title: "BOTOX®", duration: "00:52", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58069/original/Botox_V1.mp4?1655157756" }
//   ];

//   return (
//     <div className="video-page">
      
//       {/* --- TOP SECTION: PLAYER --- */}
//       <div className="main-video-section">
//         <h1 className="page-title">{mainVideo.title}</h1>
        
//         <div className="video-container">
//            {/* Key prop url honay ki wajah se jab url change hoga, player reload hoga */}
//            <video 
//              key={mainVideo.url} 
//              width="100%" 
//              height="100%" 
//              controls 
//              autoPlay 
//              muted // Autoplay needs muted usually
//              className="mp4-player"
//              style={{backgroundColor: 'black'}}
//            >
//              <source src={mainVideo.url} type="video/mp4" />
//              Your browser does not support the video tag.
//            </video>
//         </div>

//         <div className="video-description">
//            <h2 className="desc-title">Description</h2>
//            <p className="desc-text">{mainVideo.desc}</p>
//            <a href="#" className="transcript-link">View transcript</a>
//         </div>
//       </div>

//       {/* --- BOTTOM SECTION: GALLERY --- */}
//       <div className="video-gallery-section">
        
//         {/* Category 1: About */}
//         <div className="gallery-category">
//             <h3 className="category-title">About the Practice</h3>
//             <div className="video-grid single-item">
//                  <div className="video-card" onClick={() => handleVideoChange({
//                     url: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58087/original/Intro_to_Dr_Nadimi_V1.mp4?1655158202",
//                     title: "About Dr. Sahar Nadimi",
//                     desc: "An in-depth look at Dr. Nadimi's approach to facial plastic surgery."
//                  })}>
//                     <div className="thumbnail-wrapper">
//                         {/* Note: Yeh video file hai, thumbnail ke liye image link behtar hota hai */}
//                         <video src="https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58087/original/Intro_to_Dr_Nadimi_V1.mp4?1655158202" style={{width:'100%', height:'100%', objectFit:'cover'}} muted></video>
//                         <span className="duration">01:28</span>
//                         <div className="play-icon">▶</div>
//                     </div>
//                  </div>
//             </div>
//         </div>

//         {/* Category 2: Surgical */}
//         <div className="gallery-category">
//             <h3 className="category-title">Surgical Hair Loss Solutions</h3>
//             <div className="video-grid">
//                 {surgicalVideos.map(vid => (
//                     <div className="video-card" key={vid.id} onClick={() => handleVideoChange({
//                         url: vid.img, // ✅ FIX: COMMON_URL ki jagah vid.img (unique link) pass kiya
//                         title: vid.title,
//                         desc: `Watch details about ${vid.title}.`
//                     })}>
//                         <div className="thumbnail-wrapper">
//                             <video src={vid.img} style={{width:'100%', height:'100%', objectFit:'cover'}} muted></video>
//                             <span className="duration">{vid.duration}</span>
//                             <div className="play-icon">▶</div>
//                         </div>
//                         <h4 className="video-title">{vid.title}</h4>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         {/* Category 3: Other Services */}
//         <div className="gallery-category">
//             <h3 className="category-title">Other Services</h3>
//             <div className="video-grid">
//                 {otherServicesVideos.map(vid => (
//                     <div className="video-card" key={vid.id} onClick={() => handleVideoChange({
//                         url: vid.img, // ✅ FIX: Yahan bhi unique link pass kiya
//                         title: vid.title,
//                         desc: `Detailed procedure explanation for ${vid.title}.`
//                     })}>
//                         <div className="thumbnail-wrapper">
//                             <video src={vid.img} style={{width:'100%', height:'100%', objectFit:'cover'}} muted></video>
//                             <span className="duration">{vid.duration}</span>
//                             <div className="play-icon">▶</div>
//                         </div>
//                         <h4 className="video-title">{vid.title}</h4>
//                     </div>
//                 ))}
//             </div>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default VideoPage;


// src/components/VideoPage.jsx
import React, { useState, useEffect } from 'react';
import './VideoPage.css';

const VideoPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mainVideo, setMainVideo] = useState({
    url: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58087/original/Intro_to_Dr_Nadimi_V1.mp4?1655158202",
    title: "A Compassionate Facial Plastic Surgeon",
    desc: "Facial plastic surgeon Sahar Nadimi tells us how and why she came to Chicago Hair Institute. She has a special interest in helping women affected by hair loss."
  });

  const handleVideoChange = (video) => {
    setMainVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const surgicalVideos = [
    { id: 1, title: "Hair Transplant Scar Repair", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58083/original/Hair_Transplantation_Scar_Revision_V1.mp4?1655157942", duration: "00:51" },
    { id: 2, title: "Hairline Lowering Surgery", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58087/original/Intro_to_Dr_Nadimi_V1.mp4?1655158202", duration: "01:15" },
    { id: 3, title: "Female Hair Loss", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58079/original/Female_Hair_Loss_V1.mp4?1655157901", duration: "01:08" }
  ];

  const otherServicesVideos = [
    { id: 4, title: "Chin Implants", duration: "00:55", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58071/original/Chin_Implants_V1.mp4?1655157810" },
    { id: 5, title: "Eyelid Surgery", duration: "01:10", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58073/original/Eyelid_Surgery_V1.mp4?1655157844" },
    { id: 6, title: "Facelift", duration: "00:56", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58075/original/Facelift_V1.mp4?1655157859" },
    { id: 7, title: "Neck Lift", duration: "00:47", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58091/original/Necklift_V1.mp4?1655158022" },
    { id: 8, title: "Rhinoplasty", duration: "00:57", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58095/original/Rhinoplasty_V1.mp4?1655158120" },
    { id: 9, title: "Otoplasty", duration: "00:52", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58093/original/Otoplasty_V1.mp4?1655158042" },
    { id: 10, title: "Neck Liposuction", duration: "00:45", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58097/original/Submental_Liposuction_V1.mp4?1655158158" },
    { id: 11, title: "BOTOX®", duration: "00:52", img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58069/original/Botox_V1.mp4?1655157756" }
  ];

  // Helper Component for Cards (Code Repetition kam karne ke liye)
  const VideoCard = ({ vid }) => (
    <div className="video-card" onClick={() => handleVideoChange({
        url: vid.img,
        title: vid.title,
        desc: `Watch details about ${vid.title}.`
    })}>
        {/* Black Thumbnail Box */}
        <div className="thumbnail-wrapper">
            <div className="black-placeholder">
                 <div className="play-circle">▶</div>
            </div>
            <span className="duration">{vid.duration}</span>
        </div>
        
        {/* Title Link Style */}
        <h4 className="video-title">{vid.title}</h4>
    </div>
  );

  return (
    <div className="video-page">
      
      <div className="main-video-section">
        <h1 className="page-title">{mainVideo.title}</h1>
        <div className="video-container">
           <video 
             key={mainVideo.url} 
             width="100%" 
             height="100%" 
             controls 
             autoPlay 
             muted 
             className="mp4-player"
             style={{backgroundColor: 'black'}}
           >
             <source src={mainVideo.url} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
        </div>
        <div className="video-description">
           <h2 className="desc-title">Description</h2>
           <p className="desc-text">{mainVideo.desc}</p>
        </div>
      </div>

      <div className="video-gallery-section">
        
        <div className="gallery-category">
            <h3 className="category-title">About the Practice</h3>
            <div className="video-grid single-item">
                 <VideoCard vid={{
                     id: 0,
                     title: "About Dr. Sahar Nadimi",
                     img: "https://d1nhi0zj0wurg7.cloudfront.net/uploads/medias/58087/original/Intro_to_Dr_Nadimi_V1.mp4?1655158202",
                     duration: "01:28"
                 }} />
            </div>
        </div>

        <div className="gallery-category">
            <h3 className="category-title">Surgical Hair Loss Solutions</h3>
            <div className="video-grid">
                {surgicalVideos.map(vid => <VideoCard key={vid.id} vid={vid} />)}
            </div>
        </div>

        <div className="gallery-category">
            <h3 className="category-title">Other Services</h3>
            <div className="video-grid">
                {otherServicesVideos.map(vid => <VideoCard key={vid.id} vid={vid} />)}
            </div>
        </div>

      </div>
    </div>
  );
};

export default VideoPage;