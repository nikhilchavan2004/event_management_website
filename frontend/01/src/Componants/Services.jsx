import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Birthday Planning",
      url: "/birthday.jpg",
    },
    {
      id: 2,
      title: "Wedding Planning",
      url: "/wedding.jpg",
    },
    {
      id: 3,
      title: " Party",
      url: "/party.jpg",
    },
    {
      id: 4,
      title: "Game Night",
      url: "/gamenight.jpg",
    },
    {
      id: 5,
      title: "Camping Trip",
      url: "/camping.jpg",
    },
    {
      id: 6,
      title: "Anniversary Celebration",
      url: "/anniversary.jpg",
    },
  ];
  return (
    <div>
      <div className="services container">
      <h4
          style={{
            position: "relative",
            top: "0.7rem",
            left: "38.5rem",
            fontFamily: "Alex Brush",
            color: '#D4AF37',
            fontSize: "1.5rem",
            fontWeight: "lighter",
          }}
        >
          Events
        </h4>
        <h2
         style={{
          fontFamily: "",
          fontSize: "2rem",
          fontWeight: "bold",
          position: "relative",
          left: "33rem",
          color: "white",
        }}
        

        >Our Services</h2>
        <div className="banner">
          {services.map((service) => {
            return (
              <div className="item" key={service.id}>
                <h3>{service.title}</h3>
                <img src={service.url} alt={service.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
