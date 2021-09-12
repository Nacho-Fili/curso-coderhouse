import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import itemsService from "../../services/itemsService";
import IsLoading from "../loading/IsLoading";
import styles from "./item.module.scss";
import ItemList from "./ItemList";

// TODO: Implementar la posibilidad de error
export default function ItemListContainer({searchService}) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("pending");
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
        throw err;
      });
  }, [id, query]);

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
