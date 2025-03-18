import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero">
              <h3 className="footer-title">dev.studio</h3>
            </a>
            <p className="footer-description">
              Creating digital experiences that matter
            </p>
          </div>
          <div className="footer-socials">
            <a href="#" className="social-link">
              <img className="fa-brands fa-github"></img>
            </a>
            <a href="#" className="social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <img className="fa-brands fa-twitter"></img>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Dev.Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
