import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCj7RHImY0O5E8I1BlyByjNuuERmX3O5TA",
  authDomain: "whatsapp2-16559.firebaseapp.com",
  projectId: "whatsapp2-16559",
  storageBucket: "whatsapp2-16559.appspot.com",
  messagingSenderId: "524514034587",
  appId: "1:524514034587:web:35603687436e6e9874d73e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
