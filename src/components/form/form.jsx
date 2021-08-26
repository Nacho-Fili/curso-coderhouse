import { useContext, useState } from "react"
import colors from "../../colors"
import CartContext from "../../context/CartContext"
import useForm from "../../hooks/useForm"
import Loader from "../loading/IsLoading"
import styles from "./form.module.css"

export default function Form({onSuccessBuy}){

    const {items, finalPrice, clear} = useContext(CartContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [err, setErr] = useState("")
    const [id, setId] = useState()

    const {handleSubmit, isLoading} = useForm([name, email, phone])

    const setters = {
        name: setName,
        email: setEmail,
        phone: setPhone,
    } 

    const handleChange = ({ target }) =>{
        setters[target.name](target.value)
    }

    return id
    ?   (
            isLoading
            ? <Loader/>
            : <p style={{color: colors.lightFont}}>Su compra se ha relizado exitosamente con el id {id}</p>
        )        
    :   (
            <form className={styles.form} onSubmit={e => {
                setErr(false)
                const transaction = {
                    buyer: {
                        name, 
                        phone, 
                        email
                    }, 
                    items: items.map(({item}) => ({id: item.id, title: item.title, price: item.price})), 
                    date: new Date(), 
                    total: finalPrice
                }

                handleSubmit(e, transaction)
                    .then(id => {
                        onSuccessBuy()
                        clear()
                        setId(id)
                    })
                    .catch(err => setErr(err))
                }}>
                <input style={{
                    color: colors.lightFont,
                    borderColor: colors.base,
                    boxShadow: '1px 1px 1px black'
                    }} type="text" placeholder="name" name="name" onChange={handleChange}/>
                <input style={{
                    color: colors.lightFont,
                    borderColor: colors.base,
                    boxShadow: '1px 1px 1px black'
                    }} type="text" placeholder="phone" name="phone"onChange={handleChange}/>
                <input style={{
                    color: colors.lightFont,
                    borderColor: colors.base,
                    boxShadow: '1px 1px 1px black'
                    }} type="email" placeholder="email" name="email" onChange={handleChange}/>
                <button style={{
                    color: colors.lightFont,
                    borderColor: colors.base,
                    boxShadow: '1px 1px 1px black'
                    }}>submit</button>
                {Boolean(err) && err}
            </form>
        )
}