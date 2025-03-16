import "./Header.scss";
import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="container">
          <div className="nav__left">
          <span className="nav__title">Dev.Studio</span>
          </div>
          <div className="nav__list">
            <a href="" className="nav__item">
              Work
            </a>
            <a href="" className="nav__item">About</a>
            <a href="" className="nav__item">Services</a>
            <a href="" className="nav__item">Contact</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
