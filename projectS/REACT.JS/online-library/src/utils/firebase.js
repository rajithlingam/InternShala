// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbsRieHvyv4U0AJP_NDL9BjF8fLyRNw6Y",
  authDomain: "online-library-rl.firebaseapp.com",
  projectId: "online-library-rl",
  storageBucket: "online-library-rl.firebasestorage.app",
  messagingSenderId: "1013918616433",
  appId: "1:1013918616433:web:f092f8d9fc02a5787404d0",
  measurementId: "G-Y9WY4KMS9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);