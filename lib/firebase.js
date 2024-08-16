import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKO97mXx6BiHw2sJSNHk2LBS7idzqK16M",
  authDomain: "test-app-nextjs.firebaseapp.com",
  projectId: "test-app-nextjs",
  storageBucket: "test-app-nextjs.appspot.com",
  messagingSenderId: "411129543182",
  appId: "1:411129543182:web:3a6880426f8be29d02da5f",
  measurementId: "G-L7NZXPLRGM",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
