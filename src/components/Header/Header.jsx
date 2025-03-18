import "./Header.scss";
import React from "react";

function Header() {
  return (
    <>
      <header id="header" className="header">
        <nav className="nav">
          <div className="container">
            <div className="nav__left">
              <a href="header">
                <span className="nav__title">dev.studio</span>
              </a>
            </div>
            <div className="nav__list">
              <a href="#work" className="nav__item">
                Work
              </a>
              <a href="#about" className="nav__item">
                About
              </a>
              <a href="#services" className="nav__item">
                Services
              </a>
              <a href="#contact" className="nav__item">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
