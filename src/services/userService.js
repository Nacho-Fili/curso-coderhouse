import {auth, firestore} from "../config/firebase";

class UserService {
  instance;

  static getInstance = function () {
    if (!this.instance) this.instance = new UserService();
    return this.instance;
  };

  createUser = (name, password, email, phone) =>
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) =>
        firestore.collection("users").doc(user.uid).set({
          phone: phone,
          name: name,
          addresses: [],
        }),
      )

      .catch((err) => {
        throw err;
      });

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

  logout = () => auth.signOut();
}

export default UserService.getInstance();
