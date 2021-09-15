import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import itemsService from "../../services/itemsService";
import IsLoading from "../loading/IsLoading";
import ItemDetails from "./ItemDetails";
import Oops from "../screens/Oops";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState("");
  const {id} = useParams();

  useEffect(() => {
    itemsService
      .fetchProduct(id)
      .then((fetchedItem) => {
        console.log(fetchedItem);
        if (!fetchedItem) setError("There is nothing to see here. Item not found (404)");
        setItem(fetchedItem);
        setStatus("success");
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);

  if (status === "pending")
    return (
      <div
        style={{
          display: "flex",
          minHeight: "83vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IsLoading />
      </div>
    );

  return error ? <Oops message={error} /> : <ItemDetails item={item} />;
}
