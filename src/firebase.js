import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDb2Phl4ti8lHbA0z67OSWXN7K2gPnLRgw",
    authDomain: "fir-63b5b.firebaseapp.com",
    projectId: "fir-63b5b",
    storageBucket: "fir-63b5b.appspot.com",
    messagingSenderId: "442358331569",
    appId: "1:442358331569:web:f4591f890b423278fb8a90",
    measurementId: "G-PSLC8B95G8"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;