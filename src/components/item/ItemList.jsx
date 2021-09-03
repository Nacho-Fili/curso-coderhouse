import Item from "./Item";
import styles from "./item.module.scss";

export default function ItemList({items}) {
  return (
    <div className={styles.itemList}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
