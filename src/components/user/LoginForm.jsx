import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import useForm from "../../hooks/useForm";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import userService from "../../services/userService";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const errorMessage = "Email or password incorrect";

  const {err, isLoading, handleSubmit} = useForm([
    {validate: () => isEmail(email), errorMessage},
    {
      validate: () =>
        isStrongPassword(password, {minLength: 8, minLowercase: 1, minNumbers: 1, minSymbols: 0}),
      errorMessage,
    },
  ]);

  const setters = {
    email: setEmail,
    password: setPassword,
  };

  const handleChange = ({target}) => {
    setters[target.name](target.value);
  };

  return isLoading ? (
    <isLoading />
  ) : (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(() => userService.login(email, password).then(() => history.push("/")));
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
