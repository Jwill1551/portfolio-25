import React from "react";
import styles from "./header-component--style.css";

const Header = () => {
  return (
    <header id="site-header" className="container-fluid">
      <nav id="nav-menu" className="row w-100">
        <div className="col-3 header-title">
          <span>Fullstack Developer</span>
        </div>
        <ul className="col-7 nav-item_list">
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#socials">Socials</a>
          </li>
        </ul>
      </nav>
    </header>
  );

  header_script = () => {
    // Variables
    let navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(function (e) {
      e.addEventListener("click", function () {
        navItems.forEach(function (j) {
          j.classList.remove("active");
        });
        e.classList.add("active");
      });
    });
  };

  header_script();
};

export default Header;
