import './About.scss';
import myPhoto from "../../assets/images/myPhoto.jpg"


function About() {
    return (
        <>
          <section id="about" className="about-section py-24">
            <div className="about-section__container mx-auto px-6">
              <div className="about-section__grid md:grid-cols-2 gap-16 items-center">
                <div className="about-section__image-container relative">
                  <img
                    className="about-section__image w-full h-[600px] object-cover rounded-xl"
                    src={myPhoto}
                    alt="professional developer portrait in modern office, dramatic lighting"
                  />
                </div>
                <div className="about-section__content">
                  <h2 className="about-section__title text-4xl font-bold text-gray-900 mb-6">
                    About Me
                  </h2>
                  <p className="about-section__text text-gray-600 mb-6">
                    With over 5 years of experience in web development, I specialize in creating beautiful, functional, and user-friendly websites that deliver results.
                  </p>
                  <div className="about-section__skills-grid grid grid-cols-2 gap-6 mb-8">
                    <div className="about-section__skill p-6 bg-gray-50 rounded-xl">
                      <img className="fa-solid fa-code text-2xl text-fuchsia-600 mb-4"></img>
                      <h3 className="about-section__skill-title text-xl font-bold text-gray-900 mb-2">
                        Front-end
                      </h3>
                      <p className="about-section__skill-text text-gray-600">
                        React, Vue, Angular
                      </p>
                    </div>
                    <div className="about-section__skill p-6 bg-gray-50 rounded-xl">
                      <img className="fa-solid fa-database text-2xl text-fuchsia-600 mb-4"></img>
                      <h3 className="about-section__skill-title text-xl font-bold text-gray-900 mb-2">
                        Back-end
                      </h3>
                      <p className="about-section__skill-text text-gray-600">
                        Node.js, Python, PHP
                      </p>
                    </div>
                  </div>
                  <a href="#contact" className="about-section__cta inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700">
                    Let's work together <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }

export default About;