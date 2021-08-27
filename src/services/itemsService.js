import {firestore} from "../config/firebase";

const joinIdAndData = (doc) => ({id: doc.id, ...doc.data()});
const mappingIdAndData = ({docs}) => docs.map(joinIdAndData);

const itemsService = {
  fetchAll: () =>
    firestore
      .collection("/items")
      .get()
      .then(mappingIdAndData)
      .catch((err) => {
        throw err;
      }),

  fetchProduct: (id) =>
    firestore
      .doc(`/items/${id}`)
      .get()
      .then(joinIdAndData)
      .catch((err) => {
        throw err;
      }),

  fetchByCategory: (id) =>
    firestore
      .collection("/items")
      .where("categoryId", "==", id)
      .get()
      .then(mappingIdAndData)
      .catch((err) => {
        throw err;
      }),

  fetchCategories: () =>
    firestore
      .collection("/categories")
      .get()
      .then(mappingIdAndData)
      .catch((err) => {
        throw err;
      }),
};

export default itemsService;
