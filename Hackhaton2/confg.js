
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyD2Xx2F0qN4I0Aal_wI3sl4nM5XaMqzUUE",
  authDomain: "authentication-51e52.firebaseapp.com",
  projectId: "authentication-51e52",
  storageBucket: "authentication-51e52.appspot.com",
  messagingSenderId: "741207233781",
  appId: "1:741207233781:web:06985c6083d9de193da1bc",
  measurementId: "G-P9LL9PSYRW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
