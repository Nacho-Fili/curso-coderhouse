import styles from "./button.module.scss";

export default function PrimaryButton({children, className}) {
  return <button className={styles.button + " " + className}>{children}</button>;
}
