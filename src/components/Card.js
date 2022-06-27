import "./Card.css";
import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.producto}</h2>
      <p>{props.descripcion}</p>
      <p>{props.stock}</p>
    </div>
  );
}

export default Card;
