import styles from './item.module.css'
import colors from "../../colors"


export default function Item({ item }){

    const style = {
        borderTop: `4px solid ${colors.base}`,
    }

    return(
        <div className={styles.itemContainer} style={style}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={item.image} alt={item.title}/>
            </div>
            <h3>{item.title}</h3>
            <p className={styles.price}>{`$${Math.round(item.price*190)}`}</p>
        </div>
    )
}