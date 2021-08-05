import colors from "../../colors"
import './loadingAnimation.css'


export default function IsLoading(){

    const style = {
        height: 150,
        width: 150,
        border: `15px solid ${colors.background}`,
        borderTopStyle: 'groove',
        borderTopColor: colors.base,
        borderRadius: '100%',
    }

    const containerStyle = {
        minWidth:'100%', 
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 60
    }

    return(
        <div style={containerStyle}>
            <div style={style} className='loading'/>
        </div>
    )
}