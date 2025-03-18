import './Projects.scss';
import snaps from "../../assets/images/snaps.jpg";
import warehouse from "../../assets/images/warehouse.jpg";
import lensTracker from "../../assets/images/lenstracker1.png"



function Projects() {
return (
    <>
<section className="work-section">
  <div className="projects__container">
    <h2 className="projects__title">Featured Projects</h2>
    <div className="projects-grid">
    <div className="project-card">
        <img className="projects__img"
          src={lensTracker}
          alt="modern web application dashboard interface design, minimal"
        />
        <div className="overlay">
          <div className="content">
            <h3 className="projects__name">LensTracker - Smart Contact Lens Manager with AI-Assistant</h3>
            <p className="projects__tech">React, JavaScript, MySQL, SCSS</p>
            <span className="project__view">View Project <i className="fa-solid fa-arrow-right ml-2"></i></span>
          </div>
        </div>
      </div>
      <div className="project-card">
        <img className="projects__img"
          src={warehouse}
          alt="modern web application dashboard interface design, minimal"
        />
        <div className="overlay">
          <div className="content">
            <h3 className="projects__name">InStock - Inventory Management System</h3>
            <p className="projects__tech">React, JavaScript, MySQL, Agile Development</p>
            <span className="project__view">View Project <i className="fa-solid fa-arrow-right ml-2"></i></span>
          </div>
        </div>
      </div>
      <div className="project-card">
        <img className="projects__img"
          src={snaps}
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