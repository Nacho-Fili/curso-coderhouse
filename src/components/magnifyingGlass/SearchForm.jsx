import {useState} from "react";
import styles from "./search.module.scss";

export default function SearchForm({onSearch, onClose}) {
  const [searchString, setSearchString] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchString);
      }}
    >
      <input
        className={styles.query}
        onChange={({target}) => setSearchString(target.value)}
        type="text"
        name="search"
      />
      <button className={"clickable " + styles.search} type="submit">
        search
      </button>
      <button className={"clickable " + styles.close} type="button" onClick={() => onClose()}>
        X
      </button>
    </form>
  );
}
