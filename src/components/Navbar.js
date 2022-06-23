import "./Navbar.css";
import carrito from "../assets/carrito.png";
function Navbar() {
  return (
    <header>
      <div className="Navbar">
        <div>
          <span className="nav-logo">Burguers</span>
          <img className="cart-logo" src={carrito}></img>
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
