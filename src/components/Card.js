import "./Card.css";
import React from "react";

function Card(props) {
  return (
    <div className="cards container-cards">
      <img src={props.imagen}></img>
      <h3>{props.name}</h3>
      <p>{props.id}</p>
      <p>{props.categoria}</p>
      <p>{props.precio}</p>
    </div>
  );
}

export default Card;
