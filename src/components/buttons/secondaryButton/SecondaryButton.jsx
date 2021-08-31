import styles from "./button.module.scss";

export default function PrimaryButton({children, className, onClick}) {
  return (
    <button className={styles.button + " " + className + " clickable"} onClick={onClick}>
      {children}
    </button>
  );
}
