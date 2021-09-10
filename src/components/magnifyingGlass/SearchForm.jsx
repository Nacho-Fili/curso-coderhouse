import {useState} from "react";

export default function SearchForm({onSearch, onClose}) {
  const [searchString, setSearchString] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchString);
      }}
    >
      <input onChange={({target}) => setSearchString(target.value)} type="text" name="search" />
      <button className="clickable" type="submit">
        search
      </button>
      <button className="clickable" type="button" onClick={() => onClose()}>
        X
      </button>
    </form>
  );
}
