
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubscribe = () => {
    navigate("/Tu"); // Navigate to /Tu when clicked
  };

  return (
    <footer>
      <div
        className="banner"
        style={{
          maxHeight: "460px",
          overflow: "hidden",
          padding: "5px",
        }}
      >
        <div className="title">
          <h1
            style={{
              position: "relative",
              top: "-8px",
            }}
          >
            IMPERIAL EVENTS
          </h1>
          <p
            style={{
              color: "#D4AF37",
            }}
          >
            We are a team of passionate event planners who are dedicated to
            making your event unforgettable.
          </p>
          <div className="tag">
            <input
              type="text"
              placeholder="email"
              style={{
                width: "300px",
                background: "white",
                borderRadius: "0%",
                color: "#0b888a",
              }}
            />
            <button
              onClick={handleSubscribe} // Call handleSubscribe on click
              style={{
                backgroundColor: "#3b291b",
                color: "white",
                borderRadius: "10%",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
          <p
            style={{
              color: "#D4AF37",
            }}
          >
            Sign-up with your email add to receive updates and news
          
    </p>
         
         <div class="ci">
            <div className="b">
              <h3>Contact Us</h3>
              <p
                style={{
                  color: "#D4AF37",
                }}
              >
                Event Management Co.
              </p>
              <p
                style={{
                  color: "#D4AF37",
                }}
              >
                123 Event Street, City, State, Zip Code
              </p>
              <p
                style={{
                  color: "#D4AF37",
                }}
              >
                Phone: (123) 456-7890
              </p>
              <p
                style={{
                  color: "#D4AF37",
                }}
              >
                Email: info@eventmanagement.com
              </p>
            </div>{" "}
          </div>
          <div className="ck">
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                {" "}
                <li>
                  <a
                    href="/home"
                    style={{
                      color: "grey",
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    style={{
                      color: "grey",
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    style={{
                      color: "grey",
                    }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    style={{
                      color: "grey",
                    }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-media">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com"
                    style={{
                      color: "grey",
                    }}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    style={{
                      color: "grey",
                    }}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    style={{
                      color: "grey",
                    }}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    style={{
                      color: "grey",
                    }}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="legal-info">
              <h3>Legal Information</h3>
              <ul>
                <li>
                  <a
                    href="/privacy"
                    style={{
                      color: "grey",
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    style={{
                      color: "grey",
                    }}
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    style={{
                      color: "grey",
                    }}
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {
            <div
              className="call-to-action"
              style={{
                color: "white",
                position: "relative",
                top: "10rem",
                height: "100px",
              }}
            >
              <h3
                style={{
                  position: "relative",
                  top: "1rem",

                  fontFamily: "inherit",
                  color: "#D4AF37",
                }}
              >
                Plan Your Next Event with Us!
              </h3>
              <button
                style={{
                  position: "relative",
                  top: "1.6rem",
                  backgroundColor: "red",
                }}
              >
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "lighter",
                  }}
                >
                  Get Started
                </a>
              </button>
            </div>
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
