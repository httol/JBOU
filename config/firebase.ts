// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAswh_nykSzMNzgwZQ7qQhuxAryo5ZdnCY",
  authDomain: "tding-b145d.firebaseapp.com",
  projectId: "tding-b145d",
  storageBucket: "tding-b145d.appspot.com",
  messagingSenderId: "42702414211",
  appId: "1:42702414211:web:4f8b344edb9ea9b0a856b6",
  measurementId: "G-5SM2EZ6F0C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);
export default app;
