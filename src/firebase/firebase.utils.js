import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBffFcbMge87xAu8fg9fm5oynhUHQONTWE",
    authDomain: "shop-db-5a52d.firebaseapp.com",
    databaseURL: "https://shop-db-5a52d.firebaseio.com",
    projectId: "shop-db-5a52d",
    storageBucket: "shop-db-5a52d.appspot.com",
    messagingSenderId: "217439342984",
    appId: "1:217439342984:web:73dbddd01456766d9bea3d",
    measurementId: "G-E2MGXBC5MD"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;