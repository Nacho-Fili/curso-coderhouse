import React from "react";
import {AiOutlineUser} from "react-icons/ai";
import {Link} from "react-router-dom";

export default function UserWidget() {
  return (
    <Link to="/login">
      <AiOutlineUser size={25} style={{margin: "18px 0"}} />
    </Link>
  );
}
