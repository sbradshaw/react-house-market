import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "xxxxxxxxxx.firebaseapp.com",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxx",
  appId: "xxxxxxxxxx",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
