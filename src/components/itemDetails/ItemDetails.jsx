import React from 'react'
import colors from '../../colors'

export default function ItemDetails({ item }) {
    return (
        <div style={{backgroundColor: colors.background, color: colors.lightFont}}>
            <img src={item.image} style={{ height: 300 }}/>
            <p>{item.title}</p>
            <p><strong>{`$${Math.round(item.price*190)}`}</strong></p>
        </div>
    )
}
