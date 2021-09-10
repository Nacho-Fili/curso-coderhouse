import React, {useState, useContext} from "react";
import Form from "./Form";
import styles from "./checkout.module.scss";
import {Redirect} from "react-router";
import CartContext from "../../context/CartContext";
import UserContext from "../../context/UserContext";

export default function Checkout() {
  const [successBuy, setSuccessBuy] = useState(false);
  const {items} = useContext(CartContext);
  const {userLogged} = useContext(UserContext);

  if (!userLogged) return <Redirect to="/login/checkout" />;

  return items.length || successBuy ? (
    <div className={styles.formContainer}>
      <Form onSuccessBuy={() => setSuccessBuy(true)} />
    </div>
  ) : (
    <Redirect to="/cart" />
  );
}
