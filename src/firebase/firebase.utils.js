import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-kiMuY7hbgtpdVTbhsF-gVRyUvAKTftk",
    authDomain: "crwn-db-112cb.firebaseapp.com",
    projectId: "crwn-db-112cb",
    storageBucket: "crwn-db-112cb.appspot.com",
    messagingSenderId: "686483442606",
    appId: "1:686483442606:web:9302f4da2c3c908189163f",
    measurementId: "G-Z260JK6FXJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;