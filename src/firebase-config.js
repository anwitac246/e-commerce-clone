// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-sz0DNOb-wmfjAn5xV2mN2W9o-gNYZEA",
  authDomain: "hitup-fc62d.firebaseapp.com",
  projectId: "hitup-fc62d",
  storageBucket: "hitup-fc62d.appspot.com",
  messagingSenderId: "340707129697",
  appId: "1:340707129697:web:cdfb9d4f0853eeaf11ad20",
  measurementId: "G-HC852NQDEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
