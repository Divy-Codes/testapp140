// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_YbYBmynMvkuFqCv38fghURKJ0ehFfVE",
  authDomain: "test-app-140.firebaseapp.com",
  projectId: "test-app-140",
  storageBucket: "test-app-140.appspot.com",
  messagingSenderId: "989299614429",
  appId: "1:989299614429:web:bdd30db56facb2b54f3134",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
