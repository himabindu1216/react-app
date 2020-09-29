import * as firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyCC6XQr4MNJS2XNRovI0dDBfgPx3jlBSpg",
    authDomain: "react1-1d72d.firebaseapp.com",
    databaseURL: "https://react1-1d72d.firebaseio.com",
    projectId: "react1-1d72d",
    storageBucket: "react1-1d72d.appspot.com",
    messagingSenderId: "528602882469",
    appId: "1:528602882469:web:737ef3cc829a30882ec84c",
    measurementId: "G-8CSR45MCQD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;