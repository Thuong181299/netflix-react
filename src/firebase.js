// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqrVEPxHP7r00_XeUg0eJA0UBdtPQrIjs",
  authDomain: "movie-app-95d1f.firebaseapp.com",
  projectId: "movie-app-95d1f",
  storageBucket: "movie-app-95d1f.appspot.com",
  messagingSenderId: "42863427143",
  appId: "1:42863427143:web:41b56a736b3cc563bb7b62",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
