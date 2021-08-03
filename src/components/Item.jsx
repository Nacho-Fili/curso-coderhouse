import ItemTitle from './ItemDetails/ItemTitle'
import ItemImg from './ItemDetails/ItemImg'
import colors from "../colors"


export default function Item({ item }){

    const style = {
        display: 'flex',
        width: '70%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: `4px solid ${colors.base}`,
        maxHeight: 100,
        minWidth:400
    }

    return(
        <div style={style}>
            <ItemImg src={item.image} alt={item.title}/>
            <ItemTitle title={item.title}/>
            {`$${Math.round(item.price*190)}`}
        </div>
    )
}