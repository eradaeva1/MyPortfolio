import './Projects.scss';



function Projects() {
return (
    <>
<section className="work-section">
  <div className="projects__container">
    <h2 className="projects__title">Featured Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <img className="projects__img"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/113f5b275a-022f485bfe9d148627a6.png"
          alt="modern web application dashboard interface design, minimal"
        />
        <div className="overlay">
          <div className="content">
            <h3 className="projects__name">Analytics Dashboard</h3>
            <p className="projects__tech">React, TypeScript, Tailwind CSS</p>
            <span className="project__view">View Project <i className="fa-solid fa-arrow-right ml-2"></i></span>
          </div>
        </div>
      </div>
      <div className="project-card">
        <img className="projects__img"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b6922c6df5-6a334f1e25f3a796ba14.png"
          alt="e-commerce website design, minimal and modern"
        />
        <div className="overlay">
          <div className="content">
            <h3 className="projects__name">E-Commerce Platform</h3>
            <p className="projects__tech">Next.js, Node.js, MongoDB</p>
            <span className="project__view">View Project <i className="fa-solid fa-arrow-right ml-2"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
)
};

export default Projects;