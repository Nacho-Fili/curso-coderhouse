import React, {useContext} from "react";
import useForm from "../../hooks/useForm";
import userService from "../../services/userService";
import Input from "../input/Input";
import useFields from "./fields";
import Loader from "../loading/IsLoading";
import styles from "./address.module.scss";
import SecondaryButton from "../buttons/secondaryButton/SecondaryButton";
import UserContext from "../../context/UserContext";

export default function Form({onAdd}) {
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
            userService.addAddres({address, zip}).then(() => {
              addAddress({address, zip});
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
          />
        ))}
        <SecondaryButton>add</SecondaryButton>
      </form>
      {Boolean(err.length) && err.map((error) => <p key={error}>{error}</p>)}
    </>
  );
}
