// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYykE_67WsHNo0ecNWscONsHV6yre3WlA",
    authDomain: "bus-trak-app.firebaseapp.com",
    projectId: "bus-trak-app",
    storageBucket: "bus-trak-app.appspot.com",
    messagingSenderId: "778018482922",
    appId: "1:778018482922:web:8306cd704cdf7b4163c593"
};

// Initialize Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(config);