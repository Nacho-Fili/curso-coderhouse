import React, {useContext, useState} from "react";
import {GiMagnifyingGlass} from "react-icons/gi";
import {useHistory} from "react-router";
import SearchContext from "../../context/SearchContext";
import SearchForm from "./SearchForm";

export default function MagnifyingGlassWidget({searchService}) {
  const [search, setSearch] = useState(false);
  const {setItemsSearched} = useContext(SearchContext);
  const history = useHistory();

  return search ? (
    <SearchForm
      onSearch={(str) => {
        setItemsSearched(searchService.searchByString(str));
        history.push(`/search/${str}`);
      }}
      onClose={() => setSearch(false)}
    />
  ) : (
    <GiMagnifyingGlass
      onClick={() => setSearch(true)}
      className="clickable"
      size={25}
      style={{margin: "18px 0"}}
    />
  );
}
