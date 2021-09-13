import {useState, useEffect} from "react";
import itemsService from "../../services/itemsService";
import CategoryList from "./CategoryList";
import styles from "./category.module.scss";

export default function CategoryListContainer() {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    itemsService
      .fetchCategories()
      .then((categories) => {
        setCategories(categories);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
        throw err;
      });
  }, []);

  if (status === "error") return <p>error</p>;

  return (
    <div className={styles.categoryListContainer}>
      {status === "pending" ? <p> cargando... </p> : <CategoryList categories={categories} />}
    </div>
  );
}
