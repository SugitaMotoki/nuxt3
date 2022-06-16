// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGtNIHTt3vlVqoDSfnG8Ay74MTfvLJQzI",
  authDomain: "nuxt-practice-sm.firebaseapp.com",
  projectId: "nuxt-practice-sm",
  storageBucket: "nuxt-practice-sm.appspot.com",
  messagingSenderId: "445729170564",
  appId: "1:445729170564:web:61a8a7b19210f89e6d0ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;