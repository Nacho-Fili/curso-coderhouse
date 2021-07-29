import items from './items'

const seconds = seconds => seconds*1000 

const itemsAPI = {
    getAll: () => new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, seconds(2))
    })
}

export default itemsAPI