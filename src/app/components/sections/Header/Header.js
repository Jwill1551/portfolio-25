"use client";
import React, { useEffect } from "react";
import styles from "./header-component--style.css";

const Header = () => {
  // CSS Before Effect For Navigation Menu Items
  useEffect(() => {
    //1. Query all menu item elements
    let navItems = document.querySelectorAll(".nav-item");

    //2. Add and remove the 'active' class accordingly to the button clicked on.
    navItems.forEach(function (e) {
      e.addEventListener("click", function () {
        // Remove 'active' from all elements.
        navItems.forEach(function (j) {
          j.classList.remove("active");
        });

        // Add new 'active' class to click on element.
        e.classList.add("active");
      });
    });
  }, []);

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
};

export default Header;
