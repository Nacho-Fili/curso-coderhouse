import React, {useContext} from "react";
import useForm from "../../hooks/useForm";
import Input from "../input/Input";
import useFields from "./fields";
import Loader from "../loading/IsLoading";
import styles from "./address.module.scss";
import SecondaryButton from "../buttons/secondaryButton/SecondaryButton";
import UserContext from "../../context/UserContext";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

export default function Form({onAdd, onClose}) {
  const {fields, address, zip, handleChange} = useFields();
  const {handleSubmit, err, isLoading} = useForm(fields);
  const {addAddress} = useContext(UserContext);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(() =>
            addAddress({address, zip}).then(() => {
              return onAdd();
            }),
          );
        }}
      >
        {fields.map((field) => (
          <Input
            value={field.value}
            type={field.type}
            name={field.name}
            key={field.name}
            onChange={handleChange}
            className={styles.input}
          />
        ))}
        <PrimaryButton className={styles.addButton}>add</PrimaryButton>
        <SecondaryButton className={styles.closeButton} onClick={onClose} type="button">
          close
        </SecondaryButton>
      </form>
      {Boolean(err.length) && err.map((error) => <p key={error}>{error}</p>)}
    </>
  );
}
