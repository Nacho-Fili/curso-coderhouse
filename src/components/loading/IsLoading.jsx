import colors from "../../colors"
import './loadingAnimation.css'


export default function IsLoading(){

    const style = {
        height: 100,
        width: 100,
        //borderWidth: 15,
        borderTopStyle: 'groove',
        borderTopColor: colors.base,
        borderRadius: '100%',
    }

    const containerStyle = {
        minWidth:'100%', 
        height: '75vh',
        display: 'flex',
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60
    }

    return(
        <div style={containerStyle}>
            <div style={style} className='loading'/>
        </div>
    )
}