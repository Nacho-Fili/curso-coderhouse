import CartWidget from "../cart/CartWidget";
import styles from "./navBar.module.scss";
import {Link} from "react-router-dom";
import CategoryListContainer from "../categories/CategoryListContainer";
import {AiOutlineUser} from "react-icons/ai";
import {GiMagnifyingGlass} from "react-icons/gi";
import Brand from "./Brand";

const NavBar = () => (
  <header>
    <nav className={styles.navBar}>
      {/* TODO: Cambiar categorías y items en firebase */}
      <CategoryListContainer />
      <Link className={styles.brand} to="/">
        <Brand />
      </Link>
      <div className={styles.widgetContainer}>
        <CartWidget />
        {/* TODO: Crear los componentes de los widgets */}
        {/* TODO: Darle funcionalidad a los widgets */}
        {/* TODO: Implementar usuarios */}
        <AiOutlineUser size={25} style={{margin: "18px 0"}} />
        <GiMagnifyingGlass size={25} style={{margin: "18px 0"}} />
      </div>
    </nav>
  </header>
);
export default NavBar;
