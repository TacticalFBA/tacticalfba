import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";
import "firebase/analytics";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

const auth = firebase.auth();
var actionCodeSettings = {
  url: "https://tacticalfba.com/finish-signup",
  handleCodeInApp: true,
};

const db = firebase.firestore();
const storage = firebase.storage();
const analytics = firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();
export { firebase, db, auth, provider, actionCodeSettings, storage, analytics };
