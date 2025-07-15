// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCt4rOtG9XM3TS-ONfhh5dzxN-xQvtR2xg",
  authDomain: "bookreview-admin.firebaseapp.com",
  projectId: "bookreview-admin",
  storageBucket: "bookreview-admin.firebasestorage.app",
  messagingSenderId: "2053834858",
  appId: "1:2053834858:web:f9e23251f13baefd826213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
