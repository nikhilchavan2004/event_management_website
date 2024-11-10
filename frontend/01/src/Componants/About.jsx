import React from "react";

const About = () => {
  return (
    <section className="about container">
      <h4     style={{
          position: "relative",
          top:"1.7rem",
          left: "37.5rem",
          color: '#D4AF37',
      }}>Events</h4>
      <h2
        style={{
          position: "relative",
          left: "35rem",
       fontFamily:"",
          fontSize: "2rem",
          fontWeight:"bold",
          color: "white"
        }}
      >
        ABOUT
      </h2>
      <p  style={{textAlign:"center"}}>
      At Imperial Events, we specialize in transforming your visions into unforgettable experiences. Our dedicated team, passionate about event planning, meticulously handles every detail—from conceptualization and venue selection to vendor coordination and on-site management—ensuring a seamless and memorable occasion. What sets us apart as your trusted partner for all types of events, whether it’s a wedding, corporate gathering, or special celebration, is our unwavering commitment to excellence, creativity, and client satisfaction. We believe that every event should reflect the unique personality and desires of our clients. With our expertise, we take the stress out of planning, allowing you to enjoy the journey and focus on what truly matters—creating memories. Let us bring your dream event to life!

      </p>
    </section>
  );
};

export default About;
