import "./ItemListContainer.css";
import Contador from "./contador";

function ItemListContainer() {
  return (
    <section>
      <Contador stock={20} />
      <h2> Acá iría mi ItemListContainer</h2>
    </section>
  );
}

export default ItemListContainer;
