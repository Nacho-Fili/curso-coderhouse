import colors from "../../colors"
import CartWidget from "../cart/CartWidget"
import styles from "./navBar.module.css"
import { Link } from "react-router-dom"
import CategoryListContainer from '../categories/CategoryListContainer'

const NavBar = () =>{ 
    
    const style = {
        color: colors.lightFont,
        borderTop: `10px solid ${ colors.base }`,
    }

    return(
        <header style={{ backgroundColor: colors.background }}>
            <Link to='/'><h1  style={{color: colors.lightFont}} className={styles.brand}> TryH4rd </h1></Link>
            <nav className={styles.navBar} style={style}>
                <CategoryListContainer/>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar