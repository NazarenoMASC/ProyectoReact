import { useCartContext } from "../context/CartContext";
import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Cart() {
  const { cart, totalPrice } = useCartContext();
  const order = {
    buyer: {
      name: "Nazareno",
      email: "nazareno@gmail.com",
      phone: "123123",
      address: "asdasd",
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      precio: product.precio,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };
  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

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
      <button onClick={handleClick}> Generar compra </button>
    </>
  );
}

export default Cart;
