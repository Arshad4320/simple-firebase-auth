// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBK0ckqBV_F7DuH8PHoaYdSOca8e0pVHOU",
  authDomain: "simple-firebase-auth-6f1bf.firebaseapp.com",
  projectId: "simple-firebase-auth-6f1bf",
  storageBucket: "simple-firebase-auth-6f1bf.firebasestorage.app",
  messagingSenderId: "704146266945",
  appId: "1:704146266945:web:73d4dfc8604392e6015fc0",
  measurementId: "G-CGWJYXENT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);