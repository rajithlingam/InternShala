// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHGxHQ73NUpVZLdgfwi_h4M97vhmHs5Ck",
  authDomain: "rajithlingam-pro.firebaseapp.com",
  projectId: "rajithlingam-pro",
  storageBucket: "rajithlingam-pro.firebasestorage.app",
  messagingSenderId: "73625699121",
  appId: "1:73625699121:web:a135deabf436758909a610",
  measurementId: "G-3302JV97Q5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
