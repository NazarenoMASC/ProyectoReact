import "./Card.css";
<<<<<<< HEAD
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Card(props) {
  const nombre = useContext(CartContext);
  console.log("Card:", nombre);
=======
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import ItemCount from "./ItemCount";
function Card(props) {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const onAdd = (qty) => {
    addToCart(props, qty);
  };
>>>>>>> 502131c6b8ecce101dc53499d81dec507b3c9702
  return (
    <div className="cards container-cards">
      <img src={props.imagen} alt={props.name}></img>
      <h3>{props.name}</h3>
      <p>Categoria: {props.categoria}</p>
      <p>Precio: {props.precio}$</p>
      <Link to={`/item/${props.id}`}>Ver mas detalles</Link>
      <ItemCount stock={props.stock} initial={1} onAdd={onAdd} />
    </div>
  );
}

export default Card;
