import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBqs6H2lxQVPTPMGyvFyEKFjJwwG6czcY8",
  authDomain: "pupper-7a060.firebaseapp.com",
  projectId: "pupper-7a060",
  storageBucket: "pupper-7a060.appspot.com",
  messagingSenderId: "907125137286",
  appId: "1:907125137286:web:e4fda383c5a7720f641607",
  measurementId: "G-WGHKSQXL86"
};

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

      localStorage.setItem('gName', name)
      localStorage.setItem('gEmail', email)
      localStorage.setItem('gPic', profilePic)
    })
    .catch(err => {
      console.log(err);
    })
};