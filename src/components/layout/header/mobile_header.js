import React, { useState } from "react";
import "./mobile_header-component.css";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="mobile-header is-hidden-tablet">
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        <span className="menu-icon"></span>
      </button>

      <nav className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a
              href="#hero"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
