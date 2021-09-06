const nameInput = {
  type: "name",
  name: "name",
  placeholder: "name",
  validate: (value) => Boolean(value.trim().length),
};

export default nameInput;
