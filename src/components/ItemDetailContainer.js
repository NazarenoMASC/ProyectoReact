import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [fetchItem, setInfo] = useState([]);
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
  return (
    <>
      {isLoading === true && <Loading />}
      <ItemDetail cards={fetchItem}></ItemDetail>
    </>
  );
}

export default ItemDetailContainer;
