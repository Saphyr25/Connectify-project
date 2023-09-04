import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// cette page permets de stocker et gerer les information de configurations de Firebase


const firebaseConfig = {
  apiKey: "AIzaSyBWlGKtj1iArTXSHb8lOx7xcOPUzvwa8rQ",
  authDomain: "react-connectify-90377.firebaseapp.com",
  projectId: "react-connectify-90377",
  storageBucket: "react-connectify-90377.appspot.com",
  messagingSenderId: "646360076622",
  appId: "1:646360076622:web:eeeb2784677a4944a70e1f"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app )




