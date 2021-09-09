import {createContext, useState} from "react";
import userService from "../services/userService";

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [userLogged, setUserLogged] = useState();

  const login = (email, password) =>
    userService.login(email, password).then((user) => setUserLogged(user));

  const logout = () => userService.logout().then(() => setUserLogged(null));

  const deleteAccount = () => userService.deleteAccount(userLogged).then(() => setUserLogged(null));

  const addAddress = (address) =>
    setUserLogged({...userLogged, addresses: [...userLogged.addresses, address]});

  return (
    <UserContext.Provider value={{userLogged, login, logout, deleteAccount, addAddress}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
