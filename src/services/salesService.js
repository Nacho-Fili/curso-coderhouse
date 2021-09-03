import {firestore} from "../config/firebase";

const joinIdAndData = (doc) => ({id: doc.id, ...doc.data()});

const salesService = {
  create: (transaction) => {
    transaction.items.forEach((item) => {
      firestore
        .doc(`/items/${item.id}`)
        .get()
        .then(joinIdAndData)
        .then((storedItem) => {
          if (storedItem.stock < item.quantity) {
            return Promise.reject(item.id);
          }
        });
    });
    return firestore
      .collection("/transactions")
      .add(transaction)
      .then(({id}) => id);
  },
};

export default salesService;
