// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCojBF0K5kxGfr8RigMEdfYIH8r5KI16uM",
    authDomain: "sparta-react-basic-a254b.firebaseapp.com",
    projectId: "sparta-react-basic-a254b",
    storageBucket: "sparta-react-basic-a254b.appspot.com",
    messagingSenderId: "948196364273",
    appId: "1:948196364273:web:7faee7796226a45665fe50",
    measurementId: "G-KEK13SEQDG"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();