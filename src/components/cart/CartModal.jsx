import {useContext} from "react";
import styles from "./cart.module.scss";
import cartContext from "../../context/CartContext";
import {Link} from "react-router-dom";

export default function CartModal({show}) {
  const {items, finalPrice} = useContext(cartContext);
  return show ? (
    <div className={styles.modalContainer}>
      {items.map((item) => (
        <div className={styles.modalRow} key={item.id}>
          <p className={styles.modalDetail}>
            {item.quantity}x {item.title}
          </p>
          <div className={styles.modalPrice}>US${item.price}</div>
        </div>
      ))}
      <div className={styles.modalLastRow}>
        <p className={styles.modalFinalPrice}>US${finalPrice.toFixed(2)}</p>
      </div>
      <Link to="/cart">Go to cart</Link>
    </div>
  ) : null;
}
