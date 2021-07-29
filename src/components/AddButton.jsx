import { useState } from "react"
import colors from "../colors"

export default function AddButton({onAdd}){

    const [cursor, setCursor] = useState('default')

    const style = cursor => ({
        backgroundColor: colors.background,
        border: `2px solid ${colors.base}`,
        width: '-webkit-fill-available',
        height: '50%',
        borderRadius: 20,
        padding: '0 10px',
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
