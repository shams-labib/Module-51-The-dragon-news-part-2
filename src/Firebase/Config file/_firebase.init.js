// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxah92e7Yvn5DKETdCFH9B1VGkWakuTC8",
  authDomain: "module-51-the-dragon-news.firebaseapp.com",
  projectId: "module-51-the-dragon-news",
  storageBucket: "module-51-the-dragon-news.firebasestorage.app",
  messagingSenderId: "228688426787",
  appId: "1:228688426787:web:08eff34c9e34d63887be96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
