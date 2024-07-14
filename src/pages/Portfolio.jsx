import React from "react";
import "../styles/Portfolio.css";
import zunim from "../images/zunim.png";
import flowzone from "../images/flowzone.png";
import trustleger from "../images/trustleger.png";
import hivehub from "../images/hivehub.mp4";
import mtc from "../images/mtc.png";
import rivet from "../images/rivet.mp4";
import routine from "../images/routine.mp4";

const projects = [
  {
    title: "Zunim",
    link: "https://zunim.vercel.app",
    description:
      "This is an ecommerce website that sales a variety of lifestyle products",
    technologies: ["React", "Node.js", "MongoDB"],
    role: "Full Stack Developer",
    image: zunim,
    type: "web",
  },
  {
    title: "Flowzone",
    link: "https://flowzonefrontend.vercel.app",
    description:
      "This is a networling platform where beginners in developmemt roles connect and collaborate on projects to build for their portfolio",
    technologies: ["Express", "React", "MongoDB", "Nodejs"],
    role: "Full Stack Developer",
    image: flowzone,
    type: "web",
  },
  {
    title: "Trustleger",
    link: "https://trustledger.vercel.app",
    description:
      "This is a web2.5 finance project that allow users buy and save their money in gold backed token",
    technologies: ["Express", "React", "MongoDB", "Nodejs"],
    role: "Full Stack Developer",
    image: trustleger,
    type: "web",
  },
  {
    title: "Hivehub",
    // link: "https://mobileappone.com",
    description:
      "This is a gammers networking mobile app where users can connect with each other and bet on 1vs1 gamming section on games of their",
    technologies: ["Express", "React Native", "MongoDB", "Nodejs"],
    role: "Full Stack Mobile Developer",
    video: hivehub,
    type: "mobile",
  },
  {
    title: "Mighty Teens Church",
    link: "https://mightyteenschurch.vercel.app",
    description:
      "This is the website for the renowned teens church in port harcourt ",
    technologies: ["Firebase", "React"],
    role: "Frontend Developer",
    image: mtc,
    type: "web",
  },
  {
    title: "Rivet",
    // link: "https://mobileapptwo.com",
    description:
      "This is a marketplace mobile app where sellers post their products and buyers interact with the post to buy the product",
    technologies: ["Express", "React Native", "MongoDB", "Nodejs"],
    role: "Full Stack Mobile Developer",
    video: rivet,
    type: "mobile",
  },
  {
    title: "Routine Master",
    // link: "https://mobileappthree.com",
    description:
      "This is a scheduling, timetable and task mobile app together aimed at helping the users keep track of their daily activities",
    technologies: ["Express", "React Native", "MongoDB", "Nodejs"],
    role: "Full Stack Mobile Developer",
    video: routine,
    type: "mobile",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolioMain">
      <div className="contactDiv1">
        <h1>
          Portfolio <span style={{ color: "#ff00a2" }}>Projects</span>
        </h1>
      </div>
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            {project.type === "mobile" ? (
              <video className="projectVideo" controls>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="projectImage"
              />
            )}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <p>
              <strong>Role:</strong> {project.role}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
