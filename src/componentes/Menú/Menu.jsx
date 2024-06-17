import React, { useState } from "react";
import "./menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li className="nav-item">
            <a href="#home" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#servicios" className="nav-links">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a href="#sobre-nosotros" className="nav-links">
              Sobre Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a href="#tienda" className="nav-links">
              Tienda
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
