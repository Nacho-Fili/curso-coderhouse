import React from 'react'
import colors from '../../colors'
import styles from './itemDetails.module.css'
import ItemCount from './ItemCount'

export default function ItemDetails({ item }) {
    
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
                <p>{item.description}</p>
                <ItemCount initial={1} stock={5} onAdd={ quantity => console.log(quantity) }/>
            </div>
        </div>
    )
}
