
import firebase from "firebase/app";
require('firebase/auth');
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBJ8-kSWtcsolAmhtHZ1eTDZhov35Lo-hk",
  authDomain: "urbanhive-co-matcher.firebaseapp.com",
  projectId: "urbanhive-co-matcher",
  storageBucket: "urbanhive-co-matcher.appspot.com",
  messagingSenderId: "618033481332",
  appId: "1:618033481332:web:345cbc75a388cfd5853321"
};


// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();

export const storage = firebase.storage();

export const auth = firebase.auth();

export const static_img = 'https://firebasestorage.googleapis.com/v0/b/urbanhive-co-matcher.appspot.com/o/profile_images%2Fprofile.jpg?alt=media&token=c4980749-6474-4c77-9682-bc28b0742e30';






