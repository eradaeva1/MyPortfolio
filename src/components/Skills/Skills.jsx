import './Skills.scss';


import React from "react";
import "./Skills.scss";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaSass,
    FaAws,
    FaDocker,
  } from "react-icons/fa";
  import {
    SiTypescript,
    SiExpress,
    SiNextdotjs,
    SiKnex,
    SiTailwindcss,
    SiFastapi,
    SiPostgresql,
    SiMysql,
    SiJson,
    SiNginx
  } from "react-icons/si";
  import "./Skills.scss";
  
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: "Experienced", icon: <FaHtml5 /> },
        { name: "CSS", level: "Experienced", icon: <FaCss3Alt /> },
        { name: "JavaScript", level: "Experienced", icon: <FaJs /> },
        { name: "TypeScript", level: "Intermediate", icon: <SiTypescript /> },
        { name: "React.js", level: "Experienced", icon: <FaReact /> },
        { name: "Node.js", level: "Experienced", icon: <FaNodeJs /> },
        { name: "Express.js", level: "Experienced", icon: <SiExpress /> },
        { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs /> },
        { name: "Knex.js", level: "Experienced", icon: <SiKnex /> },
        { name: "Sass", level: "Experienced", icon: <FaSass /> },
        { name: "TailwindCSS", level: "Intermediate", icon: <SiTailwindcss /> },
        { name: "FastAPI", level: "Intermediate", icon: <SiFastapi /> },
        { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql /> },
        { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
        { name: "JSON", level: "Experienced", icon: <SiJson /> },
        { name: "Nginx", level: "Basic", icon: <SiNginx /> },
        { name: "AWS", level: "Intermediate", icon: <FaAws /> },
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
