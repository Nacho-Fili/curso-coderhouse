import {createContext, useState} from "react";
import userService from "../services/userService";

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [userLogged, setUserLogged] = useState();

  const login = (email, password) =>
    userService.login(email, password).then((user) => setUserLogged(user));

  const logout = () => userService.logout().then(() => setUserLogged(null));

  return (
    <UserContext.Provider value={{userLogged, login, logout}}>{children}</UserContext.Provider>
  );
}

export default UserContext;
