import {useContext, useState} from "react";
import {Link, useParams} from "react-router-dom";
import useForm from "../../hooks/useForm";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import Loader from "../loading/IsLoading";
import UserContext from "../../context/UserContext";
import styles from "./form.module.scss";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

export default function LoginForm() {
  const {login} = useContext(UserContext);

  const {from} = useParams();
  const redirectTo = from || "";

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const errorMessage = "Email or password incorrect";

  const {err, isLoading, handleSubmit} = useForm(
    [
      {validate: () => isEmail(email), errorMessage},
      {
        validate: () =>
          isStrongPassword(password, {minLength: 8, minLowercase: 1, minNumbers: 1, minSymbols: 0}),
        errorMessage,
      },
    ],
    `/${redirectTo}`,
  );

  const setters = {
    email: setEmail,
    password: setPassword,
  };

  const handleChange = ({target}) => {
    setters[target.name](target.value);
  };

  return isLoading ? (
    <div className={styles.loaderContainer}>
      <Loader />
    </div>
  ) : (
    <div className={styles.formContainer}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(() => login(email, password));
        }}
      >
        <input className={styles.input} onChange={handleChange} type="text" name="email" />
        <input className={styles.input} onChange={handleChange} type="password" name="password" />
        <PrimaryButton className={styles.button}>Log In</PrimaryButton>
      </form>
      {err.length > 0 && err.map((error) => <p key={error}>{error}</p>)}
      <Link className={styles.link} to="/signup">
        Register
      </Link>
    </div>
  );
}
