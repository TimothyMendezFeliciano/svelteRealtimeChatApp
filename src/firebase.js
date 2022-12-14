// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyDGUHJ8zMV3QPeg-3kTdRvoXhYQ5onhhRk",
    authDomain: "svelte-chatapp-818c3.firebaseapp.com",
    projectId: "svelte-chatapp-818c3",
    storageBucket: "svelte-chatapp-818c3.appspot.com",
    messagingSenderId: "669288717048",
    appId: "1:669288717048:web:57aea60ec7245d3df1b90d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore()
