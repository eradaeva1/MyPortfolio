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
              Hey, I’m Elizaveta! 👋 </p>
              <p className="text"> I’m a Software Engineer with a deep passion for understanding people and creating solutions that make a real difference. My journey started in business administration and customer service, where I spent over nine years helping people, solving problems, and improving experiences. Whether managing operations in fast-paced environments or launching my own healthy pastry business, I learned the power of adaptability, precision, and truly listening to what people need.

Now, I bring that same human-centered approach into tech, designing clean, minimalistic UIs that not only look beautiful but feel effortless to use. I believe that great design and seamless functionality go hand in hand, and I love building products that make life easier in ways people don’t even realize.

Moving to Canada on my own at the age 17, pivoting my career into Tech, and starting a business from the ground up taught me to be resourceful, resilient, and fearless in the face of new challenges. I thrive in collaborative, fast-moving environments where I can keep learning, pushing boundaries, and building experiences that truly impact people’s lives.</p>
               {/* User-Centric Software Engineer with 9+ years of experience in business administration and customer service. </p>
              <p className="text">Entrepreneurial mindset—founded a healthy pastry business, honing problem-solving, adaptability, and process optimization skills. </p>
              <p className="text">BrainStation Software Engineering Graduate, skilled in JavaScript, React.js, Node.js, and Express, building intuitive and scalable digital solutions. </p>
              <p className="text">Passionate about innovation, efficiency, and creating seamless user experiences through technology. Here to make people's lives easier. </p>
              <p className="text">Multilingual (English, Russian, Ukrainian) with a strong ability to collaborate in diverse environments. </p> */}
             
            </div>

            {/* Education Section */}
            <div id="education">
              <h3 className="subtitle">Education</h3>
              <div className="education-list">
              <div className="education-item">
                  <h4 className="degree">Software Engineering, Diploma</h4>
                  <p className="school">BrainStation</p>
                  <p className="year">2024 - 2025</p>
                </div>
              <div className="education-item">
                  <h4 className="degree">Machine Learning Software, Certificate</h4>
                  <p className="school">University of Toronto</p>
                  <p className="year">2025</p>
                </div>
                
                
                <div className="education-item">
                  <h4 className="degree">Bachelor of Business Administration, BBA</h4>
                  <p className="school">Niagara College</p>
                  <p className="year">2015 - 2019</p>
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