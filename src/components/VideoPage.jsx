
import React, { useState, useEffect } from 'react';
import './VideoPage.css';

const VideoPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mainVideo, setMainVideo] = useState({
    url: "https://www.youtube.com/embed/J9vx2Z7-7u4",
    title: "Dr. Ross Carrier",
    desc: "Facial plastic surgeon Sahar Nadimi tells us how and why she came to Chicago Hair Institute. She has a special interest in helping women affected by hair loss."
  });

  const handleVideoChange = (video) => {
    setMainVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const surgicalVideos = [
    { id: 1, title: "Dr Abaseen Reviews", img: "https://www.youtube.com/embed/PRQZJ2ptHhs", duration: "00:51" },
    { id: 2, title: "Joe Recardo Talks About", img: "https://www.youtube.com/embed/sZWa3CIa1fk", duration: "01:15" },
    { id: 3, title: "Haroon Rashid Review", img: "https://www.youtube.com/embed/gM4rAOw9vY8", duration: "01:08" }
  ];

  const otherServicesVideos = [
    { id: 4, title: "A Compassionate Facial Plastic Surgeon", duration: "00:55", img: "https://www.youtube.com/embed/51ZVZybuNS8?autoplay=1&mute=1" }
  ];

  const VideoCard = ({ vid }) => (
    <div className="video-card" onClick={() => handleVideoChange({
        url: `${vid.img}?autoplay=1&mute=1`,
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
        
        <h4 className="video-title">{vid.title}</h4>
    </div>
  );

  return (
    <div className="video-page">
      
      <div className="main-video-section">
        <h1 className="page-title">{mainVideo.title}</h1>
        
        <div className="video-container">
           <iframe
             key={mainVideo.url} 
             src={mainVideo.url}
             title={mainVideo.title}
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowFullScreen
             className="iframe-player"
           ></iframe>
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
                     title: "Dr. Humayun Doing Surgery",
                     img: "https://www.youtube.com/embed/51ZVZybuNS8",
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