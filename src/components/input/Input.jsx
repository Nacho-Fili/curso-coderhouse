export default function Input({type = "text", name, onChange, placeholder, value, className}) {
  return (
    <input
      value={value}
      className={className}
      type={type}
      name={name}
      placeholder={placeholder || name}
      onChange={onChange}
    />
  );
}
