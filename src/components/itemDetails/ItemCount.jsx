import {useState} from "react";
import styles from "./itemDetails.module.scss";
import SecondaryButton from "../buttons/secondaryButton/SecondaryButton";

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
      <SecondaryButton onClick={() => onAdd(counter)}>Add to cart</SecondaryButton>
    </div>
  );
}
