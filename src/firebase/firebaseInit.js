import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY, 
  authDomain: "fireblogsyt-64854.firebaseapp.com",
  projectId: "fireblogsyt-64854",
  storageBucket: "fireblogsyt-64854.appspot.com",
  messagingSenderId: process.env.VUE_APP_SENDER_ID, 
  appId: "1:606661516190:web:3f01419dc3a413e0ba548f",
};

const app = initializeApp(firebaseConfig);
