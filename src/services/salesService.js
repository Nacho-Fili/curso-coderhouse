import {firestore} from "../config/firebase";

const salesService = {
  create: (transaction) =>
    firestore
      .collection("/transactions")
      .add(transaction)
      .then(({id}) => id),
};

export default salesService;
