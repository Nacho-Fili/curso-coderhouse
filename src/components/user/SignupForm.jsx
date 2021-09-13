import useForm from "../../hooks/useForm";
import IsLoading from "../loading/IsLoading";
import userService from "../../services/userService";
import {Link} from "react-router-dom";
import styles from "./form.module.scss";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import useFields from "./signupFields";
import Input from "../input/Input";

export default function SignupForm() {
  const {name, password, email, phone, fields, handleChange} = useFields();

  const {err, isLoading, handleSubmit} = useForm(fields, "/login");

  return isLoading ? (
    <IsLoading />
  ) : (
    <div className={styles.formContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(() => userService.createUser(name, password, email, phone));
        }}
        className={styles.form}
      >
        {fields.map((field) => (
          <Input
            value={field.value}
            className={styles.input}
            name={field.name}
            key={field.name}
            onChange={handleChange}
            type={field.type}
          />
        ))}
        <PrimaryButton>Create account</PrimaryButton>
        {err.length > 0 && err.map((error) => <p key={error}>{error}</p>)}
      </form>
      <Link className={styles.link} to="/login">
        Login
      </Link>
    </div>
  );
}
