import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBFCytM0C26OfePqoEY3vqS55mOLVYgQJo",
    authDomain: "clone-cd311.firebaseapp.com",
    projectId: "clone-cd311",
    storageBucket: "clone-cd311.appspot.com",
    messagingSenderId: "875344503463",
    appId: "1:875344503463:web:49eb3cdf015b0c4ce8f182",
    measurementId: "${config.measurementId}"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage};

export default app;
