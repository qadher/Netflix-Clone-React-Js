import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBDKGtJiug8ZnOihl2Q95K1xyeyGfElByI",
    authDomain: "netflix-clone-688ed.firebaseapp.com",
    projectId: "netflix-clone-688ed",
    storageBucket: "netflix-clone-688ed.appspot.com",
    messagingSenderId: "423768884643",
    appId: "1:423768884643:web:e8cc3d9768b6cae26d4616"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;