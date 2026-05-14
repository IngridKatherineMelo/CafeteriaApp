import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtnu9zaghEns4IE3XRBBcOBxGhhiV0p_I",
  authDomain: "cafeteriaapp-be269.firebaseapp.com",
  projectId: "cafeteriaapp-be269",
  storageBucket: "cafeteriaapp-be269.firebasestorage.app",
  messagingSenderId: "92983609513",
  appId: "1:92983609513:web:817e671922b1ad07a841b8",
  measurementId: "G-46G1SZHJWX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);