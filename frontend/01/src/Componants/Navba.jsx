import React, { useState } from "react";
import { Link } from "react-scroll"; // Assuming you are using react-scroll for smooth scrolling
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div
        className="logo"
        style={{
          color: "#D4AF37",
        }}
      >
        IMPERIAL EVENTS
      </div>
      <div className={show ? "nav-links showmenu" : "nav-links"}>
        <div className="links">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              marginLeft: "35px",
            }}
          >
            Home
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              marginLeft: "35px",
            }}
          >
            Services
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              marginLeft: "35px",
            }}
          >
            About
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              marginLeft: "35px",
            }}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
