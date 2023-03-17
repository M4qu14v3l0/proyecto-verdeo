import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, setPersistence, browserLocalPersistence} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAeM-3nyz67J7I90AFV2XdojRChW7jMsIY",
    authDomain: "verdeo-31314.firebaseapp.com",
    projectId: "verdeo-31314",
    storageBucket: "verdeo-31314.appspot.com",
    messagingSenderId: "516439300116",
    appId: "1:516439300116:web:a27659741f19c37a2baf01",
    measurementId: "G-41LF27TSN4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
setPersistence(auth, browserLocalPersistence);