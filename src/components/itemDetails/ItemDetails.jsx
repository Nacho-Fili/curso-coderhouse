import React, {useContext, useState} from "react";
import styles from "./itemDetails.module.scss";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import CartContext from "../../context/CartContext";

export default function ItemDetails({item}) {
  const [showCounter, setShowCounter] = useState(true);

  const {addItem} = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setShowCounter(false);
    addItem(item, quantity);
  };

  return (
    <div className={styles.mainContainer}>
      <img src={item.image} alt={item.title} />
      <div className={styles.container}>
        <h2>{item.title}</h2>
        <h3>
          <strong>{`US$${item.price}`}</strong>
        </h3>
        <p className={styles.description}>{item.description}</p>
        {showCounter && <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />}
        {!showCounter && (
          <Link to="/cart">
            <button className={"clickable " + styles.secondaryButton}>Finalizar compra</button>
          </Link>
        )}
      </div>
    </div>
  );
}
