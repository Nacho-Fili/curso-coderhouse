import colors from "../../colors";
import styles from "./input.module.css";

export default function Input({inputObject, onChange}) {
  const {type, name, placeholder} = inputObject;

  const style = {
    color: colors.lightFont,
    borderColor: colors.base,
  };

  return (
    <input
      className={styles.input}
      style={style}
      type={type}
      name={name}
      placeholder={placeholder || name}
      onChange={onChange}
    />
  );
}
