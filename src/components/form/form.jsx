import {useContext, useState} from "react";
import colors from "../../colors";
import CartContext from "../../context/CartContext";
import useForm from "../../hooks/useForm";
import styles from "./form.module.css";
import Loader from "../loading/IsLoading";
import Input from "./input/Input";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

export default function Form({onSuccessBuy}) {
  const {items, finalPrice, clear} = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState();

  const {handleSubmit, isLoading, err} = useForm([
    {
      value: name,
      validate: function () {
        return Boolean(this.value.trim().length);
      },
    },
    {
      value: email,
      validate: function () {
        return isEmail(this.value);
      },
    },
    {
      value: phone,
      validate: function () {
        return isMobilePhone(this.value, false, {strictMode: true});
      },
    },
  ]);

  const setters = {
    name: setName,
    email: setEmail,
    phone: setPhone,
  };

  const handleChange = ({target}) => {
    setters[target.name](target.value);
  };

  const createTransaction = () => ({
    buyer: {
      name,
      phone,
      email,
    },
    items: items.map(({item}) => ({id: item.id, title: item.title, price: item.price})),
    date: new Date(),
    total: finalPrice,
  });

  if (isLoading) return <Loader />;

  return id ? (
    <p style={{color: colors.lightFont}}>
      Success buy! ID: <strong>{id}</strong>
    </p>
  ) : (
    <form
      className={styles.form}
      onSubmit={(e) => {
        const transaction = createTransaction();
        handleSubmit(e, transaction, (id) => {
          onSuccessBuy();
          clear();
          setId(id);
        });
      }}
    >
      <Input name="name" onChange={handleChange} />
      <Input name="phone" onChange={handleChange} />
      <Input type="email" name="email" onChange={handleChange} />
      <button
        style={{
          color: colors.lightFont,
          borderColor: colors.base,
        }}
        className="clickable"
      >
        submit
      </button>
      {Boolean(err) && err}
    </form>
  );
}
