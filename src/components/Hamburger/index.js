import React from "react";
import "./hamburgerStyles.css";
import "../../app.css";

const Hamburger = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__exterior">
          <button className="nav__burger">
            <span className="line--1" />
            <span className="line--2" />
            <span className="line--3" />
            <div className="nav__burger__label">MENU</div>
          </button>
        </div>
        <div className="nav__interior">
          <ul className="nav__interior__items">
            <li className="nav__item">
              <a href="">
                <span className="nav__item--main type--a2 type--uppercase">
                  Import
                </span>
              </a>
              <div className="nav__item__description">
                <span>
                  <img src="img/icons-import.svg" alt="Import" />
                </span>
              </div>
            </li>
            <li className="nav__item">
              <a href="">
                <span className="nav__item--main type--a2 type--uppercase">
                  Make a PDF
                </span>
              </a>
            </li>
            <li className="nav__item">
              <a href="">
                <span className="nav__item--main type--a2 type--uppercase">
                  Print
                </span>
              </a>
            </li>
            <li className="nav__item">
              <a href="">
                <span className="nav__item--main type--a2 type--uppercase">
                  New report
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Hamburger;
