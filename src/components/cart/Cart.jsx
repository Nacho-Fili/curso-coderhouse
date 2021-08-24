<<<<<<< HEAD
import { useContext } from 'react'
import cartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
    
    const { items, finalPrice, removeItem } = useContext(cartContext)

    if(items.length === 0)
        return(
            <>
                <p>No hay items en tu carrito!</p>
                <Link to='/'>Volver a inicio</Link>
            </>
        )

    return (
        <>
            {
                items.map(({item, quantity}) => {
                    return(
                        <>
                            <div style={{display: 'flex', alignItems: 'center'}}> 
                                {item.title}: {quantity} 
                                |||
                                <p onClick={() => removeItem(item.id)}> X </p>
                            </div>
                        </>
                    )
                })
            }
            
        
            <p>{finalPrice}</p>
        </>
    )
}
=======
import { useContext } from 'react'
import cartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
    
    const { items, finalPrice, removeItem } = useContext(cartContext)

    if(items.length === 0)
        return(
            <>
                <p>No hay items en tu carrito!</p>
                <Link to='/'>Volver a inicio</Link>
            </>
        )

    return (
        <>
            {
                items.map(({item, quantity}) => {
                    return(
                        <>
                            <div style={{display: 'flex', alignItems: 'center'}}> 
                                {item.title}: {quantity} 
                                |||
                                <p onClick={() => removeItem(item.id)}> X </p>
                            </div>
                        </>
                    )
                })
            }
            
        
            <p>{finalPrice}</p>
        </>
    )
}
>>>>>>> 6e5a688bdfdd993eeb036dd9c174bad330b8c1c5
