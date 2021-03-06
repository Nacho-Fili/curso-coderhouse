import styles from "./item.module.scss";
import {Link} from "react-router-dom";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import {useContext} from "react";
import CartContext from "../../context/CartContext";

export default function Item({item}) {
  const {addItem} = useContext(CartContext);

  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.image} alt={item.title} />
      </div>
      <div className={styles.detailContainer}>
        <Link className={styles.link} to={`/category/${item.categoryId}`}>
          <h3 className={`${styles.title} ${styles.category} clickable`}>{item.category.name}</h3>
        </Link>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>{`US$${item.price}`}</p>
        <Link to={`/item/${item.id}`} className={styles.link + " clickable"}>
          <p>view this product</p>
        </Link>
        <PrimaryButton className={styles.addButton} onClick={() => addItem(item, 1)}>
          Add to cart
        </PrimaryButton>
      </div>
    </div>
  );
}
