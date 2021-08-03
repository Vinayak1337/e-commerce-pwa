import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUDuVuSrEVw7L2fMcy8sJluYEhjOSTfvM",
    authDomain: "crwn-clothing-db-ee0e1.firebaseapp.com",
    projectId: "crwn-clothing-db-ee0e1",
    storageBucket: "crwn-clothing-db-ee0e1.appspot.com",
    messagingSenderId: "135378218301",
    appId: "1:135378218301:web:95ea3d45d132bd0c2d6954",
    measurementId: "G-WF7JMDKTJ0"
};

export const createUser = async (userAuth: firebase.User | null, additionalData?: any) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid }`);

    const snapshot = (await userRef.get());

    if (snapshot.exists) return userRef;

    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
        await userRef.set({
            displayName, email, createdAt, ...additionalData
        })
    } catch (error) {
        console.log(error);
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;