import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyArAgYVjEP4jTk-sATS6j7YVykgo5CZVpE",
    authDomain: "proj67-967fe.firebaseapp.com",
    projectId: "proj67-967fe",
    storageBucket: "proj67-967fe.appspot.com",
    messagingSenderId: "27254228238",
    appId: "1:27254228238:web:25e16747ee5c518063835f",
    measurementId: "G-FKL25G04VZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();