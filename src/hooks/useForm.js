
import salesService from "../services/salesService"


export default function useForm(fields){

    const handleSubmit = (e, transaction) => {
        e.preventDefault()
        
        let validFields = 0

        fields.forEach(field => validFields += !!(field.trim().length) ? 1 : 0)
        
        if(validFields === fields.length) return salesService.create(transaction)
        else return Promise.reject("The fields must contain at least one character")
    }

    return(handleSubmit)
}