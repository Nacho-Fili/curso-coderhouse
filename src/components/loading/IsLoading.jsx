import styles from "./loadingAnimation.module.scss";

export default function IsLoading() {
  return (
    <div className={styles.sppinnerContainer}>
      <div className={styles.spinner + " " + styles.loading} />
    </div>
  );
}
