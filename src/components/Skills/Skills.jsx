import "./Skills.scss";

import React from "react";
import "./Skills.scss";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaSass,
  FaPython,
  FaTerminal,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiJson,
  SiJira,
  SiFigma,
  SiMiro,
  SiFirebase,
  SiTwilio,
  SiHeroku,
  SiNetlify,
  SiOpenai,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbSettingsCog, TbActivityHeartbeat } from "react-icons/tb";

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: "Experienced", icon: <FaReact /> },
      { name: "JavaScript", level: "Experienced", icon: <FaJs /> },
      { name: "Node.js", level: "Experienced", icon: <FaNodeJs /> },
      { name: "Express.js", level: "Experienced", icon: <SiExpress /> },
      { name: "Knex.js", level: "Experienced", icon: <FaDatabase /> }, // Using FaDatabase as a fallback
      { name: "Sass", level: "Experienced", icon: <FaSass /> },
      { name: "HTML", level: "Experienced", icon: <FaHtml5 /> },
      { name: "CSS", level: "Experienced", icon: <FaCss3Alt /> },
      { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
      { name: "JSON", level: "Experienced", icon: <SiJson /> },
      
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Git", level: "Experienced", icon: <FaGitAlt /> },
      { name: "Bash", level: "Intermediate", icon: <FaTerminal /> },
      { name: "Heroku", level: "Intermediate", icon: <SiHeroku /> },
      { name: "Netlify", level: "Intermediate", icon: <SiNetlify /> },
      { name: "OpenAI", level: "Intermediate", icon: <SiOpenai /> },
      { name: "Agile", level: "Experienced", icon: <TbSettingsCog /> },
      { name: "Jira", level: "Experienced", icon: <SiJira /> },
      { name: "Figma", level: "Experienced", icon: <SiFigma /> },
      { name: "Miro", level: "Intermediate", icon: <SiMiro /> },
      
    ],
  },
  {
    title: "In Progress",
    skills: [
      { name: "Python", level: "Basic", icon: <FaPython /> },
      { name: "AWS", level: "Intermediate", icon: <FaAws /> },
      { name: "Firebase", level: "Intermediate", icon: <SiFirebase /> },
      { name: "Twilio", level: "Intermediate", icon: <SiTwilio /> },
      { name: "React Native", level: "Basic", icon: <FaReact /> },
      { name: "JWT", level: "Experienced", icon: <SiJsonwebtokens /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-card">
              <h3 className="card-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    {/* <span className="skill-level">{skill.level}</span> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
