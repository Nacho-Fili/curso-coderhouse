import {NavLink} from "react-router-dom";
import "./category.css";

export default function Category({category}) {
  const {name, id} = category;

  return <NavLink to={`/category/${id}`}>{name.charAt(0).toUpperCase() + name.slice(1)}</NavLink>;
}
