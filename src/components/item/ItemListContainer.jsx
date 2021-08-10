import { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import colors                   from '../../colors'
import itemsService             from '../../services/itemsService'
import IsLoading                from '../loading/IsLoading'
import styles                   from './item.module.css'
import ItemList                 from './ItemList'

export default function ItemListContainer(){

    const [items, setItems] = useState([])
    const [ status, setStatus ] = useState('pending')
    const { id } = useParams()

    const style = {
        backgroundColor: colors.background,
        color: colors.lightFont
    }

    useEffect(() => {
        setStatus('pending')
        const fetchItems = async () => {
            if(!id) 
                itemsService
                    .fetchAll()
                    .then(items => {
                        setItems(items)
                        setStatus('success')
                    })
                    .catch(err => { throw err })
            
            else itemsService
                    .fetchByCategory(id)
                    .then(items => {
                        setItems(items)
                        setStatus('succes')
                    })
                    .catch(err => { throw err })
        }

        fetchItems()
    }, [id])

    if(status === 'pending') return <IsLoading />

    return(
        <div className={styles.itemListContainer} style={style}>
            <ItemList items={items}/>
        </div>
    )
}