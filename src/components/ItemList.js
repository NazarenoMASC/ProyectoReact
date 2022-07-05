import "./ItemList.css";
import ItemListContainer from "./ItemListContainer";
import Contador from "./contador";

function ItemList() {
  return (
    <section>
      <div>
        <h2>Catalogo de productos</h2>
        <h3> Elegí tu producto </h3>
      </div>
      <div>
        <ItemListContainer />
      </div>
      <Contador />
    </section>
  );
}

export default ItemList;
