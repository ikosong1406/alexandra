import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../images/alxenix.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState("home");

  return (
    <div className="headerMain">
      <div className="headerDiv1">
        <img src={logo} />
        <h1>Alxenix</h1>
      </div>
      <div className="headerDiv2">
        <Link
          to="/"
          className={show == "home" ? "headerLinkActive" : "headerLink"}
          onClick={() => setShow("home")}
        >
          <h3>Home</h3>
        </Link>
        <Link
          to="/about"
          className={show == "about" ? "headerLinkActive" : "headerLink"}
          onClick={() => setShow("about")}
        >
          <h3>About</h3>
        </Link>
        <Link
          to="/portfolio"
          className={show == "portfolio" ? "headerLinkActive" : "headerLink"}
          onClick={() => setShow("portfolio")}
        >
          <h3>Portfolio</h3>
        </Link>
        <Link
          to="/contact"
          className={show == "contact" ? "headerLinkActive" : "headerLink"}
          onClick={() => setShow("contact")}
        >
          <h3>Contact</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
