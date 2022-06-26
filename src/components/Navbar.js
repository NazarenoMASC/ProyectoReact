import "./Navbar.css";

import CartWidget from "./CartWidget.js";
function Navbar() {
  return (
    <header>
      <div className="Navbar">
        <div>
          <span className="nav-logo">Burguers</span>
          <CartWidget />
        </div>
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
