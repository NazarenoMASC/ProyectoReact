<<<<<<< HEAD
import "./CartWidget.css";
import React, { useContext } from "react";
import carrito from "../assets/carrito.png";
=======
import React, { useContext } from "react";
>>>>>>> 502131c6b8ecce101dc53499d81dec507b3c9702

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
      <div className="qty-display">{cart.length}</div>
    </div>
  );
};

export default CartWidget;
