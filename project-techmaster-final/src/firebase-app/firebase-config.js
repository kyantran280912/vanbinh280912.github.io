import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBXP3SBZl5co7LORpi8--AejcPXjiG8d1k",
    authDomain: "flowcash-811b1.firebaseapp.com",
    projectId: "flowcash-811b1",
    storageBucket: "flowcash-811b1.appspot.com",
    messagingSenderId: "54789591607",
    appId: "1:54789591607:web:9562deac7d9c43735165b2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)