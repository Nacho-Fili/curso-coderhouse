import {createContext, useState} from "react";

const SearchContext = createContext({});

export const SearchContextProvider = ({children}) => {
  const [itemsSearched, setItemsSearched] = useState([]);
  return (
    <SearchContext.Provider value={{itemsSearched, setItemsSearched}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
