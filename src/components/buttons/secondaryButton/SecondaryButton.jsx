import styles from "./button.module.scss";

export default function SecondaryButton({children, className, onClick, type = "submit"}) {
  return (
    <button
      type={type}
      className={styles.button + " " + (className || "") + " clickable"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
