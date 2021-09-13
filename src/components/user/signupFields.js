import {useState} from "react";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import isStrongPassword from "validator/lib/isStrongPassword";
import equals from "validator/lib/equals";

const useFields = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const fields = [
    {
      validate: () => Boolean(name.trim().length),
      errorMessage: "Name must contain at least one char",
      name: "name",
      value: name,
    },
    {
      validate: () =>
        isStrongPassword(password, {minLength: 8, minLowercase: 1, minNumbers: 1, minSymbols: 0}),
      errorMessage: "Password must contain at least 1 lowercase, 1 uppercase, 1 number and 8 chars",
      name: "password",
      value: password,
      type: "password",
    },
    {
      validate: () => equals(confirmPassword, password),
      errorMessage: "Provided passwords doesn't match",
      name: "confirmPassword",
      value: confirmPassword,
      type: "password",
    },
    {
      validate: () => isEmail(email),
      errorMessage: "Email must contain '@' and end with '.com'",
      name: "email",
      value: email,
      type: "email",
    },
    {
      validate: () => isMobilePhone(phone),
      errorMessage: "Invalid mobile phone number",
      name: "phone",
      value: phone,
    },
  ];

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

  return {
    fields,
    name,
    phone,
    email,
    password,
    handleChange,
  };
};

export default useFields;
