import {useContext, useState} from "react";
import CartContext from "../../context/CartContext";
import useForm from "../../hooks/useForm";
import styles from "./form.module.scss";
import Loader from "../loading/IsLoading";
import Input from "../input/Input";
import salesService from "../../services/salesService";
import useFields from "./fields";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import SecondaryButton from "../buttons/secondaryButton/SecondaryButton";
import userService from "../../services/userService";

export default function Form({onSuccessBuy}) {
  const {items, finalPrice, clear} = useContext(CartContext);

  const {fields, name, email, phone, address, zip, handleChange, changeAddress} = useFields();

  const [id, setId] = useState();
  const [stockError, setStockError] = useState("");

  const {handleSubmit, isLoading, err} = useForm(fields);

  const createTransaction = () => ({
    buyer: {
      name,
      phone,
      email,
      address: {address, zip},
    },
    items: items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      title: item.title,
      price: item.price,
      image: item.image,
    })),
    date: new Date(),
    total: finalPrice,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const transaction = createTransaction();
    handleSubmit(() =>
      salesService
        .create(transaction)
        .then((id) => {
          onSuccessBuy();
          clear();
          setId(id);
          userService.addBuy({id, ...transaction});
          return id;
        })
        .catch((err) => {
          const item = transaction.items.find((item) => item.id === err);
          if (item) setStockError(`Insufficient stock for the item ${item.name}`);
        }),
    );
  };

  if (isLoading) return <Loader />;

  return id ? (
    <p>
      Success buy! ID: <strong>{id}</strong>
    </p>
  ) : (
    <form className={styles.form} onSubmit={onSubmit}>
      {fields.map((field) => (
        <Input
          key={field.name}
          value={field.value}
          name={field.name}
          onChange={handleChange}
          type={field.type}
          className={styles.input}
        />
      ))}
      <PrimaryButton>submit</PrimaryButton>
      <SecondaryButton type="button" onClick={changeAddress}>
        change address
      </SecondaryButton>
      {Boolean(err) && err.map((error) => <p key={error}>{error}</p>)}
      {Boolean(stockError) && stockError}
    </form>
  );
}
