import React, {useContext, useState} from "react";
import {Redirect} from "react-router";
import UserContext from "../../context/UserContext";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import AddressForm from "../address/Form";
import Buy from "./Buy";
import Address from "../address/Address";
import styles from "./profile.module.scss";

export default function Profile() {
  const {userLogged, deleteAccount} = useContext(UserContext);
  const [showAddresForm, setShowAddresForm] = useState(false);

  return userLogged ? (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Your buys</h1>
      <div className={styles.buysContainer}>
        {userLogged.buys.map((buy) => (
          <Buy key={buy.id} buy={buy} />
        ))}
      </div>

      <h1 className={styles.title}>Your adresses</h1>
      <div className={styles.addressesContainer}>
        {userLogged.addresses.map((address) => (
          <Address key={address.address} address={address} />
        ))}
        {showAddresForm ? (
          <AddressForm
            onAdd={() => setShowAddresForm(false)}
            onClose={() => setShowAddresForm(false)}
          />
        ) : (
          <PrimaryButton className={styles.showForm} onClick={() => setShowAddresForm(true)}>
            Add address
          </PrimaryButton>
        )}
      </div>

      <h1 className={styles.title}>Delete account</h1>
      <PrimaryButton className={styles.delete} onClick={() => deleteAccount()}>
        Delete Account
      </PrimaryButton>
    </div>
  ) : (
    <Redirect to="/login/profile" />
  );
}
