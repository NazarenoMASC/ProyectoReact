import "./Card.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Card(props) {
  const nombre = useContext(CartContext);
  console.log("Card:", nombre);
  return (
    <div className="cards container-cards">
      <img src={props.imagen}></img>
      <h3>nombre{props.name}</h3>
      <p>Categoria: {props.categoria}</p>
      <p>Precio: {props.precio}$</p>
      <Link to={`/item/${props.id}`}>Ver mas detalles</Link>
    </div>
  );
}

export default Card;
