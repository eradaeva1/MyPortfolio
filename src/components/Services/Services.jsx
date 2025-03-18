import { Code, Smartphone, Rocket } from "lucide-react"; // Import modern icons
import "./Services.scss"; // Import SCSS

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-section__container">
        <h2 className="services-section__title">Services</h2>
        <div className="services-section__grid">
          <div id="service-1" className="services-section__card">
            <Code size={40} className="services-section__icon" />
            <h3 className="services-section__heading">Web Development</h3>
            <p className="services-section__text">
              Custom websites and web applications built with modern technologies and best practices.
            </p>
          </div>
          <div id="service-2" className="services-section__card">
            <Smartphone size={40} className="services-section__icon" />
            <h3 className="services-section__heading">Responsive Design</h3>
            <p className="services-section__text">
              Mobile-first approach ensuring your website looks great on all devices.
            </p>
          </div>
          <div id="service-3" className="services-section__card">
            <Rocket size={40} className="services-section__icon" />
            <h3 className="services-section__heading">Performance</h3>
            <p className="services-section__text">
              Optimization for speed and performance to provide the best user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

