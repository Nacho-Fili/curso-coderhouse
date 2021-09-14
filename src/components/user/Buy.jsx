import styles from "./profile.module.scss";

export default function Buy({buy}) {
  const printDate = (date) => {
    const dateString = date.toDate ? String(date.toDate()) : String(date);
    const gmtIndex = dateString.search(/gmt/i);
    return dateString.substring(0, gmtIndex);
  };

  return (
    <div className={styles.buyContainer}>
      <p>
        <strong>{printDate(buy.date)}</strong>
      </p>
      <div className={styles.itemsContainer}>
        {buy.items.map((item) => (
          <>
            <div className={styles.imgContainer}>
              <img src={item.image} alt={item.title} />
            </div>
            <p key={item.id}>{item.title}</p>
          </>
        ))}
      </div>

      <strong>
        <p>US${buy.total}</p>
      </strong>
    </div>
  );
}
