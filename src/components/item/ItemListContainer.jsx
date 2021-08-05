import { useEffect, useState }  from 'react'
import colors                   from '../../colors'
import itemsService             from '../../services/itemsService'
import IsLoading                from '../loading/IsLoading'
import styles                   from './item.module.css'
import ItemList                 from './ItemList'

export default function ItemListContainer(){

    const [items, setItems] = useState([])
    const [ status, setStatus ] = useState('pending')

    const style = {
        backgroundColor: colors.background,
        color: colors.lightFont
    }

    useEffect(() => {
        const fetchItems = async () => {
            itemsService
                .fetchAll()
                .then(items => {
                    setItems(items)
                    setStatus('success')
                })
                .catch(err => { throw err })
        }

        fetchItems()
    }, [items])

    if(status === 'pending')
        return <IsLoading />

    return(
        <div className={styles.itemListContainer} style={style}>
            <ItemList items={items}/>
        </div>
    )
}