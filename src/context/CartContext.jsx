import React, { createContext, useState } from 'react'

const CartContext = createContext({})

export function CartContextProvider({ children }) {

    const [items, setItems] = useState([])
    const [finalPrice, setFinalPrice] = useState(0)
    const [finalQuantity, setFinalQuantity] = useState(0)

    const addItem = (item, quantity) => {
        const index = items.findIndex(itemInList => itemInList.item.id === item.id)
        setFinalPrice(finalPrice + item.price*190*quantity)
        setFinalQuantity(finalQuantity + quantity)

        if(index !== -1){
            const newItems = items
            newItems[index] = { item: newItems[index].item, quantity: newItems[index].quantity+quantity}
            setItems(newItems)
        } else {
            setItems([...items, { item, quantity }])
        }
    }

    const removeItem = id => {
        const index = items.findIndex(itemInList => itemInList.item.id === id)
        
        if(index !== -1) {
            setFinalPrice(finalPrice - items[index].item.price*items[index].quantity*190)
            setFinalQuantity(finalQuantity - items[index].quantity)
            items.splice(index, 1)
        }

        setItems([...items])
    }

    const clear = () => setItems([])

    return (
        <CartContext.Provider value={{items, finalPrice, finalQuantity, addItem, removeItem, clear}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext
