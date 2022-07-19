import Card from "./Card";

function ItemList(props) {
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
}

export default ItemList;
