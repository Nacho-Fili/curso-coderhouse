import React, { useState, useEffect } from 'react'
import itemsService from '../../services/itemsService'
import IsLoading from '../loading/IsLoading'
import ItemDetails from './ItemDetails'

export default function ItemDetailContainer({ id }) {
    
    const [ item, setItem ] = useState({})
    const [ status, setStatus ] = useState('pending')

    useEffect(() => {
        itemsService.fetchProduct(id)
            .then(fetchedItem => {
                setItem(fetchedItem)
                setStatus('success')
            })
            .catch(err => {
                throw err
            })
    }, [id])

    if(status === 'pending') return <IsLoading/>

    return (
        <ItemDetails item={item}/>
    )
}
