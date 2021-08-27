import {useState} from "react";
import colors from "../../colors";
import styles from "./itemDetails.module.css";

export default function ItemCount({initial, stock, onAdd}) {
  const [counter, setCounter] = useState(initial);

  const style = {
    margin: "40px 0 20px 0",
    width: "100%",
    boxSizing: "border-box",
    height: "50%",
    maxHeight: 70,
    minHeight: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.base,
    borderRadius: 30,
    padding: "0 10px",
  };

  const increaseCounter = () => counter < stock && setCounter(counter + 1);

  const decreaseCounter = () => counter > 0 && setCounter(counter - 1);

  return (
    <div className={styles.countContainer}>
      <div style={style}>
        <button
          className={"clickable " + styles.controlButton}
          onClick={decreaseCounter}
          style={{backgroundColor: colors.background}}
        >
          -
        </button>
        {counter}
        <button
          className={"clickable " + styles.controlButton}
          onClick={increaseCounter}
          style={{backgroundColor: colors.background}}
        >
          +
        </button>
      </div>
      <button
        className={"clickable " + styles.secondaryButton}
        onClick={() => onAdd(counter)}
        style={{
          color: colors.lightFont,
          backgroundColor: "transparent",
          border: `2px solid ${colors.base}`,
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
