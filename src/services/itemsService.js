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
    },

    fetchCategories: () => {
        return axios.get(`${ENDPOINT}/products/categories`)
                    .then(({ data }) => data.map(category =>  ({ id: CATEGORIES.indexOf(category)+1, name: category}) ))
    }
}

export default itemsService