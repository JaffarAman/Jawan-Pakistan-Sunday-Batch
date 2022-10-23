// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ZsFZE2ORHO4Xj_k98SfsyRbka7Iqid8",
  authDomain: "todo-with-firebase-5dcc0.firebaseapp.com",
  projectId: "todo-with-firebase-5dcc0",
  storageBucket: "todo-with-firebase-5dcc0.appspot.com",
  messagingSenderId: "57898682207",
  appId: "1:57898682207:web:d7058519e0ed895ca858ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const newLocal = / /;
//auth
const auth = getAuth(app);

export { db, auth };
