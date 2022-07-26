import React from "react";
import { useCartContext } from "../context/CartContext";
import "./itemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="itemCart">
      <img src={product.imagen} alt={product.name} />
      <div>
        <p>Titulo:{product.name}</p>
        <p> Cantidad:{product.quantity}</p>
        <p>Precio: {product.precio}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
