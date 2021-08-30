import styles from "./input.module.scss";

export default function Input({type = "text", name, onChange, placeholder}) {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder || name}
      onChange={onChange}
    />
  );
}
