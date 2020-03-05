import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBeSTXWCMz7eNzLxYexMt0GwyFpucyga4A",
    authDomain: "chatapp-596c4.firebaseapp.com",
    databaseURL: "https://chatapp-596c4.firebaseio.com",
    projectId: "chatapp-596c4",
    storageBucket: "chatapp-596c4.appspot.com",
    messagingSenderId: "1043742851423",
    appId: "1:1043742851423:web:76615790e8f86a431076ea",
    measurementId: "G-4CPGCCB4DM"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;