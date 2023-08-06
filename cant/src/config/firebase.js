import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
export const firebaseConfig = {
  apiKey: "AIzaSyAGPvSxCVyDYR96NKRIM6wQvR2UXzRcPxs",
  authDomain: "canteen-9c59a.firebaseapp.com",
  projectId: "canteen-9c59a",
  storageBucket: "canteen-9c59a.appspot.com",
  messagingSenderId: "597402654507",
  appId: "1:597402654507:web:ec9bec80e6594a10f9d76e",
  measurementId: "G-TNHFN6V43Q"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
