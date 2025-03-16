import './Skills.scss';


function Skills() {

    const skillsData = [
        { id: 'frontend',
            icon: '',
            title: 'Frontend',
            description: 'React, JavaScript'
        },
        { id: 'backend',
            icon: '',
            title: 'Backend',
            description: 'Node.js, Express, REST Api'
        },
        {
            id: 'database',
            icon: 'fa-database',
            title: 'Database',
            description: ' MySQL '
          },
          {
            id: 'tools',
            icon: 'fa-wrench',
            title: 'Tools',
            description: 'Git, Docker, AWS'
          }
]
    return (
        <>
<section id="skills" className="skills-section">
    <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
            {skillsData.map(skill => (
                <div key={skill.id} className="skill-card">
                    <img className={skill.icon}/>
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-description">{skill.description}</p>
                </div>
            ))}
        </div>
    </div>
</section>
        </>
    )
};


export default Skills;