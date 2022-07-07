import "./ItemDetail.css";
import React from "react";

function ItemDetail(props) {
  return (
    <div className="card-detail">
      <h3>{props.cards.name}</h3>
      <p>Categoria: {props.cards.categoria}</p>
      <p>Precio: {props.cards.precio}$</p>
    </div>
  );
}

export default ItemDetail;
