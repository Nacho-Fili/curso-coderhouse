import {useContext, useState} from "react";
import cartContext from "../../context/CartContext";
import {Link} from "react-router-dom";
import styles from "./cart.module.css";
import colors from "../../colors";
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
    <div className={styles.itemsContainer} style={{backgroundColor: colors.background}}>
      <div
        className={styles.itemRow}
        style={{color: colors.lightFont, borderBottom: `2px solid ${colors.base}`}}
      >
        <p className={styles.itemTitle}> Title </p>
        <p className={styles.itemQuantity}> Quantity </p>
        <p className={styles.finalPrice}> Total Price</p>
        <p className={styles.itemDelete}> Delete </p>
      </div>
      {items.map(({item, quantity}) => {
        return (
          <div
            className={styles.itemRow}
            style={{
              color: colors.lightFont,
              borderBottom: `2px solid ${colors.base}`,
            }}
            key={item.id}
          >
            <p className={styles.itemTitle} style={{color: colors.lightFont}}>
              {item.title}
            </p>
            <p className={styles.itemQuantity} style={{color: colors.lightFont}}>
              {quantity}{" "}
            </p>
            <p className={styles.finalPrice} style={{color: colors.lightFont}}>
              {`US$${item.price * quantity}`}{" "}
            </p>
            <p
              className={"clickable " + styles.itemDelete}
              style={{color: colors.lightFont}}
              onClick={() => removeItem(item.id)}
            >
              {" "}
              X{" "}
            </p>
          </div>
        );
      })}

      <div className={styles.itemRow}>
        <p
          className={styles.totalPrice}
          style={{
            color: colors.lightFont,
            borderBottom: `2px solid ${colors.base}`,
            borderLeft: `2px solid ${colors.base}`,
            borderRight: `2px solid ${colors.base}`,
          }}
        >
          <strong>{`US$${finalPrice.toFixed(2)}`}</strong>
        </p>
      </div>
      <Form onSuccessBuy={() => setSuccessBuy(true)} />
    </div>
  );
}
