import "./Hero.scss";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero__container">
          <div className="content">
            <h2 className="content__me">Hi, I'm</h2>
            <h1 className="content__title">Elizaveta Radaeva.</h1>
            <h4 className="content__welcome">Welcome to my Studio:</h4>
            <p className="content__text">
              I am a full-stack developer specializing in creating memorable and
              performant web applications. I Craft Digital Experiences with
              Clean UI and Business Focus.
            </p>
            <div className="btns">
              <button
                className="btn__view"
                onClick={() => scrollToSection("work")}
              >
                View Projects
              </button>
              <button
                className="btn__view"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/67db08ad1f-d882638152f868b82423.png"
            alt="photography"
          />
        </div>
      </section>
    </>
  );
}
export default Hero;
