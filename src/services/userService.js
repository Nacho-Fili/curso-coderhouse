import {auth, firestore} from "../config/firebase";

const userService = {
  createUser: (name, password, email, phone) =>
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) =>
        firestore.collection("users").doc(userCredential.UID).set({
          phone: phone,
          name: name,
          addresses: [],
        }),
      )

      .catch((err) => {
        throw err;
      }),
};

export default userService;
