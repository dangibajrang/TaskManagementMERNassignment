// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanagermern-52899.firebaseapp.com",
  projectId: "taskmanagermern-52899",
  storageBucket: "taskmanagermern-52899.firebasestorage.app",
  messagingSenderId: "857178620217",
  appId: "1:857178620217:web:16a0811da3bdf90700e8e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);