import {BiCartAlt} from "react-icons/bi";
import {Link} from "react-router-dom";

export default function CartWidget() {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <Link to="/cart">
        <BiCartAlt size={25} style={{margin: "18px 0"}} />
      </Link>
      {/* <p>{finalQuantity}</p> */}
    </div>
  );
}
