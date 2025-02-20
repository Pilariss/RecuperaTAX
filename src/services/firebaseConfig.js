import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2h16HT2SLKAh303k9ntBjwFZ5PyxnETw",
  authDomain: "registration-system-203c8.firebaseapp.com",
  projectId: "registration-system-203c8",
  storageBucket: "registration-system-203c8.firebasestorage.app",
  messagingSenderId: "81750218319",
  appId: "1:81750218319:web:956ede6567646ef088fc3a",
  measurementId: "G-XW5TD1HP7X"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };