import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tacticalfba-28b9b.firebaseapp.com",
  databaseURL: "https://tacticalfba-28b9b.firebaseio.com",
  projectId: "tacticalfba-28b9b",
  storageBucket: "tacticalfba-28b9b.appspot.com",
  messagingSenderId: "149879790771",
  appId: "1:149879790771:web:534d2375a7b225ec8b24c6",
  measurementId: "G-12WCTCMXD5",
};

firebase.initializeApp(config);

const auth = firebase.auth();
var actionCodeSettings = {
  url: "https://tacticalfba.com/finish-signup",
  handleCodeInApp: true,
};

const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { firebase, db, auth, provider, actionCodeSettings, storage };
