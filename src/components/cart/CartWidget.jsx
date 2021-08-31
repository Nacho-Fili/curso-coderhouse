import cartContext from "../../context/CartContext";
import {useContext, useState} from "react";
import {BiCartAlt} from "react-icons/bi";
import CartModal from "./CartModal";

export default function CartWidget() {
  const {finalQuantity} = useContext(cartContext);
  const [showContent, setShowContent] = useState(false);

  // TODO: Mejorar estilos del contador del widget
  return (
    <div
      style={{display: "flex", alignItems: "center"}}
      onClick={() => finalQuantity > 0 && setShowContent(!showContent)}
      className="clickable"
    >
      <BiCartAlt size={25} style={{margin: "18px 0"}} />

      {!!finalQuantity && <p>{finalQuantity}</p>}
      <CartModal show={showContent} />
    </div>
  );
}
