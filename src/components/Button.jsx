import { useState } from "react"
import colors from "../colors"

export default function Button({ children, onClick }){

    const [ cursor, setCursor ] = useState('default')
    

    const style= cursor => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        border: '2px solid black',
        borderRadius: 25,
        height: 30,
        width: 30,
        cursor,
        fontSize: 25,
        padding: 0
    })
    
    return(
        <button 
            style={style(cursor)} 
            onMouseEnter={() => setCursor('pointer')} 
            onMouseLeave={() => setCursor('default')}
            onClick={onClick}>
            { children }
        </button>
    )
}