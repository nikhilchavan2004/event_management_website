import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contac = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (subject.trim().length < 5) {
      toast.error("Subject must be at least 5 characters long.");
      return;
    }

    if (message.trim().length < 15) {
      toast.error("Message must be at least 15 characters long.");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:3000/api/v1/msg/send`,
        { name, email, message, subject },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);

      console.log("Form data before navigation:", {
        name,
        email,
        subject,
        message,
      });

      // Navigate to the Thank You page with form data
      navigate("/Tu", {
        state: { name, email, subject, message },
        replace: true, // This ensures that the state is not lost on page refresh
      });
    } catch (error) {
      console.error("Error response:", error.response);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div>
      <div className="contact container">
        <h4
          style={{
            position: "relative",
            top: "2.3rem",
            left: "38.5rem",
            fontFamily: "Alex Brush",

            fontSize: "1.5rem",
            fontWeight: "lighter",
            color: "#D4AF37",
          }}
        >
          Events
        </h4>
        <h2
          className="text-center"
          style={{
            fontFamily: "",
            fontSize: "2rem",
            fontWeight: "bold",
            position: "relative",
            left: "35rem",
          }}
        >
          Contact Us
        </h2>
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Shivajinagar,Pune</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us :+91 9911731277</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>
              Mail Us :
              <a href="nihkilchavan4002@gmail.com">
                nihkilchavan4002@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div
          className="t"
          style={{
            position: "relative",
            top: "2rem",
          }}
        >
          <h4
            style={{
              position: "relative",
              top: "1rem",
              left: "38.5rem",
              fontFamily: "Alex Brush",
              color: "#D4AF37",
              fontSize: "1.5rem",
              fontWeight: "lighter",
            }}
          >
            Events
          </h4>

          <h4
            style={{
              position: "relative",
              left: "35rem",
              fontSize: "2rem",
              fontFamily: "",
              fontWeight: "Bolder",
            }}
          >
            Book now!
          </h4>

          <div className="banner">
            <div className="item">
              <iframe
                title="Pune Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315882.2302391763!2d73.8042552!3d18.5204305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b7a8a6e6e9%3A0x9a4cfb8c6c9d5e5a!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2s!4v1709099958323!5m2!1sen!2s"
                style={{ border: 0, width: "100%", height: "550px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="item">
              <form onSubmit={handleSendMessage}>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  rows={15}
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contac;
