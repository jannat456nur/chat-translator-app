import {getApp,getApps,initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import {getFunctions} from "firebase/functions";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_5HK_-KgxaYX-rP_WFgAYxz4RC-_onSA",
  authDomain: "saas-translator-app-fa36e.firebaseapp.com",
  projectId: "saas-translator-app-fa36e",
  storageBucket: "saas-translator-app-fa36e.appspot.com",
  messagingSenderId: "552959145330",
  appId: "1:552959145330:web:73d8d30ddec3ddb96c99eb"
};

// Initialize Firebase
const app = getApps().length ? getApp():initializeApp(firebaseConfig);


const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app);

export {db,auth,functions};