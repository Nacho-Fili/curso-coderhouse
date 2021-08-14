import { useContext } from 'react'
import cartContext from '../../context/CartContext'

export default function Cart() {
    
    const { items } = useContext(cartContext)
    
    return (
        <>
            {items.map(item => <div> {item.item.title}: {item.quantity} </div>)}
        </>
    )
}
