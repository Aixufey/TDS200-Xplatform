import { initializeApp, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import {
    FirebaseStorage,
    StorageReference,
    UploadResult,
    UploadTask,
    getStorage,
    ref,
} from "firebase/storage";
import { APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID } from '@env';
import { Auth, getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID,
    measurementId: MEASUREMENTID,
};

const firebase_app: FirebaseApp = initializeApp(firebaseConfig);
const firebase_db: Firestore = getFirestore(firebase_app);
const firebase_storage: FirebaseStorage = getStorage(firebase_app);
const storageRef = ref(firebase_storage);
// const firebase_auth: Auth = getAuth(firebase_app);

export interface IFIREBASE {
    firebase_app: FirebaseApp;
    firebase_db: Firestore;
    firebase_storage: FirebaseStorage;
    storageRef: StorageReference;
    // firebase_auth: Auth
}
const FIREBASE: IFIREBASE = {
    firebase_app,
    firebase_db,
    firebase_storage,
    storageRef,
    // firebase_auth
};
export default FIREBASE;

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
