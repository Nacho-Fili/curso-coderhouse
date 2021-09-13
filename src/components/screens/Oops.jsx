import styles from "./oops.module.scss";

export default function Oops({message}) {
  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>{message}</p>
    </div>
  );
}
