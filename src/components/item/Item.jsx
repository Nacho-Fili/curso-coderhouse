import styles from './item.module.css'
import colors from "../../colors"
import { Link } from 'react-router-dom'


export default function Item({ item }){

    const style = { border: `4px solid ${colors.base}` }

    return(
        <Link to={`/item/${item.id}`} 
            className={`${styles.itemContainer} clickable`} 
            style={style}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={item.image} alt={item.title}/>
            </div>
            <h3>{item.title}</h3>
            <p className={styles.price}>{`$${Math.round(item.price*190)}`}</p>
        </Link>
    )
}