import styles from "./item.module.scss";
import {Link} from "react-router-dom";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

export default function Item({item}) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.image} alt={item.title} />
      </div>
      <div className={styles.detailContainer}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>{`US$${item.price}`}</p>
        <Link to={`/item/${item.id}`} className={styles.link + " clickable"}>
          <p>view this product</p>
        </Link>
        <PrimaryButton className={styles.addButton}>Add to cart</PrimaryButton>
      </div>
    </div>
  );
}
