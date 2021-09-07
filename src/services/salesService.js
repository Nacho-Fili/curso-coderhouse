import {firestore} from "../config/firebase";

const joinIdAndData = (doc) => ({id: doc.id, ...doc.data()});

class SalesService {
  instance;

  static getInstance = function () {
    if (!this.instance) this.instance = new SalesService();
    return this.instance;
  };

  create = (transaction) => {
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
  };
}

export default SalesService.getInstance();
