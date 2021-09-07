import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import useForm from "../../hooks/useForm";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import Loader from "../loading/IsLoading";
import UserContext from "../../context/UserContext";

export default function LoginForm() {
  const {login} = useContext(UserContext);
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
    "/",
  );

  const setters = {
    email: setEmail,
    password: setPassword,
  };

  const handleChange = ({target}) => {
    setters[target.name](target.value);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(() => login(email, password));
        }}
      >
        <input onChange={handleChange} type="text" name="email" />
        <input onChange={handleChange} type="password" name="password" />
        <button>Login</button>
      </form>
      {err.length > 0 && err.map((error) => <p key={error}>{error}</p>)}
      <Link to="/signup">Register</Link>
    </>
  );
}
