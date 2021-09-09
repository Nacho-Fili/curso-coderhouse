import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
  app;
  firestore;
  auth;

  static getApp = function () {
    if (!this.app) this.app = firebase.initializeApp(firebaseConfig);
    return this.app;
  };

  static getFirestore = function () {
    if (!this.firestore) this.firestore = firebase.firestore(Firebase.getApp());
    return this.firestore;
  };

  static getAuth = function () {
    if (!this.auth) this.auth = firebase.auth(Firebase.getApp());
    return this.auth;
  };
}

Firebase.getApp();
export const auth = Firebase.getAuth();
export const firestore = Firebase.getFirestore();
export const FieldValue = firebase.firestore.FieldValue;
