import ItemCount from "./ItemCount";

export default function ItemCountContainer(){
    
    const style = {
        width: '30%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const onAdd = quantity => console.log(`Se agregaron ${quantity} productos al carrito`)

    return(
        <div style={style}>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}