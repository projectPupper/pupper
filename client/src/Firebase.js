import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebaseConfig from './firebaseConfig.js';



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(result);
      const userID = result.user.uid;

      localStorage.setItem('gName', name)
      localStorage.setItem('gEmail', email)
      localStorage.setItem('gPic', profilePic)
    })
    .catch(err => {
      console.log(err);
    })
};