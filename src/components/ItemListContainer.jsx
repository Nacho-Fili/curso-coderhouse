import colors           from "../colors"
import ItemCountContainer   from "./ItemCountContainer"


export default function ItemListContainer({greeting}){

    const style = {
        backgroundColor: colors.background,
        width: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.lightFont,
        flexDirection: 'column'
    }

    return(
        <div style={style}>
            { greeting }
            <ItemCountContainer/>
        </div>
    )
}