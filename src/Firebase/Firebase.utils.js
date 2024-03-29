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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;