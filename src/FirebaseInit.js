// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB17ODnDolTwVCFatAB9_wYMDxr3SELA6k",
  authDomain: "buy-busy-d3e41.firebaseapp.com",
  projectId: "buy-busy-d3e41",
  storageBucket: "buy-busy-d3e41.appspot.com",
  messagingSenderId: "889780936353",
  appId: "1:889780936353:web:63cd46d12d1efeca0c1ae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);