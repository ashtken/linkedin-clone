import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBVfyEnlp7rVWq8g5RdbQMU8y5nrLRNaW8",
	authDomain: "linkedin-clone-2ca35.firebaseapp.com",
	projectId: "linkedin-clone-2ca35",
	storageBucket: "linkedin-clone-2ca35.appspot.com",
	messagingSenderId: "632329255619",
	appId: "1:632329255619:web:87be1a686fa5f80c964076",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
