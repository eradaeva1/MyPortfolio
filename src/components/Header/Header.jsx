import "./Header.scss";
import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <div className="container">
          <div className="flex">
            <h2 className="nav__title">Dev.Studio</h2>
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
