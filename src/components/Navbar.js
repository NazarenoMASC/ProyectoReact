import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <header>
      <div className="Navbar">
        <span className="nav-logo">Burguers</span>
        <div className="nav-items">
          <a href="#">Inicio</a>
          <a href="#">About us</a>
          <a href="#">Menú</a>
          <a href="#">Take away</a>
          <a href="#">Trabaja con nosotros</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
