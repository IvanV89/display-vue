import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBxwVUF5tCNpP3Ivb3SRQDPpfIWhUDhqDw",
  authDomain: "display-new.firebaseapp.com",
  databaseURL: "https://display-new.firebaseio.com",
  projectId: "display-new",
  storageBucket: "display-new.appspot.com",
  messagingSenderId: "897084397339",
  appId: "1:897084397339:web:06606809dc0980e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()