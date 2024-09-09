// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUHTHpHBCn3lnbOZfGb3HqnuLNyegLi48",
  authDomain: "business-list-e47a0.firebaseapp.com",
  projectId: "business-list-e47a0",
  storageBucket: "business-list-e47a0.appspot.com",
  messagingSenderId: "79043985951",
  appId: "1:79043985951:web:e25cb169fcc288aa284b2a",
  measurementId: "G-SGBJY57HKZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
