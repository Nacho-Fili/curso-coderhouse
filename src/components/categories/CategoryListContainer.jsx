import {useState, useEffect} from "react";
import itemsService from "../../services/itemsService";
import CategoryList from "./CategoryList";

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
        throw err;
      });
  }, []);

  if (status === "pending") return <p> cargando... </p>;

  return <CategoryList categories={categories} />;
}
