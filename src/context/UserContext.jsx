import {createContext, useState} from "react";
import userService from "../services/userService";

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [userLogged, setUserLogged] = useState();

  const login = (email, password) =>
    userService.login(email, password).then((user) => {
      console.log(user);
      return setUserLogged(user);
    });

  const logout = () => userService.logout().then(() => setUserLogged(null));

  const deleteAccount = () => userService.deleteAccount(userLogged).then(() => setUserLogged(null));

  const addAddress = (address) =>
    userService
      .addAddres(address)
      .then(() => setUserLogged({...userLogged, addresses: [...userLogged.addresses, address]}));

  const addBuy = (buy) => {
    userService
      .addBuy(buy)
      .then(() => setUserLogged({...userLogged, buys: [...userLogged.buys, buy]}));
  };

  return (
    <UserContext.Provider value={{userLogged, login, logout, deleteAccount, addAddress, addBuy}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
