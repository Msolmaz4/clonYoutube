// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDBnzXRChROmvv_EClLkHpOqsXG4VJuh-o",
  authDomain: "video-c731f.firebaseapp.com",
  projectId: "video-c731f",
  storageBucket: "video-c731f.appspot.com",
  messagingSenderId: "370746743977",
  appId: "1:370746743977:web:087a245c71b024ebf95db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app