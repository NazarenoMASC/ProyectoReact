import Card from "./Card";

function ItemList(props) {
<<<<<<< HEAD
  return (
    <div className="container-cards">
      {props.cards.map((card) => (
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
=======
  {
    props.cards.map((card) => {
      return (
        <div className="container-cards">
          <Card
            name={card.name}
            id={card.id}
            categoria={card.categoria}
            imagen={card.imagen}
            precio={card.precio}
          ></Card>
        </div>
      );
    });
  }
>>>>>>> 502131c6b8ecce101dc53499d81dec507b3c9702
}

export default ItemList;
