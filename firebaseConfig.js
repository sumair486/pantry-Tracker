// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
    apiKey: "AIzaSyA4_NNtEZEojHBs9chIwjgfxw0dYnRHfio",
    authDomain: "pantry-app-builder.firebaseapp.com",
    projectId: "pantry-app-builder",
    storageBucket: "pantry-app-builder.appspot.com",
    messagingSenderId: "404692277085",
    appId: "1:404692277085:web:d5c361f8c59b193f5d7ab4",
    measurementId: "G-65L4M8W5YE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
