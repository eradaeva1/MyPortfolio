import './About.scss';
import myPhoto from "../../assets/images/myPhoto3.jpg"


import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Content */}
          <div className="about-content">
            <div id="about-me">
              <h2 className="title">About Me</h2>
              <p className="text">
                With over 5 years of experience in web development, I specialize
                in creating intuitive and performant web applications that solve
                real-world problems. I'm passionate about clean code, user
                experience, and staying current with emerging technologies.
              </p>
            </div>

            {/* Education Section */}
            <div id="education">
              <h3 className="subtitle">Education</h3>
              <div className="education-list">
                <div className="education-item">
                  <h4 className="degree">Master of Computer Science</h4>
                  <p className="school">Stanford University</p>
                  <p className="year">2020 - 2022</p>
                </div>
                <div className="education-item">
                  <h4 className="degree">Bachelor of Software Engineering</h4>
                  <p className="school">MIT</p>
                  <p className="year">2016 - 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="about-image">
            <div className="image-overlay"></div>
            <img
              src={myPhoto}
              alt="Professional headshot"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import { useEffect, useState } from 'react';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const particlesInit = async (engine) => {
//     await loadFull(engine);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById('about-section');
//       const offset = section.getBoundingClientRect().top;
//       const screenHeight = window.innerHeight;

//       if (offset < screenHeight * 0.8) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section id="about-section" className={`about-container ${isVisible ? 'about-visible' : ''}`}>
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: {
//             color: 'transparent',
//           },
//           particles: {
//             number: { value: 80 },
//             size: { value: 3 },
//             move: { speed: 1 },
//             opacity: { value: 0.3 },
//             color: { value: '#d946ef' },
//             line_linked: {
//               enable: true,
//               color: '#d946ef',
//               opacity: 0.2,
//             },
//           },
//         }}
//       />
//       <div className="about-content">
//         <div className="about-image-frame">
//           <div className="about-image-overlay"></div>
//           <img className="about-photo" src={myPhoto} alt="Professional developer portrait" />
//         </div>
//         <div className="about-text-content">
//           <h2 className="about-title">About Me</h2>
//           <p className="about-description">
//             I’m a Software Engineer with a passion for building scalable and user-focused applications. With a Software Engineering Diploma from BrainStation and education from the University of Toronto, I specialize in React, Node.js, MySQL, and SCSS.
//           </p>
//           <div className="about-skills-grid">
//             <div className="about-skill-card">
//               <i className="fa-solid fa-code about-icon"></i>
//               <h3 className="about-skill-title">Experience</h3>
//               <p className="about-skill-text">Software Engineering</p>
//             </div>
//             <div className="about-skill-card">
//               <i className="fa-solid fa-database about-icon"></i>
//               <h3 className="about-skill-title">Education</h3>
//               <p className="about-skill-text">BrainStation, University of Toronto</p>
//             </div>
//           </div>
//           <a href="#contact" className="about-cta">
//             Let's work together <i className="fa-solid fa-arrow-right ml-2"></i>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;