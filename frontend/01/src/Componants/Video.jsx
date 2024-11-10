import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "1550px", height: "1000px" }}>
        <ReactPlayer
          url="https://videos.pexels.com/video-files/856934/856934-sd_640_360_30fps.mp4" // Use a direct video URL
          muted={true} // Mute for autoplay
          controls={false} // Remove controls
          width="100%"
          height="100%"
          playing={true}
          loop={true}
        />
      </div>
      <div style={{
        position: "absolute",
        bottom: "40%", // Adjust this value to position vertically
        right: "3%",   // Adjust this value to position horizontally
        color: "white",
        textAlign: "right",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
      }}>
        <p style={{
            fontSize: "1rem",
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            position:"relative",
            top:"10px",

            
        }}>We Make Your Events</p>
        <p style={{
            fontSize: "6rem",
            fontFamily: 'Arial, sans-serif', // Use your preferred 
            fontWeight: "bolder",
            margin: 0
        }}>Majestic</p>
      </div>
    </div>
  );
};

export default VideoPlayer;