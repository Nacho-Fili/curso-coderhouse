import { useState } from "react"
import salesService from "../services/salesService"


export default function useForm(fields){

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e, transaction) => {
        e.preventDefault()
        
        setIsLoading(true)

        let validFields = 0

        fields.forEach(field => validFields += !!(field.trim().length) ? 1 : 0)
        
        if(validFields === fields.length) {
            
            return salesService.create(transaction)
                        .then(id => {
                            setIsLoading(false)
                            console.log(id)
                            return id
                        })
        }
        else {
            setIsLoading(false)
            return Promise.reject("The fields must contain at least one character")
        }
    }

    return({handleSubmit, isLoading})
}