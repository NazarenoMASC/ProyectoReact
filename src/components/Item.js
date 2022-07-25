import "./styles/Card.css";
import React from "react";

function Item(info) {
  return (
    <div className="cards container-cards film">
      <img src={info.imagen} alt={info.name}></img>
      <h3>{info.name}</h3>
      <p>Categoria: {info.categoria}</p>
      <p>Precio: {info.precio}$</p>

      <button className="buttonAccent mb-3">Ver producto</button>
    </div>
  );
}

export default Item;
