import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCrUsUzu6xacfgnIFI3I45NHsmjDCMBpf0",
    authDomain: "code-snippets-2f776.firebaseapp.com",
    projectId: "code-snippets-2f776",
    storageBucket: "code-snippets-2f776.appspot.com",
    messagingSenderId: "864200316982",
    appId: "1:864200316982:web:9dea74088e9d40b21de097"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { storage };
export default db;
