import { Link } from "react-router-dom";

export default function Category({ category }){
    
    const { name, id } = category

    return(
        <Link to={`/category/${id}`} >{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
    )
}