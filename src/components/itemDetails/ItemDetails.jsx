import React, { useState } from 'react'
import colors from '../../colors'
import styles from './itemDetails.module.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

export default function ItemDetails({ item }) {

    const [showCounter, setShowCounter] = useState(true)

    const color = { backgroundColor: colors.background }

    return (
        <div style={color} className={styles.mainContainer}>
            <img src={item.image} alt={item.title}/>
            <div className={styles.container} style={{...color, color: colors.lightFont}}>
                <h2>{item.title}</h2>
                <h3>
                    <strong>
                        {`$${Math.round(item.price*190)}`}
                    </strong>
                </h3>
                <p className={styles.description}>{item.description}</p>
                { showCounter && <ItemCount initial={1} stock={5} onAdd={ quantity => setShowCounter(false) }/> }
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
