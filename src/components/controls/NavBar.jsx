import colors from "../../colors"
import H1 from "../H1"
import CartWidget from "../CartWidget"
import styles from "./navBar.module.css"
import { Link } from "react-router-dom"


const NavBar = () =>{ 
    
    const style = {
        color: colors.lightFont,
        borderTop: `10px solid ${ colors.base }`,
    }

    return(
        <header style={{ backgroundColor: colors.background }}>
            <H1> TryH4rd </H1>
            <nav className={styles.navBar} style={style}>
                <Link to='/'> Inicio </Link>
                <Link to='/category/1'> Joyería </Link>
                <Link to='/category/2'> Electrónica </Link>
                <Link to='/category/3'> Ropa H </Link>
                <Link to='/category/4'> Ropa M </Link>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar