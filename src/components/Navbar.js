import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget.js";

function Navbar() {
  return (
    <header>
      <div className="Navbar">
        <div>
          <NavLink to="/">
            {" "}
            <span className="nav-logo">Tienda</span>{" "}
          </NavLink>
          <CartWidget />
        </div>
        <div className="nav-items">
          <NavLink to="/">Todos los productos</NavLink>
          <NavLink to="/categoria/A">Categoria A</NavLink>
          <NavLink to="/categoria/B">Categoria B</NavLink>
          <NavLink to="/categoria/C">Categoria C</NavLink>
        </div>
        <div>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
