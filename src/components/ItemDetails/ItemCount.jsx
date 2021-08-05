import { useState } from "react"
import colors from "../../colors"
import Button from '../Button'
import AddButton from '../AddButton'

export default function ItemCount({ initial, stock, onAdd}){
    
    const [ counter, setCounter ] = useState(initial)

    const style = {
        margin: '40px 0 20px 0',
        width: '-webkit-fill-available',
        height: '50%',
        maxHeight: 70,
        minHeight: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.base,
        borderRadius: 30,
        padding: '0 10px',
    }
    
    const increaseCounter = () => (counter < stock) && setCounter(counter + 1) 

    const decreaseCounter = () => (counter > 0) && setCounter(counter - 1)

    return(
        <>
            <div style={style}>
                <Button onClick={decreaseCounter}>-</Button>
                { counter }
                <Button onClick={increaseCounter}>+</Button>
            </div>
            <AddButton onClick={() => onAdd(counter)}>Agregar al carrito</AddButton>
        </>
    )
}