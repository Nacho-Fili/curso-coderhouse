import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import itemsService from "../../services/itemsService";
import IsLoading from "../loading/IsLoading";
import styles from "./item.module.scss";
import ItemList from "./ItemList";

// TODO: Implementar la posibilidad de error
export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("pending");
  const {id} = useParams();

  const getFetchFucntion = (bool) =>
    bool ? itemsService.fetchByCategory : (id) => itemsService.fetchAll();

  useEffect(() => {
    setStatus("pending");
    const fetchFunction = getFetchFucntion(Boolean(id));

    fetchFunction(id)
      .then((fetchedItems) => {
        setItems(fetchedItems);
        setStatus("success");
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);

  if (status === "pending")
    return (
      <div className={styles.loaderContainer}>
        <IsLoading />
      </div>
    );

  return (
    <div className={styles.itemListContainer}>
      <ItemList items={items} />
    </div>
  );
}
