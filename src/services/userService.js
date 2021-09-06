import {auth, firestore} from "../config/firebase";

const userService = {
  createUser: (name, password, email, phone) =>
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) =>
        firestore.collection("users").add({
          userId: user.uid,
          phone: phone,
          name: name,
          addresses: [],
        }),
      )

      .catch((err) => {
        throw err;
      }),

  login: (email, password) => auth.signInWithEmailAndPassword(email, password),
  onUserChange: (callback) => auth.onAuthStateChanged((user) => callback(user)),

  logout: () => auth.signOut(),
};

export default userService;
