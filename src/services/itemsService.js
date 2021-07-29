import mockItems from '../mock/itemsAPI.js'

const itemsService = {

    fetchAll: async id => {
        try {
            const items = await mockItems.getAll()
            return items
        } catch(err){
            throw err
        }
    }
}

export default itemsService