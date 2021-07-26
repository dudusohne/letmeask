import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAU0PlIx1kzM3wBCs4sndZI4VSKVqx6Kas",
  authDomain: "letmeask-class.firebaseapp.com",
  databaseURL: "https://letmeask-class-default-rtdb.firebaseio.com",
  projectId: "letmeask-class",
  storageBucket: "letmeask-class.appspot.com",
  messagingSenderId: "308272614030",
  appId: "1:308272614030:web:dbe4707a38a2c395c157df",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }