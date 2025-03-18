import "./About.scss";
import myPhoto from "../../assets/images/myPhoto3.jpg";
import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div id="about-me">
              <h2 className="title">About Me</h2>
              <p className="text">Hey, I’m Elizaveta! 👋 </p>
              <p className="text">
                {" "}
                I’m a Software Engineer with a deep passion for understanding
                people and creating solutions that make a real difference. My
                journey started in business administration and customer service,
                where I spent over nine years helping people, solving problems,
                and improving experiences. Whether managing operations in
                fast-paced environments or launching my own healthy pastry
                business, I learned the power of adaptability, precision, and
                truly listening to what people need. Now, I bring that same
                human-centered approach into tech, designing clean, minimalistic
                UIs that not only look beautiful but feel effortless to use. I
                believe that great design and seamless functionality go hand in
                hand, and I love building products that make life easier in ways
                people don’t even realize. Moving to Canada on my own at the age
                17, pivoting my career into Tech, and starting a business from
                the ground up taught me to be resourceful, resilient, and
                fearless in the face of new challenges. I thrive in
                collaborative, fast-moving environments where I can keep
                learning, pushing boundaries, and building experiences that
                truly impact people’s lives.
              </p>
            </div>

            <div id="education">
              <h3 className="subtitle">Education</h3>
              <div className="education-list">
                <div className="education-item">
                  <h4 className="degree">Software Engineering, Diploma</h4>
                  <p className="school">BrainStation</p>
                  <p className="year">2024 - 2025</p>
                </div>
                <div className="education-item">
                  <h4 className="degree">
                    Machine Learning Software, Certificate
                  </h4>
                  <p className="school">University of Toronto</p>
                  <p className="year">2025</p>
                </div>

                <div className="education-item">
                  <h4 className="degree">
                    Bachelor of Business Administration, BBA
                  </h4>
                  <p className="school">Niagara College</p>
                  <p className="year">2015 - 2019</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-overlay"></div>
            <img
              src={myPhoto}
              alt="Professional headshot"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
