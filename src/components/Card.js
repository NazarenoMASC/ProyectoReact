import "./Card.css";
import React from "react";
import ItemDetail from "./ItemDetail";

function Card(props) {
  return (
    <div className="cards">
      <img src={props.imagen}></img>
      <h3>{props.producto}</h3>
      <p>{props.precio}</p>
      <button onClick={<ItemDetail />}> Ver más detalles </button>
    </div>
  );
}

export default Card;
