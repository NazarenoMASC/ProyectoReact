import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="cards container-cards">
      <img src={props.imagen}></img>
      <h3>{props.name}</h3>
      <p>Categoria: {props.categoria}</p>
      <p>Precio: {props.precio}$</p>
      <Link to={`/item/${props.id}`}>Ver mas detalles</Link>
    </div>
  );
}

export default Card;
