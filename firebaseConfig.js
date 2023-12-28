import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCHK4fn72_xmSK1UCDMFSyBxhZKIdIQjPo",
    authDomain: "tea-care.firebaseapp.com",
    projectId: "tea-care",
    storageBucket: "tea-care.appspot.com",
    messagingSenderId: "623559225952",
    appId: "1:623559225952:web:b02f1636a2ca26f834c905",
    measurementId: "G-WF3ZJ6FQRY"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

