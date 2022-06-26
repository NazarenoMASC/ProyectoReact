import "./CartWidget.css";
import carrito from "../assets/carrito.png";

function CartWidget() {
  return <img className="cart-logo" src={carrito}></img>;
}

export default CartWidget;
