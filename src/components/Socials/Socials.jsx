import { Github, Linkedin, Mail } from "lucide-react";
import "./Socials.scss"; // Import SCSS for styling

function Socials() {
  const handleResumeDownload = () => {
    // Change this to the actual path of your resume file
    const resumePath = "../../public/resume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Create Something Amazing</h2>
        <p className="contact-description">
          Open to freelance projects and full-time opportunities. Let’s connect!
        </p>

        <div className="contact-buttons">
          <a href="mailto:radaeva.liza98@gmail.com" className="btn-primary">
            <Mail size={20} className="btn-icon" /> Get in Touch
          </a>

          <button onClick={handleResumeDownload} className="btn-secondary">
            Download CV
          </button>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/eradaeva1"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Github size={30} />
          </a>
          <a
            href="https://linkedin.com/in/elizaveta-radaeva/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Linkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Socials;
