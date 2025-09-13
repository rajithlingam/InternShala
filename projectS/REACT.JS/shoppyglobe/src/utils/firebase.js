// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA49gCLqBBrEdNDKUkN94QlxdQ3TjilbXE",
  authDomain: "shoppyglobe-rl.firebaseapp.com",
  projectId: "shoppyglobe-rl",
  storageBucket: "shoppyglobe-rl.firebasestorage.app",
  messagingSenderId: "918138546213",
  appId: "1:918138546213:web:869e89975a4ecfc29077cc",
  measurementId: "G-EQD1VT6XSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);