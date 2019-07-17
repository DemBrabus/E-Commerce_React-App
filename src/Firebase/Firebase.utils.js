import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFjztHSZsOuessHVAnKQN5J_7ViJu55wI",
    authDomain: "e-com-template.firebaseapp.com",
    databaseURL: "https://e-com-template.firebaseio.com",
    projectId: "e-com-template",
    storageBucket: "",
    messagingSenderId: "342378975072",
    appId: "1:342378975072:web:f4d390b220bcc3be"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;