import {useState} from "react";
import isNumeric from "validator/lib/isNumeric";

export default function useFields() {
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");

  const fields = [
    {
      name: "address",
      value: address,
      validate: () => Boolean(address.trim().length),
      errorMessage: "Address must contain at least one char",
    },
    {
      name: "zip",
      value: zip,
      validate: () => isNumeric(String(zip)),
      errorMessage: "Zip must contain only numbers",
    },
  ];

  const setters = {
    address: setAddress,
    zip: setZip,
  };

  const handleChange = ({target}) => {
    setters[target.name](target.value);
  };

  return {
    address,
    zip,
    handleChange,
    fields,
  };
}
