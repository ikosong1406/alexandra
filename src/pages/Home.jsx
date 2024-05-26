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
          <Link className="homeDiv11Link">
            <h3>Download CV</h3>
          </Link>
          <Link className="homeDiv11Link1" to="/portfolio">
            <h3>My Works</h3>
          </Link>
        </div>
        <div className="homeDiv12">
          <Link>
            <FaGithub className="icons" />
          </Link>
          <Link>
            <FaLinkedinIn className="icons" />
          </Link>
          <Link>
            <FaXTwitter className="icons" />
          </Link>
        </div>
      </div>
      <div className="homeDiv2">
        <img src={image} />
      </div>
    </div>
  );
};

export default Home;
