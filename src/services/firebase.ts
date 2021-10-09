import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCOBYgobbky8FvERfOG2I0aEealQfSPEnM",
    authDomain: "commerce-b74a2.firebaseapp.com",
    projectId: "commerce-b74a2",
    storageBucket: "commerce-b74a2.appspot.com",
    messagingSenderId: "517508070500",
    appId: "1:517508070500:web:0e6338aaa0e509461bb371",
    measurementId: "G-9Z8ZY8D1ZR"
};

//FIREBASE INIT
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth()

const db = getFirestore(firebaseApp);

export {firebaseApp, db, auth}

