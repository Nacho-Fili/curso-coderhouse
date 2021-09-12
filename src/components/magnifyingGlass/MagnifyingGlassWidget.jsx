import React, {useState} from "react";
import {GiMagnifyingGlass} from "react-icons/gi";
import {useHistory} from "react-router";
import SearchForm from "./SearchForm";

export default function MagnifyingGlassWidget() {
  const [search, setSearch] = useState(false);
  const history = useHistory();

  return search ? (
    <SearchForm
      onSearch={(str) => history.push(`/search/${str}`)}
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
