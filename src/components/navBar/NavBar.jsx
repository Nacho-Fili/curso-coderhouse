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
      <CategoryListContainer />
      <Link className={styles.brand} to="/">
        <Brand />
      </Link>
      <div className={styles.widgetContainer}>
        <CartWidget />
        <UserWidget />
        <MagnifyingGlassWidget />
      </div>
    </nav>
  </header>
);
export default NavBar;
