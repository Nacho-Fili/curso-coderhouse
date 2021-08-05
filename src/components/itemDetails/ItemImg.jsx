export default function ItemImg({ src, alt }){

    const style = {
        img: {
            objectFit: 'contain',
            objectPosition: 'center',
            maxHeight: 100,
        },
        div: {
            height: '100%',
            width: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

    return(
        <div style={style.div}>
            <img style={style.img} src={src} alt={alt} />
        </div>
    )

}