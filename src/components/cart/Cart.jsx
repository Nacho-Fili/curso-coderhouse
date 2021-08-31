import {useContext, useState} from "react";
import cartContext from "../../context/CartContext";
import {Link} from "react-router-dom";
import styles from "./cart.module.scss";
import Form from "../form/form";

export default function Cart() {
  const {items, finalPrice, removeItem} = useContext(cartContext);

  const [successBuy, setSuccessBuy] = useState(false);

  if (items.length === 0 && !successBuy)
    return (
      <>
        <p>No hay items en tu carrito!</p>
        <Link to="/">Volver a inicio</Link>
      </>
    );

  return (
    <div className={styles.itemsContainer}>
      <div className={styles.itemRow}>
        <p className={styles.itemTitle}> Title </p>
        <p className={styles.itemQuantity}> Quantity </p>
        <p className={styles.finalPrice}> Total Price</p>
        <p className={styles.itemDelete}> Delete </p>
      </div>
      {items.map(({item, quantity}) => {
        return (
          <div className={styles.itemRow} key={item.id}>
            <p className={styles.itemTitle}>{item.title}</p>
            <p className={styles.itemQuantity}>{quantity} </p>
            <p className={styles.finalPrice}>{`US$${item.price * quantity}`} </p>
            <p className={"clickable " + styles.itemDelete} onClick={() => removeItem(item.id)}>
              X
            </p>
          </div>
        );
      })}

      <div className={styles.lastItemRow}>
        <p className={styles.totalPrice}>
          <strong>{`US$${finalPrice.toFixed(2)}`}</strong>
        </p>
      </div>
      <Form onSuccessBuy={() => setSuccessBuy(true)} />
    </div>
  );
}
