import {useState, useContext} from "react";
import UserContext from "../../context/UserContext";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import isNumeric from "validator/lib/isNumeric";

const useFields = () => {
  const {userLogged} = useContext(UserContext);

  const [index, setIndex] = useState(0);
  const [name, setName] = useState(userLogged ? userLogged.name : "");
  const [email, setEmail] = useState(userLogged ? userLogged.email : "");
  const [phone, setPhone] = useState(userLogged ? userLogged.phone : "");
  const [address, setAddress] = useState(
    userLogged.addresses.length > 0 ? userLogged.addresses[index].address : "",
  );
  const [zip, setZip] = useState(
    userLogged.addresses.length > 0 ? userLogged.addresses[index].zip : "",
  );

  const changeAddress = () => {
    if (!userLogged) return;
    if (userLogged.addresses.length === 0) return;

    setIndex(index < userLogged.addresses.length - 1 ? index + 1 : 0);

    setZip(userLogged.addresses[index < userLogged.addresses.length - 1 ? index + 1 : 0].zip);
    setAddress(
      userLogged.addresses[index < userLogged.addresses.length - 1 ? index + 1 : 0].address,
    );
  };

  const fields = [
    {
      validate: () => Boolean(name.trim().length),
      errorMessage: "Name must contain at least one char",
      name: "name",
      value: name,
    },
    {
      validate: () => isEmail(email),
      errorMessage: "Invalid email",
      name: "email",
      type: "email",
      value: email,
    },
    {
      validate: () => isMobilePhone(phone, false, {strictMode: true}),
      errorMessage: "Invalid mobile phone",
      name: "phone",
      value: phone,
    },
    {
      validate: () => Boolean(address.trim().length),
      errorMessage: "Address must contain at least one char",
      name: "address",
      value: address,
    },
    {
      validate: () => isNumeric(String(zip), {no_symbols: true}),
      errorMessage: "Zip must contain only numbers",
      name: "zip",
      value: zip,
    },
  ];

  const setters = {
    name: setName,
    email: setEmail,
    phone: setPhone,
    address: setAddress,
    zip: setZip,
  };

  const handleChange = ({target}) => {
    setters[target.name](target.value);
  };

  return {
    fields,
    name,
    phone,
    email,
    address,
    zip,
    handleChange,
    changeAddress,
  };
};

export default useFields;
