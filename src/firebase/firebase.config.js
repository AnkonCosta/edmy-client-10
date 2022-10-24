// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmRwMXxHsxFzvunXob3W1nKhaK9itNjhA",
    authDomain: "fir-auth-assignment-10.firebaseapp.com",
    projectId: "fir-auth-assignment-10",
    storageBucket: "fir-auth-assignment-10.appspot.com",
    messagingSenderId: "439328672701",
    appId: "1:439328672701:web:1a6a8cef1c367a868360d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;