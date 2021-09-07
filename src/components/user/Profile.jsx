import React, {useContext} from "react";
import {Redirect} from "react-router";
import UserContext from "../../context/UserContext";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

export default function Profile() {
  const {userLogged, deleteAccount} = useContext(UserContext);

  return userLogged ? (
    <>
      <h1 style={{margin: 0}}>Your buys</h1>
      <h1>Your adresses</h1>
      {userLogged && userLogged.addresses.map((adress) => <p key={adress}>{adress}</p>)}
      <h1>Delete account</h1>
      <PrimaryButton onClick={() => deleteAccount()}>Delete Account</PrimaryButton>
    </>
  ) : (
    <Redirect to="/login/profile" />
  );
}
