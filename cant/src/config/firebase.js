// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAGPvSxCVyDYR96NKRIM6wQvR2UXzRcPxs",
  authDomain: "canteen-9c59a.firebaseapp.com",
  projectId: "canteen-9c59a",
  storageBucket: "canteen-9c59a.appspot.com",
  messagingSenderId: "597402654507",
  appId: "1:597402654507:web:ec9bec80e6594a10f9d76e",
  measurementId: "G-TNHFN6V43Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
// export const storage = getStorage(app);