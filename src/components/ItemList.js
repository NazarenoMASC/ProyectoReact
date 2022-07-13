import Card from "./Card";

function ItemList(props) {
  return (
    <div className="container-cards">
      {props.cards.map((card) => (
        <Card
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
