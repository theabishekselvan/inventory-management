// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzPhM2XUpFeqBprobsz8Ty17s11xI4yqI",
  authDomain: "inventory-management-5cafd.firebaseapp.com",
  projectId: "inventory-management-5cafd",
  storageBucket: "inventory-management-5cafd.appspot.com",
  messagingSenderId: "161984776017",
  appId: "1:161984776017:web:a28662c79c013a163c7570",
  measurementId: "G-1S3MHS2D49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};