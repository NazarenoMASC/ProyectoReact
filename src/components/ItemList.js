import "./ItemList.css";
import Card from "./Card";

function ItemList({ cards = [] }) {
  return (
    <div className="container-cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          id={card.id}
          categoria={card.categoria}
          imagen={card.imagen}
          precio={card.precio}
        ></Card>
      ))}
    </div>
  );
}

export default ItemList;
