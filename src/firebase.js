import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAz0OFjgExkMGEUGSMtHEX9UQujre79ir8",
    authDomain: "clone-ee4f5.firebaseapp.com",
    databaseURL: "https://clone-ee4f5.firebaseio.com",
    projectId: "clone-ee4f5",
    storageBucket: "clone-ee4f5.appspot.com",
    messagingSenderId: "294151668345",
    appId: "1:294151668345:web:f75b046991d68d97bd4aa8",
    measurementId: "G-L2G323JQHC"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth } 