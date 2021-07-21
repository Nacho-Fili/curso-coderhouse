import colors from "../colors"

const H1 = ({ children }) =>{ 
    
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.lightFont
    }

    return(
        <h1 style={style}>
            { children }
        </h1>
    )
}
export default H1