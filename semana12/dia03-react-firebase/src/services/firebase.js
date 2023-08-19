import firebase from 'firebase/app'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA--17AjMacZ3NDAakLxpLweAZhV9iCf4g",
  authDomain: "heroes-v1-frank-parra.firebaseapp.com",
  projectId: "heroes-v1-frank-parra",
  storageBucket: "heroes-v1-frank-parra.appspot.com",
  messagingSenderId: "496961116454",
  appId: "1:496961116454:web:86e9e10173bc64f51a09e7",
  measurementId: "G-GML1J8GFKK"
};

// Initialize Firebase
if (!firebase.app.lenght){
  initializeApp(firebaseConfig);
}

const auth = firebase.auth()

export {
  auth,
  firebase
}