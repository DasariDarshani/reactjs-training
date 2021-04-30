import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCgchN7yTVBh0Jek9NqTSz3kmCPR0qA9Zs",
  authDomain: "reactjs-training-8f58c.firebaseapp.com",
  projectId: "reactjs-training-8f58c",
  storageBucket: "reactjs-training-8f58c.appspot.com",
  messagingSenderId: "687685728401",
  appId: "1:687685728401:web:e11532b46df55faa83a730",
  measurementId: "G-YKCFJKGVJX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
