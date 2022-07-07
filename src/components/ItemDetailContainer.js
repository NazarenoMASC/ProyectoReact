import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

function ItemListContainer() {
  const [cardsFetch, setInfo] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("../data.json")
        .then((resp) => resp.json())
        .then((data) => setInfo(data.find((item) => item.id === "1")));
    }, 2000);
  }, []);
  return (
    <>
      <ItemDetail cards={cardsFetch}></ItemDetail>
    </>
  );
}

export default ItemListContainer;
