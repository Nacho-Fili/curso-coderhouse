import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import itemsService from "../../services/itemsService";
import IsLoading from "../loading/IsLoading";
import Oops from "../screens/Oops";
import styles from "./item.module.scss";
import ItemList from "./ItemList";

export default function ItemListContainer({searchService}) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState("");
  const {id, query} = useParams();

  const getFetchFucntion = () => {
    if (id) return () => itemsService.fetchByCategory(id);
    if (query)
      return () => {
        const itemsSearched = searchService.searchByString(query);
        return itemsService.fetchByIds(itemsSearched);
      };
    else return () => itemsService.fetchAll();
  };

  useEffect(() => {
    setStatus("pending");
    const fetchFunction = getFetchFucntion();

    fetchFunction()
      .then((fetchedItems) => {
        setItems(fetchedItems);
        setStatus("success");
      })
      .catch((err) => {
        setError("Ha ocurrido un error inesperado");
        throw err;
      });
  }, [id, query]);

  if (status === "pending")
    return (
      <div className={styles.loaderContainer}>
        <IsLoading />
      </div>
    );

  return error ? (
    <Oops message={error} />
  ) : (
    <div className={styles.itemListContainer}>
      <ItemList items={items} />
    </div>
  );
}
