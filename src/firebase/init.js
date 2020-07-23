 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBggG1ukLFPFJTocTHl1A5wjNgJFezijkE",
    authDomain: "vue-recipes-19bc4.firebaseapp.com",
    databaseURL: "https://vue-recipes-19bc4.firebaseio.com",
    projectId: "vue-recipes-19bc4",
    storageBucket: "vue-recipes-19bc4.appspot.com",
    messagingSenderId: "570105747369",
    appId: "1:570105747369:web:ab487721111c4420b8d6b8",
    measurementId: "G-11T9H8H3D2"
  };
  // Initialize Firebase
  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  firebase.analytics()

  // export firestore db
  export default firebaseApp.firestore();
