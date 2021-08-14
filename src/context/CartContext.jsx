import React, { createContext, useState } from 'react'

const CartContext = createContext({})

export function CartContextProvider({ children }) {

    const [items, setItems] = useState([])

    const addItem = (item, quantity) => {
        const index = items.findIndex(itemInList => itemInList.item.id === item.id)
        
        if(index !== -1){
            const newItems = items
            newItems[index] = { item: newItems[index].item, quantity: newItems[index].quantity+quantity}
            setItems(newItems)
        } else {
            setItems([...items, { item, quantity }])
        }
    }

    const removeItem = id => {
        const index = items.findeIndex(itemInList => itemInList.item.id === id)
        
        if(index !== -1) items.splice(index, 0)

        setItems([...items])
    }

    const clear = () => setItems([])

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clear}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext
