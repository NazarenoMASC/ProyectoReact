import { useCartContext } from "../context/CartContext";
import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

function Cart() {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/"> Hacer las compras</Link>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
    </>
  );
}

export default Cart;
