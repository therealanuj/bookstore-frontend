// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVHJ7SAlkdV5bG_BJRJ2WGz3dNE2jTU7g",
    authDomain: "mern-book-inventory-23af2.firebaseapp.com",
    projectId: "mern-book-inventory-23af2",
    storageBucket: "mern-book-inventory-23af2.appspot.com",
    messagingSenderId: "123526274936",
    appId: "1:123526274936:web:c484061c5c7e6feb83b28d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;