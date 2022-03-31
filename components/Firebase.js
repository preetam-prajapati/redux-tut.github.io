import firebase from 'firebase'
import HomeContainer from './HomeContainer'
const firebaseConfig = {
    apiKey: "AIzaSyCorXP7j2WDcQuDieyaTqH4Nz-314G1ZbU",
    authDomain: "redux-tut-f4634.firebaseapp.com",
    projectId: "redux-tut-f4634",
    storageBucket: "redux-tut-f4634.appspot.com",
    messagingSenderId: "138820068503",
    appId: "1:138820068503:web:41d52a73fc48faaa6fb5d2",
    measurementId: "G-FC8GELQBMS"
  };
  firebase.intializeApp(firebaseConfig );
  const database=firebase.database();