import colors from "../colors"

const H1 = ({ children }) =>{ 
    
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.lightFont,
        fontSize: '2.5rem'
    }

    return(
        <h1 style={style}>
            { children }
        </h1>
    )
}
export default H1