import colors from "../colors"

export default function ItemListContainer({greeting}){

    const style = {
        backgroundColor: colors.background,
        width: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.lightFont
    }

    return(
        <div style={style}>
            { greeting }
        </div>
    )
}