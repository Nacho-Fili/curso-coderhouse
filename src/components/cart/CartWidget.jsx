import { useContext } from 'react'
import { BiCartAlt } from 'react-icons/bi'
import CartContext from '../../context/CartContext'

export default function CartWidget(){
    
    const {finalQuantity} = useContext(CartContext)
    
    if(finalQuantity === 0) return null

    return(
        <div style={{display:'flex', alignItems: 'center'}}>
            <BiCartAlt size={30} style={{margin: '18px 0'}}/>
            <p>{finalQuantity}</p>
        </div>
    )
}