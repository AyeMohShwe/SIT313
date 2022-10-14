import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB_fLy_hZby4G-58QQyugbgXs3wYeRO5ik",
    authDomain: "dev-deakin-18ca8.firebaseapp.com",
    projectId: "dev-deakin-18ca8",
    storageBucket: "dev-deakin-18ca8.appspot.com",
    messagingSenderId: "925839107911",
    appId: "1:925839107911:web:aacfde33e2bd68b9ad4e62",
    measurementId: "G-XBP9HQXFF1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters ({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocFromAuth = async(userAuth, additionalInformation ={}) =>{
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }
        catch (error){
            console.log('error in creating', error.message)
        }
    }
    return userDocRef;
  }
  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  }
  export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
  }