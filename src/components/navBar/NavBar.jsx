import CartWidget from "../cart/CartWidget";
import styles from "./navBar.module.scss";
import {Link} from "react-router-dom";
import CategoryListContainer from "../categories/CategoryListContainer";

import Brand from "./Brand";
import UserWidget from "../user/UserWidget";
import MagnifyingGlassWidget from "../magnifyingGlass/MagnifyingGlassWidget";

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
        <UserWidget />
        <MagnifyingGlassWidget />
      </div>
    </nav>
  </header>
);
export default NavBar;
