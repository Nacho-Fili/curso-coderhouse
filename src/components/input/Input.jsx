import styles from "./input.module.scss";

export default function Input({type = "text", name, onChange, placeholder, value}) {
  return (
    <input
      value={value}
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder || name}
      onChange={onChange}
    />
  );
}
