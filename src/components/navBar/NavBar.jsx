import CartWidget from "../cart/CartWidget";
import styles from "./navBar.module.scss";
import {Link} from "react-router-dom";
import CategoryListContainer from "../categories/CategoryListContainer";

import Brand from "./Brand";
import UserWidget from "../user/UserWidget";
import MagnifyingGlassWidget from "../magnifyingGlass/MagnifyingGlassWidget";

const NavBar = ({searchService}) => (
  <header>
    <nav className={styles.navBar}>
      {/* TODO: Cambiar categorías y items en firebase */}
      <CategoryListContainer />
      <Link className={styles.brand} to="/">
        <Brand />
      </Link>
      <div className={styles.widgetContainer}>
        <CartWidget />
        <UserWidget />
        <MagnifyingGlassWidget searchService={searchService} />
      </div>
    </nav>
  </header>
);
export default NavBar;
