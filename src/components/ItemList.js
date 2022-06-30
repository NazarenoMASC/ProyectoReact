import "./ItemList.css";
import { useEffect, useState } from "react";
import Card from "./Card";

function ItemList() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("data.json")
        .then((resp) => resp.json())
        .then((data) => setInfo(data));
    }, 2000);
  }, []);
  return (
    <div className="container-cards">
      {info &&
        info.map((i) => (
          <Card producto={i.titulo} precio={i.precio} imagen={i.imagen} />
        ))}
    </div>
  );
}

export default ItemList;
