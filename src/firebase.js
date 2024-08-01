import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqB1uIKV1Su1UbrDbsh0dlTXTjlXGBaUc",
  authDomain: "zeecode-78a6a.firebaseapp.com",
  projectId: "zeecode-78a6a",
  storageBucket: "zeecode-78a6a.appspot.com",
  messagingSenderId: "1027508118529",
  appId: "1:1027508118529:web:be7f3a79425fa8cde84c00",
  measurementId: "G-8NTN5YWNHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
