// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAThQJRG8Kvq_EAaq9HqET4Nxb7Y20ZIVs",
  authDomain: "automizeco-fdd26.firebaseapp.com",
  projectId: "automizeco-fdd26",
  storageBucket: "automizeco-fdd26.firebasestorage.app",
  messagingSenderId: "57110254963",
  appId: "1:57110254963:web:e2e09833b34d98a7b16106",
  measurementId: "G-FPQYJRK53V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)