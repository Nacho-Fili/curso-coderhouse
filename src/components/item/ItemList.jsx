import Item from './Item'

export default function ItemList({ items }){

    return(
        <>
            {items.map(item => <Item item={item}/>)}
        </>
    )
}