import colors from "../../colors"

const NavBar = ({ children }) =>{ 
    
    const style = {
        display: 'flex',
        alignItems: 'space-around',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 18,
        color: colors.lightFont,
        borderTop: `10px solid ${ colors.base }`
    }

    return(
        <nav style={style}>
            { children }
        </nav>
    )
}

export default NavBar