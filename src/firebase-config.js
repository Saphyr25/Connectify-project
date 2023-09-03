import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";



// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID ,
// };
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




