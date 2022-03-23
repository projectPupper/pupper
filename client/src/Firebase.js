import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import firebaseConfig from './firebaseConfig.js';



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
};

export { onAuthStateChanged } ;