import "./ItemDetailContainer.css";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemListContainer() {
  const [info, setInfo] = useState([]);
  setTimeout(() => {
    fetch("data.json")
      .then((resp) => resp.json())
      .then((data) => setInfo(data));
  }, 1000);

  return (
    <div className="container-cards">
      <ItemDetail titulo={info.titulo} precio={info.precio} />
    </div>
  );
}

export default ItemListContainer;
