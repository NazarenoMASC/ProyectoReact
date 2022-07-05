import "./ItemDetail.css";

function ItemDetail(props) {
  return (
    <>
      <h3>{props.titulo}</h3>
      <p>{props.precio}</p>
    </>
  );
}

export default ItemDetail;
