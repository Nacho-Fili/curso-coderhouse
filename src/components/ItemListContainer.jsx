import { useEffect, useState } from 'react'
import colors                             from '../colors'
import itemsService                 from '../services/itemsService'
import Item                                from './Item'
import IsLoading                        from './loading/IsLoading'

export default function ItemListContainer(){

    const [items, setItems] = useState([])

    const style = {
        backgroundColor: colors.background,
        width: '100%',
        height: '75vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: colors.lightFont,
        flexDirection: 'column',
        paddingTop: 100
    }

    useEffect(() => {
        const fetchItems = async () => {
            try{
                const fetchedItems = await itemsService.fetchAll()
                setItems(fetchedItems)
            } catch(err){
                throw err
            }
        }

        fetchItems()
    }, [items])

    return(
        <div style={style}>
            { (items.length === 0) && (<IsLoading/>) }
            { items.map(item => <Item item={item} />) }
        </div>
    )
}