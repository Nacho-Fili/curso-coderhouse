import colors from "../../colors"
import H1 from "../H1"
import Header from "../Header"
import CartWidget from "../CartWidget"
import styles from "./navBar.module.css"


const NavBar = () =>{ 
    
    const style = {
        color: colors.lightFont,
        borderTop: `10px solid ${ colors.base }`,
    }

    return(
        <Header>
            <H1> TryH4rd </H1>
            <nav className={styles.navBar} style={style}>
                <p> Inicio </p>
                <p> Productos </p>
                <p> Mi Cuenta </p>
                <CartWidget/>
            </nav>
        </Header>
    )
}

export default NavBar