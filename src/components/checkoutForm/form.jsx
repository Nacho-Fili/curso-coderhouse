import {useContext, useState} from "react";
import CartContext from "../../context/CartContext";
import useForm from "../../hooks/useForm";
import styles from "./form.module.scss";
import Loader from "../loading/IsLoading";
import Input from "./input/Input";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import salesService from "../../services/salesService";

export default function Form({onSuccessBuy}) {
  const {items, finalPrice, clear} = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState();
  const [stockError, setStockError] = useState("");

  const {handleSubmit, isLoading, err} = useForm([
    {
      validate: () => Boolean(name.trim().length),
      errorMessage: "Name must contain at least one char",
    },
    {
      validate: () => isEmail(email),
      errorMessage: "Invalid email",
    },
    {
      validate: () => isMobilePhone(phone, false, {strictMode: true}),
      errorMessage: "Invalid mobile phone",
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
    items: items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      title: item.title,
      price: item.price,
    })),
    date: new Date(),
    total: finalPrice,
  });

  if (isLoading) return <Loader />;

  return id ? (
    <p>
      Success buy! ID: <strong>{id}</strong>
    </p>
  ) : (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        const transaction = createTransaction();
        handleSubmit(() =>
          salesService
            .create(transaction)
            .then((id) => {
              onSuccessBuy();
              clear();
              setId(id);
              return id;
            })
            .catch((err) => {
              const item = transaction.items.find((item) => item.id === err);
              if (item) setStockError(`Insufficient stock for the item ${item.name}`);
            }),
        );
      }}
    >
      <Input name="name" onChange={handleChange} />
      <Input name="phone" onChange={handleChange} />
      <Input type="email" name="email" onChange={handleChange} />
      <button className="clickable">submit</button>
      {Boolean(err) && err}
      {Boolean(stockError) && stockError}
    </form>
  );
}
