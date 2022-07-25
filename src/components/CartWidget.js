import "./CartWidget.css";
import React, { useContext } from "react";
import carrito from "../assets/carrito.png";

function CartWidget() {
  return <img className="cart-logo" src={carrito}></img>;
}

export default CartWidget;
