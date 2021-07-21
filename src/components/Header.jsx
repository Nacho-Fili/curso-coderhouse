import colors from '../colors'

const Header = ({ children }) =>{     
    const style = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.background
    }

    return(
        <header style={style}>
            { children }
        </header>
    )
}
export default Header