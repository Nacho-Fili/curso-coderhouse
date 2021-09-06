import isMobilePhoneNumber from "validator/lib/isMobilePhone";

const phoneInput = {
  type: "phone",
  name: "phone",
  placeholder: "phone",
  validate: (value) => isMobilePhoneNumber(value),
};

export default phoneInput;
