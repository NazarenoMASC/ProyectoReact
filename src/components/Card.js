import "./Card.css";
import React from "react";

function Card(props) {
  return (
    <div className="cards">
      <img src={props.imagen}></img>
      <h3>{props.producto}</h3>
      <p>{props.precio}</p>
      <button> Ver más detalles </button>
    </div>
  );
}

export default Card;
