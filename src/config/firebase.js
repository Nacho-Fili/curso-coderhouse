import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY, // "AIzaSyA6D7FWPwhxOWAFU986jCpveWkWZK8XfJs",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN, // "curso-coderhouse-react.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID, // "curso-coderhouse-react",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET, // "curso-coderhouse-react.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID, // "516149152423",
  appId: process.env.REACT_APP_APP_ID, // "1:516149152423:web:a67344e906eae5030c6982"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);
