import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyAUpO6_6J1Oel3ZWUxBmRJBgL96FyQk2-w",
  authDomain: "fireblogsyt-64854.firebaseapp.com",
  projectId: "fireblogsyt-64854",
  storageBucket: "fireblogsyt-64854.appspot.com",
  messagingSenderId: "606661516190",
  appId: "1:606661516190:web:3f01419dc3a413e0ba548f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
