import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCkMeTYWCKUe6-K9CSr8IaUJpjWRYx0wTM",
  authDomain: "react-firebase-auth-crud-4325b.firebaseapp.com",
  projectId: "react-firebase-auth-crud-4325b",
  storageBucket: "react-firebase-auth-crud-4325b.appspot.com",
  messagingSenderId: "1038865873476",
  appId: "1:1038865873476:web:a6b7da09e6790a2954da11"
};
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;