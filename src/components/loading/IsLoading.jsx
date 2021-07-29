import colors from "../../colors"
import loadingCSS from './loadingAnimation.css'


export default function IsLoading(){

    const style = {
        height: 150,
        width: 150,
        border: `15px solid ${colors.background}`,
        borderTopStyle: 'groove',
        borderTopColor: colors.base,
        borderRadius: '100%'
    }

    return(
        <div style={style} className='loading'/>
    )
}