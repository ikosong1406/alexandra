import React from "react";
import "../styles/Home.css";
import image from "../images/alexandra.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="homeMain">
      <div className="homeDiv1">
        <h3> Welcome to my portfolio</h3>
        <h1>
          I AM <span style={{ color: "#ff00a2" }}>ALEXANDRA IKOSONG</span>
        </h1>
        <h2>
          I'm a passionate and experienced full stack developer specializing in
          the MERN (MongoDB, Express, React, Node.js) tech stack. With a strong
          foundation in both front-end and back-end development, I excel at
          building fast, scalable, and user-friendly applications that meet the
          needs of modern businesses and users.
        </h2>
        <div className="homeDiv11">
          <a
            className="homeDiv11Link"
            href="../../public/alexandra.pdf"
            download
          >
            <h3>Download CV</h3>
          </a>
          <Link className="homeDiv11Link1" to="/portfolio">
            <h3>My Works</h3>
          </Link>
        </div>
        <div className="homeDiv12">
          <a
            href="https://github.com/ikosong1406"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-virtuous-ikosong-4533b6235"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icons" />
          </a>
          <a
            href="https://x.com/Alexandervirt14?t=OxDAu-iXEhHt21Z6sji-fg&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="icons" />
          </a>
        </div>
      </div>
      <div className="homeDiv2">
        <img src={image} alt="Alexandra Ikosong" />
      </div>
    </div>
  );
};

export default Home;
