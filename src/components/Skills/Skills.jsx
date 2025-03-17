import './Skills.scss';


import React from "react";
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaGitAlt, FaDocker, FaAws, FaMicrochip, FaCube } from "react-icons/fa";
import "./Skills.scss";

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: "95%", icon: <FaReact /> },
      { name: "Node.js", level: "92%", icon: <FaNodeJs /> },
      { name: "JavaScript", level: "98%", icon: <FaJs /> },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "MongoDB", level: "90%", icon: <FaDatabase /> },
      { name: "Git", level: "95%", icon: <FaGitAlt /> },
      { name: "Docker", level: "88%", icon: <FaDocker /> },
    ],
  },
  {
    title: "In Progress",
    skills: [
      { name: "AWS", level: "60%", icon: <FaAws /> },
      { name: "Machine Learning", level: "45%", icon: <FaMicrochip /> },
      { name: "Three.js", level: "30%", icon: <FaCube /> },
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
                    <span className="skill-level">{skill.level}</span>
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
