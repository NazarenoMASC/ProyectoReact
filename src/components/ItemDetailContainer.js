import "./ItemDetailContainer.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function ItemDetailContainer() {
  const [data, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { iditem } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", iditem);
    getDoc(queryDoc).then((res) => setInfo({ id: res.id, ...res.data() }));
  }, [iditem]);
  return (
    <>
      {isLoading === true && <Loading />}
      <ItemDetail cards={data}></ItemDetail>
    </>
  );
}

export default ItemDetailContainer;
