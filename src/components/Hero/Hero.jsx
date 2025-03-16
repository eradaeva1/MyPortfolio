import './Hero.scss';



function Hero() {
    return (
        <>
          <section className="hero">
            <div className="hero__container">
              <div className="content">
                <h1 className="content__title">Elizaveta Radaeva. </h1>
                <p className="content__text">
                  Full-stack developer specializing in creating memorable and performant web applications. Crafting Digital Experiences
                </p>
                <button className="btn__view">View Projects</button>
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