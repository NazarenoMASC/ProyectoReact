import "./ItemListContainer.css";
import Contador from "./contador";
import ItemList from "./ItemList";

function ItemListContainer() {
  return (
    <section>
      <div>
        <h2>Catalogo de productos</h2>
        <h3> Elegí tu producto </h3>
      </div>
      <div>
        <ItemList />
      </div>
      <Contador />
    </section>
  );
}

export default ItemListContainer;
