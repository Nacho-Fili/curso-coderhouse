import React, { useContext, useState } from 'react'
import colors from '../../colors'
import styles from './itemDetails.module.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

export default function ItemDetails({ item }) {

    const [showCounter, setShowCounter] = useState(true)

    const { addItem } = useContext(CartContext)

    const color = { backgroundColor: colors.background }

    const handleOnAdd = quantity => {
        setShowCounter(false)
        addItem(item, quantity)
    }

    return (
        <div style={color} className={styles.mainContainer}>
            <img src={item.image} alt={item.title}/>
            <div className={styles.container} style={{...color, color: colors.lightFont}}>
                <h2>{item.title}</h2>
                <h3>
                    <strong>
                        {`US$${item.price}`}
                    </strong>
                </h3>
                <p className={styles.description}>{item.description}</p>
                { showCounter && <ItemCount initial={1} stock={5} onAdd={ handleOnAdd }/> }
                { !showCounter && 
                    <Link to='/cart'>
                        <button 
                            className={'clickable ' + styles.secondaryButton} 
                            style={{
                                color: colors.lightFont,
                                backgroundColor: "transparent",
                                border: `2px solid ${colors.base}`,
                                marginTop: 10
                            }}>
                            Finalizar compra
                        </button>
                    </Link> 
                }
            </div>
        </div>
    )
}