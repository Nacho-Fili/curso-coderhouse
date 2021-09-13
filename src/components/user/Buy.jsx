import styles from "./profile.module.scss";

export default function Buy({buy}) {
  return (
    <div className={styles.buyContainer}>
      <p>{String(buy.date.toDate())}</p>
      {buy.items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
      <p>{buy.total}</p>
    </div>
  );
}
