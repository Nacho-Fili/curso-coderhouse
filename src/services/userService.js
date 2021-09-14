import {auth, FieldValue, firestore} from "../config/firebase";

class UserService {
  instance;

  static getInstance = function () {
    if (!this.instance) this.instance = new UserService();
    return this.instance;
  };

  createUser = (name, password, email, phone) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) =>
        firestore.collection("users").doc(user.uid).set({
          phone: phone,
          name: name,
          addresses: [],
          buys: [],
        }),
      )

      .catch((err) => {
        throw err;
      });
  };

  login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password).then(({user}) =>
      firestore
        .doc(`/users/${user.uid}`)
        .get()
        .then((doc) => ({id: doc.id, ...doc.data()}))
        .then((customUser) => {
          const mergedUser = {...customUser, email: user.email};
          return mergedUser;
        }),
    );

  deleteAccount = (userLogged) =>
    firestore
      .doc(`/users/${userLogged.id}`)
      .delete()
      .then(() => auth.currentUser.delete());

  addBuy = (buy) =>
    firestore
      .doc(`/users/${auth.currentUser.uid}`)
      .set({buys: FieldValue.arrayUnion(buy)}, {merge: true});

  addAddres = (address) =>
    firestore
      .doc(`/users/${auth.currentUser.uid}`)
      .set({addresses: FieldValue.arrayUnion(address)}, {merge: true});

  logout = () => auth.signOut();
}

export default UserService.getInstance();
