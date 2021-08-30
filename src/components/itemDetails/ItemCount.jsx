import {useState} from "react";
import styles from "./itemDetails.module.scss";

export default function ItemCount({initial, stock, onAdd}) {
  const [counter, setCounter] = useState(initial);

  const increaseCounter = () => counter < stock && setCounter(counter + 1);

  const decreaseCounter = () => counter > 0 && setCounter(counter - 1);

  return (
    <div className={styles.countContainer}>
      <div className={styles.controlsContainer}>
        <button className={"clickable " + styles.controlButton} onClick={decreaseCounter}>
          -
        </button>
        {counter}
        <button className={"clickable " + styles.controlButton} onClick={increaseCounter}>
          +
        </button>
      </div>
      <button className={"clickable " + styles.secondaryButton} onClick={() => onAdd(counter)}>
        Add to cart
      </button>
    </div>
  );
}
