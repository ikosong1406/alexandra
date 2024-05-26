import React from "react";
import "../styles/About.css";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const About = () => {
  return (
    <div className="aboutMain">
      <div className="aboutDiv1">
        <h1>
          A little bit about <span style={{ color: "#ff00a2" }}>me</span>
        </h1>
        <h2>As a MERN full stack developer, I've honed my skills in:</h2>
        <ul>
          <li>
            <h3>
              Crafting responsive and interactive front-end experiences with
              React and React Native
            </h3>
          </li>
          <li>
            <h3>
              Building robust and efficient back-end APIs with Node.js, Express,
              and MongoDB
            </h3>
          </li>
          <li>
            <h3>
              Designing and implementing databases for optimal performance and
              data modeling
            </h3>
          </li>
          <li>
            <h3>
              Deploying and managing applications on cloud platforms like AWS
              and Google Cloud
            </h3>
          </li>
        </ul>
        <h2>
          In this portfolio, you'll find a selection of my projects that
          showcase my expertise in MERN development. From e-commerce platforms
          to social media apps, I've built a wide range of applications that
          demonstrate my ability to tackle complex problems and deliver
          high-quality solutions.
        </h2>
      </div>
      <div className="stageCube">
        <div className="cubespinner">
          <div className="face1">
            <FaNodeJs />
          </div>
          <div className="face2">
            <SiExpress />
          </div>
          <div className="face3">
            <FaCss3 />
          </div>
          <div className="face4">
            <FaReact />
          </div>
          <div className="face5">
            <FaJsSquare />
          </div>
          <div className="face6">
            <DiMongodb />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
