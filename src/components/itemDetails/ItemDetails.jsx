import React from 'react'
import colors from '../../colors'
import styles from './itemDetails.module.css'
import ItemCountContainer from './ItemCountContainer'

export default function ItemDetails({ item }) {
    
    const style = { backgroundColor: colors.background }

    return (
        <div style={style} className={styles.mainContainer}>
            <img src={item.image} alt={item.title} style={{ height: 300 }}/>
            <div style={{backgroundColor: colors.background, color: colors.lightFont}}>
                <h2>{item.title}</h2>
                <h3><strong>{`$${Math.round(item.price*190)}`}</strong></h3>
                <ItemCountContainer/>
            </div>
        </div>
    )
}
