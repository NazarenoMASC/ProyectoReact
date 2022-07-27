import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
function ItemListContainer() {
  const [data, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { catid } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");

    if (catid) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", catid)
      );
      getDocs(queryFilter).then((res) =>
        setInfo(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setInfo(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [catid]);

  return (
    <>
      {isLoading === true && <Loading />}
      <ItemList cards={data}></ItemList>
    </>
  );
}

export default ItemListContainer;
