import colors from "../colors"
import H1 from "./H1"
import Header from "./Header"
import CartWidget from "./CartWidget"

const NavBar = () =>{ 
    
    const style = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-around',
        justifyContent: 'space-around',
        fontSize: 18,
        color: colors.lightFont,
        borderTop: `10px solid ${ colors.base }`
    }

    return(
        <Header>
            <H1> TryH4rd </H1>
            <nav style={style}>
                <p> Inicio </p>
                <p> Productos </p>
                <p> Mi Cuenta </p>
                <CartWidget/>
            </nav>
        </Header>
    )
}

export default NavBar