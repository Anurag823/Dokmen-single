// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUlgTgeLT3Z8CsfsXbAdZHZO-w79g-2NA",
  authDomain: "dokmen-33a67.firebaseapp.com",
  projectId: "dokmen-33a67",
  storageBucket: "dokmen-33a67.appspot.com",
  messagingSenderId: "860781127208",
  appId: "1:860781127208:web:9b1e817e026958e8d7f71d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app)