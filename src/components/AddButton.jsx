import { useState } from "react"
import colors from "../colors"

export default function AddButton({onAdd}){

    console.log(colors)

    const [cursor, setCursor] = useState('default')

    const style = cursor => ({
        backgroundColor: colors.background,
        border: `2px solid ${colors.base}`,
        width: '-webkit-fill-available',
        height: '50%',
        borderRadius: 25,
        padding: '0 10px',
        maxHeight: 70,
        minHeight: 50,
        color: colors.lightFont,
        cursor
    })

    return(
        <button 
            style={style(cursor)}
            onClick={onAdd}
            onMouseEnter={() => setCursor('pointer')}
            onMouseLeave={() => setCursor('default')}>
            Agregar al carrito
        </button>
    )
}
