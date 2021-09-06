import {useState} from "react";
import useForm from "../../hooks/useForm";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import equals from "validator/lib/equals";
import isStrongPassword from "validator/lib/isStrongPassword";
import IsLoading from "../loading/IsLoading";
import userService from "../../services/userService";
import {useHistory} from "react-router-dom";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  const {err, isLoading, handleSubmit} = useForm([
    {
      validate: () => Boolean(name.trim().length),
      errorMessage: "Name must contain at least one char",
    },
    {
      validate: () =>
        isStrongPassword(password, {minLength: 8, minLowercase: 1, minNumbers: 1, minSymbols: 0}),
      errorMessage: "Password must contain at least 1 lowercase, 1 uppercase, 1 number and 8 chars",
    },
    {
      validate: () => equals(confirmPassword, password),
      errorMessage: "Provided passwords doesn't match",
    },
    {validate: () => isEmail(email), errorMessage: "Email must contain '@' and end with '.com'"},
    {validate: () => isMobilePhone(phone), errorMessage: "Invalid mobile phone number"},
  ]);

  const setters = {
    name: setName,
    password: setPassword,
    confirmPassword: setConfirmPassword,
    email: setEmail,
    phone: setPhone,
  };

  const handleChange = ({target}) => {
    setters[target.name](target.value);
  };

  return isLoading ? (
    <IsLoading />
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(() =>
          userService.createUser(name, password, email, phone).then(() => history.push("/")),
        );
      }}
    >
      <input onChange={handleChange} type="text" name="name" />
      <input onChange={handleChange} type="password" name="password" />
      <input onChange={handleChange} type="password" name="confirmPassword" />
      <input onChange={handleChange} type="email" name="email" />
      <input onChange={handleChange} type="text" name="phone" />
      <button>submit</button>
      {err.length > 0 && err.map((error) => <p key={error}>{error}</p>)}
    </form>
  );
}
