import React, {useContext, useState} from "react";
import {Redirect} from "react-router";
import UserContext from "../../context/UserContext";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import SecondaryButton from "../buttons/secondaryButton/SecondaryButton";
import AddressForm from "../address/Form";

export default function Profile() {
  const {userLogged, deleteAccount} = useContext(UserContext);
  const [showAddresForm, setShowAddresForm] = useState(false);

  return userLogged ? (
    <>
      <h1 style={{margin: 0}}>Your buys</h1>
      {userLogged.buys.map((buy) => (
        <p key={buy.id}>{buy.id}</p>
      ))}

      <h1>Your adresses</h1>
      {userLogged.addresses.map((address) => (
        <p key={address}>{`${address.address}, zip: ${address.zip}`}</p>
      ))}
      {showAddresForm && <AddressForm onAdd={() => setShowAddresForm(false)} />}
      <SecondaryButton onClick={() => setShowAddresForm(true)}>Add address</SecondaryButton>

      <h1>Delete account</h1>
      <PrimaryButton onClick={() => deleteAccount()}>Delete Account</PrimaryButton>
    </>
  ) : (
    <Redirect to="/login/profile" />
  );
}
