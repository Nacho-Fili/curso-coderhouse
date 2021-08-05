import axios from 'axios'

const ENDPOINT = 'https://fakestoreapi.com'

const itemsService = {

    fetchAll: async () => {
        const { data } = await axios.get(`${ENDPOINT}/products/category/electronics`)
        return data
    },
    fetchProduct: async id => {
        const { data } = axios.get(`${ENDPOINT}/product/${id}`)
        return data
    }
}

export default itemsService