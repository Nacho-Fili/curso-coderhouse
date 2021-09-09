import {useContext, useState} from "react";
import cartContext from "../../context/CartContext";
import {Link, useHistory} from "react-router-dom";
import styles from "./cart.module.scss";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

export default function Cart() {
  const {items, finalPrice, removeItem} = useContext(cartContext);

  const history = useHistory();

  const [successBuy] = useState(false);

  if (items.length === 0 && !successBuy)
    return (
      <>
        <p>No hay items en tu carrito!</p>
        <Link to="/">Volver a inicio</Link>
      </>
    );

  return (
    <div className={styles.itemsContainer}>
      <div className={styles.itemRow} style={{width: "70%"}}>
        <p className={styles.itemTitle}> Title </p>
        <p className={styles.itemQuantity}> Quantity </p>
        <p className={styles.finalPrice}> Total Price</p>
        <p className={styles.itemDelete}> Delete </p>
      </div>
      <div className={styles.itemsRowContainer}>
        {items.map((item) => {
          return (
            <div className={styles.itemRow} key={item.id}>
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemQuantity}>{item.quantity} </p>
              <p className={styles.finalPrice}>{`US$${item.price * item.quantity}`} </p>
              <p className={"clickable " + styles.itemDelete} onClick={() => removeItem(item.id)}>
                X
              </p>
            </div>
          );
        })}
        <div className={styles.priceCheckout}>
          <strong>{`US$${finalPrice.toFixed(2)}`}</strong>
          <PrimaryButton onClick={() => history.push("/checkout")}>Checkout</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
