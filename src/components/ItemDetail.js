import "./ItemDetail.css";
import React from "react";

function ItemDetail(props) {
  return (
    <div>
      <h3>{props.cards.name}</h3>
      <p>{props.cards.categoria}</p>
      <p>{props.cards.precio}</p>
    </div>
  );
}

export default ItemDetail;
