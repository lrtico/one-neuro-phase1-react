import React from "react";
import "./hamburgerStyles.css";
import "../../app.css";

const handleShowMenu = () => {
  console.log("Make menu go now!");
  document.getElementsByTagName("body")[0].classList.toggle("menu-open");

  document.querySelector(".nav__burger").classList.toggle("is-open");

  const items = document.querySelectorAll(".nav__interior__items .nav__item");

  // get vendor transition property
  const docElemStyle = document.documentElement.style;
  const transitionProp =
    typeof docElemStyle.transition === "string"
      ? "transition"
      : "WebkitTransition";

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    // stagger transition with transitionDelay
    item.style[transitionProp + "Delay"] = i * 50 + "ms";
    item.classList.toggle("is-moved");
  }
};

const Hamburger = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__exterior">
          <button className="nav__burger" onClick={handleShowMenu}>
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
