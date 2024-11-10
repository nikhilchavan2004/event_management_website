import React, { useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Tu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const formData = useMemo(() => {
    console.log("Location state:", location.state);
    return location.state || {};
  }, [location.state]);

  useEffect(() => {
    console.log("Form Data in useEffect:", formData);
  }, [formData]);

  const goHome = () => {
    navigate("/");
  };

  const renderBookingDetails = () => {
    if (Object.keys(formData).length > 0) {
      return (
        <div style={{
          backgroundColor: "black",
          padding: "20px",
          border: "1.4px solid white",
          borderRadius: "10px",
          marginBottom: "30px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderBlockColor:"yellow",
          color:"white"
        }}>
          <h2 style={{ marginBottom: "20px", color:"white", borderBottom: "2px solid #D4AF37", paddingBottom: "10px" }}>
            Your Booking Details
          </h2>
          {['name', 'email', 'subject', 'message'].map(field => (
            <div key={field} style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start",color:"white" }}>
              <strong style={{ minWidth: "100px", color: "white", textTransform: "capitalize" }}>
                {field}:
              </strong>
              <span style={{ 
          color: '#D4AF37', flex: 1, wordBreak: "break-word" }}>
                {formData[field] || "N/A"}
              </span>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <p style={{ color: "red", marginBottom: "20px" }}>
          No booking data available. Raw location state: {JSON.stringify(location.state)}
        </p>
      );
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      boxSizing: "border-box",
    }}>
      <h1 style={{
        fontSize: "50px",
        fontWeight: "bold",
        color: "white",
        fontFamily: "revert-layer",
        marginBottom: "20px",
        textAlign: "center",
      }}>
        Thank You for Booking!
      </h1>
      <p style={{
        fontSize: "34px",
        color: "#D4AF37",
        marginBottom: "30px",
        textAlign: "center",
        fontFamily:"Alex Brush"
      }}>
        We appreciate your interest; we'll keep you updated!
      </p>
      
      {renderBookingDetails()}

      <button
        onClick={goHome}
        style={{
          backgroundColor: "black",
          color: "white",
          border: "1.2px solid #D4AF37",
          borderColor: "#D4AF37",
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",

          borderRadius: "5px",
        }}
      >
        Go Back To Home Page
      </button>
    </div>
  );
};

export default Tu;