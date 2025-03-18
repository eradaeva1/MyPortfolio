import "./Projects.scss";
// import snaps from "/images/snaps.jpg";
// import warehouse from "/images/warehouse.jpg";
// import lensTracker from "/images/lenstracker1.png";

import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaServer,
} from "react-icons/fa";
import {
  SiMysql,
  SiSass,
  SiExpress,
  SiJavascript,
  SiAxios,
  SiGithub,
} from "react-icons/si";

const projects = [
  {
    name: "LensTracker - AI-Powered Contact Lens Manager",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "SCSS", icon: <SiSass /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    description: `
      LensTracker is an AI-powered contact lens manager that ensures users never forget 
      to replace their lenses. Features include:  

      - Smart AI Reminders – Notifications before lenses expire.  
      - Personalized Alerts – Custom notifications for different lens types.  
      - AI Chatbot Assistance – Instant help for lens care.  
      - User-Friendly Dashboard – Easily track lens usage.  
      - Cloud Storage – Securely stores preferences and schedules.  
      - Enhanced Security – JWT authentication ensures data protection.  
    `,
    image:
      "https://lh3.googleusercontent.com/d/1a4bNrjk0WH_LuHUqYsfYcODszJOQCLdD=w1000",
    codeLink: "https://github.com/eradaeva1/lenstracker-elizaveta-radaeva",
  },
  {
    name: "InStock - Inventory Management System",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    description: `
      InStock is a scalable inventory management system designed for a Fortune 500 client.  
      Key features include:  

      - Real-time Stock Updates – Prevents inventory mismanagement.  
      - Barcode Scanning – Quick and easy product tracking.  
      - User Roles & Permissions – Ensures access control and security.  
      - Data Analytics Dashboard – Provides insights into inventory trends.  
    `,
    image:
      "https://lh3.googleusercontent.com/d/1Z1JFv9uwoXjEzm6oubR5JrAoBA5EfPEx=w1000",
  },
  {
    name: "Snaps - Photo Sharing Application",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "SASS", icon: <SiSass /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
    description: `
      Snaps is a modern photo-sharing application prototype that allows users to browse, 
      filter, and interact with images in a dynamic and engaging way.

      - Dynamic Photo Rendering – Fetches images from a custom API.  
      - Tag-Based Filtering – Users can filter images by categories.  
      - Commenting System – Enables user interactions on photos.  
      - RESTful API – Designed with Express.js and Axios for smooth data fetching.  
      - Responsive UI – Built with React, SCSS, and Flexbox for seamless display.  
    `,
    image:
      "https://lh3.googleusercontent.com/d/1tBO4H2nUqUSnxy96I0LZjHHslp2Ccg2-=w1000",
    codeLink: "https://github.com/eradaeva1/elizaveta-radaeva-snaps",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" className="work-section">
      <div className="projects__container">
        <h2 className="projects__title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="image-overlay"></div>
              <img
                src={project.image}
                alt={project.name}
                className="projects__img"
              />
              <div className="overlay">
                <div className="content">
                  <h3 className="projects__name">{project.name}</h3>
                  <p className="projects__tech">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-item">
                        {t.icon} {t.name}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <p className="project-name">{project.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="modal-image"
            />
            <div className="modal-details">
              <h2 className="modal-title">{selectedProject.name}</h2>
              <p className="modal-description">
                {selectedProject.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
