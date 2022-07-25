import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
function ItemListContainer() {
  const [fetchItem, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { catid } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch("../data.json")
        .then((resp) => resp.json())
        .then((data) => {
          if (catid) {
            setInfo(data.filter((item) => item.categoria === catid));
          } else {
            setInfo(data);
          }
        })
        .finally(() => setIsLoading(false));
    }, 1000);
  }, [catid]);
  console.log(catid);
  return (
    <>
      {isLoading === true && <Loading />}
      <ItemList cards={fetchItem}></ItemList>
    </>
  );
}

export default ItemListContainer;
