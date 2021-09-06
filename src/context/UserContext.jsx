import {createContext, useState} from "react";
import userService from "../services/userService";

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [userLogged, setUserLogged] = useState();

  userService.onUserChange((user) => setUserLogged(user));

  return <UserContext.Provider value={{userLogged}}>{children}</UserContext.Provider>;
}

export default UserContext;
