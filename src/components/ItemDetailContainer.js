import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [cardsFetch, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { iditem } = useParams();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch("../data.json")
        .then((resp) => resp.json())
        .then((data) => setInfo(data.find((item) => item.id === iditem)));
      setIsLoading(false);
    }, 1000);
  }, []);
  return isLoading ? (
    <h2>Cargando..</h2>
  ) : (
    <ItemDetail cards={cardsFetch}></ItemDetail>
  );
}

export default ItemDetailContainer;
