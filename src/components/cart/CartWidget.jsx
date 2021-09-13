import cartContext from "../../context/CartContext";
import {useContext, useState} from "react";
import {BiCartAlt} from "react-icons/bi";
import CartModal from "./CartModal";
import styles from "./cart.module.scss";

export default function CartWidget() {
  const {finalQuantity} = useContext(cartContext);
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      style={{display: "flex", alignItems: "center"}}
      onClick={() => finalQuantity > 0 && setShowContent(!showContent)}
      className="clickable"
    >
      <BiCartAlt size={25} style={{margin: "18px 0"}} />

      {!!finalQuantity && (
        <div className={styles.quantityContainer}>
          <p className={styles.quantity}>{finalQuantity}</p>
        </div>
      )}
      <CartModal show={showContent} />
    </div>
  );
}
