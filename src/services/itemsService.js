import {firestore} from "../config/firebase";

const joinIdAndData = (doc) => ({id: doc.id, ...doc.data()});
const mappingIdAndData = ({docs}) => docs.map(joinIdAndData);
const resolveCategory = ({categoryId}) =>
  firestore.collection("/categories").doc(categoryId).get().then(joinIdAndData);

class ItemsService {
  instance;

  static getInstance = function () {
    if (!this.instance) this.instance = new ItemsService();
    return this.instance;
  };

  fetchAll = () =>
    firestore
      .collection("/items")
      .get()
      .then(mappingIdAndData)
      .then(async (items) => {
        const newItems = [];
        for (let i = 0; i < items.length; i++) {
          const category = await resolveCategory(items[i]);
          newItems.push({...items[i], category});
        }

        return newItems;
      })
      .catch((err) => {
        throw err;
      });

  fetchByIds = async (items) => {
    const itemsArray = [];
    for (let i = 0; i < items.length; i++) {
      const category = await resolveCategory(items[i]);
      const item = await firestore.doc(`/items/${items[i].ref}`).get().then(joinIdAndData);
      itemsArray.push({...item, category});
    }
    return itemsArray;
  };

  fetchProduct = (id) =>
    firestore
      .doc(`/items/${id}`)
      .get()
      .then(joinIdAndData)
      .catch((err) => {
        throw err;
      });

  fetchByCategory = (id) =>
    firestore
      .collection("/items")
      .where("categoryId", "==", id)
      .get()
      .then(mappingIdAndData)
      .then(async (items) => {
        const newItems = [];
        for (let i = 0; i < items.length; i++) {
          const category = await resolveCategory(items[i]);
          newItems.push({...items[i], category});
        }

        return newItems;
      })
      .catch((err) => {
        throw err;
      });

  fetchCategories = () =>
    firestore
      .collection("/categories")
      .get()
      .then(mappingIdAndData)
      .catch((err) => {
        throw err;
      });
}

export default ItemsService.getInstance();
