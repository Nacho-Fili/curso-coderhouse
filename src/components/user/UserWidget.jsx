import React, {useContext, useState} from "react";
import {AiOutlineUser} from "react-icons/ai";
import {Link} from "react-router-dom";
import UserContext from "../../context/UserContext";
import styles from "./widget.module.scss";

export default function UserWidget() {
  const {userLogged, logout} = useContext(UserContext);
  const [showOptions, setShowOptions] = useState(false);
  const handleHover = () => setShowOptions(!showOptions);

  return (
    <div className={styles.widgetContainer} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Link to="/login">
        <AiOutlineUser size={25} style={{margin: "18px 0"}} />
      </Link>
      {Boolean(userLogged) && showOptions && (
        <>
          <p className="clickable" onClick={logout}>
            Logout
          </p>
          <Link className={styles.profile} to="/profile">
            Profile
          </Link>
        </>
      )}
    </div>
  );
}
