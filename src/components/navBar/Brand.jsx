import styles from "./navBar.module.scss";

export default function Brand() {
  return (
    <div className={styles.brandContainer}>
      <img
        src="https://dl.dropboxusercontent.com/s/pntkkviltc2658a/tryh4rd.png?dl=0"
        alt="Brand logo"
      />
    </div>
  );
}
