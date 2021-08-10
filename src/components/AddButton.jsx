import { useState } from "react"
import colors from "../colors"

export default function AddButton({ onAdd }){

    const [cursor, setCursor] = useState('default')

    const style = cursor => ({
        backgroundColor: colors.background,
        border: `2px solid ${colors.base}`,
        width: '100%',
        height: '50%',
        borderRadius: 25,
        padding: '0 10px',
        maxHeight: 70,
        minHeight: 50,
        color: colors.lightFont,
        fontSize: '1.2rem',
        boxSizing: 'border-box',
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
