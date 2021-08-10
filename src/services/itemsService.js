import axios from 'axios'

const ENDPOINT = 'https://fakestoreapi.com'

const CATEGORIES = [ 'jewelery', 'electronics', 'men\'s clothing', 'women\'s clothing']

const itemsService = {

    fetchAll: () => {
        return axios.get(`${ENDPOINT}/products`)
            .then(({ data }) => data)
    },

    fetchProduct: async id => {
        return axios.get(`${ENDPOINT}/products/${id}`)
            .then(({ data }) => data)
    },

    fetchByCategory: id => {
        return axios.get(`${ENDPOINT}/products/category/${CATEGORIES[id - 1]}`)
            .then(({ data }) => data)
    }
}

export default itemsService