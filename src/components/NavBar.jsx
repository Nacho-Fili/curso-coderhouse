import colors from "../colors"

const NavBar = ({ children }) =>{ 
    
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
        <nav style={style}>
            { children }
        </nav>
    )
}

export default NavBar