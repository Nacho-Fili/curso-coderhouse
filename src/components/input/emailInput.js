import isEmail from "validator/lib/isEmail";

const emailInput = {
  type: "email",
  name: "email",
  placeholder: "email",
  validate: (value) => isEmail(value),
};

export default emailInput;
