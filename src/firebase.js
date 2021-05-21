import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCrUsUzu6xacfgnsmjDCMBpf0",
    authDomain: "code-snippets-76.firebaseapp.com",
    projectId: "code-snippets-76",
    storageBucket: "code-snippets-76.appspot.com",
    messagingSenderId: "8642003176872",
    appId: "1:864200316982:web:9dea7407bb7t87d40b21de097"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { storage };
export default db;
