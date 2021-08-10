import { Link } from "react-router-dom";

export default function Category({ category }){
    
    const { name, id } = category

    return(
        <Link to={`/category/${id}`} >{name}</Link>
    )
}