// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-2a6a5.firebaseapp.com",
  projectId: "blog-app-2a6a5",
  storageBucket: "blog-app-2a6a5.appspot.com",
  messagingSenderId: "13573882842",
  appId: "1:13573882842:web:4b8f74064b82f20449f6e3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
