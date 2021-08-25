import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import useForm from "../../hooks/useForm"

export default function Form(){

    const {items, finalPrice} = useContext(CartContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [err, setErr] = useState("")
    const [id, setId] = useState()

    const handleSubmit = useForm([name, email, phone])

    const setters = {
        name: setName,
        email: setEmail,
        phone: setPhone,
    } 

    const handleChange = ({ target }) =>{
        setters[target.name](target.value)
    }

    return id
    ? (<p>Su compra se ha relizado exitosamente con el id {id}</p>)
    : (
        <form onSubmit={e => {
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
                .then(id => setId(id))
                .catch(err => setErr(err))
            }}>
            <input type="text" placeholder="name" name="name" onChange={handleChange}/>
            <input type="text" placeholder="phone" name="phone"onChange={handleChange}/>
            <input type="email" placeholder="email" name="email" onChange={handleChange}/>
            <button>submit</button>
            {Boolean(err) && err}
        </form>
    )
}